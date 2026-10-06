"use client";

import React, { useState, useEffect } from "react";
import { Users, Wine, Calculator, AlertTriangle, Clock, RefreshCw } from "lucide-react";

export function MulatoSimulator() {
  const [floor, setFloor] = useState<1 | 2>(1);
  const [tableType, setTableType] = useState<"standard" | "vip" | "booth">("vip");
  const [guests, setGuests] = useState<number>(4);
  const [timeRemaining, setTimeRemaining] = useState<number>(900); // 15 mins = 900s
  const [isLeaseActive, setIsLeaseActive] = useState<boolean>(true);

  // Timer countdown simulation
  useEffect(() => {
    if (!isLeaseActive || timeRemaining <= 0) return;
    const interval = setInterval(() => {
      setTimeRemaining((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, [isLeaseActive, timeRemaining]);

  const resetLease = () => {
    setTimeRemaining(900);
    setIsLeaseActive(true);
  };

  // Pricing formula calibration
  // Standard: $80,000 cover per person
  // VIP: $200,000 minimum tab for up to 4, +$50k per extra
  // Booth (Palco): $400,000 minimum tab for up to 6, +$60k per extra (max 10)
  const calculateRequirements = () => {
    if (tableType === "standard") {
      const cover = guests * 80000;
      return { cover, minConsumption: 0, maxAllowed: 4 };
    }
    if (tableType === "vip") {
      const extraGuests = Math.max(0, guests - 4);
      const minConsumption = 200000 + extraGuests * 50000;
      return { cover: 0, minConsumption, maxAllowed: 6 };
    }
    // Booth
    const extraGuests = Math.max(0, guests - 6);
    const minConsumption = 400000 + extraGuests * 60000;
    return { cover: 0, minConsumption, maxAllowed: 10 };
  };

  const { cover, minConsumption, maxAllowed } = calculateRequirements();

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      maximumFractionDigits: 0,
    }).format(val);
  };

  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;

  return (
    <div className="p-6 rounded-2xl bg-surface border border-border space-y-6">
      <div className="flex items-center justify-between border-b border-border pb-4">
        <div>
          <span className="text-xs font-mono text-primary font-bold">
            CASO EN VIVO 1 • RESILIENCIA Y CONCURRENCIA
          </span>
          <h3 className="text-lg font-bold text-text mt-0.5">
            El Mulato Cabaret: Auto-liberación de Reservas (15 min) & Consumo Mínimo
          </h3>
          <p className="text-xs text-text-muted mt-1 max-w-2xl">
            Simula cómo el sistema previene reservas fantasma liberando mesas no pagadas tras 15 minutos y cómo Mr. Mulato calcula el cover y consumo mínimo automáticamente.
          </p>
        </div>

        {/* 15 min lock simulated countdown */}
        <div className="flex items-center gap-2">
          <div className="text-right">
            <div className="text-[10px] font-mono text-text-dim uppercase">
              Lease Lock TTL
            </div>
            <div className="text-sm font-mono font-bold text-primary flex items-center gap-1 justify-end">
              <Clock className="w-3.5 h-3.5 animate-pulse" />
              <span>
                {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
              </span>
            </div>
          </div>
          <button
            onClick={resetLease}
            title="Reiniciar Lock de 15 minutos"
            className="p-1.5 rounded-lg border border-border bg-surface-raised hover:text-primary transition-colors"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Floor Selection */}
        <div className="space-y-2">
          <label className="text-xs font-mono text-text-muted">Piso Arquitectónico</label>
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => setFloor(1)}
              className={`py-2 px-3 rounded-xl text-xs font-mono border transition-all ${
                floor === 1
                  ? "bg-primary/10 border-primary text-primary font-bold"
                  : "bg-surface-raised border-border text-text-dim"
              }`}
            >
              Piso 1 (66 Mesas)
            </button>
            <button
              onClick={() => setFloor(2)}
              className={`py-2 px-3 rounded-xl text-xs font-mono border transition-all ${
                floor === 2
                  ? "bg-primary/10 border-primary text-primary font-bold"
                  : "bg-surface-raised border-border text-text-dim"
              }`}
            >
              Piso 2 (69 Mesas)
            </button>
          </div>
        </div>

        {/* Table Category */}
        <div className="space-y-2">
          <label className="text-xs font-mono text-text-muted">Tipo de Localidad</label>
          <select
            value={tableType}
            onChange={(e) => {
              const val = e.target.value as "standard" | "vip" | "booth";
              setTableType(val);
              if (val === "standard" && guests > 4) setGuests(4);
              if (val === "vip" && guests > 6) setGuests(6);
            }}
            className="w-full py-2 px-3 rounded-xl bg-surface-raised border border-border text-xs font-mono text-text focus:outline-none focus:border-primary"
          >
            <option value="standard">Mesa Estándar (Hasta 4 Pax)</option>
            <option value="vip">Mesa VIP Pista (Hasta 6 Pax)</option>
            <option value="booth">Palco Presidencial (Hasta 10 Pax)</option>
          </select>
        </div>

        {/* Guest Count Slider */}
        <div className="space-y-2">
          <div className="flex justify-between items-center text-xs font-mono text-text-muted">
            <span>Aforo Solicitado:</span>
            <span className="text-primary font-bold">{guests} Personas</span>
          </div>
          <input
            type="range"
            min={1}
            max={maxAllowed}
            value={guests}
            onChange={(e) => setGuests(parseInt(e.target.value))}
            className="w-full accent-primary cursor-pointer"
          />
          <div className="flex justify-between text-[10px] font-mono text-text-dim">
            <span>1 pax</span>
            <span>Máx {maxAllowed} pax</span>
          </div>
        </div>
      </div>

      {/* Calculated Financial & Capacity Outputs */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
        <div className="p-4 rounded-xl bg-surface-raised border border-border">
          <span className="text-[11px] font-mono text-text-dim">Cover de Entrada</span>
          <div className="text-xl font-mono font-bold text-text mt-1">
            {cover > 0 ? formatCurrency(cover) : "$0 COP (Incluido)"}
          </div>
          <div className="text-[10px] text-text-dim mt-1">
            {tableType === "standard" ? "$80k por persona" : "Exonerado en VIP/Palco"}
          </div>
        </div>

        <div className="p-4 rounded-xl bg-surface-raised border border-border">
          <span className="text-[11px] font-mono text-text-dim">Consumo Mínimo Exigible</span>
          <div className="text-xl font-mono font-bold text-primary mt-1">
            {formatCurrency(minConsumption)}
          </div>
          <div className="text-[10px] text-text-dim mt-1">
            Corte automático en TPV a las 5:00 PM
          </div>
        </div>

        <div className="p-4 rounded-xl bg-surface-raised border border-border">
          <span className="text-[11px] font-mono text-text-dim">Estado del Lock Firestore</span>
          <div className="text-xl font-mono font-bold text-emerald-400 mt-1 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>LEASE LOCKED</span>
          </div>
          <div className="text-[10px] text-text-dim mt-1">
            Auto-release en {minutes}m {seconds}s para evitar no-shows
          </div>
        </div>
      </div>

      {/* Visual Table Radar Matrix Representation */}
      <div className="relative p-4 rounded-xl bg-[#040810] border border-border overflow-hidden">
        <div className="text-xs font-mono text-text-dim mb-3 flex items-center justify-between">
          <span>RADAR ARQUITECTÓNICO: {floor === 1 ? "PISO 1 (PISTA)" : "PISO 2 (BALCÓN)"}</span>
          <span className="text-[10px] text-primary">MODO EN VIVO ATÓMICO</span>
        </div>
        <div className="grid grid-cols-6 sm:grid-cols-12 gap-2">
          {Array.from({ length: 24 }).map((_, i) => {
            const isSelected = i === 7;
            const isBooked = [2, 5, 11, 18].includes(i);
            return (
              <div
                key={i}
                className={`h-9 rounded-lg border flex flex-col items-center justify-center text-[10px] font-mono transition-all ${
                  isSelected
                    ? "bg-primary/20 border-primary text-primary font-bold shadow-[0_0_12px_rgba(var(--theme-glow),0.5)]"
                    : isBooked
                    ? "bg-red-950/20 border-red-800/40 text-red-400/80"
                    : "bg-surface-raised/40 border-border/40 text-text-dim"
                }`}
              >
                <span>M{i + 1}</span>
                <span className="text-[8px]">
                  {isSelected ? "LOCK" : isBooked ? "RES" : "LIB"}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
