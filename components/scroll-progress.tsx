"use client"

import { motion, useScroll, useSpring, useReducedMotion } from "framer-motion"

export function ScrollProgress() {
  const prefersReducedMotion = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  if (prefersReducedMotion) return null

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-accent z-50 origin-left"
      style={{ scaleX }}
      aria-hidden="true"
    />
  )
}

export default ScrollProgress
