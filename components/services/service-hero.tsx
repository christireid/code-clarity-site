import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Zap, BookOpen } from "lucide-react";

export function ServiceHero() {
  return (
    <section className="relative py-20 sm:py-32 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
            <Zap className="w-4 h-4" />
            Trusted by 50+ AI Startups
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            Transform Your AI Backend Into
            <span className="block mt-2 bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Developer-Friendly Products
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We build React/TypeScript SDKs, beautiful frontends, and comprehensive
            documentation that turn complex AI systems into products developers love.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">200%</div>
              <div className="text-sm text-muted-foreground mt-1">Faster Integration</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">85%</div>
              <div className="text-sm text-muted-foreground mt-1">Fewer Support Tickets</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">10x</div>
              <div className="text-sm text-muted-foreground mt-1">Developer Adoption</div>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button size="lg" asChild className="text-base">
              <Link href="/pricing">
                View Pricing
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-base">
              <Link href="#offerings">
                Explore Services
              </Link>
            </Button>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 pt-8 text-sm">
            <Link
              href="#sdk-development"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Code2 className="w-4 h-4" />
              SDK Development
            </Link>
            <Link
              href="#frontend-ai"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Zap className="w-4 h-4" />
              Frontend for AI
            </Link>
            <Link
              href="#documentation"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <BookOpen className="w-4 h-4" />
              Documentation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
