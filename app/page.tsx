import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/marketing/hero-section"
import { TrustBlock } from "@/components/marketing/trust-block"
import { EarlyAccessBanner } from "@/components/marketing/early-access-banner"
import { FeaturesBento } from "@/components/marketing/features-bento"
import { ChatDemoSection } from "@/components/marketing/chat-demo-section"
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

        {/* Early access banner */}
        <EarlyAccessBanner />

        {/* Interactive product demo */}
        <div id="demo">
          <ChatDemoSection />
        </div>

        {/* Features bento grid */}
        <div id="features">
          <FeaturesBento />
        </div>

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
