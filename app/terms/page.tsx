import { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of service for Code & Clarity and Clarity Chat.",
}

export default function TermsPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-display font-bold mb-8">Terms of Service</h1>
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-muted-foreground text-lg mb-8">
              Last updated: January 2025
            </p>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Agreement to Terms</h2>
              <p className="text-muted-foreground mb-4">
                By accessing or using Code & Clarity&apos;s website and services, you agree
                to be bound by these Terms of Service. If you do not agree to these terms,
                please do not use our services.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Use of Services</h2>
              <p className="text-muted-foreground mb-4">
                You may use our services only for lawful purposes and in accordance with
                these terms. You agree not to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                <li>Use our services in any way that violates applicable laws</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with or disrupt the integrity of our services</li>
                <li>Transmit any malicious code or harmful content</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Intellectual Property</h2>
              <p className="text-muted-foreground mb-4">
                All content, features, and functionality of our services are owned by
                Code & Clarity and are protected by intellectual property laws. Our
                trademarks and trade dress may not be used without our prior written
                consent.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Clarity Chat License</h2>
              <p className="text-muted-foreground mb-4">
                Clarity Chat is provided under a commercial license. Specific licensing
                terms will be provided upon purchase or during your trial period. The
                library may not be redistributed or resold without explicit permission.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Disclaimer of Warranties</h2>
              <p className="text-muted-foreground mb-4">
                Our services are provided &quot;as is&quot; without warranties of any kind, either
                express or implied. We do not warrant that our services will be
                uninterrupted, error-free, or free of harmful components.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
              <p className="text-muted-foreground mb-4">
                To the fullest extent permitted by law, Code & Clarity shall not be
                liable for any indirect, incidental, special, consequential, or punitive
                damages arising from your use of our services.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Changes to Terms</h2>
              <p className="text-muted-foreground mb-4">
                We reserve the right to modify these terms at any time. We will notify
                users of any material changes by posting the updated terms on our website.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
              <p className="text-muted-foreground mb-4">
                If you have any questions about these terms, please contact us at{" "}
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
