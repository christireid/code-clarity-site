"use client"

import { motion, useReducedMotion } from "framer-motion"
import {
  ArrowRight,
  MessageSquare,
  Coins,
  BookOpen,
  Code2,
  Accessibility,
  Package,
  FileCode,
  Zap,
  CheckCircle2,
} from "lucide-react"
import Link from "next/link"
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/animations"

const services = [
  {
    id: "frontend",
    icon: Code2,
    title: "Frontend Development",
    description:
      "Stop wasting sprints on UI bugs and accessibility issues. We build React applications that work the first time, so your team can focus on what matters.",
    outcomes: [
      "Ship 2x faster with battle-tested patterns",
      "Zero accessibility audit failures",
      "Code your team can actually maintain",
    ],
    gradient: "from-emerald-500 to-teal-400",
  },
  {
    id: "ai-chat",
    icon: MessageSquare,
    title: "AI Chat Applications",
    description:
      "Your AI feature is 3 months behind schedule. We've shipped 50+ AI products—let us get yours to production this quarter, not next year.",
    outcomes: [
      "Production-ready in weeks, not months",
      "Built on Clarity Chat (our library)",
      "Multi-provider from day one",
    ],
    gradient: "from-primary to-blue-400",
  },
  {
    id: "token-optimization",
    icon: Coins,
    title: "Token Optimization",
    description:
      "That $50K monthly OpenAI bill? We've helped companies cut it by 60-90%. Stop burning money on inefficient prompts and missing caches.",
    outcomes: [
      "Average 73% cost reduction",
      "ROI positive in 30 days",
      "No quality degradation",
    ],
    gradient: "from-accent to-yellow-400",
  },
  {
    id: "documentation",
    icon: BookOpen,
    title: "AI-Friendly Documentation",
    description:
      "If AI can't understand your docs, neither can your users. We optimize technical documentation for both humans and AI assistants.",
    outcomes: [
      "AI assistants that actually work",
      "Faster developer onboarding",
      "Better autocomplete suggestions",
    ],
    gradient: "from-secondary to-purple-400",
  },
  {
    id: "sdk",
    icon: Package,
    title: "SDK & API Wrappers",
    description:
      "Complex APIs kill developer adoption. We wrap them in TypeScript SDKs that developers actually want to use.",
    outcomes: [
      "10x faster integration time",
      "Type-safe by default",
      "Comprehensive examples",
    ],
    gradient: "from-rose-500 to-pink-400",
  },
  {
    id: "accessibility",
    icon: Accessibility,
    title: "Accessibility & Compliance",
    description:
      "Accessibility lawsuits are expensive. WCAG compliance is not. We audit and fix accessibility issues before they become legal problems.",
    outcomes: [
      "WCAG AAA certification",
      "Full keyboard navigation",
      "Screen reader optimization",
    ],
    gradient: "from-indigo-500 to-violet-400",
  },
]

const blogPosts = [
  {
    title: "Building Developer-Friendly AI SDKs",
    description:
      "What we learned building Clarity Chat's API. Why TypeScript-first matters and how to design for composability.",
    url: "https://dev.to/christireid",
    icon: FileCode,
  },
  {
    title: "AI-Optimized Documentation Patterns",
    description:
      "How to structure your docs so AI assistants can actually help your users. Semantic structuring that works.",
    url: "https://medium.com/@christireid",
    icon: BookOpen,
  },
]

export function ServicesPageContent() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <>
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="gradient-orb gradient-orb-secondary w-[500px] h-[500px] -top-32 -right-32 opacity-20" />
          <div className="gradient-orb gradient-orb-primary w-[400px] h-[400px] bottom-0 -left-32 opacity-20" />
        </div>
        <div className="absolute inset-0 grid-pattern opacity-30" />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.div
            variants={prefersReducedMotion ? undefined : staggerContainer}
            initial={prefersReducedMotion ? undefined : "hidden"}
            animate="visible"
          >
            <motion.span
              variants={prefersReducedMotion ? undefined : fadeInUp}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium text-primary mb-6"
            >
              <Zap className="w-4 h-4" />
              Consulting Services
            </motion.span>

            <motion.h1
              variants={prefersReducedMotion ? undefined : fadeInUp}
              className="text-display font-bold mb-6"
            >
              Stop building AI from scratch.
              <br />
              <span className="gradient-text">Ship this quarter.</span>
            </motion.h1>

            <motion.p
              variants={prefersReducedMotion ? undefined : fadeInUp}
              className="text-body-large text-muted-foreground max-w-2xl mx-auto mb-10"
            >
              We've shipped 50+ AI products. We know the edge cases, the
              gotchas, and the shortcuts that actually work. Let us help you
              ship faster and cheaper.
            </motion.p>

            <motion.div
              variants={prefersReducedMotion ? undefined : fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="#contact"
                className="cta-button px-8 py-4 rounded-xl text-lg inline-flex items-center gap-2 group"
              >
                Book a Free Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={prefersReducedMotion ? undefined : staggerContainer}
            initial={prefersReducedMotion ? undefined : "hidden"}
            whileInView="visible"
            viewport={viewportOnce}
          >
            {services.map((service) => (
              <motion.div
                key={service.title}
                id={service.id}
                variants={prefersReducedMotion ? undefined : fadeInUp}
                className="group relative scroll-mt-24"
              >
                <div className="glass-card h-full p-6 rounded-2xl flex flex-col hover:border-primary/50 transition-all">
                  <div
                    className={`w-12 h-12 rounded-xl mb-5 flex items-center justify-center bg-gradient-to-br ${service.gradient} shadow-lg`}
                  >
                    <service.icon className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-lg font-semibold mb-2">{service.title}</h3>

                  <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-2 flex-1">
                    {service.outcomes.map((outcome) => (
                      <li
                        key={outcome}
                        className="flex items-start gap-2 text-sm"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Blog Posts - Documentation Focus */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 radial-gradient-bg opacity-20" />

        <div className="relative max-w-4xl mx-auto px-6">
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
              Learn from our{" "}
              <span className="gradient-text">documentation expertise</span>
            </motion.h2>
            <motion.p
              variants={prefersReducedMotion ? undefined : fadeInUp}
              className="text-muted-foreground"
            >
              Deep dives into SDK design and AI-friendly documentation patterns.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {blogPosts.map((post) => (
              <motion.a
                key={post.title}
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={prefersReducedMotion ? undefined : fadeInUp}
                initial={prefersReducedMotion ? undefined : "hidden"}
                whileInView="visible"
                viewport={viewportOnce}
                className="glass-card p-6 rounded-2xl group hover:border-primary/50 transition-all"
              >
                <div className="feature-icon w-12 h-12 rounded-xl mb-4">
                  <post.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {post.description}
                </p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default ServicesPageContent
