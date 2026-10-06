"use client";

import React, { useState } from "react";
import { Scale, AlertCircle, ShieldAlert, Award, ArrowRight, CheckCircle2 } from "lucide-react";

export function TellexSimulator() {
  const [initialScore, setInitialScore] = useState<number>(55);
  const [hasAutoFail, setHasAutoFail] = useState<boolean>(true);
  const [userRole, setUserRole] = useState<"ORIGINAL_AUDITOR" | "QA_LEAD_DISPUTE">("QA_LEAD_DISPUTE");
  const [appealNotes, setAppealNotes] = useState<string>("El cliente colgó antes del saludo reglamentario.");
  const [isResolved, setIsResolved] = useState<boolean>(false);

  // Appeal recalculation algorithm
  const handleArbitration = (action: "ACCEPT" | "REJECT") => {
    if (userRole === "ORIGINAL_AUDITOR") {
      alert("HTTP 403 Forbidden: Violación de Doble Ciego. El auditor original está vetado.");
      return;
    }
    setIsResolved(true);
  };

  const recalculatedScore = isResolved ? (hasAutoFail ? 60 : 88) : initialScore;

  return (
    <div className="p-6 rounded-2xl bg-surface border border-border space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-border pb-4 gap-2">
        <div>
          <span className="text-xs font-mono text-primary font-bold">
            CASO EN VIVO 3 • GOBERNANZA QA & ALTO RENDIMIENTO
          </span>
          <h3 className="text-lg font-bold text-text mt-0.5">
            Tellex Group: Arbitraje Doble Ciego & Optimización ETL
          </h3>
          <p className="text-xs text-text-muted mt-1 max-w-2xl">
            Comprueba cómo el sistema bloquea con HTTP 403 al auditor original para garantizar imparcialidad y cómo el hash SHA-256 en memoria redujo la sincronización a 18.2 segundos.
          </p>
        </div>

        {/* Auditor Role Selector to test HTTP 403 security boundary */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono text-text-dim">Simular Sesión:</span>
          <select
            value={userRole}
            onChange={(e) => {
              setUserRole(e.target.value as "ORIGINAL_AUDITOR" | "QA_LEAD_DISPUTE");
              setIsResolved(false);
            }}
            className="py-1.5 px-3 rounded-lg bg-surface-raised border border-border text-xs font-mono text-primary focus:outline-none focus:border-primary"
          >
            <option value="QA_LEAD_DISPUTE">Analista Imparcial (QA Lead 02)</option>
            <option value="ORIGINAL_AUDITOR">Auditor Original (Gatilla HTTP 403)</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Score adjustment */}
        <div className="space-y-1.5">
          <div className="flex justify-between text-xs font-mono text-text-muted">
            <span>Puntaje Inicial Auditado:</span>
            <span className="text-primary font-bold">{initialScore} / 100</span>
          </div>
          <input
            type="range"
            min={30}
            max={90}
            value={initialScore}
            disabled={isResolved}
            onChange={(e) => setInitialScore(parseInt(e.target.value))}
            className="w-full accent-primary cursor-pointer disabled:opacity-50"
          />
        </div>

        {/* Auto fail checkbox */}
        <div className="space-y-1.5 flex flex-col justify-end">
          <label className="flex items-center gap-2 cursor-pointer p-2.5 rounded-xl bg-surface-raised border border-border text-xs font-mono text-text">
            <input
              type="checkbox"
              checked={hasAutoFail}
              disabled={isResolved}
              onChange={(e) => setHasAutoFail(e.target.checked)}
              className="accent-primary"
            />
            <span>¿Cláusula Auto-Fail Activa (Tope 60%)?</span>
          </label>
        </div>

        {/* Argument note */}
        <div className="space-y-1.5">
          <label className="text-xs font-mono text-text-muted">Alegato del Agente</label>
          <input
            type="text"
            value={appealNotes}
            disabled={isResolved}
            onChange={(e) => setAppealNotes(e.target.value)}
            className="w-full py-2 px-3 rounded-xl bg-surface-raised border border-border text-xs font-mono text-text focus:outline-none focus:border-primary"
          />
        </div>
      </div>

      {/* Arbitration Controls & Results */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
        <div className="p-4 rounded-xl bg-surface-raised border border-border">
          <span className="text-[11px] font-mono text-text-dim">Puntaje Original</span>
          <div className="text-2xl font-mono font-bold text-text mt-1">
            {initialScore} / 100
          </div>
          <div className="text-[10px] text-text-dim mt-1">
            {hasAutoFail ? "Penalizado con cláusula crítica de Auto-Fail" : "Rúbrica ordinaria"}
          </div>
        </div>

        <div className="p-4 rounded-xl bg-surface-raised border border-border">
          <span className="text-[11px] font-mono text-text-dim">Dictamen Doble Ciego</span>
          <div className="text-2xl font-mono font-bold text-primary mt-1">
            {isResolved ? `${recalculatedScore} / 100` : "Pendiente Arbitraje"}
          </div>
          <div className="text-[10px] text-text-dim mt-1">
            {isResolved ? "Dictamen final Res Judicata emitido" : "Esperando fallo de analista"}
          </div>
        </div>

        <div className="p-4 rounded-xl bg-surface-raised border border-border flex flex-col justify-between">
          <span className="text-[11px] font-mono text-text-dim">Acción Arbitral</span>
          {isResolved ? (
            <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-400 font-bold mt-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>CASO CERRADO (RES JUDICATA)</span>
            </div>
          ) : (
            <div className="flex gap-2 mt-2">
              <button
                onClick={() => handleArbitration("ACCEPT")}
                className="flex-1 py-1.5 px-3 rounded-lg bg-primary text-bg font-mono text-xs font-bold hover:bg-primary-hover transition-colors"
              >
                Aceptar Apelación
              </button>
              <button
                onClick={() => handleArbitration("REJECT")}
                className="py-1.5 px-3 rounded-lg bg-surface border border-border text-xs font-mono text-text-muted hover:text-text"
              >
                Rechazar
              </button>
            </div>
          )}
          <div className="text-[10px] text-text-dim mt-1">
            {userRole === "ORIGINAL_AUDITOR" && (
              <span className="text-rose-400">⚠️ Modo original gatillará HTTP 403</span>
            )}
          </div>
        </div>
      </div>

      {/* Latency odometer visualization */}
      <div className="p-4 rounded-xl bg-[#03060a] border border-border flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-surface-raised border border-border text-text-dim">
            <span>ETL ANTIGUO: 320.0s</span>
          </div>
          <ArrowRight className="w-4 h-4 text-primary" />
          <div className="p-2 rounded-lg bg-primary/10 border border-primary text-primary font-bold shadow-[0_0_15px_rgba(var(--theme-glow),0.4)]">
            <span>ETL SHA-256 MEMORIA: 18.2s</span>
          </div>
        </div>
        <div className="text-text-dim text-[11px]">
          * Reducción del 94.3% en latencia y 0 bloqueos por conexión serverless.
        </div>
      </div>
    </div>
  );
}
