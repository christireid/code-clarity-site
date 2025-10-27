import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  Code2,
  Palette,
  BookOpen,
  ArrowRight,
  CheckCircle2,
  Clock,
  Users,
  TrendingUp,
} from "lucide-react";

const services = [
  {
    id: "sdk-development",
    icon: Code2,
    title: "SDK & Wrapper Development",
    tagline: "Turn 4-hour integrations into 20-minute setups",
    description:
      "We transform your complex backend APIs into elegant TypeScript/React SDKs that developers can integrate in minutes, not hours.",
    features: [
      "Type-safe TypeScript SDK with full IntelliSense",
      "React hooks for state management & real-time updates",
      "WebSocket wrappers with auto-reconnection",
      "Comprehensive error handling & retry logic",
      "Built-in authentication & session management",
      "Example apps & starter templates",
    ],
    outcomes: [
      { icon: Clock, label: "4 hours → 20 minutes", metric: "Integration Time" },
      { icon: Users, label: "200% increase", metric: "Developer Adoption" },
      { icon: TrendingUp, label: "85% reduction", metric: "Support Tickets" },
    ],
    caseStudy: {
      client: "AI Analytics Platform",
      problem:
        "Complex WebSocket API required 4+ hours of integration work and constant developer support",
      solution:
        "Built TypeScript SDK with React hooks, reducing integration to 20 minutes with zero support tickets in first month",
      result: "200% increase in trial-to-paid conversions",
    },
    pricing: "Starting at $15,000",
    timeline: "2-4 weeks",
    link: "/pricing#sdk-starter",
  },
  {
    id: "frontend-ai",
    icon: Palette,
    title: "Frontend for AI Products",
    tagline: "Beautiful interfaces that users actually enjoy",
    description:
      "We design and build React frontends that make your AI system feel intuitive, responsive, and delightful to use.",
    features: [
      "Custom React components & design system",
      "Real-time streaming interfaces for AI responses",
      "Optimistic UI updates & loading states",
      "Mobile-responsive with accessibility (WCAG AA)",
      "Dark/light mode with theme customization",
      "Performance-optimized with lazy loading",
    ],
    outcomes: [
      { icon: Users, label: "50% improvement", metric: "User Engagement" },
      { icon: TrendingUp, label: "40% increase", metric: "Feature Adoption" },
      { icon: Clock, label: "3x faster", metric: "Time to Value" },
    ],
    caseStudy: {
      client: "AI Content Generation Tool",
      problem:
        "Backend was powerful but frontend felt clunky, causing 60% drop-off in trial users",
      solution:
        "Redesigned entire frontend with real-time streaming, optimistic updates, and intuitive UX patterns",
      result: "60% to 15% drop-off rate, 3x increase in daily active users",
    },
    pricing: "Starting at $35,000",
    timeline: "4-8 weeks",
    link: "/pricing#sdk-pro",
  },
  {
    id: "documentation",
    icon: BookOpen,
    title: "Developer Documentation & Training",
    tagline: "Documentation that developers actually read",
    description:
      "We create comprehensive, example-driven documentation and training materials that turn your product into a developer favorite.",
    features: [
      "Interactive API documentation with live examples",
      "Step-by-step quickstart guides (5-10 minutes)",
      "Video tutorials & screencasts",
      "Troubleshooting guides & FAQ sections",
      "SDK reference docs with TypeScript annotations",
      "Community templates & code snippets",
    ],
    outcomes: [
      { icon: Users, label: "10x increase", metric: "Self-Service Adoption" },
      { icon: TrendingUp, label: "85% reduction", metric: "Support Load" },
      { icon: Clock, label: "90% faster", metric: "Onboarding Time" },
    ],
    caseStudy: {
      client: "AI Model API Provider",
      problem:
        "Developers struggled with complex API, leading to high support burden and low adoption",
      solution:
        "Created interactive documentation with live examples, video tutorials, and comprehensive troubleshooting guides",
      result: "Support tickets dropped 85%, developer NPS increased from 6 to 9",
    },
    pricing: "Starting at $8,000",
    timeline: "2-3 weeks",
    link: "/pricing#sdk-starter",
  },
];

export function ServiceOfferings() {
  return (
    <section id="offerings" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Our Services
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Everything You Need to Build
            <span className="block text-primary">Developer-Friendly AI Products</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Choose one service or combine them for a complete solution. Each package
            includes ongoing support and iteration.
          </p>
        </div>

        {/* Service Cards */}
        <div className="space-y-24">
          {services.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-12 items-center`}
            >
              {/* Content */}
              <div className="flex-1 space-y-6">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary">
                  <service.icon className="w-7 h-7" />
                </div>

                <div>
                  <h3 className="text-3xl font-bold mb-2">{service.title}</h3>
                  <p className="text-lg text-primary font-medium">
                    {service.tagline}
                  </p>
                </div>

                <p className="text-muted-foreground text-lg leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-3">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Outcomes */}
                <div className="grid sm:grid-cols-3 gap-4 pt-4">
                  {service.outcomes.map((outcome, i) => (
                    <div
                      key={i}
                      className="flex flex-col items-center text-center p-4 rounded-lg bg-muted/50"
                    >
                      <outcome.icon className="w-6 h-6 text-primary mb-2" />
                      <div className="font-semibold text-lg">{outcome.label}</div>
                      <div className="text-xs text-muted-foreground">
                        {outcome.metric}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Pricing & CTA */}
                <div className="flex flex-wrap items-center gap-4 pt-4">
                  <div className="flex flex-col">
                    <span className="text-2xl font-bold text-primary">
                      {service.pricing}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {service.timeline} delivery
                    </span>
                  </div>
                  <Button asChild size="lg">
                    <Link href={service.link}>
                      Get Started
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="ghost" size="lg">
                    <Link href={`#case-study-${index + 1}`}>View Case Study</Link>
                  </Button>
                </div>
              </div>

              {/* Case Study Card */}
              <div className="flex-1 w-full">
                <Card
                  id={`case-study-${index + 1}`}
                  className="p-8 bg-gradient-to-br from-primary/5 to-purple-500/5 border-primary/20"
                >
                  <Badge className="mb-4">Case Study</Badge>
                  <h4 className="text-xl font-bold mb-4">{service.caseStudy.client}</h4>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="text-sm font-semibold text-muted-foreground mb-1">
                        THE PROBLEM
                      </div>
                      <p className="text-sm">{service.caseStudy.problem}</p>
                    </div>

                    <div>
                      <div className="text-sm font-semibold text-muted-foreground mb-1">
                        OUR SOLUTION
                      </div>
                      <p className="text-sm">{service.caseStudy.solution}</p>
                    </div>

                    <div className="pt-4 border-t border-border">
                      <div className="text-sm font-semibold text-muted-foreground mb-1">
                        THE RESULT
                      </div>
                      <p className="text-lg font-bold text-primary">
                        {service.caseStudy.result}
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
