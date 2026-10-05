"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { TextScramble } from "@/components/ui/TextScramble";
import { ArrowDown, CheckCircle2, ShieldCheck, Terminal, Cpu } from "lucide-react";

export function Hero() {
  const { dict } = useLanguage();

  return (
    <section className="relative pt-20 pb-24 md:pt-28 md:pb-36 overflow-hidden tech-grid border-b border-border/60">
      {/* Ambient background glow orb */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-primary/10 blur-[130px] rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-7">
          {/* Availability Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-surface border border-border text-xs font-mono text-text-muted shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            <span>{dict.common.availableForHire}</span>
          </div>

          {/* Role Header */}
          <div className="flex items-center justify-center gap-2 text-primary font-mono text-sm md:text-base font-semibold tracking-wider uppercase">
            <Terminal className="w-4 h-4" />
            <span>{dict.hero.role}</span>
          </div>

          {/* Main Value Proposition */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-text leading-[1.12]">
            {dict.hero.titleFirstPart}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary text-glow">
              {dict.hero.titleHighlight}
            </span>{" "}
            {dict.hero.titleSecondPart}
          </h1>

          {/* Subtitle / Architectural summary */}
          <p className="text-base sm:text-lg md:text-xl text-text-muted max-w-3xl mx-auto leading-relaxed font-normal">
            {dict.hero.summary}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a
              href="#projects"
              className="px-7 py-3.5 rounded-xl font-medium text-sm sm:text-base bg-primary text-bg font-semibold hover:bg-primary-hover shadow-[0_0_30px_rgba(var(--theme-glow),0.35)] transition-all duration-300 flex items-center gap-2"
            >
              <span>{dict.hero.ctaPrimary}</span>
              <ArrowDown className="w-4 h-4" />
            </a>
            <a
              href="#simulators"
              className="px-7 py-3.5 rounded-xl font-medium text-sm sm:text-base bg-surface border border-border text-text hover:border-primary/60 transition-all duration-300 flex items-center gap-2"
            >
              <Cpu className="w-4 h-4 text-primary" />
              <span>{dict.hero.ctaSecondary}</span>
            </a>
          </div>

          {/* System Performance Badges */}
          <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {dict.hero.stats.map((stat, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-surface/70 border border-border backdrop-blur-sm text-left hover:border-primary/40 transition-all"
              >
                <div className="font-mono text-2xl sm:text-3xl font-bold text-primary tracking-tight">
                  <TextScramble text={stat.value} duration={500} />
                </div>
                <div className="text-xs font-semibold text-text mt-1">
                  {stat.label}
                </div>
                <div className="text-[11px] text-text-dim mt-0.5 line-clamp-1">
                  {stat.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
