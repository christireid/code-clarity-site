"use client"

import { useRef, useState, type ReactNode, type MouseEvent } from "react"
import { motion, useReducedMotion } from "framer-motion"
import { cn } from "@/lib/utils"

interface MagneticButtonProps {
  children: ReactNode
  className?: string
  strength?: number
  onClick?: () => void
  disabled?: boolean
  type?: "button" | "submit" | "reset"
  asChild?: boolean
}

export function MagneticButton({
  children,
  className,
  strength = 0.3,
  onClick,
  disabled = false,
  type = "button",
}: MagneticButtonProps) {
  const prefersReducedMotion = useReducedMotion()
  const ref = useRef<HTMLButtonElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: MouseEvent<HTMLButtonElement>) => {
    if (prefersReducedMotion || disabled) return

    const { clientX, clientY } = e
    const { left, top, width, height } = ref.current!.getBoundingClientRect()

    const x = (clientX - left - width / 2) * strength
    const y = (clientY - top - height / 2) * strength

    setPosition({ x, y })
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  return (
    <motion.button
      ref={ref}
      type={type}
      onClick={onClick}
      disabled={disabled}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 15,
        mass: 0.1,
      }}
      className={cn(
        "relative inline-flex items-center justify-center transition-colors",
        className
      )}
    >
      {children}
    </motion.button>
  )
}

export default MagneticButton
