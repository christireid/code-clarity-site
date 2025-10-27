"use server";

import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

// Validation schema
const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters")
    .trim(),
  email: z
    .string()
    .email("Please enter a valid email address")
    .max(255, "Email must be less than 255 characters")
    .trim()
    .toLowerCase(),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(5000, "Message must be less than 5000 characters")
    .trim(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export async function sendContactEmail(formData: ContactFormData) {
  try {
    // Validate input data
    const validationResult = contactFormSchema.safeParse(formData);
    
    if (!validationResult.success) {
      const errors = validationResult.error.errors.map((err) => err.message).join(", ");
      return { 
        success: false, 
        error: errors 
      };
    }

    const validatedData = validationResult.data;

    // In development or when API key is not configured, simulate a successful send
    const isProd = process.env.NODE_ENV === "production";
    const hasApiKey = Boolean(process.env.RESEND_API_KEY);

    if (!isProd || !hasApiKey) {
      console.info(
        "sendContactEmail: simulated send (either non-production or missing RESEND_API_KEY)",
        {
          name: validatedData.name,
          email: validatedData.email,
          message: validatedData.message.substring(0, 100) + "...",
        }
      );
      return { success: true, data: { simulated: true } };
    }

    // Sanitize HTML to prevent XSS
    const sanitizeHtml = (text: string) => {
      return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;")
        .replace(/\n/g, "<br>");
    };

    const { data, error } = await resend.emails.send({
      from: "Code & Clarity <info@codeclarity.ai>",
      to: ["info@codeclarity.ai"],
      replyTo: validatedData.email,
      subject: `New Contact Form Submission from ${validatedData.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${sanitizeHtml(validatedData.name)}</p>
        <p><strong>Email:</strong> ${sanitizeHtml(validatedData.email)}</p>
        <p><strong>Message:</strong></p>
        <p>${sanitizeHtml(validatedData.message)}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return { success: false, error: error.message };
    }

    return { success: true, data };
  } catch (error) {
    console.error("Send email error:", error);
    return { 
      success: false, 
      error: "Failed to send email. Please try again later." 
    };
  }
}
