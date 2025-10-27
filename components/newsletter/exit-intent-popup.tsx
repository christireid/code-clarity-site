"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { X, Gift, CheckCircle2 } from "lucide-react";

export function ExitIntentPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // Check if user has already seen the popup
    const hasSeenPopup = localStorage.getItem("exitIntentShown");
    if (hasSeenPopup) {
      setHasShown(true);
      return;
    }

    // Exit intent detection
    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger if mouse is leaving from the top
      if (e.clientY <= 0 && !hasShown) {
        setIsOpen(true);
        setHasShown(true);
        localStorage.setItem("exitIntentShown", "true");
      }
    };

    // Add event listener after a short delay to avoid false triggers
    const timeoutId = setTimeout(() => {
      document.addEventListener("mouseleave", handleMouseLeave);
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [hasShown]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setStatus("error");
      return;
    }

    setStatus("loading");

    try {
      const SUBSTACK_URL = process.env.NEXT_PUBLIC_SUBSTACK_URL || "codeandclarity";
      
      const response = await fetch(
        `https://${SUBSTACK_URL}.substack.com/api/v1/free`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            first_url: window.location.href,
          }),
        }
      );

      if (response.ok) {
        setStatus("success");
        setEmail("");
        // Close popup after 3 seconds
        setTimeout(() => {
          setIsOpen(false);
        }, 3000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    // Don't show again in this session
    localStorage.setItem("exitIntentShown", "true");
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-lg">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </button>

        <DialogHeader>
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <Gift className="w-8 h-8 text-primary" />
            </div>
          </div>
          <DialogTitle className="text-center text-2xl">
            Wait! Before You Go...
          </DialogTitle>
          <DialogDescription className="text-center text-base pt-2">
            Get our <span className="font-semibold text-foreground">free guide</span>:
            "The 5-Step Framework for Building Developer-Friendly SDKs"
          </DialogDescription>
        </DialogHeader>

        {status === "success" ? (
          <div className="py-8 text-center space-y-4">
            <div className="flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8 text-primary" />
              </div>
            </div>
            <h3 className="text-xl font-bold">You're In!</h3>
            <p className="text-muted-foreground">
              Check your email for the guide and welcome message.
            </p>
          </div>
        ) : (
          <div className="space-y-6 pt-4">
            {/* Benefits */}
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">5-Step SDK Framework</p>
                  <p className="text-sm text-muted-foreground">
                    The exact process we use to build production-ready SDKs
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Code Examples & Templates</p>
                  <p className="text-sm text-muted-foreground">
                    TypeScript snippets you can use immediately
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Weekly Developer Insights</p>
                  <p className="text-sm text-muted-foreground">
                    Practical tips on building better developer products
                  </p>
                </div>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-3">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status === "loading"}
                className="h-12"
              />
              <Button
                type="submit"
                size="lg"
                className="w-full"
                disabled={status === "loading"}
              >
                {status === "loading" ? "Sending..." : "Send Me The Guide"}
              </Button>
            </form>

            {status === "error" && (
              <p className="text-sm text-destructive text-center">
                Something went wrong. Please try again.
              </p>
            )}

            <p className="text-xs text-center text-muted-foreground">
              No spam. Unsubscribe anytime. Just helpful content.
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
