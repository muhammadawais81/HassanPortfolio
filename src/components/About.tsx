import { CheckCircle2 } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import { aboutContent } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="section-padding section-alt relative">
      <div className="section-container relative">
        <ScrollReveal>
          <SectionHeading
            number="01"
            label="About Me"
            title="Bridging creative vision with commercial execution"
            description="A marketing and merchandising leader dedicated to building export programs that meet the standards of Europe's most demanding fashion brands."
          />
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="panel-card sm:rounded-3xl">
            <div className="grid lg:grid-cols-5">
              {/* Bio text */}
              <div className="relative border-b border-border/30 p-6 sm:p-8 lg:col-span-3 lg:border-b-0 lg:border-r lg:p-10">
                <div
                  className="pointer-events-none absolute left-6 top-6 h-12 w-1 rounded-full bg-gradient-to-b from-accent to-accent/20 sm:left-8 sm:top-8"
                  aria-hidden="true"
                />
                <div className="space-y-4 pl-4 text-sm leading-relaxed text-muted sm:space-y-5 sm:pl-5 sm:text-base md:text-lg">
                  {aboutContent.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                  ))}
                </div>
              </div>

              {/* Highlights */}
              <div className="flex flex-col divide-y divide-border/30 lg:col-span-2">
                {aboutContent.highlights.map((item, i) => (
                  <div
                    key={item}
                    className="group flex items-start gap-3 p-5 transition-colors hover:bg-surface/60 sm:gap-4 sm:p-6"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-accent/10 font-display text-xs font-bold text-accent transition-colors group-hover:bg-accent group-hover:text-[var(--btn-text)] sm:h-10 sm:w-10 sm:text-sm">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="flex min-w-0 items-start gap-2">
                      <CheckCircle2
                        size={18}
                        className="mt-0.5 shrink-0 text-accent"
                      />
                      <p className="text-sm font-medium leading-relaxed text-foreground sm:text-base">
                        {item}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
