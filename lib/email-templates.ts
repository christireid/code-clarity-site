/**
 * @fileoverview Email templates for Resend
 * Clean, brand-aligned HTML emails with text fallbacks
 */

interface BaseEmailProps {
  recipientName?: string
  timestamp: string
  source: string
  pageUrl?: string
}

interface WaitlistConfirmationProps extends BaseEmailProps {
  email: string
}

interface ContactConfirmationProps extends BaseEmailProps {
  name: string
  inquiryType: string
}

interface InternalNotificationProps extends BaseEmailProps {
  leadType: "waitlist" | "contact" | "newsletter"
  email: string
  name?: string
  company?: string
  message?: string
  inquiryType?: string
  userAgent?: string
  referrer?: string
  utmParams?: Record<string, string>
}

// Brand colors
const BRAND = {
  primary: "#4285f4", // Clarity Blue
  secondary: "#c084fc", // Insight Purple
  background: "#0a0a0a",
  cardBg: "#141414",
  text: "#fafafa",
  textMuted: "#a3a3a3",
  border: "#262626",
}

/**
 * Common email wrapper with brand styling
 */
function emailWrapper(content: string, preheader: string): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="color-scheme" content="dark">
  <meta name="supported-color-schemes" content="dark">
  <title>Code & Clarity</title>
  <!--[if mso]>
  <style>
    table { border-collapse: collapse; }
    td { padding: 0; }
  </style>
  <![endif]-->
</head>
<body style="margin: 0; padding: 0; background-color: ${BRAND.background}; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
  <!-- Preheader text (hidden) -->
  <div style="display: none; max-height: 0; overflow: hidden;">
    ${preheader}
    &nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;
  </div>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color: ${BRAND.background};">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px;">
          <!-- Logo -->
          <tr>
            <td align="center" style="padding-bottom: 32px;">
              <span style="font-size: 24px; font-weight: 700; color: ${BRAND.text};">
                Code<span style="color: ${BRAND.primary};">&</span>Clarity
              </span>
            </td>
          </tr>

          <!-- Main Content -->
          <tr>
            <td style="background-color: ${BRAND.cardBg}; border-radius: 12px; border: 1px solid ${BRAND.border}; padding: 40px;">
              ${content}
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td align="center" style="padding-top: 32px;">
              <p style="margin: 0; font-size: 14px; color: ${BRAND.textMuted};">
                © ${new Date().getFullYear()} Code & Clarity. All rights reserved.
              </p>
              <p style="margin: 8px 0 0; font-size: 14px; color: ${BRAND.textMuted};">
                <a href="https://codeclarity.ai" style="color: ${BRAND.primary}; text-decoration: none;">codeclarity.ai</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`.trim()
}

/**
 * Waitlist confirmation email (sent to user)
 */
export function waitlistConfirmationEmail(
  _props: WaitlistConfirmationProps
): { html: string; text: string } {
  const content = `
    <h1 style="margin: 0 0 16px; font-size: 28px; font-weight: 700; color: ${BRAND.text};">
      You're on the list! 🎉
    </h1>
    <p style="margin: 0 0 24px; font-size: 16px; line-height: 1.6; color: ${BRAND.textMuted};">
      Thanks for joining the Clarity Chat early access list. You'll be among the first to know when we launch.
    </p>

    <div style="background: linear-gradient(135deg, ${BRAND.primary}22, ${BRAND.secondary}22); border-radius: 8px; padding: 24px; margin-bottom: 24px;">
      <h2 style="margin: 0 0 12px; font-size: 16px; font-weight: 600; color: ${BRAND.text};">
        What's next?
      </h2>
      <ul style="margin: 0; padding-left: 20px; color: ${BRAND.textMuted}; font-size: 14px; line-height: 1.8;">
        <li>Early access notification when we launch</li>
        <li>Exclusive updates on new features</li>
        <li>Direct access to our founding team</li>
      </ul>
    </div>

    <p style="margin: 0 0 24px; font-size: 14px; color: ${BRAND.textMuted};">
      In the meantime, check out our docs and GitHub:
    </p>

    <table role="presentation" cellpadding="0" cellspacing="0">
      <tr>
        <td style="padding-right: 12px;">
          <a href="https://github.com/christireid/Clarity-ai-chat-components" style="display: inline-block; padding: 12px 24px; background: linear-gradient(135deg, ${BRAND.primary}, ${BRAND.secondary}); color: white; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 14px;">
            View on GitHub
          </a>
        </td>
        <td>
          <a href="https://codeclarity.ai" style="display: inline-block; padding: 12px 24px; background: transparent; color: ${BRAND.text}; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 14px; border: 1px solid ${BRAND.border};">
            Visit Website
          </a>
        </td>
      </tr>
    </table>
  `

  const text = `
You're on the list!

Thanks for joining the Clarity Chat early access list. You'll be among the first to know when we launch.

What's next?
- Early access notification when we launch
- Exclusive updates on new features
- Direct access to our founding team

In the meantime, check out:
- GitHub: https://github.com/christireid/Clarity-ai-chat-components
- Website: https://codeclarity.ai

© ${new Date().getFullYear()} Code & Clarity
  `.trim()

  return {
    html: emailWrapper(
      content,
      "You're on the Clarity Chat early access list!"
    ),
    text,
  }
}

/**
 * Contact form confirmation email (sent to user)
 */
export function contactConfirmationEmail(
  props: ContactConfirmationProps
): { html: string; text: string } {
  const inquiryLabels: Record<string, string> = {
    general: "General Inquiry",
    enterprise: "Enterprise/Large Scale",
    consulting: "Consulting Project",
    support: "Technical Support",
  }

  const content = `
    <h1 style="margin: 0 0 16px; font-size: 28px; font-weight: 700; color: ${BRAND.text};">
      We received your message
    </h1>
    <p style="margin: 0 0 24px; font-size: 16px; line-height: 1.6; color: ${BRAND.textMuted};">
      Hi ${props.name}, thanks for reaching out! We'll review your ${inquiryLabels[props.inquiryType] || "inquiry"} and get back to you shortly.
    </p>

    <div style="background: ${BRAND.background}; border-radius: 8px; padding: 20px; margin-bottom: 24px; border: 1px solid ${BRAND.border};">
      <p style="margin: 0; font-size: 14px; color: ${BRAND.textMuted};">
        <strong style="color: ${BRAND.text};">Expected response time:</strong><br>
        ${props.inquiryType === "enterprise" ? "Same business day" : "Within 24-48 hours"}
      </p>
    </div>

    <p style="margin: 0; font-size: 14px; color: ${BRAND.textMuted};">
      Need immediate assistance? Email us directly at
      <a href="mailto:hello@codeclarity.ai" style="color: ${BRAND.primary}; text-decoration: none;">hello@codeclarity.ai</a>
    </p>
  `

  const text = `
We received your message

Hi ${props.name}, thanks for reaching out! We'll review your ${inquiryLabels[props.inquiryType] || "inquiry"} and get back to you shortly.

Expected response time: ${props.inquiryType === "enterprise" ? "Same business day" : "Within 24-48 hours"}

Need immediate assistance? Email us directly at hello@codeclarity.ai

