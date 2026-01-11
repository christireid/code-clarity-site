"use client"

import { motion, useReducedMotion } from "framer-motion"
import { Box, Layers, Code2, Shield } from "lucide-react"
import { useCounter } from "@/hooks/use-counter"

// Animated stat counter component
function StatCounter({
  end,
  suffix = "",
  label,
  delay = 0,
}: {
  end: number
  suffix?: string
  label: string
  delay?: number
}) {
  const { value, ref } = useCounter({
    end,
    duration: 2000,
    delay,
  })

  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
        <span ref={ref as React.RefObject<HTMLSpanElement>}>{value}</span>
        {suffix}
      </div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
  )
}

const stats = [
  { end: 200, suffix: "+", label: "React Components", delay: 0 },
  { end: 95, suffix: "+", label: "Custom Hooks", delay: 100 },
  { end: 249, suffix: "K+", label: "Lines of Code", delay: 200 },
  { end: 313, suffix: "", label: "Tests (80%+ coverage)", delay: 300 },
]

const features = [
  {
    icon: Box,
    title: "Rich Component Library",
    description: "Chat bubbles, inputs, streaming indicators, and more",
  },
  {
    icon: Layers,
    title: "Powerful Hooks",
    description: "useChat, useMessages, useStreaming, and utilities",
  },
  {
    icon: Code2,
    title: "100% TypeScript",
    description: "Fully typed with strict mode enabled",
  },
  {
    icon: Shield,
    title: "Accessibility First",
    description: "WCAG compliant components",
  },
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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.4, 0.25, 1] as const,
    },
  },
}

export function TrustBlock() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 radial-gradient-bg opacity-50" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Stats row */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-20"
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {stats.map((stat) => (
            <StatCounter
              key={stat.label}
              end={stat.end}
              suffix={stat.suffix}
              label={stat.label}
              delay={stat.delay}
            />
          ))}
        </motion.div>

        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-headline font-bold mb-4">
            The <span className="gradient-text">Complete</span> AI Chat Library
          </h2>
          <p className="text-body-large text-muted-foreground max-w-2xl mx-auto">
            Everything you need to build production-ready AI chat interfaces.
          </p>
        </motion.div>

        {/* Features grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          variants={prefersReducedMotion ? undefined : containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={prefersReducedMotion ? undefined : itemVariants}
              className="text-center p-6 rounded-2xl glass-card"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl feature-icon mb-4">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default TrustBlock
