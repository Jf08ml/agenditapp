import type { Metadata } from "next";
import SchemaOrg from "../../(landing)/components/seo/SchemaOrg";
import PageHeader from "../../(landing)/components/ui/PageHeader";
import PageFooter from "../../(landing)/components/ui/PageFooter";
import SectorPageContent from "../../(landing)/components/ui/SectorPageContent";

export const metadata: Metadata = {
  title: "Software para Lash & Brow Studios | Citas + WhatsApp",
  description:
    "Sistema de reservas para lash & brow studios: extensiones, microblading, lash lift. WhatsApp desde tu número, ausencias -70%. Desde $10/mes.",
  keywords: ["software para lash studios", "agenda para extensiones pestañas", "sistema de citas microblading", "agendamiento lash brow"],
  alternates: { canonical: "https://agenditapp.com/sectores/lash-brow" },
  openGraph: {
    title: "Software para Lash & Brow Studios | Citas + WhatsApp",
    description:
      "Sistema de reservas para lash & brow studios: extensiones, microblading, lash lift. WhatsApp desde tu número, ausencias -70%. Desde $10/mes.",
    url: "https://agenditapp.com/sectores/lash-brow",
    images: [{ url: "/og?title=Lash%20%26%20Brow%20Studios&subtitle=Software%20de%20Agendamiento%20%C2%B7%20AgenditApp&tag=Sector", width: 1200, height: 630, alt: "Software de Agendamiento para Lash & Brow Studios — AgenditApp" }],
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

const FAQS = [
  { q: "¿Puedo gestionar servicios de larga duración como extensiones completas?", a: "Sí. Puedes configurar servicios de 2 a 3 horas con facilidad. El sistema bloquea ese tiempo en tu agenda automáticamente y no permite reservas que se solapen." },
  { q: "¿Los recordatorios pueden incluir instrucciones previas al servicio?", a: "Sí. Personalizas el mensaje de WhatsApp con indicaciones específicas: llegar sin maquillaje en los ojos, no usar cremas aceitosas, etc. Se envía automáticamente 24h antes." },
  { q: "¿Puedo agendar retouches de mantenimiento con intervalo fijo?", a: "Sí. Puedes crear un servicio de 'Retouch' con su propia duración y precio, diferente al servicio inicial. Tus clientas lo reservan directamente desde tu página." },
  { q: "¿Mis clientas pueden elegir la técnica o estilo que quieren?", a: "Sí. Puedes crear servicios diferenciados por técnica: volumen ruso, híbrido, clásicas, lifting, microblading, diseño de cejas, etc. Cada uno con su duración y precio." },
  { q: "¿Hay permanencia o contrato mínimo?", a: "No. Es mensual, sin permanencia. Cancelas cuando quieras desde tu panel sin trámites." },
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
        faqs={FAQS}
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
