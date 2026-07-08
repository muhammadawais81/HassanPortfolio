import { Heart, Map, Star } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import { achievements, interests } from "@/data/portfolio";

const interestIcons = [Map, Heart, Star];

export default function Achievements() {
  return (
    <section id="achievements" className="section-padding section-alt relative">
      <div className="section-container relative">
        <ScrollReveal>
          <SectionHeading
            number="07"
            label="Achievements"
            title="Recognized results"
            description="Measurable impact and formal recognition earned through consistent delivery and leadership."
          />
        </ScrollReveal>

        <div className="mb-12 grid gap-4 sm:mb-16 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {achievements.map((item, index) => (
            <ScrollReveal key={item.title} delay={index * 80}>
              <article className="glass-card glow-border group relative overflow-hidden rounded-2xl p-5 transition-all hover:-translate-y-1 hover:border-accent/25 sm:rounded-3xl sm:p-6">
                <Star
                  size={20}
                  className="mb-3 text-accent sm:mb-4"
                  fill="currentColor"
                  fillOpacity={0.2}
                />
                <h3 className="font-display text-base font-bold text-foreground sm:text-lg">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm font-medium text-accent-light">
                  {item.organization}
                </p>
                <p className="mt-1 text-xs text-muted">{item.date}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted sm:mt-4">
                  {item.description}
                </p>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <SectionHeading
            label="Interests"
            title="Beyond professional life"
            align="center"
          />
        </ScrollReveal>

        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {interests.map((interest, index) => {
            const Icon = interestIcons[index];
            return (
              <ScrollReveal key={interest.title} delay={index * 80}>
                <article className="glass-card glow-border group rounded-2xl p-5 text-center transition-all hover:-translate-y-1 hover:border-accent/25 sm:rounded-3xl sm:p-6">
                  <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent transition-all group-hover:bg-accent group-hover:text-background sm:mb-4 sm:h-12 sm:w-12 sm:rounded-2xl">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-display text-base font-bold text-foreground sm:text-lg">
                    {interest.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted sm:mt-3">
                    {interest.description}
                  </p>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
