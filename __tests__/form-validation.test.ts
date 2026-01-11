import { describe, it, expect } from "vitest"
import { z } from "zod"

// Contact form schema (matching the one in contact-section.tsx)
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
  type: z.enum(["general", "enterprise", "consulting", "support"]),
})

// Newsletter schema (matching the one in footer.tsx)
const newsletterSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
})

describe("Contact Form Schema", () => {
  describe("name validation", () => {
    it("should reject names shorter than 2 characters", () => {
      const result = contactSchema.safeParse({
        name: "A",
        email: "test@example.com",
        message: "This is a test message",
        type: "general",
      })

      expect(result.success).toBe(false)
      if (!result.success) {
        expect(result.error.issues[0].message).toBe("Name must be at least 2 characters")
      }
    })

    it("should accept valid names", () => {
      const result = contactSchema.safeParse({
        name: "John Doe",
        email: "test@example.com",
        message: "This is a test message",
        type: "general",
      })

      expect(result.success).toBe(true)
    })
  })

  describe("email validation", () => {
    it("should reject invalid email formats", () => {
      const invalidEmails = ["notanemail", "missing@domain", "@nodomain.com", "spaces in@email.com"]

      for (const email of invalidEmails) {
        const result = contactSchema.safeParse({
          name: "John",
          email,
          message: "This is a test message",
          type: "general",
        })

        expect(result.success).toBe(false)
      }
    })

    it("should accept valid email formats", () => {
      const validEmails = ["test@example.com", "user.name@domain.co.uk", "user+tag@gmail.com"]

      for (const email of validEmails) {
        const result = contactSchema.safeParse({
          name: "John",
          email,
          message: "This is a test message",
          type: "general",
        })

        expect(result.success).toBe(true)
      }
    })
  })

  describe("message validation", () => {
    it("should reject messages shorter than 10 characters", () => {
      const result = contactSchema.safeParse({
        name: "John",
        email: "test@example.com",
        message: "Short",
        type: "general",
      })

      expect(result.success).toBe(false)
      if (!result.success) {
        expect(result.error.issues[0].message).toBe("Message must be at least 10 characters")
      }
    })

    it("should accept messages with 10+ characters", () => {
      const result = contactSchema.safeParse({
        name: "John",
        email: "test@example.com",
        message: "This is a valid message",
        type: "general",
      })

      expect(result.success).toBe(true)
    })
  })

  describe("inquiry type validation", () => {
    it("should accept all valid inquiry types", () => {
      const types = ["general", "enterprise", "consulting", "support"] as const

      for (const type of types) {
        const result = contactSchema.safeParse({
          name: "John",
          email: "test@example.com",
          message: "This is a test message",
          type,
        })

        expect(result.success).toBe(true)
      }
    })

    it("should reject invalid inquiry types", () => {
      const result = contactSchema.safeParse({
        name: "John",
        email: "test@example.com",
        message: "This is a test message",
        type: "invalid",
      })

      expect(result.success).toBe(false)
    })
  })

  describe("company field", () => {
    it("should be optional", () => {
      const result = contactSchema.safeParse({
        name: "John",
        email: "test@example.com",
        message: "This is a test message",
        type: "general",
      })

      expect(result.success).toBe(true)
    })

    it("should accept company when provided", () => {
      const result = contactSchema.safeParse({
        name: "John",
        email: "test@example.com",
        company: "Acme Inc",
        message: "This is a test message",
        type: "enterprise",
      })

      expect(result.success).toBe(true)
      if (result.success) {
        expect(result.data.company).toBe("Acme Inc")
      }
    })
  })
})

describe("Newsletter Schema", () => {
  it("should reject invalid emails", () => {
    const result = newsletterSchema.safeParse({
      email: "not-an-email",
    })

    expect(result.success).toBe(false)
  })

  it("should accept valid emails", () => {
    const result = newsletterSchema.safeParse({
      email: "newsletter@example.com",
    })

    expect(result.success).toBe(true)
  })
})
