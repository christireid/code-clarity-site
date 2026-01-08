"use client"

import { motion, useReducedMotion } from "framer-motion"
import { Plus, Minus } from "lucide-react"
import { useState } from "react"
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/animations"

const faqs = [
  {
    question: "Can I try Clarity Chat before purchasing?",
    answer:
      "Yes! The Community tier is completely free and includes core chat components. For Pro features, we offer a 14-day free trial with no credit card required.",
  },
  {
    question: "What's included in token optimization?",
    answer:
      "Our token optimization hooks automatically compress conversation history, manage context windows, and reduce API costs by 60-90%. This includes intelligent summarization, semantic chunking, and provider-specific optimizations.",
  },
  {
    question: "Do you support all AI providers?",
    answer:
      "We support OpenAI, Anthropic (Claude), Google Gemini, Mistral, Cohere, and any OpenAI-compatible API. Multi-provider support is included in Pro and Enterprise tiers.",
  },
  {
    question: "Can I use Clarity Chat with my existing codebase?",
    answer:
      "Absolutely. Clarity Chat is designed to integrate seamlessly with any React or Next.js application. Components are fully customizable and work with your existing styling solution (Tailwind, CSS-in-JS, etc.).",
  },
  {
    question: "What kind of support do you offer?",
    answer:
      "Community users get GitHub issues support and Discord access. Pro users receive priority email support with 24-hour response times and access to a private Discord channel. Enterprise includes dedicated support engineers.",
  },
  {
    question: "Is there a money-back guarantee?",
    answer:
      "Yes, we offer a 30-day money-back guarantee for all paid plans. If you're not satisfied, we'll refund your purchase - no questions asked.",
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
