/**
 * @fileoverview Analytics event tracking wrapper
 * Uses Vercel Analytics with custom event tracking
 *
 * Event Naming Convention:
 * - cta_click: Any CTA button click
 * - form_start: User begins filling a form
 * - form_submit: Form submission attempt
 * - form_error: Validation error shown
 * - lead_created: Successful lead capture
 */

import { track } from "@vercel/analytics"

// Helper to remove undefined values from objects
function cleanProps<T extends object>(obj: T): Record<string, string | number | boolean | null> {
  return Object.fromEntries(
    Object.entries(obj).filter(([, v]) => v !== undefined)
  ) as Record<string, string | number | boolean | null>
}

// Event property types
interface CTAClickProps {
  cta_id: string
  label: string
  page: string
  section: string
  destination?: string
}

interface FormSubmitProps {
  form_id: string
  page: string
  section: string
  success: boolean
  error_code?: string
}

interface LeadCreatedProps {
  lead_type: "waitlist" | "contact" | "newsletter"
  source_cta: string
  page: string
  inquiry_type?: string
}

interface FormStartProps {
  form_id: string
  page: string
  field: string
}

interface FormErrorProps {
  form_id: string
  page: string
  field: string
  error_type: string
}

interface ExternalLinkClickProps {
  destination: string
  label: string
  page: string
}

/**
 * Track CTA button clicks
 */
export function trackCTAClick(props: CTAClickProps): void {
  try {
    track("cta_click", cleanProps(props))
  } catch {
    // Silently fail in development or if analytics unavailable
    if (process.env.NODE_ENV === "development") {
      console.info("[Analytics] cta_click:", props)
    }
  }
}

/**
 * Track form submissions
 */
export function trackFormSubmit(props: FormSubmitProps): void {
  try {
    track("form_submit", cleanProps(props))
  } catch {
    if (process.env.NODE_ENV === "development") {
      console.info("[Analytics] form_submit:", props)
    }
  }
}

/**
 * Track successful lead creation
 */
export function trackLeadCreated(props: LeadCreatedProps): void {
  try {
    track("lead_created", cleanProps(props))
  } catch {
    if (process.env.NODE_ENV === "development") {
      console.info("[Analytics] lead_created:", props)
    }
  }
}

/**
 * Track form start (first interaction)
 */
export function trackFormStart(props: FormStartProps): void {
  try {
    track("form_start", cleanProps(props))
  } catch {
    if (process.env.NODE_ENV === "development") {
      console.info("[Analytics] form_start:", props)
    }
  }
}

/**
 * Track form validation errors
 */
export function trackFormError(props: FormErrorProps): void {
  try {
    track("form_error", cleanProps(props))
  } catch {
    if (process.env.NODE_ENV === "development") {
      console.info("[Analytics] form_error:", props)
    }
  }
}

/**
 * Track external link clicks
 */
export function trackExternalLinkClick(props: ExternalLinkClickProps): void {
  try {
    track("external_link_click", cleanProps(props))
  } catch {
    if (process.env.NODE_ENV === "development") {
      console.info("[Analytics] external_link_click:", props)
    }
  }
}

/**
 * React hook for tracking CTA clicks with data attributes
 * Usage: <button onClick={handleClick} data-cta-id="hero-waitlist" data-cta-label="Get Early Access">
 */
export function createCTAClickHandler(page: string, section: string) {
  return (event: React.MouseEvent<HTMLElement>) => {
    const target = event.currentTarget
    const ctaId = target.dataset.ctaId
    const label = target.dataset.ctaLabel || target.textContent || ""
    const destination = target.dataset.ctaDestination

    if (ctaId) {
      trackCTAClick({
        cta_id: ctaId,
        label,
        page,
        section,
        destination,
      })
    }
  }
}
