"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
import { X, Sparkles, ArrowRight, Loader2 } from "lucide-react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { toast } from "sonner"
import { subscribeToNewsletter } from "@/app/actions/send-email"

const emailSchema = z.object({
  email: z.string().email("Please enter a valid email"),
})

type EmailFormData = z.infer<typeof emailSchema>

const STORAGE_KEY = "clarity-exit-popup-dismissed"
const COOLDOWN_HOURS = 24

export function ExitIntentPopup() {
  const prefersReducedMotion = useReducedMotion()
  const [isOpen, setIsOpen] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<EmailFormData>({
    resolver: zodResolver(emailSchema),
  })

  // Check if popup was recently dismissed
  const wasDismissedRecently = useCallback(() => {
    if (typeof window === "undefined") return true
    const dismissed = localStorage.getItem(STORAGE_KEY)
    if (!dismissed) return false
    const dismissedAt = parseInt(dismissed, 10)
    const hoursSince = (Date.now() - dismissedAt) / (1000 * 60 * 60)
    return hoursSince < COOLDOWN_HOURS
  }, [])

  // Handle exit intent detection
  useEffect(() => {
    if (wasDismissedRecently()) return

    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger when mouse leaves through the top of the viewport
      if (e.clientY <= 0 && !isOpen) {
        setIsOpen(true)
      }
    }

    // Delay adding the listener to avoid triggering on page load
    const timer = setTimeout(() => {
      document.addEventListener("mouseleave", handleMouseLeave)
    }, 5000)

    return () => {
      clearTimeout(timer)
      document.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [isOpen, wasDismissedRecently])

  const handleClose = useCallback(() => {
    setIsOpen(false)
    localStorage.setItem(STORAGE_KEY, Date.now().toString())
  }, [])

  const onSubmit = async (data: EmailFormData) => {
    try {
      const result = await subscribeToNewsletter(data)
      if (result.success) {
        setIsSuccess(true)
        reset()
        toast.success("You're on the list!", {
          description: "We'll notify you when we launch.",
        })
        // Close popup after success
        setTimeout(() => {
          handleClose()
        }, 2000)
      } else {
        toast.error("Something went wrong", {
          description: result.error || "Please try again.",
        })
      }
    } catch {
      toast.error("Something went wrong", {
        description: "Please try again later.",
      })
    }
  }

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        handleClose()
      }
    }
    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [isOpen, handleClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.2 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={handleClose}
            aria-hidden="true"
          />

          {/* Popup */}
          <motion.div
            initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: prefersReducedMotion ? 0.1 : 0.3, type: "spring", damping: 25 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="exit-popup-title"
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md mx-4"
          >
            <div className="premium-card rounded-2xl p-8 relative overflow-hidden">
              {/* Decorative gradient */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent" />

              {/* Close button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 p-2 rounded-lg hover:bg-muted transition-colors"
                aria-label="Close popup"
              >
                <X className="w-5 h-5 text-muted-foreground" />
              </button>

              {/* Content */}
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                  <Sparkles className="w-8 h-8 text-primary" />
                </div>

                <h2 id="exit-popup-title" className="text-2xl font-bold mb-3">
                  Wait! Don&apos;t miss out
                </h2>

                <p className="text-muted-foreground mb-6">
                  Get notified when Clarity Chat launches. Early supporters get priority access.
                </p>

                {isSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20"
                  >
                    <Sparkles className="w-5 h-5 text-emerald-400" />
                    <span className="text-emerald-400 font-medium">You&apos;re on the list!</span>
                  </motion.div>
                ) : (
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-3"
                    aria-busy={isSubmitting}
                    aria-label="Newsletter signup"
                  >
                    <div>
                      <input
                        type="email"
                        {...register("email")}
                        placeholder="Enter your email"
                        className={`w-full px-4 py-3 rounded-xl bg-muted/50 border text-sm outline-none transition-colors ${
                          errors.email
                            ? "border-destructive focus:border-destructive"
                            : "border-white/10 focus:border-primary"
                        }`}
                        disabled={isSubmitting}
                        autoFocus
                      />
                      {errors.email && (
                        <p className="text-xs text-destructive mt-1 text-left" role="alert" aria-live="polite">
                          {errors.email.message}
                        </p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full cta-button py-3 rounded-xl font-medium inline-flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Joining...
                        </>
                      ) : (
                        <>
                          Get Early Access
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                )}

                <button
                  onClick={handleClose}
                  className="mt-4 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  No thanks, I&apos;ll wait
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default ExitIntentPopup
