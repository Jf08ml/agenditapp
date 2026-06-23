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

export const JSONLD_ORGANIZATION = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "AgenditApp",
  url: "https://agenditapp.com",
  logo: "https://agenditapp.com/logo_dorado.png",
  description:
    "Software de agendamiento online y gestión de negocios para salones de belleza, barberías, spas y consultorios en Latinoamérica.",
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
    availableLanguage: ["Spanish"],
    areaServed: ["CO", "MX", "CR", "CL"],
  },
  sameAs: [
    "https://www.facebook.com/profile.php?id=61587186579271",
    "https://www.instagram.com/agenditapp/",
    "https://www.linkedin.com/company/agenditapp",
    "https://www.g2.com/products/agenditapp",
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
  url: "https://agenditapp.com",
  applicationCategory: "BusinessApplication",
  applicationSubCategory: "Appointment Scheduling Software",
  operatingSystem: "Web",
  softwareVersion: "1.0",
  datePublished: "2024-01-01",
  inLanguage: "es-CO",
  description:
    "Software de agendamiento online y gestión de negocios para salones de belleza, barberías, spas y consultorios en Latinoamérica. Reservas 24/7, recordatorios automáticos por WhatsApp y gestión completa del negocio.",
  featureList: [
    "Reservas online 24/7",
    "Recordatorios automáticos por WhatsApp",
    "Calendario visual de citas",
    "Gestión de servicios y empleados",
    "Base de datos de clientes",
    "Comisiones y nómina",
    "Programa de fidelización",
    "Campañas masivas por WhatsApp",
    "Dominio personalizado",
    "Página de reservas con marca propia",
    "Análisis de horas pico",
    "Panel administrativo completo",
  ],
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
} as const;

export const JSONLD_FAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Cuánto cuesta AgenditApp?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Los planes van desde $10 USD/mes (Básico) hasta $30 USD/mes (Marca Propia). Todos son mes a mes, sin contratos ni permanencia. Incluyen reservas ilimitadas y soporte por WhatsApp.",
      },
    },
    {
      "@type": "Question",
      name: "¿Tiene permanencia o cláusulas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Todos los planes son mes a mes y puedes cancelar cuando quieras sin penalizaciones ni trámites.",
      },
    },
    {
      "@type": "Question",
      name: "¿Los recordatorios salen desde mi número de WhatsApp?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. En los planes que incluyen WhatsApp, los mensajes se envían desde tu número oficial de WhatsApp Business, no desde un número desconocido.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuántas citas puedo recibir con AgenditApp?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ilimitadas en todos los planes. No hay cobro extra por cantidad de reservas ni por número de clientes.",
      },
    },
    {
      "@type": "Question",
      name: "¿Mis clientes necesitan descargar una app para reservar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Tus clientes reservan desde un enlace web que puedes compartir por WhatsApp, Instagram o redes sociales. No necesitan instalar nada.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué tipo de negocios pueden usar AgenditApp?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Si trabajas con citas o turnos, AgenditApp es para ti. Se usa en salones de belleza, barberías, spas, consultorios médicos, psicólogos, odontólogos, nutricionistas, veterinarias, gimnasios, estudios de fotografía, profesores de música, yoga, danza, tutorías y más.",
      },
    },
    {
      "@type": "Question",
      name: "¿Necesito conocimientos técnicos para usar la plataforma?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. AgenditApp es muy intuitivo y fácil de usar. Ofrecemos capacitación inicial y soporte técnico para que empieces desde el primer día.",
      },
    },
    {
      "@type": "Question",
      name: "¿Puedo gestionar varios empleados?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Cada empleado tiene su propio horario, servicios y agenda. Puedes ver todo desde un solo panel y gestionar comisiones automáticamente.",
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
