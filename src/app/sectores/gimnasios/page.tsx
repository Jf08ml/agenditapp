import type { Metadata } from "next";
import SchemaOrg from "../../(landing)/components/seo/SchemaOrg";
import PageHeader from "../../(landing)/components/ui/PageHeader";
import PageFooter from "../../(landing)/components/ui/PageFooter";
import SectorPageContent from "../../(landing)/components/ui/SectorPageContent";

export const metadata: Metadata = {
  title: "Software para Gimnasios y Fitness | Sistema de Reservas de Clases",
  description:
    "Sistema de agendamiento para gimnasios, box de crossfit, estudios de yoga y entrenadores personales. Gestiona clases grupales, reservas de cupos y horarios de entrenamiento.",
  keywords: ["software para gimnasios", "agenda fitness", "sistema de reservas clases", "agendamiento gym", "control de cupos"],
  alternates: { canonical: "https://agenditapp.com/sectores/gimnasios" },
  openGraph: {
    title: "Software para Gimnasios y Fitness | AgenditApp",
    description: "Gestiona clases, cupos y entrenadores con reservas online y recordatorios automáticos.",
    url: "https://agenditapp.com/sectores/gimnasios",
    images: ["/inicio_page.png"],
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
