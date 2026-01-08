"use client"

import { motion, AnimatePresence, useScroll, useReducedMotion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

export function StickyMobileCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [isNearFooter, setIsNearFooter] = useState(false)
  const { scrollY } = useScroll()
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = scrollY.get()
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight

      // Show after scrolling past the hero (approx 500px)
      setIsVisible(scrollPosition > 500)

      // Hide when near the footer (last 400px)
      setIsNearFooter(scrollPosition > documentHeight - windowHeight - 400)
    }

    const unsubscribe = scrollY.on("change", handleScroll)
    return () => unsubscribe()
  }, [scrollY])

  const shouldShow = isVisible && !isNearFooter

  return (
    <AnimatePresence>
      {shouldShow && (
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={prefersReducedMotion ? { opacity: 0 } : { y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
        >
          <div className="bg-background/95 backdrop-blur-xl border-t border-white/10 px-4 py-3 safe-bottom">
            <Link
              href="#contact"
              className="cta-button w-full py-3.5 rounded-xl text-base font-medium inline-flex items-center justify-center gap-2"
            >
              Get Started Free
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default StickyMobileCTA
