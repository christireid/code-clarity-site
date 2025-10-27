import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote, TrendingUp, Users, Zap } from "lucide-react";

const testimonials = [
  {
    quote:
      "Code & Clarity transformed our developer experience. Integration time dropped from hours to minutes, and our support burden disappeared completely.",
    author: "Sarah Chen",
    role: "CTO",
    company: "AI Analytics Platform",
    image: null,
    stats: { metric: "200%", label: "Faster Integration" },
  },
  {
    quote:
      "The new frontend completely changed how users perceive our product. What was once 'powerful but clunky' is now 'intuitive and delightful.'",
    author: "Michael Rodriguez",
    role: "Head of Product",
    company: "AI Content Platform",
    image: null,
    stats: { metric: "75%", label: "Drop-Off Reduction" },
  },
  {
    quote:
      "Finally, documentation that developers actually read and understand. Our support team went from firefighting to strategic work.",
    author: "Emily Thompson",
    role: "Developer Relations Lead",
    company: "Model API Provider",
    image: null,
    stats: { metric: "85%", label: "Support Reduction" },
  },
];

const metrics = [
  {
    icon: Users,
    value: "50+",
    label: "AI Startups Served",
    description: "Trusted by leading AI companies",
  },
  {
    icon: TrendingUp,
    value: "200%",
    label: "Faster Integration",
    description: "Average improvement across clients",
  },
  {
    icon: Zap,
    value: "10x",
    label: "Developer Adoption",
    description: "More developers using products",
  },
  {
    icon: Star,
    value: "100%",
    label: "Client Satisfaction",
    description: "Every project delivered on time",
  },
];

export function SocialProofSection() {
  return (
    <section className="py-20 sm:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Trusted by AI Startups
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Real Results
            <span className="block text-primary">From Real Clients</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            See how we've helped AI companies transform their developer experience
            and drive measurable business outcomes.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {metrics.map((metric, index) => (
            <Card
              key={index}
              className="p-6 text-center hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <metric.icon className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div className="text-3xl font-bold text-primary mb-2">
                {metric.value}
              </div>
              <div className="font-semibold mb-1">{metric.label}</div>
              <div className="text-sm text-muted-foreground">
                {metric.description}
              </div>
            </Card>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-xl transition-shadow relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="w-12 h-12" />
              </div>

              {/* Content */}
              <div className="space-y-4 relative z-10">
                {/* Stars */}
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-primary text-primary"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-muted-foreground leading-relaxed">
                  "{testimonial.quote}"
                </p>

                {/* Stats Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-primary/10 text-sm">
                  <TrendingUp className="w-4 h-4 text-primary" />
                  <span className="font-semibold text-primary">
                    {testimonial.stats.metric}
                  </span>
                  <span className="text-muted-foreground">
                    {testimonial.stats.label}
                  </span>
                </div>

                {/* Author */}
                <div className="pt-4 border-t border-border">
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom Trust Line */}
        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground mb-4">
            JOIN 50+ AI STARTUPS BUILDING BETTER DEVELOPER PRODUCTS
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-muted-foreground">
                Production-Ready Code
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-muted-foreground">
                On-Time Delivery Guaranteed
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-muted-foreground">
                30-60 Days Free Support
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
