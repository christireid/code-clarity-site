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
    default: "Clarity Chat | Ship AI Chat This Sprint. Cut Token Costs 60%.",
    template: "%s | Code & Clarity",
  },
  description:
    "Stop burning money on token costs. Ship production AI chat in 1-2 sprints with 60-90% cost savings. The React library for teams that ship.",
  keywords: [
    "AI chat",
    "React components",
    "token optimization",
    "reduce AI costs",
    "streaming chat",
    "AI development",
    "Clarity Chat",
    "OpenAI cost reduction",
  ],
  authors: [{ name: "Code & Clarity" }],
  creator: "Code & Clarity",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://codeclarity.ai",
    siteName: "Code & Clarity",
    title: "Clarity Chat | Ship AI Chat This Sprint",
    description:
      "Stop burning money on token costs. Ship production AI chat with 60-90% cost savings.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Clarity Chat - Ship AI Chat This Sprint",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Clarity Chat | Ship AI Chat This Sprint",
    description:
      "Stop burning money on token costs. Ship production AI chat with 60-90% cost savings.",
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
  "@type": "Organization",
  name: "Code & Clarity",
  url: "https://codeclarity.ai",
  logo: "https://codeclarity.ai/logo.png",
  description:
    "Premium AI chat components for React. Build ChatGPT-quality interfaces in hours, not months.",
  sameAs: [
    "https://github.com/christireid/Clarity-ai-chat-components",
    "https://twitter.com/codeandclarity",
    "https://linkedin.com/company/codeandclarity",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    email: "hello@codeclarity.ai",
    contactType: "customer service",
  },
  offers: {
    "@type": "Offer",
    name: "Clarity Chat - AI Chat Component Library",
    description:
      "Token-optimized, enterprise-ready React components with multi-provider support.",
    category: "Software",
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
