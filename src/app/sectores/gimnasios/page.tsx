import type { Metadata } from "next";
import SchemaOrg from "../../(landing)/components/seo/SchemaOrg";
import PageHeader from "../../(landing)/components/ui/PageHeader";
import PageFooter from "../../(landing)/components/ui/PageFooter";
import SectorPageContent from "../../(landing)/components/ui/SectorPageContent";

export const metadata: Metadata = {
  title: "Software para Gimnasios y Fitness | Reservas + WhatsApp",
  description:
    "Agendamiento online para gimnasios: clases grupales con control de cupos, gestión de entrenadores, recordatorios WhatsApp. Reservas 24/7. Desde $10/mes.",
  keywords: ["software para gimnasios", "agenda fitness", "sistema de reservas clases", "agendamiento gym", "control de cupos"],
  alternates: { canonical: "https://agenditapp.com/sectores/gimnasios" },
  openGraph: {
    title: "Software para Gimnasios y Fitness | Reservas + WhatsApp",
    description:
      "Agendamiento online para gimnasios: clases grupales con control de cupos, gestión de entrenadores, recordatorios WhatsApp. Reservas 24/7. Desde $10/mes.",
    url: "https://agenditapp.com/sectores/gimnasios",
    images: [{ url: "/og?title=Gimnasios%20y%20Fitness&subtitle=Software%20de%20Agendamiento%20%C2%B7%20AgenditApp&tag=Sector", width: 1200, height: 630, alt: "Software de Agendamiento para Gimnasios y Fitness — AgenditApp" }],
  },
};

const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://agenditapp.com" },
    { "@type": "ListItem", position: 2, name: "Sectores", item: "https://agenditapp.com/sectores" },
    { "@type": "ListItem", position: 3, name: "Gimnasios y Fitness", item: "https://agenditapp.com/sectores/gimnasios" },
  ],
};

const features = [
  { title: "Reserva de clases grupales", description: "Control de cupos por clase. Tus alumnos reservan online y tú ves ocupación en tiempo real.", icon: "🏋️‍♀️" },
  { title: "Gestión de entrenadores", description: "Asigna horarios y clases a cada entrenador. Controla productividad y disponibilidad.", icon: "👨‍🏫" },
  { title: "Recordatorios de clases", description: "Notificaciones automáticas por WhatsApp para reducir ausencias y confirmar asistencia.", icon: "📲" },
  { title: "Reportes de asistencia", description: "Conoce tus clases más populares y horarios pico. Optimiza la oferta de clases.", icon: "📊" },
  { title: "Múltiples modalidades", description: "Yoga, crossfit, spinning, pilates, entrenamiento personal. Todo en una sola plataforma.", icon: "🎯" },
  { title: "Página web incluida", description: "Landing con horario de clases para que tus alumnos reserven online 24/7.", icon: "🌐" },
];

const FAQS = [
  { q: "¿Puedo gestionar clases grupales con cupos limitados?", a: "Sí. Puedes definir el número máximo de cupos por clase y el sistema cierra reservas automáticamente cuando se llena. Los alumnos ven en tiempo real cuántos lugares quedan disponibles." },
  { q: "¿Los alumnos pueden reservar desde el celular sin descargar nada?", a: "Sí. Tus alumnos acceden a tu horario de clases desde el navegador de su celular, eligen la clase y reservan su cupo en menos de un minuto, sin aplicaciones adicionales." },
  { q: "¿Se pueden gestionar entrenadores personales y clases grupales en el mismo sistema?", a: "Perfectamente. Puedes tener servicios de clase grupal (con cupos) y sesiones individuales con entrenador (sin cupos) en la misma plataforma, con agendas separadas por profesional." },
  { q: "¿Funciona para diferentes modalidades como yoga, crossfit y spinning?", a: "Sí. Puedes crear tantos tipos de clase como quieras, cada uno con su duración, cupos, instructor asignado y precio. Todo en una sola plataforma." },
  { q: "¿Cuánto cuesta y hay permanencia?", a: "Los planes comienzan desde $10 USD al mes, sin permanencia. Cancelas cuando quieras. El plan Esencial incluye recordatorios automáticos por WhatsApp para confirmar asistencia." },
];

export default function GimnasiosPage() {
  return (
    <>
      <SchemaOrg data={BREADCRUMB_SCHEMA} />
      <PageHeader />
      <SectorPageContent
        sectorName="Gimnasios y Fitness"
        icon="🏋️‍♀️"
        h1="Gimnasios y Fitness"
        description="Gestiona clases grupales, entrenamientos personales y cupos en tiempo real. Sistema completo para gimnasios, boxes de crossfit y estudios de yoga."
        features={features}
        featuresHeading="Todo para optimizar tu gimnasio"
        faqs={FAQS}
        relatedSectors={[
          { title: "Escuelas de Danza y Yoga", slug: "danza-yoga", icon: "💃", description: "Reserva de clases, talleres y gestión de instructores" },
          { title: "Nutricionistas", slug: "nutricion", icon: "🥗", description: "Consultas nutricionales y seguimiento de pacientes" },
          { title: "Tutores y Academias", slug: "tutorias", icon: "📚", description: "Sistema de reservas para clases particulares" },
        ]}
        ctaHeading="¿Listo para optimizar tu gimnasio?"
        ctaBody="Únete a gimnasios que ya confían en AgenditApp. Sin permanencia, sin complicaciones."
      />
      <PageFooter />
    </>
  );
}
