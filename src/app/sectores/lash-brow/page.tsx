import type { Metadata } from "next";
import SchemaOrg from "../../(landing)/components/seo/SchemaOrg";
import PageHeader from "../../(landing)/components/ui/PageHeader";
import PageFooter from "../../(landing)/components/ui/PageFooter";
import SectorPageContent from "../../(landing)/components/ui/SectorPageContent";

export const metadata: Metadata = {
  title: "Software para Lash & Brow Studios | Sistema de Reservas Online",
  description:
    "Sistema de agendamiento online para estudios de pestañas y cejas. Gestiona extensiones de pestañas, microblading, lash lift y servicios especializados. Recordatorios automáticos por WhatsApp.",
  keywords: ["software para lash studios", "agenda para extensiones pestañas", "sistema de citas microblading", "agendamiento lash brow"],
  alternates: { canonical: "https://agenditapp.com/sectores/lash-brow" },
  openGraph: {
    title: "Software para Lash & Brow Studios | AgenditApp",
    description: "Profesionaliza tu estudio con reservas online, recordatorios automáticos y control de agenda.",
    url: "https://agenditapp.com/sectores/lash-brow",
    images: ["/inicio_page.png"],
  },
};

const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://agenditapp.com" },
    { "@type": "ListItem", position: 2, name: "Sectores", item: "https://agenditapp.com/sectores" },
    { "@type": "ListItem", position: 3, name: "Lash & Brow Studios", item: "https://agenditapp.com/sectores/lash-brow" },
  ],
};

const features = [
  { title: "Agenda por tipo de servicio", description: "Extensiones, lifting, microblading, diseño de cejas. Cada servicio con su duración exacta.", icon: "👁️" },
  { title: "Recordatorios automáticos", description: "Tus clientas reciben confirmación y recordatorio por WhatsApp con instrucciones previas.", icon: "📲" },
  { title: "Control de materiales y citas", description: "Registra el tipo de fibra, curva y extensión usada por clienta para seguimiento.", icon: "✨" },
  { title: "Reservas online 24/7", description: "Tus clientas reservan desde tu landing sin llamar. Tú controlas tu disponibilidad.", icon: "📝" },
  { title: "Gestión de retouches", description: "Agenda automática de mantenimientos cada 3-4 semanas según el servicio.", icon: "🔔" },
  { title: "Página web incluida", description: "Landing profesional para mostrar tu portafolio y recibir reservas directas.", icon: "🌐" },
];

export default function LashBrowPage() {
  return (
    <>
      <SchemaOrg data={BREADCRUMB_SCHEMA} />
      <PageHeader />
      <SectorPageContent
        sectorName="Lash & Brow Studios"
        icon="👁️"
        h1="Lash & Brow Studios"
        description="Optimiza tu agenda de extensiones de pestañas, microblading y servicios de cejas. Recordatorios automáticos, reservas online y gestión completa desde tu celular."
        features={features}
        featuresHeading="Todo lo que necesitas para tu estudio"
        testimonial={{
          quote: "AgenditApp cambió mi negocio. Antes perdía clientes por desorden en la agenda, ahora todo fluye. Los recordatorios automáticos hicieron que mis ausencias bajaran a casi cero.",
          author: "Laura — Lash Artist",
        }}
        relatedSectors={[
          { title: "Salones de Belleza", slug: "salones-belleza", icon: "💇‍♀️", description: "Sistema completo para manicure, pedicure y tratamientos" },
          { title: "Barberías", slug: "barberias", icon: "💈", description: "Sistema de turnos para barberos y servicios express" },
          { title: "Estética Médica", slug: "estetica-medica", icon: "💉", description: "Agenda para tratamientos faciales y procedimientos" },
        ]}
        ctaHeading="¿Lista para profesionalizar tu estudio?"
        ctaBody="Únete a cientos de lash artists que ya usan AgenditApp. Sin instalaciones complejas, sin permanencia."
      />
      <PageFooter />
    </>
  );
}
