"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { scrollToContactForm } from "./contact-form";

export function HeroSection() {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] gradient-blob" />
        <div
          className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] gradient-blob"
          style={{ animationDelay: "10s" }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-6xl text-center">
        <div className="space-y-8 md:space-y-12">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium fade-in backdrop-blur-sm">
            <Sparkles className="w-4 h-4" />
            Trusted by 50+ AI Startups
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-balance fade-in-delay-1">
            Turn Your Complex API Into
            <span className="block mt-2 gradient-text">
              A Product Developers Love
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed fade-in-delay-2">
            We build TypeScript SDKs, React frontends, and developer documentation
            that reduce integration time from <strong>4 hours to 20 minutes</strong>.
          </p>

          {/* Social Proof Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto pt-4 fade-in-delay-2">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-primary">200%</div>
              <div className="text-sm text-muted-foreground mt-1">
                Faster Integration
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-primary">85%</div>
              <div className="text-sm text-muted-foreground mt-1">
                Fewer Support Tickets
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-primary">10x</div>
              <div className="text-sm text-muted-foreground mt-1">
                Developer Adoption
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 fade-in-delay-3">
            <Button
              size="lg"
              asChild
              className="w-full sm:w-auto text-lg px-12 py-7 primary-button font-semibold"
            >
              <Link href="/pricing">
                View Pricing
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="w-full sm:w-auto text-lg px-12 py-7 font-medium backdrop-blur-sm"
            >
              <Link href="/services">Explore Services</Link>
            </Button>
          </div>

          {/* Trust Line */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-muted-foreground pt-8 fade-in-delay-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full accent-dot" />
              <span>2-10 week delivery</span>
            </div>
            <div className="hidden sm:block w-1 h-1 rounded-full bg-muted-foreground/30" />
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full accent-dot" />
              <span>Fixed pricing</span>
            </div>
            <div className="hidden sm:block w-1 h-1 rounded-full bg-muted-foreground/30" />
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full accent-dot" />
              <span>Money-back guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
