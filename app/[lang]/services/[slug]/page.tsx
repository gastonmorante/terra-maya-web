import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getDictionary,
  SUPPORTED_LOCALES,
  type Locale,
} from "@/lib/i18n/dictionaries";
import { CheckCircle2, ArrowLeft, ShieldCheck, Camera } from "lucide-react";
import LeadForm from "@/components/LeadForm";

export async function generateStaticParams() {
  const slugs = [
    "terra-agua",
    "terra-verde",
    "terra-clean",
    "terra-textil",
    "terra-shield",
    "terra-build-carpinteria",
    "terra-build-albanileria",
  ];
  return SUPPORTED_LOCALES.flatMap((lang) =>
    slugs.map((slug) => ({ lang, slug }))
  );
}

export default function ServiceDetailPage({
  params,
}: {
  params: { lang: string; slug: string };
}) {
  const lang: Locale = SUPPORTED_LOCALES.includes(params.lang as Locale)
    ? (params.lang as Locale)
    : "es";
  const dict = getDictionary(lang);
  const service = dict.services.items.find((s) => s.id === params.slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      <Link
        href={`/${lang}/services`}
        className="inline-flex items-center gap-2 text-sm font-bold text-brand-green hover:text-brand-terracotta transition"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>{dict.nav.services}</span>
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-7 space-y-6">
          <div className="rounded-3xl bg-brand-green text-brand-sand p-8 sm:p-10 space-y-5 shadow-luxury">
            <span className="inline-block rounded-full bg-brand-terracotta px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-white">
              {service.brand} · {service.badge}
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              {service.category}
            </h1>
            <p className="text-base text-brand-sand/85 leading-relaxed">
              {service.fullDesc}
            </p>
            <div className="pt-4 border-t border-white/15 flex flex-wrap items-center justify-between gap-4">
              <span className="text-sm font-bold text-brand-terracotta-light">
                {service.priceHint}
              </span>
              <div className="flex gap-2">
                {service.verticals.map((v) => (
                  <span
                    key={v}
                    className="rounded-lg bg-white/10 px-3 py-1 text-xs font-semibold text-brand-sand"
                  >
                    {v}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-8 border border-brand-green/15 space-y-5 shadow-card">
            <h2 className="font-serif text-2xl font-bold text-brand-green">
              ISO · NOM Protocol &amp; Checklist
            </h2>
            <ul className="space-y-3.5">
              {service.features.map((feat, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm text-brand-green/85"
                >
                  <CheckCircle2 className="w-5 h-5 text-brand-terracotta shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-brand-sand">
              <div className="rounded-2xl bg-[#F6F3EC] p-4 flex items-center gap-3">
                <Camera className="w-6 h-6 text-brand-terracotta shrink-0" />
                <div className="text-xs">
                  <p className="font-bold text-brand-green">360° + Drone AFAC</p>
                  <p className="text-brand-green/70">App Terra Maya TLS 1.3</p>
                </div>
              </div>
              <div className="rounded-2xl bg-[#F6F3EC] p-4 flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-brand-terracotta shrink-0" />
                <div className="text-xs">
                  <p className="font-bold text-brand-green">
                    100% REPSE · RC $5M USD
                  </p>
                  <p className="text-brand-green/70">IMSS · CFDI 4.0</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="rounded-3xl bg-white p-7 sm:p-8 border border-brand-green/15 shadow-luxury space-y-4 sticky top-24">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-terracotta">
              {dict.terraCheck.badge}
            </span>
            <h3 className="font-serif text-2xl font-bold text-brand-green">
              {service.brand}
            </h3>
            <LeadForm
              lang={lang}
              dict={dict}
              defaultNotes={`${service.brand} - ${service.category}`}
              compact
            />
          </div>
        </div>
      </div>
    </div>
  );
}
