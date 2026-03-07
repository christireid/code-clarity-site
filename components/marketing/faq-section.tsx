"use client"

import { motion, useReducedMotion } from "framer-motion"
import { Plus, Minus } from "lucide-react"
import { useState } from "react"
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/animations"

const faqs = [
  {
    question: "What kind of companies do you work with?",
    answer:
      "I work with teams of all sizes\u2014from startups exploring their first AI integration to established companies looking to upskill their engineering teams. If you\u2019re serious about AI adoption and want guidance from someone who actually uses the tools, we\u2019re a good fit.",
  },
  {
    question: "What does a typical engagement look like?",
    answer:
      "Every engagement starts with a discovery call to understand your needs. From there, we might do a focused strategy sprint, a multi-week training program, or an ongoing development partnership. I tailor the approach to what actually makes sense for your team.",
  },
  {
    question: "Do you only work with AI-specific projects?",
    answer:
      "While AI strategy and training is my focus, my background spans a decade of full-stack development. I bring deep expertise in frontend development, real-time applications, UI/UX design, and complex business logic\u2014all of which inform how I approach AI integration.",
  },
  {
    question: "How do your training programs work?",
    answer:
      "I design custom curriculum based on your team\u2019s skill level and goals. This can include live workshops, hands-on labs, self-paced learning materials, documentation, assessments, and ongoing mentoring. The goal is lasting competence, not just a one-day overview.",
  },
  {
    question: "What AI tools and platforms do you specialize in?",
    answer:
      "I work across the full AI landscape\u2014Claude, GPT-4, Gemini, open source models, and the tooling ecosystems around them. I stay current on the latest developments and personally use every tool I recommend.",
  },
  {
    question: "How do I get started?",
    answer:
      "Reach out through the contact form or email me at info@codeclarity.ai. We\u2019ll schedule a discovery call to discuss your goals and figure out the best path forward. No pressure, no sales pitch\u2014just a genuine conversation.",
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
            Everything you need to know about working together
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
            Still have questions? I&apos;m here to help.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
          >
            Get in touch
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQSection
