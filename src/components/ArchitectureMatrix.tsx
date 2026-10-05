"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Layers, ShieldCheck, CheckCircle2 } from "lucide-react";

export function ArchitectureMatrix() {
  const { dict } = useLanguage();

  return (
    <section id="architecture" className="py-24 border-b border-border/80 bg-surface/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="space-y-3 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-mono text-primary font-semibold">
            <Layers className="w-3.5 h-3.5" />
            <span>{dict.matrix.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-text">
            {dict.matrix.title}
          </h2>
          <p className="text-base sm:text-lg text-text-muted">
            {dict.matrix.subtitle}
          </p>
        </div>

        {/* Matrix Table */}
        <div className="overflow-x-auto rounded-2xl border border-border bg-surface shadow-xl">
          <table className="w-full text-left border-collapse min-w-[750px]">
            <thead>
              <tr className="border-b border-border bg-surface-raised text-xs font-mono text-text-dim uppercase tracking-wider">
                <th className="py-4 px-6 w-1/4">Dimensión de Ingeniería</th>
                <th className="py-4 px-6 w-1/4 text-primary font-bold">1. El Mulato Cabaret</th>
                <th className="py-4 px-6 w-1/4 text-primary font-bold">2. Puerto Aventura Gestor</th>
                <th className="py-4 px-6 w-1/4 text-primary font-bold">3. Tellex Group</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/60 text-sm">
              {dict.matrix.columns.map((row, idx) => (
                <tr
                  key={idx}
                  className="hover:bg-surface-raised/40 transition-colors duration-150"
                >
                  <td className="py-4 px-6 font-mono font-medium text-text bg-surface/60">
                    {row.dimension}
                  </td>
                  <td className="py-4 px-6 text-text-muted leading-relaxed">
                    {row.mulato}
                  </td>
                  <td className="py-4 px-6 text-text-muted leading-relaxed">
                    {row.puerto}
                  </td>
                  <td className="py-4 px-6 text-text-muted leading-relaxed">
                    {row.tellex}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
