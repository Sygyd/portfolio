import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/context/LanguageContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Luis Martinez | Principal Systems Engineer & Frontend Architect",
  description:
    "Portafolio de Ingeniería de Sistemas de alto impacto. Sistemas distribuidos, arquitecturas multi-tenant Zero-Trust, visión computacional y automatización serverless de alto ROI.",
  keywords: [
    "Systems Engineer",
    "Frontend Architect",
    "Distributed Systems",
    "Zero-Trust",
    "PostgreSQL RLS",
    "Next.js 15",
    "High-Performance ETL",
  ],
  authors: [{ name: "Luis Martinez" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased min-h-screen bg-bg text-text transition-colors duration-300 selection:bg-primary selection:text-bg`}
      >
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="obsidian"
          enableSystem={false}
          themes={["obsidian", "terminal", "nordic", "studio"]}
        >
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
