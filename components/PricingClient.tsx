"use client";

import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Calculator,
  Sparkles,
  ArrowRight,
  Droplets,
  Maximize2,
  Calendar,
  Building2,
  ShieldCheck,
} from "lucide-react";
import { useTerraCheck } from "./TerraCheckModal";
import type { Locale } from "@/lib/i18n/dictionaries";

export default function PricingClient({
  lang,
  dict,
}: {
  lang: Locale;
  dict: any;
}) {
  const { openTerraCheck } = useTerraCheck();

  // Calculator State
  const [selectedTierId, setSelectedTierId] = useState<string>("mas-vendido");
  const [propertyType, setPropertyType] = useState<string>("villa");
  const [sqm, setSqm] = useState<number>(220);
  const [poolOption, setPoolOption] = useState<string>("single");
  const [billingCycle, setBillingCycle] = useState<string>("12months");
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const calculation = useMemo(() => {
    const tierObj =
      dict.pricing.tiers.find((t: any) => t.id === selectedTierId) ||
      dict.pricing.tiers[1];
    const baseTierPrice = tierObj.basePrice;

    // Community discount (-15% if inside a partner complex like AMARI)
    const communityDiscount =
      propertyType === "condo_unit" ? Math.round(baseTierPrice * 0.15) : 0;

    // Area factor: up to 250 m² included in base price; above 250 m² adds $18 MXN per extra m²
    const extraSqm = Math.max(0, sqm - 250);
    const sqmSurcharge = extraSqm * 18;

    // Pool modifier
    const poolObj = dict.pricing.calculator.poolOptions.find(
      (p: any) => p.id === poolOption
    );
    const poolModifier = poolObj ? poolObj.modifier : 0;

    // Addons total
    const addonsTotal = selectedAddons.reduce((acc, addonId) => {
      const found = dict.pricing.calculator.addons.find(
        (a: any) => a.id === addonId
      );
      return acc + (found ? found.price : 0);
    }, 0);

    const subtotal = Math.max(
      1990,
      baseTierPrice - communityDiscount + sqmSurcharge + poolModifier + addonsTotal
    );

    // Billing term discount (3% for 6 months, 7% for 12 months)
    const billingObj = dict.pricing.calculator.billingOptions.find(
      (b: any) => b.id === billingCycle
    );
    const termDiscountRate = billingObj ? billingObj.discount : 0;
    const termDiscountAmount = Math.round(subtotal * termDiscountRate);

    const finalMonthlyMXN = subtotal - termDiscountAmount;
    const finalMonthlyUSD = Math.round(finalMonthlyMXN / 19.5);

    return {
      tierName: tierObj.name,
      baseTierPrice,
      communityDiscount,
      extraSqm,
      sqmSurcharge,
      poolModifier,
      poolLabel: poolObj?.label || "",
      addonsTotal,
      termDiscountRate,
      termDiscountAmount,
      finalMonthlyMXN,
      finalMonthlyUSD,
    };
  }, [
    selectedTierId,
    propertyType,
    sqm,
    poolOption,
    billingCycle,
    selectedAddons,
    dict.pricing,
  ]);

  const formatMXN = (val: number) =>
    new Intl.NumberFormat("es-MX", {
      style: "currency",
      currency: "MXN",
      maximumFractionDigits: 0,
    }).format(val);

  return (
    <div className="pb-24">
      {/* Header */}
      <section className="bg-brand-green text-brand-sand py-16 sm:py-20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          <span className="inline-block rounded-full bg-brand-terracotta px-4 py-1 text-xs font-bold uppercase tracking-widest text-white">
            {dict.pricing.eyebrow}
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white max-w-3xl leading-tight">
            {dict.pricing.title}
          </h1>
          <p className="text-base sm:text-lg text-brand-sand/85 max-w-2xl leading-relaxed">
            {dict.pricing.subtitle}
          </p>
        </div>
      </section>

      {/* 1. TERRA CARE 3 TIERS CARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 items-stretch">
          {dict.pricing.tiers.map((tier: any) => {
            const isPopular = tier.popular;
            const isSelected = selectedTierId === tier.id;
            const displayPrice =
              propertyType === "condo_unit"
                ? Math.round(tier.basePrice * 0.85)
                : tier.basePrice;

            return (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className={`rounded-3xl p-8 flex flex-col justify-between border transition-all ${
                  isPopular
                    ? "bg-brand-green text-brand-sand border-brand-terracotta shadow-2xl lg:-translate-y-2"
                    : "bg-white text-brand-green border-brand-green/15 shadow-card"
                } ${isSelected ? "ring-2 ring-brand-terracotta" : ""}`}
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className={`inline-block rounded-full px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider ${
                        isPopular
                          ? "bg-brand-terracotta text-white"
                          : "bg-brand-sand text-brand-green"
                      }`}
                    >
                      {tier.badge}
                    </span>
                    {propertyType === "condo_unit" && (
                      <span className="text-[11px] font-bold text-brand-terracotta bg-brand-terracotta/15 px-2.5 py-0.5 rounded-full">
                        Villa Care -15%
                      </span>
                    )}
                  </div>

                  <div>
                    <h2
                      className={`font-serif text-2xl font-bold ${
                        isPopular ? "text-white" : "text-brand-green"
                      }`}
                    >
                      {tier.name}
                    </h2>
                    <div className="mt-3 flex items-baseline gap-1.5">
                      <span
                        className={`font-serif text-4xl sm:text-5xl font-bold ${
                          isPopular ? "text-white" : "text-brand-green"
                        }`}
                      >
                        {formatMXN(displayPrice)}
                      </span>
                      <span
                        className={`text-xs font-medium ${
                          isPopular ? "text-brand-sand/75" : "text-brand-green/65"
                        }`}
                      >
                        MXN / {lang === "es" ? "mes + IVA" : "mo + VAT"}
                      </span>
                    </div>
                    <p
                      className={`mt-3 text-xs sm:text-sm leading-relaxed ${
                        isPopular ? "text-brand-sand/85" : "text-brand-green/75"
                      }`}
                    >
                      {tier.desc}
                    </p>
                  </div>

                  <ul
                    className={`space-y-3 pt-5 border-t ${
                      isPopular ? "border-white/15" : "border-brand-sand"
                    }`}
                  >
                    {tier.features.map((feat: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                        <CheckCircle2 className="w-4 h-4 text-brand-terracotta shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-8 space-y-2.5">
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedTierId(tier.id);
                      document
                        .getElementById("custom-calculator")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className={`w-full rounded-xl py-3.5 px-5 text-xs sm:text-sm font-bold transition flex items-center justify-center gap-2 ${
                      isPopular
                        ? "bg-brand-terracotta hover:bg-brand-terracotta-dark text-white shadow-lg"
                        : "bg-brand-green hover:bg-brand-green-light text-white"
                    }`}
                  >
                    <Calculator className="w-4 h-4" />
                    <span>
                      {lang === "es"
                        ? "Personalizar en Calculadora"
                        : "Customize in Calculator"}
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      openTerraCheck({
                        notes: `Póliza Terra Care ${tier.name} (${formatMXN(displayPrice)}/mes)`,
                      })
                    }
                    className={`w-full rounded-xl py-2.5 px-4 text-xs font-semibold transition ${
                      isPopular
                        ? "text-brand-sand/85 hover:text-white hover:bg-white/10"
                        : "text-brand-green/75 hover:text-brand-green hover:bg-brand-sand/50"
                    }`}
                  >
                    {lang === "es"
                      ? "Solicitar Terra Check directo →"
                      : "Book Free Terra Check directly →"}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        <p className="text-center text-xs text-brand-green/70 mt-6">
          {lang === "es"
            ? "* Precios base aplican para casas o villas de hasta 250 m² con alberca ≤40 m³. Propiedades mayores o con múltiples cuerpos de agua se ajustan en la calculadora inferior."
            : "* Base prices apply to homes or villas up to 250 m² with a pool ≤40 m³. Larger properties or multiple pools adjust dynamically in the calculator below."}
        </p>
      </section>

      {/* 2. INTERACTIVE CUSTOM PRICING CALCULATOR */}
      <section
        id="custom-calculator"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 scroll-mt-24"
      >
        <div className="rounded-3xl bg-white border border-brand-green/15 shadow-luxury overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          {/* Left 7 Cols: Interactive Controls */}
          <div className="lg:col-span-7 p-7 sm:p-10 space-y-8">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-terracotta">
                <Calculator className="w-4 h-4" />
                <span>{lang === "es" ? "COTIZADOR INTERACTIVO" : "INTERACTIVE ESTIMATOR"}</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brand-green">
                {dict.pricing.calculator.title}
              </h2>
              <p className="text-sm text-brand-green/75">
                {dict.pricing.calculator.subtitle}
              </p>
            </div>

            {/* Control 1: Base Plan Selector */}
            <div className="space-y-2.5">
              <label className="block text-xs font-bold uppercase tracking-wider text-brand-green">
                1. {lang === "es" ? "Nivel de Póliza Terra Care" : "Terra Care Policy Tier"}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {dict.pricing.tiers.map((t: any) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setSelectedTierId(t.id)}
                    className={`rounded-2xl p-3.5 text-left border transition ${
                      selectedTierId === t.id
                        ? "bg-brand-green text-white border-brand-green shadow-md"
                        : "bg-[#F6F3EC] text-brand-green border-brand-green/15 hover:bg-brand-sand/60"
                    }`}
                  >
                    <p className="text-xs font-bold">{t.name}</p>
                    <p
                      className={`text-sm font-serif font-bold mt-0.5 ${
                        selectedTierId === t.id
                          ? "text-brand-terracotta-light"
                          : "text-brand-terracotta"
                      }`}
                    >
                      {formatMXN(t.basePrice)}/mes
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Control 2: Property Type */}
            <div className="space-y-2.5">
              <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-green">
                <Building2 className="w-4 h-4 text-brand-terracotta" />
                <span>2. {dict.pricing.calculator.propertyTypeLabel}</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {dict.pricing.calculator.propertyTypes.map((pt: any) => (
                  <button
                    key={pt.id}
                    type="button"
                    onClick={() => setPropertyType(pt.id)}
                    className={`rounded-xl px-4 py-3 text-xs font-semibold border text-left transition ${
                      propertyType === pt.id
                        ? "bg-brand-terracotta text-white border-brand-terracotta shadow-sm"
                        : "bg-white text-brand-green border-brand-green/20 hover:bg-brand-sand/40"
                    }`}
                  >
                    {pt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Control 3: Property Area m² Slider */}
            <div className="space-y-3 rounded-2xl bg-[#F6F3EC] p-5 border border-brand-green/10">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="sqm-slider"
                  className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-green"
                >
                  <Maximize2 className="w-4 h-4 text-brand-terracotta" />
                  <span>3. {dict.pricing.calculator.sqmLabel}</span>
                </label>
                <span className="rounded-lg bg-brand-green text-brand-sand px-3 py-1 font-serif text-base font-bold">
                  {sqm} m²
                </span>
              </div>

              <input
                id="sqm-slider"
                type="range"
                min={80}
                max={600}
                step={10}
                value={sqm}
                onChange={(e) => setSqm(Number(e.target.value))}
                className="w-full accent-brand-terracotta cursor-pointer h-2 bg-brand-sand rounded-lg"
              />

              <div className="flex justify-between text-[11px] text-brand-green/65">
                <span>80 m² (Condo)</span>
                <span>250 m² ({lang === "es" ? "Tope base incluido" : "Base cap included"})</span>
                <span>600 m² (Estate Villa)</span>
              </div>
            </div>

            {/* Control 4: Pool Presence & Volume */}
            <div className="space-y-2.5">
              <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-green">
                <Droplets className="w-4 h-4 text-brand-terracotta" />
                <span>4. {dict.pricing.calculator.poolLabel}</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {dict.pricing.calculator.poolOptions.map((po: any) => (
                  <button
                    key={po.id}
                    type="button"
                    onClick={() => setPoolOption(po.id)}
                    className={`rounded-xl px-4 py-3 text-xs font-semibold border text-left transition flex items-center justify-between ${
                      poolOption === po.id
                        ? "bg-brand-green text-white border-brand-green"
                        : "bg-white text-brand-green border-brand-green/20 hover:bg-brand-sand/40"
                    }`}
                  >
                    <span>{po.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Control 5: Contract Term & Optional Addons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2.5">
                <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-green">
                  <Calendar className="w-4 h-4 text-brand-terracotta" />
                  <span>5. {dict.pricing.calculator.billingLabel}</span>
                </label>
                <div className="space-y-2">
                  {dict.pricing.calculator.billingOptions.map((bo: any) => (
                    <button
                      key={bo.id}
                      type="button"
                      onClick={() => setBillingCycle(bo.id)}
                      className={`w-full rounded-xl px-4 py-2.5 text-xs font-semibold border text-left transition ${
                        billingCycle === bo.id
                          ? "bg-brand-terracotta text-white border-brand-terracotta"
                          : "bg-white text-brand-green border-brand-green/20 hover:bg-brand-sand/40"
                      }`}
                    >
                      {bo.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-brand-green">
                  6. {dict.pricing.calculator.addonsLabel}
                </label>
                <div className="space-y-2">
                  {dict.pricing.calculator.addons.map((addon: any) => {
                    const checked = selectedAddons.includes(addon.id);
                    return (
                      <button
                        key={addon.id}
                        type="button"
                        onClick={() => toggleAddon(addon.id)}
                        className={`w-full rounded-xl px-3.5 py-2.5 text-xs font-medium border text-left transition flex items-center gap-2 ${
                          checked
                            ? "bg-brand-green/10 border-brand-green text-brand-green font-semibold"
                            : "bg-white border-brand-green/15 text-brand-green/80"
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={checked}
                          readOnly
                          className="accent-brand-terracotta rounded"
                        />
                        <span>{addon.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Right 5 Cols: Live Quote Summary */}
          <div className="lg:col-span-5 bg-brand-green text-brand-sand p-8 sm:p-10 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-white/15 pb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-brand-terracotta-light">
                  {dict.pricing.calculator.summaryTitle}
                </span>
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white">
                  {calculation.tierName}
                </span>
              </div>

              {/* Price Display */}
              <div className="space-y-1">
                <div className="flex items-baseline gap-2">
                  <span className="font-serif text-4xl sm:text-5xl font-bold text-white">
                    {formatMXN(calculation.finalMonthlyMXN)}
                  </span>
                  <span className="text-xs text-brand-sand/80">
                    MXN / {lang === "es" ? "mes" : "mo"}
                  </span>
                </div>
                <p className="text-xs text-brand-terracotta-light font-semibold">
                  ≈ ${calculation.finalMonthlyUSD} USD / {lang === "es" ? "mes" : "month"} (+ IVA)
                </p>
              </div>

              {/* Line Item Breakdown */}
              <div className="space-y-3 rounded-2xl bg-white/5 p-5 border border-white/10 text-xs">
                <div className="flex justify-between">
                  <span className="text-brand-sand/80">
                    {lang === "es" ? "Póliza Base" : "Base Policy"} ({calculation.tierName})
                  </span>
                  <span className="font-semibold text-white">
                    {formatMXN(calculation.baseTierPrice)}
                  </span>
                </div>

                {calculation.communityDiscount > 0 && (
                  <div className="flex justify-between text-emerald-300">
                    <span>
                      {lang === "es"
                        ? "Descuento Comunidad Villa Care (-15%)"
                        : "Villa Care Community Discount (-15%)"}
                    </span>
                    <span>-{formatMXN(calculation.communityDiscount)}</span>
                  </div>
                )}

                <div className="flex justify-between">
                  <span className="text-brand-sand/80">
                    {lang === "es" ? "Superficie" : "Property Area"} ({sqm} m²)
                  </span>
                  <span className="font-semibold text-white">
                    {calculation.sqmSurcharge > 0
                      ? `+${formatMXN(calculation.sqmSurcharge)}`
                      : lang === "es"
                      ? "Incluida (≤250 m²)"
                      : "Included (≤250 m²)"}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-brand-sand/80">
                    {lang === "es" ? "Ajuste Alberca" : "Pool Adjustment"}
                  </span>
                  <span className="font-semibold text-white">
                    {calculation.poolModifier === 0
                      ? lang === "es"
                        ? "Incluida"
                        : "Included"
                      : calculation.poolModifier > 0
                      ? `+${formatMXN(calculation.poolModifier)}`
                      : `${formatMXN(calculation.poolModifier)}`}
                  </span>
                </div>

                {calculation.addonsTotal > 0 && (
                  <div className="flex justify-between">
                    <span className="text-brand-sand/80">
                      {lang === "es" ? "Complementos seleccionados" : "Selected Add-ons"}
                    </span>
                    <span className="font-semibold text-white">
                      +{formatMXN(calculation.addonsTotal)}
                    </span>
                  </div>
                )}

                {calculation.termDiscountAmount > 0 && (
                  <div className="flex justify-between text-emerald-300 pt-2 border-t border-white/10">
                    <span>
                      {lang === "es" ? "Descuento por plazo" : "Contract Term Discount"} (-
                      {Math.round(calculation.termDiscountRate * 100)}%)
                    </span>
                    <span>-{formatMXN(calculation.termDiscountAmount)}</span>
                  </div>
                )}
              </div>

              <div className="flex items-start gap-2.5 text-xs text-brand-sand/75 leading-relaxed">
                <ShieldCheck className="w-4 h-4 text-brand-terracotta shrink-0 mt-0.5" />
                <span>{dict.pricing.calculator.ivaNote}</span>
              </div>
            </div>

            <button
              type="button"
              onClick={() =>
                openTerraCheck({
                  segment: "Villa / Casa Residencial",
                  notes: `Cotización Calculadora: Plan ${calculation.tierName} | ${sqm} m² | ${calculation.poolLabel} | Estimado: ${formatMXN(calculation.finalMonthlyMXN)} MXN/mes`,
                })
              }
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-brand-terracotta hover:bg-brand-terracotta-dark text-white font-semibold py-4 px-6 text-sm shadow-xl transition"
            >
              <Sparkles className="w-4 h-4" />
              <span>{dict.pricing.calculator.ctaButton}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
