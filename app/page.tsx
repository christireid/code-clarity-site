import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/marketing/hero-section"
import { FeaturesBento } from "@/components/marketing/features-bento"
import { ServicesSection } from "@/components/marketing/services-section"
import { AboutSection } from "@/components/marketing/about-section"
import { ProcessSection } from "@/components/marketing/process-section"
import { FAQSection } from "@/components/marketing/faq-section"
import { ContactSection } from "@/components/marketing/contact-section"
import { FinalCTASection } from "@/components/marketing/final-cta-section"
import { StickyMobileCTA } from "@/components/sticky-mobile-cta"
import { ExitIntentPopup } from "@/components/exit-intent-popup"
import { ScrollProgress } from "@/components/scroll-progress"

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navigation />
      <main className="min-h-screen overflow-x-hidden">
        <HeroSection />

        <div id="services">
          <ServicesSection />
        </div>

        <div id="capabilities">
          <FeaturesBento />
        </div>

        <div id="about">
          <AboutSection />
        </div>

        <ProcessSection />

        <FAQSection />

        <div id="contact">
          <ContactSection />
        </div>

        <FinalCTASection />
      </main>
      <Footer />

      <StickyMobileCTA />

      <ExitIntentPopup />
    </>
  )
}
