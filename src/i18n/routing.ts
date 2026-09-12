import { defineRouting } from "next-intl/routing";

// "es-419" (Latin American Spanish, a valid BCP-47 tag) is used instead of a
// bare "es" because a real route already lives at the literal path "/es"
// (the Spain country-flavor landing page). If "es" were the locale code,
// next-intl's `localePrefix: "as-needed"` would treat any request to "/es"
// as a redundant default-locale prefix and redirect it to "/", silently
// breaking that page. Using "es-419" avoids the collision entirely — it
// never appears in a URL since it's the unprefixed default locale.
export const routing = defineRouting({
  locales: ["es-419", "en"],
  defaultLocale: "es-419",
  localePrefix: "as-needed",
  localeDetection: false,
  alternateLinks: false,
  pathnames: {
    "/": "/",
    "/precios": { en: "/pricing" },
    "/funcionalidades": { en: "/features" },
    "/terminos": { en: "/terms" },
    "/privacidad": { en: "/privacy" },
    "/sectores": { en: "/industries" },
    "/blog": "/blog",
  },
});

export type Locale = (typeof routing.locales)[number];

// og:locale / og:locale:alternate para Open Graph — le dice a Facebook/LinkedIn
// que esta página tiene una versión en el otro idioma, para que muestren el
// selector de idioma en la vista previa en vez de indexarlas como duplicadas.
const OG_LOCALES: Record<Locale, string> = {
  "es-419": "es_CO",
  en: "en_US",
};

export function ogLocale(locale: Locale) {
  return OG_LOCALES[locale];
}

export function ogAlternateLocale(locale: Locale) {
  return locale === routing.defaultLocale ? OG_LOCALES.en : OG_LOCALES["es-419"];
}
