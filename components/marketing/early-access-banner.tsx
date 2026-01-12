"use client"

import { motion, useReducedMotion } from "framer-motion"
import { Rocket, ArrowRight, Check } from "lucide-react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { subscribeToNewsletter } from "@/app/actions/send-email"
import { toast } from "sonner"

const emailSchema = z.object({
  email: z.string().email("Please enter a valid email"),
})

type EmailFormData = z.infer<typeof emailSchema>

export function EarlyAccessBanner() {
  const prefersReducedMotion = useReducedMotion()
  const [isSuccess, setIsSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<EmailFormData>({
    resolver: zodResolver(emailSchema),
  })

  const onSubmit = async (data: EmailFormData) => {
    try {
      const result = await subscribeToNewsletter(data)
      if (result.success) {
        setIsSuccess(true)
        reset()
        toast.success("You're on the list!", {
          description: "We'll notify you when we launch.",
        })
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

  return (
    <section className="relative py-12 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10" />
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="relative max-w-4xl mx-auto px-6">
        <motion.div
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-2xl p-8 md:p-10"
        >
          <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-8">
            {/* Left: Content */}
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-3">
                <Rocket className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-primary">
                  Launching Soon
                </span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-2">
                Ship your AI feature this quarter
              </h3>
              <p className="text-muted-foreground">
                Get early access and start cutting token costs before your
                competitors figure out they're overpaying.
              </p>
            </div>

            {/* Right: Form */}
            <div className="flex-shrink-0 w-full md:w-auto">
              {isSuccess ? (
                <div className="flex items-center gap-3 px-6 py-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                  <Check className="w-5 h-5 text-emerald-400" />
                  <span className="text-emerald-400 font-medium">
                    You're on the list!
                  </span>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="flex flex-col sm:flex-row gap-3"
                  aria-busy={isSubmitting}
                  aria-label="Early access signup"
                >
                  <div className="flex-1">
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
                    />
                    {errors.email && (
                      <p className="text-xs text-destructive mt-1" role="alert" aria-live="polite">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="cta-button px-6 py-3 rounded-xl font-medium inline-flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Joining...
                      </>
                    ) : (
                      <>
                        Get Notified
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default EarlyAccessBanner
