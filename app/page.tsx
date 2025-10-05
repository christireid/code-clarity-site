import { HeroSection } from "@/components/hero-section";
import { ProblemSection } from "@/components/problem-section";
import { ServicesSection } from "@/components/services-section";
import { ApproachSection } from "@/components/approach-section";
import { ProcessSection } from "@/components/process-section";
import { FaqSection } from "@/components/faq-section";
import { AboutSection } from "@/components/about-section";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { FinalImpactSection } from "@/components/final-impact-section";
import { ContactForm } from "@/components/contact-form";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <HeroSection />
        <ProblemSection />
        <ServicesSection />
        <ApproachSection />
        <ProcessSection />
        <FaqSection />
        <AboutSection />
        <ContactForm />
        <FinalImpactSection />
      </main>
      <Footer />
    </>
  );
}
