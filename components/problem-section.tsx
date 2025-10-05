import { AlertCircle, TrendingDown, MessageSquare, Wrench } from "lucide-react"

const problems = [
  {
    icon: AlertCircle,
    title: "Complex APIs with thin documentation",
    description: "that leaves developers guessing",
  },
  {
    icon: TrendingDown,
    title: "Low adoption rates",
    description: "because the learning curve feels like a cliff",
  },
  {
    icon: MessageSquare,
    title: "Support tickets asking questions",
    description: "your docs should answer",
  },
  {
    icon: Wrench,
    title: "Backend services developers can't easily integrate",
    description: "because there's no clear SDK or starter code",
  },
]

export function ProblemSection() {
  return (
    <section className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-balance leading-tight">
            You Built Something Powerful.{" "}
            <span className="gradient-text">Developers Can't Figure Out How to Use It.</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 md:gap-8 mb-16">
          {problems.map((problem, index) => (
            <div key={index} className="flex gap-5 p-6 rounded-xl bg-card border border-border minimal-card">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-accent/5 flex items-center justify-center">
                  <problem.icon className="w-6 h-6 text-foreground" strokeWidth={1.5} />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-lg mb-2 leading-snug">{problem.title}</h3>
                <p className="text-base text-muted-foreground leading-relaxed">{problem.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            The problem isn't your technology. It's the gap between what you built and how developers experience it.
          </p>
          <p className="text-2xl md:text-3xl font-bold gradient-text">That's exactly what we fix.</p>
        </div>
      </div>
    </section>
  )
}
