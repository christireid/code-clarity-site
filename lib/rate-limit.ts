/**
 * @fileoverview Simple in-memory rate limiting for form submissions
 * Production note: For high-traffic sites, use Redis (Upstash) instead
 */

interface RateLimitEntry {
  count: number
  resetAt: number
}

// In-memory store (cleared on server restart)
const rateLimitStore = new Map<string, RateLimitEntry>()

// Configuration
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000 // 1 hour
const RATE_LIMITS = {
  contact: 3, // 3 contact forms per hour per IP
  waitlist: 5, // 5 waitlist signups per hour per IP
  newsletter: 5, // 5 newsletter signups per hour per IP
  global: 20, // 20 total requests per hour per IP
}

/**
 * Get client IP from request headers
 */
export function getClientIP(headers: Headers): string {
  // Check common proxy headers
  const forwarded = headers.get("x-forwarded-for")
  if (forwarded) {
    return forwarded.split(",")[0].trim()
  }

  const realIP = headers.get("x-real-ip")
  if (realIP) {
    return realIP
  }

  // Fallback for Vercel
  const vercelIP = headers.get("x-vercel-forwarded-for")
  if (vercelIP) {
    return vercelIP.split(",")[0].trim()
  }

  return "unknown"
}

/**
 * Check if a request should be rate limited
 * @returns Object with allowed status and remaining requests
 */
export function checkRateLimit(
  ip: string,
  formType: keyof typeof RATE_LIMITS
): {
  allowed: boolean
  remaining: number
  resetIn: number
} {
  const now = Date.now()
  const key = `${ip}:${formType}`
  const globalKey = `${ip}:global`

  // Clean expired entries periodically
  if (Math.random() < 0.1) {
    cleanExpiredEntries()
  }

  // Check form-specific limit
  const entry = rateLimitStore.get(key)
  const globalEntry = rateLimitStore.get(globalKey)

  // Initialize or reset if expired
  if (!entry || entry.resetAt < now) {
    rateLimitStore.set(key, {
      count: 1,
      resetAt: now + RATE_LIMIT_WINDOW_MS,
    })
  } else {
    entry.count++
    rateLimitStore.set(key, entry)
  }

  // Update global counter
  if (!globalEntry || globalEntry.resetAt < now) {
    rateLimitStore.set(globalKey, {
      count: 1,
      resetAt: now + RATE_LIMIT_WINDOW_MS,
    })
  } else {
    globalEntry.count++
    rateLimitStore.set(globalKey, globalEntry)
  }

  const currentEntry = rateLimitStore.get(key)!
  const currentGlobalEntry = rateLimitStore.get(globalKey)!
  const limit = RATE_LIMITS[formType]
  const globalLimit = RATE_LIMITS.global

  const formAllowed = currentEntry.count <= limit
  const globalAllowed = currentGlobalEntry.count <= globalLimit
  const allowed = formAllowed && globalAllowed

  const remaining = Math.max(
    0,
    Math.min(limit - currentEntry.count, globalLimit - currentGlobalEntry.count)
  )

  const resetIn = Math.ceil((currentEntry.resetAt - now) / 1000)

  return { allowed, remaining, resetIn }
}

/**
 * Clean expired entries from the store
 */
function cleanExpiredEntries(): void {
  const now = Date.now()
  for (const [key, entry] of rateLimitStore.entries()) {
    if (entry.resetAt < now) {
      rateLimitStore.delete(key)
    }
  }
}

/**
 * Get rate limit headers for response
 */
export function getRateLimitHeaders(
  remaining: number,
  resetIn: number
): Record<string, string> {
  return {
    "X-RateLimit-Remaining": String(remaining),
    "X-RateLimit-Reset": String(Math.ceil(Date.now() / 1000) + resetIn),
    "Retry-After": String(resetIn),
  }
}
