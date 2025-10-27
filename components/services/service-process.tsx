import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  MessageSquare,
  Lightbulb,
  Code,
  Rocket,
  Users,
  CheckCircle2,
} from "lucide-react";

const processSteps = [
  {
    icon: MessageSquare,
    title: "Discovery Call",
    duration: "30-60 min",
    description:
      "We learn about your product, technical architecture, and developer pain points. No sales pitch—just technical conversation.",
    deliverables: [
      "Technical requirements document",
      "Integration complexity assessment",
      "Recommended approach & timeline",
    ],
  },
  {
    icon: Lightbulb,
    title: "Design & Planning",
    duration: "1 week",
    description:
      "We map out the SDK architecture, component structure, and documentation strategy. You review and approve before we write a single line of code.",
    deliverables: [
      "SDK architecture diagram",
      "Component library mockups",
      "API wrapper specifications",
      "Documentation outline",
    ],
  },
  {
    icon: Code,
    title: "Development",
    duration: "2-6 weeks",
    description:
      "We build your SDK/frontend in weekly sprints with continuous demos. You see progress every week and can request adjustments.",
    deliverables: [
      "TypeScript SDK with full type safety",
      "React components & hooks",
      "Example applications",
      "Automated tests & CI/CD",
    ],
  },
  {
    icon: Users,
    title: "Testing & Refinement",
    duration: "1 week",
    description:
      "We test with real developers, gather feedback, and refine the developer experience. Your team reviews and approves.",
    deliverables: [
      "Developer testing feedback report",
      "Performance optimization",
      "Final bug fixes & polish",
      "Deployment preparation",
    ],
  },
  {
    icon: Rocket,
    title: "Launch & Documentation",
    duration: "1 week",
    description:
      "We help you launch with comprehensive documentation, video tutorials, and migration guides. Your developers have everything they need.",
    deliverables: [
      "Interactive documentation site",
      "Video tutorials & quickstarts",
      "Migration guides",
      "Community templates",
    ],
  },
  {
    icon: CheckCircle2,
    title: "Support & Iteration",
    duration: "Ongoing",
    description:
      "30 days of free support included. We're available for questions, bug fixes, and minor improvements. Extended support available.",
    deliverables: [
      "30 days of developer support",
      "Bug fixes & minor updates",
      "Performance monitoring",
      "Feature enhancement options",
    ],
  },
];

export function ServiceProcess() {
  return (
    <section className="py-20 sm:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Our Process
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            How We Work
            <span className="block text-primary">From First Call to Launch</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A transparent, collaborative process designed for busy technical teams.
            No surprises, no endless meetings—just consistent progress.
          </p>
        </div>

        {/* Process Steps */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Vertical Line (Desktop) */}
            <div className="hidden lg:block absolute left-[2.9rem] top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-purple-500 to-pink-500" />

            <div className="space-y-8">
              {processSteps.map((step, index) => (
                <Card
                  key={index}
                  className="relative p-8 hover:shadow-lg transition-shadow"
                >
                  <div className="flex flex-col lg:flex-row gap-6">
                    {/* Icon & Number */}
                    <div className="flex items-start gap-4 lg:gap-6">
                      <div className="relative flex-shrink-0">
                        {/* Number Badge */}
                        <div className="absolute -top-2 -left-2 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center z-10">
                          {index + 1}
                        </div>
                        {/* Icon */}
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center relative z-20">
                          <step.icon className="w-7 h-7 text-primary" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 space-y-4">
                        <div className="flex flex-wrap items-center gap-3">
                          <h3 className="text-2xl font-bold">{step.title}</h3>
                          <Badge variant="secondary" className="text-xs">
                            {step.duration}
                          </Badge>
                        </div>

                        <p className="text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>

                        {/* Deliverables */}
                        <div>
                          <div className="text-sm font-semibold text-muted-foreground mb-2">
                            DELIVERABLES
                          </div>
                          <ul className="space-y-2">
                            {step.deliverables.map((deliverable, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-2 text-sm"
                              >
                                <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                                <span>{deliverable}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="max-w-3xl mx-auto text-center mt-16 p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-purple-500/10 border border-primary/20">
          <h3 className="text-2xl font-bold mb-3">
            Questions About Our Process?
          </h3>
          <p className="text-muted-foreground mb-6">
            Every project is unique. Let's discuss how we can adapt our process to
            your specific needs and timeline.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:info@codeclarity.ai"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
            >
              Schedule Discovery Call
            </a>
            <a
              href="/pricing"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-border font-medium hover:bg-muted transition-colors"
            >
              View Pricing
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
