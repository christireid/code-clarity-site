import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";

export function PricingHero() {
  return (
    <section className="relative py-20 sm:py-32 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <Badge variant="outline" className="text-sm">
            Simple, Transparent Pricing
          </Badge>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            Clear Pricing,
            <span className="block mt-2 bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Clear Value
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Fixed-price packages that cover everything from discovery to launch. No
            hidden fees, no hourly surprises—just transparent pricing for
            developer-focused work.
          </p>

          {/* Value Props */}
          <div className="flex flex-wrap justify-center gap-6 pt-8">
            {[
              "30 days free support included",
              "Source code & full ownership",
              "Weekly progress demos",
              "100% money-back guarantee",
            ].map((prop, i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <CheckCircle2 className="w-4 h-4 text-primary" />
                {prop}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
