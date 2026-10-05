"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { MulatoSimulator } from "./simulators/MulatoSimulator";
import { PuertoSimulator } from "./simulators/PuertoSimulator";
import { TellexSimulator } from "./simulators/TellexSimulator";
import { Cpu, Wine, Hammer, Scale } from "lucide-react";

export function SimulatorsSection() {
  const { dict } = useLanguage();
  const [activeSimulator, setActiveSimulator] = useState<"mulato" | "puerto" | "tellex">("mulato");

  return (
    <section id="simulators" className="py-24 border-b border-border/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="space-y-3 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-mono text-primary font-semibold">
            <Cpu className="w-3.5 h-3.5" />
            <span>{dict.simulators.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-text">
            {dict.simulators.title}
          </h2>
          <p className="text-base sm:text-lg text-text-muted">
            {dict.simulators.subtitle}
          </p>
        </div>

        {/* Simulator Switcher Tabs */}
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => setActiveSimulator("mulato")}
            className={`flex items-center gap-2 px-5 py-3 rounded-xl font-mono text-xs sm:text-sm border transition-all ${
              activeSimulator === "mulato"
                ? "bg-primary text-bg border-primary font-bold shadow-lg"
                : "bg-surface border-border text-text-muted hover:text-text hover:border-primary/50"
            }`}
          >
            <Wine className="w-4 h-4" />
            <span>1. El Mulato (15-min Leases & Cover)</span>
          </button>

          <button
            onClick={() => setActiveSimulator("puerto")}
            className={`flex items-center gap-2 px-5 py-3 rounded-xl font-mono text-xs sm:text-sm border transition-all ${
              activeSimulator === "puerto"
                ? "bg-primary text-bg border-primary font-bold shadow-lg"
                : "bg-surface border-border text-text-muted hover:text-text hover:border-primary/50"
            }`}
          >
            <Hammer className="w-4 h-4" />
            <span>2. Puerto Aventura (Título IV & RLS Scan)</span>
          </button>

          <button
            onClick={() => setActiveSimulator("tellex")}
            className={`flex items-center gap-2 px-5 py-3 rounded-xl font-mono text-xs sm:text-sm border transition-all ${
              activeSimulator === "tellex"
                ? "bg-primary text-bg border-primary font-bold shadow-lg"
                : "bg-surface border-border text-text-muted hover:text-text hover:border-primary/50"
            }`}
          >
            <Scale className="w-4 h-4" />
            <span>3. Tellex Group (Doble Ciego & Odometer)</span>
          </button>
        </div>

        {/* Active Simulator Container */}
        <div>
          {activeSimulator === "mulato" && <MulatoSimulator />}
          {activeSimulator === "puerto" && <PuertoSimulator />}
          {activeSimulator === "tellex" && <TellexSimulator />}
        </div>
      </div>
    </section>
  );
}
