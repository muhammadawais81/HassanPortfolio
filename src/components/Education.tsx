import { GraduationCap } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import { education } from "@/data/portfolio";

export default function Education() {
  return (
    <section id="education" className="section-padding section-alt relative">
      <div className="section-container relative">
        <ScrollReveal>
          <SectionHeading
            number="05"
            label="Education"
            title="Academic foundation"
            description="Formal education in business administration and management, grounded in the textile industry."
          />
        </ScrollReveal>

        <div className="relative space-y-4 sm:space-y-6">
          {education.map((item, index) => (
            <ScrollReveal key={item.degree} delay={index * 80}>
              <article className="glass-card glow-border group relative rounded-2xl p-5 transition-all hover:border-accent/25 sm:rounded-3xl sm:p-6 md:p-8">
                <div className="flex flex-col gap-4 sm:gap-5 md:flex-row md:items-start md:justify-between">
                  <div className="flex min-w-0 gap-4 sm:gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 text-accent transition-all group-hover:from-accent group-hover:to-accent-dark group-hover:text-background sm:h-14 sm:w-14 sm:rounded-2xl">
                      <GraduationCap size={22} className="sm:hidden" />
                      <GraduationCap size={24} className="hidden sm:block" />
                    </div>
                    <div className="min-w-0">
                      <p className="mb-1 font-display text-[10px] font-semibold uppercase tracking-[0.2em] text-accent sm:text-xs">
                        {item.duration}
                      </p>
                      <h3 className="font-display text-lg font-bold text-foreground sm:text-xl">
                        {item.degree}
                      </h3>
                      <p className="mt-1 text-sm font-medium text-accent-light sm:text-base">
                        {item.institution}
                      </p>
                    </div>
                  </div>
                  {item.grade && (
                    <span className="inline-flex w-fit shrink-0 rounded-full border border-accent/25 bg-accent/10 px-3 py-1 text-xs font-semibold text-accent sm:px-4 sm:py-1.5 sm:text-sm">
                      {item.grade}
                    </span>
                  )}
                </div>

                {item.thesis && (
                  <p className="mt-4 rounded-xl border border-border/60 bg-surface p-3 text-xs leading-relaxed text-muted sm:mt-5 sm:rounded-2xl sm:p-4 sm:text-sm">
                    <span className="font-semibold text-foreground">Thesis: </span>
                    {item.thesis}
                  </p>
                )}

                {item.coursework && (
                  <div className="mt-4 sm:mt-5">
                    <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.15em] text-muted sm:mb-3 sm:text-xs">
                      Relevant Coursework
                    </p>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {item.coursework.map((course) => (
                        <span
                          key={course}
                          className="rounded-lg border border-border/60 bg-surface px-2.5 py-1 text-[11px] text-muted transition-colors group-hover:border-accent/20 sm:px-3 sm:py-1.5 sm:text-xs"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
