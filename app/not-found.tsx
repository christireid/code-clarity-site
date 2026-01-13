"use client"

import { motion, useReducedMotion } from "framer-motion"
import { Home, ArrowLeft, Search } from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { fadeInUp, staggerContainer } from "@/lib/animations"

export default function NotFound() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <>
      <Navigation />
      <main className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 radial-gradient-bg opacity-30" aria-hidden="true" />
        <div className="absolute inset-0 grid-pattern opacity-20" aria-hidden="true" />

        {/* Floating gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" aria-hidden="true" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000" aria-hidden="true" />

        <motion.div
          variants={prefersReducedMotion ? undefined : staggerContainer}
          initial={prefersReducedMotion ? undefined : "hidden"}
          animate="visible"
          className="relative text-center px-6 max-w-2xl mx-auto"
        >
          {/* 404 number */}
          <motion.div
            variants={prefersReducedMotion ? undefined : fadeInUp}
            className="relative mb-8"
          >
            <span className="text-[12rem] md:text-[16rem] font-bold gradient-text opacity-20 select-none leading-none">
              404
            </span>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="glass-card p-6 rounded-2xl">
                <Search className="w-12 h-12 text-primary" aria-hidden="true" />
              </div>
            </div>
          </motion.div>

          {/* Message */}
          <motion.h1
            variants={prefersReducedMotion ? undefined : fadeInUp}
            className="text-headline font-bold mb-4"
          >
            Page not found
          </motion.h1>

          <motion.p
            variants={prefersReducedMotion ? undefined : fadeInUp}
            className="text-body-large text-muted-foreground mb-8"
          >
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
            Let&apos;s get you back on track.
          </motion.p>

          {/* Action buttons */}
          <motion.div
            variants={prefersReducedMotion ? undefined : fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition-colors"
            >
              <Home className="w-5 h-5" />
              Back to home
            </Link>

            <button
              type="button"
              onClick={() => window.history.back()}
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg glass-card hover:border-primary/50 transition-colors font-medium"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              Go back
            </button>
          </motion.div>

          {/* Helpful links */}
          <motion.div
            variants={prefersReducedMotion ? undefined : fadeInUp}
            className="mt-16 glass-card rounded-2xl p-6"
          >
            <h2 className="font-semibold mb-4">Looking for something specific?</h2>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link href="/#features" className="text-muted-foreground hover:text-primary transition-colors">
                Features
              </Link>
              <Link href="/#demo" className="text-muted-foreground hover:text-primary transition-colors">
                Demo
              </Link>
              <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">
                Services
              </Link>
              <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                About
              </Link>
              <Link href="/#contact" className="text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </main>
      <Footer />
    </>
  )
}
