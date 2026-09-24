"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import AppIcon from "./AppIcon";
import type { Locale } from "@/lib/i18n/dictionaries";

export default function CookieConsent({
  lang,
  dict,
}: {
  lang: Locale;
  dict: any;
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("terra_maya_cookie_consent_v2");
      if (!saved) {
        setVisible(true);
      }
    } catch {
      // ignore storage errors
    }
  }, []);

  const handleConsent = (mode: "all" | "essential") => {
    try {
      localStorage.setItem(
        "terra_maya_cookie_consent_v2",
        JSON.stringify({
          mode,
          ad_storage: mode === "all" ? "granted" : "denied",
          analytics_storage: mode === "all" ? "granted" : "denied",
          ad_user_data: mode === "all" ? "granted" : "denied",
          ad_personalization: mode === "all" ? "granted" : "denied",
          timestamp: new Date().toISOString(),
        })
      );
    } catch {
      // ignore
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="region"
      aria-label="Cookie Consent Banner"
      className="fixed bottom-[72px] md:bottom-4 left-3 right-3 md:left-6 md:right-auto md:max-w-md z-50 bg-surface-container-lowest/98 backdrop-blur-xl border border-outline-variant/40 rounded-2xl p-3.5 sm:p-4 shadow-2xl text-on-surface"
    >
      <div className="flex items-start gap-2.5 sm:gap-3">
        <AppIcon name="cookie" className="w-5 h-5 text-primary mt-0.5" />
        <div className="space-y-2 text-xs min-w-0">
          <p className="text-xs font-bold text-primary">
            {dict.legal.cookiesTitle}
          </p>
          <p className="text-[11px] sm:text-xs text-on-surface-variant leading-relaxed">
            {dict.legal.cookieBannerText}{" "}
            <Link
              href={`/${lang}/legal/privacy`}
              className="text-primary font-semibold underline"
            >
              {dict.legal.privacyTitle}
            </Link>
            .
          </p>
          <div className="flex flex-wrap items-center gap-2 pt-0.5">
            <button
              type="button"
              onClick={() => handleConsent("all")}
              className="px-3.5 py-2 rounded-xl bg-primary text-on-primary text-xs font-semibold hover:bg-primary-container transition"
            >
              {dict.legal.acceptAll}
            </button>
            <button
              type="button"
              onClick={() => handleConsent("essential")}
              className="px-3.5 py-2 rounded-xl bg-surface-container text-on-surface text-xs font-semibold hover:bg-surface-container-high transition"
            >
              {dict.legal.essentialOnly}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
