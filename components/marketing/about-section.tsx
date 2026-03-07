"use client"

import { motion, useReducedMotion } from "framer-motion"
import { Code2, GraduationCap, Sparkles, Zap } from "lucide-react"
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/animations"

const highlights = [
  {
    icon: Code2,
    stat: "10+",
    label: "Years Building Software",
  },
  {
    icon: GraduationCap,
    stat: "4+",
    label: "Years Training Engineers",
  },
  {
    icon: Sparkles,
    stat: "Daily",
    label: "AI Tool Usage",
  },
  {
    icon: Zap,
    stat: "100%",
    label: "Hands-On Experience",
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
              About Me
            </span>
            <h2 className="text-headline font-bold mb-6">
              An engineer who speaks
              <br />
              <span className="gradient-text">human</span>
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                With over a decade in software development, I've spent the last
                four years doing something most engineers avoid: teaching.
                Training developers on complex technologies—both open source and
                proprietary—across curriculum development, mentoring, live
                instruction, and assessment creation.
              </p>
              <p>
                I specialize in distilling complex technologies into concepts,
                strategies, and workflows that actually make sense. Real-time
                data streaming. Client-facing applications. Intricate UI/UX
                development. Complex business logic handling critical workflows.
                I've built it all, and more importantly, I've taught others to
                build it too.
              </p>
              <p>
                I found a unique gap in the market: the human touch of curation
                and real experience, combined with the acceleration that AI
                development brings. I don't just recommend AI tools—I use them
                every day. I stay on top of the latest technology and personally
                work with every tool I suggest.
              </p>
            </div>
            <div className="mt-8 flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-cyan-400" />
                <span className="text-sm text-muted-foreground">
                  10+ Years Development
                </span>
              </div>
              <div className="h-4 w-px bg-border" />
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-purple-400" />
                <span className="text-sm text-muted-foreground">
                  4+ Years Training
                </span>
              </div>
              <div className="h-4 w-px bg-border" />
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-rose-400" />
                <span className="text-sm text-muted-foreground">
                  AI-Native Workflows
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right: Stats grid */}
          <motion.div
            variants={prefersReducedMotion ? undefined : fadeInUp}
            className="space-y-6"
          >
            <div className="grid grid-cols-2 gap-4">
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
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection
