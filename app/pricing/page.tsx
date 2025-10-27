import { Metadata } from "next";
import { PricingHero } from "@/components/pricing/pricing-hero";
import { PricingTiers } from "@/components/pricing/pricing-tiers";
import { PricingComparison } from "@/components/pricing/pricing-comparison";
import { PricingFAQ } from "@/components/pricing/pricing-faq";
import { PricingCTA } from "@/components/pricing/pricing-cta";

export const metadata: Metadata = {
  title: "Pricing | Code & Clarity - Transparent, Value-Based Pricing",
  description:
    "Clear, transparent pricing for SDK development, frontend work, and documentation. No hidden fees, no surprises. Starting at $15,000.",
  openGraph: {
    title: "Pricing | Code & Clarity",
    description:
      "Clear, transparent pricing for SDK development, frontend work, and documentation. Starting at $15,000.",
    type: "website",
  },
};

export default function PricingPage() {
  return (
    <main className="min-h-screen">
      <PricingHero />
      <PricingTiers />
      <PricingComparison />
      <PricingFAQ />
      <PricingCTA />
    </main>
  );
}
