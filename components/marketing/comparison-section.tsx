"use client"

import { motion, useReducedMotion } from "framer-motion"
import { Check, X, Minus } from "lucide-react"
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/animations"

type FeatureStatus = "yes" | "no" | "partial"

interface Feature {
  name: string
  clarityChat: FeatureStatus
  vercelAI: FeatureStatus
  assistantUI: FeatureStatus
  description: string
}

const features: Feature[] = [
  {
    name: "Multi-provider support",
    clarityChat: "yes",
    vercelAI: "yes",
    assistantUI: "partial",
    description: "Switch between OpenAI, Anthropic, Google with one prop",
  },
  {
    name: "Token optimization (KV-cache)",
    clarityChat: "yes",
    vercelAI: "no",
    assistantUI: "no",
    description: "Automatic prompt structuring for optimal caching",
  },
  {
    name: "Built-in accessibility",
    clarityChat: "yes",
    vercelAI: "partial",
    assistantUI: "partial",
    description: "WCAG 2.1 AA compliant out of the box",
  },
  {
    name: "Streaming support",
    clarityChat: "yes",
    vercelAI: "yes",
    assistantUI: "yes",
    description: "Real-time token streaming with SSE",
  },
  {
    name: "TypeScript-first",
    clarityChat: "yes",
    vercelAI: "yes",
    assistantUI: "yes",
    description: "Full type safety with auto-completion",
  },
  {
    name: "Semantic caching",
    clarityChat: "yes",
    vercelAI: "no",
    assistantUI: "no",
    description: "Cache similar prompts to reduce API calls",
  },
  {
    name: "React Server Components",
    clarityChat: "yes",
    vercelAI: "yes",
    assistantUI: "partial",
    description: "Full RSC support for optimal performance",
  },
  {
    name: "Pre-built UI components",
    clarityChat: "yes",
    vercelAI: "no",
    assistantUI: "yes",
    description: "Production-ready chat UI out of the box",
  },
]

const StatusIcon = ({ status }: { status: FeatureStatus }) => {
  switch (status) {
    case "yes":
      return (
        <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
          <Check className="w-4 h-4 text-emerald-400" aria-hidden="true" />
        </div>
      )
    case "no":
      return (
        <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center">
          <X className="w-4 h-4 text-red-400" aria-hidden="true" />
        </div>
      )
    case "partial":
      return (
        <div className="w-6 h-6 rounded-full bg-yellow-500/20 flex items-center justify-center">
          <Minus className="w-4 h-4 text-yellow-400" aria-hidden="true" />
        </div>
      )
  }
}

const StatusLabel = ({ status }: { status: FeatureStatus }) => {
  switch (status) {
    case "yes":
      return <span className="sr-only">Supported</span>
    case "no":
      return <span className="sr-only">Not supported</span>
    case "partial":
      return <span className="sr-only">Partially supported</span>
  }
}

export function ComparisonSection() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section className="relative py-24 overflow-hidden" id="comparison" aria-labelledby="comparison-heading">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-15" />
      <div className="absolute inset-0 radial-gradient-bg opacity-30" />

      <div className="relative max-w-5xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 id="comparison-heading" className="text-headline font-bold mb-4">
            How we <span className="gradient-text">compare</span>
          </h2>
          <p className="text-body-large text-muted-foreground max-w-2xl mx-auto">
            See how Clarity Chat stacks up against other AI chat libraries
          </p>
        </motion.div>

        {/* Comparison table */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="premium-card rounded-2xl overflow-hidden"
        >
          {/* Table header */}
          <div className="grid grid-cols-4 gap-4 p-4 border-b border-white/10 bg-muted/30">
            <div className="text-sm font-medium text-muted-foreground">Feature</div>
            <div className="text-center">
              <span className="text-sm font-bold gradient-text">Clarity Chat</span>
            </div>
            <div className="text-center">
              <span className="text-sm font-medium text-muted-foreground">Vercel AI SDK</span>
            </div>
            <div className="text-center">
              <span className="text-sm font-medium text-muted-foreground">assistant-ui</span>
            </div>
          </div>

          {/* Table body */}
          <div className="divide-y divide-white/5">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                variants={fadeInUp}
                custom={index}
                className="grid grid-cols-4 gap-4 p-4 hover:bg-muted/20 transition-colors"
              >
                <div>
                  <p className="text-sm font-medium">{feature.name}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{feature.description}</p>
                </div>
                <div className="flex justify-center items-center">
                  <StatusIcon status={feature.clarityChat} />
                  <StatusLabel status={feature.clarityChat} />
                </div>
                <div className="flex justify-center items-center">
                  <StatusIcon status={feature.vercelAI} />
                  <StatusLabel status={feature.vercelAI} />
                </div>
                <div className="flex justify-center items-center">
                  <StatusIcon status={feature.assistantUI} />
                  <StatusLabel status={feature.assistantUI} />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Legend */}
          <div className="p-4 border-t border-white/10 bg-muted/20">
            <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <StatusIcon status="yes" />
                <span>Full support</span>
              </div>
              <div className="flex items-center gap-2">
                <StatusIcon status="partial" />
                <span>Partial support</span>
              </div>
              <div className="flex items-center gap-2">
                <StatusIcon status="no" />
                <span>Not supported</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-10"
        >
          <p className="text-sm text-muted-foreground">
            Want to see the full comparison?{" "}
            <a href="#demo" className="text-primary hover:underline">
              Try the interactive demo
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default ComparisonSection
