"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle, Camera, Clock, MapPin, ShieldCheck } from "lucide-react";
import { useTerraCheck } from "./TerraCheckModal";
import LeadForm from "./LeadForm";
import { CONTACT_INFO, type Locale } from "@/lib/i18n/dictionaries";

const divisionIcons: Record<
  string,
  { icon: string; color: string; badgeClass: string; image: string }
> = {
  "terra-agua": {
    icon: "water_lux",
    color: "text-surface-tint",
    badgeClass: "bg-surface-container-low text-surface-tint",
    image: "/images/services/terra-agua.jpg",
  },
  "terra-verde": {
    icon: "potted_plant",
    color: "text-primary-container",
    badgeClass: "bg-secondary-container text-on-secondary-container",
    image: "/images/services/terra-verde.jpg",
  },
  "terra-clean": {
    icon: "cleaning_services",
    color: "text-surface-tint",
    badgeClass: "bg-surface-container-low text-primary-container",
    image: "/images/services/terra-clean.jpg",
  },
  "terra-textil": {
    icon: "iron",
    color: "text-tertiary",
    badgeClass: "bg-surface-container-low text-on-surface",
    image: "/images/services/terra-textil.jpg",
  },
  "terra-shield": {
    icon: "verified_user",
    color: "text-surface-tint",
    badgeClass: "bg-tertiary-fixed text-on-tertiary-fixed",
    image: "/images/services/terra-shield.jpg",
  },
  "terra-build-carpinteria": {
    icon: "carpenter",
    color: "text-primary",
    badgeClass: "bg-secondary-container text-on-secondary-container",
    image: "/images/services/terra-build-carpinteria.jpg",
  },
  "terra-build-albanileria": {
    icon: "format_paint",
    color: "text-primary",
    badgeClass: "bg-secondary-container text-on-secondary-container",
    image: "/images/services/terra-build-albanileria.jpg",
  },
};

export default function HomeClient({ lang, dict }: { lang: Locale; dict: any }) {
  const { openTerraCheck } = useTerraCheck();
  const [activeSegmentIdx, setActiveSegmentIdx] = useState<number>(0);

  const segmentIcons = ["vpn_key", "domain", "hotel", "architecture"];
  const segmentDetailIcons = ["lock_reset", "apartment", "hotel_class", "verified"];
  const activeSegment = dict.audience.segments[activeSegmentIdx] || dict.audience.segments[0];

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

  return (
    <div className="flex flex-col w-full font-body-md text-on-surface">
      {/* 1. HERO SECTION (Native Mobile + Full-Width PC/Tablet) */}
      <section className="relative w-full overflow-hidden bg-primary-container text-on-primary">
        <div className="relative min-h-[500px] sm:min-h-[540px] lg:min-h-[620px] w-full flex flex-col justify-end">
          <img
            alt="Villa contemporánea en la selva caribeña - Terra Maya"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src="https://lh3.googleusercontent.com/aida/AEtjO1VXktp4lsRLsnKSy11UzE6cE5a-dm5exzjXmSbAFFmQjmgJz2se_OolkJnfijVXjY81QkK1PfDvzOQpZdEC-LsZhS4saE8aBqWofUr387oAVykq_-eohwMcumvynUvfM48Duwic6kOJ761YdKR1WrNrDqN2_4Rfch6khoULAfvpVGRnA8FG1Wnx67_pYeKtUSTbijkK11RyeZc2HbYsZ_AI88h_mX7ppPJHUm802cfS-xyxqauW-Ckxso4"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/65 to-primary/20" />

          {/* Hero Bottom Copy & CTAs */}
          <div className="relative z-10 max-w-7xl mx-auto w-full p-5 sm:p-8 lg:pb-14 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-2xl flex flex-col gap-3.5">
              <h1 className="font-headline-lg-mobile sm:text-4xl lg:text-5xl font-semibold text-surface-bright tracking-tight leading-tight">
                {dict.hero.title}
              </h1>

              <p className="font-body-md sm:text-base text-surface-variant font-light leading-relaxed">
                {dict.hero.subtitle}
              </p>
            </div>

            <div className="w-full lg:w-80 flex flex-col gap-2.5 shrink-0">
              <a
                href="#booking-form"
                className="w-full flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl text-on-tertiary font-label-lg text-label-lg shadow-lg hover:opacity-95 active:scale-[0.98] transition-all"
                style={{ backgroundColor: "#C86D51" }}
              >
                <span className="material-symbols-outlined text-[20px]">
                  verified
                </span>
                <span>{dict.hero.primaryCta}</span>
              </a>
              <button
                type="button"
                onClick={() => openTerraCheck()}
                className="w-full py-2.5 px-4 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-md text-surface-bright font-label-sm text-label-sm uppercase tracking-wider border border-white/15 transition"
              >
                {dict.hero.secondaryCta}
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto w-full">
        {/* 2. SEGMENT SELECTOR CHIPS (Horizontal Scroll on Mobile, Grid on PC) */}
        <section className="w-full pt-6 pb-2 px-4 sm:px-6">
          <div className="flex items-center justify-between mb-2.5">
            <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
              {dict.audience.eyebrow}
            </span>
            <span className="font-label-sm text-label-sm text-surface-tint">
              Tulum · Playa · Mayakoba
            </span>
          </div>

          <div
            className="flex gap-2 overflow-x-auto no-scrollbar pb-1"
            role="tablist"
          >
            {dict.audience.segments.map((seg: any, index: number) => {
              const isActive = activeSegmentIdx === index;
              return (
                <button
                  key={seg.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveSegmentIdx(index)}
                  className={`flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-xl font-label-md text-label-md transition-all active:scale-95 ${
                    isActive
                      ? "bg-primary text-on-primary shadow-sm"
                      : "bg-surface-container-low text-on-surface hover:bg-surface-container"
                  }`}
                >
                  <span className="material-symbols-outlined text-[18px]">
                    {segmentIcons[index] || "villa"}
                  </span>
                  <span>{seg.shortLabel}</span>
                </button>
              );
            })}
          </div>

          {/* Dynamic Segment Value Card */}
          <motion.div
            key={activeSegment.id}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="mt-3 p-4 sm:p-5 rounded-2xl bg-surface-container-lowest shadow-sm border border-outline-variant/25 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
          >
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-secondary-container flex items-center justify-center text-primary flex-shrink-0 mt-0.5">
                <span className="material-symbols-outlined text-[20px]">
                  {segmentDetailIcons[activeSegmentIdx] || "verified"}
                </span>
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-label-md text-label-md text-primary font-semibold">
                    {activeSegment.title}
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-surface-container font-label-sm text-[10px] text-primary">
                    {activeSegment.ticket}
                  </span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                  {activeSegment.quote}
                </p>
              </div>
            </div>

            <Link
              href={`/${lang}/solutions/${activeSegment.id}`}
              className="inline-flex items-center gap-1 font-label-sm text-label-sm text-brand-terracotta font-semibold shrink-0 hover:underline"
            >
              <span>{activeSegment.cta}</span>
              <span className="material-symbols-outlined text-[16px]">
                chevron_right
              </span>
            </Link>
          </motion.div>
        </section>

        {/* 3. 4-VALUE-BLOCKS (PILLARS) */}
        <section className="w-full px-4 sm:px-6 pt-6 pb-2">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {dict.values.items.map((val: any, idx: number) => {
              const icons = ["support_agent", "360", "bolt", "eco"];
              return (
                <div
                  key={idx}
                  className="bg-surface-container-lowest rounded-2xl p-4 sm:p-5 shadow-card border border-outline-variant/20 flex flex-col justify-between gap-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-label-sm text-[10px] text-surface-tint uppercase tracking-wider">
                      {val.tag}
                    </span>
                    <span className="material-symbols-outlined text-primary text-[20px]">
                      {icons[idx]}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-title-lg text-base font-semibold text-primary">
                      {val.title}
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                      {val.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 4. SEVEN SPECIALIZED DIVISIONS (Photorealistic Gemini Nano Banana Images + Calibrated Readability Scrim) */}
        <section className="w-full px-4 sm:px-6 pt-6 pb-4">
          <div className="flex items-baseline justify-between mb-4">
            <div>
              <span
                className="font-label-sm text-label-sm uppercase tracking-widest font-semibold"
                style={{ color: "#C86D51" }}
              >
                {dict.services.eyebrow}
              </span>
              <h2 className="font-headline-sm text-headline-sm text-primary mt-0.5">
                {dict.services.title}
              </h2>
            </div>
            <Link
              href={`/${lang}/services`}
              className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary flex items-center gap-1 shrink-0"
            >
              <span>ISO · NOM</span>
              <span className="material-symbols-outlined text-[14px]">
                arrow_forward
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            {dict.services.items.map((srv: any, idx: number) => {
              const meta = divisionIcons[srv.id] || divisionIcons["terra-agua"];
              return (
                <article
                  key={srv.id}
                  className={`group rounded-2xl p-5 sm:p-6 shadow-card border border-primary/20 relative overflow-hidden bg-[#081C17] text-white hover:shadow-luxury hover:border-brand-terracotta/50 transition-all duration-300 ${
                    idx === 0 ? "md:col-span-2" : ""
                  }`}
                >
                  {/* Photorealistic Gemini Nano Banana Background Image */}
                  <img
                    src={meta.image}
                    alt={`${srv.brand} - ${srv.category}`}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover object-center opacity-55 group-hover:opacity-65 group-hover:scale-105 transition-all duration-700 pointer-events-none"
                  />
                  {/* Calibrated Multi-Layer Readability Scrim (Ensures WCAG AAA contrast + rich photorealism) */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#061712]/92 via-[#0A231C]/82 to-[#0A231C]/50 pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#051410]/90 via-transparent to-[#051410]/35 pointer-events-none" />

                  <div className="relative z-10 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center text-brand-sand flex-shrink-0 shadow-sm">
                      <span className="material-symbols-outlined text-[24px]">
                        {meta.icon}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <Link
                          href={`/${lang}/services/${srv.id}`}
                          className="font-title-lg text-lg sm:text-xl font-semibold text-white group-hover:text-brand-sand hover:underline truncate drop-shadow-sm"
                        >
                          {srv.brand}
                        </Link>
                        <span className="px-3 py-0.5 rounded-full font-label-sm text-label-sm shrink-0 bg-white/15 backdrop-blur-md text-brand-sand border border-white/20 font-semibold">
                          {srv.badge}
                        </span>
                      </div>
                      <p className="font-label-md text-label-md text-[#F4A68E] mt-0.5 font-semibold drop-shadow-sm">
                        {srv.category}
                      </p>
                      <p className="font-body-sm text-body-sm text-white/95 mt-1.5 leading-relaxed drop-shadow-sm max-w-3xl">
                        {srv.fullDesc}
                      </p>
                      <div className="mt-4 pt-3 border-t border-white/15 flex flex-wrap items-center justify-between gap-2.5">
                        <div className="flex flex-wrap items-center gap-2 text-brand-sand font-label-sm text-label-sm">
                          {(srv.checks || []).map((chk: string, cIdx: number) => (
                            <span
                              key={cIdx}
                              className="inline-flex items-center gap-1.5 bg-black/30 backdrop-blur-sm px-2.5 py-1 rounded-full border border-white/10 text-white/95"
                            >
                              <span className="material-symbols-outlined text-[14px] text-[#F4A68E]">
                                check_circle
                              </span>
                              {chk}
                            </span>
                          ))}
                        </div>
                        <Link
                          href={`/${lang}/services/${srv.id}`}
                          className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-full bg-brand-terracotta hover:bg-brand-terracotta-dark text-white font-label-sm text-label-sm font-semibold shadow-sm transition"
                        >
                          <span>+ Info →</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </div>

      {/* 5. NUESTROS CLIENTES OPINAN · GOOGLE MAPS REVIEWS */}
      <section className="w-full py-10 bg-surface-container-low my-2 border-y border-outline-variant/25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col gap-6">
          {/* Header + Google Maps Summary Pill */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 mb-1">
                <span className="material-symbols-outlined text-[#C86D51] text-[18px]">
                  location_on
                </span>
                <span className="font-label-sm text-label-sm uppercase tracking-widest font-bold text-[#C86D51]">
                  {dict.reviews.eyebrow}
                </span>
              </div>
              <h3 className="font-headline-sm text-2xl sm:text-3xl font-bold text-primary">
                {dict.reviews.title}
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant max-w-2xl mt-1">
                {dict.reviews.subtitle}
              </p>
            </div>

            {/* Connected Google Maps Rating Card */}
            <a
              href={CONTACT_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3.5 bg-surface-container-lowest px-4 py-3 rounded-2xl shadow-sm border border-outline-variant/30 hover:border-primary/40 transition group shrink-0"
            >
              <div className="w-10 h-10 rounded-xl bg-white shadow-sm border border-black/5 flex items-center justify-center shrink-0">
                <svg viewBox="0 0 24 24" className="w-6 h-6" aria-hidden="true">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                  />
                </svg>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-bold text-base text-primary">
                    {dict.reviews.ratingScore}
                  </span>
                  <div className="flex items-center text-[#FBBC04] text-sm">
                    ★★★★★
                  </div>
                </div>
                <span className="text-[11px] text-on-surface-variant font-medium group-hover:text-primary transition">
                  {dict.reviews.ratingCount} ·{" "}
                  <span className="underline text-[#C86D51] font-semibold">
                    {dict.reviews.ctaMaps} ↗
                  </span>
                </span>
              </div>
            </a>
          </div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {dict.reviews.items.map((rev: any, idx: number) => {
              const initials = rev.name
                .split(" ")
                .filter((p: string) => p.length > 2)
                .slice(0, 2)
                .map((p: string) => p[0])
                .join("");
              return (
                <article
                  key={idx}
                  className="bg-surface-container-lowest rounded-2xl p-5 shadow-card border border-outline-variant/25 flex flex-col justify-between gap-4 hover:border-primary/30 transition"
                >
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary text-brand-sand font-bold text-xs flex items-center justify-center shrink-0">
                          {initials}
                        </div>
                        <div className="min-w-0">
                          <h4 className="font-label-md text-label-md text-primary font-bold truncate">
                            {rev.name}
                          </h4>
                          <p className="text-[11px] text-on-surface-variant truncate">
                            {rev.role}
                          </p>
                        </div>
                      </div>
                      <a
                        href={CONTACT_INFO.googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Google Maps"
                        className="text-on-surface-variant/60 hover:text-primary transition shrink-0"
                      >
                        <span className="material-symbols-outlined text-[18px]">
                          travel_explore
                        </span>
                      </a>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-0.5 text-[#FBBC04] text-sm tracking-tight">
                        {"★".repeat(rev.rating || 5)}
                      </div>
                      <span className="text-[11px] text-on-surface-variant/75">
                        {rev.date}
                      </span>
                    </div>

                    <p className="font-body-sm text-body-sm text-on-surface leading-relaxed">
                      “{rev.text}”
                    </p>
                  </div>

                  <div className="pt-2.5 border-t border-outline-variant/20 flex items-center justify-between text-[11px] text-surface-tint font-medium">
                    <span className="inline-flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">
                        verified
                      </span>
                      Google Maps · Riviera Maya
                    </span>
                    <a
                      href={CONTACT_INFO.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#C86D51] hover:underline font-semibold"
                    >
                      {dict.reviews.ctaMaps} →
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. COMPLIMENTARY TERRA CHECK BOOKING SECTION */}
      <section
        className="max-w-5xl mx-auto w-full px-4 sm:px-6 py-10"
        id="booking-form"
      >
        <div className="rounded-3xl bg-[#F6F3EC] shadow-luxury border border-brand-green/15 overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          {/* Left Panel: Architectural Context & Diagnostic Checklist */}
          <div className="lg:col-span-5 bg-brand-green text-brand-sand p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">
            <img
              src="/images/services/terra-agua.jpg"
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover object-center opacity-25 pointer-events-none"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0d2620]/90 via-[#1A3C34]/92 to-[#091b16]/98 pointer-events-none" />

            <div className="space-y-4 relative z-10">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-terracotta px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow-sm">
                {dict.terraCheck.badge}
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white leading-tight">
                {dict.terraCheck.title}
              </h2>
              <p className="text-xs sm:text-sm text-brand-sand/90 leading-relaxed">
                {dict.terraCheck.subtitle}
              </p>

              <div className="pt-3 space-y-2 border-t border-white/15">
                <p className="text-[11px] font-bold uppercase tracking-widest text-brand-terracotta-light pb-1">
                  {lang === "es"
                    ? "¿Qué revisamos en tu Terra Check?"
                    : lang === "fr"
                    ? "Que vérifions-nous lors du Terra Check ?"
                    : lang === "it"
                    ? "Cosa controlliamo nel tuo Terra Check?"
                    : "What's included in your Terra Check?"}
                </p>
                <div className="space-y-2">
                  {(inspectionPointsMap[lang] || inspectionPointsMap.es).map(
                    (pt, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 text-xs text-white/95 bg-white/[0.06] backdrop-blur-sm border border-white/10 rounded-xl px-3 py-2"
                      >
                        <CheckCircle className="w-4 h-4 text-brand-terracotta shrink-0 mt-0.5" />
                        <span className="leading-snug">{pt}</span>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/15 space-y-2.5 relative z-10">
              <div className="grid grid-cols-2 gap-2.5 text-xs">
                <div className="flex items-center gap-2 bg-white/[0.07] rounded-xl px-3 py-2 border border-white/10">
                  <Camera className="w-4 h-4 text-brand-terracotta shrink-0" />
                  <span className="font-medium text-white">360° + Drone AFAC</span>
                </div>
                <div className="flex items-center gap-2 bg-white/[0.07] rounded-xl px-3 py-2 border border-white/10">
                  <Clock className="w-4 h-4 text-brand-terracotta shrink-0" />
                  <span className="font-medium text-white">
                    {lang === "es" ? "Reporte en 48 h" : "Report in 48 hrs"}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-[11px] text-brand-sand/75 px-1">
                <MapPin className="w-3.5 h-3.5 text-brand-terracotta shrink-0" />
                <span className="truncate">{CONTACT_INFO.addressLine}</span>
              </div>
            </div>
          </div>

          {/* Right Panel: Unified LeadForm */}
          <div className="lg:col-span-7 p-6 sm:p-8 bg-[#F6F3EC] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-brand-green/10">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-brand-terracotta/15 flex items-center justify-center text-brand-terracotta">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-brand-green/80">
                    {lang === "es"
                      ? "Atención Directa · Playa · Tulum · Puerto Morelos"
                      : "Direct Dispatch · Playa · Tulum · Puerto Morelos"}
                  </span>
                </div>
                <a
                  href={CONTACT_INFO.whatsappBase}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-brand-terracotta hover:underline"
                >
                  WhatsApp 24/7
                </a>
              </div>

              <LeadForm lang={lang} dict={dict} compact />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
