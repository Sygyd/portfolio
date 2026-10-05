"use client";

import React, { useState } from "react";
import { Hammer, ShieldCheck, FileCheck2, CalendarX2, DollarSign, Database } from "lucide-react";

export function PuertoSimulator() {
  const [tenantId, setTenantId] = useState<string>("condo_sol_mar_01");
  const [workScope, setWorkScope] = useState<"paint" | "remodel" | "structural">("remodel");
  const [hasHeavyMachinery, setHasHeavyMachinery] = useState<boolean>(false);
  const [debrisTonnes, setDebrisTonnes] = useState<number>(1.5);
  const [isWeekend, setIsWeekend] = useState<boolean>(false);

  // Regulatory Title IV Classification logic
  const evaluateTitleIV = () => {
    let classification: "TIPO_A" | "TIPO_B" | "TIPO_C" = "TIPO_A";
    let deposit = 0;
    let civilLiabilityInsurance = false;
    let gateAccessApproved = !isWeekend;

    if (workScope === "structural" || hasHeavyMachinery || debrisTonnes > 3) {
      classification = "TIPO_C";
      deposit = 2500;
      civilLiabilityInsurance = true;
    } else if (workScope === "remodel" || debrisTonnes > 0.5) {
      classification = "TIPO_B";
      deposit = 800;
      civilLiabilityInsurance = false;
    } else {
      classification = "TIPO_A";
      deposit = 0;
      civilLiabilityInsurance = false;
    }

    return {
      classification,
      deposit,
      civilLiabilityInsurance,
      gateAccessApproved,
    };
  };

  const evalResult = evaluateTitleIV();

  return (
    <div className="p-6 rounded-2xl bg-surface border border-border space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-border pb-4 gap-2">
        <div>
          <span className="text-xs font-mono text-primary font-bold">
            SIMULADOR 2 • ZERO-TRUST RLS & NORMATIVA TÍTULO IV
          </span>
          <h3 className="text-lg font-bold text-text mt-0.5">
            Puerto Aventura: Clasificador de Obras & Aislamiento de Tenant
          </h3>
        </div>

        {/* Tenant Switcher with strict visual RLS indicator */}
        <div className="flex items-center gap-2">
          <Database className="w-4 h-4 text-primary" />
          <select
            value={tenantId}
            onChange={(e) => setTenantId(e.target.value)}
            className="py-1.5 px-3 rounded-lg bg-surface-raised border border-border text-xs font-mono text-primary focus:outline-none focus:border-primary"
          >
            <option value="condo_sol_mar_01">Tenant: condo_sol_mar_01</option>
            <option value="condo_palmeras_02">Tenant: condo_palmeras_02</option>
            <option value="condo_bahia_03">Tenant: condo_bahia_03</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Scope of Work */}
        <div className="space-y-1.5">
          <label className="text-xs font-mono text-text-muted">Alcance de Obra</label>
          <select
            value={workScope}
            onChange={(e) => setWorkScope(e.target.value as "paint" | "remodel" | "structural")}
            className="w-full py-2 px-3 rounded-xl bg-surface-raised border border-border text-xs font-mono text-text focus:outline-none focus:border-primary"
          >
            <option value="paint">Pintura / Menor (Tipo A)</option>
            <option value="remodel">Remodelación Cocina / Pisos (Tipo B)</option>
            <option value="structural">Ampliación / Muros de Carga (Tipo C)</option>
          </select>
        </div>

        {/* Debris Volume */}
        <div className="space-y-1.5">
          <div className="flex justify-between text-xs font-mono text-text-muted">
            <span>Estimación Escombros:</span>
            <span className="text-primary font-bold">{debrisTonnes} Ton</span>
          </div>
          <input
            type="range"
            min={0}
            max={5}
            step={0.5}
            value={debrisTonnes}
            onChange={(e) => setDebrisTonnes(parseFloat(e.target.value))}
            className="w-full accent-primary cursor-pointer"
          />
        </div>

        {/* Heavy machinery toggle */}
        <div className="space-y-1.5 flex flex-col justify-end">
          <label className="flex items-center gap-2 cursor-pointer p-2.5 rounded-xl bg-surface-raised border border-border text-xs font-mono text-text">
            <input
              type="checkbox"
              checked={hasHeavyMachinery}
              onChange={(e) => setHasHeavyMachinery(e.target.checked)}
              className="accent-primary"
            />
            <span>¿Maquinaria Pesada en Garita?</span>
          </label>
        </div>

        {/* Weekend / Holiday toggle */}
        <div className="space-y-1.5 flex flex-col justify-end">
          <label className="flex items-center gap-2 cursor-pointer p-2.5 rounded-xl bg-surface-raised border border-border text-xs font-mono text-text">
            <input
              type="checkbox"
              checked={isWeekend}
              onChange={(e) => setIsWeekend(e.target.checked)}
              className="accent-primary"
            />
            <span>¿Fin de Semana o Festivo?</span>
          </label>
        </div>
      </div>

      {/* Title IV Diagnostic Banner */}
      <div className="p-4 rounded-xl bg-surface-raised border border-border grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <span className="text-[11px] font-mono text-text-dim">Dictamen Título IV</span>
          <div className="text-2xl font-mono font-bold text-primary mt-1">
            OBRA {evalResult.classification.replace("_", " ")}
          </div>
          <div className="text-xs text-text-muted mt-1">
            {evalResult.classification === "TIPO_A" && "Intervención cosmética de bajo impacto."}
            {evalResult.classification === "TIPO_B" && "Modificación interior intermedia con ruido moderado."}
            {evalResult.classification === "TIPO_C" && "Intervención de alto impacto estructural y logístico."}
          </div>
        </div>

        <div>
          <span className="text-[11px] font-mono text-text-dim">Depósito de Garantía (Fianza)</span>
          <div className="text-2xl font-mono font-bold text-text mt-1">
            ${evalResult.deposit} USD
          </div>
          <div className="text-xs text-text-muted mt-1">
            {evalResult.civilLiabilityInsurance
              ? "+ Seguro de Responsabilidad Civil Mandatorio"
              : "Reembolsable contra Acta de Conformidad"}
          </div>
        </div>

        <div>
          <span className="text-[11px] font-mono text-text-dim">Estatus Garita / QR de Acceso</span>
          <div className="mt-1">
            {evalResult.gateAccessApproved ? (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-bold">
                <ShieldCheck className="w-3.5 h-3.5" />
                ACCESO AUTORIZADO
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-rose-500/10 border border-rose-500/30 text-rose-400 font-mono text-xs font-bold">
                <CalendarX2 className="w-3.5 h-3.5" />
                BLOQUEO NORMATIVO (FIN DE SEMANA)
              </span>
            )}
          </div>
          <div className="text-[11px] text-text-dim mt-1">
            Restricción estricta Título IV Art. 28
          </div>
        </div>
      </div>

      {/* RLS Laser Scanner Database Visualization */}
      <div className="relative p-4 rounded-xl bg-[#03060a] border border-border overflow-hidden">
        <div className="text-xs font-mono text-text-dim mb-2 flex items-center justify-between">
          <span>POSTGRESQL KERNEL QUERY LOG: STABLE function current_user_condominio_id()</span>
          <span className="text-primary font-mono text-[10px]">RLS ENFORCED = TRUE</span>
        </div>

        {/* Laser beam scan effect */}
        <div className="absolute inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent animate-laser-scan pointer-events-none" />

        <div className="space-y-1.5 font-mono text-xs">
          <div className="flex items-center justify-between p-2 rounded bg-primary/10 border border-primary/30 text-text">
            <span>[ROW 0x8F] Solicitud #1042 - {workScope.toUpperCase()}</span>
            <span className="text-primary font-bold">condominio_id: {tenantId} (VISIBLE)</span>
          </div>
          <div className="flex items-center justify-between p-2 rounded bg-surface/30 border border-border/30 text-text-dim opacity-30 select-none">
            <span>[ROW 0x90] Solicitud #1043 - STRUCTURAL WORK</span>
            <span className="text-rose-500/80">condominio_id: condo_other_hidden (BLOCKED BY RLS)</span>
          </div>
          <div className="flex items-center justify-between p-2 rounded bg-surface/30 border border-border/30 text-text-dim opacity-30 select-none">
            <span>[ROW 0x91] Solicitud #1044 - POOL MAINTENANCE</span>
            <span className="text-rose-500/80">condominio_id: condo_other_hidden (BLOCKED BY RLS)</span>
          </div>
        </div>
      </div>
    </div>
  );
}
