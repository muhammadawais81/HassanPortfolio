"use client";

import { ArrowUp, Mail } from "lucide-react";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";
import { personalInfo } from "@/data/portfolio";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-border/60 bg-background-alt">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

      <div className="section-container flex flex-col items-center justify-between gap-5 py-8 sm:gap-6 sm:py-10 md:flex-row">
        <div className="text-center md:text-left">
          <p className="font-display text-lg font-bold sm:text-xl">
            <span className="gradient-text-accent">{personalInfo.name}</span>
          </p>
          <p className="mt-1 text-xs text-muted sm:text-sm">
            Deputy Manager Marketing · {personalInfo.company}
          </p>
          <p className="mt-2 text-[10px] text-muted/60 sm:text-xs">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-2.5 sm:gap-3">
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-border/60 text-muted transition-all hover:border-accent/40 hover:bg-accent/10 hover:text-accent sm:h-11 sm:w-11"
          >
            <LinkedInIcon size={18} />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            aria-label="Send email"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-border/60 text-muted transition-all hover:border-accent/40 hover:bg-accent/10 hover:text-accent sm:h-11 sm:w-11"
          >
            <Mail size={18} />
          </a>
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-accent-dark text-background transition-transform hover:scale-105 sm:h-11 sm:w-11"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
}
