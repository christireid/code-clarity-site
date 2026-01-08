"use client"

import { useEffect, useState, useRef } from "react"
import { useReducedMotion, useInView } from "framer-motion"

interface UseCounterOptions {
  end: number
  duration?: number
  delay?: number
  prefix?: string
  suffix?: string
}

/**
 * Animated counter hook that counts from 0 to a target value
 * Respects reduced motion preferences and only animates when in view
 */
export function useCounter({
  end,
  duration = 2000,
  delay = 0,
  prefix = "",
  suffix = "",
}: UseCounterOptions) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    if (!isInView || hasAnimated) return

    // Skip animation if user prefers reduced motion
    if (prefersReducedMotion) {
      setCount(end)
      setHasAnimated(true)
      return
    }

    const startTime = Date.now() + delay
    const endTime = startTime + duration

    const animate = () => {
      const now = Date.now()

      if (now < startTime) {
        requestAnimationFrame(animate)
        return
      }

      if (now >= endTime) {
        setCount(end)
        setHasAnimated(true)
        return
      }

      const progress = (now - startTime) / duration
      // Ease out cubic for smooth deceleration
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * end))

      requestAnimationFrame(animate)
    }

    requestAnimationFrame(animate)
  }, [isInView, hasAnimated, end, duration, delay, prefersReducedMotion])

  const formatted = `${prefix}${count.toLocaleString()}${suffix}`

  return { ref, count, formatted, isComplete: hasAnimated }
}

/**
 * Component wrapper for animated counters
 */
export function AnimatedCounter({
  end,
  duration = 2000,
  delay = 0,
  prefix = "",
  suffix = "",
  className = "",
}: UseCounterOptions & { className?: string }) {
  const { ref, formatted } = useCounter({ end, duration, delay, prefix, suffix })

  return (
    <span ref={ref as React.RefObject<HTMLSpanElement>} className={className}>
      {formatted}
    </span>
  )
}
