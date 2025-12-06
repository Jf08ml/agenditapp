export const WHATSAPP_HREF =
  "https://wa.me/573184345284?text=Quiero%20una%20demo%20de%20AgenditApp";

export const JSONLD_ORGANIZATION = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "AgenditApp",
  url: "https://agenditapp.com",
  logo: "https://agenditapp.com/logo_dorado.png",
  description:
    "Plataforma moderna de agendamiento inteligente y gestión de citas para negocios de belleza, bienestar y servicios profesionales",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+57-318-434-5284",
    contactType: "customer service",
    availableLanguage: ["Spanish"],
    areaServed: "CO",
  },
  sameAs: [
    // Agregar redes sociales cuando estén disponibles
  ],
} as const;

export const JSONLD_SOFTWARE = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "AgenditApp",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  browserRequirements: "Requires JavaScript. Chrome, Firefox, Safari, Edge",
  softwareVersion: "1.0",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    ratingCount: "120",
  },
  offers: {
    "@type": "Offer",
    price: "100000",
    priceCurrency: "COP",
    priceValidUntil: "2025-12-31",
    availability: "https://schema.org/InStock",
    description:
      "Plan mensual con página personalizada, agenda online, recordatorios por WhatsApp, panel administrativo y soporte básico.",
  },
  featureList: [
    "Agendamiento online 24/7",
    "Recordatorios automáticos por WhatsApp",
    "Gestión de caja y empleados",
    "Página web personalizada",
    "Análisis de horas pico",
    "Panel administrativo completo",
  ],
  screenshot: "https://agenditapp.com/inicio_page.png",
  areaServed: "CO",
  inLanguage: "es-CO",
  url: "https://agenditapp.com",
  publisher: {
    "@type": "Organization",
    name: "AgenditApp",
  },
  sameAs: [],
} as const;

export const JSONLD_FAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Tiene permanencias o cláusulas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Es mes a mes y puedes cancelar cuando quieras.",
      },
    },
    {
      "@type": "Question",
      name: "¿Los recordatorios salen desde mi número de WhatsApp?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, configuramos el envío para operar con tu número.",
      },
    },
    {
      "@type": "Question",
      name: "¿Hay límite de reservas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. El plan incluye reservas ilimitadas.",
      },
    },
  ],
} as const;

export const JSONLD_SERVICES = {
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  name: "Servicios y precios — AgenditApp",
  itemListElement: [
    {
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: "Corte de cabello" },
      price: 25000,
      priceCurrency: "COP",
    },
    {
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: "Manicure" },
      price: 30000,
      priceCurrency: "COP",
    },
    {
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: "Depilación bozo" },
      price: 18000,
      priceCurrency: "COP",
    },
  ],
} as const;
