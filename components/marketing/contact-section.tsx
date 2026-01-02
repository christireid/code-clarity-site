"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Send, CheckCircle, AlertCircle, Mail, MessageSquare } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    type: "general",
  })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setStatus("success")
    setFormData({ name: "", email: "", company: "", message: "", type: "general" })

    setTimeout(() => setStatus("idle"), 3000)
  }

  return (
    <section className="relative py-24 overflow-hidden" id="contact">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute inset-0 radial-gradient-bg opacity-50" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left column - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-headline font-bold mb-6">
              Let's build something{" "}
              <span className="gradient-text">amazing</span> together
            </h2>
            <p className="text-body-large text-muted-foreground mb-8">
              Whether you're looking to integrate Clarity Chat, need help with
              token optimization, or want to discuss a custom AI project - we're
              here to help.
            </p>

            {/* Contact options */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="feature-icon w-12 h-12 rounded-xl">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email us</h3>
                  <a
                    href="mailto:hello@codeclarity.ai"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    hello@codeclarity.ai
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="feature-icon w-12 h-12 rounded-xl">
                  <MessageSquare className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Join our Discord</h3>
                  <p className="text-muted-foreground">
                    Get help from the community and our team
                  </p>
                </div>
              </div>
            </div>

            {/* Response time */}
            <div className="mt-8 p-4 rounded-xl bg-muted/30 border border-white/5">
              <p className="text-sm text-muted-foreground">
                <span className="text-primary font-medium">Typical response time:</span>{" "}
                Within 24 hours for general inquiries, same-day for enterprise.
              </p>
            </div>
          </motion.div>

          {/* Right column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="premium-card p-8 rounded-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Inquiry type */}
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { value: "general", label: "General Inquiry" },
                    { value: "enterprise", label: "Enterprise" },
                    { value: "consulting", label: "Consulting" },
                    { value: "support", label: "Support" },
                  ].map((option) => (
                    <label
                      key={option.value}
                      className={`flex items-center justify-center px-4 py-2.5 rounded-lg cursor-pointer transition-all text-sm font-medium ${
                        formData.type === option.value
                          ? "bg-primary text-white"
                          : "bg-muted/50 text-muted-foreground hover:bg-muted"
                      }`}
                    >
                      <input
                        type="radio"
                        name="type"
                        value={option.value}
                        checked={formData.type === option.value}
                        onChange={(e) =>
                          setFormData({ ...formData, type: e.target.value })
                        }
                        className="sr-only"
                      />
                      {option.label}
                    </label>
                  ))}
                </div>

                {/* Name & Email */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                      className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-white/5 text-sm outline-none focus:border-primary transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                      className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-white/5 text-sm outline-none focus:border-primary transition-colors"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>

                {/* Company */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Company (optional)
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-white/5 text-sm outline-none focus:border-primary transition-colors"
                    placeholder="Your company"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-white/5 text-sm outline-none focus:border-primary transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === "loading" || status === "success"}
                  className="w-full cta-button py-4 rounded-xl text-base font-medium inline-flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {status === "loading" ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : status === "success" ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      Message sent!
                    </>
                  ) : status === "error" ? (
                    <>
                      <AlertCircle className="w-5 h-5" />
                      Error - Try again
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send message
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
