import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/marketing/hero-section"
import { TrustBlock } from "@/components/marketing/trust-block"
import { TechStack } from "@/components/marketing/tech-stack"
import { EarlyAccessBanner } from "@/components/marketing/early-access-banner"
import { ChatDemoSection } from "@/components/marketing/chat-demo-section"
import { CodeComparison } from "@/components/marketing/code-comparison"
import { FeaturesBento } from "@/components/marketing/features-bento"
import { ProvidersSection } from "@/components/marketing/providers-section"
import { SavingsCalculator } from "@/components/marketing/savings-calculator"
import { ServicesSection } from "@/components/marketing/services-section"
import { AboutSection } from "@/components/marketing/about-section"
import { ProcessSection } from "@/components/marketing/process-section"
import { PricingSection } from "@/components/marketing/pricing-section"
import { FAQSection } from "@/components/marketing/faq-section"
import { ContactSection } from "@/components/marketing/contact-section"
import { FinalCTASection } from "@/components/marketing/final-cta-section"
import { StickyMobileCTA } from "@/components/sticky-mobile-cta"

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen overflow-x-hidden">
        {/* Hero with 3D particle field */}
        <HeroSection />

        {/* Trust block with animated stats */}
        <TrustBlock />

        {/* Technology stack badges */}
        <TechStack />

        {/* Early access banner */}
        <EarlyAccessBanner />

        {/* Interactive product demo */}
        <div id="demo">
          <ChatDemoSection />
        </div>

        {/* Before/After code comparison */}
        <CodeComparison />

        {/* Features bento grid */}
        <div id="features">
          <FeaturesBento />
        </div>

        {/* Provider logos */}
        <ProvidersSection />

        {/* Token savings calculator */}
        <SavingsCalculator />

        {/* Services section */}
        <div id="services">
          <ServicesSection />
        </div>

        {/* About section */}
        <div id="about">
          <AboutSection />
        </div>

        {/* Process section */}
        <ProcessSection />

        {/* Pricing */}
        <PricingSection />

        {/* FAQ */}
        <FAQSection />

        {/* Contact form */}
        <ContactSection />

        {/* Final CTA */}
        <FinalCTASection />
      </main>
      <Footer />

      {/* Sticky mobile CTA */}
      <StickyMobileCTA />
    </>
  )
}
