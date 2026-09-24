"use client";

import React, { createContext, useContext, useRef, useState, useEffect } from "react";
import { X, CheckCircle, Camera, ShieldCheck, Clock, MapPin } from "lucide-react";
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
    setPrefill({
      notes: options?.notes || "",
      segment: options?.segment || "",
    });
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

  const inspectionPointsMap: Record<Locale, string[]> = {
    es: [
      "Química de agua, bombas y filtros (NOM-245)",
      "Estado fitosanitario de selva, palmas y riego",
      "Humedad, impermeabilización de techos y bajadas con Drone",
      "Maderas tropicales (decks, pérgolas) y barrera antitermitas",
      "Línea base fotográfica y recorrido 360° de áreas críticas",
    ],
    en: [
      "Pool water chemistry, pumps & filtration (NOM-245)",
      "Jungle health, palm canopy & automated irrigation audit",
      "Roof waterproofing, humidity & storm drains via Aerial Drone",
      "Tropical hardwood decks, pergolas & termite barrier inspection",
      "Baseline 360° virtual walkthrough & photo documentation",
    ],
    fr: [
      "Chimie de l'eau, pompes et filtration (NOM-245)",
      "Santé phytosanitaire de la jungle, palmiers et arrosage",
      "Étanchéité des toitures et humidité par Drone aérien",
      "Bois tropicaux (terrasses, pergolas) et barrière anti-termites",
      "Visite virtuelle 360° de référence et rapport photographique",
    ],
    it: [
      "Chimica dell'acqua, pompe e filtrazione (NOM-245)",
      "Stato fitosanitario della giungla, palme e irrigazione",
      "Impermeabilizzazione tetti e umidità tramite Drone aereo",
      "Legni tropicali (deck, pergole) e barriera antitermiti",
      "Tour virtuale 360° di riferimento e report fotografico",
    ],
  };

  const checklistHeaderMap: Record<Locale, string> = {
    es: "¿Qué revisamos en tu Terra Check?",
    en: "What's included in your Terra Check?",
    fr: "Que vérifions-nous lors du Terra Check ?",
    it: "Cosa controlliamo nel tuo Terra Check?",
  };

  const directDispatchMap: Record<Locale, string> = {
    es: "Atención Directa · Riviera Maya",
    en: "Direct Dispatch · Riviera Maya",
    fr: "Assistance Directe · Riviera Maya",
    it: "Assistenza Diretta · Riviera Maya",
  };

  const reportTimeMap: Record<Locale, string> = {
    es: "Reporte 48 h",
    en: "48h Report",
    fr: "Rapport 48 h",
    it: "Report 48 h",
  };

  const inspectionPoints = inspectionPointsMap[lang] || inspectionPointsMap.es;

  return (
    <TerraCheckContext.Provider value={{ openTerraCheck, closeTerraCheck }}>
      {children}

      <dialog
        ref={dialogRef}
        closedby="any"
        aria-labelledby="terra-check-dialog-title"
        className="m-auto w-[94vw] max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl sm:rounded-3xl bg-[#F6F3EC] text-brand-green p-0 shadow-[0_28px_80px_-16px_rgba(1,38,31,0.65)] border border-white/25 backdrop:bg-[#011813]/75 backdrop:backdrop-blur-md open:animate-in open:fade-in open:zoom-in-95 duration-200"
      >
        <div className="relative grid grid-cols-1 lg:grid-cols-12 overflow-hidden rounded-2xl sm:rounded-3xl">
          {/* Mobile Floating Close Button (always visible at top right on phones) */}
          <button
            type="button"
            onClick={closeTerraCheck}
            aria-label={lang === "es" ? "Cerrar ventana" : "Close modal"}
            className="lg:hidden absolute top-3.5 right-3.5 z-30 w-9 h-9 rounded-full bg-black/45 text-white backdrop-blur-md border border-white/20 flex items-center justify-center shadow-md active:scale-95 transition"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Left Side: Value & Diagnostic Checklist with Photorealistic Background */}
          <div className="lg:col-span-5 bg-brand-green text-brand-sand p-5 sm:p-8 flex flex-col justify-between relative overflow-hidden">
            <img
              src="/images/services/terra-agua.jpg"
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover object-center opacity-25 pointer-events-none"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0d2620]/90 via-[#1A3C34]/92 to-[#091b16]/98 pointer-events-none" />

            <div className="space-y-3.5 relative z-10 pr-8 lg:pr-0">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-terracotta px-3 py-1 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-white shadow-sm">
                {dict.terraCheck.badge}
              </span>
              <h2
                id="terra-check-dialog-title"
                className="font-serif text-xl sm:text-[26px] font-bold text-white leading-tight tracking-tight"
              >
                {dict.terraCheck.title}
              </h2>
              <p className="text-xs sm:text-[13px] text-brand-sand/90 leading-relaxed">
                {dict.terraCheck.subtitle}
              </p>

              <div className="pt-2.5 space-y-2 border-t border-white/15">
                <p className="text-[11px] font-bold uppercase tracking-widest text-brand-terracotta-light pb-0.5">
                  {checklistHeaderMap[lang] || checklistHeaderMap.es}
                </p>
                <div className="space-y-1.5">
                  {inspectionPoints.map((pt, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 text-xs text-white/95 bg-white/[0.06] backdrop-blur-sm border border-white/10 rounded-xl px-3 py-2"
                    >
                      <CheckCircle className="w-4 h-4 text-brand-terracotta shrink-0 mt-0.5" />
                      <span className="leading-snug">{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3.5 border-t border-white/15 space-y-2 relative z-10">
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center gap-1.5 bg-white/[0.07] rounded-xl px-2.5 py-2 border border-white/10">
                  <Camera className="w-4 h-4 text-brand-terracotta shrink-0" />
                  <span className="font-medium text-white truncate">360° + Drone</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white/[0.07] rounded-xl px-2.5 py-2 border border-white/10">
                  <Clock className="w-4 h-4 text-brand-terracotta shrink-0" />
                  <span className="font-medium text-white truncate">
                    {reportTimeMap[lang] || reportTimeMap.es}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-[11px] text-brand-sand/75 px-1">
                <MapPin className="w-3.5 h-3.5 text-brand-terracotta shrink-0" />
                <span className="truncate">
                  Av. Colosio entre Av. 25 y 30, Col. Centro, Playa del Carmen
                </span>
              </div>
            </div>
          </div>

          {/* Right Side: Lead Form */}
          <div className="lg:col-span-7 p-5 sm:p-8 bg-[#F6F3EC] flex flex-col justify-between relative">
            <div>
              <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-brand-green/10">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-brand-terracotta/15 flex items-center justify-center text-brand-terracotta shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-brand-green/80">
                    {directDispatchMap[lang] || directDispatchMap.es}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={closeTerraCheck}
                  aria-label={lang === "es" ? "Cerrar ventana" : "Close modal"}
                  className="hidden lg:inline-flex rounded-full p-2 text-brand-green/60 hover:bg-brand-sand hover:text-brand-green transition"
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
        </div>
      </dialog>
    </TerraCheckContext.Provider>
  );
}
