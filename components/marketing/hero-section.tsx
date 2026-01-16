"use client"

import { motion, useReducedMotion } from "framer-motion"
import { useEffect, useState, useCallback, Suspense } from "react"
import Link from "next/link"
import { ParticleFieldCanvas } from "@/components/three/particle-field"

// ============================================================================
// SYNTAX HIGHLIGHTING THEME (Matching editor window style)
// ============================================================================
const syntax = {
  keyword: { color: 'hsl(280, 75%, 70%)' },      // Purple/Magenta - const, import, export, await
  function: { color: 'hsl(195, 85%, 75%)' },     // Light Blue/Cyan - function names, components
  string: { color: 'hsl(25, 95%, 65%)' },       // Orange - strings
  number: { color: 'hsl(142, 71%, 45%)' },      // Green - numbers
  comment: { color: 'hsl(0, 0%, 50%)', fontStyle: 'italic' }, // Gray italic - comments
  variable: { color: 'hsl(195, 85%, 75%)' },    // Light Blue/Cyan - variables
  property: { color: 'hsl(280, 75%, 70%)' },    // Purple/Magenta - object properties
  operator: { color: 'hsl(0, 0%, 70%)' },       // Light gray - operators
  type: { color: 'hsl(195, 85%, 75%)' },         // Light Blue/Cyan - types
  bracket: { color: 'hsl(0, 0%, 70%)' },        // Light gray - brackets
}

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
// TERMINAL WINDOW COMPONENT
// ============================================================================
interface TerminalProps {
  title?: string
  children: React.ReactNode
  className?: string
  variant?: "default" | "success" | "error"
}

