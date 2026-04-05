import type { Metadata } from "next";
import SchemaOrg from "../../(landing)/components/seo/SchemaOrg";
import PageHeader from "../../(landing)/components/ui/PageHeader";
import PageFooter from "../../(landing)/components/ui/PageFooter";
import SectorPageContent from "../../(landing)/components/ui/SectorPageContent";

export const metadata: Metadata = {
  title: "Software Médico de Citas | Sistema para Consultorios y Clínicas",
  description:
    "Sistema de agendamiento online para consultorios médicos, clínicas y profesionales de la salud. Gestiona consultas, terapias, odontología y más. Recordatorios automáticos y control de pacientes. Prueba gratis.",
  keywords: ["software para consultorios", "agenda médica", "sistema de citas médicas", "agendamiento clínica", "gestión de pacientes"],
  alternates: { canonical: "https://agenditapp.com/sectores/consultorios" },
  openGraph: {
    title: "Software Médico de Citas | AgenditApp",
    description: "Moderniza tu consultorio con reservas online, control de pacientes y recordatorios por WhatsApp.",
    url: "https://agenditapp.com/sectores/consultorios",
    images: ["/inicio_page.png"],
  },
};

const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://agenditapp.com" },
    { "@type": "ListItem", position: 2, name: "Sectores", item: "https://agenditapp.com/sectores" },
    { "@type": "ListItem", position: 3, name: "Consultorios y Clínicas", item: "https://agenditapp.com/sectores/consultorios" },
  ],
};

const features = [
  { title: "Agenda por profesional", description: "Gestiona horarios de médicos, terapeutas, dentistas. Cada uno con su propia agenda.", icon: "👨‍⚕️" },
  { title: "Control de pacientes", description: "Historial de citas, notas médicas básicas y seguimiento de tratamientos.", icon: "📋" },
  { title: "Recordatorios de consultas", description: "Reduce inasistencias con recordatorios automáticos por WhatsApp 24h antes.", icon: "📲" },
  { title: "Reservas online seguras", description: "Tus pacientes agendan desde tu página web en horarios disponibles.", icon: "🔒" },
  { title: "Especialidades configurables", description: "Medicina general, odontología, psicología, fisioterapia. Configura duraciones específicas.", icon: "🏥" },
  { title: "Reportes de ocupación", description: "Conoce tus horas más demandadas y optimiza la disponibilidad de tu equipo.", icon: "📊" },
];

export default function ConsultoriosPage() {
  return (
    <>
      <SchemaOrg data={BREADCRUMB_SCHEMA} />
      <PageHeader />
      <SectorPageContent
        sectorName="Consultorios y Clínicas"
        icon="🏥"
        h1="Consultorios y Clínicas"
        description="Moderniza tu consultorio con reservas online automáticas, control de pacientes, recordatorios por WhatsApp y agenda por profesional. Sin permanencia."
        features={features}
        featuresHeading="Todo lo que necesitas para tu consultorio"
        relatedSectors={[
          { title: "Odontología", slug: "odontologia", icon: "🦷", description: "Sistema de citas para dentistas y tratamientos" },
          { title: "Psicología y Terapia", slug: "psicologia", icon: "🧠", description: "Agenda confidencial para psicólogos y terapeutas" },
          { title: "Nutricionistas", slug: "nutricion", icon: "🥗", description: "Reserva de consultas nutricionales y seguimiento" },
        ]}
        ctaHeading="Moderniza tu consultorio hoy"
        ctaBody="Únete a profesionales de la salud que ya optimizaron su agenda. Sin permanencia."
      />
      <PageFooter />
    </>
  );
}
