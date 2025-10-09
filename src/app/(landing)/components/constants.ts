export const WHATSAPP_HREF =
  "https://wa.me/573184345284?text=Quiero%20una%20demo%20de%20AgenditApp";

export const JSONLD_SOFTWARE = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "AgenditApp",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    price: "100000",
    priceCurrency: "COP",
    description:
      "Plan mensual con página personalizada, agenda online, recordatorios por WhatsApp, panel administrativo y soporte básico.",
  },
  areaServed: "CO",
  inLanguage: "es-CO",
  url: "https://agenditapp.com",
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
