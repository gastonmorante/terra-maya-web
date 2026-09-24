import {
  getDictionary,
  SUPPORTED_LOCALES,
  type Locale,
} from "@/lib/i18n/dictionaries";
import PortalClient from "@/components/PortalClient";

export default function PortalPage({ params }: { params: { lang: string } }) {
  const lang: Locale = SUPPORTED_LOCALES.includes(params.lang as Locale)
    ? (params.lang as Locale)
    : "es";
  const dict = getDictionary(lang);

  return <PortalClient lang={lang} dict={dict} />;
}
