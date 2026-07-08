import { ArrowDown, Download, Mail, Sparkles } from "lucide-react";
import BrandMarquee from "@/components/BrandMarquee";
import { heroStats, heroSummary, personalInfo } from "@/data/portfolio";

export default function Hero() {
  return (
    <section
      id="hero"
      className="mesh-bg relative flex min-h-[100dvh] flex-col justify-center overflow-hidden pt-20 sm:pt-24 lg:pt-28"
    >
      <div className="section-container relative z-10 py-7 sm:py-9 lg:py-10">
        <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-[1fr_auto] lg:gap-16">
          {/* Text */}
          <div className="order-2 text-center lg:order-1 lg:text-left">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-surface px-3 py-1.5 text-xs font-medium text-accent sm:px-4 sm:py-2 sm:text-sm">
              <Sparkles size={14} />
              Available for opportunities
            </div>

            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted sm:text-sm">
              {personalInfo.role}
            </p>

            <h1 className="font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              <span className="gradient-text">{personalInfo.name}</span>
            </h1>

            <p className="mx-auto mt-3 max-w-xl text-base font-medium text-accent sm:mt-4 sm:text-lg md:text-xl lg:mx-0">
              {personalInfo.tagline}
            </p>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted sm:text-base lg:mx-0">
              {heroSummary}
            </p>

            <div className="mt-6 flex flex-col gap-2.5 sm:mt-8 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">
              <a href={personalInfo.resumeUrl} download className="btn-primary">
                <Download size={18} />
                Download Resume
              </a>
              <a href="#contact" className="btn-secondary">
                <Mail size={18} />
                Contact Me
              </a>
              <a href="#projects" className="btn-ghost">
                View Projects
                <ArrowDown size={18} />
              </a>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-2.5 sm:mt-10 sm:grid-cols-4 sm:gap-3">
              {heroStats.map((stat) => (
                <div
                  key={stat.label}
                  className="glass-card rounded-xl p-2.5 text-center sm:p-3"
                >
                  <p className="font-display text-lg font-bold text-accent sm:text-xl md:text-2xl">
                    {stat.value}
                  </p>
                  <p className="mt-0.5 text-[10px] leading-tight text-muted sm:text-[11px]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Circular profile */}
          <div className="order-1 flex shrink-0 flex-col items-center lg:order-2">
            <div className="profile-ring p-1 sm:p-1.5">
              <div className="h-52 w-52 overflow-hidden rounded-full border-[4px] border-background bg-surface sm:h-60 sm:w-60 md:h-72 md:w-72 lg:h-80 lg:w-80 xl:h-[22rem] xl:w-[22rem]">
                <img
                  src="/profile.jpeg"
                  alt={`${personalInfo.name} professional portrait`}
                  width={352}
                  height={352}
                  className="h-full w-full object-cover object-[center_15%]"
                  loading="eager"
                  decoding="async"
                />
              </div>
            </div>

            <div className="mt-4 text-center sm:mt-5">
              <p className="font-display text-base font-semibold text-foreground sm:text-lg">
                {personalInfo.company}
              </p>
              <p className="text-xs text-muted sm:text-sm">
                Since 2018 · Faisalabad, Pakistan
              </p>
            </div>
          </div>
        </div>

        <BrandMarquee />
      </div>
    </section>
  );
}
