import type { Metadata } from "next";
import SchemaOrg from "../../(landing)/components/seo/SchemaOrg";
import PageHeader from "../../(landing)/components/ui/PageHeader";
import PageFooter from "../../(landing)/components/ui/PageFooter";
import SectorPageContent from "../../(landing)/components/ui/SectorPageContent";

export const metadata: Metadata = {
  title: "Software para Consultorios y Clínicas | Citas Online 24/7",
  description:
    "Agendamiento online para consultorios y clínicas. Gestión por profesional, recordatorios WhatsApp y reservas 24/7. Sin permanencia. Desde $10/mes.",
  keywords: ["software para consultorios", "agenda médica", "sistema de citas médicas", "agendamiento clínica", "gestión de pacientes"],
  alternates: { canonical: "https://agenditapp.com/sectores/consultorios" },
  openGraph: {
    title: "Software para Consultorios y Clínicas | Citas Online 24/7",
    description:
      "Agendamiento online para consultorios y clínicas. Gestión por profesional, recordatorios WhatsApp y reservas 24/7. Sin permanencia. Desde $10/mes.",
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

const INTRO = (
  <>
    <p>
      En un consultorio médico o centro de salud, una mala gestión de la agenda no solo cuesta tiempo —afecta la continuidad del tratamiento. Cuando los pacientes pierden citas de seguimiento o los protocolos se interrumpen por falta de coordinación, la calidad de la atención se resiente. Y gestionar todo por WhatsApp personal hace imposible mantener un registro real de asistencia.
    </p>
    <p>
      AgenditApp te permite diferenciar tipos de consulta (primera vez, control, procedimiento), configurar duraciones distintas por servicio y enviar recordatorios automáticos desde <strong>tu propio número</strong>. El paciente confirma o reprograma sin llamar al consultorio, y tú tienes un registro completo de asistencia para hacer seguimiento de cada paciente.
    </p>
    <p>
      Para centros con varios profesionales, cada uno gestiona su propia agenda desde el mismo panel. Sin cruces de horario, sin listas de espera en papel, sin la presión de coordinar todo por teléfono.
    </p>
  </>
);

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
        sectorIntro={INTRO}
        features={features}
        featuresHeading="Todo lo que necesitas para tu consultorio"
        faqs={FAQS}
        relatedPosts={[
          { slug: "software-agendamiento-consultorios-terapeutas-colombia", title: "Software de agendamiento para consultorios y centros terapéuticos: guía completa 2026", readingTime: "9 min" },
          { slug: "reducir-inasistencias-salon-belleza-whatsapp", title: "Cómo reducir las inasistencias con recordatorios automáticos por WhatsApp", readingTime: "8 min" },
          { slug: "mejores-apps-agendar-citas-colombia-2026", title: "Las 7 mejores apps para agendar citas en Colombia (2026)", readingTime: "10 min" },
        ]}
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
