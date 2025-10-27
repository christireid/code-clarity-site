import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Clock, Award } from "lucide-react";

export function PricingCTA() {
  return (
    <section className="py-20 sm:py-32 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="text-center space-y-12">
          {/* Main CTA */}
          <div className="space-y-6 p-12 rounded-3xl bg-gradient-to-br from-primary/10 via-purple-500/10 to-pink-500/10 border border-primary/20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Let's schedule a 30-minute discovery call to discuss your project,
              explore solutions, and provide a detailed proposal—no commitment
              required.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" asChild className="text-base">
                <a href="mailto:info@codeclarity.ai?subject=Discovery Call Request&body=Hi, I'd like to schedule a discovery call to discuss my project.">
                  Schedule Discovery Call
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-base">
                <a href="/services">View Services</a>
              </Button>
            </div>
          </div>

          {/* Guarantees */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Shield className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold">Money-Back Guarantee</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Not happy after the planning phase? Get a full refund—no questions
                asked.
              </p>
            </div>

            <div className="flex flex-col items-center text-center space-y-3">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Clock className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold">On-Time Delivery</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We deliver on schedule or your money back. Weekly demos keep you
                updated.
              </p>
            </div>

            <div className="flex flex-col items-center text-center space-y-3">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Award className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold">Quality Assurance</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Production-ready code with comprehensive testing, documentation, and
                30+ days support.
              </p>
            </div>
          </div>

          {/* Trust Signals */}
          <div className="pt-8 border-t border-border/50">
            <p className="text-sm text-muted-foreground mb-6">
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
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-muted-foreground">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
