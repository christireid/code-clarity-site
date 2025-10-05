import { Phone, FileText, Hammer, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Phone,
    title: "Strategy Call",
    description:
      "We discuss what you're building, who's using it, your technical requirements and constraints, your goals and timeline, and whether we're the right fit (we'll be honest if we're not).",
    outcome: "Clear understanding of scope, approach, and rough timeline",
  },
  {
    number: "02",
    icon: FileText,
    title: "Proposal & Planning",
    description:
      "We'll send you a detailed proposal with milestones and deliverables, technical approach and architecture plan, timeline broken down by phase, and fixed pricing (no surprise bills). NDAs and contractor agreements signed at this stage.",
    outcome: "Complete clarity before investing",
  },
  {
    number: "03",
    icon: Hammer,
    title: "Build & Iterate",
    description:
      "We build in focused 1-week sprints. You see working demos every Friday. Feedback incorporated before moving forward. Regular async updates (Loom videos, written summaries). Code pushed to your GitHub as we go.",
    outcome: "Visibility and control throughout, not a big reveal at the end",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Launch & Handoff",
    description:
      "Final testing and deployment preparation. Complete documentation of architecture and setup. Code walkthrough session (recorded). Training for your team (if needed). Post-launch support plan available.",
    outcome: "Production-ready code and confidence to maintain it",
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="py-24 md:py-32 scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-balance leading-tight">
            From First Call to Production:{" "}
            <span className="gradient-text">The Process</span>
          </h2>
        </div>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-border via-border to-transparent" />

          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={index} className="relative flex gap-8 group">
                <div className="relative z-10 flex-shrink-0 w-16 h-16 rounded-full bg-background border-2 border-foreground flex items-center justify-center process-icon transition-all duration-300 group-hover:border-[oklch(0.6_0.12_280)] group-hover:shadow-lg group-hover:shadow-[oklch(0.6_0.12_280/0.2)]">
                  <step.icon
                    className="w-7 h-7 text-foreground transition-colors duration-300 group-hover:text-[oklch(0.5_0.12_280)]"
                    strokeWidth={1.5}
                  />
                </div>

                {/* Content */}
                <div className="flex-1 pb-8">
                  <div className="flex items-baseline gap-4 mb-3">
                    <span className="text-4xl font-bold text-muted-foreground/30 transition-colors duration-300 group-hover:text-muted-foreground/50">
                      {step.number}
                    </span>
                    <div>
                      <h3 className="text-2xl font-bold">{step.title}</h3>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {step.description}
                  </p>
                  <div className="inline-flex items-start gap-2 text-sm bg-gradient-to-br from-muted to-muted/50 px-4 py-2 rounded-lg border border-border/50">
                    <span className="bg-gradient-to-r from-[oklch(0.5_0.12_280)] to-[oklch(0.6_0.1_240)] bg-clip-text text-transparent mt-0.5">
                      ✓
                    </span>
                    <span className="font-medium">{step.outcome}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 text-center max-w-2xl mx-auto">
          <p className="text-lg text-muted-foreground leading-relaxed">
            <span className="bg-gradient-to-r from-[oklch(0.5_0.12_280)] to-[oklch(0.6_0.1_240)] bg-clip-text text-transparent font-semibold">
              Weekly demos.
            </span>{" "}
            <span className="text-foreground font-semibold">No surprises.</span>{" "}
            <span className="text-foreground font-semibold">
              Full transparency.
            </span>{" "}
            You're never in the dark about what's happening with your project.
          </p>
        </div>
      </div>
    </section>
  );
}
