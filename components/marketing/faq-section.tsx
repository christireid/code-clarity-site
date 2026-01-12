"use client"

import { motion, useReducedMotion } from "framer-motion"
import { Plus, Minus } from "lucide-react"
import { useState } from "react"
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/animations"

const faqs = [
  {
    question: "How quickly can we ship with Clarity Chat?",
    answer:
      "Most teams go from npm install to production in 1-2 sprints. The library handles all the hard parts—streaming, token management, accessibility—so you can focus on your product, not infrastructure.",
  },
  {
    question: "What kind of cost savings are realistic?",
    answer:
      "We've seen teams reduce token costs by 60-90% with our built-in optimizations. This includes KV-cache alignment, semantic caching, and intelligent context management. One Series B startup cut their OpenAI bill from $47K to $12K monthly.",
  },
  {
    question: "Do you support all AI providers?",
    answer:
      "Yes. OpenAI, Anthropic (Claude), Google Gemini, Mistral, Cohere, and any OpenAI-compatible API. Switch providers with one line of code—no rewrite required.",
  },
  {
    question: "Will this work with our existing React app?",
    answer:
      "Clarity Chat integrates seamlessly with any React or Next.js application. Components work with your existing styling (Tailwind, CSS-in-JS, etc.) and we provide headless hooks if you need full control.",
  },
  {
    question: "What about accessibility and compliance?",
    answer:
      "Every component is WCAG AAA compliant out of the box. Full keyboard navigation, screen reader support, and high contrast modes. We handle the accessibility edge cases of AI-generated content so you don't have to.",
  },
  {
    question: "Can we get help with implementation?",
    answer:
      "Absolutely. Beyond the library, we offer consulting services for teams that need hands-on help. From token optimization audits to full AI chat builds—we've shipped 50+ AI products and know what works.",
  },
]

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
  id,
}: {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
  id: string
}) {
  const panelId = `faq-panel-${id}`

  return (
    <div className="border-b border-white/10">
      <button
        id={`faq-button-${id}`}
        onClick={onToggle}
        className="w-full py-6 flex items-center justify-between text-left group"
        aria-expanded={isOpen}
        aria-controls={panelId}
      >
        <span className="font-medium text-foreground group-hover:text-primary transition-colors pr-4">
          {question}
        </span>
        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-muted flex items-center justify-center group-hover:bg-primary/20 transition-colors">
          {isOpen ? (
            <Minus className="w-4 h-4 text-primary" />
          ) : (
            <Plus className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
          )}
        </span>
      </button>
      <motion.div
        id={panelId}
        role="region"
        aria-labelledby={`faq-button-${id}`}
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
        className="overflow-hidden"
      >
        <p className="pb-6 text-muted-foreground leading-relaxed">{answer}</p>
      </motion.div>
    </div>
  )
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const prefersReducedMotion = useReducedMotion()

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <motion.div
          variants={prefersReducedMotion ? undefined : staggerContainer}
          initial={prefersReducedMotion ? undefined : "hidden"}
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mb-12"
        >
          <motion.h2
            variants={prefersReducedMotion ? undefined : fadeInUp}
            className="text-headline font-bold mb-4"
          >
            Frequently asked <span className="gradient-text">questions</span>
          </motion.h2>
          <motion.p
            variants={prefersReducedMotion ? undefined : fadeInUp}
            className="text-body-large text-muted-foreground"
          >
            Everything you need to know about Clarity Chat
          </motion.p>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          variants={prefersReducedMotion ? undefined : fadeInUp}
          initial={prefersReducedMotion ? undefined : "hidden"}
          whileInView="visible"
          viewport={viewportOnce}
          className="glass-card rounded-2xl p-6 md:p-8"
        >
          {faqs.map((faq, index) => (
            <FAQItem
              key={faq.question}
              id={String(index)}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </motion.div>

        {/* Still have questions CTA */}
        <motion.div
          variants={prefersReducedMotion ? undefined : fadeInUp}
          initial={prefersReducedMotion ? undefined : "hidden"}
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground mb-4">
            Still have questions? We&apos;re here to help.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
          >
            Contact our team
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQSection
