import { getTranslations } from "next-intl/server";
import { routing, type Locale } from "@/i18n/routing";

const WA_NUMBER = "573506674686";
const WA_BASE_TEXT = "Hola 👋 quiero mi demo de AgenditApp para mi negocio";

export const WHATSAPP_HREF = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_BASE_TEXT)}`;

/**
 * Link directo a WhatsApp. El "origen" ya NO se incrusta en el texto del mensaje;
 * ahora se mide con un evento de Google Analytics al hacer click (ver el handler
 * `trackWhatsAppClick` en DemoCtaModal y `trackPopupEvent` en PromoPopup).
 * Se mantiene la firma sin argumentos por compatibilidad con los componentes
 * que la importan.
 */
export function getWhatsappHref(): string {
  return WHATSAPP_HREF;
}

export const SIGNUP_HREF = "https://app.agenditapp.com/signup";

export async function getJsonldOrganization(locale: Locale) {
  const t = await getTranslations({ locale, namespace: "Jsonld" });
  return {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "AgenditApp",
  url: "https://agenditapp.com",
  logo: "https://agenditapp.com/logo_dorado.png",
  description: t("organizationDescription"),
  foundingDate: "2024",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Neiva",
    addressRegion: "Huila",
    addressCountry: "CO",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+57-350-667-4686",
    contactType: "customer service",
    availableLanguage: ["Spanish", "English"],
    areaServed: ["CO", "MX", "CR", "CL"],
  },
  sameAs: [
    "https://www.facebook.com/profile.php?id=61587186579271",
    "https://www.instagram.com/agenditapp/",
    "https://www.linkedin.com/company/agenditapp",
    "https://www.g2.com/products/agenditapp",
  ],
    knowsAbout: t.raw("knowsAbout") as string[],
  };
}

export async function getJsonldSoftware(locale: Locale) {
  const t = await getTranslations({ locale, namespace: "Jsonld" });
  return {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "AgenditApp",
  url: "https://agenditapp.com",
  applicationCategory: "BusinessApplication",
  applicationSubCategory: "Appointment Scheduling Software",
  operatingSystem: "Web",
  softwareVersion: "1.0",
  datePublished: "2024-01-01",
  inLanguage: locale === routing.defaultLocale ? "es-CO" : "en",
  description: t("softwareDescription"),
  featureList: t.raw("featureList") as string[],
  offers: {
    "@type": "AggregateOffer",
    lowPrice: "10",
    highPrice: "30",
    priceCurrency: "USD",
    offerCount: "3",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "6",
    bestRating: "5",
  },
  softwareHelp: {
    "@type": "WebPage",
    url: "https://agenditapp.com/blog",
  },
  screenshot: "https://agenditapp.com/inicio_page.png",
  author: {
    "@type": "Organization",
    name: "AgenditApp",
    url: "https://agenditapp.com",
  },
  publisher: {
    "@type": "Organization",
    name: "AgenditApp",
    url: "https://agenditapp.com",
  },
  sameAs: [
    "https://www.facebook.com/profile.php?id=61587186579271",
    "https://www.instagram.com/agenditapp/",
    "https://www.linkedin.com/company/agenditapp",
    "https://www.g2.com/products/agenditapp",
  ],
  };
}

export async function getJsonldFaq(locale: Locale) {
  const t = await getTranslations({ locale, namespace: "Jsonld" });
  const faq = t.raw("faq") as Array<{ question: string; answer: string }>;
  return {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
  };
}

export async function getJsonldServices(locale: Locale) {
  const t = await getTranslations({ locale, namespace: "Jsonld" });
  const unitText = locale === routing.defaultLocale ? "mes" : "month";
  return {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    name: t("services.catalogName"),
    itemListElement: [
      {
        "@type": "Offer",
        name: t("services.basico.name"),
        description: t("services.basico.description"),
        price: "10",
        priceCurrency: "USD",
        priceSpecification: { "@type": "UnitPriceSpecification", price: "10", priceCurrency: "USD", unitText },
        itemOffered: { "@type": "Service", name: `AgenditApp ${t("services.basico.name")}` },
      },
      {
        "@type": "Offer",
        name: t("services.esencial.name"),
        description: t("services.esencial.description"),
        price: "20",
        priceCurrency: "USD",
        priceSpecification: { "@type": "UnitPriceSpecification", price: "20", priceCurrency: "USD", unitText },
        itemOffered: { "@type": "Service", name: `AgenditApp ${t("services.esencial.name")}` },
      },
      {
        "@type": "Offer",
        name: t("services.marca.name"),
        description: t("services.marca.description"),
        price: "30",
        priceCurrency: "USD",
        priceSpecification: { "@type": "UnitPriceSpecification", price: "30", priceCurrency: "USD", unitText },
        itemOffered: { "@type": "Service", name: `AgenditApp ${t("services.marca.name")}` },
      },
    ],
  };
}

export const JSONLD_TESTIMONIALS = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Testimonios de clientes — AgenditApp",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Review",
        reviewBody: "Desde que usamos AgenditApp, las ausencias bajaron un 60%. Mis clientes agendan solas a cualquier hora y yo puedo concentrarme en el trabajo que me apasiona. ¡Es un cambio total!",
        author: { "@type": "Person", name: "Luisa Fernanda", worksFor: { "@type": "LocalBusiness", name: "Estudio Rosa", address: { "@type": "PostalAddress", addressLocality: "Neiva", addressRegion: "Huila", addressCountry: "CO" } } },
        itemReviewed: { "@type": "SoftwareApplication", name: "AgenditApp", url: "https://agenditapp.com" },
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        datePublished: "2025-06-01",
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Review",
        reviewBody: "La plataforma es súper fácil de usar y los recordatorios automáticos por WhatsApp son un hit con mis clientas. Ahora tenemos agenda llena toda la semana sin tanto esfuerzo.",
        author: { "@type": "Person", name: "Nataly Martinez", worksFor: { "@type": "LocalBusiness", name: "Galaxia Glamour", address: { "@type": "PostalAddress", addressLocality: "Neiva", addressRegion: "Huila", addressCountry: "CO" } } },
        itemReviewed: { "@type": "SoftwareApplication", name: "AgenditApp", url: "https://agenditapp.com" },
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        datePublished: "2025-07-01",
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Review",
        reviewBody: "Controlo la agenda de todo el equipo desde el celular. Los clientes reservan solos, reciben confirmación y llegan puntuales. AgenditApp nos dio una imagen mucho más profesional.",
        author: { "@type": "Person", name: "Cristian Bastidas", worksFor: { "@type": "LocalBusiness", name: "Bastidas Barber Studio", address: { "@type": "PostalAddress", addressLocality: "Pereira", addressCountry: "CO" } } },
        itemReviewed: { "@type": "SoftwareApplication", name: "AgenditApp", url: "https://agenditapp.com" },
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        datePublished: "2025-08-01",
      },
    },
    {
      "@type": "ListItem",
      position: 4,
      item: {
        "@type": "Review",
        reviewBody: "Manejar las sesiones de varios terapeutas era caótico. Con AgenditApp todo se organiza solo. Los padres agendan fácilmente y nosotros tenemos control total de los horarios.",
        author: { "@type": "Organization", name: "CAPI Apoyo Infantil", address: { "@type": "PostalAddress", addressLocality: "General Escobedo", addressCountry: "MX" } },
        itemReviewed: { "@type": "SoftwareApplication", name: "AgenditApp", url: "https://agenditapp.com" },
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        datePublished: "2025-09-01",
      },
    },
    {
      "@type": "ListItem",
      position: 5,
      item: {
        "@type": "Review",
        reviewBody: "Nuestros clientes valoran poder reservar desde Instagram sin llamar. La agenda siempre está actualizada y el panel nos da visibilidad de todo el negocio en tiempo real.",
        author: { "@type": "Organization", name: "Alpha Man Atelier", address: { "@type": "PostalAddress", addressLocality: "Ciudad Quesada", addressCountry: "CR" } },
        itemReviewed: { "@type": "SoftwareApplication", name: "AgenditApp", url: "https://agenditapp.com" },
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        datePublished: "2025-10-01",
      },
    },
    {
      "@type": "ListItem",
      position: 6,
      item: {
        "@type": "Review",
        reviewBody: "Organizar clases grupales e individuales nunca fue tan simple. AgenditApp se adapta perfecto a nuestros servicios de yoga, pilates y danza. Muy recomendado para centros de bienestar.",
        author: { "@type": "Organization", name: "Espacio Mosaico", address: { "@type": "PostalAddress", addressLocality: "Quilpué", addressCountry: "CL" } },
        itemReviewed: { "@type": "SoftwareApplication", name: "AgenditApp", url: "https://agenditapp.com" },
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        datePublished: "2025-11-01",
      },
    },
  ],
} as const;

export async function getJsonldWebsite(locale: Locale) {
  const t = await getTranslations({ locale, namespace: "Jsonld" });
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "AgenditApp",
    url: "https://agenditapp.com",
    description: t("websiteDescription"),
    inLanguage: locale === routing.defaultLocale ? "es-CO" : "en",
    publisher: {
      "@type": "Organization",
      name: "AgenditApp",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://agenditapp.com/sectores?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };
}
