"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTerraCheck } from "./TerraCheckModal";
import { SUPPORTED_LOCALES, type Locale } from "@/lib/i18n/dictionaries";

export default function Navbar({ lang, dict }: { lang: Locale; dict: any }) {
  const pathname = usePathname() || `/${lang}`;
  const { openTerraCheck } = useTerraCheck();

  const buildLangHref = (targetLang: Locale) => {
    if (pathname.startsWith(`/${lang}`)) {
      return pathname.replace(`/${lang}`, `/${targetLang}`);
    }
    return `/${targetLang}`;
  };

  const getSectionSubtitle = () => {
    if (pathname.includes("/portal")) return dict.nav.portal;
    if (pathname.includes("/services")) return dict.nav.services;
    if (pathname.includes("/pricing")) return dict.nav.pricing;
    if (pathname.includes("/solutions")) return dict.nav.solutions;
    return dict.nav.home;
  };

  const navItems = [
    {
      href: `/${lang}`,
      label: dict.nav.home,
      icon: "villa",
      exact: true,
    },
    {
      href: `/${lang}/services`,
      label: dict.nav.services,
      icon: "home_repair_service",
    },
    {
      href: `/${lang}/solutions`,
      label: dict.nav.solutions,
      icon: "domain",
      desktopOnly: true,
    },
    {
      href: `/${lang}/pricing`,
      label: dict.nav.pricing,
      icon: "payments",
    },
    {
      href: `/${lang}/portal`,
      label: dict.nav.portal,
      icon: "vpn_key",
    },
  ];

  const isActive = (href: string, exact?: boolean) => {
    if (exact) return pathname === href;
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* TOP FIXED HEADER (Native Mobile + Adaptive Tablet/PC) */}
      <header className="fixed top-0 w-full z-50 pt-safe bg-surface/90 backdrop-blur-xl shadow-[0_2px_8px_-2px_rgba(20,30,27,0.04)] border-b border-outline-variant/25">
        <div className="max-w-7xl mx-auto h-16 px-3 sm:px-6 flex items-center justify-between gap-2">
          {/* Brand Logo & Dynamic Subtitle */}
          <Link href={`/${lang}`} className="flex items-center gap-2 shrink-0">
            <img
              alt="Terra Maya Logo"
              className="h-8 sm:h-9 w-auto object-contain"
              src="/logo.png"
            />
            <div className="flex flex-col">
              <span className="font-title-lg text-base sm:text-title-lg text-primary leading-none tracking-tight">
                Terra Maya
              </span>
              <span className="font-label-sm text-[10px] text-on-surface-variant font-medium mt-0.5 truncate max-w-[120px] sm:max-w-none">
                {getSectionSubtitle()}
              </span>
            </div>
          </Link>

          {/* Desktop & Tablet Center Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-surface-container-low p-1 rounded-2xl border border-outline-variant/20">
            {navItems.map((item) => {
              const active = isActive(item.href, item.exact);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`inline-flex items-center gap-1.5 px-3 lg:px-3.5 py-1.5 rounded-xl font-label-md text-label-md transition-all ${
                    active
                      ? "bg-primary-container text-on-primary font-semibold shadow-sm"
                      : "text-on-surface-variant hover:text-primary hover:bg-surface-container-lowest"
                  }`}
                >
                  <span className="material-symbols-outlined text-[18px]">
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Right Controls: 4-Language Switcher (ES/EN/FR/IT) + Emergency CTA + Portal User */}
          <div className="flex items-center gap-1 sm:gap-1.5">
            <div
              role="group"
              aria-label="Language Selector"
              className="flex items-center bg-surface-container-low rounded-xl p-0.5 border border-outline-variant/25"
            >
              {SUPPORTED_LOCALES.map((loc) => {
                const isCurrent = loc === lang;
                return (
                  <Link
                    key={loc}
                    href={buildLangHref(loc)}
                    className={`min-h-[32px] px-1.5 sm:px-2 rounded-lg flex items-center justify-center font-label-sm text-[10px] uppercase tracking-wider transition-all ${
                      isCurrent
                        ? "bg-primary text-on-primary font-bold shadow-sm"
                        : "text-on-surface-variant hover:text-primary"
                    }`}
                  >
                    {loc}
                  </Link>
                );
              })}
            </div>

            <button
              type="button"
              onClick={() =>
                openTerraCheck({
                  notes: "Terra Check / Priority Dispatch (< 2h)",
                })
              }
              aria-label={dict.nav.cta}
              title={dict.nav.cta}
              className="min-h-[38px] min-w-[38px] sm:px-3 flex items-center justify-center gap-1.5 text-tertiary bg-tertiary-fixed rounded-full shadow-[0_1px_3px_rgba(74,69,62,0.08)] hover:bg-tertiary-fixed-dim transition-all"
            >
              <span className="material-symbols-outlined text-[19px]">
                emergency
              </span>
              <span className="hidden lg:inline font-label-sm text-label-sm font-bold uppercase tracking-wider">
                {dict.nav.cta}
              </span>
            </button>

            <Link
              href={`/${lang}/portal`}
              aria-label="Client Portal"
              className="w-9 h-9 rounded-full bg-primary hover:bg-primary-container flex items-center justify-center shadow-sm transition-colors shrink-0"
            >
              <span className="material-symbols-outlined text-on-primary text-[18px]">
                person
              </span>
            </Link>
          </div>
        </div>
      </header>

      {/* BOTTOM MOBILE TAB BAR (Native Mobile App Shell) */}
      <nav
        aria-label="Mobile Bottom Navigation"
        className="md:hidden fixed bottom-0 w-full z-50 pb-safe bg-surface-container-lowest/95 backdrop-blur-xl shadow-[0_-4px_16px_rgba(20,30,27,0.06)] border-t border-outline-variant/25"
      >
        <div className="flex justify-around items-center h-16 px-1">
          {navItems
            .filter((i) => !i.desktopOnly)
            .map((item) => {
              const active = isActive(item.href, item.exact);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`flex flex-col items-center justify-center min-w-[64px] min-h-[44px] px-2 py-1 transition-all gap-0.5 ${
                    active
                      ? "text-primary font-semibold relative after:content-[''] after:absolute after:bottom-1 after:w-1.5 after:h-1.5 after:rounded-full after:bg-brand-terracotta"
                      : "text-on-surface-variant hover:text-primary"
                  }`}
                >
                  <span className="material-symbols-outlined text-[22px]">
                    {item.icon}
                  </span>
                  <span className="font-label-sm text-[10px]">{item.label}</span>
                </Link>
              );
            })}
        </div>
      </nav>
    </>
  );
}
