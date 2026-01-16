"use client"

import { motion, useReducedMotion } from "framer-motion"
import { useState, useMemo } from "react"
import { Calculator, TrendingDown, DollarSign, Sparkles } from "lucide-react"

const presets = [
  { label: "Startup", requests: 100000, avgTokens: 500 },
  { label: "Growth", requests: 500000, avgTokens: 750 },
  { label: "Scale", requests: 2000000, avgTokens: 1000 },
  { label: "Enterprise", requests: 10000000, avgTokens: 1500 },
]

// Approximate cost per 1K tokens (input + output average)
const COST_PER_1K_TOKENS = 0.015 // GPT-4 average

export function SavingsCalculator() {
  const prefersReducedMotion = useReducedMotion()
  const [activePreset, setActivePreset] = useState(1) // Default to Growth
  const [savingsPercent, setSavingsPercent] = useState(70) // Default 70%

  const preset = presets[activePreset]

  const calculations = useMemo(() => {
    const totalTokens = preset.requests * preset.avgTokens
    const baseCost = (totalTokens / 1000) * COST_PER_1K_TOKENS
    const savings = baseCost * (savingsPercent / 100)
    const newCost = baseCost - savings

    return {
      totalTokens,
      baseCost,
      savings,
      newCost,
      savingsPercent,
    }
  }, [preset, savingsPercent])

  const formatCurrency = (value: number) => {
    if (!value || isNaN(value) || !isFinite(value)) return "$0"
    if (value >= 1000000) return `$${(value / 1000000).toFixed(1)}M`
    if (value >= 1000) return `$${(value / 1000).toFixed(1)}K`
    return `$${value.toFixed(0)}`
  }

  const formatNumber = (value: number) => {
    if (!value || isNaN(value) || !isFinite(value)) return "0"
    if (value >= 1000000000) return `${(value / 1000000000).toFixed(1)}B`
    if (value >= 1000000) return `${(value / 1000000).toFixed(1)}M`
    if (value >= 1000) return `${(value / 1000).toFixed(0)}K`
    return value.toString()
  }

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 radial-gradient-bg opacity-40" />

      <div className="relative max-w-4xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium text-accent mb-6">
            <Calculator className="w-4 h-4" />
            Token Savings Calculator
          </span>
          <h2 className="text-headline font-bold mb-4">
            See how much you could <span className="gradient-text-gold">save</span>
          </h2>
          <p className="text-body-large text-muted-foreground max-w-2xl mx-auto">
            Our built-in token optimization typically reduces API costs by 60-90%
          </p>
        </motion.div>

        {/* Calculator card */}
        <motion.div
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="premium-card rounded-2xl p-8"
        >
          {/* Preset selector */}
          <div className="mb-8">
            <label className="block text-sm font-medium mb-3">
              Select your scale
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {presets.map((p, i) => (
                <button
                  key={p.label}
                  onClick={() => setActivePreset(i)}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    activePreset === i
                      ? "bg-primary text-white"
                      : "bg-muted hover:bg-muted/80"
                  }`}
                >
                  <div>{p.label}</div>
                  <div className="text-xs opacity-70 mt-1">
                    {formatNumber(p.requests)} req/mo
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Savings slider */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-3">
              <label className="text-sm font-medium">
                Optimization level
              </label>
              <span className="text-sm text-primary font-semibold">
                {savingsPercent}% savings
              </span>
            </div>
            <input
              type="range"
              min="40"
              max="90"
              value={savingsPercent}
              onChange={(e) => setSavingsPercent(Number(e.target.value))}
              className="w-full h-2 bg-muted rounded-full appearance-none cursor-pointer accent-primary"
            />
            <div className="flex justify-between text-xs text-muted-foreground mt-2">
              <span>Basic (40%)</span>
              <span>Typical (70%)</span>
              <span>Maximum (90%)</span>
            </div>
          </div>

          {/* Results */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Without Clarity */}
            <div className="glass-card rounded-xl p-5 text-center">
              <div className="text-sm text-muted-foreground mb-2">
                Without Clarity Chat
              </div>
              <div className="text-3xl font-bold text-red-400 line-through opacity-60">
                {formatCurrency(calculations.baseCost)}
              </div>
              <div className="text-xs text-muted-foreground mt-1">
                per month
              </div>
            </div>

            {/* Savings */}
            <div className="glass-card rounded-xl p-5 text-center border-accent/30">
              <div className="flex items-center justify-center gap-2 text-sm text-accent mb-2">
                <TrendingDown className="w-4 h-4" />
                You Save
              </div>
              <motion.div
                key={calculations.savings}
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                className="text-3xl font-bold gradient-text-gold"
              >
                {formatCurrency(calculations.savings)}
              </motion.div>
              <div className="text-xs text-muted-foreground mt-1">
                per month
              </div>
            </div>

            {/* With Clarity */}
            <div className="glass-card rounded-xl p-5 text-center border-primary/30">
              <div className="flex items-center justify-center gap-2 text-sm text-primary mb-2">
                <DollarSign className="w-4 h-4" />
                With Clarity Chat
              </div>
              <motion.div
                key={calculations.newCost}
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                className="text-3xl font-bold text-emerald-400"
              >
                {formatCurrency(calculations.newCost)}
              </motion.div>
              <div className="text-xs text-muted-foreground mt-1">
                per month
              </div>
            </div>
          </div>

          {/* Annual projection */}
          <motion.div
            initial={prefersReducedMotion ? undefined : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-8 p-4 rounded-xl bg-gradient-to-r from-accent/10 to-primary/10 border border-accent/20"
          >
            <div className="flex items-center justify-center gap-3">
              <Sparkles className="w-5 h-5 text-accent" />
              <span className="text-sm">
                Annual savings:{" "}
                <span className="font-bold text-accent">
                  {formatCurrency(calculations.savings * 12)}
                </span>
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* Fine print */}
        <p className="text-center text-xs text-muted-foreground mt-6">
          * Estimates based on GPT-4 pricing. Actual savings vary by model and usage patterns.
        </p>
      </div>
    </section>
  )
}

export default SavingsCalculator
