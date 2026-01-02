"use client"

import { motion } from "framer-motion"
import { Star, GitBranch, Users, Download } from "lucide-react"

const stats = [
  {
    icon: Star,
    value: "4.9",
    suffix: "/5",
    label: "Developer rating",
  },
  {
    icon: Download,
    value: "10K",
    suffix: "+",
    label: "Weekly downloads",
  },
  {
    icon: GitBranch,
    value: "500",
    suffix: "+",
    label: "GitHub stars",
  },
  {
    icon: Users,
    value: "1,200",
    suffix: "+",
    label: "Active projects",
  },
]

const testimonials = [
  {
    quote:
      "Clarity Chat cut our development time by 70%. The token optimization alone saved us thousands in API costs.",
    author: "Sarah Chen",
    role: "CTO, TechStartup",
    avatar: "SC",
  },
  {
    quote:
      "Finally, a component library that understands AI. The streaming hooks are exactly what we needed.",
    author: "Marcus Johnson",
    role: "Lead Developer, AI Labs",
    avatar: "MJ",
  },
  {
    quote:
      "Enterprise-ready from day one. We deployed to production in a week.",
    author: "Emily Rodriguez",
    role: "Engineering Manager, Fortune 500",
    avatar: "ER",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.4, 0.25, 1] as const,
    },
  },
}

export function TrustBlock() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 radial-gradient-bg opacity-50" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl feature-icon mb-4">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="text-3xl md:text-4xl font-bold">
                <span className="gradient-text">{stat.value}</span>
                <span className="text-muted-foreground">{stat.suffix}</span>
              </div>
              <div className="text-sm text-muted-foreground mt-2">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <motion.div
          className="grid md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              variants={itemVariants}
              className="premium-card p-6 rounded-2xl"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-accent text-accent"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground/90 mb-6">"{testimonial.quote}"</p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-sm font-semibold text-white">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-medium text-sm">{testimonial.author}</div>
                  <div className="text-xs text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Company logos placeholder */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 text-center"
        >
          <p className="text-sm text-muted-foreground mb-8">
            Trusted by developers at
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-50">
            {["Vercel", "Stripe", "Linear", "Notion", "Figma", "GitHub"].map(
              (company) => (
                <div
                  key={company}
                  className="text-xl font-semibold text-muted-foreground"
                >
                  {company}
                </div>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TrustBlock
