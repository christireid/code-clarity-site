"use client"

import { useEffect, useRef, useState } from "react"
import { useReducedMotion, useInView } from "framer-motion"

interface UseCounterOptions {
  start?: number
  end: number
  duration?: number
  delay?: number
  formatter?: (value: number) => string
}

/**
 * Hook for animating a number from start to end value
 * Respects reduced motion preferences
 */
export function useCounter({
  start = 0,
  end,
  duration = 2000,
  delay = 0,
  formatter = (v) => Math.round(v).toString(),
}: UseCounterOptions) {
  const [value, setValue] = useState(start)
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    if (!isInView) return

    // Skip animation if user prefers reduced motion
    if (prefersReducedMotion) {
      setValue(end)
      return
    }

    const startTime = performance.now() + delay
    let animationFrame: number

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime

      if (elapsed < 0) {
        animationFrame = requestAnimationFrame(animate)
        return
      }

      const progress = Math.min(elapsed / duration, 1)
      // Ease out cubic for smooth deceleration
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = start + (end - start) * eased

      setValue(current)

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [isInView, start, end, duration, delay, prefersReducedMotion])

  return { value: formatter(value), ref }
}

export default useCounter
