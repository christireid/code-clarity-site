"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, CheckCircle2, Sparkles } from "lucide-react";

interface NewsletterSignupProps {
  variant?: "inline" | "hero" | "sidebar";
  className?: string;
}

export function NewsletterSignup({
  variant = "inline",
  className = "",
}: NewsletterSignupProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [message, setMessage] = useState("");

  // Substack embed URL - replace with your actual Substack publication
  const SUBSTACK_URL = process.env.NEXT_PUBLIC_SUBSTACK_URL || "codeandclarity";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setStatus("error");
      setMessage("Please enter your email address");
      return;
    }

    setStatus("loading");

    try {
      // Substack signup via their embed form
      // Note: For production, you'll want to use Substack's API or embed
      const response = await fetch(`https://${SUBSTACK_URL}.substack.com/api/v1/free`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          first_url: window.location.href,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setMessage("🎉 Success! Check your email to confirm your subscription.");
        setEmail("");
      } else {
        setStatus("error");
        setMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("error");
      setMessage("Unable to subscribe. Please try again later.");
    }
  };

  if (variant === "hero") {
    return (
      <div className={`max-w-md mx-auto ${className}`}>
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
            <Sparkles className="w-4 h-4" />
            Join 500+ Developers
          </div>
          
          <h3 className="text-2xl font-bold">Get Weekly Insights</h3>
          <p className="text-muted-foreground">
            TypeScript SDKs, React patterns, and developer experience tips delivered
            to your inbox every week.
          </p>

          <form onSubmit={handleSubmit} className="space-y-3">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={status === "loading" || status === "success"}
              className="h-12 text-base"
            />
            <Button
              type="submit"
              size="lg"
              className="w-full"
              disabled={status === "loading" || status === "success"}
            >
              {status === "loading" ? (
                "Subscribing..."
              ) : status === "success" ? (
                <>
                  <CheckCircle2 className="mr-2 w-5 h-5" />
                  Subscribed!
                </>
              ) : (
                <>
                  <Mail className="mr-2 w-5 h-5" />
                  Subscribe
                </>
              )}
            </Button>
          </form>

          {message && (
            <p
              className={`text-sm ${
                status === "success" ? "text-primary" : "text-destructive"
              }`}
            >
              {message}
            </p>
          )}

          <p className="text-xs text-muted-foreground">
            No spam. Unsubscribe anytime. Powered by Substack.
          </p>
        </div>
      </div>
    );
  }

  if (variant === "sidebar") {
    return (
      <Card className={`p-6 space-y-4 ${className}`}>
        <div className="space-y-2">
          <Badge variant="secondary" className="mb-2">
            <Mail className="w-3 h-3 mr-1" />
            Newsletter
          </Badge>
          <h4 className="font-bold text-lg">Weekly Developer Insights</h4>
          <p className="text-sm text-muted-foreground">
            Get practical tips on building better developer products.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          <Input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={status === "loading" || status === "success"}
          />
          <Button
            type="submit"
            size="sm"
            className="w-full"
            disabled={status === "loading" || status === "success"}
          >
            {status === "loading"
              ? "..."
              : status === "success"
              ? "✓ Subscribed"
              : "Subscribe"}
          </Button>
        </form>

        {message && (
          <p
            className={`text-xs ${
              status === "success" ? "text-primary" : "text-destructive"
            }`}
          >
            {message}
          </p>
        )}
      </Card>
    );
  }

  // Inline variant (default)
  return (
    <section className={`py-20 sm:py-32 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
        <Card className="p-8 sm:p-12 bg-gradient-to-br from-primary/10 via-purple-500/10 to-pink-500/10 border-primary/20">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <Badge className="mb-2">
              <Sparkles className="w-3 h-3 mr-1" />
              Weekly Newsletter
            </Badge>

            <h3 className="text-3xl font-bold">
              Developer Experience Insights
              <span className="block text-primary mt-2">Delivered Weekly</span>
            </h3>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Join 500+ developers getting practical tips on TypeScript SDKs, React
              patterns, API design, and building products developers love.
            </p>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto pt-4"
            >
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status === "loading" || status === "success"}
                className="flex-1 h-12"
              />
              <Button
                type="submit"
                size="lg"
                disabled={status === "loading" || status === "success"}
                className="sm:w-auto"
              >
                {status === "loading" ? (
                  "..."
                ) : status === "success" ? (
                  <>
                    <CheckCircle2 className="mr-2 w-4 h-4" />
                    Subscribed!
                  </>
                ) : (
                  "Subscribe"
                )}
              </Button>
            </form>

            {message && (
              <p
                className={`text-sm ${
                  status === "success" ? "text-primary" : "text-destructive"
                }`}
              >
                {message}
              </p>
            )}

            <p className="text-sm text-muted-foreground pt-2">
              No spam, ever. Unsubscribe with one click.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
}
