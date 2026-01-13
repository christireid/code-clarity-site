"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

/**
 * Escapes HTML special characters to prevent XSS in email templates
 */
function escapeHtml(text: string): string {
  const htmlEscapes: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  }
  return text.replace(/[&<>"']/g, (char) => htmlEscapes[char])
}

/**
 * Contact form submission data structure
 */
export interface ContactFormData {
  /** User's full name */
  name: string
  /** User's email address for replies */
  email: string
  /** Optional company or organization name */
  company?: string
  /** The inquiry message content */
  message: string
  /** Type of inquiry for routing and subject line */
  type: "general" | "enterprise" | "consulting" | "support"
}

/**
 * Newsletter subscription data structure
 */
export interface NewsletterFormData {
  /** Subscriber's email address */
  email: string
}

/**
 * Sends a contact form email using Resend API.
 * In development or when RESEND_API_KEY is missing, simulates a successful send.
 *
 * @param formData - The contact form submission data
 * @returns Promise with success status and optional data/error
 *
 * @example
 * ```ts
 * const result = await sendContactEmail({
 *   name: "John Doe",
 *   email: "john@example.com",
 *   message: "Hello, I'd like to learn more...",
 *   type: "general"
 * })
 * if (result.success) {
 *   // Show success message
 * }
 * ```
 */
export async function sendContactEmail(formData: ContactFormData) {
  try {
    // In development or when API key is not configured, simulate a successful send
    const isProd = process.env.NODE_ENV === "production"
    const hasApiKey = Boolean(process.env.RESEND_API_KEY)

    if (!isProd || !hasApiKey) {
      console.info(
        "sendContactEmail: simulated send (either non-production or missing RESEND_API_KEY)",
        formData
      )
      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 1000))
      return { success: true, data: { simulated: true } }
    }

    const typeLabels = {
      general: "General Inquiry",
      enterprise: "Enterprise",
      consulting: "Consulting",
      support: "Support",
    }

    const { data, error } = await resend.emails.send({
      from: "Code & Clarity <info@codeclarity.ai>",
      to: ["info@codeclarity.ai"],
      replyTo: formData.email,
      subject: `[${typeLabels[formData.type]}] New inquiry from ${formData.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Type:</strong> ${escapeHtml(typeLabels[formData.type])}</p>
        <p><strong>Name:</strong> ${escapeHtml(formData.name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(formData.email)}</p>
        ${formData.company ? `<p><strong>Company:</strong> ${escapeHtml(formData.company)}</p>` : ""}
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(formData.message).replace(/\n/g, "<br>")}</p>
      `,
    })

    if (error) {
      console.error("Resend error:", error)
      return { success: false, error: error.message }
    }

    return { success: true, data }
  } catch (error) {
    console.error("Send email error:", error)
    return { success: false, error: "Failed to send email" }
  }
}

/**
 * Subscribes an email to the newsletter.
 * In development or when RESEND_API_KEY is missing, simulates a successful subscription.
 *
 * @param formData - The newsletter subscription data containing the email
 * @returns Promise with success status and optional data/error
 *
 * @example
 * ```ts
 * const result = await subscribeToNewsletter({ email: "user@example.com" })
 * if (result.success) {
 *   // Show confirmation toast
 * }
 * ```
 */
export async function subscribeToNewsletter(formData: NewsletterFormData) {
  try {
    const isProd = process.env.NODE_ENV === "production"
    const hasApiKey = Boolean(process.env.RESEND_API_KEY)

    if (!isProd || !hasApiKey) {
      console.info(
        "subscribeToNewsletter: simulated subscription",
        formData.email
      )
      await new Promise((resolve) => setTimeout(resolve, 800))
      return { success: true, data: { simulated: true } }
    }

    // Add to Resend audience (if configured)
    // For now, send a notification email
    const { data, error } = await resend.emails.send({
      from: "Code & Clarity <info@codeclarity.ai>",
      to: ["info@codeclarity.ai"],
      subject: `New Newsletter Subscriber: ${formData.email}`,
      html: `
        <h2>New Newsletter Subscription</h2>
        <p><strong>Email:</strong> ${escapeHtml(formData.email)}</p>
        <p>Add this email to your newsletter list.</p>
      `,
    })

    if (error) {
      console.error("Resend error:", error)
      return { success: false, error: error.message }
    }

    return { success: true, data }
  } catch (error) {
    console.error("Newsletter subscription error:", error)
    return { success: false, error: "Failed to subscribe" }
  }
}
