import { Sparkles, Code2, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Sparkles,
    title: "Frontend for AI Products",
    description:
      "Build React/TypeScript interfaces that make AI systems intuitive—not intimidating.",
    features: [
      "Custom dashboards for model outputs and training pipelines",
      "Real-time visualization of AI workflows",
      "Chat interfaces: proof-of-concept → automation workflows → production chat systems",
      "Data annotation tools that don't feel like punishment",
      "Admin panels for managing models, datasets, and deployments",
    ],
    outcome:
      "Clean component architecture, optimized performance, and interfaces that help users understand what your AI is doing (and why).",
    perfectFor:
      "AI platforms, ML tools, chatbot builders, predictive analytics products",
  },
  {
    icon: Code2,
    title: "SDK & Wrapper Development",
    description:
      "Turn your backend APIs into JavaScript/TypeScript SDKs that developers actually want to integrate.",
    features: [
      "Type-safe SDK wrappers for your APIs",
      "Framework specific hooks and components for common integration patterns",
      "Code examples and starter templates",
      "Error handling that gives developers actionable feedback",
      "Developer-friendly abstractions over complex backend logic",
    ],
    outcome:
      "Your API becomes approachable to the massive JavaScript/TypeScript ecosystem. Faster integrations, better developer experience, higher adoption.",
    perfectFor:
      "API-first products, backend services targeting frontend developers, platforms building ecosystems",
  },
  {
    icon: BookOpen,
    title: "Developer Documentation & Training",
    description:
      "Create documentation, demos, and training materials that get developers productive fast.",
    features: [
      "Interactive documentation sites with live code playgrounds",
      "Hands-on workshops and implementation guides",
      "API reference docs that explain why, not just what",
      "Sample projects developers can clone and customize",
    ],
    outcome:
      "Documentation that becomes your best sales tool. Fewer support tickets, faster onboarding, developers who become advocates.",
    perfectFor:
      "Developer tools, internal platforms, open source projects, technical APIs",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 md:py-32 scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-balance leading-tight">
            Three Ways We Help You Ship Interfaces{" "}
            <span className="gradient-text">Developers Actually Use</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Specialized solutions for leadership teams and developer-facing
            products
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="rounded-xl p-8 bg-card border border-border minimal-card"
            >
              <div className="w-14 h-14 rounded-lg holographic-icon flex items-center justify-center mb-6">
                <service.icon
                  className="w-7 h-7 text-foreground"
                  strokeWidth={1.5}
                />
              </div>

              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-base text-muted-foreground mb-8 leading-relaxed">
                {service.description}
              </p>

              <div className="space-y-8">
                <div>
                  <h4 className="font-semibold text-xs uppercase tracking-wide text-foreground mb-4">
                    What This Looks Like:
                  </h4>
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li
                        key={i}
                        className="text-sm text-muted-foreground flex items-start gap-3"
                      >
                        <span className="text-foreground mt-1">•</span>
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-xs uppercase tracking-wide text-foreground mb-4">
                    What You Get:
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.outcome}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-xs uppercase tracking-wide text-foreground mb-4">
                    Perfect For:
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.perfectFor}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button
            size="lg"
            className="primary-button px-12 py-7 text-lg font-semibold"
          >
            Let's Discuss Your Project
          </Button>
        </div>
      </div>
    </section>
  );
}
