import type { Metadata } from "next";
import SchemaOrg from "../../(landing)/components/seo/SchemaOrg";
import PageHeader from "../../(landing)/components/ui/PageHeader";
import PageFooter from "../../(landing)/components/ui/PageFooter";
import SectorPageContent from "../../(landing)/components/ui/SectorPageContent";

export const metadata: Metadata = {
  title: "Software para Barberías | Sistema de Agendamiento Online",
  description:
    "Sistema de reservas online para barberías. Gestiona citas de cortes, barba, afeitado y servicios express. Recordatorios automáticos por WhatsApp. Control de barberos y turnos en tiempo real. Prueba gratis.",
  keywords: [
    "software para barberías",
    "agenda para barbería",
    "sistema de turnos barbería",
    "reservas online barbería",
    "agendamiento barbero",
    "software cortes de cabello",
    "gestión de barbería",
  ],
  alternates: { canonical: "https://agenditapp.com/sectores/barberias" },
  openGraph: {
    title: "Software para Barberías | AgenditApp",
    description: "Automatiza tu barbería. Reservas online, recordatorios por WhatsApp y gestión de barberos.",
    url: "https://agenditapp.com/sectores/barberias",
    images: [{ url: "/og?title=Barber%C3%ADas&subtitle=Software%20de%20Agendamiento%20%C2%B7%20AgenditApp&tag=Sector", width: 1200, height: 630, alt: "Software de Agendamiento para Barberías — AgenditApp" }],
  },
};

const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://agenditapp.com" },
    { "@type": "ListItem", position: 2, name: "Sectores", item: "https://agenditapp.com/sectores" },
    { "@type": "ListItem", position: 3, name: "Barberías", item: "https://agenditapp.com/sectores/barberias" },
  ],
};

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Software de Agendamiento para Barberías",
  provider: { "@type": "Organization", name: "AgenditApp", url: "https://agenditapp.com" },
  areaServed: { "@type": "Country", name: "Colombia" },
  audience: { "@type": "BusinessAudience", name: "Barberías y Barberos Profesionales" },
};

const features = [
  { title: "Turnos express optimizados", description: "Gestiona turnos cortos de 20-30 min. Ideal para cortes rápidos y alto flujo de clientes.", icon: "⏱️" },
  { title: "Gestión de barberos", description: "Asigna clientes por barbero, controla horarios y descansos. Reportes de productividad.", icon: "✂️" },
  { title: "Servicios personalizados", description: "Corte, barba, afeitado, diseño. Configura duración y precio de cada servicio.", icon: "💈" },
  { title: "Recordatorios automáticos", description: "Envía recordatorios por WhatsApp para evitar ausencias y optimizar tu agenda.", icon: "📲" },
  { title: "Sin instalaciones", description: "Todo en la nube. Accede desde tu celular, tablet o computadora desde cualquier lugar.", icon: "☁️" },
  { title: "Página web incluida", description: "Landing personalizada para que tus clientes reserven online las 24 horas.", icon: "🌐" },
];

const FAQS = [
  { q: "¿Puedo gestionar múltiples barberos con horarios independientes?", a: "Sí. Puedes crear un perfil por barbero, asignarle servicios específicos y horarios propios. Los clientes pueden elegir a su barbero favorito al reservar." },
  { q: "¿Funciona bien para turnos cortos de 20-30 minutos?", a: "Perfectamente. AgenditApp permite configurar servicios con duraciones desde 15 minutos, ideal para cortes express, barba o arreglos rápidos con alto flujo de clientes." },
  { q: "¿Los clientes pueden reservar desde Instagram o WhatsApp?", a: "Sí. Puedes compartir tu link de reservas en Instagram, WhatsApp y Google. Tus clientes reservan en segundos sin necesidad de llamar ni escribir." },
  { q: "¿Cuánto cuesta AgenditApp para barberías?", a: "Los planes comienzan desde $10 USD al mes, con reservas ilimitadas y panel administrativo completo. El plan Esencial ($20 USD) incluye recordatorios automáticos por WhatsApp desde tu propio número." },
  { q: "¿Hay permanencia o contrato mínimo?", a: "No. Es mes a mes, sin permanencia ni cláusulas. Puedes cancelar cuando quieras desde tu panel de administración." },
];

export default function BarberiasPage() {
  return (
    <>
      <SchemaOrg data={[BREADCRUMB_SCHEMA, SERVICE_SCHEMA]} />
      <PageHeader />
      <SectorPageContent
        sectorName="Barberías"
        icon="💈"
        h1="Barberías"
        description="Optimiza tu barbería con reservas online automáticas, control de turnos express y recordatorios por WhatsApp. Aumenta tu facturación sin perder tiempo."
        features={features}
        featuresHeading="Todo lo que necesitas para tu barbería"
        faqs={FAQS}
        relatedSectors={[
          { title: "Salones de Belleza", slug: "salones-belleza", icon: "💇‍♀️", description: "Sistema completo para manicure, pedicure y tratamientos" },
          { title: "Estética Médica", slug: "estetica-medica", icon: "💉", description: "Agenda para tratamientos faciales y procedimientos" },
          { title: "Gimnasios y Fitness", slug: "gimnasios", icon: "🏋️‍♀️", description: "Reservas de clases y entrenamiento personal" },
        ]}
        ctaHeading="Lleva tu barbería al siguiente nivel"
        ctaBody="Únete a cientos de barberías que ya optimizaron su agenda. Sin permanencia."
      />
      <PageFooter />
    </>
  );
}
