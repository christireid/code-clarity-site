"use client";

import { ArrowRight, Code2, Layers, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { scrollToContactForm } from "./contact-form";

export function FinalImpactSection() {
  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-b from-white to-gray-50">
      {/* Animated gradient blobs (from HeroSection) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] gradient-blob" />
        <div
          className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] gradient-blob"
          style={{ animationDelay: "10s" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main statement */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white/80 backdrop-blur-sm mb-6">
            <Code2 className="w-4 h-4" />
            <span className="text-sm font-medium text-gray-700">
              Where backend meets frontend excellence
            </span>
          </div>

          <h2 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
            <span className="gradient-text">
              Developers will love your product
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto text-balance">
            We don't just build UIs. We integrate backend and frontend so
            seamlessly that developers are excited to build with your product.
          </p>
        </div>

        {/* Value props grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="rounded-xl p-8 bg-card border border-border minimal-card">
            <div className="w-14 h-14 rounded-lg holographic-icon flex items-center justify-center mb-6">
              <Layers className="w-7 h-7 text-foreground" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Full-Stack Integration
            </h3>
            <p className="text-gray-600">
              Backend APIs that feel natural to use. Frontend interfaces that
              make complex systems simple.
            </p>
          </div>

          <div
            className="rounded-xl p-8 bg-card border border-border minimal-card"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="w-14 h-14 rounded-lg holographic-icon flex items-center justify-center mb-6">
              <Code2 className="w-7 h-7 text-foreground" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Developer Experience</h3>
            <p className="text-gray-600">
              We build products that developers actually want to use. Clean
              APIs, intuitive interfaces, delightful interactions.
            </p>
          </div>

          <div
            className="rounded-xl p-8 bg-card border border-border minimal-card"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="w-14 h-14 rounded-lg holographic-icon flex items-center justify-center mb-6">
              <Rocket className="w-7 h-7 text-foreground" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Built for Builders</h3>
            <p className="text-gray-600">
              From AI tools to developer platforms. We specialize in products
              that technical teams love.
            </p>
          </div>
        </div>

        {/* Final CTA */}
        <div
          className="text-center animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          <div className="inline-flex flex-col items-center gap-6 p-12 rounded-3xl border border-border bg-card backdrop-blur-sm minimal-card">
            <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold text-balance leading-tight">
              Ready to Bridge the Gap &{" "}
              <span className="gradient-text">Get Developers Building?</span>
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl text-balance">
              Let's talk about your developer tools, AI products, or technical
              platforms. We'll show you how great integration feels.
            </p>
            <Button
              size="lg"
              className="primary-button px-12 py-7 text-lg font-semibold"
              onClick={scrollToContactForm}
            >
              <span className="relative z-10 flex items-center gap-2">
                Start a Conversation
                <ArrowRight className="w-4 h-4 transition-transform duration-300" />
              </span>
            </Button>
            <p className="text-sm text-gray-500">
              Email us at{" "}
              <a
                href="mailto:info@codeclarity.ai"
                className="cursor-pointer bg-gradient-to-r from-[oklch(0.5_0.12_280)] to-[oklch(0.6_0.1_240)] bg-clip-text text-transparent mt-0.5 font-medium"
              >
                info@codeclarity.ai
              </a>{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
