"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Droplets,
  Trees,
  Sparkles,
  Sofa,
  ShieldAlert,
  Hammer,
  HardHat,
  CheckCircle2,
  ArrowRight,
  Camera,
  ShieldCheck,
  FileCheck2,
} from "lucide-react";
import { useTerraCheck } from "./TerraCheckModal";
import type { Locale } from "@/lib/i18n/dictionaries";

const serviceIconMap: Record<string, React.ElementType> = {
  "terra-agua": Droplets,
  "terra-verde": Trees,
  "terra-clean": Sparkles,
  "terra-textil": Sofa,
  "terra-shield": ShieldAlert,
  "terra-build-carpinteria": Hammer,
  "terra-build-albanileria": HardHat,
};

export default function ServicesClient({
  lang,
  dict,
}: {
  lang: Locale;
  dict: any;
}) {
  const { openTerraCheck } = useTerraCheck();
  const [selectedVertical, setSelectedVertical] = useState<string>("all");

  const verticals =
    lang === "es"
      ? [
          { id: "all", label: "Todas las Verticales (7)" },
          { id: "Residencial", label: "Residencial & Villas" },
          { id: "Condominios", label: "Condominios & HOA" },
          { id: "Hoteles", label: "Hoteles Boutique" },
        ]
      : [
          { id: "all", label: "All Verticals (7)" },
          { id: "Residential", label: "Residential & Villas" },
          { id: "Condos", label: "Condos & HOA" },
          { id: "Hotels", label: "Boutique Hotels" },
        ];

  const filteredServices =
    selectedVertical === "all"
      ? dict.services.items
      : dict.services.items.filter((s: any) =>
          s.verticals.some((v: string) =>
            v.toLowerCase().includes(selectedVertical.toLowerCase().slice(0, 5))
          )
        );

  const aLaCarteRates =
    lang === "es"
      ? [
          {
            subBrand: "Terra Agua",
            service: "Mantenimiento alberca residencial ≤40 m³ (1 visita/sem + químicos)",
            rate: "$1,600 – $1,900 MXN / mes",
          },
          {
            subBrand: "Terra Agua",
            service: "Alberca en renta vacacional (3 visitas/sem + revisión post check-out)",
            rate: "$3,800 – $4,500 MXN / mes",
          },
          {
            subBrand: "Terra Verde",
            service: "Jardinería residencial visita semanal / Poda de palma con retiro de coco",
            rate: "$2,200 – $3,200 / mes · $450–$900 / palma",
          },
          {
            subBrand: "Terra Clean",
            service: "Turnover renta vacacional (2 · 3 · 4 recámaras) con checklist 40 pts",
            rate: "$800 · $1,200 · $1,700 MXN",
          },
          {
            subBrand: "Terra Textil",
            service: "Lavado inyección-succión de colchón (Individual a King) / Sala 3 plazas",
            rate: "$450 – $750 MXN · Sala $850 MXN",
          },
          {
            subBrand: "Terra Shield",
            service: "Fumigación mensual con certificado COFEPRIS / Nebulización dengue",
            rate: "$650–$900 res. · $1,800–$3,500 com.",
          },
          {
            subBrand: "Terra Build",
            service: "Sellado de maderas tropicales (decks/pérgolas) / Hora técnico general",
            rate: "$220 – $380 MXN/m² · $350 MXN/h",
          },
        ]
      : [
          {
            subBrand: "Terra Agua",
            service: "Residential pool care ≤40 m³ (1 visit/wk + chemicals included)",
            rate: "$1,600 – $1,900 MXN / mo",
          },
          {
            subBrand: "Terra Agua",
            service: "Vacation rental pool (3 visits/wk + post-checkout check)",
            rate: "$3,800 – $4,500 MXN / mo",
          },
          {
            subBrand: "Terra Verde",
            service: "Weekly residential garden care / Palm tree pruning + coconut removal",
            rate: "$2,200 – $3,200 / mo · $450–$900 / palm",
          },
          {
            subBrand: "Terra Clean",
            service: "Vacation rental turnover (2 · 3 · 4 BR) with 40-pt hospitality checklist",
            rate: "$800 · $1,200 · $1,700 MXN",
          },
          {
            subBrand: "Terra Textil",
            service: "Deep extraction mattress wash (Twin to King) / 3-seat Sofa",
            rate: "$450 – $750 MXN · Sofa $850 MXN",
          },
          {
            subBrand: "Terra Shield",
            service: "Monthly COFEPRIS certified pest control / Outdoor mosquito fogging",
            rate: "$650–$900 res. · $1,800–$3,500 comm.",
          },
          {
            subBrand: "Terra Build",
            service: "Tropical wood deck & pergola UV sealing / General technician hour",
            rate: "$220 – $380 MXN/m² · $350 MXN/hr",
          },
        ];

  return (
    <div className="pb-20">
      {/* Page Header */}
      <section className="bg-brand-green text-brand-sand py-16 sm:py-20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <span className="inline-block rounded-full bg-brand-terracotta px-4 py-1 text-xs font-bold uppercase tracking-widest text-white">
            {dict.services.eyebrow}
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white max-w-3xl leading-tight">
            {dict.services.title}
          </h1>
          <p className="text-base sm:text-lg text-brand-sand/85 max-w-2xl leading-relaxed">
            {dict.services.subtitle}
          </p>

          {/* Quick Jump Anchor Bar */}
          <div className="pt-4 flex flex-wrap gap-2">
            {dict.services.items.map((srv: any, idx: number) => (
              <a
                key={srv.id}
                href={`#${srv.id}`}
                className="rounded-xl bg-white/10 hover:bg-brand-terracotta text-brand-sand hover:text-white px-3.5 py-2 text-xs font-semibold transition"
              >
                0{idx + 1} · {srv.brand}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-4">
        <div className="flex flex-wrap items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-brand-green/10 shadow-sm">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-green/70">
            {lang === "es" ? "Filtrar por vertical:" : "Filter by vertical:"}
          </span>
          <div className="flex flex-wrap gap-2">
            {verticals.map((v) => (
              <button
                key={v.id}
                type="button"
                onClick={() => setSelectedVertical(v.id)}
                className={`rounded-xl px-4 py-2 text-xs font-bold transition ${
                  selectedVertical === v.id
                    ? "bg-brand-green text-white"
                    : "bg-brand-sand/50 text-brand-green hover:bg-brand-sand"
                }`}
              >
                {v.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 7 Sub-Brands Detailed Sections */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
        {filteredServices.map((srv: any, idx: number) => {
          const SrvIcon = serviceIconMap[srv.id] || Droplets;
          return (
            <motion.div
              id={srv.id}
              key={srv.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="scroll-mt-28 rounded-3xl bg-white border border-brand-green/15 shadow-card overflow-hidden grid grid-cols-1 lg:grid-cols-12"
            >
              {/* Left Column: Brand Identity */}
              <div className="lg:col-span-4 bg-brand-green text-brand-sand p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono uppercase tracking-widest text-brand-terracotta-light">
                      SUB-MARCA 0{idx + 1}
                    </span>
                    <div className="w-11 h-11 rounded-xl bg-brand-terracotta text-white flex items-center justify-center">
                      <SrvIcon className="w-6 h-6" />
                    </div>
                  </div>

                  <h2 className="font-serif text-3xl font-bold text-white">
                    {srv.brand}
                  </h2>
                  <p className="text-sm font-semibold text-brand-terracotta-light">
                    {srv.category}
                  </p>
                  <p className="text-xs sm:text-sm text-brand-sand/80 leading-relaxed">
                    {srv.fullDesc}
                  </p>
                </div>

                <div className="space-y-3 pt-4 border-t border-white/15">
                  <div className="flex flex-wrap gap-1.5">
                    {srv.verticals.map((v: string) => (
                      <span
                        key={v}
                        className="rounded-lg bg-white/10 px-2.5 py-1 text-[11px] font-semibold text-brand-sand"
                      >
                        {v}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs font-bold text-white">{srv.priceHint}</p>
                </div>
              </div>

              {/* Right Column: Scope, Evidence & Actions */}
              <div className="lg:col-span-8 p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-brand-green/60">
                    {lang === "es"
                      ? "Alcance Técnico y Estándar de Calidad"
                      : "Technical Scope & Quality Standard"}
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {srv.features.map((feat: string, i: number) => (
                      <div
                        key={i}
                        className="rounded-2xl bg-[#F6F3EC] p-4 border border-brand-green/10 flex items-start gap-3"
                      >
                        <CheckCircle2 className="w-5 h-5 text-brand-terracotta shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-brand-green/90 leading-relaxed">
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-brand-sand flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-4 text-xs text-brand-green/75">
                    <span className="inline-flex items-center gap-1.5 font-semibold">
                      <Camera className="w-4 h-4 text-brand-terracotta" />
                      {lang === "es" ? "Evidencia antes/después en App" : "Before/After App Proof"}
                    </span>
                    <span className="inline-flex items-center gap-1.5 font-semibold">
                      <ShieldCheck className="w-4 h-4 text-brand-terracotta" />
                      {lang === "es" ? "100% REPSE & Seguro RC" : "100% REPSE & Insured"}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Link
                      href={`/${lang}/services/${srv.id}`}
                      className="rounded-xl border border-brand-green/20 hover:bg-brand-sand px-4 py-2.5 text-xs font-bold text-brand-green transition"
                    >
                      {lang === "es" ? "Ficha técnica" : "Service Sheet"}
                    </Link>
                    <button
                      type="button"
                      onClick={() =>
                        openTerraCheck({
                          notes: `${srv.brand} (${srv.category})`,
                        })
                      }
                      className="inline-flex items-center gap-1.5 rounded-xl bg-brand-terracotta hover:bg-brand-terracotta-dark text-white font-semibold px-4 py-2.5 text-xs transition"
                    >
                      <span>{lang === "es" ? "Cotizar servicio" : "Request Quote"}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </section>

      {/* Reference Rate Card Table */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="rounded-3xl bg-white border border-brand-green/15 shadow-card overflow-hidden">
          <div className="bg-brand-green text-brand-sand p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-brand-terracotta-light">
                {lang === "es" ? "TARIFARIO DE REFERENCIA 2026" : "2026 REFERENCE RATE CARD"}
              </span>
              <h3 className="font-serif text-2xl font-bold text-white mt-1">
                {lang === "es"
                  ? "Precios sugeridos por servicio individual o evento"
                  : "Suggested pricing for standalone services & events"}
              </h3>
            </div>
            <Link
              href={`/${lang}/pricing`}
              className="inline-flex items-center gap-2 rounded-xl bg-brand-terracotta text-white font-semibold px-5 py-3 text-xs sm:text-sm shrink-0"
            >
              <FileCheck2 className="w-4 h-4" />
              <span>
                {lang === "es"
                  ? "Ahorra 15% con Pólizas Terra Care"
                  : "Save 15% with Terra Care Plans"}
              </span>
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-brand-sand/50 text-brand-green text-xs uppercase tracking-wider">
                  <th className="py-3.5 px-6 font-bold">Sub-Marca</th>
                  <th className="py-3.5 px-6 font-bold">
                    {lang === "es" ? "Concepto / Alcance" : "Service / Scope"}
                  </th>
                  <th className="py-3.5 px-6 font-bold text-right">
                    {lang === "es" ? "Tarifa de Referencia (MXN + IVA)" : "Reference Rate (MXN + VAT)"}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-green/10 text-sm">
                {aLaCarteRates.map((row, idx) => (
                  <tr key={idx} className="hover:bg-[#F6F3EC] transition">
                    <td className="py-4 px-6 font-bold text-brand-green whitespace-nowrap">
                      {row.subBrand}
                    </td>
                    <td className="py-4 px-6 text-brand-green/80">{row.service}</td>
                    <td className="py-4 px-6 font-semibold text-brand-terracotta text-right whitespace-nowrap">
                      {row.rate}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
