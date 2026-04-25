import type { Metadata } from "next";
import SchemaOrg from "../../(landing)/components/seo/SchemaOrg";
import PageHeader from "../../(landing)/components/ui/PageHeader";
import PageFooter from "../../(landing)/components/ui/PageFooter";
import SectorPageContent from "../../(landing)/components/ui/SectorPageContent";

export const metadata: Metadata = {
  title: "Software para Salones de Belleza | Sistema de Reservas Online",
  description:
    "Sistema de agendamiento online para salones de belleza. Gestiona citas de manicure, pedicure, tintes, cortes y tratamientos. Recordatorios automáticos por WhatsApp para reducir ausencias. Prueba gratis.",
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
    title: "Software para Salones de Belleza | AgenditApp",
    description:
      "Automatiza tu agenda de belleza. Reservas online, recordatorios por WhatsApp y gestión completa de servicios.",
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
