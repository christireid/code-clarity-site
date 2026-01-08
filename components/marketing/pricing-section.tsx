"use client"

import { motion, useReducedMotion } from "framer-motion"
import { Check, ArrowRight, Sparkles, Clock, Shield, Zap } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const tiers = [
  {
    name: "Community",
    price: "$0",
    yearlyPrice: "$0",
    period: "forever",
    description: "Perfect for side projects and learning",
    features: [
      "Core chat components",
      "Basic hooks (useChat, useMessages)",
      "MIT licensed",
      "GitHub issues support",
      "Community Discord access",
    ],
    cta: "Get Started",
    href: "/docs/getting-started",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$299",
    yearlyPrice: "$199",
    period: "/dev/year",
    description: "For teams building production AI apps",
    features: [
      "Everything in Community",
      "Token optimization hooks",
      "Memory management components",
      "Advanced streaming hooks",
      "Multi-provider support",
      "Priority email support",
      "Private Discord channel",
      "Early access to features",
    ],
    cta: "Start 14-Day Free Trial",
    href: "/signup?plan=pro",
    highlighted: true,
    badge: "Most Popular",
  },
  {
    name: "Enterprise",
    price: "Custom",
    yearlyPrice: "Custom",
    period: "",
    description: "For organizations with specific needs",
    features: [
      "Everything in Pro",
      "Volume licensing",
      "SLA guarantee",
      "Dedicated support engineer",
      "Custom integrations",
      "On-premise deployment option",
      "Security audit reports",
      "Training sessions",
    ],
    cta: "Contact Sales",
    href: "#contact",
    highlighted: false,
  },
]

const guarantees = [
  { icon: Clock, text: "14-day free trial" },
  { icon: Shield, text: "30-day money-back guarantee" },
  { icon: Zap, text: "Cancel anytime" },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.4, 0.25, 1] as const,
    },
  },
}

export function PricingSection() {
  const [isYearly, setIsYearly] = useState(true)
  const prefersReducedMotion = useReducedMotion()

  return (
    <section className="relative py-24 overflow-hidden" id="pricing">
      {/* Background */}
      <div className="absolute inset-0 radial-gradient-bg opacity-50" />
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-headline font-bold mb-4">
            Simple, <span className="gradient-text">transparent</span> pricing
          </h2>
          <p className="text-body-large text-muted-foreground max-w-2xl mx-auto">
            Start free, scale as you grow. No hidden fees, no surprises.
          </p>
        </motion.div>

        {/* Billing toggle */}
        <motion.div
          initial={prefersReducedMotion ? undefined : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex justify-center items-center gap-4 mb-12"
        >
          <span
            className={`text-sm font-medium ${
              !isYearly ? "text-foreground" : "text-muted-foreground"
            }`}
          >
            Monthly
          </span>
          <button
            onClick={() => setIsYearly(!isYearly)}
            className={`relative w-14 h-7 rounded-full transition-colors ${
              isYearly ? "bg-primary" : "bg-muted"
            }`}
            aria-label="Toggle billing period"
          >
            <motion.div
              className="absolute top-1 w-5 h-5 rounded-full bg-white shadow-sm"
              animate={{ left: isYearly ? "calc(100% - 24px)" : "4px" }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          </button>
          <span
            className={`text-sm font-medium ${
              isYearly ? "text-foreground" : "text-muted-foreground"
            }`}
          >
            Yearly
          </span>
          {isYearly && (
            <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-medium">
              Save 33%
            </span>
          )}
        </motion.div>

        {/* Pricing cards */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 lg:gap-8"
          variants={prefersReducedMotion ? undefined : containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {tiers.map((tier) => (
            <motion.div
              key={tier.name}
              variants={prefersReducedMotion ? undefined : itemVariants}
              className={`relative ${
                tier.highlighted ? "md:-mt-4 md:mb-4" : ""
              }`}
            >
              {/* Recommended badge */}
              {tier.highlighted && tier.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <span className="badge-gradient px-4 py-1 rounded-full text-sm inline-flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    {tier.badge}
                  </span>
                </div>
              )}

              <div
                className={`h-full p-8 rounded-2xl flex flex-col ${
                  tier.highlighted
                    ? "premium-card border-primary/30 glow-primary"
                    : "glass-card"
                }`}
              >
                {/* Tier name */}
                <h3 className="text-lg font-semibold mb-2">{tier.name}</h3>

                {/* Price */}
                <div className="mb-4">
                  <span className="text-4xl font-bold">
                    {isYearly ? tier.yearlyPrice : tier.price}
                  </span>
                  <span className="text-muted-foreground">{tier.period}</span>
                  {tier.highlighted && isYearly && tier.price !== "Custom" && (
                    <span className="ml-2 text-sm text-muted-foreground line-through">
                      {tier.price}
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-6">
                  {tier.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-1">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                          tier.highlighted ? "bg-primary/20" : "bg-muted"
                        }`}
                      >
                        <Check
                          className={`w-3 h-3 ${
                            tier.highlighted
                              ? "text-primary"
                              : "text-muted-foreground"
                          }`}
                        />
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href={tier.href}
                  className={`w-full py-3 px-6 rounded-xl text-center font-medium transition-all inline-flex items-center justify-center gap-2 ${
                    tier.highlighted ? "cta-button" : "secondary-button"
                  }`}
                >
                  {tier.cta}
                  <ArrowRight className="w-4 h-4" />
                </Link>

                {/* No credit card required */}
                {tier.highlighted && (
                  <p className="text-xs text-muted-foreground text-center mt-3">
                    No credit card required
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Guarantees */}
        <motion.div
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 flex flex-wrap justify-center gap-6 md:gap-12"
        >
          {guarantees.map((guarantee) => (
            <div
              key={guarantee.text}
              className="flex items-center gap-2 text-sm text-muted-foreground"
            >
              <guarantee.icon className="w-4 h-4 text-primary" />
              <span>{guarantee.text}</span>
            </div>
          ))}
        </motion.div>

        {/* Additional info */}
        <motion.div
          initial={prefersReducedMotion ? undefined : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-muted-foreground">
            All plans include TypeScript definitions, SSR support, and our
            documentation.
            <br />
            <Link
              href="/docs/license"
              className="text-primary hover:underline"
            >
              View license details
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default PricingSection
