"use client";

import React from "react";
import { CONTACT_INFO, type Locale } from "@/lib/i18n/dictionaries";

export default function WhatsAppButton({ lang }: { lang: Locale }) {
  const messages: Record<Locale, string> = {
    es: "Hola Terra Maya 🌿 Deseo información o agendar un diagnóstico Terra Check gratuito para mi propiedad en la Riviera Maya.",
    en: "Hi Terra Maya 🌿 I'd like information or to schedule a complimentary Terra Check diagnostic for my property in the Riviera Maya.",
    fr: "Bonjour Terra Maya 🌿 Je souhaite obtenir des informations ou planifier un diagnostic Terra Check gratuit pour ma propriété sur la Riviera Maya.",
    it: "Ciao Terra Maya 🌿 Vorrei ricevere informazioni o prenotare una diagnosi gratuita Terra Check per la mia proprietà in Riviera Maya.",
  };

  const whatsappUrl = `${CONTACT_INFO.whatsappBase}?text=${encodeURIComponent(
    messages[lang] || messages.es
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp 24/7 Terra Maya"
      className="fixed bottom-20 md:bottom-6 right-4 md:right-6 z-40 group flex items-center gap-2 rounded-full bg-[#1A3C34] hover:bg-[#C86D51] text-white px-4 py-3 shadow-2xl border border-secondary-container/40 transition-all duration-300 hover:scale-105 active:scale-95"
    >
      <span className="relative flex h-2.5 w-2.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#25D366]"></span>
      </span>
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
        className="w-5 h-5 text-[#25D366] group-hover:text-white transition-colors shrink-0"
      >
        <path d="M12.031 2c-5.516 0-9.969 4.453-9.969 9.969 0 1.758.459 3.475 1.331 4.988L2 22l5.163-1.354a9.927 9.927 0 0 0 4.868 1.269h.004c5.515 0 9.969-4.453 9.969-9.969 0-2.664-1.037-5.168-2.92-7.052A9.906 9.906 0 0 0 12.031 2zm5.822 14.279c-.246.693-1.43 1.326-1.993 1.411-.51.077-1.155.109-1.864-.116-.43-.136-.982-.318-1.69-.624-2.976-1.285-4.918-4.281-5.067-4.479-.148-.198-1.21-1.61-1.21-3.071 0-1.461.765-2.179 1.037-2.476.272-.297.593-.371.79-.371.198 0 .395.002.568.01.182.009.426-.069.667.509.247.594.84 2.055.914 2.203.074.149.123.322.025.52-.099.198-.148.322-.296.495-.148.173-.312.387-.445.52-.148.148-.303.309-.13.606.173.297.768 1.268 1.65 2.053 1.134 1.011 2.09 1.325 2.386 1.473.297.148.47.124.642-.074.173-.198.741-.866.939-1.163.198-.297.395-.248.667-.149.272.099 1.729.816 2.025.965.297.148.494.223.568.346.074.124.074.718-.172 1.411z" />
      </svg>
      <span className="font-label-sm text-xs uppercase tracking-wider font-bold leading-none">
        24/7
      </span>
    </a>
  );
}
