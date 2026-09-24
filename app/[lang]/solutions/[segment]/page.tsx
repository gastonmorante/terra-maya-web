import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getDictionary,
  SUPPORTED_LOCALES,
  type Locale,
} from "@/lib/i18n/dictionaries";
import { CheckCircle2, ArrowLeft, ShieldCheck } from "lucide-react";
import LeadForm from "@/components/LeadForm";

export async function generateStaticParams() {
  const segments = ["owners", "condos", "hotels", "developers"];
  return SUPPORTED_LOCALES.flatMap((lang) =>
    segments.map((segment) => ({ lang, segment }))
  );
}

export default function SegmentDetailPage({
  params,
}: {
  params: { lang: string; segment: string };
}) {
  const lang: Locale = SUPPORTED_LOCALES.includes(params.lang as Locale)
    ? (params.lang as Locale)
    : "es";
  const dict = getDictionary(lang);
  const seg = dict.audience.segments.find((s) => s.id === params.segment);

  if (!seg) {
    notFound();
  }

  return (
    <div className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      <Link
        href={`/${lang}/solutions`}
        className="inline-flex items-center gap-2 text-sm font-bold text-brand-green hover:text-brand-terracotta transition"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>{dict.nav.solutions}</span>
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-7 space-y-6">
          <div className="rounded-3xl bg-brand-green text-brand-sand p-8 sm:p-10 space-y-5 shadow-luxury">
            <span className="inline-block rounded-full bg-brand-terracotta px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-white">
              {seg.badge}
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              {seg.title}
            </h1>
            <blockquote className="p-4 rounded-2xl bg-white/10 border-l-4 border-brand-terracotta font-serif italic text-brand-sand">
              {seg.quote}
            </blockquote>
            <p className="text-sm font-bold text-brand-terracotta-light">
              {seg.ticket}
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 border border-brand-green/15 space-y-5 shadow-card">
            <h2 className="font-serif text-2xl font-bold text-brand-green">
              {seg.title}
            </h2>
            <ul className="space-y-3.5">
              {seg.bullets.map((b, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm text-brand-green/85"
                >
                  <CheckCircle2 className="w-5 h-5 text-brand-terracotta shrink-0 mt-0.5" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <div className="pt-4 border-t border-brand-sand flex items-center gap-3 text-xs text-brand-green/75">
              <ShieldCheck className="w-5 h-5 text-brand-terracotta shrink-0" />
              <span>
                100% REPSE · IMSS · RC $5M USD · App Terra Maya 360° &amp; Drone
              </span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="rounded-3xl bg-white p-7 sm:p-8 border border-brand-green/15 shadow-luxury space-y-4 sticky top-24">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-terracotta">
              {dict.terraCheck.badge}
            </span>
            <h3 className="font-serif text-2xl font-bold text-brand-green">
              {seg.cta}
            </h3>
            <LeadForm
              lang={lang}
              dict={dict}
              defaultSegment={seg.title}
              defaultNotes={`${seg.title} (${seg.ticket})`}
              compact
            />
          </div>
        </div>
      </div>
    </div>
  );
}
