import type { Metadata } from "next";
import SchemaOrg from "../../(landing)/components/seo/SchemaOrg";
import PageHeader from "../../(landing)/components/ui/PageHeader";
import PageFooter from "../../(landing)/components/ui/PageFooter";
import SectorPageContent from "../../(landing)/components/ui/SectorPageContent";

export const metadata: Metadata = {
  title: "Software para Salones de Belleza | Reservas + WhatsApp 24/7",
  description:
    "Sistema de agendamiento para tu salón de belleza. Reservas 24/7 + WhatsApp desde tu número. Reduce ausencias un 70%. Sin permanencia. Desde $10/mes.",
  keywords: [
    "software para salones de belleza",
    "agenda para salones",
    "sistema de reservas belleza",
    "agendamiento salón de belleza",
    "software manicure pedicure",
    "gestión de citas belleza",
    "recordatorios WhatsApp salón",
  ],
  alternates: { canonical: "https://agenditapp.com/sectores/salones-belleza" },
  openGraph: {
    title: "Software para Salones de Belleza | Reservas 24/7 + WhatsApp",
    description:
      "Sistema de agendamiento para tu salón de belleza. Reservas 24/7 + WhatsApp desde tu número. Reduce ausencias un 70%. Sin permanencia. Desde $10/mes.",
    url: "https://agenditapp.com/sectores/salones-belleza",
    images: [{ url: "/og?title=Salones%20de%20Belleza&subtitle=Software%20de%20Agendamiento%20%C2%B7%20AgenditApp&tag=Sector", width: 1200, height: 630, alt: "Software de Agendamiento para Salones de Belleza — AgenditApp" }],
  },
};

const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://agenditapp.com" },
    { "@type": "ListItem", position: 2, name: "Sectores", item: "https://agenditapp.com/sectores" },
    { "@type": "ListItem", position: 3, name: "Salones de Belleza", item: "https://agenditapp.com/sectores/salones-belleza" },
  ],
};

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Software de Agendamiento para Salones de Belleza",
  provider: { "@type": "Organization", name: "AgenditApp", url: "https://agenditapp.com" },
  areaServed: { "@type": "Country", name: "Colombia" },
  audience: { "@type": "BusinessAudience", name: "Salones de Belleza, Peluquerías y Estéticas" },
};

const features = [
  { title: "Agenda personalizada por servicio", description: "Configura duraciones específicas para manicure, pedicure, tintes, cortes y tratamientos.", icon: "📅" },
  { title: "Recordatorios automáticos", description: "Reduce ausencias hasta 70% con recordatorios por WhatsApp 24 horas antes.", icon: "📲" },
  { title: "Gestión de estilistas", description: "Asigna citas por estilista, controla horarios y disponibilidad en tiempo real.", icon: "👩‍🦰" },
  { title: "Catálogo de servicios", description: "Muestra tus servicios con precios y duración. Tus clientes reservan lo que necesitan.", icon: "💅" },
  { title: "Control de pagos", description: "Registra pagos, abonos y métodos de pago. Reportes financieros automáticos.", icon: "💰" },
  { title: "Página web incluida", description: "Landing personalizada para que tus clientes reserven online 24/7.", icon: "🌐" },
];

const FAQS = [
  { q: "¿Puedo gestionar múltiples estilistas con horarios distintos?", a: "Sí. AgenditApp permite crear perfiles por estilista, asignar servicios específicos a cada uno y gestionar su disponibilidad de forma independiente. Los clientes pueden elegir con quién quieren ser atendidos al reservar." },
  { q: "¿Los recordatorios de WhatsApp salen desde mi número del salón?", a: "Exactamente. A diferencia de otras plataformas que envían desde números genéricos, AgenditApp configura los recordatorios para que salgan desde el número de WhatsApp de tu negocio, lo que aumenta la tasa de apertura y respuesta." },
  { q: "¿Puedo mostrar mis servicios con precios y duración?", a: "Sí. Puedes crear un catálogo completo de servicios con nombre, descripción, duración y precio. Tus clientes ven exactamente qué van a recibir y por cuánto tiempo al momento de reservar." },
  { q: "¿Cuánto cuesta y hay permanencia?", a: "Los planes comienzan desde $10 USD al mes. No hay permanencias ni cláusulas de fidelidad — pagas mes a mes y puedes cancelar cuando quieras." },
  { q: "¿Mis clientes necesitan descargar alguna aplicación?", a: "No. Tus clientes reservan directamente desde tu página web personalizada usando el navegador de su celular, sin necesidad de descargar nada." },
];

export default function SalonesBellezaPage() {
  return (
    <>
      <SchemaOrg data={[BREADCRUMB_SCHEMA, SERVICE_SCHEMA]} />
      <PageHeader />
      <SectorPageContent
        sectorName="Salones de Belleza"
        icon="💇‍♀️"
        h1="Salones de Belleza"
        description="Optimiza la gestión de tu salón con reservas online automáticas, recordatorios por WhatsApp y control completo de servicios y estilistas. Sin permanencia."
        features={features}
        featuresHeading="Todo lo que necesitas para tu salón"
        testimonial={{
          quote: "Desde que uso AgenditApp, mis clientas reservan solas y las ausencias bajaron un montón. ¡Lo recomiendo!",
          author: "Laura M. — Salón de Belleza en Bogotá",
        }}
        faqs={FAQS}
        relatedSectors={[
          { title: "Barberías", slug: "barberias", icon: "💈", description: "Sistema de turnos para barberos y servicios express" },
          { title: "Spas y Bienestar", slug: "spas", icon: "🧖‍♀️", description: "Gestión de masajes, faciales y tratamientos" },
          { title: "Lash & Brow Studios", slug: "lash-brow", icon: "👁️", description: "Agenda para extensiones de pestañas y microblading" },
        ]}
        ctaHeading="¿Lista para digitalizar tu salón?"
        ctaBody="Únete a cientos de salones que ya usan AgenditApp. Sin instalaciones complejas, sin permanencia."
      />
      <PageFooter />
    </>
  );
}
