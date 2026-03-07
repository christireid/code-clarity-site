import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Toaster } from "sonner"
import "./globals.css"
import { Suspense } from "react"
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider"
import { CursorGlow } from "@/components/cursor-glow"

export const metadata: Metadata = {
  metadataBase: new URL("https://codeclarity.ai"),
  title: {
    default: "Code & Clarity | AI Strategy, Training & Development",
    template: "%s | Code & Clarity",
  },
  description:
    "Expert AI strategy, hands-on training, and custom development. We help teams navigate AI adoption with the right tools, workflows, and systems.",
  keywords: [
    "AI strategy",
    "AI training",
    "AI development",
    "AI consulting",
    "AI workshops",
    "AI workflows",
    "custom AI tools",
    "AI adoption",
  ],
  authors: [{ name: "Code & Clarity" }],
  creator: "Code & Clarity",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://codeclarity.ai",
    siteName: "Code & Clarity",
    title: "Code & Clarity | AI Strategy, Training & Development",
    description:
      "Expert AI strategy, hands-on training, and custom development. We help teams navigate AI adoption with the right tools, workflows, and systems.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Code & Clarity - AI Strategy, Training & Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Code & Clarity | AI Strategy, Training & Development",
    description:
      "Expert AI strategy, hands-on training, and custom development. We help teams navigate AI adoption with the right tools, workflows, and systems.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

// JSON-LD Structured Data for Organization
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Code & Clarity",
  url: "https://codeclarity.ai",
  logo: "https://codeclarity.ai/logo.png",
  description:
    "AI strategy, training, and custom development consultancy. We help teams navigate AI adoption with the right tools, workflows, and systems.",
  sameAs: [
    "https://twitter.com/codeandclarity",
    "https://linkedin.com/company/codeandclarity",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    email: "info@codeclarity.ai",
    contactType: "customer service",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "AI Consulting Services",
    itemListElement: [
      {
        "@type": "Service",
        name: "AI Strategy",
        description:
          "Strategic guidance for AI adoption, tool selection, and workflow integration.",
      },
      {
        "@type": "Service",
        name: "AI Training & Workshops",
        description:
          "Hands-on training sessions to upskill teams on AI tools and best practices.",
      },
      {
        "@type": "Service",
        name: "Custom AI Development",
        description:
          "Bespoke AI tool and workflow development tailored to your business needs.",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}
      >
        <SmoothScrollProvider>
          <CursorGlow />
          <Suspense
            fallback={
              <div className="min-h-screen bg-background flex items-center justify-center">
                <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
              </div>
            }
          >
            {children}
          </Suspense>
        </SmoothScrollProvider>
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: "hsl(240, 10%, 8%)",
              border: "1px solid hsl(240, 5%, 17%)",
              color: "hsl(0, 0%, 98%)",
            },
          }}
        />
        <Analytics />
      </body>
    </html>
  )
}
