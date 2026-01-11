/**
 * @fileoverview Zod validation schemas for all forms
 * Production-grade validation with sanitization
 */

import { z } from "zod"

// Email normalization and validation
const emailSchema = z
  .string()
  .email("Please enter a valid email address")
  .toLowerCase()
  .trim()
  .max(255, "Email is too long")

// Sanitize text input (remove potential XSS)
const sanitizeText = (val: string) =>
  val
    .trim()
    .replace(/<[^>]*>/g, "") // Remove HTML tags
    .replace(/[<>]/g, "") // Remove remaining angle brackets

// Check for spam patterns
const isSpammy = (text: string): boolean => {
  const spamPatterns = [
    /(.)\1{10,}/, // 10+ repeated characters
    /(https?:\/\/[^\s]+\s*){3,}/, // 3+ URLs
    /\b(viagra|cialis|casino|lottery|winner|prize|click here|buy now)\b/i,
  ]
  return spamPatterns.some((pattern) => pattern.test(text))
}

/**
 * Waitlist signup schema
 */
export const WaitlistSchema = z.object({
  email: emailSchema,
  name: z
    .string()
    .min(1, "Name is required")
    .max(100, "Name is too long")
    .transform(sanitizeText)
    .optional(),
  source: z.enum(["hero", "banner", "footer", "final-cta"]).default("banner"),
  useCase: z
    .enum(["building-ai-app", "token-optimization", "enterprise", "exploring"])
    .optional(),
  honeypot: z.string().max(0, "").optional(), // Must be empty
})

export type WaitlistFormData = z.infer<typeof WaitlistSchema>

/**
 * Contact form schema
 */
export const ContactSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name is too long")
    .transform(sanitizeText),
  email: emailSchema,
  company: z
    .string()
    .max(100, "Company name is too long")
    .transform(sanitizeText)
    .optional()
    .or(z.literal("")),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(5000, "Message is too long")
    .transform(sanitizeText)
    .refine((val) => !isSpammy(val), {
      message: "Message contains suspicious content",
    }),
  type: z.enum(["general", "enterprise", "consulting", "support"]),
  honeypot: z.string().max(0, "").optional(),
})

export type ContactFormData = z.infer<typeof ContactSchema>

/**
 * Newsletter subscription schema
 */
export const NewsletterSchema = z.object({
  email: emailSchema,
  source: z.enum(["footer", "banner"]).default("footer"),
  honeypot: z.string().max(0, "").optional(),
})

export type NewsletterFormData = z.infer<typeof NewsletterSchema>

/**
 * Generic lead schema (for unified API)
 */
export const LeadSchema = z.discriminatedUnion("formType", [
  z.object({
    formType: z.literal("waitlist"),
    ...WaitlistSchema.shape,
  }),
  z.object({
    formType: z.literal("contact"),
    ...ContactSchema.shape,
  }),
  z.object({
    formType: z.literal("newsletter"),
    ...NewsletterSchema.shape,
  }),
])

export type LeadFormData = z.infer<typeof LeadSchema>

/**
 * UTM tracking schema
 */
export const UTMSchema = z.object({
  utm_source: z.string().max(100).optional(),
  utm_medium: z.string().max(100).optional(),
  utm_campaign: z.string().max(100).optional(),
  utm_term: z.string().max(100).optional(),
  utm_content: z.string().max(100).optional(),
})

export type UTMData = z.infer<typeof UTMSchema>
