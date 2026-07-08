"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import {
  applyTheme,
  defaultThemeId,
  getTheme,
  saveThemeCookie,
  type Theme,
} from "@/lib/themes";

interface ThemeContextValue {
  theme: Theme;
  setThemeId: (id: string) => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

const STORAGE_KEY = "portfolio-theme";

export function ThemeProvider({
  children,
  initialThemeId = defaultThemeId,
}: {
  children: ReactNode;
  initialThemeId?: string;
}) {
  const [themeId, setThemeIdState] = useState(initialThemeId);
  const theme = getTheme(themeId);

  // One-time migration: localStorage preference → cookie (runs after hydration)
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && getTheme(stored).id === stored && stored !== initialThemeId) {
      setThemeIdState(stored);
    }
  }, [initialThemeId]);

  // Apply theme after hydration — never modifies DOM before React hydrates
  useEffect(() => {
    applyTheme(theme);
    localStorage.setItem(STORAGE_KEY, theme.id);
    saveThemeCookie(theme.id);
  }, [theme]);

  const setThemeId = useCallback((id: string) => {
    setThemeIdState(id);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setThemeId }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
