"use client";

import React, { useState } from "react";
import { ProjectData } from "@/types/i18n";
import { useLanguage } from "@/context/LanguageContext";
import { X, Check, Copy, Code2, Layers, Cpu, ShieldCheck, GitBranch } from "lucide-react";

interface ProjectModalProps {
  project: ProjectData | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const { dict } = useLanguage();
  const [activeTab, setActiveTab] = useState<"modules" | "tradeoffs" | "code" | "topology">("modules");
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  if (!project) return null;

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl max-h-[92vh] flex flex-col rounded-2xl bg-surface border border-border shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-start justify-between p-6 border-b border-border bg-surface-raised">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded text-xs font-mono font-medium bg-primary/10 text-primary border border-primary/20">
                {project.category}
              </span>
              <span className="text-xs font-mono text-text-dim">
                Architecture Spec v1.0
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-text">
              {project.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl border border-border bg-surface text-text-muted hover:text-text hover:border-primary transition-colors"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Selector */}
        <div className="flex items-center gap-2 px-6 py-2.5 border-b border-border bg-surface text-xs font-mono overflow-x-auto">
          <button
            onClick={() => setActiveTab("modules")}
            className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all ${
              activeTab === "modules"
                ? "bg-primary text-bg font-bold"
                : "text-text-muted hover:text-text"
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>Módulos Críticos</span>
          </button>
          <button
            onClick={() => setActiveTab("topology")}
            className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all ${
              activeTab === "topology"
                ? "bg-primary text-bg font-bold"
                : "text-text-muted hover:text-text"
            }`}
          >
            <GitBranch className="w-4 h-4" />
            <span>Topología & Flujo</span>
          </button>
          <button
            onClick={() => setActiveTab("tradeoffs")}
            className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all ${
              activeTab === "tradeoffs"
                ? "bg-primary text-bg font-bold"
                : "text-text-muted hover:text-text"
            }`}
          >
            <Cpu className="w-4 h-4" />
            <span>Under The Hood / Trade-offs</span>
          </button>
          <button
            onClick={() => setActiveTab("code")}
            className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all ${
              activeTab === "code"
                ? "bg-primary text-bg font-bold"
                : "text-text-muted hover:text-text"
            }`}
          >
            <Code2 className="w-4 h-4" />
            <span>Source Code Snippets</span>
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* TAB: MODULES */}
          {activeTab === "modules" && (
            <div className="space-y-6">
              <p className="text-sm sm:text-base text-text-muted leading-relaxed">
                {project.fullDesc}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {project.stats.map((stat, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-surface-raised border border-border"
                  >
                    <div className="text-xs font-mono text-text-dim">
                      {stat.label}
                    </div>
                    <div className="text-2xl font-mono font-bold text-primary mt-1">
                      {stat.value}
                    </div>
                    <div className="text-xs text-text-muted mt-1">
                      {stat.description}
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-4 pt-2">
                <h3 className="text-sm font-mono uppercase tracking-wider text-text-dim">
                  Módulos de Arquitectura Detallados
                </h3>
                {project.modules.map((m, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl border border-border bg-surface-raised/60 space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="text-base font-semibold text-text">
                        {m.title}
                      </h4>
                      <span className="text-xs font-mono px-2 py-0.5 rounded bg-primary/10 text-primary border border-primary/20">
                        {m.badge}
                      </span>
                    </div>
                    <p className="text-sm text-text-muted leading-relaxed">
                      {m.description}
                    </p>
                    <ul className="space-y-1.5 pt-1">
                      {m.technicalHighlights.map((th, hIdx) => (
                        <li
                          key={hIdx}
                          className="flex items-start gap-2 text-xs sm:text-sm text-text"
                        >
                          <ShieldCheck className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span>{th}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB: TOPOLOGY / FLOW */}
          {activeTab === "topology" && (
            <div className="space-y-6">
              <div className="p-4 rounded-xl bg-surface-raised border border-border">
                <span className="text-xs font-mono text-primary font-bold">
                  RESUMEN DE TOPOLOGÍA DISTRIBUIDA
                </span>
                <p className="text-sm text-text-muted mt-1 leading-relaxed">
                  {project.architectureOverview}
                </p>
              </div>

              {/* Animated SVG Data Packets Topology Diagram */}
              <div className="p-6 rounded-2xl bg-[#03060a] border border-border text-center overflow-x-auto">
                <svg
                  viewBox="0 0 800 240"
                  className="w-full min-w-[650px] h-auto mx-auto"
                >
                  <defs>
                    <linearGradient id="flowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0.8" />
                    </linearGradient>
                  </defs>

                  {/* Lines */}
                  <line
                    x1="120"
                    y1="120"
                    x2="280"
                    y2="120"
                    stroke="var(--color-border)"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                  />
                  <line
                    x1="380"
                    y1="120"
                    x2="520"
                    y2="120"
                    stroke="var(--color-border)"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                  />
                  <line
                    x1="620"
                    y1="120"
                    x2="720"
                    y2="120"
                    stroke="var(--color-border)"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                  />

                  {/* Flow Animation Packets */}
                  <circle r="4" fill="var(--color-primary)">
                    <animate
                      attributeName="cx"
                      from="120"
                      to="280"
                      dur="2s"
                      repeatCount="indefinite"
                    />
                    <animate attributeName="cy" values="120;120" dur="2s" repeatCount="indefinite" />
                  </circle>
                  <circle r="4" fill="var(--color-accent)">
                    <animate
                      attributeName="cx"
                      from="380"
                      to="520"
                      dur="2s"
                      repeatCount="indefinite"
                    />
                    <animate attributeName="cy" values="120;120" dur="2s" repeatCount="indefinite" />
                  </circle>
                  <circle r="4" fill="var(--color-primary)">
                    <animate
                      attributeName="cx"
                      from="620"
                      to="720"
                      dur="2s"
                      repeatCount="indefinite"
                    />
                    <animate attributeName="cy" values="120;120" dur="2s" repeatCount="indefinite" />
                  </circle>

                  {/* Node 1: Ingest */}
                  <rect
                    x="20"
                    y="80"
                    width="100"
                    height="80"
                    rx="12"
                    fill="var(--color-surface)"
                    stroke="var(--color-primary)"
                    strokeWidth="1.5"
                  />
                  <text x="70" y="115" textAnchor="middle" fill="#fff" fontSize="12" fontFamily="monospace" fontWeight="bold">
                    INGEST
                  </text>
                  <text x="70" y="135" textAnchor="middle" fill="var(--color-text-dim)" fontSize="10" fontFamily="sans-serif">
                    Edge / Webhooks
                  </text>

                  {/* Node 2: Logic / Engine */}
                  <rect
                    x="280"
                    y="70"
                    width="110"
                    height="100"
                    rx="12"
                    fill="var(--color-surface-raised)"
                    stroke="var(--color-primary)"
                    strokeWidth="2"
                  />
                  <text x="335" y="112" textAnchor="middle" fill="#fff" fontSize="12" fontFamily="monospace" fontWeight="bold">
                    CORE LOGIC
                  </text>
                  <text x="335" y="130" textAnchor="middle" fill="var(--color-primary)" fontSize="10" fontFamily="monospace">
                    RLS / Rules / AI
                  </text>
                  <text x="335" y="148" textAnchor="middle" fill="var(--color-text-dim)" fontSize="9" fontFamily="sans-serif">
                    Circuit Breakers
                  </text>

                  {/* Node 3: Database / ACID */}
                  <rect
                    x="520"
                    y="80"
                    width="100"
                    height="80"
                    rx="12"
                    fill="var(--color-surface)"
                    stroke="var(--color-accent)"
                    strokeWidth="1.5"
                  />
                  <text x="570" y="115" textAnchor="middle" fill="#fff" fontSize="12" fontFamily="monospace" fontWeight="bold">
                    STORAGE
                  </text>
                  <text x="570" y="135" textAnchor="middle" fill="var(--color-text-dim)" fontSize="10" fontFamily="sans-serif">
                    ACID / Leases
                  </text>

                  {/* Node 4: Dispatch / Output */}
                  <rect
                    x="710"
                    y="80"
                    width="80"
                    height="80"
                    rx="12"
                    fill="var(--color-surface)"
                    stroke="var(--color-border)"
                    strokeWidth="1.5"
                  />
                  <text x="750" y="115" textAnchor="middle" fill="#fff" fontSize="12" fontFamily="monospace" fontWeight="bold">
                    CLIENTS
                  </text>
                  <text x="750" y="135" textAnchor="middle" fill="var(--color-text-dim)" fontSize="10" fontFamily="sans-serif">
                    UI 120 FPS
                  </text>
                </svg>
                <div className="text-xs font-mono text-text-dim mt-2">
                  * Paquetes de datos sincronizados mediante pipelines asíncronos y backpressure controlado.
                </div>
              </div>

              {/* Stack Badges */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-text-dim mb-3">
                  Tecnologías Nucleares Utilizadas
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((item, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg text-xs font-mono bg-surface border border-border text-text hover:border-primary/50 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB: TRADE-OFFS */}
          {activeTab === "tradeoffs" && (
            <div className="space-y-4">
              <p className="text-sm text-text-muted">
                Toda arquitectura enterprise consiste en elegir el compromiso de ingeniería adecuado frente a costo, latencia y complejidad operativa:
              </p>
              {project.tradeOffs.map((trade, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl border border-border bg-surface-raised space-y-3"
                >
                  <div className="flex items-center gap-2 text-primary font-mono text-sm font-semibold">
                    <span>Decisión:</span>
                    <span className="text-text">{trade.decision}</span>
                  </div>
                  <div className="text-xs sm:text-sm text-text-muted">
                    <strong className="text-text">Razonamiento Arquitectónico: </strong>
                    {trade.reasoning}
                  </div>
                  <div className="text-xs sm:text-sm text-text-dim">
                    <strong className="text-text-muted">Alternativa Descartada: </strong>
                    {trade.alternativeDiscarded}
                  </div>
                  <div className="inline-block px-3 py-1 rounded-md bg-primary/10 border border-primary/20 text-xs font-mono text-primary font-medium">
                    ROI Impact: {trade.roiImpact}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB: CODE SNIPPETS */}
          {activeTab === "code" && (
            <div className="space-y-6">
              {project.codeSnippets.map((snippet, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-border bg-[#090d14] overflow-hidden"
                >
                  <div className="flex items-center justify-between px-4 py-2.5 border-b border-border/80 bg-surface/50 text-xs font-mono">
                    <div className="flex items-center gap-2 text-text-muted">
                      <Code2 className="w-4 h-4 text-primary" />
                      <span>{snippet.filename}</span>
                      <span className="text-text-dim">({snippet.language})</span>
                    </div>
                    <button
                      onClick={() => copyToClipboard(snippet.code, idx)}
                      className="flex items-center gap-1 px-2.5 py-1 rounded border border-border bg-surface text-text-muted hover:text-text hover:border-primary transition-all"
                    >
                      {copiedIndex === idx ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-primary" />
                          <span className="text-primary">{dict.common.copied}</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>{dict.common.copyCode}</span>
                        </>
                      )}
                    </button>
                  </div>
                  <pre className="p-4 text-xs font-mono text-[#d1d5db] overflow-x-auto leading-relaxed">
                    <code>{snippet.code}</code>
                  </pre>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
