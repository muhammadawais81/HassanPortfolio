export interface Theme {
  id: string;
  name: string;
  swatch: string;
  background: string;
  backgroundAlt: string;
  foreground: string;
  muted: string;
  accent: string;
  accentLight: string;
  accentDark: string;
  surface: string;
  card: string;
  border: string;
  glow: string;
  btnText: string;
  mesh1: string;
  mesh2: string;
}

export const themes: Theme[] = [
  {
    id: "executive",
    name: "Executive",
    swatch: "#1e3a5f",
    background: "#ede8df",
    backgroundAlt: "#e2dbd0",
    foreground: "#1a1a1a",
    muted: "#6b6560",
    accent: "#1e3a5f",
    accentLight: "#2d5a8e",
    accentDark: "#152a45",
    surface: "rgba(30, 58, 95, 0.08)",
    card: "rgba(255, 255, 255, 0.38)",
    border: "rgba(26, 26, 26, 0.1)",
    glow: "rgba(30, 58, 95, 0.2)",
    btnText: "#ffffff",
    mesh1: "rgba(30, 58, 95, 0.12)",
    mesh2: "rgba(184, 134, 11, 0.08)",
  },
  {
    id: "gold",
    name: "Gold",
    swatch: "#b8860b",
    background: "#fef9ee",
    backgroundAlt: "#fdf0d5",
    foreground: "#292524",
    muted: "#78716c",
    accent: "#b8860b",
    accentLight: "#d4a017",
    accentDark: "#92680a",
    surface: "rgba(184, 134, 11, 0.1)",
    card: "rgba(255, 255, 255, 0.4)",
    border: "rgba(41, 37, 36, 0.12)",
    glow: "rgba(184, 134, 11, 0.25)",
    btnText: "#ffffff",
    mesh1: "rgba(184, 134, 11, 0.14)",
    mesh2: "rgba(212, 160, 23, 0.08)",
  },
  {
    id: "slate",
    name: "Slate",
    swatch: "#334155",
    background: "#dce4ed",
    backgroundAlt: "#cfd9e5",
    foreground: "#0f172a",
    muted: "#64748b",
    accent: "#334155",
    accentLight: "#475569",
    accentDark: "#1e293b",
    surface: "rgba(51, 65, 85, 0.08)",
    card: "rgba(255, 255, 255, 0.38)",
    border: "rgba(15, 23, 42, 0.12)",
    glow: "rgba(51, 65, 85, 0.2)",
    btnText: "#ffffff",
    mesh1: "rgba(51, 65, 85, 0.12)",
    mesh2: "rgba(100, 116, 139, 0.08)",
  },
  {
    id: "teal",
    name: "Teal",
    swatch: "#0f766e",
    background: "#d5f0ec",
    backgroundAlt: "#c2e8e2",
    foreground: "#134e4a",
    muted: "#5f8a86",
    accent: "#0f766e",
    accentLight: "#14b8a6",
    accentDark: "#0d5f58",
    surface: "rgba(15, 118, 110, 0.1)",
    card: "rgba(255, 255, 255, 0.38)",
    border: "rgba(19, 78, 74, 0.12)",
    glow: "rgba(15, 118, 110, 0.22)",
    btnText: "#ffffff",
    mesh1: "rgba(15, 118, 110, 0.14)",
    mesh2: "rgba(20, 184, 166, 0.08)",
  },
  {
    id: "burgundy",
    name: "Burgundy",
    swatch: "#881337",
    background: "#fae0e8",
    backgroundAlt: "#f5cdd9",
    foreground: "#4c0519",
    muted: "#9f7080",
    accent: "#881337",
    accentLight: "#be123c",
    accentDark: "#6b0f2b",
    surface: "rgba(136, 19, 55, 0.08)",
    card: "rgba(255, 255, 255, 0.38)",
    border: "rgba(76, 5, 25, 0.12)",
    glow: "rgba(136, 19, 55, 0.2)",
    btnText: "#ffffff",
    mesh1: "rgba(136, 19, 55, 0.12)",
    mesh2: "rgba(190, 18, 60, 0.08)",
  },
  {
    id: "charcoal",
    name: "Charcoal",
    swatch: "#d4a574",
    background: "#0d1117",
    backgroundAlt: "#161b26",
    foreground: "#ece8e1",
    muted: "#9ca3af",
    accent: "#d4a574",
    accentLight: "#e8c9a8",
    accentDark: "#b8860b",
    surface: "rgba(255, 255, 255, 0.06)",
    card: "rgba(22, 27, 38, 0.75)",
    border: "rgba(255, 255, 255, 0.1)",
    glow: "rgba(212, 165, 116, 0.28)",
    btnText: "#111318",
    mesh1: "rgba(212, 165, 116, 0.12)",
    mesh2: "rgba(99, 102, 241, 0.08)",
  },
];

export const defaultThemeId = "executive";

export function getTheme(id: string): Theme {
  return themes.find((t) => t.id === id) ?? themes[0];
}

export function applyTheme(theme: Theme) {
  const root = document.documentElement;

  root.style.setProperty("--background", theme.background);
  root.style.setProperty("--background-alt", theme.backgroundAlt);
  root.style.setProperty("--foreground", theme.foreground);
  root.style.setProperty("--muted", theme.muted);
  root.style.setProperty("--accent", theme.accent);
  root.style.setProperty("--accent-light", theme.accentLight);
  root.style.setProperty("--accent-dark", theme.accentDark);
  root.style.setProperty("--surface", theme.surface);
  root.style.setProperty("--card", theme.card);
  root.style.setProperty("--border", theme.border);
  root.style.setProperty("--glow", theme.glow);
  root.style.setProperty("--btn-text", theme.btnText);
  root.style.setProperty("--mesh-1", theme.mesh1);
  root.style.setProperty("--mesh-2", theme.mesh2);
}

export function themeToCssVars(theme: Theme): Record<string, string> {
  return {
    background: theme.background,
    "background-alt": theme.backgroundAlt,
    foreground: theme.foreground,
    muted: theme.muted,
    accent: theme.accent,
    "accent-light": theme.accentLight,
    "accent-dark": theme.accentDark,
    surface: theme.surface,
    card: theme.card,
    border: theme.border,
    glow: theme.glow,
    "btn-text": theme.btnText,
    "mesh-1": theme.mesh1,
    "mesh-2": theme.mesh2,
  };
}

export const THEME_COOKIE = "portfolio-theme";

export function getThemeCssProperties(
  theme: Theme,
): Record<string, string> {
  const vars = themeToCssVars(theme);
  return Object.fromEntries(
    Object.entries(vars).map(([key, value]) => [`--${key}`, value]),
  );
}

export function saveThemeCookie(id: string) {
  if (typeof document === "undefined") return;
  document.cookie = `${THEME_COOKIE}=${id}; path=/; max-age=${60 * 60 * 24 * 365}; SameSite=Lax`;
}
