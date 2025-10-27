"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const faqs = [
  {
    question: "How do payment terms work?",
    answer:
      "We typically structure payments as: 50% upfront to begin work, 25% at the midpoint demo, and 25% upon final delivery and your approval. For projects over $50K, we can discuss custom payment schedules. We accept bank transfers, credit cards, and international payments.",
  },
  {
    question: "What's included in the 30-day (or 60-day) support period?",
    answer:
      "Free support covers bug fixes, minor adjustments, integration questions, and technical guidance. We respond within 24 hours (weekdays) and can hop on calls as needed. Major feature additions or scope changes are handled separately, but we're always transparent about what's included vs. what would be an add-on.",
  },
  {
    question: "Do I own the source code?",
    answer:
      "Yes, absolutely. You receive full ownership of all code, designs, and documentation we create. No licensing fees, no usage restrictions—it's yours. We use standard MIT or Apache licenses for open-source dependencies.",
  },
  {
    question: "What if I'm not satisfied with the work?",
    answer:
      "We offer a 100% money-back guarantee on the first milestone (discovery + planning phase). If you're not happy with the direction after reviewing our technical plan and mockups, we'll refund your deposit—no questions asked. After that, we work in weekly sprints with regular demos, so you're never surprised by the final product.",
  },
  {
    question: "Can you work with my existing codebase?",
    answer:
      "Yes! We commonly integrate with existing backends, migrate from old SDKs, or build on top of established frontends. During discovery, we'll audit your current setup and recommend the best path forward—whether that's enhancement, refactor, or building alongside what you have.",
  },
  {
    question: "How long does each project typically take?",
    answer:
      "SDK Starter: 2-3 weeks, SDK Pro: 4-6 weeks, Frontend Complete: 6-10 weeks. Timelines depend on complexity, your responsiveness during reviews, and any scope changes. We provide detailed project schedules during planning and send weekly progress updates.",
  },
  {
    question: "Do you sign NDAs?",
    answer:
      "Absolutely. We're happy to sign your NDA or mutual NDA before any technical discussions. We work with many stealth-mode AI startups and understand the importance of confidentiality.",
  },
  {
    question: "Can I see examples of past work?",
    answer:
      "Due to NDAs, we can't publicly share most client work. However, during your discovery call, we can show relevant case studies (with details anonymized) and discuss technical approaches we've used for similar projects. We can also provide references from past clients upon request.",
  },
  {
    question: "What if my project doesn't fit these packages?",
    answer:
      "Every project is unique. These packages are starting points—we customize scope, pricing, and deliverables based on your specific needs. Whether you need ongoing maintenance, a hybrid approach, or something completely custom, let's talk and design the right solution for you.",
  },
  {
    question: "Do you offer ongoing maintenance and updates?",
    answer:
      "Yes! After the initial free support period, we offer monthly retainers starting at $2,500/month for ongoing updates, new features, performance monitoring, and priority support. We also offer quarterly 'tune-up' packages if you prefer project-based maintenance.",
  },
  {
    question: "Can you help with design and branding?",
    answer:
      "The Frontend Complete package includes full design system development and UI/UX design. For SDK Starter and Pro, we focus on functional design (good UX, clean interfaces) but don't include brand design. If you need logo design, brand guidelines, or marketing materials, we can recommend trusted design partners.",
  },
  {
    question: "What technologies do you work with?",
    answer:
      "We specialize in React, TypeScript, Next.js, and modern frontend tooling. For backends, we integrate with any REST API, GraphQL, or WebSocket system. We're framework-agnostic and adapt to your tech stack—whether that's AWS, Vercel, Netlify, or custom infrastructure.",
  },
];

export function PricingFAQ() {
  return (
    <section className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Common Questions
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about pricing, process, and working with us.
            Don't see your question?{" "}
            <a
              href="mailto:info@codeclarity.ai"
              className="text-primary hover:underline"
            >
              Just ask
            </a>
            .
          </p>
        </div>

        {/* FAQ Accordion */}
        <Card className="p-8">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Card>

        {/* Still Have Questions */}
        <div className="text-center mt-12 p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-purple-500/10 border border-primary/20">
          <h3 className="text-xl font-bold mb-3">Still Have Questions?</h3>
          <p className="text-muted-foreground mb-6">
            We're happy to answer any questions about pricing, process, or technical
            approach. No pressure, no sales pitch—just honest conversation.
          </p>
          <a
            href="mailto:info@codeclarity.ai"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
          >
            Schedule a Call
          </a>
        </div>
      </div>
    </section>
  );
}
