"use client"

import { motion, useReducedMotion } from "framer-motion"
import { useEffect, useState, Suspense } from "react"
import Link from "next/link"
import { ParticleFieldCanvas } from "@/components/three/particle-field"
import { ShaderBackground } from "@/components/three/shader-background"

// ============================================================================
// TYPING ANIMATION HOOK
// ============================================================================
function useTypingAnimation(lines: string[], speed = 30, startDelay = 500) {
  const [displayedLines, setDisplayedLines] = useState<string[]>([])
  const [currentLineIndex, setCurrentLineIndex] = useState(0)
  const [currentCharIndex, setCurrentCharIndex] = useState(0)
  const [isComplete, setIsComplete] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    if (prefersReducedMotion) {
      setDisplayedLines(lines)
      setIsComplete(true)
      return
    }

    const startTimeout = setTimeout(() => {
      if (currentLineIndex >= lines.length) {
        setIsComplete(true)
        return
      }

      const currentLine = lines[currentLineIndex]

      if (currentCharIndex < currentLine.length) {
        const timeout = setTimeout(() => {
          setDisplayedLines(prev => {
            const newLines = [...prev]
            newLines[currentLineIndex] = currentLine.slice(0, currentCharIndex + 1)
            return newLines
          })
          setCurrentCharIndex(prev => prev + 1)
        }, speed)
        return () => clearTimeout(timeout)
      } else {
        const timeout = setTimeout(() => {
          setCurrentLineIndex(prev => prev + 1)
          setCurrentCharIndex(0)
        }, 100)
        return () => clearTimeout(timeout)
      }
    }, currentLineIndex === 0 && currentCharIndex === 0 ? startDelay : 0)

    return () => clearTimeout(startTimeout)
  }, [currentLineIndex, currentCharIndex, lines, speed, startDelay, prefersReducedMotion])

  return { displayedLines, isComplete, currentLineIndex }
}

// ============================================================================
// CURSOR BLINK COMPONENT
// ============================================================================
function Cursor() {
  return (
    <span className="inline-block w-2 h-4 bg-cyan-400 animate-pulse ml-0.5" />
  )
}

// ============================================================================
// TERMINAL WINDOW COMPONENT
// ============================================================================
interface TerminalProps {
  title?: string
  children: React.ReactNode
  className?: string
}

function Terminal({ title = "terminal", children, className = "" }: TerminalProps) {
  return (
    <div className={`relative group ${className}`}>
      {/* Glow effect */}
      <div className="absolute -inset-px bg-gradient-to-r from-amber-500/20 via-rose-500/20 to-cyan-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />

      {/* Terminal window */}
      <div className="relative bg-zinc-950/80 backdrop-blur-xl border border-zinc-800/50 rounded-2xl overflow-hidden shadow-2xl">
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-3 bg-zinc-900/50 border-b border-zinc-800/50">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <span className="ml-2 text-xs text-zinc-500 font-mono">{title}</span>
        </div>

        {/* Content */}
        <div className="p-5 font-mono text-sm leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  )
}

// ============================================================================
// HERO TERMINAL DEMO
// ============================================================================
function HeroTerminalDemo() {
  const terminalLines = [
    "> analyzing your ai stack...",
    "> identifying optimization opportunities...",
    "> crafting custom ai strategy...",
    "> training team on claude, gpt-4, gemini workflows...",
    "> deploying custom ai tooling...",
    "> strategy complete. your team is ai-native.",
  ]

  const { displayedLines, isComplete, currentLineIndex } = useTypingAnimation(terminalLines, 25, 800)

  const promptColors = [
    "text-cyan-400",
    "text-amber-400",
    "text-rose-400",
    "text-orange-400",
    "text-cyan-400",
    "text-amber-400",
  ]

  return (
    <Terminal title="ai-strategy --execute">
      <div className="space-y-1.5">
        {terminalLines.map((line, i) => {
          const displayed = displayedLines[i] || ""
          const isCurrentLine = i === currentLineIndex
          const isTyped = i < currentLineIndex || (i === currentLineIndex && displayed.length > 0)

          if (!isTyped && i > currentLineIndex) return null

          // Split prompt character from the rest
          const promptChar = displayed.slice(0, 2) // "> "
          const rest = displayed.slice(2)

          return (
            <div key={i} className="flex">
              <span className={`${promptColors[i]} font-bold`}>{promptChar}</span>
              <span className={i === terminalLines.length - 1 && isComplete
                ? "text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-rose-400 to-cyan-400 font-semibold"
                : "text-zinc-300"
              }>
                {rest}
              </span>
              {isCurrentLine && !isComplete && <Cursor />}
            </div>
          )
        })}
      </div>

      {isComplete && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 pt-4 border-t border-zinc-800/50"
        >
          <div className="flex items-center gap-2 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-rose-400 to-cyan-400">
            <svg className="w-4 h-4 text-cyan-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-sm font-medium">Ready to transform your team&apos;s AI capability.</span>
          </div>
        </motion.div>
      )}
    </Terminal>
  )
}

