"use client"

import { motion } from "framer-motion"
import { Box, Layers, Palette, Percent, Code2, Shield } from "lucide-react"

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
    icon: Palette,
    title: "Customizable Themes",
    description: "Light, dark, and fully customizable theming",
  },
  {
    icon: Percent,
    title: "Token Optimization",
    description: "Built-in tools to reduce AI API costs",
  },
]

const highlights = [
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
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 radial-gradient-bg opacity-50" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
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
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
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

        {/* Highlights */}
        <motion.div
          className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {highlights.map((highlight) => (
            <motion.div
              key={highlight.title}
              variants={itemVariants}
              className="premium-card p-6 rounded-2xl flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-xl feature-icon flex items-center justify-center">
                <highlight.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="font-semibold">{highlight.title}</div>
                <div className="text-sm text-muted-foreground">
                  {highlight.description}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default TrustBlock
