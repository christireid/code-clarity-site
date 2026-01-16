import { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import {
  ArrowRight,
  ArrowLeft,
  Code2,
  Check,
  Zap,
  Layers,
  Palette,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Frontend Development",
  description:
    "Expert React/TypeScript development for complex applications. From UI/UX audits to full MVPs, we build interfaces that developers love.",
}

const features = [
  {
    icon: Zap,
    title: "Rapid Delivery",
    description:
      "Ship production-ready features fast with our battle-tested development practices and component library.",
  },
  {
    icon: Layers,
    title: "Scalable Architecture",
    description:
      "Clean, maintainable code built on modern patterns that grow with your product.",
  },
  {
    icon: Palette,
    title: "Pixel-Perfect UI",
    description:
      "Beautiful interfaces that match your design vision and delight users.",
  },
]

const deliverables = [
  "React/TypeScript application development",
  "UI/UX audits and redesigns",
  "Component library development",
  "Performance optimization",
  "State management architecture",
  "API integration and data fetching",
  "Responsive design implementation",
  "Code reviews and refactoring",
  "Testing and quality assurance",
]

export default function FrontendDevelopmentPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 radial-gradient-bg opacity-50" />
        <div className="absolute inset-0 grid-pattern opacity-20" />

        <div className="relative max-w-7xl mx-auto px-6">
          <Link
            href="/#services"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            All Services
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-16 h-16 rounded-2xl mb-6 flex items-center justify-center bg-gradient-to-br from-emerald-500 to-teal-400 shadow-lg">
                <Code2 className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-display font-bold mb-6">
                Frontend <span className="gradient-text">Development</span>
              </h1>
              <p className="text-body-large text-muted-foreground mb-8">
                Expert React and TypeScript development for complex applications.
                From UI/UX audits to full MVPs, we build interfaces that
                developers love and users enjoy.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/#contact"
                  className="cta-button inline-flex items-center gap-2 px-6 py-3 rounded-xl"
                >
                  Start Your Project
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/#demo"
                  className="secondary-button inline-flex items-center gap-2 px-6 py-3 rounded-xl"
                >
                  See Demo
                </Link>
              </div>
            </div>

            <div className="premium-card p-8 rounded-2xl">
              <h3 className="font-semibold mb-6">What You Get</h3>
              <ul className="space-y-4">
                {deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-headline font-bold text-center mb-12">
            Why Choose Our <span className="gradient-text">Development Team</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="glass-card p-6 rounded-xl">
                <feature.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-headline font-bold mb-4">
            Ready to Build Something Great?
          </h2>
          <p className="text-body-large text-muted-foreground mb-8">
            Let's discuss your project and create something amazing together.
          </p>
          <Link
            href="/#contact"
            className="cta-button inline-flex items-center gap-2 px-8 py-4 rounded-xl text-lg"
          >
            Book a Consultation
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
