/**
 * @fileoverview Unified API route for all lead capture forms
 * Handles: waitlist signups, contact forms, newsletter subscriptions
 *
 * POST /api/leads
 */

import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"
import { LeadSchema, type LeadFormData } from "@/lib/schemas"
import { checkRateLimit, getClientIP, getRateLimitHeaders } from "@/lib/rate-limit"
import {
  waitlistConfirmationEmail,
  contactConfirmationEmail,
  internalNotificationEmail,
} from "@/lib/email-templates"

// Lazy initialize Resend to avoid build-time errors
function getResend() {
  return new Resend(process.env.RESEND_API_KEY || "")
}

// Configuration
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || "Code & Clarity <hello@codeclarity.ai>"
const NOTIFY_EMAIL = process.env.CONTACT_NOTIFY_EMAIL || "team@codeclarity.ai"

type RequestBody = LeadFormData & {
  pageUrl?: string
  referrer?: string
  userAgent?: string
  utmParams?: Record<string, string>
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const ip = getClientIP(request.headers)

    // Parse request body
    const body: RequestBody = await request.json()

    // Validate with Zod
    const parseResult = LeadSchema.safeParse(body)

    if (!parseResult.success) {
      return NextResponse.json(
        {
          success: false,
          error: "Validation failed",
          details: parseResult.error.flatten().fieldErrors,
        },
        { status: 400 }
      )
    }

    const data = parseResult.data

    // Check honeypot (spam filter)
    if ("honeypot" in data && data.honeypot) {
      // Silently accept but don't process (fool bots)
      console.log(`[Leads] Honeypot triggered from IP: ${ip}`)
      return NextResponse.json({ success: true, message: "Submitted successfully" })
    }

    // Rate limiting
    const rateLimitKey = data.formType as "contact" | "waitlist" | "newsletter"
    const rateLimit = checkRateLimit(ip, rateLimitKey)

    if (!rateLimit.allowed) {
      console.log(`[Leads] Rate limit exceeded for IP: ${ip}`)
      return NextResponse.json(
        {
          success: false,
          error: "Too many requests. Please try again later.",
        },
        {
          status: 429,
          headers: getRateLimitHeaders(rateLimit.remaining, rateLimit.resetIn),
        }
      )
    }

    // Extract common data
    const timestamp = new Date().toISOString()
    const pageUrl = body.pageUrl || request.headers.get("referer") || undefined
    const utmParams = body.utmParams

    // Log the lead (structured logging for production)
    console.log(
      JSON.stringify({
        event: "lead_received",
        type: data.formType,
        email: "email" in data ? data.email : undefined,
        source: "source" in data ? data.source : undefined,
        ip,
        timestamp,
        pageUrl,
      })
    )

    // Skip actual email sending in development without API key
    if (!process.env.RESEND_API_KEY || process.env.NODE_ENV === "development") {
      console.log(`[Leads] Development mode - skipping email send`)
      console.log(`[Leads] Would send to: ${NOTIFY_EMAIL}`)
      console.log(`[Leads] Lead data:`, data)

      // Simulate delay
      await new Promise((resolve) => setTimeout(resolve, 500))

      return NextResponse.json({
        success: true,
        message: getSuccessMessage(data.formType),
      })
    }

    // Send emails based on form type
    const emailPromises: Promise<unknown>[] = []

    // Always send internal notification
    const internalEmail = internalNotificationEmail({
      leadType: data.formType,
      email: "email" in data ? data.email : "",
      name: "name" in data ? data.name : undefined,
      company: "company" in data ? data.company : undefined,
      message: "message" in data ? data.message : undefined,
      inquiryType: "type" in data ? data.type : undefined,
      source: "source" in data ? data.source : data.formType,
      timestamp: new Date(timestamp).toLocaleString("en-US", {
        timeZone: "America/New_York",
      }),
      pageUrl,
      utmParams,
    })

    const resend = getResend()

    emailPromises.push(
      resend.emails.send({
        from: FROM_EMAIL,
        to: NOTIFY_EMAIL,
        replyTo: "email" in data ? data.email : undefined,
        subject: getInternalSubject(data),
        html: internalEmail.html,
        text: internalEmail.text,
      })
    )

    // Send user confirmation based on form type
    if (data.formType === "waitlist") {
      const confirmEmail = waitlistConfirmationEmail({
        email: data.email,
        timestamp,
        source: data.source,
      })

      emailPromises.push(
        resend.emails.send({
          from: FROM_EMAIL,
          to: data.email,
          subject: "[Code & Clarity] You're on the early access list!",
          html: confirmEmail.html,
          text: confirmEmail.text,
        })
      )
    }

    if (data.formType === "contact") {
      const confirmEmail = contactConfirmationEmail({
        name: data.name,
        inquiryType: data.type,
        timestamp,
        source: "contact",
      })

      emailPromises.push(
        resend.emails.send({
          from: FROM_EMAIL,
          to: data.email,
          subject: "[Code & Clarity] We received your message",
          html: confirmEmail.html,
          text: confirmEmail.text,
        })
      )
    }

    // Wait for all emails to send
    await Promise.all(emailPromises)

    // Log success
    console.log(
      JSON.stringify({
        event: "lead_processed",
        type: data.formType,
        email: "email" in data ? data.email : undefined,
        timestamp,
      })
    )

    return NextResponse.json({
      success: true,
      message: getSuccessMessage(data.formType),
    })
  } catch (error) {
    // Log error
    console.error(
      JSON.stringify({
        event: "lead_error",
        error: error instanceof Error ? error.message : "Unknown error",
        stack: error instanceof Error ? error.stack : undefined,
        timestamp: new Date().toISOString(),
      })
    )

    return NextResponse.json(
      {
        success: false,
        error: "Something went wrong. Please try again.",
      },
      { status: 500 }
    )
  }
}

/**
 * Get success message based on form type
 */
function getSuccessMessage(formType: string): string {
  switch (formType) {
    case "waitlist":
      return "You're on the list! Check your email for confirmation."
    case "contact":
      return "Message sent! We'll get back to you soon."
    case "newsletter":
      return "Subscribed successfully!"
    default:
      return "Submitted successfully!"
  }
}

/**
 * Get internal notification subject
 */
function getInternalSubject(data: LeadFormData): string {
  switch (data.formType) {
    case "waitlist":
      return `[Code & Clarity] New waitlist signup: ${data.email}`
    case "contact":
      return `[Code & Clarity] New ${data.type} inquiry from ${data.name}`
    case "newsletter":
      return `[Code & Clarity] New newsletter subscriber: ${data.email}`
    default:
      return `[Code & Clarity] New lead`
  }
}
