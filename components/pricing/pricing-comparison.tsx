import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, X } from "lucide-react";

const comparisonFeatures = [
  {
    category: "SDK Development",
    features: [
      {
        name: "TypeScript SDK with type safety",
        starter: true,
        pro: true,
        complete: true,
      },
      {
        name: "REST API wrapper",
        starter: true,
        pro: true,
        complete: true,
      },
      {
        name: "WebSocket support",
        starter: false,
        pro: true,
        complete: true,
      },
      {
        name: "Real-time state sync",
        starter: false,
        pro: true,
        complete: true,
      },
      {
        name: "Advanced error handling",
        starter: "Basic",
        pro: true,
        complete: true,
      },
    ],
  },
  {
    category: "React Components",
    features: [
      {
        name: "Basic React hooks",
        starter: "3-5 hooks",
        pro: "10+ hooks",
        complete: "15+ hooks",
      },
      {
        name: "Custom component library",
        starter: false,
        pro: "15 components",
        complete: "30+ components",
      },
      {
        name: "Design system",
        starter: false,
        pro: false,
        complete: true,
      },
      {
        name: "Theme customization",
        starter: false,
        pro: false,
        complete: true,
      },
      {
        name: "Animation & micro-interactions",
        starter: false,
        pro: "Basic",
        complete: true,
      },
    ],
  },
  {
    category: "Documentation & Training",
    features: [
      {
        name: "API reference docs",
        starter: true,
        pro: true,
        complete: true,
      },
      {
        name: "Interactive examples",
        starter: false,
        pro: true,
        complete: true,
      },
      {
        name: "Video tutorials",
        starter: "1 video",
        pro: "5-7 videos",
        complete: "10+ videos",
      },
      {
        name: "Migration guides",
        starter: false,
        pro: true,
        complete: true,
      },
      {
        name: "Team training sessions",
        starter: false,
        pro: false,
        complete: true,
      },
    ],
  },
  {
    category: "Support & Extras",
    features: [
      {
        name: "Free support period",
        starter: "30 days",
        pro: "30 days priority",
        complete: "60 days priority",
      },
      {
        name: "Example applications",
        starter: "1 app",
        pro: "2-3 apps",
        complete: "5+ apps",
      },
      {
        name: "Testing suite",
        starter: "Basic",
        pro: true,
        complete: "Comprehensive",
      },
      {
        name: "CI/CD pipeline",
        starter: false,
        pro: false,
        complete: true,
      },
      {
        name: "Performance optimization",
        starter: false,
        pro: "Basic",
        complete: true,
      },
    ],
  },
];

export function PricingComparison() {
  const renderValue = (value: boolean | string) => {
    if (value === true) {
      return <CheckCircle2 className="w-5 h-5 text-primary mx-auto" />;
    }
    if (value === false) {
      return <X className="w-5 h-5 text-muted-foreground/30 mx-auto" />;
    }
    return (
      <span className="text-sm text-center block text-muted-foreground">
        {value}
      </span>
    );
  };

  return (
    <section className="py-20 sm:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Detailed Comparison
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Compare All Features
          </h2>
          <p className="text-lg text-muted-foreground">
            See exactly what's included in each package. All packages include source
            code ownership and our money-back guarantee.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="max-w-6xl mx-auto">
          <Card className="overflow-hidden">
            {/* Desktop View */}
            <div className="hidden lg:block overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border bg-muted/50">
                    <th className="text-left p-6 font-semibold">Features</th>
                    <th className="text-center p-6 font-semibold">SDK Starter</th>
                    <th className="text-center p-6 font-semibold relative">
                      <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
                        Popular
                      </Badge>
                      <span className="pt-2 block">SDK Pro</span>
                    </th>
                    <th className="text-center p-6 font-semibold">
                      Frontend Complete
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((category, catIndex) => (
                    <>
                      <tr
                        key={`category-${catIndex}`}
                        className="bg-muted/30 border-b border-border"
                      >
                        <td
                          colSpan={4}
                          className="p-4 font-semibold text-sm text-primary"
                        >
                          {category.category}
                        </td>
                      </tr>
                      {category.features.map((feature, featureIndex) => (
                        <tr
                          key={`feature-${catIndex}-${featureIndex}`}
                          className="border-b border-border hover:bg-muted/30 transition-colors"
                        >
                          <td className="p-4 text-sm">{feature.name}</td>
                          <td className="p-4">{renderValue(feature.starter)}</td>
                          <td className="p-4 bg-primary/5">
                            {renderValue(feature.pro)}
                          </td>
                          <td className="p-4">{renderValue(feature.complete)}</td>
                        </tr>
                      ))}
                    </>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile View */}
            <div className="lg:hidden space-y-8 p-6">
              {comparisonFeatures.map((category, catIndex) => (
                <div key={catIndex} className="space-y-4">
                  <h3 className="font-semibold text-primary border-b border-border pb-2">
                    {category.category}
                  </h3>
                  {category.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="space-y-2 pb-4 border-b border-border last:border-0"
                    >
                      <div className="font-medium text-sm">{feature.name}</div>
                      <div className="grid grid-cols-3 gap-2 text-xs">
                        <div className="text-center">
                          <div className="text-muted-foreground mb-1">Starter</div>
                          <div>{renderValue(feature.starter)}</div>
                        </div>
                        <div className="text-center bg-primary/5 rounded p-2">
                          <div className="text-muted-foreground mb-1">Pro</div>
                          <div>{renderValue(feature.pro)}</div>
                        </div>
                        <div className="text-center">
                          <div className="text-muted-foreground mb-1">Complete</div>
                          <div>{renderValue(feature.complete)}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Bottom Note */}
        <div className="max-w-3xl mx-auto text-center mt-12">
          <p className="text-sm text-muted-foreground">
            Not sure which package is right for you?{" "}
            <a
              href="mailto:info@codeclarity.ai"
              className="text-primary hover:underline font-medium"
            >
              Schedule a 30-minute discovery call
            </a>{" "}
            and we'll help you choose the perfect fit.
          </p>
        </div>
      </div>
    </section>
  );
}
