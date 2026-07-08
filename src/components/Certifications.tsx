import { Award, ExternalLink } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import { certifications } from "@/data/portfolio";

export default function Certifications() {
  return (
    <section id="certifications" className="section-padding relative overflow-hidden">
      <div className="section-container relative">
        <ScrollReveal>
          <SectionHeading
            number="06"
            label="Certifications & Activities"
            title="Leadership beyond the workplace"
            description="Community engagement and institutional leadership that reflect a commitment to growth and social responsibility."
          />
        </ScrollReveal>

        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
          {certifications.map((cert, index) => (
            <ScrollReveal key={cert.title} delay={index * 100}>
              <article className="glass-card glow-border group relative h-full overflow-hidden rounded-2xl p-5 transition-all hover:-translate-y-1 hover:border-accent/25 sm:rounded-3xl sm:p-7 md:p-8">
                <div className="relative">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 text-accent sm:mb-5 sm:h-12 sm:w-12 sm:rounded-2xl">
                    <Award size={20} className="sm:hidden" />
                    <Award size={22} className="hidden sm:block" />
                  </div>

                  <p className="mb-1.5 font-display text-[10px] font-semibold uppercase tracking-[0.2em] text-accent sm:mb-2 sm:text-xs">
                    {cert.duration}
                  </p>
                  <h3 className="font-display text-lg font-bold text-foreground sm:text-xl">
                    {cert.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-accent-light">
                    {cert.organization}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted sm:mt-4 sm:text-base">
                    {cert.description}
                  </p>

                  {cert.link && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-colors hover:text-accent-light sm:mt-5"
                    >
                      Learn more
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
