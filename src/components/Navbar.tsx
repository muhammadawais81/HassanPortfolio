"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, personalInfo } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => {
      if (mobileOpen) return;
      setScrolled(window.scrollY > 40);

      const sections = navLinks
        .map((link) => document.querySelector(link.href))
        .filter(Boolean) as HTMLElement[];

      const scrollPosition = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i].offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [mobileOpen]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMenu = () => setMobileOpen(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4">
        <nav
          className={cn(
            "relative mx-auto flex max-w-6xl items-center justify-between gap-3 rounded-2xl px-3 py-2.5 sm:px-5 sm:py-3",
            scrolled || mobileOpen
              ? "glass-card border border-border/80 shadow-lg shadow-black/10"
              : "bg-transparent",
          )}
          aria-label="Main navigation"
        >
          <a
            href="#"
            className="shrink-0 font-display text-lg font-bold tracking-tight sm:text-xl"
            onClick={closeMenu}
          >
            <span className="gradient-text-accent">
              {personalInfo.name.split(" ")[0]}
            </span>
          </a>

          {/* Desktop nav — lg and up */}
          <ul className="hidden items-center gap-0.5 lg:flex xl:gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={cn(
                    "rounded-xl px-2.5 py-2 text-xs font-medium transition-all duration-200 xl:px-3.5 xl:text-sm",
                    activeSection === link.href.slice(1)
                      ? "bg-accent/10 text-accent"
                      : "text-muted hover:bg-surface hover:text-foreground",
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="btn-primary hidden !w-auto !py-2 !px-4 !text-xs lg:inline-flex xl:!px-5"
          >
            Get in Touch
          </a>

          {/* Mobile + tablet menu toggle */}
          <button
            type="button"
            className={cn(
              "inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-transparent text-foreground transition-colors lg:hidden",
              mobileOpen && "border-border/60 bg-surface",
            )}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <X size={24} strokeWidth={2.5} className="text-foreground" />
            ) : (
              <Menu size={24} strokeWidth={2} />
            )}
          </button>
        </nav>
      </header>

      {/* Mobile + tablet menu overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-background/98 backdrop-blur-2xl transition-all duration-300 lg:hidden",
          mobileOpen
            ? "pointer-events-auto visible opacity-100"
            : "pointer-events-none invisible opacity-0",
        )}
        aria-hidden={!mobileOpen}
      >
        {/* Close button inside menu (backup, always visible) */}
        <div className="flex items-center justify-end px-4 pt-5 sm:px-6 sm:pt-6">
          <button
            type="button"
            onClick={closeMenu}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-border/60 bg-surface text-foreground shadow-sm transition-colors hover:border-accent/40 hover:bg-accent/10 hover:text-accent"
            aria-label="Close menu"
          >
            <X size={22} strokeWidth={2.5} />
          </button>
        </div>

        <ul className="flex h-[calc(100%-5rem)] flex-col items-center justify-center gap-1 px-4 pb-8 sm:gap-2 sm:px-6">
          {navLinks.map((link) => (
            <li key={link.href} className="w-full max-w-sm">
              <a
                href={link.href}
                onClick={closeMenu}
                className="block rounded-2xl px-5 py-3.5 text-center font-display text-xl font-semibold text-foreground transition-colors hover:bg-accent/10 hover:text-accent sm:py-4 sm:text-2xl"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="mt-4 w-full max-w-sm sm:mt-6">
            <a href="#contact" onClick={closeMenu} className="btn-primary w-full">
              Get in Touch
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
