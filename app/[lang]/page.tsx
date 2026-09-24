import {
  getDictionary,
  SUPPORTED_LOCALES,
  type Locale,
} from "@/lib/i18n/dictionaries";
import HomeClient from "@/components/HomeClient";

export default function HomePage({ params }: { params: { lang: string } }) {
  const lang: Locale = SUPPORTED_LOCALES.includes(params.lang as Locale)
    ? (params.lang as Locale)
    : "es";
  const dict = getDictionary(lang);

  return <HomeClient lang={lang} dict={dict} />;
}