function Terminal({ title = "terminal", children, className = "", variant = "default" }: TerminalProps) {
  const borderColor = {
    default: "border-zinc-800/50",
    success: "border-emerald-500/20",
    error: "border-red-500/20",
  }[variant]

  const glowColor = {
    default: "",
    success: "shadow-emerald-500/5",
    error: "shadow-red-500/5",
  }[variant]

  return (
    <div className={`relative group ${className}`}>
      {/* Glow effect */}
      <div className="absolute -inset-px bg-gradient-to-r from-emerald-500/20 via-cyan-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
      
      {/* Terminal window */}
      <div className={`relative bg-zinc-950/80 backdrop-blur-xl border ${borderColor} rounded-2xl overflow-hidden shadow-2xl ${glowColor}`}>
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
// CODE LINE COMPONENT WITH SYNTAX HIGHLIGHTING
// ============================================================================
interface CodeLineProps {
  number: number
  children: React.ReactNode
  highlight?: boolean
}

function CodeLine({ number, children, highlight = false }: CodeLineProps) {
  return (
    <div className={`flex ${highlight ? "bg-emerald-500/5 -mx-5 px-5" : ""}`}>
      <span className="w-8 text-right text-zinc-600 select-none mr-4 flex-shrink-0">
        {number}
      </span>
      <span className="flex-1">{children}</span>
    </div>
  )
}

// ============================================================================
// LIVE METRICS DISPLAY
// ============================================================================
function LiveMetrics() {
  const [tokens, setTokens] = useState({ before: 0, after: 0, saved: 0 })
  const prefersReducedMotion = useReducedMotion()
  
  useEffect(() => {
    if (prefersReducedMotion) {
      setTokens({ before: 4200, after: 1260, saved: 2940 })
      return
    }

    const interval = setInterval(() => {
      setTokens(prev => {
        if (prev.before >= 4200) return prev
        const newBefore = Math.min(prev.before + 84, 4200)
        const newAfter = Math.round(newBefore * 0.3)
        return {
          before: newBefore,
          after: newAfter,
          saved: newBefore - newAfter,
        }
      })
    }, 30)
    
    return () => clearInterval(interval)
  }, [prefersReducedMotion])

  const savingsPercent = tokens.before > 0 ? Math.round((tokens.saved / tokens.before) * 100) : 0

  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="bg-zinc-900/50 backdrop-blur border border-zinc-800/50 rounded-xl p-4">
        <div className="text-xs text-zinc-500 uppercase tracking-wider mb-1">Input</div>
        <div className="text-2xl font-bold font-mono text-zinc-400">
          {tokens.before.toLocaleString()}
        </div>
        <div className="text-xs text-zinc-600">tokens</div>
      </div>
      
      <div className="bg-zinc-900/50 backdrop-blur border border-emerald-500/20 rounded-xl p-4">
        <div className="text-xs text-emerald-400 uppercase tracking-wider mb-1">Optimized</div>
        <div className="text-2xl font-bold font-mono text-emerald-400">
          {tokens.after.toLocaleString()}
        </div>
        <div className="text-xs text-emerald-500/60">tokens</div>
      </div>
      
      <div className="bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 backdrop-blur border border-emerald-500/30 rounded-xl p-4">
        <div className="text-xs text-cyan-400 uppercase tracking-wider mb-1">Saved</div>
        <div className="text-2xl font-bold font-mono text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
          {savingsPercent}%
        </div>
        <div className="text-xs text-cyan-500/60">{tokens.saved.toLocaleString()} tokens</div>
      </div>
    </div>
  )
}

// ============================================================================
// CURSOR BLINK COMPONENT
// ============================================================================
function Cursor() {
  return (
    <span className="inline-block w-2 h-4 bg-emerald-400 animate-pulse ml-0.5" />
  )
}

// ============================================================================
// HERO CODE DEMO
// ============================================================================
function HeroCodeDemo() {
  const codeLines = [
    '// Before: 4,200 tokens per request',
    'const response = await chat.send({',
    '  messages: conversationHistory, // All 50 messages',
    '  systemPrompt: fullSystemPrompt, // 2,000 tokens',
    '});',
    '',
    '// After: 1,260 tokens with Clarity Chat',
    'const response = await clarityChat.send({',
    '  messages, // Smart context window',
    '  optimization: {',
    '    kvCache: true,      // Reuse cached prefixes',
    '    semantic: true,     // Dedupe similar content',
    '    compression: 0.7,   // 70% reduction target',
    '  }',
    '});',
  ]

  const { displayedLines, isComplete, currentLineIndex } = useTypingAnimation(codeLines, 25, 800)

  return (
    <Terminal title="token-optimization.ts" variant={isComplete ? "success" : "default"}>
      <div className="space-y-0.5">
        {codeLines.map((line, i) => {
          const displayed = displayedLines[i] || ""
          const isCurrentLine = i === currentLineIndex
          const isTyped = i < currentLineIndex || (i === currentLineIndex && displayed.length > 0)
          
          if (!isTyped && i > currentLineIndex) return null
          
          // Syntax highlighting logic
          let highlighted: React.ReactNode = displayed
          
          if (line.startsWith('//')) {
            highlighted = <span style={syntax.comment}>{displayed}</span>
          } else if (displayed.includes('const ')) {
            highlighted = (
              <>
                <span style={syntax.keyword}>const </span>
                <span style={syntax.variable}>{displayed.replace('const ', '').split(' ')[0]}</span>
                <span style={syntax.property}>{displayed.slice(displayed.indexOf(' = '))}</span>
              </>
            )
          } else if (displayed.includes(':')) {
            const parts = displayed.split(':')
            highlighted = (
              <>
                <span style={syntax.property}>{parts[0]}</span>
                <span style={syntax.operator}>:</span>
                <span style={displayed.includes('true') ? syntax.keyword : displayed.includes('0.7') ? syntax.number : syntax.string}>
                  {parts.slice(1).join(':')}
                </span>
              </>
            )
          } else if (displayed.includes('await ')) {
            highlighted = (
              <>
                <span style={syntax.keyword}>await </span>
                <span style={syntax.function}>{displayed.replace('await ', '')}</span>
              </>
            )
          } else if (displayed.includes('clarityChat') || displayed.includes('chat.send')) {
            // Highlight function/component names
            const funcMatch = displayed.match(/(clarityChat|chat)\.(\w+)/)
            if (funcMatch) {
              highlighted = (
                <>
                  <span style={syntax.variable}>{funcMatch[1]}</span>
                  <span style={syntax.operator}>.</span>
                  <span style={syntax.function}>{funcMatch[2]}</span>
                  <span>{displayed.slice(funcMatch[0].length)}</span>
                </>
              )
            }
          }

          return (
            <CodeLine key={i} number={i + 1} highlight={i >= 6 && i <= 14}>
              {highlighted}
              {isCurrentLine && !isComplete && <Cursor />}
            </CodeLine>
          )
        })}
      </div>
      
      {isComplete && (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 pt-4 border-t border-zinc-800/50"
        >
          <div className="flex items-center gap-2 text-emerald-400">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-sm">Optimization complete: 70% token reduction</span>
          </div>
        </motion.div>
      )}
    </Terminal>
  )
}

// ============================================================================
// STATS BAR
// ============================================================================
function StatsBar() {
  const stats = [
    { value: "70%", label: "Avg. Savings", color: "from-emerald-400 to-emerald-500" },
    { value: "3", label: "Providers", color: "from-cyan-400 to-cyan-500" },
    { value: "<2kb", label: "Core Size", color: "from-purple-400 to-purple-500" },
    { value: "100%", label: "Type Safe", color: "from-pink-400 to-pink-500" },
  ]

  return (
    <div className="flex flex-wrap justify-center gap-6 md:gap-10">
      {stats.map((stat, i) => (
        <motion.div 
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 + i * 0.1 }}
          className="text-center"
        >
          <div className={`text-2xl md:text-3xl font-bold font-mono bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
            {stat.value}
          </div>
          <div className="text-xs text-zinc-500 uppercase tracking-wider mt-1">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  )
}

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
        {/* 3D Particle Field */}
        <div className="absolute inset-0 z-0 pointer-events-none" style={{ minHeight: '100vh', width: '100%' }}>
          <Suspense fallback={null}>
            <ParticleFieldCanvas className="w-full h-full" />
          </Suspense>
        </div>
        
        {/* Gradient mesh overlay - reduced opacity to show particles */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900 via-zinc-950/60 to-zinc-950 z-[1] pointer-events-none" />
        
        {/* Subtle grid */}
        <div 
          className="absolute inset-0 opacity-[0.015] z-[1] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
            backgroundSize: '72px 72px',
          }}
        />
        
        {/* Neon accent glows */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/[0.03] rounded-full blur-[100px] z-[1] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/[0.03] rounded-full blur-[100px] z-[1] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/[0.02] rounded-full blur-[120px] z-[1] pointer-events-none" />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-6 py-20"
        variants={prefersReducedMotion ? undefined : containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="flex justify-center mb-8">
          <div className="code-block rounded-lg overflow-hidden max-w-fit shadow-lg">
            <div className="code-block-header">
              <div className="code-block-controls">
                <div className="code-block-control code-block-control-close" />
                <div className="code-block-control code-block-control-minimize" />
                <div className="code-block-control code-block-control-maximize" />
              </div>
              <span className="code-block-prompt">&gt;_ bash</span>
              <div className="code-block-title" style={{ flex: '1' }}></div>
              <button 
                className="ml-auto text-muted-foreground hover:text-foreground transition-colors p-1"
                onClick={(e) => {
                  e.preventDefault()
                  navigator.clipboard.writeText('npm install @clarity-chat/react')
                }}
                aria-label="Copy command"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </button>
            </div>
            <div className="bg-white px-4 py-3 rounded-b-lg border-t border-gray-200">
              <code className="text-sm font-mono" style={{ color: 'hsl(0, 0%, 20%)' }}>
                <span style={{ color: 'hsl(280, 75%, 70%)' }}>npm install</span>{' '}
                <span style={{ color: 'hsl(25, 95%, 65%)' }}>@clarity-chat/react</span>
              </code>
            </div>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.div variants={itemVariants} className="text-center mb-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            <span className="text-white">Ship AI chat.</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-400">
              Save 70% on tokens.
            </span>
          </h1>
        </motion.div>

        {/* Subheadline */}
        <motion.p variants={itemVariants} className="text-center text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-12">
          Production-ready React components with built-in KV-cache alignment, 
          semantic deduplication, and intelligent context management.
        </motion.p>

        {/* Main Terminal Demo */}
        <motion.div variants={itemVariants} className="max-w-3xl mx-auto mb-12">
          <HeroCodeDemo />
        </motion.div>

        {/* Live Metrics */}
        <motion.div variants={itemVariants} className="max-w-xl mx-auto mb-12">
          <LiveMetrics />
        </motion.div>

        {/* CTAs */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Link
            href="#demo"
            className="group relative px-8 py-4 bg-white text-zinc-900 font-semibold rounded-xl overflow-hidden transition-all hover:scale-[1.02]"
          >
            <span className="relative z-10 flex items-center gap-2">
              Try Demo
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
          </Link>
          
          <Link
            href="#calculator"
            className="px-8 py-4 font-medium text-zinc-300 rounded-xl border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900/50 transition-all flex items-center gap-2"
          >
            <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            Calculate Savings
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div variants={itemVariants}>
          <StatsBar />
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#calculator" className="flex flex-col items-center gap-2 text-zinc-500 hover:text-zinc-300 transition-colors">
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