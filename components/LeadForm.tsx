"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  CheckCircle2,
  AlertCircle,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  ChevronDown,
} from "lucide-react";
import { CONTACT_INFO, type Locale } from "@/lib/i18n/dictionaries";

interface LeadFormProps {
  lang: Locale;
  dict: any;
  defaultNotes?: string;
  defaultSegment?: string;
  compact?: boolean;
  onSuccess?: () => void;
}

export default function LeadForm({
  lang,
  dict,
  defaultNotes = "",
  defaultSegment = "",
  compact = false,
  onSuccess,
}: LeadFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState(
    dict.terraCheck.fields.locations?.[0] || "Tulum"
  );
  const [segment, setSegment] = useState(
    defaultSegment || dict.terraCheck.fields.segments?.[0] || ""
  );
  const [notes, setNotes] = useState(defaultNotes || "");

  const [errors, setErrors] = useState<{
    name?: boolean;
    email?: boolean;
    phone?: boolean;
  }>({});

  useEffect(() => {
    setNotes(defaultNotes || "");
  }, [defaultNotes]);

  useEffect(() => {
    if (defaultSegment) {
      setSegment(defaultSegment);
    }
  }, [defaultSegment]);

  const validate = () => {
    const nextErrors: { name?: boolean; email?: boolean; phone?: boolean } = {};
    if (name.trim().length < 2) {
      nextErrors.name = true;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      nextErrors.email = true;
    }
    const digitsOnly = phone.replace(/\D/g, "");
    if (digitsOnly.length < 7) {
      nextErrors.phone = true;
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const buildWhatsAppMessage = () => {
    const header =
      lang === "es"
        ? "Hola Terra Maya 🌿 Solicito agendar mi Diagnóstico Terra Check:"
        : lang === "fr"
        ? "Bonjour Terra Maya 🌿 Je souhaite planifier mon Diagnostic Terra Check :"
        : lang === "it"
        ? "Ciao Terra Maya 🌿 Vorrei prenotare la mia Diagnosi Terra Check:"
        : "Hello Terra Maya 🌿 I would like to schedule my Terra Check Diagnostic:";

    const lines = [
      header,
      `• ${dict.terraCheck.fields.name}: ${name.trim()}`,
      `• WhatsApp: ${phone.trim()}`,
      `• Email: ${email.trim()}`,
      `• ${dict.terraCheck.fields.location}: ${location}`,
      `• ${dict.terraCheck.fields.segment}: ${segment}`,
    ];
    if (notes.trim()) {
      lines.push(`• Detalle: ${notes.trim()}`);
    }
    return lines.join("\n");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      if (onSuccess) onSuccess();
    }, 350);
  };

  const handleReset = () => {
    setSubmitted(false);
    setErrors({});
    setName("");
    setEmail("");
    setPhone("");
    setNotes("");
  };

  if (submitted) {
    const whatsappHref = `${CONTACT_INFO.whatsappBase}?text=${encodeURIComponent(
      buildWhatsAppMessage()
    )}`;

    return (
      <div className="rounded-2xl bg-brand-green text-white p-6 sm:p-8 text-center space-y-5 shadow-luxury border border-brand-sand/20">
        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-brand-terracotta/20 border border-brand-terracotta flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8 sm:w-9 sm:h-9 text-brand-terracotta" />
        </div>
        <div className="space-y-2">
          <span className="inline-block text-[11px] font-semibold uppercase tracking-widest text-brand-sand/80 bg-white/10 px-3 py-1 rounded-full">
            {dict.terraCheck.badge}
          </span>
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-brand-sand">
            {dict.terraCheck.success.title}
          </h3>
          <p className="text-xs sm:text-sm text-brand-sand/85 max-w-md mx-auto leading-relaxed">
            {dict.terraCheck.success.desc}
          </p>
        </div>
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-brand-terracotta hover:bg-brand-terracotta-dark text-white font-semibold px-5 py-3 text-sm transition shadow-md"
          >
            <span>WhatsApp 24/7</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <button
            type="button"
            onClick={handleReset}
            className="text-xs text-brand-sand/70 hover:text-white underline underline-offset-4 px-3 py-2"
          >
            {dict.terraCheck.success.reset}
          </button>
        </div>
      </div>
    );
  }

  const getInputClass = (hasError?: boolean) =>
    `w-full rounded-xl border ${
      hasError
        ? "border-brand-terracotta bg-brand-terracotta/[0.06]"
        : "border-brand-green/15 bg-white hover:border-brand-green/30"
    } px-3.5 py-2.5 text-base sm:text-sm text-brand-green shadow-[0_1px_2px_rgba(26,60,52,0.04)] placeholder:text-brand-green/35 focus:border-brand-terracotta focus:outline-none focus:ring-2 focus:ring-brand-terracotta/15 transition-all`;

  const labelBaseClass =
    "block text-[11px] font-bold uppercase tracking-wider text-brand-green/85 mb-1.5";

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-3.5 text-left">
      {/* Full Name */}
      <div>
        <label htmlFor="tc-name" className={labelBaseClass}>
          {dict.terraCheck.fields.name}{" "}
          <span className="text-brand-terracotta">*</span>
        </label>
        <input
          id="tc-name"
          name="name"
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            if (errors.name) setErrors((prev) => ({ ...prev, name: false }));
          }}
          placeholder={dict.terraCheck.fields.namePlaceholder}
          className={getInputClass(errors.name)}
        />
        {errors.name && (
          <p className="flex items-center gap-1.5 text-xs text-brand-terracotta font-medium mt-1">
            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
            <span>{dict.terraCheck.errors.name}</span>
          </p>
        )}
      </div>

      {/* Email & WhatsApp Phone side by side */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        <div>
          <label htmlFor="tc-email" className={labelBaseClass}>
            {dict.terraCheck.fields.email}{" "}
            <span className="text-brand-terracotta">*</span>
          </label>
          <input
            id="tc-email"
            name="email"
            type="email"
            inputMode="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (errors.email) setErrors((prev) => ({ ...prev, email: false }));
            }}
            placeholder={dict.terraCheck.fields.emailPlaceholder}
            className={getInputClass(errors.email)}
          />
          {errors.email && (
            <p className="flex items-center gap-1.5 text-xs text-brand-terracotta font-medium mt-1">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span>{dict.terraCheck.errors.email}</span>
            </p>
          )}
        </div>

        <div>
          <label htmlFor="tc-phone" className={labelBaseClass}>
            {dict.terraCheck.fields.phone}{" "}
            <span className="text-brand-terracotta">*</span>
          </label>
          <input
            id="tc-phone"
            name="phone"
            type="tel"
            inputMode="tel"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
              if (errors.phone) setErrors((prev) => ({ ...prev, phone: false }));
            }}
            placeholder={dict.terraCheck.fields.phonePlaceholder}
            className={getInputClass(errors.phone)}
          />
          {errors.phone && (
            <p className="flex items-center gap-1.5 text-xs text-brand-terracotta font-medium mt-1">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span>{dict.terraCheck.errors.phone}</span>
            </p>
          )}
        </div>
      </div>

      {/* Location & Property Segment side by side */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        <div>
          <label htmlFor="tc-location" className={labelBaseClass}>
            {dict.terraCheck.fields.location}
          </label>
          <div className="relative">
            <select
              id="tc-location"
              name="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className={`${getInputClass(false)} appearance-none pr-9 cursor-pointer truncate`}
            >
              {dict.terraCheck.fields.locations.map((loc: string) => (
                <option key={loc} value={loc}>
                  {loc}
                </option>
              ))}
            </select>
            <ChevronDown className="w-4 h-4 text-brand-green/50 pointer-events-none absolute right-3 top-1/2 -translate-y-1/2" />
          </div>
        </div>

        <div>
          <label htmlFor="tc-segment" className={labelBaseClass}>
            {dict.terraCheck.fields.segment}
          </label>
          <div className="relative">
            <select
              id="tc-segment"
              name="segment"
              value={segment}
              onChange={(e) => setSegment(e.target.value)}
              className={`${getInputClass(false)} appearance-none pr-9 cursor-pointer truncate`}
            >
              {dict.terraCheck.fields.segments.map((seg: string) => (
                <option key={seg} value={seg}>
                  {seg}
                </option>
              ))}
            </select>
            <ChevronDown className="w-4 h-4 text-brand-green/50 pointer-events-none absolute right-3 top-1/2 -translate-y-1/2" />
          </div>
        </div>
      </div>

      {/* Notes */}
      <div>
        <label htmlFor="tc-notes" className={labelBaseClass}>
          {dict.terraCheck.fields.notes}
        </label>
        <textarea
          id="tc-notes"
          name="notes"
          rows={compact ? 2 : 3}
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder={dict.terraCheck.fields.notesPlaceholder}
          className={`${getInputClass(false)} resize-none leading-relaxed`}
        />
      </div>

      <div className="pt-1">
        <button
          type="submit"
          disabled={submitting}
          className="w-full flex items-center justify-center gap-2 rounded-xl bg-brand-terracotta hover:bg-brand-terracotta-dark active:scale-[0.99] text-white font-semibold py-3.5 px-5 text-sm shadow-lg shadow-brand-terracotta/25 transition-all duration-200"
        >
          <Sparkles className="w-4 h-4 shrink-0" />
          <span className="truncate">
            {submitting
              ? dict.terraCheck.fields.submitting
              : dict.terraCheck.fields.submit}
          </span>
          <ArrowRight className="w-4 h-4 shrink-0" />
        </button>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-1.5 text-[11px] text-brand-green/65 pt-0.5 text-center">
        <ShieldCheck className="w-3.5 h-3.5 text-brand-terracotta shrink-0" />
        <span>NDA · LFPDPPP · GDPR ·</span>
        <Link
          href={`/${lang}/legal/privacy`}
          className="underline hover:text-brand-green font-semibold"
        >
          {dict.legal.privacyTitle}
        </Link>
      </div>
    </form>
  );
}
