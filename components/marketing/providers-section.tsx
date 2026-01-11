"use client"

import { motion, useReducedMotion } from "framer-motion"

const providers = [
  {
    name: "OpenAI",
    models: "GPT-4, GPT-4o, GPT-3.5",
    color: "from-emerald-400 to-emerald-600",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z" />
      </svg>
    ),
  },
  {
    name: "Anthropic",
    models: "Claude 3.5, Claude 3 Opus/Sonnet",
    color: "from-orange-400 to-amber-600",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M17.304 3.541l-5.296 16.918h-3.208l5.296-16.918h3.208zm-9.304 0l-5.296 16.918h3.208l5.296-16.918h-3.208z" />
      </svg>
    ),
  },
  {
    name: "Google",
    models: "Gemini Pro, Gemini Ultra",
    color: "from-blue-400 to-blue-600",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M12 11.807A9.002 9.002 0 0 1 10.049 2a9.942 9.942 0 0 1 1.951-.194c5.514 0 9.994 4.48 9.994 10a9.994 9.994 0 0 1-6.498 9.387A9.001 9.001 0 0 1 12 11.807z" />
        <path d="M10.049 2A9.002 9.002 0 0 0 2 11.807a9.001 9.001 0 0 0 3.496 9.387A9.994 9.994 0 0 1 1.006 12 9.942 9.942 0 0 1 10.049 2z" opacity="0.6" />
      </svg>
    ),
  },
  {
    name: "Azure",
    models: "Azure OpenAI Service",
    color: "from-sky-400 to-cyan-600",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M5.483 21.5H0L8.656 2.5h4.649L5.483 21.5zm12.69-3.09l-6.67 3.09h10.05l-3.38-3.09zm-6.67 3.09L19.5 2.5h-5.5l-8.05 15.91 5.552 3.09z" />
      </svg>
    ),
  },
]

export function ProvidersSection() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section className="relative py-16 overflow-hidden">
      <div className="relative max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm text-muted-foreground mb-2">Works with</p>
          <h3 className="text-xl font-semibold">
            All major AI providers, <span className="gradient-text">one unified API</span>
          </h3>
        </motion.div>

        {/* Provider cards */}
        <motion.div
          initial={prefersReducedMotion ? undefined : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {providers.map((provider, index) => (
            <motion.div
              key={provider.name}
              initial={prefersReducedMotion ? undefined : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group glass-card rounded-xl p-5 text-center hover:border-primary/30 transition-all"
            >
              <div
                className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${provider.color} text-white mb-3 group-hover:scale-110 transition-transform`}
              >
                {provider.icon}
              </div>
              <h4 className="font-semibold mb-1">{provider.name}</h4>
              <p className="text-xs text-muted-foreground">{provider.models}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Unified API message */}
        <motion.p
          initial={prefersReducedMotion ? undefined : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-sm text-muted-foreground mt-8"
        >
          Switch providers with a single prop change — no code refactoring needed
        </motion.p>
      </div>
    </section>
  )
}

export default ProvidersSection
