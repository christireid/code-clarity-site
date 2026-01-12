"use client"

import { motion, useReducedMotion } from "framer-motion"
import { Code2, Sparkles, Users, Zap, MapPin, Globe } from "lucide-react"
import Link from "next/link"
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

export function AboutPageContent() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <>
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 radial-gradient-bg opacity-30" />
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
              About Code & Clarity
            </motion.span>

            <motion.h1
              variants={prefersReducedMotion ? undefined : fadeInUp}
              className="text-display font-bold mb-6"
            >
              Built by engineers who've
              <br />
              <span className="gradient-text">shipped AI at scale</span>
            </motion.h1>

            <motion.p
              variants={prefersReducedMotion ? undefined : fadeInUp}
              className="text-body-large text-muted-foreground max-w-2xl mx-auto"
            >
              We've been in the trenches. We know what breaks at 10K users. We
              know what CFOs say when token costs hit $50K. And we built Clarity
              Chat so you don't have to learn those lessons the hard way.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="relative py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="relative py-24">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            variants={prefersReducedMotion ? undefined : staggerContainer}
            initial={prefersReducedMotion ? undefined : "hidden"}
            whileInView="visible"
            viewport={viewportOnce}
            className="space-y-8"
          >
            <motion.div variants={prefersReducedMotion ? undefined : fadeInUp}>
              <h2 className="text-headline font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Code & Clarity was founded on a simple observation: building
                  great AI chat interfaces is harder than it looks. After years
                  of helping startups turn raw AI models into polished products,
                  we kept solving the same problems over and over.
                </p>
                <p>
                  Token management. Streaming edge cases. Context window
                  juggling. Accessibility for AI-generated content. These aren't
                  just technical challenges—they're UX challenges that can make
                  or break AI adoption.
                </p>
                <p>
                  So we built Clarity Chat: a component library that
                  encapsulates everything we've learned about building AI
                  interfaces that users actually love. And for teams that need
                  more than components, we're here to help build the whole
                  experience.
                </p>
              </div>
            </motion.div>

            <motion.div variants={prefersReducedMotion ? undefined : fadeInUp}>
              <h2 className="text-headline font-bold mb-6">What We Believe</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <strong className="text-foreground">
                    AI should feel invisible.
                  </strong>{" "}
                  The best AI interfaces don't feel like AI—they feel like
                  magic. Users shouldn't think about tokens, context windows, or
                  streaming protocols. They should just get things done.
                </p>
                <p>
                  <strong className="text-foreground">
                    Cost matters from day one.
                  </strong>{" "}
                  We've seen too many startups launch with unsustainable AI
                  costs. Token optimization isn't an afterthought—it's built
                  into everything we do.
                </p>
                <p>
                  <strong className="text-foreground">
                    Accessibility isn't optional.
                  </strong>{" "}
                  AI-generated content creates unique accessibility challenges.
                  We solve them because everyone deserves great AI experiences.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={prefersReducedMotion ? undefined : fadeInUp}
              className="flex flex-wrap items-center gap-6 pt-6"
            >
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">
                  Based in New York
                </span>
              </div>
              <div className="h-4 w-px bg-border" />
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">
                  Remote-first team
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            variants={prefersReducedMotion ? undefined : fadeInUp}
            initial={prefersReducedMotion ? undefined : "hidden"}
            whileInView="visible"
            viewport={viewportOnce}
            className="glass-card p-12 rounded-3xl"
          >
            <h2 className="text-headline font-bold mb-4">
              Ready to ship faster?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Whether you need a component library or a full development
              partner, we're here to help you build AI products that users love.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#demo"
                className="cta-button px-8 py-4 rounded-xl text-lg inline-flex items-center justify-center gap-2"
              >
                See Clarity Chat
              </Link>
              <Link
                href="/services"
                className="secondary-button px-8 py-4 rounded-xl text-lg inline-flex items-center justify-center gap-2"
              >
                View Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default AboutPageContent
