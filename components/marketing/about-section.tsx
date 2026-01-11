"use client"

import { motion, useReducedMotion } from "framer-motion"
import { Code2, Sparkles, Users, Zap } from "lucide-react"
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/animations"

const highlights = [
  {
    icon: Code2,
    stat: "9+",
    label: "Years of AI & Frontend Experience",
  },
  {
    icon: Sparkles,
    stat: "50+",
    label: "AI Products Shipped",
  },
  {
    icon: Users,
    stat: "100K+",
    label: "Developers Reached",
  },
  {
    icon: Zap,
    stat: "60-90%",
    label: "Typical Token Savings",
  },
]

export function AboutSection() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 radial-gradient-bg opacity-30" />

      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          variants={prefersReducedMotion ? undefined : staggerContainer}
          initial={prefersReducedMotion ? undefined : "hidden"}
          whileInView="visible"
          viewport={viewportOnce}
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* Left: Story */}
          <motion.div variants={prefersReducedMotion ? undefined : fadeInUp}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium text-primary mb-6">
              About Code & Clarity
            </span>
            <h2 className="text-headline font-bold mb-6">
              Built by engineers who've
              <br />
              <span className="gradient-text">shipped AI at scale</span>
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Code & Clarity was founded on a simple observation: building
                great AI chat interfaces is harder than it looks. After years of
                helping startups turn raw AI models into polished products, we
                kept solving the same problems over and over.
              </p>
              <p>
                Token management. Streaming edge cases. Context window juggling.
                Accessibility for AI-generated content. These aren't just
                technical challenges—they're UX challenges that can make or
                break AI adoption.
              </p>
              <p>
                So we built Clarity Chat: a component library that encapsulates
                everything we've learned about building AI interfaces that users
                actually love. And for teams that need more than components,
                we're here to help build the whole experience.
              </p>
            </div>
            <div className="mt-8 flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="text-sm text-muted-foreground">
                  Based in New York
                </span>
              </div>
              <div className="h-4 w-px bg-border" />
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-sm text-muted-foreground">
                  Remote-first team
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right: Stats grid */}
          <motion.div
            variants={prefersReducedMotion ? undefined : fadeInUp}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.label}
                initial={
                  prefersReducedMotion
                    ? undefined
                    : { opacity: 0, y: 20, scale: 0.95 }
                }
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 rounded-2xl text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl feature-icon mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-3xl font-bold gradient-text mb-1">
                  {item.stat}
                </div>
                <div className="text-sm text-muted-foreground">{item.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection
