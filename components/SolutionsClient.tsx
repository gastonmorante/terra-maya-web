"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Home,
  Building2,
  Hotel,
  Briefcase,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  FileSpreadsheet,
} from "lucide-react";
import { useTerraCheck } from "./TerraCheckModal";
import type { Locale } from "@/lib/i18n/dictionaries";

const segmentIcons: Record<string, React.ElementType> = {
  owners: Home,
  condos: Building2,
  hotels: Hotel,
  developers: Briefcase,
};

export default function SolutionsClient({
  lang,
  dict,
}: {
  lang: Locale;
  dict: any;
}) {
  const { openTerraCheck } = useTerraCheck();

  const inHouseComparison =
    lang === "es"
      ? [
          {
            item: "Plantilla necesaria (36 villas + amenidades)",
            inHouse: "~5 personas (2 jardineros, 2 limpieza, 1 técnico)",
            terraMaya: "Incluida con cobertura garantizada ante ausencias",
          },
          {
            item: "Nómina mensual con carga social (IMSS, INFONAVIT, ISN 3%)",
            inHouse: "~$95,000 MXN",
            terraMaya: "Incluida en iguala mensual",
          },
          {
            item: "Supervisión operativa y administración",
            inHouse: "~$20,000 MXN",
            terraMaya: "Gerente de cuenta bilingüe incluido",
          },
          {
            item: "Químicos, maquinaria, desbrozadoras y consumibles",
            inHouse: "~$12,000 MXN + inversión inicial en equipo",
            terraMaya: "Incluidos hasta tope de póliza",
          },
          {
            item: "App del cliente, recorridos 360° y vuelos de drone",
            inHouse: "No disponible",
            terraMaya: "Incluido con reporte ejecutivo para asamblea",
          },
          {
            item: "Vacaciones, incapacidades, rotación y demandas laborales",
            inHouse: "Costo oculto (+8–12%) y riesgo del HOA",
            terraMaya: "100% transferido a Terra Maya (REPSE)",
          },
          {
            item: "Costo Mensual Estimado Total",
            inHouse: "$140,000 – $150,000+ MXN",
            terraMaya: "$125,000 MXN (100% deducible CFDI)",
          },
        ]
      : [
          {
            item: "Required headcount (36 villas + resort amenities)",
            inHouse: "~5 staff (2 gardeners, 2 cleaners, 1 maintenance tech)",
            terraMaya: "Included with guaranteed backup coverage",
          },
          {
            item: "Monthly payroll + social burden (IMSS, INFONAVIT, 3% tax)",
            inHouse: "~$95,000 MXN",
            terraMaya: "Included in fixed monthly retainer",
          },
          {
            item: "Field supervision & HR administration",
            inHouse: "~$20,000 MXN",
            terraMaya: "Dedicated bilingual account manager included",
          },
          {
            item: "Pool chemicals, commercial machinery & supplies",
            inHouse: "~$12,000 MXN + upfront equipment CAPEX",
            terraMaya: "Included up to policy cap",
          },
          {
            item: "Client App, 360° walkthroughs & quarterly drone flights",
            inHouse: "Not available",
            terraMaya: "Included with monthly HOA assembly PDF report",
          },
          {
            item: "Vacations, sick leave, high turnover & labor lawsuits",
            inHouse: "Hidden cost (+8–12%) & HOA legal liability",
            terraMaya: "100% transferred to Terra Maya (REPSE)",
          },
          {
            item: "Estimated Total Monthly Cost",
            inHouse: "$140,000 – $150,000+ MXN",
            terraMaya: "$125,000 MXN (100% Tax-Deductible)",
          },
        ];

  return (
    <div className="pb-20">
      {/* Hero Banner */}
      <section className="bg-brand-green text-brand-sand py-16 sm:py-20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <span className="inline-block rounded-full bg-brand-terracotta px-4 py-1 text-xs font-bold uppercase tracking-widest text-white">
            {dict.audience.eyebrow}
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white max-w-3xl leading-tight">
            {dict.audience.title}
          </h1>
          <p className="text-base sm:text-lg text-brand-sand/85 max-w-2xl leading-relaxed">
            {dict.audience.subtitle}
          </p>

          <div className="pt-2 flex flex-wrap gap-2">
            {dict.audience.segments.map((seg: any) => (
              <a
                key={seg.id}
                href={`#${seg.id}`}
                className="rounded-xl bg-white/10 hover:bg-brand-terracotta text-brand-sand hover:text-white px-4 py-2 text-xs font-semibold transition"
              >
                {seg.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 4 Segment Landing Blocks */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-12">
        {dict.audience.segments.map((seg: any, idx: number) => {
          const IconComp = segmentIcons[seg.id] || Home;
          const isEven = idx % 2 === 1;
          return (
            <motion.div
              id={seg.id}
              key={seg.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="scroll-mt-28 rounded-3xl bg-white border border-brand-green/15 shadow-card overflow-hidden grid grid-cols-1 lg:grid-cols-12"
            >
              <div
                className={`lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between space-y-6 ${
                  isEven
                    ? "bg-brand-sand/65 text-brand-green"
                    : "bg-brand-green text-brand-sand"
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span
                      className={`rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider ${
                        isEven
                          ? "bg-brand-green text-brand-sand"
                          : "bg-brand-terracotta text-white"
                      }`}
                    >
                      {seg.badge}
                    </span>
                    <IconComp className="w-6 h-6 text-brand-terracotta" />
                  </div>

                  <h2
                    className={`font-serif text-3xl font-bold ${
                      isEven ? "text-brand-green" : "text-white"
                    }`}
                  >
                    {seg.title}
                  </h2>

                  <blockquote
                    className={`p-4 rounded-2xl border-l-4 border-brand-terracotta font-serif italic text-sm leading-relaxed ${
                      isEven
                        ? "bg-white/80 text-brand-green"
                        : "bg-white/10 text-brand-sand"
                    }`}
                  >
                    {seg.quote}
                  </blockquote>
                </div>

                <div className="pt-4 border-t border-current/15 flex items-center justify-between">
                  <span className="text-xs uppercase tracking-wider opacity-75">
                    {lang === "es" ? "Inversión de referencia" : "Reference investment"}
                  </span>
                  <span className="font-serif text-lg font-bold text-brand-terracotta">
                    {seg.ticket}
                  </span>
                </div>
              </div>

              <div className="lg:col-span-7 p-8 sm:p-10 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-brand-green/60">
                    {lang === "es"
                      ? "¿Cómo resolvemos tu operación en la Riviera Maya?"
                      : "How We Solve Your Operation in the Riviera Maya"}
                  </h3>
                  <div className="space-y-3">
                    {seg.bullets.map((b: string, i: number) => (
                      <div
                        key={i}
                        className="rounded-2xl bg-[#F6F3EC] p-4 border border-brand-green/10 flex items-start gap-3"
                      >
                        <CheckCircle2 className="w-5 h-5 text-brand-terracotta shrink-0 mt-0.5" />
                        <span className="text-sm text-brand-green/90">{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-brand-sand flex flex-wrap items-center justify-between gap-4">
                  <Link
                    href={`/${lang}/solutions/${seg.id}`}
                    className="text-xs font-bold text-brand-green hover:text-brand-terracotta underline underline-offset-4"
                  >
                    {lang === "es"
                      ? `Ver página dedicada: ${seg.title} →`
                      : `View dedicated page: ${seg.title} →`}
                  </Link>

                  <button
                    type="button"
                    onClick={() =>
                      openTerraCheck({
                        segment: seg.title,
                        notes: `Diagnóstico Terra Check para ${seg.title}`,
                      })
                    }
                    className="inline-flex items-center gap-2 rounded-xl bg-brand-terracotta hover:bg-brand-terracotta-dark text-white font-semibold px-5 py-3 text-xs sm:text-sm shadow-md transition"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>{seg.cta}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </section>

      {/* B2B Financial Comparison Table: Terra Maya vs In-House Staff */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="rounded-3xl bg-white border border-brand-green/15 shadow-luxury overflow-hidden">
          <div className="bg-brand-green text-brand-sand p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-brand-terracotta-light">
                <FileSpreadsheet className="w-4 h-4" />
                {lang === "es"
                  ? "CASO DE ESTUDIO · AMARI UPTOWN TULUM (36 VILLAS)"
                  : "CASE STUDY · AMARI UPTOWN TULUM (36 VILLAS)"}
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                {lang === "es"
                  ? "¿Por qué tercerizar tu condominio u hotel con Terra Maya?"
                  : "Why Outsource Your Complex or Boutique Hotel to Terra Maya?"}
              </h2>
              <p className="text-xs sm:text-sm text-brand-sand/80">
                {lang === "es"
                  ? "Comparativa real mensual entre contratar plantilla propia en Tulum vs. Póliza Integral Complejo Terra Maya."
                  : "Real monthly comparison between hiring in-house maintenance staff in Tulum vs. Terra Maya Integral Complex Policy."}
              </p>
            </div>

            <button
              type="button"
              onClick={() =>
                openTerraCheck({
                  segment: "Condominio / Administración HOA",
                  notes: "Solicitar comparativa B2B y piloto de 60 días para mi complejo",
                })
              }
              className="inline-flex items-center gap-2 rounded-xl bg-brand-terracotta hover:bg-brand-terracotta-dark text-white font-semibold px-6 py-3.5 text-sm shrink-0 transition"
            >
              <span>
                {lang === "es" ? "Solicitar Piloto de 60 Días" : "Request 60-Day B2B Pilot"}
              </span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-brand-sand/60 text-brand-green text-xs uppercase tracking-wider">
                  <th className="py-4 px-6 font-bold">
                    {lang === "es" ? "Concepto Operativo" : "Operational Line Item"}
                  </th>
                  <th className="py-4 px-6 font-bold">
                    {lang === "es" ? "Personal Propio (In-House)" : "In-House Staff"}
                  </th>
                  <th className="py-4 px-6 font-bold bg-brand-green/5 text-brand-green">
                    Terra Maya Integral (REPSE)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-green/10 text-sm">
                {inHouseComparison.map((row, idx) => {
                  const isLast = idx === inHouseComparison.length - 1;
                  return (
                    <tr
                      key={idx}
                      className={
                        isLast
                          ? "bg-brand-sand/40 font-bold text-brand-green"
                          : "hover:bg-[#F6F3EC]"
                      }
                    >
                      <td className="py-4 px-6">{row.item}</td>
                      <td className="py-4 px-6 text-brand-green/75">{row.inHouse}</td>
                      <td className="py-4 px-6 bg-brand-green/5 font-semibold text-brand-terracotta">
                        {row.terraMaya}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
