import {
  getDictionary,
  SUPPORTED_LOCALES,
  type Locale,
} from "@/lib/i18n/dictionaries";
import SolutionsClient from "@/components/SolutionsClient";

export default function SolutionsPage({ params }: { params: { lang: string } }) {
  const lang: Locale = SUPPORTED_LOCALES.includes(params.lang as Locale)
    ? (params.lang as Locale)
    : "es";
  const dict = getDictionary(lang);

  return <SolutionsClient lang={lang} dict={dict} />;
}
