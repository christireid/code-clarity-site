import { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AboutPageContent } from "@/components/marketing/about-page-content"

export const metadata: Metadata = {
  title: "About | Code & Clarity",
  description:
    "Meet the team behind Clarity Chat. 9+ years of AI and frontend experience, 50+ AI products shipped.",
  openGraph: {
    title: "About | Code & Clarity",
    description:
      "Meet the team behind Clarity Chat. 9+ years of AI and frontend experience, 50+ AI products shipped.",
  },
}

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen overflow-x-hidden pt-20">
        <AboutPageContent />
      </main>
      <Footer />
    </>
  )
}
