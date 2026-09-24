import {
  getDictionary,
  SUPPORTED_LOCALES,
  type Locale,
} from "@/lib/i18n/dictionaries";
import PricingClient from "@/components/PricingClient";

export default function PricingPage({ params }: { params: { lang: string } }) {
  const lang: Locale = SUPPORTED_LOCALES.includes(params.lang as Locale)
    ? (params.lang as Locale)
    : "es";
  const dict = getDictionary(lang);

  return <PricingClient lang={lang} dict={dict} />;
}
