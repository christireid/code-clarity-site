import { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Code & Clarity and Clarity Chat.",
}

export default function PrivacyPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-display font-bold mb-8">Privacy Policy</h1>
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-muted-foreground text-lg mb-8">
              Last updated: January 2025
            </p>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
              <p className="text-muted-foreground mb-4">
                Code & Clarity (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) respects your privacy and is
                committed to protecting your personal data. This privacy policy explains
                how we collect, use, and safeguard your information when you visit our
                website or use our services.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
              <p className="text-muted-foreground mb-4">
                We collect information you provide directly to us, including:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                <li>Name and email address when you contact us or subscribe to updates</li>
                <li>Company information when provided in contact forms</li>
                <li>Usage data and analytics to improve our services</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
              <p className="text-muted-foreground mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                <li>Respond to your inquiries and provide customer support</li>
                <li>Send you updates about our products and services (with your consent)</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
              <p className="text-muted-foreground mb-4">
                We implement appropriate technical and organizational measures to protect
                your personal data against unauthorized access, alteration, disclosure, or
                destruction.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
              <p className="text-muted-foreground mb-4">
                You have the right to access, correct, or delete your personal data. To
                exercise these rights, please contact us at{" "}
                <a
                  href="mailto:hello@codeclarity.ai"
                  className="text-primary hover:underline"
                >
                  hello@codeclarity.ai
                </a>
                .
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
              <p className="text-muted-foreground mb-4">
                If you have any questions about this privacy policy, please contact us at{" "}
                <a
                  href="mailto:hello@codeclarity.ai"
                  className="text-primary hover:underline"
                >
                  hello@codeclarity.ai
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
