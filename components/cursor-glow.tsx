"use client"

import { useEffect, useState } from "react"
import { motion, useReducedMotion } from "framer-motion"

/**
 * Premium cursor glow effect that follows mouse movement
 * Adds a subtle, branded glow around the cursor on desktop
 */
export function CursorGlow() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    // Only show on desktop devices with pointer
    const hasPointer = window.matchMedia("(pointer: fine)").matches
    if (!hasPointer || prefersReducedMotion) return

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    window.addEventListener("mousemove", handleMouseMove)
    document.body.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      document.body.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [prefersReducedMotion])

  if (prefersReducedMotion) return null

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-30 hidden md:block"
      animate={{
        opacity: isVisible ? 1 : 0,
      }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, hsla(200, 100%, 65%, 0.06) 0%, hsla(12, 90%, 55%, 0.03) 40%, transparent 70%)",
          transform: "translate(-50%, -50%)",
        }}
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
          mass: 0.1,
        }}
      />
    </motion.div>
  )
}

export default CursorGlow
