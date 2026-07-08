import type { Metadata, Viewport } from "next";
import { cookies } from "next/headers";
import { Inter, Sora } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import {
  defaultThemeId,
  getTheme,
  getThemeCssProperties,
  THEME_COOKIE,
} from "@/lib/themes";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Hassan Alvi | Deputy Manager Marketing",
  description:
    "Professional portfolio of Hassan Alvi — Deputy Manager Marketing at Masood Textile Mills Ltd. with 8+ years of experience in apparel product development, export marketing, and European brand partnerships.",
  keywords: [
    "Hassan Alvi",
    "Textile Marketing",
    "Merchandising",
    "Apparel Export",
    "Masood Textile Mills",
    "Product Development",
  ],
  authors: [{ name: "Hassan Alvi" }],
  openGraph: {
    title: "Hassan Alvi | Deputy Manager Marketing",
    description:
      "Marketing & merchandising professional specializing in European high-fashion brand development and textile exports.",
    type: "website",
    locale: "en_US",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ede8df",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const savedId = cookieStore.get(THEME_COOKIE)?.value;
  const themeId =
    savedId && getTheme(savedId).id === savedId ? savedId : defaultThemeId;
  const theme = getTheme(themeId);

  return (
    <html
      lang="en"
      className={`${inter.variable} ${sora.variable} scroll-smooth bg-background`}
      style={getThemeCssProperties(theme)}
      suppressHydrationWarning
    >
      <body
        className="min-h-screen bg-background text-foreground antialiased"
        suppressHydrationWarning
      >
        <ThemeProvider initialThemeId={themeId}>
          {children}
          <ThemeSwitcher />
        </ThemeProvider>
      </body>
    </html>
  );
}
