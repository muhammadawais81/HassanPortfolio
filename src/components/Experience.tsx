"use client";

import { useState } from "react";
import {
  Award,
  ChevronDown,
  ExternalLink,
  TrendingDown,
  Trophy,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import { experience } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const achievementIcons = [Trophy, TrendingDown, Award];

export default function Experience() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="experience" className="section-padding section-alt relative">
      <div className="section-container relative">
        <ScrollReveal>
          <SectionHeading
            number="03"
            label="Experience"
            title="Professional journey"
            description="Seven years of progressive responsibility in textile marketing, merchandising, and export development."
          />
        </ScrollReveal>

        {experience.map((job) => (
          <div key={job.company} className="space-y-5 sm:space-y-6">
            <ScrollReveal>
              <div className="glass-card glow-border rounded-2xl p-5 sm:p-6 md:p-8">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div className="min-w-0">
                    <span className="inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                      {job.duration}
                    </span>
                    <h3 className="mt-3 font-display text-xl font-bold text-foreground sm:text-2xl md:text-3xl">
                      {job.position}
                    </h3>
                    <p className="mt-1 text-base font-semibold text-accent sm:text-lg">
                      {job.company}
                    </p>
                    <p className="mt-1 text-sm text-muted">
                      {job.location} · {job.sector}
                    </p>
                  </div>
                  <a
                    href={job.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary shrink-0 self-start !w-auto !py-2 !px-4 !text-xs"
                  >
                    Visit website
                    <ExternalLink size={13} />
                  </a>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={80}>
              <div>
                <h4 className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-foreground sm:mb-4 sm:text-sm">
                  <Trophy size={16} className="text-accent" />
                  Key Achievements
                </h4>
                <div className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
                  {job.achievements.map((item, i) => {
                    const Icon = achievementIcons[i % achievementIcons.length];
                    return (
                      <div
                        key={item.slice(0, 40)}
                        className="glass-card glow-border flex gap-3 rounded-2xl p-4 sm:gap-4 sm:p-5"
                      >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent sm:h-11 sm:w-11">
                          <Icon size={18} className="sm:hidden" />
                          <Icon size={20} className="hidden sm:block" />
                        </div>
                        <p className="min-w-0 text-sm leading-relaxed text-muted">
                          {item}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={120}>
              <div className="glass-card overflow-hidden rounded-2xl">
                <button
                  type="button"
                  onClick={() => setExpanded(!expanded)}
                  className="flex w-full items-center justify-between gap-3 px-4 py-4 text-left transition-colors hover:bg-surface sm:px-6 sm:py-5"
                >
                  <span className="font-display text-sm font-semibold text-foreground sm:text-base">
                    Key Responsibilities
                    <span className="ml-1 block text-xs font-normal text-muted sm:ml-2 sm:inline sm:text-sm">
                      ({job.responsibilities.length} items)
                    </span>
                  </span>
                  <ChevronDown
                    size={20}
                    className={cn(
                      "shrink-0 text-muted transition-transform duration-300",
                      expanded && "rotate-180",
                    )}
                  />
                </button>

                <div
                  className={cn(
                    "grid transition-all duration-300",
                    expanded
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0",
                  )}
                >
                  <div className="overflow-hidden">
                    <ul className="grid gap-2.5 border-t border-border px-4 py-4 sm:grid-cols-2 sm:gap-3 sm:px-6 sm:py-5">
                      {job.responsibilities.map((item) => (
                        <li
                          key={item.slice(0, 50)}
                          className="flex items-start gap-2.5 rounded-xl bg-surface p-3 text-xs leading-relaxed text-muted sm:text-sm"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                          <span className="min-w-0">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {!expanded && (
                  <div className="border-t border-border px-4 py-3 sm:px-6 sm:py-4">
                    <p className="text-xs text-muted sm:text-sm">
                      Tap to view all responsibilities
                    </p>
                  </div>
                )}
              </div>
            </ScrollReveal>
          </div>
        ))}
      </div>
    </section>
  );
}
