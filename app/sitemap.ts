import { MetadataRoute } from "next";
import { SUPPORTED_LOCALES } from "@/lib/i18n/dictionaries";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://terramaya.mx";

const serviceSlugs = [
  "terra-agua",
  "terra-verde",
  "terra-clean",
  "terra-textil",
  "terra-shield",
  "terra-build-carpinteria",
  "terra-build-albanileria",
];

const solutionSegments = ["owners", "condos", "hotels", "developers"];
const legalDocs = ["privacy", "terms", "cookies"];

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/services",
    "/solutions",
    "/pricing",
    "/portal",
    ...serviceSlugs.map((s) => `/services/${s}`),
    ...solutionSegments.map((s) => `/solutions/${s}`),
    ...legalDocs.map((d) => `/legal/${d}`),
  ];

  const entries: MetadataRoute.Sitemap = [];

  for (const route of routes) {
    for (const locale of SUPPORTED_LOCALES) {
      entries.push({
        url: `${BASE_URL}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === "" ? "daily" : "weekly",
        priority: route === "" ? 1.0 : route.startsWith("/legal") ? 0.5 : 0.85,
        alternates: {
          languages: {
            es: `${BASE_URL}/es${route}`,
            en: `${BASE_URL}/en${route}`,
            fr: `${BASE_URL}/fr${route}`,
            it: `${BASE_URL}/it${route}`,
          },
        },
      });
    }
  }

  return entries;
}
