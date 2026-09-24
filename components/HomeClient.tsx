"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTerraCheck } from "./TerraCheckModal";
import { CONTACT_INFO, type Locale } from "@/lib/i18n/dictionaries";

const divisionIcons: Record<string, { icon: string; color: string; badgeClass: string }> = {
  "terra-agua": {
    icon: "water_lux",
    color: "text-surface-tint",
    badgeClass: "bg-surface-container-low text-surface-tint",
  },
  "terra-verde": {
    icon: "potted_plant",
    color: "text-primary-container",
    badgeClass: "bg-secondary-container text-on-secondary-container",
  },
  "terra-clean": {
    icon: "cleaning_services",
    color: "text-surface-tint",
    badgeClass: "bg-surface-container-low text-primary-container",
  },
  "terra-textil": {
    icon: "iron",
    color: "text-tertiary",
    badgeClass: "bg-surface-container-low text-on-surface",
  },
  "terra-shield": {
    icon: "verified_user",
    color: "text-surface-tint",
    badgeClass: "bg-tertiary-fixed text-on-tertiary-fixed",
  },
  "terra-build-carpinteria": {
    icon: "carpenter",
    color: "text-primary",
    badgeClass: "bg-secondary-container text-on-secondary-container",
  },
  "terra-build-albanileria": {
    icon: "format_paint",
    color: "text-primary",
    badgeClass: "bg-secondary-container text-on-secondary-container",
  },
};

export default function HomeClient({ lang, dict }: { lang: Locale; dict: any }) {
  const { openTerraCheck } = useTerraCheck();
  const [activeSegmentIdx, setActiveSegmentIdx] = useState<number>(0);
  const [bookingSubmitted, setBookingSubmitted] = useState(false);
  const [selectedDivisions, setSelectedDivisions] = useState<string[]>(["terra-agua"]);

  const toggleDivision = (id: string) => {
    setSelectedDivisions((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const segmentIcons = ["vpn_key", "domain", "hotel", "architecture"];
  const segmentDetailIcons = ["lock_reset", "apartment", "hotel_class", "verified"];
  const activeSegment = dict.audience.segments[activeSegmentIdx] || dict.audience.segments[0];

  const handleInlineBookingSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setBookingSubmitted(true);
    setTimeout(() => {
      setBookingSubmitted(false);
    }, 6000);
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

      {/* MAIN CONTENT CONTAINER (Responsive Mobile + Tablet + Desktop) */}
      <div className="max-w-7xl mx-auto w-full">
        {/* 2. SEGMENT SELECTOR TABS */}
        <section className="w-full px-4 sm:px-6 pt-6 pb-2">
          <div className="bg-surface-container-low p-1.5 rounded-2xl grid grid-cols-2 sm:grid-cols-4 gap-1 shadow-sm">
            {dict.audience.segments.map((seg: any, idx: number) => {
              const isActive = activeSegmentIdx === idx;
              return (
                <button
                  key={seg.id}
                  type="button"
                  onClick={() => setActiveSegmentIdx(idx)}
                  className={`py-2.5 px-2 rounded-xl text-center font-label-sm text-label-sm transition-all flex flex-col items-center gap-1 ${
                    isActive
                      ? "bg-surface-container-lowest text-primary shadow-sm font-semibold"
                      : "text-on-surface-variant hover:text-primary"
                  }`}
                >
                  <span className="material-symbols-outlined text-[18px]">
                    {segmentIcons[idx] || "vpn_key"}
                  </span>
                  <span className="truncate max-w-full">{seg.title}</span>
                </button>
              );
            })}
          </div>

          {/* Dynamic Segment Message Box */}
          <motion.div
            key={activeSegment.id}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="mt-3 p-4 sm:p-5 bg-surface-container-lowest rounded-xl shadow-card flex flex-col sm:flex-row sm:items-center justify-between gap-4 border border-outline-variant/20"
          >
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container flex-shrink-0">
                <span className="material-symbols-outlined text-[18px]">
                  {segmentDetailIcons[activeSegmentIdx] || "lock_reset"}
                </span>
              </div>
              <div className="flex flex-col">
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

        {/* 4. SEVEN SPECIALIZED DIVISIONS */}
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4">
            {dict.services.items.map((srv: any, idx: number) => {
              const meta = divisionIcons[srv.id] || divisionIcons["terra-agua"];
              return (
                <article
                  key={srv.id}
                  className={`bg-surface-container-lowest rounded-2xl p-4 sm:p-5 shadow-card border border-outline-variant/20 relative overflow-hidden hover:border-primary/30 transition ${
                    idx === 0 ? "md:col-span-2" : ""
                  }`}
                >
                  <div className="flex items-start gap-3.5">
                    <div
                      className={`w-11 h-11 rounded-xl bg-surface-container flex items-center justify-center ${meta.color} flex-shrink-0`}
                    >
                      <span className="material-symbols-outlined text-[24px]">
                        {meta.icon}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <Link
                          href={`/${lang}/services/${srv.id}`}
                          className="font-title-lg text-title-lg text-primary hover:underline truncate"
                        >
                          {srv.brand}
                        </Link>
                        <span
                          className={`px-2.5 py-0.5 rounded-full font-label-sm text-label-sm shrink-0 ${meta.badgeClass}`}
                        >
                          {srv.badge}
                        </span>
                      </div>
                      <p className="font-label-md text-label-md text-on-surface-variant mt-0.5 font-medium">
                        {srv.category}
                      </p>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 leading-relaxed">
                        {srv.fullDesc}
                      </p>
                      <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
                        <div className="flex flex-wrap items-center gap-3 text-on-surface-variant font-label-sm text-label-sm">
                          {(srv.checks || []).map((chk: string, cIdx: number) => (
                            <span key={cIdx} className="flex items-center gap-1">
                              <span className="material-symbols-outlined text-[15px] text-surface-tint">
                                check_circle
                              </span>
                              {chk}
                            </span>
                          ))}
                        </div>
                        <Link
                          href={`/${lang}/services/${srv.id}`}
                          className="font-label-sm text-label-sm text-brand-terracotta font-semibold hover:underline"
                        >
                          + Info →
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

      {/* 5. INSTITUTIONAL TRUST BADGES */}
      <section className="w-full py-8 bg-surface-container-low my-2 border-y border-outline-variant/25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-surface-tint text-[22px]">
              account_balance
            </span>
            <h3 className="font-title-lg text-title-lg text-primary">
              {dict.compliance.title}
            </h3>
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant max-w-3xl">
            {dict.compliance.subtitle}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-2">
            {dict.compliance.badges.map((badge: any, idx: number) => {
              const badgeIcons = [
                "policy",
                "badge",
                "security",
                "verified_user",
                "water_drop",
                "flight",
              ];
              return (
                <div
                  key={idx}
                  className="bg-surface-container-lowest rounded-xl p-3.5 flex items-center gap-3 shadow-sm border border-outline-variant/20"
                >
                  <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary flex-shrink-0">
                    <span className="material-symbols-outlined text-[22px]">
                      {badgeIcons[idx] || "verified"}
                    </span>
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="font-label-md text-label-md text-primary font-semibold truncate">
                      {badge.title}
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2 text-xs">
                      {badge.desc}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. COMPLIMENTARY TERRA CHECK BOOKING FORM */}
      <section
        className="max-w-3xl mx-auto w-full px-4 sm:px-6 py-8"
        id="booking-form"
      >
        <div className="bg-surface-container-lowest rounded-3xl p-5 sm:p-8 shadow-md border border-outline-variant/30">
          <div className="flex flex-col gap-1 text-left">
            <span
              className="font-label-sm text-label-sm uppercase tracking-widest font-semibold"
              style={{ color: "#C86D51" }}
            >
              {dict.terraCheck.badge}
            </span>
            <h2 className="font-headline-sm text-headline-sm text-primary">
              {dict.terraCheck.title}
            </h2>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              {dict.terraCheck.subtitle}
            </p>
          </div>

          <form
            className="mt-5 flex flex-col gap-4"
            onSubmit={handleInlineBookingSubmit}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-label-sm text-label-sm text-on-surface-variant mb-1">
                  {dict.terraCheck.fields.name}
                </label>
                <input
                  className="w-full h-11 px-3.5 rounded-xl bg-surface-container-lowest border border-outline-variant/60 text-on-surface font-body-md text-body-md shadow-sm outline-none focus:bg-surface-container-low transition-all"
                  placeholder={dict.terraCheck.fields.namePlaceholder}
                  required
                  type="text"
                />
              </div>

              <div>
                <label className="block font-label-sm text-label-sm text-on-surface-variant mb-1">
                  {dict.terraCheck.fields.location}
                </label>
                <select
                  defaultValue=""
                  className="w-full h-11 px-3 rounded-xl bg-surface-container-lowest border border-outline-variant/60 text-on-surface font-body-md text-body-md shadow-sm outline-none focus:bg-surface-container-low transition-all"
                  required
                >
                  <option disabled value="">
                    --
                  </option>
                  {dict.terraCheck.fields.locations.map((loc: string) => (
                    <option key={loc} value={loc}>
                      {loc}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block font-label-sm text-label-sm text-on-surface-variant mb-1">
                {dict.terraCheck.fields.phone}
              </label>
              <div className="flex items-center gap-2">
                <span className="h-11 px-3.5 bg-surface-container-low text-on-surface-variant rounded-xl flex items-center font-label-sm text-label-sm shadow-sm font-semibold border border-outline-variant/40">
                  +52
                </span>
                <input
                  className="w-full h-11 px-3.5 rounded-xl bg-surface-container-lowest border border-outline-variant/60 text-on-surface font-body-md text-body-md shadow-sm outline-none focus:bg-surface-container-low transition-all"
                  placeholder="984 175 0007"
                  required
                  type="tel"
                />
              </div>
            </div>

            <div>
              <label className="block font-label-sm text-label-sm text-on-surface-variant mb-1.5">
                {dict.terraCheck.fields.notes}
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-left">
                {dict.services.items.slice(0, 4).map((srv: any) => (
                  <label
                    key={srv.id}
                    className="flex items-center gap-2 p-2.5 bg-surface-container-low rounded-lg cursor-pointer hover:bg-surface-container transition"
                  >
                    <input
                      type="checkbox"
                      checked={selectedDivisions.includes(srv.id)}
                      onChange={() => toggleDivision(srv.id)}
                      className="accent-primary h-4 w-4 shrink-0"
                    />
                    <span className="font-label-sm text-label-sm text-on-surface truncate">
                      {srv.brand}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <button
              className="w-full h-12 mt-2 rounded-xl text-on-tertiary font-label-lg text-label-lg shadow-md hover:opacity-95 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
              style={{ backgroundColor: "#C86D51" }}
              type="submit"
            >
              <span className="material-symbols-outlined text-[20px]">
                calendar_month
              </span>
              <span>{dict.terraCheck.fields.submit}</span>
            </button>

            {bookingSubmitted && (
              <div className="p-3.5 rounded-xl bg-surface-container text-surface-tint font-label-md text-label-md flex items-center gap-2">
                <span className="material-symbols-outlined text-[20px]">
                  check_circle
                </span>
                <span>{dict.terraCheck.success.desc}</span>
              </div>
            )}

            <div className="relative flex py-1 items-center">
              <div className="flex-grow bg-surface-variant/60 h-px"></div>
              <span className="flex-shrink mx-3 text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">
                WhatsApp Directo
              </span>
              <div className="flex-grow bg-surface-variant/60 h-px"></div>
            </div>

            {/* WhatsApp Quick Link (+52 1 984 175 0007) */}
            <a
              className="w-full h-12 rounded-xl bg-surface-container-low text-primary font-label-lg text-label-lg flex items-center justify-center gap-2 hover:bg-surface-container transition-all active:scale-[0.98]"
              href={`${CONTACT_INFO.whatsappBase}?text=${encodeURIComponent(
                "Hola Terra Maya, deseo agendar un Terra Check gratuito para mi propiedad en la Riviera Maya."
              )}`}
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="material-symbols-outlined text-[20px] text-surface-tint">
                chat
              </span>
              <span>WhatsApp: {CONTACT_INFO.phoneDisplay}</span>
            </a>

            <div className="flex flex-wrap items-center justify-center gap-4 text-on-surface-variant font-label-sm text-label-sm pt-1">
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">
                  lock
                </span>
                NDA · LFPDPPP · GDPR
              </span>
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">
                  location_on
                </span>
                {CONTACT_INFO.addressLine}
              </span>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
