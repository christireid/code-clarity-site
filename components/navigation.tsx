"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { scrollToContactForm } from "./contact-form";

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/services", label: "Services" },
    { href: "/pricing", label: "Pricing" },
    { href: "/blog", label: "Blog" },
    { href: "/#about", label: "About" },
  ];

  const linkStyles = (href: string) => {
    const isActive = pathname === href || (href.includes("#") && pathname === "/");
    return `text-sm font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-gradient-to-r after:from-[oklch(0.5_0.12_280)] after:to-[oklch(0.6_0.1_240)] after:transition-all after:duration-300 ${
      isActive
        ? "text-foreground after:w-full"
        : "text-muted-foreground hover:text-foreground after:w-0 hover:after:w-full"
    }`;
  };

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

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={linkStyles(link.href)}>
              {link.label}
            </Link>
          ))}
          <Button
            onClick={scrollToContactForm}
            size="sm"
            className="primary-button font-semibold"
          >
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
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

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background fade-in">
          <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-base font-medium transition-colors py-2 ${
                  pathname === link.href
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button
              onClick={() => {
                setMobileMenuOpen(false);
                scrollToContactForm();
              }}
              className="w-full primary-button font-semibold mt-2"
            >
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
