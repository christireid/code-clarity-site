import { describe, it, expect, vi, beforeEach } from "vitest"

// Mock the Resend module with a class-based mock
vi.mock("resend", () => {
  const mockSend = vi.fn().mockResolvedValue({ data: { id: "test-id" }, error: null })

  return {
    Resend: class MockResend {
      emails = {
        send: mockSend,
      }
    },
  }
})

// Import after mocking
import { sendContactEmail, subscribeToNewsletter } from "@/app/actions/send-email"
import type { ContactFormData, NewsletterFormData } from "@/app/actions/send-email"

describe("sendContactEmail", () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it("should return success for valid contact form data", async () => {
    const formData: ContactFormData = {
      name: "John Doe",
      email: "john@example.com",
      company: "Test Company",
      message: "This is a test message",
      type: "general",
    }

    const result = await sendContactEmail(formData)

    expect(result.success).toBe(true)
    expect(result.data).toBeDefined()
  })

  it("should handle all inquiry types", async () => {
    const types: ContactFormData["type"][] = ["general", "enterprise", "consulting", "support"]

    for (const type of types) {
      const formData: ContactFormData = {
        name: "Test User",
        email: "test@example.com",
        message: "Testing inquiry type",
        type,
      }

      const result = await sendContactEmail(formData)
      expect(result.success).toBe(true)
    }
  })

  it("should work without optional company field", async () => {
    const formData: ContactFormData = {
      name: "Jane Doe",
      email: "jane@example.com",
      message: "Message without company",
      type: "support",
    }

    const result = await sendContactEmail(formData)

    expect(result.success).toBe(true)
  })
})

describe("subscribeToNewsletter", () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it("should return success for valid email", async () => {
    const formData: NewsletterFormData = {
      email: "subscriber@example.com",
    }

    const result = await subscribeToNewsletter(formData)

    expect(result.success).toBe(true)
    expect(result.data).toBeDefined()
  })
})
