"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { CheckCircle2, AlertCircle, Sparkles, ArrowRight, ShieldCheck } from "lucide-react";
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
            className="inline-flex items-center gap-2 rounded-xl bg-brand-terracotta hover:bg-brand-terracotta-dark text-white font-semibold px-5 py-2.5 text-sm transition"
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

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      noValidate
      className="space-y-4 text-left"
    >
      <div
        className={`grid gap-4 ${
          compact ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2"
        }`}
      >
        {/* Name */}
        <div>
          <label
            htmlFor="tc-name"
            className="block text-xs font-bold uppercase tracking-wider text-brand-green mb-1.5"
          >
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
            className="w-full rounded-xl border border-brand-green/20 bg-white px-4 py-3 text-sm text-brand-green placeholder:text-brand-green/40 focus:border-brand-green focus:outline-none focus:ring-2 focus:ring-brand-green/15 transition"
          />
          <p className="field-error-msg items-center gap-1.5 text-xs text-brand-terracotta font-medium mt-1.5">
            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
            <span>{dict.terraCheck.errors.name}</span>
          </p>
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="tc-email"
            className="block text-xs font-bold uppercase tracking-wider text-brand-green mb-1.5"
          >
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
            className="w-full rounded-xl border border-brand-green/20 bg-white px-4 py-3 text-sm text-brand-green placeholder:text-brand-green/40 focus:border-brand-green focus:outline-none focus:ring-2 focus:ring-brand-green/15 transition"
          />
          <p className="field-error-msg items-center gap-1.5 text-xs text-brand-terracotta font-medium mt-1.5">
            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
            <span>{dict.terraCheck.errors.email}</span>
          </p>
        </div>
      </div>

      <div
        className={`grid gap-4 ${
          compact ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2"
        }`}
      >
        {/* WhatsApp Phone */}
        <div>
          <label
            htmlFor="tc-phone"
            className="block text-xs font-bold uppercase tracking-wider text-brand-green mb-1.5"
          >
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
            className="w-full rounded-xl border border-brand-green/20 bg-white px-4 py-3 text-sm text-brand-green placeholder:text-brand-green/40 focus:border-brand-green focus:outline-none focus:ring-2 focus:ring-brand-green/15 transition"
          />
          <p className="field-error-msg items-center gap-1.5 text-xs text-brand-terracotta font-medium mt-1.5">
            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
            <span>{dict.terraCheck.errors.phone}</span>
          </p>
        </div>

        {/* Location */}
        <div>
          <label
            htmlFor="tc-location"
            className="block text-xs font-bold uppercase tracking-wider text-brand-green mb-1.5"
          >
            {dict.terraCheck.fields.location}
          </label>
          <select
            id="tc-location"
            name="location"
            className="w-full rounded-xl border border-brand-green/20 bg-white px-4 py-3 text-sm text-brand-green focus:border-brand-green focus:outline-none focus:ring-2 focus:ring-brand-green/15 transition"
          >
            {dict.terraCheck.fields.locations.map((loc: string) => (
              <option key={loc} value={loc}>
                {loc}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Segment */}
      <div>
        <label
          htmlFor="tc-segment"
          className="block text-xs font-bold uppercase tracking-wider text-brand-green mb-1.5"
        >
          {dict.terraCheck.fields.segment}
        </label>
        <select
          id="tc-segment"
          name="segment"
          value={segment}
          onChange={(e) => setSegment(e.target.value)}
          className="w-full rounded-xl border border-brand-green/20 bg-white px-4 py-3 text-sm text-brand-green focus:border-brand-green focus:outline-none focus:ring-2 focus:ring-brand-green/15 transition"
        >
          {dict.terraCheck.fields.segments.map((seg: string) => (
            <option key={seg} value={seg}>
              {seg}
            </option>
          ))}
        </select>
      </div>

      {/* Notes */}
      <div>
        <label
          htmlFor="tc-notes"
          className="block text-xs font-bold uppercase tracking-wider text-brand-green mb-1.5"
        >
          {dict.terraCheck.fields.notes}
        </label>
        <textarea
          id="tc-notes"
          name="notes"
          rows={compact ? 2 : 3}
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder={dict.terraCheck.fields.notesPlaceholder}
          className="w-full rounded-xl border border-brand-green/20 bg-white px-4 py-2.5 text-sm text-brand-green placeholder:text-brand-green/40 focus:border-brand-green focus:outline-none focus:ring-2 focus:ring-brand-green/15 transition"
        />
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="w-full flex items-center justify-center gap-2 rounded-xl bg-brand-terracotta hover:bg-brand-terracotta-dark text-white font-semibold py-3.5 px-6 text-sm shadow-lg shadow-brand-terracotta/25 transition-all duration-200"
      >
        <Sparkles className="w-4 h-4" />
        <span>
          {submitting
            ? dict.terraCheck.fields.submitting
            : dict.terraCheck.fields.submit}
        </span>
        <ArrowRight className="w-4 h-4" />
      </button>

      <div className="flex flex-wrap items-center justify-center gap-2 text-[11px] text-brand-green/70 pt-1">
        <ShieldCheck className="w-4 h-4 text-brand-green shrink-0" />
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
