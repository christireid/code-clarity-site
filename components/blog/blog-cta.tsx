import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

export function BlogCTA() {
  return (
    <section className="py-20 sm:py-32 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
        <div className="text-center space-y-8 p-12 rounded-3xl bg-gradient-to-br from-primary/10 via-purple-500/10 to-pink-500/10 border border-primary/20">
          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Ready to Build a
            <span className="block text-primary">Developer-Friendly Product?</span>
          </h2>

          {/* Description */}
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Let's talk about your SDK, frontend, or documentation needs. We'll show
            you how to turn your complex backend into a product developers love.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" asChild className="text-base">
              <Link href="/pricing">
                View Pricing
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-base">
              <a href="mailto:info@codeclarity.ai">
                <Mail className="mr-2 w-5 h-5" />
                Get in Touch
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