© ${new Date().getFullYear()} Code & Clarity
  `.trim()

  return {
    html: emailWrapper(content, `We received your ${props.inquiryType} inquiry`),
    text,
  }
}

/**
 * Internal notification email (sent to team)
 */
export function internalNotificationEmail(
  props: InternalNotificationProps
): { html: string; text: string } {
  const leadTypeLabels = {
    waitlist: "🚀 New Waitlist Signup",
    contact: "📩 New Contact Form Submission",
    newsletter: "📬 New Newsletter Subscription",
  }

  const utmSection =
    props.utmParams && Object.keys(props.utmParams).length > 0
      ? `
    <tr>
      <td style="padding: 12px 0; border-top: 1px solid ${BRAND.border};">
        <strong style="color: ${BRAND.textMuted}; font-size: 12px; text-transform: uppercase;">UTM Parameters</strong>
        <p style="margin: 8px 0 0; color: ${BRAND.text}; font-size: 14px;">
          ${Object.entries(props.utmParams)
            .map(([k, v]) => `${k}: ${v}`)
            .join("<br>")}
        </p>
      </td>
    </tr>
  `
      : ""

  const content = `
    <h1 style="margin: 0 0 24px; font-size: 24px; font-weight: 700; color: ${BRAND.text};">
      ${leadTypeLabels[props.leadType]}
    </h1>

    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border: 1px solid ${BRAND.border}; border-radius: 8px; overflow: hidden;">
      <tr>
        <td style="padding: 16px; background: ${BRAND.background};">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td style="padding: 12px 0;">
                <strong style="color: ${BRAND.textMuted}; font-size: 12px; text-transform: uppercase;">Email</strong>
                <p style="margin: 8px 0 0; color: ${BRAND.primary}; font-size: 16px;">
                  <a href="mailto:${props.email}" style="color: ${BRAND.primary}; text-decoration: none;">${props.email}</a>
                </p>
              </td>
            </tr>
            ${
              props.name
                ? `
            <tr>
              <td style="padding: 12px 0; border-top: 1px solid ${BRAND.border};">
                <strong style="color: ${BRAND.textMuted}; font-size: 12px; text-transform: uppercase;">Name</strong>
                <p style="margin: 8px 0 0; color: ${BRAND.text}; font-size: 14px;">${props.name}</p>
              </td>
            </tr>
            `
                : ""
            }
            ${
              props.company
                ? `
            <tr>
              <td style="padding: 12px 0; border-top: 1px solid ${BRAND.border};">
                <strong style="color: ${BRAND.textMuted}; font-size: 12px; text-transform: uppercase;">Company</strong>
                <p style="margin: 8px 0 0; color: ${BRAND.text}; font-size: 14px;">${props.company}</p>
              </td>
            </tr>
            `
                : ""
            }
            ${
              props.inquiryType
                ? `
            <tr>
              <td style="padding: 12px 0; border-top: 1px solid ${BRAND.border};">
                <strong style="color: ${BRAND.textMuted}; font-size: 12px; text-transform: uppercase;">Inquiry Type</strong>
                <p style="margin: 8px 0 0; color: ${BRAND.text}; font-size: 14px;">${props.inquiryType}</p>
              </td>
            </tr>
            `
                : ""
            }
            ${
              props.message
                ? `
            <tr>
              <td style="padding: 12px 0; border-top: 1px solid ${BRAND.border};">
                <strong style="color: ${BRAND.textMuted}; font-size: 12px; text-transform: uppercase;">Message</strong>
                <p style="margin: 8px 0 0; color: ${BRAND.text}; font-size: 14px; white-space: pre-wrap;">${props.message}</p>
              </td>
            </tr>
            `
                : ""
            }
            <tr>
              <td style="padding: 12px 0; border-top: 1px solid ${BRAND.border};">
                <strong style="color: ${BRAND.textMuted}; font-size: 12px; text-transform: uppercase;">Source</strong>
                <p style="margin: 8px 0 0; color: ${BRAND.text}; font-size: 14px;">${props.source}</p>
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-top: 1px solid ${BRAND.border};">
                <strong style="color: ${BRAND.textMuted}; font-size: 12px; text-transform: uppercase;">Timestamp</strong>
                <p style="margin: 8px 0 0; color: ${BRAND.text}; font-size: 14px;">${props.timestamp}</p>
              </td>
            </tr>
            ${
              props.pageUrl
                ? `
            <tr>
              <td style="padding: 12px 0; border-top: 1px solid ${BRAND.border};">
                <strong style="color: ${BRAND.textMuted}; font-size: 12px; text-transform: uppercase;">Page URL</strong>
                <p style="margin: 8px 0 0; color: ${BRAND.text}; font-size: 14px;">${props.pageUrl}</p>
              </td>
            </tr>
            `
                : ""
            }
            ${utmSection}
          </table>
        </td>
      </tr>
    </table>

    <p style="margin: 24px 0 0; font-size: 12px; color: ${BRAND.textMuted};">
      Reply directly to this email to respond to the lead.
    </p>
  `

  const text = `
${leadTypeLabels[props.leadType]}

Email: ${props.email}
${props.name ? `Name: ${props.name}` : ""}
${props.company ? `Company: ${props.company}` : ""}
${props.inquiryType ? `Inquiry Type: ${props.inquiryType}` : ""}
${props.message ? `Message: ${props.message}` : ""}
Source: ${props.source}
Timestamp: ${props.timestamp}
${props.pageUrl ? `Page URL: ${props.pageUrl}` : ""}
${
  props.utmParams
    ? `UTM: ${Object.entries(props.utmParams)
        .map(([k, v]) => `${k}=${v}`)
        .join(", ")}`
    : ""
}
  `.trim()

  return {
    html: emailWrapper(
      content,
      `New ${props.leadType} from ${props.email}`
    ),
    text,
  }
}
