"use client"

import { motion, useReducedMotion } from "framer-motion"
import { ArrowRight, TrendingUp, Clock, DollarSign } from "lucide-react"
import Link from "next/link"
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/animations"

const caseStudies = [
  {
    company: "FinanceFlow",
    industry: "FinTech",
    logo: "FF",
    title: "Reduced AI costs by 73% while scaling to 1M users",
    description:
      "FinanceFlow integrated Clarity Chat to power their customer support AI, cutting token costs from $45K to $12K monthly.",
    metrics: [
      { icon: DollarSign, value: "$33K", label: "Monthly savings" },
      { icon: TrendingUp, value: "73%", label: "Cost reduction" },
      { icon: Clock, value: "3 weeks", label: "Time to launch" },
    ],
    color: "from-emerald-500/20 to-emerald-500/5",
    accent: "text-emerald-400",
  },
  {
    company: "HealthAI",
    industry: "Healthcare",
    logo: "HA",
    title: "Built HIPAA-compliant AI chat in 2 weeks",
    description:
      "HealthAI needed enterprise-grade security for their patient communication platform. Clarity Chat delivered.",
    metrics: [
      { icon: Clock, value: "2 weeks", label: "Development time" },
      { icon: TrendingUp, value: "100%", label: "HIPAA compliant" },
      { icon: DollarSign, value: "4x", label: "Faster than custom" },
    ],
    color: "from-blue-500/20 to-blue-500/5",
    accent: "text-blue-400",
  },
  {
    company: "EduTech Pro",
    industry: "Education",
    logo: "EP",
    title: "Scaled AI tutoring to 500K students",
    description:
      "EduTech Pro used Clarity Chat to build personalized AI tutors that adapt to each student's learning style.",
    metrics: [
      { icon: TrendingUp, value: "500K", label: "Students served" },
      { icon: Clock, value: "50ms", label: "Response time" },
      { icon: DollarSign, value: "60%", label: "Lower costs" },
    ],
    color: "from-purple-500/20 to-purple-500/5",
    accent: "text-purple-400",
  },
]

export function CaseStudiesSection() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header */}
        <motion.div
          variants={prefersReducedMotion ? undefined : staggerContainer}
          initial={prefersReducedMotion ? undefined : "hidden"}
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mb-16"
        >
          <motion.span
            variants={prefersReducedMotion ? undefined : fadeInUp}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium text-primary mb-6"
          >
            <TrendingUp className="w-4 h-4" />
            Success Stories
          </motion.span>

          <motion.h2
            variants={prefersReducedMotion ? undefined : fadeInUp}
            className="text-headline font-bold mb-4"
          >
            Real results from{" "}
            <span className="gradient-text">real companies</span>
          </motion.h2>

          <motion.p
            variants={prefersReducedMotion ? undefined : fadeInUp}
            className="text-body-large text-muted-foreground max-w-2xl mx-auto"
          >
            See how teams are using Clarity Chat to build faster, scale
            efficiently, and delight their users.
          </motion.p>
        </motion.div>

        {/* Case study cards */}
        <motion.div
          variants={prefersReducedMotion ? undefined : staggerContainer}
          initial={prefersReducedMotion ? undefined : "hidden"}
          whileInView="visible"
          viewport={viewportOnce}
          className="grid lg:grid-cols-3 gap-6"
        >
          {caseStudies.map((study) => (
            <motion.div
              key={study.company}
              variants={prefersReducedMotion ? undefined : fadeInUp}
              className="group relative"
            >
              <div
                className={`h-full rounded-2xl border border-white/10 bg-gradient-to-br ${study.color} p-6 hover:border-white/20 transition-all duration-300`}
              >
                {/* Company header */}
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className={`w-12 h-12 rounded-xl bg-background/50 flex items-center justify-center font-bold ${study.accent}`}
                  >
                    {study.logo}
                  </div>
                  <div>
                    <p className="font-semibold">{study.company}</p>
                    <p className="text-sm text-muted-foreground">
                      {study.industry}
                    </p>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {study.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {study.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {study.metrics.map((metric) => (
                    <div key={metric.label} className="text-center">
                      <metric.icon
                        className={`w-5 h-5 mx-auto mb-1 ${study.accent}`}
                      />
                      <p className="font-bold text-lg">{metric.value}</p>
                      <p className="text-xs text-muted-foreground">
                        {metric.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  href="#contact"
                  className={`inline-flex items-center gap-2 text-sm font-medium ${study.accent} hover:underline`}
                >
                  Read full case study
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          variants={prefersReducedMotion ? undefined : fadeInUp}
          initial={prefersReducedMotion ? undefined : "hidden"}
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-12 text-center"
        >
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
          >
            <span>Want similar results?</span>
            <span className="font-semibold text-primary">Let&apos;s talk</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default CaseStudiesSection
