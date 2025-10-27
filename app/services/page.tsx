import { Metadata } from "next";
import { ServiceHero } from "@/components/services/service-hero";
import { ServiceOfferings } from "@/components/services/service-offerings";
import { ServiceProcess } from "@/components/services/service-process";
import { ServiceCaseStudies } from "@/components/services/service-case-studies";
import { ServiceCTA } from "@/components/services/service-cta";

export const metadata: Metadata = {
  title: "Services | Code & Clarity - Frontend for AI & SDK Development",
  description:
    "Transform your AI backend into developer-friendly products. We build React/TypeScript SDKs, beautiful frontends, and comprehensive documentation that developers love.",
  openGraph: {
    title: "Services | Code & Clarity",
    description:
      "Transform your AI backend into developer-friendly products. We build React/TypeScript SDKs, beautiful frontends, and comprehensive documentation.",
    type: "website",
  },
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <ServiceHero />
      <ServiceOfferings />
      <ServiceProcess />
      <ServiceCaseStudies />
      <ServiceCTA />
    </main>
  );
}
