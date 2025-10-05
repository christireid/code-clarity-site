import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { scrollToContactForm } from "./contact-form";

export function HeroSection() {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] gradient-blob" />
        <div
          className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] gradient-blob"
          style={{ animationDelay: "10s" }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-5xl text-center">
        <div className="space-y-8 md:space-y-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-balance fade-in">
            Your AI Works. Your API Works.{" "}
            <span className="gradient-text">
              But Your Frontend is Losing Developers.
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed fade-in-delay-1">
            Custom React/TypeScript interfaces that make complex AI systems,
            automation platforms, and backend APIs accessible to the developers
            who need to use them.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 fade-in-delay-2">
            <Button
              size="lg"
              onClick={scrollToContactForm}
              className="w-full sm:w-auto text-lg px-12 py-7 primary-button font-semibold"
            >
              Build with Clarity
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="w-full sm:w-auto text-lg px-12 py-7 font-medium hover:bg-muted transition-all duration-300"
            >
              Discover How It Works
            </Button>
          </div>

          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground pt-8 fade-in-delay-3">
            <div className="w-2 h-2 rounded-full accent-dot" />
            <span>
              Available for new projects • Specializing in systems design &
              developer tools
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
