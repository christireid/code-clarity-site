import { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import {
  ArrowRight,
  ArrowLeft,
  Accessibility,
  Check,
  Eye,
  Keyboard,
  Volume2,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Accessibility & Compliance",
  description:
    "Ensure your AI applications are accessible to everyone. WCAG AA audits, remediation, and ongoing compliance monitoring.",
}

const features = [
  {
    icon: Eye,
    title: "Visual Accessibility",
    description:
      "Color contrast optimization, focus indicators, and visual hierarchy improvements for users with low vision.",
  },
  {
    icon: Keyboard,
    title: "Keyboard Navigation",
    description:
      "Complete keyboard support with logical tab order, focus management, and shortcut keys.",
  },
  {
    icon: Volume2,
    title: "Screen Reader Support",
    description:
      "Proper ARIA labels, live regions, and semantic HTML for seamless screen reader experiences.",
  },
]

const deliverables = [
  "Comprehensive WCAG AA audit",
  "Detailed remediation roadmap",
  "Accessibility fixes and refactoring",
  "Screen reader optimization",
  "Keyboard navigation implementation",
  "Color contrast improvements",
  "Focus management systems",
  "ARIA implementation",
  "Ongoing compliance monitoring",
]

export default function AccessibilityPage() {
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
              <div className="w-16 h-16 rounded-2xl mb-6 flex items-center justify-center bg-gradient-to-br from-indigo-500 to-violet-400 shadow-lg">
                <Accessibility className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-display font-bold mb-6">
                Accessibility & <span className="gradient-text">Compliance</span>
              </h1>
              <p className="text-body-large text-muted-foreground mb-8">
                Ensure your AI applications are accessible to everyone. We provide
                comprehensive WCAG AA audits, remediation services, and ongoing
                compliance monitoring.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/#contact"
                  className="cta-button inline-flex items-center gap-2 px-6 py-3 rounded-xl"
                >
                  Start Your Audit
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
            Our <span className="gradient-text">Accessibility</span> Approach
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
            Ready to Make Your App Accessible?
          </h2>
          <p className="text-body-large text-muted-foreground mb-8">
            Let's ensure everyone can use your application, regardless of ability.
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
