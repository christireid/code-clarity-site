"use client"

import { motion, useReducedMotion } from "framer-motion"
import { Star, Quote } from "lucide-react"
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/animations"

// Company logos that would use the product
const companyLogos = [
  { name: "TechCorp", initial: "T" },
  { name: "DataFlow", initial: "D" },
  { name: "CloudSync", initial: "C" },
  { name: "AILabs", initial: "A" },
  { name: "DevStack", initial: "D" },
  { name: "ScaleUp", initial: "S" },
]

const testimonials = [
  {
    quote:
      "Clarity Chat cut our AI integration time from 3 months to 2 weeks. The token optimization alone saves us $12K monthly.",
    author: "Sarah Chen",
    role: "CTO",
    company: "TechFlow AI",
    avatar: "SC",
    rating: 5,
    metric: "85% faster development",
  },
  {
    quote:
      "The component library is incredibly well-designed. Our developers love working with it, and our customers notice the quality.",
    author: "Marcus Johnson",
    role: "VP of Engineering",
    company: "DataSync Labs",
    avatar: "MJ",
    rating: 5,
    metric: "60% cost reduction",
  },
  {
    quote:
      "We evaluated 5 different solutions. Clarity was the only one that met our enterprise security requirements while still being developer-friendly.",
    author: "Emily Rodriguez",
    role: "Head of Product",
    company: "SecureAI Inc",
    avatar: "ER",
    rating: 5,
    metric: "100% compliance",
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(rating)].map((_, i) => (
        <Star
          key={i}
          className="w-4 h-4 fill-amber-400 text-amber-400"
        />
      ))}
    </div>
  )
}

export function SocialProofSection() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Company logos */}
        <motion.div
          variants={prefersReducedMotion ? undefined : staggerContainer}
          initial={prefersReducedMotion ? undefined : "hidden"}
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mb-16"
        >
          <motion.p
            variants={prefersReducedMotion ? undefined : fadeInUp}
            className="text-sm font-medium text-muted-foreground mb-8"
          >
            Trusted by innovative teams at
          </motion.p>

          <motion.div
            variants={prefersReducedMotion ? undefined : fadeInUp}
            className="flex flex-wrap justify-center items-center gap-8 md:gap-12"
          >
            {companyLogos.map((company) => (
              <div
                key={company.name}
                className="group flex items-center gap-2 text-muted-foreground/50 hover:text-foreground transition-colors duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center text-lg font-bold group-hover:bg-primary/10 group-hover:text-primary transition-all duration-300">
                  {company.initial}
                </div>
                <span className="font-semibold hidden sm:block">
                  {company.name}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          variants={prefersReducedMotion ? undefined : staggerContainer}
          initial={prefersReducedMotion ? undefined : "hidden"}
          whileInView="visible"
          viewport={viewportOnce}
          className="grid md:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              variants={prefersReducedMotion ? undefined : fadeInUp}
              className="relative group"
            >
              <div className="glass-card rounded-2xl p-6 h-full flex flex-col hover:border-primary/30 transition-colors duration-300">
                {/* Quote icon */}
                <Quote className="w-8 h-8 text-primary/30 mb-4" />

                {/* Rating */}
                <StarRating rating={testimonial.rating} />

                {/* Quote */}
                <p className="text-foreground/90 mt-4 mb-6 flex-grow leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                {/* Metric badge */}
                <div className="mb-4">
                  <span className="inline-flex px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                    {testimonial.metric}
                  </span>
                </div>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-sm font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>

              {/* Hover glow effect */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl ${
                  index === 0
                    ? "from-primary/20 to-transparent"
                    : index === 1
                    ? "from-secondary/20 to-transparent"
                    : "from-accent/20 to-transparent"
                }`}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Social proof stats */}
        <motion.div
          variants={prefersReducedMotion ? undefined : fadeInUp}
          initial={prefersReducedMotion ? undefined : "hidden"}
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground">
            Join <span className="text-foreground font-semibold">2,500+</span>{" "}
            developers building with Clarity Chat
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default SocialProofSection
