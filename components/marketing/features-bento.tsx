"use client"

import { motion } from "framer-motion"
import {
  Wrench,
  Brain,
  Eye,
  Layers,
  Shield,
  Users,
  Zap,
  BookOpen,
} from "lucide-react"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.4, 0.25, 1] as const,
    },
  },
}

export function FeaturesBento() {
  return (
    <section className="relative py-24 overflow-hidden">
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
            Why Work With Me
          </span>
          <h2 className="text-headline font-bold mb-4">
            The advantage of working with someone who{" "}
            <span className="gradient-text">lives in the tools</span>
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-fr"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* 1. Practitioner First (1 col) */}
          <motion.div
            variants={itemVariants}
            className="bento-card p-6 rounded-2xl"
          >
            <div className="feature-icon w-12 h-12 rounded-xl mb-4">
              <Wrench className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Practitioner First</h3>
            <p className="text-sm text-muted-foreground">
              I use every tool I recommend, every single day.
            </p>
          </motion.div>

          {/* 2. Engineer + Educator (2 col) */}
          <motion.div
            variants={itemVariants}
            className="bento-card p-6 rounded-2xl md:col-span-2 lg:col-span-2"
          >
            <div className="feature-icon w-12 h-12 rounded-xl mb-4">
              <Brain className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Engineer + Educator</h3>
            <p className="text-sm text-muted-foreground">
              A rare combination: deep technical expertise with proven ability to teach and translate complex concepts into clear, actionable workflows. I&apos;ve trained hundreds of developers across both proprietary and open source technologies.
            </p>
          </motion.div>

          {/* 3. Design Eye (1 col) */}
          <motion.div
            variants={itemVariants}
            className="bento-card p-6 rounded-2xl"
          >
            <div className="feature-icon w-12 h-12 rounded-xl mb-4">
              <Eye className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Design Eye</h3>
            <p className="text-sm text-muted-foreground">
              UI/UX development with obsessive attention to visual detail.
            </p>
          </motion.div>

          {/* 4. Full-Stack AI Fluency (2 col) */}
          <motion.div
            variants={itemVariants}
            className="bento-card p-6 rounded-2xl md:col-span-2 lg:col-span-2"
          >
            <div className="feature-icon w-12 h-12 rounded-xl mb-4">
              <Layers className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Full-Stack AI Fluency</h3>
            <p className="text-sm text-muted-foreground">
              From Claude to GPT-4 to Gemini to open source models—I work across the entire AI landscape and stay current on the latest developments, so you don&apos;t have to.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {["Claude", "GPT-4", "Gemini", "Open Source"].map((badge) => (
                <span
                  key={badge}
                  className="text-xs px-2 py-1 rounded-full bg-muted"
                >
                  {badge}
                </span>
              ))}
            </div>
          </motion.div>

          {/* 5. Battle-Tested (1 col) */}
          <motion.div
            variants={itemVariants}
            className="bento-card p-6 rounded-2xl"
          >
            <div className="feature-icon w-12 h-12 rounded-xl mb-4">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Battle-Tested</h3>
            <p className="text-sm text-muted-foreground">
              10+ years shipping production software.
            </p>
          </motion.div>

          {/* 6. Human-Centered (1 col) */}
          <motion.div
            variants={itemVariants}
            className="bento-card p-6 rounded-2xl"
          >
            <div className="feature-icon w-12 h-12 rounded-xl mb-4">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Human-Centered</h3>
            <p className="text-sm text-muted-foreground">
              AI adoption is about people, not just technology.
            </p>
          </motion.div>

          {/* 7. Real-Time Expertise (2 col) */}
          <motion.div
            variants={itemVariants}
            className="bento-card p-6 rounded-2xl md:col-span-2 lg:col-span-2"
          >
            <div className="feature-icon w-12 h-12 rounded-xl mb-4">
              <Zap className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Real-Time Expertise</h3>
            <p className="text-sm text-muted-foreground">
              Specialized experience in real-time data streaming applications, complex business logic, and critical workflow handling.
            </p>
          </motion.div>

          {/* 8. Curriculum Designer (2 col) */}
          <motion.div
            variants={itemVariants}
            className="bento-card p-6 rounded-2xl md:col-span-2 lg:col-span-2"
          >
            <div className="feature-icon w-12 h-12 rounded-xl mb-4">
              <BookOpen className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Curriculum Designer</h3>
            <p className="text-sm text-muted-foreground">
              Custom educational assets: workshops, self-paced materials, assessments, and documentation designed to create lasting competence, not just awareness.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturesBento
