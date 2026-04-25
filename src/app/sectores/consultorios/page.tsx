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
    images: [{ url: "/og?title=Consultorios%20y%20Cl%C3%ADnicas&subtitle=Software%20de%20Agendamiento%20%C2%B7%20AgenditApp&tag=Sector", width: 1200, height: 630, alt: "Software de Agendamiento para Consultorios y Clínicas — AgenditApp" }],
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

const FAQS = [
  { q: "¿Es seguro para manejar datos de pacientes?", a: "Sí. AgenditApp maneja la información de tus pacientes de forma segura. Los datos de contacto y citas se almacenan en infraestructura segura y no son compartidos con terceros." },
  { q: "¿Puedo gestionar múltiples profesionales con especialidades distintas?", a: "Absolutamente. Puedes crear perfiles para cada médico, terapeuta o especialista, con sus propios horarios, duraciones de consulta y servicios asignados." },
  { q: "¿Los pacientes pueden reagendar o cancelar sin llamar al consultorio?", a: "Sí. Desde la confirmación de cita, el paciente recibe un enlace para confirmar, cancelar o reprogramar su cita directamente, sin necesidad de llamar." },
  { q: "¿Funciona para diferentes especialidades médicas?", a: "Sí. Puedes configurar duraciones distintas por especialidad: una consulta general de 20 min, una terapia de 60 min, una evaluación inicial de 45 min, etc. Cada servicio tiene su propio tiempo." },
  { q: "¿Cuánto cuesta y hay permanencia?", a: "Los planes comienzan desde $10 USD al mes, sin permanencia. Puedes cancelar en cualquier momento. El plan Esencial ($20 USD) incluye recordatorios automáticos por WhatsApp." },
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
        faqs={FAQS}
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
