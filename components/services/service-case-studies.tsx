import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { TrendingUp, Users, Zap, ArrowRight } from "lucide-react";

const caseStudies = [
  {
    title: "AI Analytics Platform Achieves 200% Faster Developer Onboarding",
    client: "Stealth AI Analytics Startup",
    industry: "AI/ML Infrastructure",
    challenge:
      "Complex WebSocket API required 4+ hours of integration work. Developers struggled with authentication, connection management, and real-time data streaming. Support team was overwhelmed with integration questions.",
    solution:
      "Built comprehensive TypeScript SDK with React hooks, automatic reconnection logic, and built-in state management. Created interactive documentation with live examples and video tutorials.",
    results: [
      { icon: Zap, metric: "200%", label: "Faster Integration", detail: "4 hours → 20 minutes" },
      { icon: Users, metric: "85%", label: "Support Reduction", detail: "Zero tickets in first month" },
      { icon: TrendingUp, metric: "3x", label: "Trial Conversions", detail: "From 10% to 30%" },
    ],
    quote:
      "Code & Clarity transformed our developer experience. Integration time dropped from hours to minutes, and our support burden disappeared completely.",
    author: "CTO",
    tags: ["SDK Development", "TypeScript", "WebSockets"],
  },
  {
    title: "Content Generation Tool Reduces Drop-Off by 75%",
    client: "AI Content Platform",
    industry: "Content Marketing",
    challenge:
      "Powerful AI backend but clunky frontend caused 60% of trial users to drop off. Users found the interface confusing and slow, with no real-time feedback during content generation.",
    solution:
      "Complete frontend redesign with real-time streaming, optimistic UI updates, and intuitive UX patterns. Implemented progressive enhancement and mobile-responsive design with dark mode.",
    results: [
      { icon: Users, metric: "75%", label: "Drop-Off Reduction", detail: "60% → 15%" },
      { icon: TrendingUp, metric: "3x", label: "Daily Active Users", detail: "From 500 to 1,500" },
      { icon: Zap, metric: "50%", label: "Engagement Increase", detail: "Sessions per user" },
    ],
    quote:
      "The new frontend completely changed how users perceive our product. What was once 'powerful but clunky' is now 'intuitive and delightful.'",
    author: "Head of Product",
    tags: ["Frontend Development", "React", "UI/UX"],
  },
  {
    title: "Model API Provider Cuts Support Tickets by 85%",
    client: "AI Model API Company",
    industry: "AI Infrastructure",
    challenge:
      "Developers struggled with complex API, leading to high support burden (50+ tickets/week) and low adoption. Documentation was technical but not practical, lacking real-world examples.",
    solution:
      "Created comprehensive interactive documentation with live API examples, step-by-step quickstart guides, video tutorials, and troubleshooting playbooks. Built community template library.",
    results: [
      { icon: TrendingUp, metric: "85%", label: "Support Reduction", detail: "50 → 7 tickets/week" },
      { icon: Users, metric: "10x", label: "Self-Service Adoption", detail: "Doc views per signup" },
      { icon: Zap, metric: "9/10", label: "Developer NPS", detail: "Up from 6/10" },
    ],
    quote:
      "Finally, documentation that developers actually read and understand. Our support team went from firefighting to strategic work.",
    author: "Developer Relations Lead",
    tags: ["Documentation", "Developer Experience", "Training"],
  },
];

export function ServiceCaseStudies() {
  return (
    <section className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Case Studies
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Real Results
            <span className="block text-primary">From Real Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            See how we've helped AI startups transform their developer experience and
            drive measurable business outcomes.
          </p>
        </div>

        {/* Case Study Cards */}
        <div className="space-y-12 max-w-5xl mx-auto">
          {caseStudies.map((study, index) => (
            <Card
              key={index}
              className="p-8 sm:p-12 hover:shadow-xl transition-shadow"
            >
              <div className="space-y-8">
                {/* Header */}
                <div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {study.tags.map((tag, i) => (
                      <Badge key={i} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-3">
                    {study.title}
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>{study.client}</span>
                    <span>•</span>
                    <span>{study.industry}</span>
                  </div>
                </div>

                {/* Challenge & Solution */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-2">
                      THE CHALLENGE
                    </h4>
                    <p className="text-sm leading-relaxed">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-2">
                      OUR SOLUTION
                    </h4>
                    <p className="text-sm leading-relaxed">{study.solution}</p>
                  </div>
                </div>

                {/* Results */}
                <div>
                  <h4 className="text-sm font-semibold text-muted-foreground mb-4">
                    THE RESULTS
                  </h4>
                  <div className="grid sm:grid-cols-3 gap-6">
                    {study.results.map((result, i) => (
                      <div
                        key={i}
                        className="flex flex-col items-center text-center p-6 rounded-xl bg-gradient-to-br from-primary/10 to-purple-500/10"
                      >
                        <result.icon className="w-8 h-8 text-primary mb-3" />
                        <div className="text-3xl font-bold text-primary mb-1">
                          {result.metric}
                        </div>
                        <div className="font-semibold mb-1">{result.label}</div>
                        <div className="text-xs text-muted-foreground">
                          {result.detail}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quote */}
                <div className="border-l-4 border-primary pl-6 py-2">
                  <p className="text-lg italic mb-2">"{study.quote}"</p>
                  <p className="text-sm text-muted-foreground">— {study.author}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="max-w-3xl mx-auto text-center mt-16">
          <h3 className="text-2xl font-bold mb-3">
            Want Similar Results for Your Product?
          </h3>
          <p className="text-muted-foreground mb-6">
            Let's discuss your specific challenges and how we can help you achieve
            measurable improvements in developer experience and business metrics.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/pricing">
                View Pricing & Packages
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="mailto:info@codeclarity.ai">
                Schedule a Call
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
