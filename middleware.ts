import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const locales = ["es", "en", "fr", "it"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "es";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  const acceptLanguage = (request.headers.get("accept-language") || "").toLowerCase();
  let preferredLocale: Locale = defaultLocale;
  if (acceptLanguage.startsWith("en")) preferredLocale = "en";
  else if (acceptLanguage.startsWith("fr")) preferredLocale = "fr";
  else if (acceptLanguage.startsWith("it")) preferredLocale = "it";

  request.nextUrl.pathname = `/${preferredLocale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|manifest.webmanifest).*)"],
};
