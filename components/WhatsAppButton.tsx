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
      aria-label={`WhatsApp Terra Maya ${CONTACT_INFO.phoneDisplay}`}
      className="fixed bottom-20 md:bottom-6 right-4 md:right-6 z-40 group flex items-center gap-2.5 rounded-full bg-[#1A3C34] hover:bg-[#C86D51] text-white pl-3.5 pr-4 py-3 shadow-2xl border border-secondary-container/40 transition-all duration-300 hover:scale-105 active:scale-95"
    >
      <span className="relative flex h-2.5 w-2.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
      </span>
      <span className="material-symbols-outlined text-[20px] text-secondary-container group-hover:text-white">
        chat
      </span>
      <div className="flex flex-col text-left leading-none">
        <span className="font-label-sm text-[10px] uppercase tracking-wider font-bold">
          WhatsApp 24/7
        </span>
        <span className="text-[10px] text-secondary-container/90 font-medium hidden sm:inline mt-0.5">
          {CONTACT_INFO.phoneDisplay}
        </span>
      </div>
    </a>
  );
}
