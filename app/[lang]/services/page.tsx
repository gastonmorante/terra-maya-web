import {
  getDictionary,
  SUPPORTED_LOCALES,
  type Locale,
} from "@/lib/i18n/dictionaries";
import ServicesClient from "@/components/ServicesClient";

export default function ServicesPage({ params }: { params: { lang: string } }) {
  const lang: Locale = SUPPORTED_LOCALES.includes(params.lang as Locale)
    ? (params.lang as Locale)
    : "es";
  const dict = getDictionary(lang);

  return <ServicesClient lang={lang} dict={dict} />;
}
