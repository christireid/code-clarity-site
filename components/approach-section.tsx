import { Code, Users, Lock } from "lucide-react";

const approaches = [
  {
    icon: Code,
    title: "We Speak Both Languages",
    description:
      "Most frontend developers struggle with technical products because they don't understand the backend complexity. Most backend developers build clunky UIs because frontend isn't their specialty.",
    points: [
      "AI model architectures and training pipelines",
      "API design and data flow patterns",
      "Automation logic and webhook systems",
      "Authentication, rate limiting, and error states",
    ],
    conclusion:
      "And we know how to surface all of it in interfaces that make sense to your users.",
  },
  {
    icon: Users,
    title: "Built for Developers, Not Just Users",
    description:
      "When your audience is developers, everything changes. They expect:",
    points: [
      "Code examples they can copy-paste",
      "TypeScript definitions that are actually accurate",
      "Error messages that help them debug",
      "Performance that doesn't tank with scale",
      "Documentation they don't have to reverse-engineer",
    ],
    conclusion:
      "We build with these expectations baked in—because we are the users.",
  },
  {
    icon: Lock,
    title: "You Own Everything",
    description:
      "No black boxes. No vendor lock-in. No dependency on us forever.",
    points: [
      "Clean, documented TypeScript code",
      "Component libraries you can extend",
      "Architecture decisions explained in comments",
      "Setup guides for your team",
      "Training sessions for handoff",
    ],
    conclusion:
      "This is your codebase. You should be able to maintain and scale it.",
  },
];

export function ApproachSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Technical Products Need{" "}
            <span className="gradient-text">a Different Approach</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {approaches.map((approach, index) => (
            <div key={index} className="space-y-6">
              <div className="w-12 h-12 rounded-lg bg-white border border-border flex items-center justify-center">
                <approach.icon
                  className="w-6 h-6 text-black"
                  strokeWidth={1.5}
                />
              </div>

              <h3 className="text-2xl font-bold">{approach.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {approach.description}
              </p>

              <ul className="space-y-2">
                {approach.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <span className="text-accent mt-1">→</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <p className="text-sm font-medium text-foreground">
                {approach.conclusion}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-8 border border-primary/20 text-center">
          <p className="text-xl font-medium leading-relaxed max-w-4xl mx-auto">
            The Goal: Your developers should feel{" "}
            <span className="gradient-text font-semibold">empowered</span>, not
            confused. Your users should feel{" "}
            <span className="gradient-text font-semibold">guided</span>, not
            lost. Your team should feel{" "}
            <span className="gradient-text font-semibold">confident</span>, not
            dependent.
          </p>
        </div>
      </div>
    </section>
  );
}
