import type { Metadata } from "next";
import SchemaOrg from "../../(landing)/components/seo/SchemaOrg";
import PageHeader from "../../(landing)/components/ui/PageHeader";
import PageFooter from "../../(landing)/components/ui/PageFooter";
import SectorPageContent from "../../(landing)/components/ui/SectorPageContent";

export const metadata: Metadata = {
  title: "Software para Estética Médica | Sistema de Citas Tratamientos",
  description:
    "Sistema de agendamiento para centros de estética médica. Gestiona botox, láser, tratamientos faciales y corporales con agenda profesional.",
  keywords: ["software estética médica", "agenda botox", "sistema de citas medicina estética", "agendamiento láser", "gestión tratamientos estéticos"],
  alternates: { canonical: "https://agenditapp.com/sectores/estetica-medica" },
  openGraph: {
    title: "Software para Estética Médica | AgenditApp",
    description: "Gestiona tratamientos estéticos, botox, láser y procedimientos con reservas online profesionales.",
    url: "https://agenditapp.com/sectores/estetica-medica",
    images: ["/inicio_page.png"],
  },
};

const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://agenditapp.com" },
    { "@type": "ListItem", position: 2, name: "Sectores", item: "https://agenditapp.com/sectores" },
    { "@type": "ListItem", position: 3, name: "Estética Médica", item: "https://agenditapp.com/sectores/estetica-medica" },
  ],
};

const features = [
  { title: "Agenda de procedimientos", description: "Botox, rellenos, láser, faciales médicos. Cada tratamiento con su tiempo y protocolo.", icon: "💉" },
  { title: "Recordatorios automáticos", description: "Notificaciones por WhatsApp con preparación previa al procedimiento.", icon: "📲" },
  { title: "Historial de pacientes", description: "Registro de tratamientos anteriores, dosis y seguimiento post-procedimiento.", icon: "📋" },
  { title: "Múltiples profesionales", description: "Coordina agenda de médicos estéticos, enfermeros y especialistas del centro.", icon: "🏥" },
  { title: "Reservas con anticipación", description: "Tus pacientes agendan con semanas de anticipación desde tu página web.", icon: "📅" },
  { title: "Control de pagos", description: "Registra pagos por procedimiento, paquetes de sesiones y abonos de pacientes.", icon: "💰" },
];

export default function EsteticaMedicaPage() {
  return (
    <>
      <SchemaOrg data={BREADCRUMB_SCHEMA} />
      <PageHeader />
      <SectorPageContent
        sectorName="Estética Médica"
        icon="💉"
        h1="Centros de Estética Médica"
        description="Gestiona tu centro de medicina estética con herramientas profesionales. Organiza tratamientos, procedimientos y seguimiento con reservas online y recordatorios automáticos."
        features={features}
        featuresHeading="Todo para tu centro de estética médica"
        relatedSectors={[
          { title: "Salones de Belleza", slug: "salones-belleza", icon: "💇‍♀️", description: "Sistema completo para manicure, pedicure y tratamientos" },
          { title: "Barberías", slug: "barberias", icon: "💈", description: "Sistema de turnos para barberos y servicios express" },
          { title: "Spas y Bienestar", slug: "spas", icon: "🧖‍♀️", description: "Gestión de masajes, faciales y tratamientos" },
        ]}
        ctaHeading="¿Listo para profesionalizar tu centro?"
        ctaBody="Únete a centros de estética médica que ya confían en AgenditApp para gestionar sus procedimientos."
      />
      <PageFooter />
    </>
  );
}
