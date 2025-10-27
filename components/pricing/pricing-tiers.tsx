"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Sparkles } from "lucide-react";
import { useState } from "react";

const pricingTiers = [
  {
    id: "sdk-starter",
    name: "SDK Starter",
    tagline: "Perfect for simple API wrappers",
    price: "$15,000 - $25,000",
    timeline: "2-3 weeks",
    bestFor: "Single-service APIs, REST wrappers, basic documentation",
    features: [
      "TypeScript SDK with full type safety",
      "REST API wrapper with error handling",
      "Authentication & session management",
      "Basic React hooks (3-5 hooks)",
      "Example application",
      "API reference documentation",
      "Quickstart guide",
      "30 days of support",
    ],
    deliverables: [
      "Production-ready SDK package",
      "Example integration app",
      "Documentation site",
      "Video quickstart tutorial",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    id: "sdk-pro",
    name: "SDK Pro",
    tagline: "For complex integrations & real-time features",
    price: "$35,000 - $50,000",
    timeline: "4-6 weeks",
    bestFor:
      "WebSocket APIs, real-time features, complex state management, custom UI components",
    features: [
      "Everything in SDK Starter, plus:",
      "WebSocket wrapper with auto-reconnection",
      "Advanced React hooks (10+ hooks)",
      "Custom component library (15+ components)",
      "Real-time state synchronization",
      "Optimistic UI updates",
      "Comprehensive error boundaries",
      "Interactive documentation with live examples",
      "Video tutorial series (5-7 videos)",
      "Migration guides & troubleshooting",
      "30 days of priority support",
    ],
    deliverables: [
      "Advanced SDK with WebSocket support",
      "Custom React component library",
      "Multiple example applications",
      "Interactive documentation platform",
      "Video tutorial library",
      "Developer onboarding kit",
    ],
    cta: "Choose Pro",
    popular: true,
  },
  {
    id: "frontend-complete",
    name: "Frontend Complete",
    tagline: "Full frontend + SDK + documentation",
    price: "$60,000 - $100,000",
    timeline: "6-10 weeks",
    bestFor:
      "Complete frontend rebuild, design system, full product experience, enterprise needs",
    features: [
      "Everything in SDK Pro, plus:",
      "Complete custom frontend design & development",
      "Full design system with branding",
      "Advanced UI/UX with animations & micro-interactions",
      "Mobile-responsive with progressive web app",
      "Dark/light mode with theme customization",
      "Accessibility compliance (WCAG AA)",
      "Performance optimization (<2s load time)",
      "SEO optimization & meta tags",
      "Analytics integration",
      "A/B testing framework",
      "Comprehensive testing suite",
      "CI/CD pipeline setup",
      "60 days of priority support",
      "Quarterly improvement roadmap",
    ],
    deliverables: [
      "Production-ready frontend application",
      "Advanced SDK & component library",
      "Complete design system",
      "Interactive documentation ecosystem",
      "Comprehensive testing suite",
      "DevOps & deployment pipeline",
      "Training materials & handoff docs",
      "3-month improvement roadmap",
    ],
    cta: "Go Complete",
    popular: false,
  },
];

export function PricingTiers() {
  const [selectedTier, setSelectedTier] = useState<string | null>(null);

  return (
    <section className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Choose Your Package
          </h2>
          <p className="text-lg text-muted-foreground">
            Select the package that matches your needs. All packages include source
            code ownership, 30+ days support, and our money-back guarantee.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingTiers.map((tier) => (
            <Card
              key={tier.id}
              id={tier.id}
              className={`relative p-8 flex flex-col ${
                tier.popular
                  ? "border-2 border-primary shadow-2xl scale-105"
                  : "border-border"
              } hover:shadow-xl transition-all`}
              onMouseEnter={() => setSelectedTier(tier.id)}
              onMouseLeave={() => setSelectedTier(null)}
            >
              {/* Popular Badge */}
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="px-4 py-1 text-sm font-semibold">
                    <Sparkles className="w-3 h-3 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}

              {/* Header */}
              <div className="space-y-4 pb-6 border-b border-border">
                <div>
                  <h3 className="text-2xl font-bold mb-1">{tier.name}</h3>
                  <p className="text-sm text-muted-foreground">{tier.tagline}</p>
                </div>

                <div>
                  <div className="text-3xl font-bold text-primary mb-1">
                    {tier.price}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {tier.timeline} delivery
                  </div>
                </div>

                <div className="text-sm">
                  <span className="font-semibold">Best for:</span>{" "}
                  <span className="text-muted-foreground">{tier.bestFor}</span>
                </div>
              </div>

              {/* Features */}
              <div className="flex-1 py-6 space-y-3">
                {tier.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    {feature.includes("Everything in") ? (
                      <span className="text-sm font-semibold text-primary">
                        {feature}
                      </span>
                    ) : (
                      <>
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </>
                    )}
                  </div>
                ))}
              </div>

              {/* Deliverables */}
              <div className="py-6 border-t border-border space-y-3">
                <div className="text-sm font-semibold text-muted-foreground">
                  DELIVERABLES
                </div>
                {tier.deliverables.map((deliverable, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-xs text-muted-foreground">
                      {deliverable}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Button
                size="lg"
                className="w-full"
                variant={tier.popular ? "default" : "outline"}
                asChild
              >
                <a href={`mailto:info@codeclarity.ai?subject=Interested in ${tier.name}&body=Hi, I'm interested in the ${tier.name} package. Let's schedule a discovery call to discuss my project.`}>
                  {tier.cta}
                </a>
              </Button>
            </Card>
          ))}
        </div>

        {/* Add-Ons */}
        <div className="max-w-4xl mx-auto mt-16 p-8 rounded-2xl bg-muted/50 border border-border">
          <h3 className="text-xl font-bold mb-4">Add-Ons & Extensions</h3>
          <div className="grid sm:grid-cols-2 gap-6 text-sm">
            <div>
              <div className="font-semibold mb-2">Extended Support</div>
              <div className="text-muted-foreground mb-1">
                $2,500/month for ongoing updates, new features, and priority support
              </div>
            </div>
            <div>
              <div className="font-semibold mb-2">Training & Workshops</div>
              <div className="text-muted-foreground mb-1">
                $5,000 for team training sessions and technical workshops
              </div>
            </div>
            <div>
              <div className="font-semibold mb-2">Performance Audit</div>
              <div className="text-muted-foreground mb-1">
                $3,000 for comprehensive performance analysis and optimization
              </div>
            </div>
            <div>
              <div className="font-semibold mb-2">Migration Services</div>
              <div className="text-muted-foreground mb-1">
                $8,000+ to migrate existing integrations to new SDK
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="max-w-3xl mx-auto text-center mt-12 text-sm text-muted-foreground">
          <p>
            Need something custom? Every project is unique. Let's discuss your
            specific requirements and create a tailored package.{" "}
            <a
              href="mailto:info@codeclarity.ai"
              className="text-primary hover:underline font-medium"
            >
              Schedule a discovery call
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
