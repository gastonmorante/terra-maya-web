import type { Metadata } from "next";
import {
  getDictionary,
  SUPPORTED_LOCALES,
  CONTACT_INFO,
  type Locale,
} from "@/lib/i18n/dictionaries";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CookieConsent from "@/components/CookieConsent";
import { TerraCheckProvider } from "@/components/TerraCheckModal";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://terramaya.mx";

function resolveLocale(lang: string): Locale {
  if (SUPPORTED_LOCALES.includes(lang as Locale)) {
    return lang as Locale;
  }
  return "es";
}

export async function generateMetadata({
  params,
}: {
  params: { lang: string };
}): Promise<Metadata> {
  const lang = resolveLocale(params.lang);
  const dict = getDictionary(lang);

  const ogLocaleMap: Record<Locale, string> = {
    es: "es_MX",
    en: "en_US",
    fr: "fr_FR",
    it: "it_IT",
  };

  return {
    metadataBase: new URL(BASE_URL),
    title: {
      default: dict.meta.title,
      template: `%s | Terra Maya`,
    },
    description: dict.meta.description,
    keywords: dict.meta.keywords,
    alternates: {
      canonical: `${BASE_URL}/${lang}`,
      languages: {
        "es-MX": `${BASE_URL}/es`,
        "en-US": `${BASE_URL}/en`,
        "fr-FR": `${BASE_URL}/fr`,
        "it-IT": `${BASE_URL}/it`,
        "x-default": `${BASE_URL}/es`,
      },
    },
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      url: `${BASE_URL}/${lang}`,
      siteName: "Terra Maya Facility & Property Services",
      locale: ogLocaleMap[lang],
      type: "website",
      images: [
        {
          url: "/logo.png",
          width: 1200,
          height: 630,
          alt: "Terra Maya Facility & Property Services Riviera Maya",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.title,
      description: dict.meta.description,
      images: ["/logo.png"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export async function generateStaticParams() {
  return SUPPORTED_LOCALES.map((lang) => ({ lang }));
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  const lang = resolveLocale(params.lang);
  const dict = getDictionary(lang);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: "Terra Maya Facility & Property Services",
    legalName: "Terra Maya Asset Care Management S.A. de C.V.",
    url: `${BASE_URL}/${lang}`,
    logo: `${BASE_URL}/logo.png`,
    telephone: CONTACT_INFO.phoneDisplay,
    email: CONTACT_INFO.email,
    priceRange: "$$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Av. Colosio entre Av. 25 y 30, Col. Centro",
      addressLocality: "Playa del Carmen",
      addressRegion: "Quintana Roo",
      postalCode: "77710",
      addressCountry: "MX",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 20.6386,
      longitude: -87.0739,
    },
    areaServed: [
      "Tulum",
      "Aldea Zamá",
      "Playa del Carmen",
      "Mayakoba",
      "Puerto Morelos",
      "Akumal",
      "Cancún",
    ],
    availableLanguage: ["es", "en", "fr", "it"],
    sameAs: [CONTACT_INFO.whatsappBase],
  };

  return (
    <TerraCheckProvider lang={lang} dict={dict}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen flex flex-col bg-surface text-on-surface">
        <Navbar lang={lang} dict={dict} />
        <main className="flex-1 flex flex-col relative w-full pt-16 pb-20 md:pb-0 bg-surface">
          {children}
        </main>
        <Footer lang={lang} dict={dict} />
        <WhatsAppButton lang={lang} />
        <CookieConsent lang={lang} dict={dict} />
      </div>
    </TerraCheckProvider>
  );
}
