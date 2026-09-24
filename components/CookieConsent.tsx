"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
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
      className="fixed bottom-20 md:bottom-4 left-4 right-4 md:left-6 md:right-auto md:max-w-md z-50 bg-surface-container-lowest/95 backdrop-blur-xl border border-outline-variant/40 rounded-2xl p-4 shadow-2xl text-on-surface"
    >
      <div className="flex items-start gap-3">
        <span className="material-symbols-outlined text-primary text-[20px] shrink-0 mt-0.5">
          cookie
        </span>
        <div className="space-y-2.5 text-xs">
          <p className="font-label-md text-primary font-semibold">
            {dict.legal.cookiesTitle}
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            {dict.legal.cookieBannerText}{" "}
            <Link
              href={`/${lang}/legal/privacy`}
              className="text-primary font-semibold underline"
            >
              {dict.legal.privacyTitle}
            </Link>
            .
          </p>
          <div className="flex items-center gap-2 pt-1">
            <button
              type="button"
              onClick={() => handleConsent("all")}
              className="px-3.5 py-2 rounded-xl bg-primary text-on-primary font-label-sm text-label-sm hover:bg-primary-container transition"
            >
              {dict.legal.acceptAll}
            </button>
            <button
              type="button"
              onClick={() => handleConsent("essential")}
              className="px-3.5 py-2 rounded-xl bg-surface-container text-on-surface font-label-sm text-label-sm hover:bg-surface-container-high transition"
            >
              {dict.legal.essentialOnly}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
