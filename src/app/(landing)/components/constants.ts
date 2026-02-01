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
  foundingDate: "2024",
  foundingLocation: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressCountry: "CO",
    },
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+57-318-434-5284",
    contactType: "customer service",
    availableLanguage: ["Spanish"],
    areaServed: "CO",
    contactOption: "TollFree",
  },
  sameAs: [
    "https://www.facebook.com/profile.php?id=61587186579271",
    "https://www.instagram.com/agenditapp/",
  ],
  knowsAbout: [
    "Software de agendamiento",
    "Gestión de citas",
    "Automatización de reservas",
    "Marketing para salones de belleza",
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
  datePublished: "2024-01-01",
  author: {
    "@type": "Organization",
    name: "AgenditApp",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    ratingCount: "120",
    bestRating: "5",
    worstRating: "1",
  },
  offers: {
    "@type": "Offer",
    price: "30",
    priceCurrency: "USD",
    priceValidUntil: "2026-12-31",
    availability: "https://schema.org/InStock",
    description:
      "Plan mensual con página personalizada, agenda online, recordatorios por WhatsApp, panel administrativo y soporte básico.",
    seller: {
      "@type": "Organization",
      name: "AgenditApp",
    },
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
  applicationSubCategory: "Appointment Scheduling Software",
  sameAs: [
    "https://www.facebook.com/profile.php?id=61587186579271",
    "https://www.instagram.com/agenditapp/",
  ],
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
    {
      "@type": "Question",
      name: "¿Qué tipo de negocios pueden usar AgenditApp?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AgenditApp es ideal para salones de belleza, barberías, spas, consultorios médicos, psicólogos, nutricionistas, veterinarias, gimnasios, estudios de fotografía, profesores de música, yoga, danza, tutorías y cualquier negocio que trabaje con citas programadas.",
      },
    },
    {
      "@type": "Question",
      name: "¿Necesito conocimientos técnicos para usar la plataforma?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. AgenditApp es muy intuitivo y fácil de usar. Además, ofrecemos capacitación inicial y soporte técnico para que puedas aprovechar todas las funcionalidades desde el primer día.",
      },
    },
    {
      "@type": "Question",
      name: "¿Mis clientes necesitan descargar una app?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Tus clientes pueden agendar directamente desde tu página web personalizada que incluye AgenditApp, sin necesidad de descargar ninguna aplicación.",
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
      price: 25,
      priceCurrency: "USD",
    },
    {
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: "Manicure" },
      price: 30,
      priceCurrency: "USD",
    },
    {
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: "Depilación bozo" },
      price: 18,
      priceCurrency: "USD",
    },
  ],
} as const;

export const JSONLD_WEBSITE = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "AgenditApp",
  url: "https://agenditapp.com",
  description:
    "Sistema de agendamiento online y gestión de citas para negocios de belleza, bienestar y servicios profesionales en Colombia",
  inLanguage: "es-CO",
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
} as const;
