"use client";

import type React from "react";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "What if we don't have a frontend development team?",
    answer:
      "That's perfectly fine. We can build your frontend and provide comprehensive documentation and training so you can either maintain it yourself or hand it off to a team you hire later. We'll also help you understand what skills to look for when building your team. Many of our clients start without technical teams and we help bridge that gap.",
  },
  {
    question: "What if we already have a frontend development team?",
    answer:
      "Perfect. We often work alongside existing teams to: Build specific features while they focus on core product, Create SDKs so frontend devs can integrate your backend more easily, Handle documentation while your team ships features, Provide frontend expertise your backend-heavy team might lack. We're not here to replace your team—we're here to augment them.",
  },
  {
    question: "Can you work with our existing design system / style guide?",
    answer:
      "Absolutely. We regularly implement designs from Figma, Sketch, or whatever tool your designers use. If you have a component library or design tokens, even better—we'll work within those constraints. No design team? We can handle basic UI design for developer-facing tools, or we can bring in a designer for more consumer-facing products.",
  },
  {
    question: "What if the scope changes mid-project?",
    answer:
      'We handle it through a change request process: 1) You describe what changed and why, 2) We outline impact on timeline and investment, 3) We decide together whether to proceed now, defer it, or adjust scope elsewhere. No surprise bills. No passive-aggressive "well actually that wasn\'t in scope." Just clear communication. Scope boundaries are clarified upfront in our proposal.',
  },
  {
    question: "Do you offer ongoing support after launch?",
    answer:
      "Yes. We offer: Retainer packages for ongoing features and updates, On-call support for critical issues, Training your team to handle maintenance independently. You choose what makes sense. Some clients want full handoff, others want us to stay involved. Both work. For ongoing updates, we'll point you to our documentation.",
  },
  {
    question: "What's your typical timeline?",
    answer:
      "Depends on scope, however, typically: Small (SDK wrapper, docs site): 2-3 weeks, Medium (single dashboard, automation setup): 4-6 weeks, Large (full AI interface, multi-service integration): 8-12 weeks. Rush timelines possible for the right project, but we won't sacrifice quality to hit an arbitrary deadline. Exact timelines are pulled and confirmed in the proposal phase.",
  },
  {
    question: "How do I know you can handle my specific tech stack?",
    answer:
      "Great question. Here's our core expertise: React, TypeScript, Next.js, modern frontend frameworks, API integration (REST, GraphQL, WebSocket), State management patterns, Real-time data and streaming, Authentication and authorization. On the strategy call, we'll ask detailed questions about your architecture. If something's outside our expertise, we'll tell you and point you toward someone better suited.",
  },
  {
    question: "Do you sign NDAs / contractor agreements?",
    answer:
      "Yes, happy to sign standard NDAs and contractor agreements. We review these with our legal team to ensure mutual protection. We'll also sign IP assignment agreements—what we build for you belongs to you. All agreements are handled during the Proposal & Planning phase.",
  },
];

export function FaqSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleAccordion(index);
    }
  };

  return (
    <section id="faq" className="py-16 sm:py-20 md:py-24 lg:py-32 scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-balance leading-tight px-2">
            Questions You Might Be <span className="gradient-text">Asking</span>
          </h2>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="premium-card rounded-xl sm:rounded-2xl overflow-hidden bg-card"
            >
              <button
                onClick={() => toggleAccordion(index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className="w-full p-5 sm:p-6 flex items-start justify-between gap-4 text-left hover:bg-muted/30 transition-colors"
                aria-expanded={expandedIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="font-semibold text-base sm:text-lg pr-4 leading-snug">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 transition-transform duration-300 ${
                    expandedIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                id={`faq-answer-${index}`}
                className={`overflow-hidden transition-all duration-300 ${
                  expandedIndex === index
                    ? "max-h-[1000px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-5 sm:px-6 pb-5 sm:pb-6">
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 sm:mt-12 text-center p-6 sm:p-8 bg-gradient-to-br from-muted/50 to-muted/30 rounded-2xl border border-border">
          <HelpCircle className="w-10 h-10 sm:w-12 sm:h-12 text-primary mx-auto mb-4" />
          <p className="text-base sm:text-lg font-semibold mb-3">
            Didn't see your question?
          </p>
          <button className="text-primary hover:underline font-medium text-sm sm:text-base underline-offset-4 transition-all hover:scale-105">
            Ask Us Directly →
          </button>
        </div>
      </div>
    </section>
  );
}
