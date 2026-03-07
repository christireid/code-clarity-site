"use client"

import { motion } from "framer-motion"
import {
  ArrowRight,
  Compass,
  GraduationCap,
  Wrench,
} from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Compass,
    title: "AI Strategy & Research",
    description:
      "I don't just recommend tools\u2014I use them daily. Together we'll assess your current landscape, identify the right AI systems for your workflows, and build a roadmap that actually gets implemented. No generic frameworks. No vendor bias. Just clear-eyed guidance from someone who's built it.",
    features: [
      "AI readiness assessment & gap analysis",
      "Tool & platform evaluation (build vs. buy)",
      "Workflow optimization & system design",
      "Knowledge transfer & research synthesis",
    ],
    gradient: "from-cyan-400 to-blue-500",
    href: "#contact",
  },
  {
    icon: GraduationCap,
    title: "AI Training & Enablement",
    description:
      "With 4+ years training developers on complex technologies, I create learning experiences that stick. From interactive workshops to self-paced curriculum, your team won't just learn the tools\u2014they'll understand the thinking behind them.",
    features: [
      "Custom workshops & hands-on labs",
      "Self-paced learning materials & documentation",
      "Engineering team upskilling & mentoring",
      "Assessment creation & progress tracking",
    ],
    gradient: "from-violet-400 to-purple-500",
    href: "#contact",
  },
  {
    icon: Wrench,
    title: "AI Development & Pilots",
    description:
      "From proof-of-concept to production. I build the custom AI tools, integrations, and workflows your team needs\u2014with the same attention to design detail and business logic that comes from 10+ years of hands-on development.",
    features: [
      "Custom AI tool & integration development",
      "Pilot programs & proof of concepts",
      "Real-time data streaming applications",
      "UI/UX development with design precision",
    ],
    gradient: "from-rose-400 to-pink-500",
    href: "#contact",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.4, 0.25, 1] as const,
    },
  },
}

export function ServicesSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="gradient-orb gradient-orb-secondary w-[500px] h-[500px] -top-32 -right-32 opacity-20" />
        <div className="gradient-orb gradient-orb-primary w-[400px] h-[400px] bottom-0 -left-32 opacity-20" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium text-primary mb-6">
            What I Do
          </span>
          <h2 className="text-headline font-bold mb-4">
            Strategy. Training. <span className="gradient-text">Development.</span>
          </h2>
          <p className="text-body-large text-muted-foreground max-w-2xl mx-auto">
            Three pillars of AI adoption, delivered by someone who lives in the tools every day.
          </p>
        </motion.div>

        {/* Services grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group relative"
            >
              <div className="premium-card h-full p-6 rounded-2xl flex flex-col">
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl mb-5 flex items-center justify-center bg-gradient-to-br ${service.gradient} shadow-lg`}
                >
                  <service.icon className="w-6 h-6 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6 flex-1">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm"
                    >
                      <div className="w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-1 h-1 rounded-full bg-primary" />
                      </div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-2 text-primary text-sm font-medium group/link"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-6">
            Not sure where to start? Let's figure it out together.
          </p>
          <Link
            href="#contact"
            className="cta-button inline-flex items-center gap-2 px-8 py-4 rounded-xl text-lg"
          >
            Book a Discovery Call
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesSection
