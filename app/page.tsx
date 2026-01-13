import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/marketing/hero-section"
import { TechStack } from "@/components/marketing/tech-stack"
import { EarlyAccessBanner } from "@/components/marketing/early-access-banner"
import { ChatDemoSection } from "@/components/marketing/chat-demo-section"
import { CodeComparison } from "@/components/marketing/code-comparison"
import { FeaturesBento } from "@/components/marketing/features-bento"
import { ProvidersSection } from "@/components/marketing/providers-section"
import { SavingsCalculator } from "@/components/marketing/savings-calculator"
import { ProcessSection } from "@/components/marketing/process-section"
import { FAQSection } from "@/components/marketing/faq-section"
import { ContactSection } from "@/components/marketing/contact-section"
import { FinalCTASection } from "@/components/marketing/final-cta-section"
import { ComparisonSection } from "@/components/marketing/comparison-section"
import { BlogShowcase } from "@/components/marketing/blog-showcase"
import { PodcastHighlight } from "@/components/marketing/podcast-highlight"
import { StickyMobileCTA } from "@/components/sticky-mobile-cta"
import { ExitIntentPopup } from "@/components/exit-intent-popup"
import { ScrollProgress } from "@/components/scroll-progress"
import { SectionErrorBoundary } from "@/components/error-boundary"

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navigation />
      <main className="min-h-screen overflow-x-hidden">
        {/* Hero with 3D particle field */}
        <HeroSection />

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

        {/* Comparison matrix */}
        <ComparisonSection />

        {/* Provider logos */}
        <ProvidersSection />

        {/* Token savings calculator */}
        <SavingsCalculator />

        {/* Blog posts showcase */}
        <SectionErrorBoundary name="blog showcase">
          <BlogShowcase />
        </SectionErrorBoundary>

        {/* Podcast appearance highlight */}
        <SectionErrorBoundary name="podcast highlight">
          <PodcastHighlight />
        </SectionErrorBoundary>

        {/* Process section */}
        <ProcessSection />

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

      {/* Exit intent popup */}
      <ExitIntentPopup />
    </>
  )
}
