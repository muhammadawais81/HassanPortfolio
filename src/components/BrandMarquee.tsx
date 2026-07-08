import { brandPartners } from "@/data/portfolio";

export default function BrandMarquee() {
  const items = [...brandPartners, ...brandPartners];

  return (
    <div className="relative mt-10 overflow-hidden border-y border-border/60 py-4 sm:mt-14 sm:py-5">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-background to-transparent sm:w-24" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-background to-transparent sm:w-24" />

      <div className="flex w-max animate-marquee items-center gap-8 sm:gap-12">
        {items.map((brand, i) => (
          <span
            key={`${brand}-${i}`}
            className="whitespace-nowrap font-display text-xs font-semibold uppercase tracking-[0.2em] text-muted/60 sm:text-sm sm:tracking-[0.25em]"
          >
            {brand}
          </span>
        ))}
      </div>
    </div>
  );
}
