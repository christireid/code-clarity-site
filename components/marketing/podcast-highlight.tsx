"use client"

import { motion, useReducedMotion } from "framer-motion"
import { Mic, Play, ExternalLink } from "lucide-react"
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/animations"

export function PodcastHighlight() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6">
        <motion.div
          variants={prefersReducedMotion ? undefined : staggerContainer}
          initial={prefersReducedMotion ? undefined : "hidden"}
          whileInView="visible"
          viewport={viewportOnce}
          className="glass-card rounded-3xl p-8 md:p-12"
        >
          <div className="flex flex-col md:flex-row gap-8 items-center">
            {/* Podcast artwork placeholder */}
            <motion.div
              variants={prefersReducedMotion ? undefined : fadeInUp}
              className="relative flex-shrink-0"
            >
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center relative overflow-hidden">
                {/* Animated rings */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {[1, 2, 3].map((i) => (
                    <motion.div
                      key={i}
                      className="absolute rounded-full border border-primary/20"
                      style={{
                        width: `${60 + i * 30}%`,
                        height: `${60 + i * 30}%`,
                      }}
                      animate={
                        prefersReducedMotion
                          ? undefined
                          : {
                              scale: [1, 1.05, 1],
                              opacity: [0.3, 0.5, 0.3],
                            }
                      }
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3,
                      }}
                    />
                  ))}
                </div>
                <div className="relative z-10 w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center">
                  <Mic className="w-10 h-10 text-primary" />
                </div>
              </div>
              {/* Episode badge */}
              <div className="absolute -bottom-2 -right-2 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold">
                Episode 11
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              variants={prefersReducedMotion ? undefined : fadeInUp}
              className="flex-1 text-center md:text-left"
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                <Play className="w-3 h-3" />
                Featured Podcast
              </span>

              <h3 className="text-2xl md:text-3xl font-bold mb-3">
                AI Integrations Podcast
              </h3>

              <p className="text-muted-foreground mb-6">
                &ldquo;Building AI Chat Interfaces That Users Actually Love&rdquo; — A deep
                dive into the UX challenges of AI products, token optimization
                strategies, and why most AI integrations fail to get adoption.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a
                  href="https://aiintegrations.dev/episodes/11"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-button px-6 py-3 rounded-xl inline-flex items-center justify-center gap-2 group"
                >
                  <Play className="w-4 h-4" />
                  Listen Now
                </a>
                <a
                  href="https://aiintegrations.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="secondary-button px-6 py-3 rounded-xl inline-flex items-center justify-center gap-2 group"
                >
                  View All Episodes
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>

              {/* Topics covered */}
              <div className="mt-6 flex flex-wrap gap-2 justify-center md:justify-start">
                {[
                  "Token Costs",
                  "Streaming UX",
                  "Accessibility",
                  "Production Scale",
                ].map((topic) => (
                  <span
                    key={topic}
                    className="px-3 py-1 rounded-full bg-muted text-xs text-muted-foreground"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default PodcastHighlight
