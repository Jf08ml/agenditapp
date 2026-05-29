import type { Metadata } from "next";
import SchemaOrg from "../../(landing)/components/seo/SchemaOrg";
import PageHeader from "../../(landing)/components/ui/PageHeader";
import PageFooter from "../../(landing)/components/ui/PageFooter";
import SectorPageContent from "../../(landing)/components/ui/SectorPageContent";

export const metadata: Metadata = {
  title: "Software para Odontólogos | Citas Online + WhatsApp 24/7",
  description:
    "Sistema de citas para odontólogos: agenda por tipo de tratamiento, recordatorios WhatsApp con instrucciones previas y control de pacientes. Desde $10/mes.",
  alternates: { canonical: "https://agenditapp.com/sectores/odontologia" },
  openGraph: {
    title: "Software para Odontólogos | Citas Online + WhatsApp 24/7",
    description:
      "Sistema de citas para odontólogos: agenda por tipo de tratamiento, recordatorios WhatsApp con instrucciones previas y control de pacientes. Desde $10/mes.",
    url: "https://agenditapp.com/sectores/odontologia",
    images: [{ url: "/og?title=Odont%C3%B3logos&subtitle=Software%20de%20Agendamiento%20%C2%B7%20AgenditApp&tag=Sector", width: 1200, height: 630, alt: "Software de Agendamiento para Odontólogos — AgenditApp" }],
  },
};

const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://agenditapp.com" },
    { "@type": "ListItem", position: 2, name: "Sectores", item: "https://agenditapp.com/sectores" },
    { "@type": "ListItem", position: 3, name: "Odontología", item: "https://agenditapp.com/sectores/odontologia" },
  ],
};

const features = [
  { title: "Agenda dental especializada", description: "Configura citas por tipo de tratamiento: limpieza, ortodoncia, cirugía, blanqueamiento.", icon: "🦷" },
  { title: "Recordatorios automáticos", description: "Tus pacientes reciben recordatorios por WhatsApp con indicaciones previas a la cita.", icon: "📲" },
  { title: "Control de tratamientos", description: "Historial de citas, plan de tratamiento y seguimiento por paciente.", icon: "📋" },
  { title: "Múltiples odontólogos", description: "Gestiona agenda de toda tu clínica con horarios y especialidades por profesional.", icon: "👨‍⚕️" },
  { title: "Reservas online 24/7", description: "Tus pacientes agendan desde tu página web. Sin llamadas, sin lista de espera.", icon: "🔒" },
  { title: "Reportes financieros", description: "Controla ingresos, pagos y abonos por tratamiento. Reportes automáticos.", icon: "💰" },
];

const FAQS = [
  { q: "¿Puedo gestionar tratamientos que requieren múltiples citas?", a: "Sí. Cada cita queda registrada en el historial del paciente. Puedes ver su plan de tratamiento completo, hacer seguimiento de pagos por abono y agendar las citas de continuación." },
  { q: "¿Los recordatorios pueden incluir indicaciones previas a la cita dental?", a: "Sí. Personalizas el mensaje de recordatorio: 'Recuerda no consumir alimentos 2 horas antes', 'Trae tu radiografía', etc. Se envía automáticamente desde el número de tu consultorio." },
  { q: "¿Puedo gestionar múltiples odontólogos con especialidades distintas?", a: "Sí. Cada odontólogo tiene su perfil, agenda y servicios asignados. Puedes tener general, ortodoncista, endodoncista, etc., todos gestionados desde el mismo panel." },
  { q: "¿Los pacientes pueden agendar sin llamar al consultorio?", a: "Exactamente. Tus pacientes reservan desde tu página web 24/7, eligen el tipo de servicio, el profesional y el horario disponible, sin necesidad de llamar o esperar en lista." },
  { q: "¿Cuánto cuesta y hay permanencia?", a: "Los planes comienzan desde $10 USD al mes. Sin permanencia, sin contrato — cancelas cuando quieras. Reservas ilimitadas incluidas en todos los planes." },
];

const INTRO = (
  <>
    <p>
      La odontología tiene una complejidad de agenda particular: los tratamientos se extienden en múltiples sesiones (endodoncia, ortodoncia, prótesis), los pacientes tienen distintos odontólogos y una cita perdida no solo genera un hueco en la agenda —rompe un protocolo clínico. El problema frecuente es el paciente que después de la primera cita no regresa para las sesiones de continuación.
    </p>
    <p>
      AgenditApp permite gestionar tratamientos multi-sesión creando servicios específicos para cada etapa. Los recordatorios automáticos aseguran que el paciente llegue a su próxima cita sin que tengas que llamarlo. Y cuando el mensaje llega desde <strong>tu propio número de WhatsApp</strong>, la tasa de confirmación es significativamente mayor que la de un remitente genérico.
    </p>
    <p>
      Gestiona múltiples odontólogos con sus propios calendarios, procedimientos de distinta duración y control de ocupación desde un solo panel. Tus pacientes reservan desde tu página web 24/7, eligen especialidad y profesional, sin necesidad de llamar ni esperar en línea.
    </p>
  </>
);

export default function OdontologiaPage() {
  return (
    <>
      <SchemaOrg data={BREADCRUMB_SCHEMA} />
      <PageHeader />
      <SectorPageContent
        sectorName="Odontología"
        icon="🦷"
        h1="Odontología"
        description="Optimiza la gestión de tu consultorio dental. Sistema completo para citas, tratamientos, recordatorios automáticos y control de pacientes. Sin permanencia."
        sectorIntro={INTRO}
        features={features}
        featuresHeading="Todo para gestionar tu consultorio dental"
        faqs={FAQS}
        relatedPosts={[
          { slug: "software-agendamiento-consultorios-terapeutas-colombia", title: "Software de agendamiento para consultorios y centros terapéuticos: guía completa 2026", readingTime: "9 min" },
          { slug: "reducir-inasistencias-salon-belleza-whatsapp", title: "Cómo reducir las inasistencias con recordatorios automáticos por WhatsApp", readingTime: "8 min" },
        ]}
        relatedSectors={[
          { title: "Consultorios y Clínicas", slug: "consultorios", icon: "🏥", description: "Sistema de citas para profesionales de la salud" },
          { title: "Psicología y Terapia", slug: "psicologia", icon: "🧠", description: "Agenda confidencial para psicólogos y terapeutas" },
          { title: "Estética Médica", slug: "estetica-medica", icon: "💉", description: "Agenda para tratamientos faciales y procedimientos" },
        ]}
        ctaHeading="¿Listo para modernizar tu consultorio?"
        ctaBody="Únete a odontólogos que ya usan AgenditApp. Sin permanencia, sin complicaciones técnicas."
      />
      <PageFooter />
    </>
  );
}
