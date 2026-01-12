import { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ServicesPageContent } from "@/components/marketing/services-page-content"
import { ContactSection } from "@/components/marketing/contact-section"

export const metadata: Metadata = {
  title: "Consulting Services | Code & Clarity",
  description:
    "Expert AI development, token optimization, and frontend consulting. We help teams ship AI products faster and cheaper.",
  openGraph: {
    title: "Consulting Services | Code & Clarity",
    description:
      "Expert AI development, token optimization, and frontend consulting. We help teams ship AI products faster and cheaper.",
  },
}

export default function ServicesPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen overflow-x-hidden pt-20">
        <ServicesPageContent />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
