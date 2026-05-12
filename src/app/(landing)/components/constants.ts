export const WHATSAPP_HREF =
  "https://wa.me/573184345284?text=Hola%20%F0%9F%91%8B%20quiero%20mi%20demo%20de%20AgenditApp%20para%20mi%20negocio";

export const SIGNUP_HREF = "https://app.agenditapp.com/signup";

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
    price: "10",
    priceCurrency: "USD",
    priceValidUntil: "2026-12-31",
    availability: "https://schema.org/InStock",
    description:
      "Plan mensual con página personalizada, agenda online, recordatorios por WhatsApp, panel administrativo y soporte básico.",
    seller: {
      "@type": "Organization",
      name: "AgenditApp",
    },
    hasMerchantReturnPolicy: {
      "@type": "MerchantReturnPolicy",
      applicableCountry: "CO",
      returnPolicyCategory:
        "https://schema.org/MerchantReturnNotPermitted",
      merchantReturnDays: 0,
    },
    shippingDetails: {
      "@type": "OfferShippingDetails",
      shippingRate: {
        "@type": "MonetaryAmount",
        value: "0",
        currency: "USD",
      },
      shippingDestination: {
        "@type": "DefinedRegion",
        addressCountry: "CO",
      },
      deliveryTime: {
        "@type": "ShippingDeliveryTime",
        handlingTime: {
          "@type": "QuantitativeValue",
          minValue: 0,
          maxValue: 0,
          unitCode: "DAY",
        },
        transitTime: {
          "@type": "QuantitativeValue",
          minValue: 0,
          maxValue: 0,
          unitCode: "DAY",
        },
      },
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
  name: "Planes de AgenditApp — Software de Agendamiento Online",
  itemListElement: [
    {
      "@type": "Offer",
      name: "Plan Básico",
      description: "Para organizar tu agenda y empezar a recibir reservas online. Incluye reservas y citas ilimitadas 24/7, panel administrativo completo, gestión de servicios, empleados y clientes.",
      price: "10",
      priceCurrency: "USD",
      priceSpecification: { "@type": "UnitPriceSpecification", price: "10", priceCurrency: "USD", unitText: "mes" },
      itemOffered: { "@type": "Service", name: "AgenditApp Plan Básico" },
    },
    {
      "@type": "Offer",
      name: "Plan Esencial",
      description: "Automatiza WhatsApp y reduce ausencias con recordatorios. Incluye todo lo del plan Básico más recordatorios automáticos por WhatsApp desde tu número Business.",
      price: "20",
      priceCurrency: "USD",
      priceSpecification: { "@type": "UnitPriceSpecification", price: "20", priceCurrency: "USD", unitText: "mes" },
      itemOffered: { "@type": "Service", name: "AgenditApp Plan Esencial" },
    },
    {
      "@type": "Offer",
      name: "Plan Marca Propia",
      description: "Dominio propio y campañas masivas de WhatsApp para crecer. Incluye todo lo del plan Esencial más dominio personalizado y envíos masivos.",
      price: "30",
      priceCurrency: "USD",
      priceSpecification: { "@type": "UnitPriceSpecification", price: "30", priceCurrency: "USD", unitText: "mes" },
      itemOffered: { "@type": "Service", name: "AgenditApp Plan Marca Propia" },
    },
  ],
} as const;

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
