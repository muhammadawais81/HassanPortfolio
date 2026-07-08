"use client";

import { useState } from "react";
import { Check, Palette, X } from "lucide-react";
import { themes } from "@/lib/themes";
import { useTheme } from "@/components/ThemeProvider";
import { cn } from "@/lib/utils";

export default function ThemeSwitcher() {
  const { theme, setThemeId } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-[100] flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      {open && (
        <div className="glass-card w-[calc(100vw-2rem)] max-w-72 rounded-2xl p-3 shadow-2xl sm:w-72 sm:p-4">
          <div className="mb-2 flex items-center justify-between sm:mb-3">
            <p className="text-sm font-semibold text-foreground">Color Theme</p>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded-lg p-1 text-muted hover:bg-surface hover:text-foreground"
              aria-label="Close theme picker"
            >
              <X size={16} />
            </button>
          </div>
          <p className="mb-2 text-xs text-muted sm:mb-3">
            Changes page background, text & accent colors
          </p>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {themes.map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setThemeId(t.id)}
                title={t.name}
                className={cn(
                  "group relative flex items-center gap-2.5 rounded-xl border p-2.5 text-left transition-all",
                  theme.id === t.id
                    ? "border-accent bg-accent/10"
                    : "border-border hover:border-accent/40",
                )}
              >
                <span
                  className="relative h-9 w-9 shrink-0 overflow-hidden rounded-lg border border-black/10 shadow-sm sm:h-10 sm:w-10"
                  style={{ backgroundColor: t.background }}
                >
                  <span
                    className="absolute bottom-1 right-1 h-2.5 w-2.5 rounded-full ring-1 ring-white/50 sm:h-3 sm:w-3"
                    style={{ backgroundColor: t.swatch }}
                  />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-xs font-semibold text-foreground">
                    {t.name}
                  </span>
                </span>
                {theme.id === t.id && (
                  <Check size={14} className="shrink-0 text-accent" />
                )}
              </button>
            ))}
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-[var(--btn-text)] shadow-lg shadow-[var(--glow)] transition-all hover:scale-105 hover:shadow-xl sm:h-14 sm:w-14"
        aria-label="Change color theme"
        aria-expanded={open}
      >
        <Palette size={20} className="sm:hidden" />
        <Palette size={22} className="hidden sm:block" />
      </button>
    </div>
  );
}
