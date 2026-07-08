import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      <div className="section-container relative">
        <ScrollReveal>
          <SectionHeading
            number="04"
            label="Projects"
            title="Key initiatives & programs"
            description="Major professional programs led across brand development, fabric marketing, and production excellence."
          />
        </ScrollReveal>

        <div className="grid gap-4 sm:gap-5 lg:grid-cols-2">
          {projects.map((project, index) => {
            const isFeatured = index === 0;

            return (
              <ScrollReveal
                key={project.name}
                delay={index * 100}
                className={isFeatured ? "lg:col-span-2" : ""}
              >
                <article
                  className={`glass-card glow-border group relative overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:border-accent/25 sm:rounded-3xl ${
                    isFeatured ? "lg:grid lg:grid-cols-2 lg:gap-0" : ""
                  }`}
                >
                  <span className="pointer-events-none absolute -right-2 -top-4 font-display text-6xl font-bold leading-none text-accent/5 transition-colors group-hover:text-accent/8 sm:-right-4 sm:-top-6 sm:text-8xl">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div
                    className={`relative p-5 sm:p-7 md:p-8 ${isFeatured ? "lg:border-r lg:border-border/60" : ""}`}
                  >
                    <div className="mb-3 h-1 w-12 rounded-full bg-gradient-to-r from-accent to-accent/20 transition-all group-hover:w-16 sm:mb-4" />

                    <h3 className="font-display text-lg font-bold text-foreground sm:text-xl md:text-2xl">
                      {project.name}
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-muted sm:mt-3 sm:text-base">
                      {project.description}
                    </p>

                    <p className="mt-3 text-sm sm:mt-4">
                      <span className="font-semibold text-accent">Role: </span>
                      <span className="text-muted">{project.role}</span>
                    </p>
                  </div>

                  <div className="space-y-4 border-t border-border/60 p-5 sm:space-y-5 sm:p-7 md:p-8 lg:border-t-0">
                    <div>
                      <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.15em] text-accent sm:text-xs">
                        Processes
                      </p>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-lg border border-border/60 bg-surface px-2.5 py-1 text-[11px] font-medium text-muted sm:px-3 sm:text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.15em] text-accent sm:text-xs">
                        Key Features
                      </p>
                      <ul className="space-y-1.5">
                        {project.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-start gap-2 text-xs text-muted sm:text-sm"
                          >
                            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                            <span className="min-w-0">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="rounded-xl border border-accent/15 bg-accent/5 p-3 sm:p-4">
                      <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.15em] text-accent sm:text-xs">
                        Challenge Solved
                      </p>
                      <p className="text-xs leading-relaxed text-muted sm:text-sm">
                        {project.challenges}
                      </p>
                    </div>
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
