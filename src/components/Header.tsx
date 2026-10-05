"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { useLanguage } from "@/context/LanguageContext";
import { Terminal, Moon, Sun, Compass, Menu, X, ArrowUpRight } from "lucide-react";

const THEMES = [
  { id: "obsidian", label: "Obsidian", icon: Moon, dotColor: "#38bdf8" },
  { id: "terminal", label: "DevOps", icon: Terminal, dotColor: "#00ff9d" },
  { id: "nordic", label: "Nordic", icon: Compass, dotColor: "#818cf8" },
  { id: "studio", label: "Studio", icon: Sun, dotColor: "#2563eb" },
];

export function Header() {
  const { theme, setTheme } = useTheme();
  const { language, setLanguage, dict } = useLanguage();
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleThemeChange = (newTheme: string) => {
    // If browser supports Document Transition API, run seamless view transition
    if (typeof document !== "undefined" && "startViewTransition" in document) {
      (document as unknown as { startViewTransition: (cb: () => void) => void }).startViewTransition(() => {
        setTheme(newTheme);
      });
    } else {
      setTheme(newTheme);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/80 bg-bg/85 backdrop-blur-xl transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Brand Monogram */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-surface-raised border border-border flex items-center justify-center font-mono font-bold text-primary group-hover:border-primary group-hover:shadow-[0_0_15px_rgba(var(--theme-glow),0.4)] transition-all duration-300">
            LM
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-text tracking-tight group-hover:text-primary transition-colors text-sm sm:text-base">
              Luis Martinez
            </span>
            <span className="text-xs font-mono text-text-dim">
              Principal Systems Eng.
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-text-muted">
          <a
            href="#projects"
            className="hover:text-primary transition-colors py-1.5"
          >
            {dict.nav.projects}
          </a>
          <a
            href="#architecture"
            className="hover:text-primary transition-colors py-1.5"
          >
            {dict.nav.architecture}
          </a>
          <a
            href="#simulators"
            className="hover:text-primary transition-colors py-1.5"
          >
            {dict.nav.simulators}
          </a>
          <a
            href="#contact"
            className="hover:text-primary transition-colors py-1.5"
          >
            {dict.nav.contact}
          </a>
        </nav>

        {/* Action Controls: Themes + i18n + CV */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Theme Selector Pill */}
          <div className="flex items-center bg-surface border border-border rounded-full p-1 shadow-inner">
            {THEMES.map((t) => {
              const isActive = mounted && theme === t.id;
              const Icon = t.icon;
              return (
                <button
                  key={t.id}
                  onClick={() => handleThemeChange(t.id)}
                  title={`Tema ${t.label}`}
                  className={`relative px-2.5 py-1 rounded-full text-xs font-mono flex items-center gap-1.5 transition-all duration-200 ${
                    isActive
                      ? "text-primary bg-surface-raised shadow-sm font-bold border border-border"
                      : "text-text-dim hover:text-text"
                  }`}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: t.dotColor }}
                  />
                  <span>{t.label}</span>
                </button>
              );
            })}
          </div>

          {/* Bilingual Switcher Pill [ ES | EN ] */}
          <div className="relative flex items-center bg-surface border border-border rounded-full p-1 text-xs font-mono">
            <button
              onClick={() => setLanguage("es")}
              className={`px-3 py-1 rounded-full transition-all duration-200 ${
                language === "es"
                  ? "bg-primary text-bg font-bold shadow-md"
                  : "text-text-muted hover:text-text"
              }`}
            >
              ES
            </button>
            <button
              onClick={() => setLanguage("en")}
              className={`px-3 py-1 rounded-full transition-all duration-200 ${
                language === "en"
                  ? "bg-primary text-bg font-bold shadow-md"
                  : "text-text-muted hover:text-text"
              }`}
            >
              EN
            </button>
          </div>

          {/* CV CTA */}
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 text-xs font-mono font-medium px-4 py-2 rounded-xl bg-surface border border-border text-primary hover:border-primary transition-all duration-300 shadow-sm"
          >
            <span>{dict.nav.downloadCv}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-3">
          {/* Mobile Language switch */}
          <button
            onClick={() => setLanguage(language === "es" ? "en" : "es")}
            className="px-2.5 py-1 text-xs font-mono rounded-lg border border-border bg-surface text-primary"
          >
            {language.toUpperCase()}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg border border-border text-text hover:text-primary"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-border bg-surface px-6 py-5 space-y-4 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-3 text-sm font-medium">
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="text-text-muted hover:text-primary"
            >
              {dict.nav.projects}
            </a>
            <a
              href="#architecture"
              onClick={() => setMobileMenuOpen(false)}
              className="text-text-muted hover:text-primary"
            >
              {dict.nav.architecture}
            </a>
            <a
              href="#simulators"
              onClick={() => setMobileMenuOpen(false)}
              className="text-text-muted hover:text-primary"
            >
              {dict.nav.simulators}
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-text-muted hover:text-primary"
            >
              {dict.nav.contact}
            </a>
          </div>

          <div className="pt-3 border-t border-border flex items-center justify-between">
            <span className="text-xs font-mono text-text-dim">Tema:</span>
            <div className="flex gap-2">
              {THEMES.map((t) => (
                <button
                  key={t.id}
                  onClick={() => handleThemeChange(t.id)}
                  className={`px-2 py-1 text-xs font-mono rounded-md border ${
                    theme === t.id
                      ? "border-primary text-primary bg-surface-raised"
                      : "border-border text-text-dim"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
