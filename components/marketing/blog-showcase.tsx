"use client"

import { motion, useReducedMotion } from "framer-motion"
import { ArrowUpRight, BookOpen, Newspaper, FileCode, type LucideIcon } from "lucide-react"
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/animations"

interface BlogPost {
  title: string
  publication: string
  description: string
  icon: LucideIcon
  url: string
  tag: string
  tagColor: string
}

const blogPosts: BlogPost[] = [
  {
    title: "The Invisible Frontend Layer That Turns a $10K Token Budget Into $2K",
    publication: "Medium",
    description:
      "How smart frontend architecture can slash your AI costs by 80%. Deep dive into KV-cache alignment, semantic caching, and the frontend patterns that save real money.",
    icon: BookOpen,
    url: "https://medium.com/@buildwithcodeclarity/the-invisible-frontend-layer-that-turns-a-10k-monthly-token-budget-into-2k-01c9394e781d",
    tag: "Cost Optimization",
    tagColor: "bg-emerald-500/10 text-emerald-400",
  },
  {
    title: "The Hidden Complexity of AI Chat Interfaces",
    publication: "Front End Weekly",
    description:
      "A developer's reality check on building AI chat UIs. The streaming edge cases, accessibility challenges, and UX pitfalls that trip up even experienced teams.",
    icon: Newspaper,
    url: "https://medium.com/front-end-weekly/the-hidden-complexity-of-ai-chat-interfaces-a-developers-reality-check-37b9e88fb223",
    tag: "Engineering",
    tagColor: "bg-primary/10 text-primary",
  },
  {
    title: "Building Developer-Friendly AI SDKs",
    publication: "Coming Soon",
    description:
      "What we learned building Clarity Chat's API. Why TypeScript-first matters, how to design for composability, and the art of sensible defaults.",
    icon: FileCode,
    url: "#",
    tag: "Documentation",
    tagColor: "bg-secondary/10 text-secondary",
  },
]

export function BlogShowcase() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 radial-gradient-bg opacity-20" />
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          variants={prefersReducedMotion ? undefined : staggerContainer}
          initial={prefersReducedMotion ? undefined : "hidden"}
          whileInView="visible"
          viewport={viewportOnce}
        >
          {/* Section header */}
          <motion.div
            variants={prefersReducedMotion ? undefined : fadeInUp}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium text-primary mb-6">
              From Our Blog
            </span>
            <h2 className="text-headline font-bold mb-4">
              Lessons from shipping{" "}
              <span className="gradient-text">50+ AI products</span>
            </h2>
            <p className="text-body-large text-muted-foreground max-w-2xl mx-auto">
              Real insights from real production deployments. No theory—just
              battle-tested strategies that save money and ship faster.
            </p>
          </motion.div>

          {/* Blog cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {blogPosts.map((post) => {
              const isComingSoon = post.url === "#"
              const CardWrapper = isComingSoon ? "div" : motion.a

              return (
                <CardWrapper
                  key={post.title}
                  {...(!isComingSoon && {
                    href: post.url,
                    target: "_blank",
                    rel: "noopener noreferrer",
                  })}
                  variants={prefersReducedMotion ? undefined : fadeInUp}
                  className={`group glass-card rounded-2xl p-6 transition-all duration-300 ${
                    isComingSoon
                      ? "opacity-70 cursor-default"
                      : "hover:border-primary/50"
                  }`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="feature-icon w-12 h-12 rounded-xl">
                      <post.icon className="w-6 h-6 text-primary" />
                    </div>
                    {!isComingSoon && (
                      <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    )}
                  </div>

                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 ${post.tagColor}`}
                  >
                    {post.tag}
                  </span>

                  <h3 className={`font-semibold mb-2 ${!isComingSoon && "group-hover:text-primary"} transition-colors`}>
                    {post.title}
                  </h3>

                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {post.description}
                  </p>

                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    {isComingSoon ? (
                      <span className="text-primary font-medium">{post.publication}</span>
                    ) : (
                      <>
                        <span>Published on</span>
                        <span className="font-medium text-foreground">
                          {post.publication}
                        </span>
                      </>
                    )}
                  </div>
                </CardWrapper>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default BlogShowcase
