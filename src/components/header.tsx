"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-ivory/95 backdrop-blur supports-[backdrop-filter]:bg-ivory/60">
      <div className="mx-auto flex h-20 items-center justify-between px-6 lg:max-w-6xl">
        <Link href="/" className="flex shrink-0 items-center">
          <Image
            src="/64thsquare-logo.svg"
            alt="64thSquare"
            width={320}
            height={80}
            className="w-[220px] md:w-[320px] h-auto"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={cn(
                "text-lg font-semibold transition-colors",
                pathname === link.href
                  ? "text-navy"
                  : "text-slate hover:text-navy",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Button asChild variant="default" size="sm" className="hidden md:inline-flex">
          <a
            href="mailto:contact@64thsquare.com?subject=64thSquare%20Consulting%20Inquiry"
            target="_blank"
            rel="noopener noreferrer"
          >
            Schedule a conversation
          </a>
        </Button>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2.5 text-navy hover:bg-muted md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? (
            <X className="h-5 w-5" aria-hidden="true" />
          ) : (
            <Menu className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="border-t border-border/40 bg-ivory md:hidden">
          <div className="space-y-1 px-6 pb-6 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="block py-2 text-base font-medium text-slate hover:text-navy"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4">
              <Button asChild className="w-full">
                <a
                  href="mailto:contact@64thsquare.com?subject=64thSquare%20Consulting%20Inquiry"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Schedule a conversation
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
