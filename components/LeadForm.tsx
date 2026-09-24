"use client";

import React, { useRef, useState, useEffect } from "react";
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
  const formRef = useRef<HTMLFormElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [notes, setNotes] = useState(defaultNotes);
  const [segment, setSegment] = useState(
    defaultSegment || dict.terraCheck.fields.segments[0]
  );

  useEffect(() => {
    if (defaultNotes) setNotes(defaultNotes);
  }, [defaultNotes]);

  useEffect(() => {
    if (defaultSegment) setSegment(defaultSegment);
  }, [defaultSegment]);

  const syncFieldValidity = (
    el: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
  ) => {
    if (!el.checkValidity) return;
    const isValid = el.checkValidity();
    el.classList.toggle("user-invalid-fallback", !isValid);
    el.classList.toggle("user-valid-fallback", isValid);
    if (!isValid) {
      el.setAttribute("aria-invalid", "true");
    } else {
      el.removeAttribute("aria-invalid");
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    if (e.target.value.length > 0 || e.target.hasAttribute("aria-invalid")) {
      syncFieldValidity(e.target);
    }
  };

  const handleInput = (
    e: React.FormEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const target = e.currentTarget;
    if (
      target.hasAttribute("aria-invalid") ||
      target.classList.contains("user-invalid-fallback")
    ) {
      syncFieldValidity(target);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;

    const requiredControls = form.querySelectorAll<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >("input[required], select[required], textarea[required]");

    let firstInvalid: HTMLElement | null = null;
    requiredControls.forEach((control) => {
      syncFieldValidity(control);
      if (!control.checkValidity() && !firstInvalid) {
        firstInvalid = control;
      }
    });

    if (firstInvalid) {
      (firstInvalid as HTMLElement).focus();
      return;
    }

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      if (onSuccess) onSuccess();
    }, 500);
  };

  const handleReset = () => {
    setSubmitted(false);
    formRef.current?.reset();
  };

  if (submitted) {
    return (
      <div className="rounded-2xl bg-brand-green text-white p-8 text-center space-y-5 shadow-luxury border border-brand-sand/20">
        <div className="w-16 h-16 rounded-full bg-brand-terracotta/20 border border-brand-terracotta flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-9 h-9 text-brand-terracotta" />
        </div>
        <div className="space-y-2">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-brand-sand/80 bg-white/10 px-3 py-1 rounded-full">
            {dict.terraCheck.badge}
          </span>
          <h3 className="font-serif text-2xl font-bold text-brand-sand">
            {dict.terraCheck.success.title}
          </h3>
          <p className="text-sm text-brand-sand/85 max-w-md mx-auto leading-relaxed">
            {dict.terraCheck.success.desc}
          </p>
        </div>
        <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
          <a
            href={`${CONTACT_INFO.whatsappBase}?text=${encodeURIComponent(
              `Hola Terra Maya, acabo de solicitar mi Terra Check (${segment}) - ${notes}`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-brand-terracotta hover:bg-brand-terracotta-dark text-white font-semibold px-5 py-2.5 text-sm transition shadow-md"
          >
            <span>WhatsApp ({CONTACT_INFO.phoneDisplay})</span>
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

  const inputBaseClass =
    "w-full rounded-xl border border-brand-green/15 bg-white px-4 py-2.5 text-sm text-brand-green shadow-[0_1px_2px_rgba(26,60,52,0.04)] placeholder:text-brand-green/35 hover:border-brand-green/30 focus:border-brand-terracotta focus:outline-none focus:ring-2 focus:ring-brand-terracotta/15 transition-all";

  const labelBaseClass =
    "block text-[11px] font-bold uppercase tracking-wider text-brand-green/85 mb-1.5";

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      noValidate
      className="space-y-3.5 text-left"
    >
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
          required
          minLength={2}
          placeholder={dict.terraCheck.fields.namePlaceholder}
          onBlur={handleBlur}
          onInput={handleInput}
          className={inputBaseClass}
        />
        <p className="field-error-msg items-center gap-1.5 text-xs text-brand-terracotta font-medium mt-1">
          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
          <span>{dict.terraCheck.errors.name}</span>
        </p>
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
            required
            placeholder={dict.terraCheck.fields.emailPlaceholder}
            onBlur={handleBlur}
            onInput={handleInput}
            className={inputBaseClass}
          />
          <p className="field-error-msg items-center gap-1.5 text-xs text-brand-terracotta font-medium mt-1">
            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
            <span>{dict.terraCheck.errors.email}</span>
          </p>
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
            required
            pattern="[\+\d\s\-\(\)]{8,20}"
            placeholder={dict.terraCheck.fields.phonePlaceholder}
            onBlur={handleBlur}
            onInput={handleInput}
            className={inputBaseClass}
          />
          <p className="field-error-msg items-center gap-1.5 text-xs text-brand-terracotta font-medium mt-1">
            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
            <span>{dict.terraCheck.errors.phone}</span>
          </p>
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
              className={`${inputBaseClass} appearance-none pr-9 cursor-pointer truncate`}
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
              className={`${inputBaseClass} appearance-none pr-9 cursor-pointer truncate`}
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
          className={`${inputBaseClass} resize-none leading-relaxed`}
        />
      </div>

      <div className="pt-1">
        <button
          type="submit"
          disabled={submitting}
          className="w-full flex items-center justify-center gap-2 rounded-xl bg-brand-terracotta hover:bg-brand-terracotta-dark active:scale-[0.99] text-white font-semibold py-3.5 px-6 text-sm shadow-lg shadow-brand-terracotta/25 transition-all duration-200"
        >
          <Sparkles className="w-4 h-4" />
          <span>
            {submitting
              ? dict.terraCheck.fields.submitting
              : dict.terraCheck.fields.submit}
          </span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-1.5 text-[11px] text-brand-green/65 pt-0.5">
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
