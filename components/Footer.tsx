"use client";

import React from "react";
import Link from "next/link";
import { CONTACT_INFO, type Locale } from "@/lib/i18n/dictionaries";

export default function Footer({ lang, dict }: { lang: Locale; dict: any }) {
  return (
    <footer className="w-full px-4 sm:px-6 py-12 bg-surface-container-lowest border-t border-outline-variant/25">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Top Row: Brand, Address & Direct Contact */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 text-left">
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5">
              <img
                src="/logo.png"
                alt="Terra Maya Logo"
                className="h-9 w-auto object-contain"
              />
              <div>
                <span className="block font-title-lg text-title-lg text-primary leading-none">
                  Terra Maya
                </span>
                <span className="block font-label-sm text-[10px] uppercase tracking-widest text-surface-tint mt-0.5">
                  Facility &amp; Property Services
                </span>
              </div>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant max-w-md leading-relaxed">
              {dict.footer.tagline}
            </p>
            <div className="space-y-1.5 pt-1 font-body-sm text-xs text-on-surface-variant">
              <p className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[16px] text-primary shrink-0 mt-0.5">
                  location_on
                </span>
                <span>{CONTACT_INFO.addressLine}</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px] text-primary shrink-0">
                  call
                </span>
                <a
                  href={`${CONTACT_INFO.whatsappBase}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-primary hover:underline"
                >
                  WhatsApp Directo: {CONTACT_INFO.phoneDisplay}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px] text-primary shrink-0">
                  mail
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
            <h4 className="font-label-sm text-label-sm uppercase tracking-widest text-brand-terracotta">
              {dict.services.eyebrow}
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 font-body-sm text-xs text-on-surface-variant">
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
            <h4 className="font-label-sm text-label-sm uppercase tracking-widest text-brand-terracotta">
              Legal &amp; Compliance
            </h4>
            <ul className="space-y-1.5 font-body-sm text-xs text-on-surface-variant">
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
        <div className="pt-6 border-t border-outline-variant/25 flex flex-col sm:flex-row items-center justify-between gap-3 text-on-surface-variant/75 font-label-sm text-label-sm">
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
