import {
  BarChart3,
  Layers,
  Package,
  Settings,
  Users,
  Globe,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import { skillCategories } from "@/data/portfolio";

const icons = [Package, BarChart3, Settings, Users, Layers, Globe];

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      <div className="section-container relative">
        <ScrollReveal>
          <SectionHeading
            number="02"
            label="Skills"
            title="Expertise across the full merchandising lifecycle"
            description="A comprehensive skill set built through years of hands-on work in apparel development, export marketing, and production planning."
          />
        </ScrollReveal>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {skillCategories.map((category, index) => {
            const Icon = icons[index % icons.length];

            return (
              <ScrollReveal key={category.title} delay={index * 80}>
                <article className="glass-card glow-border group flex h-full flex-col rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/25 sm:rounded-3xl sm:p-6 md:p-7">
                  <div className="mb-4 flex items-center justify-between sm:mb-5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 text-accent transition-all group-hover:from-accent group-hover:to-accent-dark group-hover:text-background sm:h-12 sm:w-12 sm:rounded-2xl">
                      <Icon size={20} className="sm:hidden" />
                      <Icon size={22} className="hidden sm:block" />
                    </div>
                    <span className="font-display text-3xl font-bold text-accent/10 transition-colors group-hover:text-accent/20 sm:text-4xl">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="mb-3 font-display text-base font-bold text-foreground sm:mb-4 sm:text-lg">
                    {category.title}
                  </h3>

                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-lg border border-border/60 bg-surface px-2.5 py-1 text-[11px] font-medium text-muted transition-all group-hover:border-accent/20 group-hover:text-foreground sm:px-3 sm:py-1.5 sm:text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
