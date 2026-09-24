"use client";

import React from "react";
import Link from "next/link";
import AppIcon from "./AppIcon";
import { CONTACT_INFO, type Locale } from "@/lib/i18n/dictionaries";

export default function Footer({ lang, dict }: { lang: Locale; dict: any }) {
  return (
    <footer className="w-full px-4 sm:px-6 py-10 sm:py-12 bg-surface-container-lowest border-t border-outline-variant/25">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Top Row: Brand, Address & Direct Contact */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 text-left">
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5">
              <img
                src="/logo.png"
                alt="Terra Maya Logo"
                className="h-9 w-auto object-contain shrink-0"
              />
              <div>
                <span className="block font-serif text-lg font-bold text-primary leading-none">
                  Terra Maya
                </span>
                <span className="block text-[10px] font-bold uppercase tracking-widest text-surface-tint mt-0.5">
                  Facility &amp; Property Services
                </span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-on-surface-variant max-w-md leading-relaxed">
              {dict.footer.tagline}
            </p>
            <div className="space-y-2 pt-1 text-xs text-on-surface-variant">
              <p className="flex items-start gap-2">
                <AppIcon
                  name="location_on"
                  className="w-4 h-4 text-primary mt-0.5"
                />
                <span className="leading-snug">{CONTACT_INFO.addressLine}</span>
              </p>
              <p className="flex items-center gap-2">
                <AppIcon name="call" className="w-4 h-4 text-primary" />
                <a
                  href={CONTACT_INFO.whatsappBase}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-primary hover:underline"
                >
                  WhatsApp 24/7
                </a>
              </p>
              <p className="flex items-center gap-2">
                <span className="w-4 h-4 inline-flex items-center justify-center text-primary font-bold text-xs shrink-0">
                  @
                </span>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="hover:underline"
                >
                  {CONTACT_INFO.email}
                </a>
              </p>
            </div>
          </div>

          {/* 7 Divisions Links */}
          <div className="md:col-span-4 space-y-2.5">
            <h4 className="text-[11px] font-bold uppercase tracking-widest text-brand-terracotta">
              {dict.services.eyebrow}
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-on-surface-variant">
              {dict.services.items.map((srv: any) => (
                <li key={srv.id}>
                  <Link
                    href={`/${lang}/services/${srv.id}`}
                    className="hover:text-primary hover:underline transition"
                  >
                    • {srv.brand}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation & Legal Links (Google & Meta Ads Compliant) */}
          <div className="md:col-span-3 space-y-2.5">
            <h4 className="text-[11px] font-bold uppercase tracking-widest text-brand-terracotta">
              Legal &amp; Compliance
            </h4>
            <ul className="space-y-1.5 text-xs text-on-surface-variant">
              <li>
                <Link
                  href={`/${lang}/legal/privacy`}
                  className="hover:text-primary hover:underline"
                >
                  {dict.legal.privacyTitle}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${lang}/legal/terms`}
                  className="hover:text-primary hover:underline"
                >
                  {dict.legal.termsTitle}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${lang}/legal/cookies`}
                  className="hover:text-primary hover:underline"
                >
                  {dict.legal.cookiesTitle}
                </Link>
              </li>
              <li className="pt-1">
                <Link
                  href={`/${lang}/pricing`}
                  className="font-semibold text-primary hover:underline"
                >
                  {dict.nav.pricing} →
                </Link>
              </li>
              <li>
                <Link
                  href={`/${lang}/portal`}
                  className="font-semibold text-primary hover:underline"
                >
                  {dict.nav.portal} (TLS 1.3) →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Corridor Bar */}
        <div className="pt-6 border-t border-outline-variant/25 flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left text-on-surface-variant/75 text-[11px]">
          <span>
            © {new Date().getFullYear()} Terra Maya Asset Care Management S.A. de
            C.V. · {dict.footer.rights}
          </span>
          <span>{CONTACT_INFO.corridorLine}</span>
        </div>
      </div>
    </footer>
  );
}
