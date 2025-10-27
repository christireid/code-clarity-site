import { Mail } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-muted/30 scroll-mt-20">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Who's Building Your <span className="gradient-text">Frontend</span>
          </h2>
        </div>

        <div className="space-y-8 text-lg leading-relaxed">
          <p>
            We're a frontend development team that specializes in making
            technical products accessible—specifically AI tools, automation
            platforms, and developer APIs for leadership teams and
            developer-facing products where the gap between "it works" and
            "developers can use it" makes or breaks adoption.
          </p>

          <div>
            <h3 className="text-2xl font-bold mb-4 gradient-text">
              Why This Focus?
            </h3>
            <p className="text-muted-foreground">
              We kept seeing brilliant backend engineers and AI researchers
              build incredible technology... then wrap it in interfaces that
              confused the very people who needed to use it. The problem was
              never the technology. It was the translation layer.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4 gradient-text">
              What We Bring
            </h3>

            <div className="grid md:grid-cols-3 gap-8 mt-6">
              <div>
                <h4 className="font-semibold text-primary mb-3">
                  Technical Depth
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• 8+ years building React/TypeScript applications</li>
                  <li>
                    • Deep experience with API integration, real-time data, and
                    state management
                  </li>
                  <li>
                    • Understanding of modern backend systems, AI workflows, and
                    automation patterns
                  </li>
                  <li>
                    • Not just "pixel pushers"—we architect scalable frontend
                    systems
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-primary mb-3">
                  Developer Empathy
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    • We are your target users for developer-facing products
                  </li>
                  <li>
                    • We know what makes documentation useful vs. frustrating
                  </li>
                  <li>
                    • We understand what developers expect from SDKs and APIs
                  </li>
                  <li>
                    • We build with the assumption that someone else will
                    maintain this code
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-primary mb-3">
                  Communication
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    • Clear, jargon-free explanations (or jargon when
                    appropriate)
                  </li>
                  <li>
                    • Regular updates so you're never wondering what's happening
                  </li>
                  <li>
                    • Honest feedback—if something won't work, we'll tell you
                    early
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4 gradient-text">
              Where We Are Now
            </h3>
            <p className="text-muted-foreground">
              We're actively taking on clients who are solving interesting
              technical problems. We're working toward a goal of 8-10
              exceptional projects per year where we can deliver outstanding
              results for each client.
            </p>
            <p className="text-muted-foreground mt-4">
              If you're building something developers need to adopt, and you
              know the frontend experience is the bottleneck, let's talk.
            </p>
          </div>

          <div className="pt-8 border-t border-border">
            <h3 className="text-2xl font-bold mb-4 gradient-text">
              Our Mission
            </h3>
            <p className="text-muted-foreground">
              To bridge the gap between powerful backend technology and the
              developers who need to use it—creating interfaces that empower
              rather than confuse, and building tools that developers actually
              want to adopt.
            </p>
          </div>

          <div className="flex items-center justify-center gap-6 pt-8">
            <a
              href="mailto:info@codeclarity.ai"
              className="flex items-center gap-2 text-black hover:text-primary transition-colors"
            >
              <Mail className="w-5 h-5" strokeWidth={1.5} />
              <span>info@codeclarity.ai</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
