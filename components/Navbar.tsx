"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Globe,
  ChevronDown,
  ChevronRight,
  ShieldCheck,
  Home,
  Wrench,
  Building2,
  CreditCard,
  KeyRound,
} from "lucide-react";
import { useTerraCheck } from "./TerraCheckModal";
import { SUPPORTED_LOCALES, CONTACT_INFO, type Locale } from "@/lib/i18n/dictionaries";

const LANGUAGE_LABELS: Record<Locale, { short: string; label: string }> = {
  es: { short: "ES", label: "Español" },
  en: { short: "EN", label: "English" },
  fr: { short: "FR", label: "Français" },
  it: { short: "IT", label: "Italiano" },
};

export default function Navbar({ lang, dict }: { lang: Locale; dict: any }) {
  const pathname = usePathname() || `/${lang}`;
  const { openTerraCheck } = useTerraCheck();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const langMenuRef = useRef<HTMLDivElement>(null);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setLangMenuOpen(false);
  }, [pathname]);

  // Close language dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        langMenuRef.current &&
        !langMenuRef.current.contains(e.target as Node)
      ) {
        setLangMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const buildLangHref = (targetLang: Locale) => {
    if (pathname.startsWith(`/${lang}`)) {
      return pathname.replace(`/${lang}`, `/${targetLang}`);
    }
    return `/${targetLang}`;
  };

  const defaultHeaderNote: Record<Locale, string> = {
    es: "Solicitud de Diagnóstico Terra Check Gratuito",
    en: "Complimentary Terra Check Diagnostic Request",
    fr: "Demande de Diagnostic Terra Check Gratuit",
    it: "Richiesta di Diagnosi Terra Check Gratuita",
  };

  const navItems = [
    {
      href: `/${lang}`,
      label: dict.nav.home,
      Icon: Home,
      exact: true,
    },
    {
      href: `/${lang}/services`,
      label: dict.nav.services,
      Icon: Wrench,
    },
    {
      href: `/${lang}/solutions`,
      label: dict.nav.solutions,
      Icon: Building2,
    },
    {
      href: `/${lang}/pricing`,
      label: dict.nav.pricing,
      Icon: CreditCard,
    },
    {
      href: `/${lang}/portal`,
      label: dict.nav.portal,
      Icon: KeyRound,
    },
  ];

  const isActive = (href: string, exact?: boolean) => {
    if (exact) return pathname === href;
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* TOP FIXED HEADER */}
      <header className="fixed top-0 left-0 right-0 w-full max-w-[100vw] z-50 pt-safe bg-surface/95 backdrop-blur-xl shadow-[0_2px_10px_-2px_rgba(20,30,27,0.06)] border-b border-outline-variant/25 box-border">
        <div className="max-w-7xl mx-auto w-full h-16 px-3.5 sm:px-6 flex items-center justify-between gap-2 box-border">
          {/* Brand Logo & Name */}
          <Link
            href={`/${lang}`}
            className="flex items-center gap-2 min-w-0 shrink"
          >
            <img
              alt="Terra Maya Logo"
              className="h-8 sm:h-9 w-auto object-contain shrink-0"
              src="/logo.png"
            />
            <div className="flex flex-col min-w-0">
              <span className="font-serif text-base sm:text-lg font-bold text-primary leading-none tracking-tight truncate">
                Terra Maya
              </span>
              <span className="hidden sm:block text-[10px] text-on-surface-variant font-medium mt-0.5 truncate">
                Facility &amp; Property Services
              </span>
            </div>
          </Link>

          {/* Desktop Center Navigation (All 5 Pages Visible) */}
          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex items-center gap-1 bg-surface-container-low p-1 rounded-2xl border border-outline-variant/25"
          >
            {navItems.map((item) => {
              const active = isActive(item.href, item.exact);
              const IconComp = item.Icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                    active
                      ? "bg-primary-container text-on-primary shadow-sm"
                      : "text-on-surface-variant hover:text-primary hover:bg-surface-container-lowest"
                  }`}
                >
                  <IconComp className="w-4 h-4 shrink-0" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Right Controls: Language Selector + Hamburger Menu */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {/* Compact Multilingual Dropdown Selector */}
            <div className="relative" ref={langMenuRef}>
              <button
                type="button"
                onClick={() => setLangMenuOpen((prev) => !prev)}
                aria-expanded={langMenuOpen}
                aria-label="Select Language"
                className="h-9 px-2.5 rounded-xl bg-surface-container-low hover:bg-surface-container border border-outline-variant/30 flex items-center gap-1 text-xs font-bold text-primary transition"
              >
                <Globe className="w-3.5 h-3.5 text-brand-terracotta shrink-0" />
                <span className="uppercase">{lang}</span>
                <ChevronDown
                  className={`w-3 h-3 text-on-surface-variant transition-transform ${
                    langMenuOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {langMenuOpen && (
                <div className="absolute right-0 mt-2 w-40 rounded-2xl bg-white shadow-xl border border-outline-variant/30 py-1.5 z-50">
                  {SUPPORTED_LOCALES.map((loc) => {
                    const isCurrent = loc === lang;
                    const info = LANGUAGE_LABELS[loc];
                    return (
                      <Link
                        key={loc}
                        href={buildLangHref(loc)}
                        onClick={() => setLangMenuOpen(false)}
                        className={`flex items-center justify-between px-3.5 py-2 text-xs transition ${
                          isCurrent
                            ? "bg-primary/10 text-primary font-bold"
                            : "text-on-surface hover:bg-surface-container-low"
                        }`}
                      >
                        <span>{info.label}</span>
                        <span className="text-[10px] font-bold uppercase px-1.5 py-0.5 rounded bg-surface-container text-primary">
                          {info.short}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Desktop Terra Check CTA Button */}
            <button
              type="button"
              onClick={() =>
                openTerraCheck({
                  notes: defaultHeaderNote[lang] || defaultHeaderNote.es,
                })
              }
              className="hidden md:inline-flex h-9 px-3.5 items-center justify-center gap-1.5 text-white bg-brand-terracotta hover:bg-brand-terracotta-dark rounded-xl shadow-sm text-xs font-bold uppercase tracking-wider transition-all"
            >
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>{dict.nav.cta}</span>
            </button>

            {/* Hamburger Menu Button (Visible on Mobile & Tablet <1024px) */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-label={
                mobileMenuOpen ? "Cerrar menú" : "Abrir menú de navegación"
              }
              className="lg:hidden h-9 px-3 rounded-xl bg-primary text-on-primary flex items-center justify-center gap-1.5 text-xs font-bold shadow-sm active:scale-95 transition shrink-0"
            >
              {mobileMenuOpen ? (
                <X className="w-4 h-4 shrink-0" />
              ) : (
                <Menu className="w-4 h-4 shrink-0" />
              )}
              <span>{lang === "es" ? "Menú" : "Menu"}</span>
            </button>
          </div>
        </div>

        {/* HAMBURGER MENU DRAWER (All Site Pages + 7 Services + Language Selector + Direct CTA) */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-outline-variant/25 bg-white shadow-2xl max-h-[calc(100vh-4rem)] overflow-y-auto w-full">
            <div className="max-w-7xl mx-auto px-4 py-5 space-y-5">
              {/* 1. Main Pages Navigation */}
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-brand-terracotta mb-2 px-1">
                  {lang === "es"
                    ? "Páginas del Sitio"
                    : lang === "fr"
                    ? "Pages du Site"
                    : lang === "it"
                    ? "Pagine del Sito"
                    : "Site Navigation"}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                  {navItems.map((item) => {
                    const active = isActive(item.href, item.exact);
                    const IconComp = item.Icon;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`flex items-center justify-between px-3.5 py-3 rounded-xl text-sm font-semibold transition ${
                          active
                            ? "bg-brand-green text-white shadow-sm"
                            : "bg-surface-container-low text-primary hover:bg-surface-container"
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <IconComp className="w-4 h-4 shrink-0" />
                          <span>{item.label}</span>
                        </div>
                        <ChevronRight className="w-4 h-4 opacity-70" />
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* 2. Direct Links to the 7 Specialized Services */}
              <div className="pt-3 border-t border-outline-variant/20">
                <p className="text-[10px] font-bold uppercase tracking-widest text-brand-terracotta mb-2 px-1">
                  {dict.services.eyebrow}
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5">
                  {dict.services.items.map((srv: any) => (
                    <Link
                      key={srv.id}
                      href={`/${lang}/services/${srv.id}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className="px-3 py-2 rounded-lg bg-[#F6F3EC] hover:bg-brand-sand text-xs font-semibold text-brand-green truncate transition"
                    >
                      {srv.brand}
                    </Link>
                  ))}
                </div>
              </div>

              {/* 3. Multilingual Selector Inside Hamburger Menu */}
              <div className="pt-3 border-t border-outline-variant/20">
                <p className="text-[10px] font-bold uppercase tracking-widest text-brand-terracotta mb-2 px-1">
                  {lang === "es"
                    ? "Idioma / Language"
                    : "Language / Idioma"}
                </p>
                <div className="grid grid-cols-4 gap-2">
                  {SUPPORTED_LOCALES.map((loc) => {
                    const isCurrent = loc === lang;
                    const info = LANGUAGE_LABELS[loc];
                    return (
                      <Link
                        key={loc}
                        href={buildLangHref(loc)}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`py-2 px-2 rounded-xl text-center text-xs font-bold transition border ${
                          isCurrent
                            ? "bg-primary text-white border-primary shadow-sm"
                            : "bg-surface-container-low text-primary border-outline-variant/25 hover:bg-surface-container"
                        }`}
                      >
                        <span className="block uppercase">{info.short}</span>
                        <span className="block text-[10px] font-normal opacity-80 truncate">
                          {info.label}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* 4. Direct Action Buttons */}
              <div className="pt-3 border-t border-outline-variant/20 flex flex-col sm:flex-row gap-2.5">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openTerraCheck({
                      notes: defaultHeaderNote[lang] || defaultHeaderNote.es,
                    });
                  }}
                  className="w-full py-3 px-4 rounded-xl bg-brand-terracotta hover:bg-brand-terracotta-dark text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md"
                >
                  <ShieldCheck className="w-4 h-4 shrink-0" />
                  <span>{dict.nav.cta}</span>
                </button>
                <a
                  href={CONTACT_INFO.whatsappBase}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-brand-green text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2"
                >
                  <span>WhatsApp 24/7</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* BOTTOM MOBILE TAB BAR (All 5 Core Pages Accessible in 1 Tap on Mobile) */}
      <nav
        aria-label="Mobile Bottom Navigation"
        className="lg:hidden fixed bottom-0 left-0 right-0 w-full max-w-[100vw] z-40 pb-safe bg-surface-container-lowest/95 backdrop-blur-xl shadow-[0_-4px_16px_rgba(20,30,27,0.06)] border-t border-outline-variant/25 box-border"
      >
        <div className="grid grid-cols-5 items-center h-16 px-1 w-full">
          {navItems.map((item) => {
            const active = isActive(item.href, item.exact);
            const IconComp = item.Icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`flex flex-col items-center justify-center min-h-[48px] min-w-0 px-0.5 py-1 transition-all gap-1 ${
                  active
                    ? "text-primary font-bold relative after:content-[''] after:absolute after:bottom-0.5 after:w-1.5 after:h-1.5 after:rounded-full after:bg-brand-terracotta"
                    : "text-on-surface-variant hover:text-primary font-medium"
                }`}
              >
                <IconComp className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                <span className="text-[10px] leading-none truncate max-w-full">
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
