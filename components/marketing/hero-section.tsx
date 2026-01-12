"use client"

import { motion, useReducedMotion } from "framer-motion"
import { ArrowRight, Sparkles, ChevronDown, Copy, Check, Terminal } from "lucide-react"
import dynamic from "next/dynamic"
import Link from "next/link"
import { useEffect, useState } from "react"
import {
  fadeInScale,
} from "@/lib/animations"
import { GifPlaceholder } from "@/components/ui/image-placeholder"

// Dynamically import the 3D canvas to avoid SSR issues
const ParticleFieldCanvas = dynamic(
  () => import("@/components/three/particle-field"),
  {
    ssr: false,
    loading: () => (
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
    ),
  }
)

// Hook to detect WebGL support
function useWebGLSupport() {
  const [supported, setSupported] = useState(true)

  useEffect(() => {
    try {
      const canvas = document.createElement("canvas")
      const gl =
        canvas.getContext("webgl") || canvas.getContext("experimental-webgl")
      setSupported(!!gl)
    } catch {
      setSupported(false)
    }
  }, [])

  return supported
}

// Static gradient fallback for non-WebGL browsers
function GradientFallback() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />
    </div>
  )
}

// Hero-specific container with slower stagger
const heroContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
}

// Hero-specific item with slightly longer duration
const heroItem = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.4, 0.25, 1] as const,
    },
  },
}

// Copyable install command component
function InstallCommand() {
  const [copied, setCopied] = useState(false)
  const command = "npx create-clarity-chat@latest"

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(command)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Fallback for older browsers
      const textarea = document.createElement("textarea")
      textarea.value = command
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand("copy")
      document.body.removeChild(textarea)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <button
      onClick={handleCopy}
      className="group inline-flex items-center gap-3 px-4 py-2.5 rounded-lg bg-muted/50 border border-white/10 hover:border-primary/50 transition-all"
      aria-label="Copy install command"
    >
      <Terminal className="w-4 h-4 text-muted-foreground" />
      <code className="text-sm font-mono text-foreground">{command}</code>
      <span className="w-px h-4 bg-border" />
      {copied ? (
        <Check className="w-4 h-4 text-emerald-400" />
      ) : (
        <Copy className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
      )}
    </button>
  )
}

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion()
  const supportsWebGL = useWebGLSupport()
  const showParticles = supportsWebGL && !prefersReducedMotion

  const scrollToDemo = () => {
    const demoSection = document.getElementById("demo")
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="gradient-orb gradient-orb-primary w-[600px] h-[600px] -top-48 -left-48" />
        <div
          className="gradient-orb gradient-orb-secondary w-[500px] h-[500px] top-1/2 -right-48"
          style={{ animationDelay: "-10s" }}
        />
        <div
          className="gradient-orb gradient-orb-primary w-[400px] h-[400px] -bottom-32 left-1/3"
          style={{ animationDelay: "-5s" }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern opacity-50" />

      {/* 3D Particle Field or Fallback */}
      {showParticles ? (
        <ParticleFieldCanvas className="absolute inset-0 z-0" />
      ) : (
        <GradientFallback />
      )}

      {/* Radial gradient overlay for depth */}
      <div className="absolute inset-0 radial-gradient-bg pointer-events-none" />

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-5xl mx-auto px-6 text-center"
        variants={prefersReducedMotion ? undefined : heroContainer}
        initial={prefersReducedMotion ? undefined : "hidden"}
        animate={prefersReducedMotion ? undefined : "visible"}
      >
        {/* Eyebrow */}
        <motion.div
          variants={prefersReducedMotion ? undefined : heroItem}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium text-primary">
            <Sparkles className="w-4 h-4" />
            <span>Stop burning money on token costs</span>
            <ArrowRight className="w-4 h-4" />
          </span>
        </motion.div>

        {/* Headline - Outcomes focused */}
        <motion.h1
          variants={prefersReducedMotion ? undefined : heroItem}
          className="text-display font-bold tracking-tight mb-6"
        >
          <span className="block">Ship AI chat this sprint.</span>
          <span className="block gradient-text">Cut token costs by 60%.</span>
          <span className="block text-[0.7em] text-muted-foreground font-normal mt-2">Never explain a $50K AI bill to your CFO again.</span>
        </motion.h1>

        {/* Subheadline - Consequences */}
        <motion.p
          variants={prefersReducedMotion ? undefined : heroItem}
          className="text-body-large text-muted-foreground max-w-2xl mx-auto mb-10"
        >
          Your AI integration is 3 months behind schedule. Token costs are spiraling.
          <br className="hidden sm:block" />
          Clarity Chat is the React library that gets you to production—with costs under control.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={prefersReducedMotion ? undefined : heroItem}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            href="#demo"
            className="cta-button px-8 py-4 rounded-xl text-lg inline-flex items-center gap-2 group"
          >
            See How It Works
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="#contact"
            className="secondary-button px-8 py-4 rounded-xl text-lg inline-flex items-center gap-2"
          >
            Get Early Access
          </Link>
        </motion.div>

        {/* Install command */}
        <motion.div
          variants={prefersReducedMotion ? undefined : heroItem}
          className="mt-8"
        >
          <InstallCommand />
        </motion.div>

        {/* Outcomes row */}
        <motion.div
          variants={prefersReducedMotion ? undefined : heroItem}
          className="mt-10 flex flex-wrap justify-center gap-6 md:gap-10"
        >
          <div className="text-center">
            <span className="text-2xl font-bold gradient-text">60-90%</span>
            <span className="block text-xs text-muted-foreground mt-1">Token cost reduction</span>
          </div>
          <div className="hidden md:block h-12 w-px bg-border" />
          <div className="text-center">
            <span className="text-2xl font-bold gradient-text">1 Sprint</span>
            <span className="block text-xs text-muted-foreground mt-1">To production</span>
          </div>
          <div className="hidden md:block h-12 w-px bg-border" />
          <div className="text-center">
            <span className="text-2xl font-bold gradient-text">Zero</span>
            <span className="block text-xs text-muted-foreground mt-1">Budget surprises</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Product Demo Preview */}
      <motion.div
        variants={prefersReducedMotion ? undefined : fadeInScale}
        initial={prefersReducedMotion ? undefined : "hidden"}
        animate={prefersReducedMotion ? undefined : "visible"}
        className="relative z-10 w-full max-w-4xl mx-auto mt-16 px-6"
      >
        {/*
          ============================================
          IMAGE PLACEHOLDER: hero-product-demo
          ============================================
          Replace with your product demo GIF or video showing:
          - Chat interface in action
          - Streaming responses
          - Provider switching

          Recommended: 1280x720 GIF or MP4/WebM
          Path: /public/images/hero-product-demo.gif
          ============================================
        */}
        <GifPlaceholder
          id="hero-product-demo"
          label="Product Demo GIF (1280x720)"
          className="glow-primary"
        />
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={prefersReducedMotion ? undefined : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: prefersReducedMotion ? 0 : 3 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <button
          onClick={scrollToDemo}
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Scroll down"
        >
          <span className="text-xs">Scroll to explore</span>
          <ChevronDown className="w-5 h-5 scroll-indicator" />
        </button>
      </motion.div>
    </section>
  )
}

export default HeroSection
