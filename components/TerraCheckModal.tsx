"use client";

import React, { createContext, useContext, useRef, useState, useEffect } from "react";
import { X, CheckCircle, Camera, ShieldCheck, Clock } from "lucide-react";
import LeadForm from "./LeadForm";
import type { Locale } from "@/lib/i18n/dictionaries";

interface TerraCheckContextType {
  openTerraCheck: (options?: { notes?: string; segment?: string }) => void;
  closeTerraCheck: () => void;
}

const TerraCheckContext = createContext<TerraCheckContextType>({
  openTerraCheck: () => {},
  closeTerraCheck: () => {},
});

export const useTerraCheck = () => useContext(TerraCheckContext);

export function TerraCheckProvider({
  children,
  lang,
  dict,
}: {
  children: React.ReactNode;
  lang: Locale;
  dict: any;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [prefill, setPrefill] = useState<{ notes?: string; segment?: string }>({});

  const openTerraCheck = (options?: { notes?: string; segment?: string }) => {
    if (options) {
      setPrefill(options);
    }
    const dialog = dialogRef.current;
    if (dialog && !dialog.open) {
      dialog.showModal();
    }
  };

  const closeTerraCheck = () => {
    const dialog = dialogRef.current;
    if (dialog && dialog.open) {
      dialog.close();
    }
  };

  // Modern Web Guidance: Fallback for browsers without native <dialog closedby="any"> support
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const handleBackdropClick = (event: MouseEvent) => {
      if (event.target !== dialog) return;
      const rect = dialog.getBoundingClientRect();
      const isDialogContent =
        rect.top <= event.clientY &&
        event.clientY <= rect.top + rect.height &&
        rect.left <= event.clientX &&
        event.clientX <= rect.left + rect.width;

      if (!isDialogContent) {
        dialog.close();
      }
    };

    if (!("closedBy" in HTMLDialogElement.prototype)) {
      dialog.addEventListener("click", handleBackdropClick);
      return () => dialog.removeEventListener("click", handleBackdropClick);
    }
  }, []);

  const inspectionPoints =
    lang === "es"
      ? [
          "Química de agua, bombas y filtros (NOM-245)",
          "Estado fitosanitario de selva, palmas y riego",
          "Humedad, impermeabilización de techos y bajadas pluviales con Drone",
          "Estado de maderas tropicales (decks, pérgolas) y barrera contra termitas",
          "Línea base fotográfica y recorrido 360° de áreas críticas",
        ]
      : [
          "Pool water chemistry, pumps & filtration (NOM-245)",
          "Jungle health, palm canopy & automated irrigation audit",
          "Roof waterproofing, humidity & storm drains via Aerial Drone",
          "Tropical hardwood decks, pergolas & termite barrier inspection",
          "Baseline 360° virtual walkthrough & photo documentation",
        ];

  return (
    <TerraCheckContext.Provider value={{ openTerraCheck, closeTerraCheck }}>
      {children}

      <dialog
        ref={dialogRef}
        closedby="any"
        aria-labelledby="terra-check-dialog-title"
        className="w-full max-w-4xl rounded-3xl bg-[#F6F3EC] text-brand-green p-0 shadow-2xl border border-brand-green/15 backdrop:bg-brand-green-dark/70 backdrop:backdrop-blur-sm open:animate-in open:fade-in open:zoom-in-95 duration-200"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 overflow-hidden rounded-3xl">
          {/* Left Side: Value & 21-Point Checklist */}
          <div className="lg:col-span-5 bg-brand-green text-brand-sand p-7 sm:p-8 flex flex-col justify-between relative overflow-hidden">
            <div className="space-y-5 relative z-10">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-terracotta px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
                {dict.terraCheck.badge}
              </span>
              <h2
                id="terra-check-dialog-title"
                className="font-serif text-2xl sm:text-3xl font-bold text-white leading-tight"
              >
                {dict.terraCheck.title}
              </h2>
              <p className="text-xs sm:text-sm text-brand-sand/85 leading-relaxed">
                {dict.terraCheck.subtitle}
              </p>

              <div className="pt-2 space-y-2.5 border-t border-white/15">
                <p className="text-xs font-bold uppercase tracking-wider text-brand-terracotta-light">
                  {lang === "es"
                    ? "¿Qué revisamos en tu Terra Check?"
                    : "What's included in your Terra Check?"}
                </p>
                {inspectionPoints.map((pt, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-brand-sand/90">
                    <CheckCircle className="w-4 h-4 text-brand-terracotta shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/15 grid grid-cols-2 gap-3 text-xs relative z-10">
              <div className="flex items-center gap-2">
                <Camera className="w-4 h-4 text-brand-terracotta shrink-0" />
                <span>360° + Drone AFAC</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-brand-terracotta shrink-0" />
                <span>{lang === "es" ? "Reporte en 48 h" : "Report in 48 hrs"}</span>
              </div>
            </div>
          </div>

          {/* Right Side: Lead Form */}
          <div className="lg:col-span-7 p-6 sm:p-8 bg-[#F6F3EC] relative">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-brand-terracotta" />
                <span className="text-xs font-bold uppercase tracking-wider text-brand-green/70">
                  {lang === "es"
                    ? "Atención Directa · Tulum · Playa · Puerto Morelos"
                    : "Direct Dispatch · Tulum · Playa · Puerto Morelos"}
                </span>
              </div>
              <button
                type="button"
                onClick={closeTerraCheck}
                aria-label={lang === "es" ? "Cerrar ventana" : "Close modal"}
                className="rounded-full p-2 text-brand-green/60 hover:bg-brand-sand hover:text-brand-green transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <LeadForm
              lang={lang}
              dict={dict}
              defaultNotes={prefill.notes}
              defaultSegment={prefill.segment}
              compact
            />
          </div>
        </div>
      </dialog>
    </TerraCheckContext.Provider>
  );
}
