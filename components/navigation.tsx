"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 py-4 flex items-center justify-between max-w-7xl">
        <Link href="/" className="flex items-center gap-3 group min-h-[44px]">
          <div className="relative w-9 h-9 transition-transform group-hover:scale-110 duration-300">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo%20for%20Tech-Focused%20Business%20-%20%27Code%20%26%20Form%27-NJk6yRYWLMnV5JFzzq8MfTvBBoRRxv.png"
              alt="Code & Clarity Logo"
              width={36}
              height={36}
              className="object-contain"
            />
          </div>
          <span className="font-bold text-xl">Code & Clarity</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link
            href="#services"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-[oklch(0.5_0.12_280)] after:to-[oklch(0.6_0.1_240)] hover:after:w-full after:transition-all after:duration-300"
          >
            Services
          </Link>
          <Link
            href="#process"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-[oklch(0.5_0.12_280)] after:to-[oklch(0.6_0.1_240)] hover:after:w-full after:transition-all after:duration-300"
          >
            Process
          </Link>
          <Link
            href="#about"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-[oklch(0.5_0.12_280)] after:to-[oklch(0.6_0.1_240)] hover:after:w-full after:transition-all after:duration-300"
          >
            About
          </Link>
          <Button size="sm" className="primary-button font-semibold">
            Get Started
          </Button>
        </div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background fade-in">
          <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
            <Link
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
            >
              Services
            </Link>
            <Link
              href="#process"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
            >
              Process
            </Link>
            <Link
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
            >
              About
            </Link>
            <Button className="w-full primary-button font-semibold mt-2">
              Book Call
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