// ============================================================================
// PILLAR CARDS
// ============================================================================
const pillars = [
  {
    title: "Strategy",
    description: "Right tools. Right systems. Right approach.",
    gradient: "from-amber-500/20 to-amber-500/5",
    border: "border-amber-500/20",
    accent: "text-amber-400",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
      </svg>
    ),
  },
  {
    title: "Training",
    description: "Workshops, documentation, and hands-on enablement.",
    gradient: "from-rose-500/20 to-rose-500/5",
    border: "border-rose-500/20",
    accent: "text-rose-400",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
      </svg>
    ),
  },
  {
    title: "Development",
    description: "Custom AI tools, pilots, and production systems.",
    gradient: "from-cyan-500/20 to-cyan-500/5",
    border: "border-cyan-500/20",
    accent: "text-cyan-400",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
      </svg>
    ),
  },
]

// ============================================================================
// MAIN HERO SECTION
// ============================================================================
export function HeroSection() {
  const prefersReducedMotion = useReducedMotion()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-zinc-950">
      {/* Background */}
      <div className="absolute inset-0">
        {/* WebGL Shader Background - dramatic light streaks */}
        <Suspense fallback={null}>
          <ShaderBackground
            className="absolute inset-0 z-0 pointer-events-none"
            opacity={0.65}
          />
        </Suspense>

        {/* 3D Particle Field overlay */}
        <div className="absolute inset-0 z-[1] pointer-events-none" style={{ minHeight: '100vh', width: '100%' }}>
          <Suspense fallback={null}>
            <ParticleFieldCanvas className="w-full h-full" />
          </Suspense>
        </div>

        {/* Gradient mesh overlay - darkens top for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/80 via-transparent to-zinc-950/90 z-[2] pointer-events-none" />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.012] z-[2] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
            backgroundSize: '72px 72px',
          }}
        />

        {/* Warm accent glows */}
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-amber-500/[0.04] rounded-full blur-[120px] z-[2] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-rose-500/[0.03] rounded-full blur-[100px] z-[2] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/[0.02] rounded-full blur-[120px] z-[2] pointer-events-none" />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-6 py-20"
        variants={prefersReducedMotion ? undefined : containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Headline */}
        <motion.div variants={itemVariants} className="text-center mb-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            <span className="text-white">Your </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-rose-400 to-cyan-400">
              AI strategy
            </span>
            <br />
            <span className="text-white">starts here.</span>
          </h1>
        </motion.div>

        {/* Subheadline */}
        <motion.p variants={itemVariants} className="text-center text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto mb-12">
          An engineer-turned-strategist who lives in the tools, builds the systems,
          and trains teams to actually use them.{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-rose-400 to-cyan-400 font-medium">
            Strategy. Training. Development.
          </span>
        </motion.p>

        {/* Terminal Demo */}
        <motion.div variants={itemVariants} className="max-w-2xl mx-auto mb-12">
          <HeroTerminalDemo />
        </motion.div>

        {/* CTAs */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-14">
          <Link
            href="#contact"
            className="group relative px-8 py-4 bg-white text-zinc-900 font-semibold rounded-xl overflow-hidden transition-all hover:scale-[1.02]"
          >
            <span className="relative z-10 flex items-center gap-2">
              Book a Strategy Call
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400 via-rose-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
          </Link>

          <Link
            href="#services"
            className="px-8 py-4 font-medium text-zinc-300 rounded-xl border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900/50 transition-all flex items-center gap-2"
          >
            <svg className="w-5 h-5 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
            Explore Services
          </Link>
        </motion.div>

        {/* Three Pillar Cards */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 + i * 0.15 }}
              className={`relative bg-gradient-to-br ${pillar.gradient} backdrop-blur-xl border ${pillar.border} rounded-xl p-5`}
            >
              <div className={`flex items-center gap-2 mb-2 ${pillar.accent}`}>
                {pillar.icon}
                <h3 className="font-semibold text-sm uppercase tracking-wider">{pillar.title}</h3>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed">{pillar.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#services" className="flex flex-col items-center gap-2 text-zinc-500 hover:text-zinc-300 transition-colors">
          <span className="text-xs uppercase tracking-widest font-mono">scroll</span>
          <svg className="w-4 h-4 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </motion.div>
    </section>
  )
}

export default HeroSection
