import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/marketing/hero-section"
import { TrustBlock } from "@/components/marketing/trust-block"
import { SocialProofSection } from "@/components/marketing/social-proof-section"
import { FeaturesBento } from "@/components/marketing/features-bento"
import { ChatDemoSection } from "@/components/marketing/chat-demo-section"
import { CaseStudiesSection } from "@/components/marketing/case-studies-section"
import { ServicesSection } from "@/components/marketing/services-section"
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

        {/* Social proof - logos and testimonials */}
        <SocialProofSection />

        {/* Interactive product demo */}
        <div id="demo">
          <ChatDemoSection />
        </div>

        {/* Features bento grid */}
        <div id="features">
          <FeaturesBento />
        </div>

        {/* Case studies */}
        <CaseStudiesSection />

        {/* Services section */}
        <div id="services">
          <ServicesSection />
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
