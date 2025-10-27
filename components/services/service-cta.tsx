import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, MessageSquare, FileText } from "lucide-react";

export function ServiceCTA() {
  return (
    <section className="py-20 sm:py-32 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
        <div className="text-center space-y-8 p-12 rounded-3xl bg-gradient-to-br from-primary/10 via-purple-500/10 to-pink-500/10 border border-primary/20">
          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Ready to Build Something
            <span className="block text-primary">Developers Will Love?</span>
          </h2>

          {/* Description */}
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Let's talk about your project. No commitment, no sales pitch—just a
            technical conversation about how we can help.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" asChild className="text-base">
              <a href="mailto:info@codeclarity.ai">
                <MessageSquare className="mr-2 w-5 h-5" />
                Schedule Discovery Call
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-base">
              <Link href="/pricing">
                <FileText className="mr-2 w-5 h-5" />
                View Pricing
              </Link>
            </Button>
          </div>

          {/* Trust Signals */}
          <div className="pt-8 border-t border-border/50">
            <p className="text-sm text-muted-foreground mb-4">
              TRUSTED BY 50+ AI STARTUPS
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-sm">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">200%</div>
                <div className="text-muted-foreground">Faster Integration</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">85%</div>
                <div className="text-muted-foreground">Fewer Support Tickets</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">10x</div>
                <div className="text-muted-foreground">Developer Adoption</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">30 days</div>
                <div className="text-muted-foreground">Free Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
