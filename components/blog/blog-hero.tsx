import { Badge } from "@/components/ui/badge";
import { BookOpen, Sparkles } from "lucide-react";

export function BlogHero() {
  return (
    <section className="relative py-20 sm:py-32 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
            <BookOpen className="w-4 h-4" />
            Developer Experience Insights
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            Build Better
            <span className="block mt-2 bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Developer Products
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Practical guides on TypeScript SDKs, React frontends for AI, developer
            experience design, and building products that developers love.
          </p>

          {/* Topics */}
          <div className="flex flex-wrap justify-center gap-3 pt-4">
            {[
              "TypeScript SDKs",
              "React Patterns",
              "Developer Experience",
              "AI Frontends",
              "API Design",
              "Documentation",
            ].map((topic, i) => (
              <Badge key={i} variant="secondary" className="text-sm">
                {topic}
              </Badge>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto pt-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">Weekly</div>
              <div className="text-sm text-muted-foreground mt-1">New Posts</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">
                <Sparkles className="w-6 h-6 inline-block" />
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                Actionable Insights
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">Free</div>
              <div className="text-sm text-muted-foreground mt-1">
                Always Free
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
