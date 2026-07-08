import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
  number?: string;
}

export default function SectionHeading({
  label,
  title,
  description,
  className,
  align = "left",
  number,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-8 sm:mb-12 md:mb-16",
        align === "center" && "text-center",
        className,
      )}
    >
      <div
        className={cn(
          "mb-3 flex flex-wrap items-center gap-2 sm:mb-4 sm:gap-3",
          align === "center" && "justify-center",
        )}
      >
        {number && (
          <span className="font-display text-3xl font-bold text-accent/25 sm:text-4xl">
            {number}
          </span>
        )}
        <span className="rounded-full bg-accent/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-accent sm:px-3 sm:text-xs">
          {label}
        </span>
      </div>

      <h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl">
        {title}
      </h2>

      {description && (
        <p
          className={cn(
            "mt-2 max-w-2xl text-sm leading-relaxed text-muted sm:mt-3 sm:text-base",
            align === "center" && "mx-auto",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
