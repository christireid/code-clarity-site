"use client"

import { motion } from "framer-motion"
import { Search, Lightbulb, GraduationCap, Rocket, ArrowRight } from "lucide-react"
import Link from "next/link"

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discovery",
    description:
      "We start with a deep dive into your current tech landscape, workflows, and AI maturity. I assess where you are, where you want to go, and what's actually achievable. No assumptions—just clear-eyed analysis.",
    details: [
      "Current state assessment",
      "Goal alignment & prioritization",
      "AI readiness evaluation",
    ],
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Strategy",
    description:
      "Based on discovery, I craft a tailored AI strategy. Which tools fit your workflow. Whether to build custom or adopt existing solutions. How to integrate AI without disrupting what already works.",
    details: [
      "Tool & platform recommendations",
      "Build vs. buy analysis",
      "Implementation roadmap",
    ],
  },
  {
    number: "03",
    icon: GraduationCap,
    title: "Train & Enable",
    description:
      "Your team gets hands-on training—workshops, documentation, self-paced materials. I don't just show them the tools; I teach them the thinking. Technical skills and soft skills, because adoption is about people.",
    details: [
      "Custom workshops & labs",
      "Documentation & learning materials",
      "Ongoing mentoring & support",
    ],
  },
  {
    number: "04",
    icon: Rocket,
    title: "Build & Deploy",
    description:
      "When custom tooling is needed, I build it. Pilots, integrations, production systems—delivered with the attention to detail that comes from a decade of hands-on development.",
    details: [
      "Pilot programs & POCs",
      "Custom AI tool development",
      "Production deployment & handoff",
    ],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.4, 0.25, 1] as const,
    },
  },
}

export function ProcessSection() {
  return (
    <section id="approach" className="relative py-24 overflow-hidden bg-muted/20">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium text-primary mb-6">
            How I Work
          </span>
          <h2 className="text-headline font-bold mb-4">
            A <span className="gradient-text">Proven Process</span> for AI Adoption
          </h2>
          <p className="text-body-large text-muted-foreground max-w-2xl mx-auto">
            From discovery to deployment, every engagement follows a methodology designed to deliver real, lasting results.
          </p>
        </motion.div>

        {/* Process steps */}
        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Vertical line connector - desktop only */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-secondary/50 to-primary/50 hidden md:block" />

          <div className="space-y-8 md:space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                variants={itemVariants}
                className={`relative flex flex-col md:flex-row gap-6 md:gap-12 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } ${index > 0 ? "md:mt-16" : ""}`}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  <div className={`premium-card p-6 md:p-8 rounded-2xl ${
                    index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                  }`}>
                    {/* Step number - desktop only, mobile shows in inline header */}
                    <span className="text-5xl font-bold gradient-text opacity-30 mb-4 hidden md:block">
                      {step.number}
                    </span>

                    <h3 className="text-xl font-semibold mb-3">{step.title}</h3>

                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {step.description}
                    </p>

                    <ul className={`space-y-2 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                      {step.details.map((detail) => (
                        <li
                          key={detail}
                          className={`flex items-center gap-2 text-sm text-muted-foreground ${
                            index % 2 === 0 ? "md:flex-row-reverse" : ""
                          }`}
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Icon (center on desktop, inline on mobile) */}
                <div className="hidden md:flex absolute md:left-1/2 md:-translate-x-1/2 items-center justify-center">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg glow-primary">
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                {/* Mobile icon (inline) */}
                <div className="md:hidden flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg flex-shrink-0">
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-2xl font-bold text-muted-foreground">{step.number}</span>
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-20"
        >
          <div className="glass-card inline-block p-8 rounded-2xl">
            <h3 className="text-xl font-semibold mb-3">Ready to start your AI journey?</h3>
            <p className="text-muted-foreground text-sm mb-6 max-w-md">
              Book a discovery call and let&apos;s explore how AI can transform your team&apos;s workflow.
            </p>
            <Link
              href="#contact"
              className="cta-button inline-flex items-center gap-2 px-6 py-3 rounded-xl"
            >
              Book a Discovery Call
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ProcessSection
