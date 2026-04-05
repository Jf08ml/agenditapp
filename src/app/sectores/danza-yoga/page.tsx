import type { Metadata } from "next";
import SchemaOrg from "../../(landing)/components/seo/SchemaOrg";
import PageHeader from "../../(landing)/components/ui/PageHeader";
import PageFooter from "../../(landing)/components/ui/PageFooter";
import SectorPageContent from "../../(landing)/components/ui/SectorPageContent";

export const metadata: Metadata = {
  title: "Software para Escuelas de Danza y Yoga | Sistema de Reservas",
  description:
    "Sistema de agendamiento para escuelas de danza, yoga y pilates. Gestiona clases grupales, talleres, cupos y reservas online.",
  keywords: ["software danza", "agenda yoga", "sistema de reservas clases danza", "agendamiento pilates", "control cupos clases"],
  alternates: { canonical: "https://agenditapp.com/sectores/danza-yoga" },
  openGraph: {
    title: "Software para Escuelas de Danza y Yoga | AgenditApp",
    description: "Gestiona clases, cupos y horarios de tu escuela de danza o yoga con reservas online.",
    url: "https://agenditapp.com/sectores/danza-yoga",
    images: ["/inicio_page.png"],
  },
};

const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://agenditapp.com" },
    { "@type": "ListItem", position: 2, name: "Sectores", item: "https://agenditapp.com/sectores" },
    { "@type": "ListItem", position: 3, name: "Danza y Yoga", item: "https://agenditapp.com/sectores/danza-yoga" },
  ],
};

const features = [
  { title: "Control de cupos por clase", description: "Define cupos máximos. Tus alumnos reservan online y tú ves disponibilidad en tiempo real.", icon: "💃" },
  { title: "Recordatorios de clases", description: "Notificaciones por WhatsApp para confirmar asistencia y reducir ausencias.", icon: "🔔" },
  { title: "Gestión de instructores", description: "Asigna clases y horarios a cada instructor. Controla disponibilidad y especialidades.", icon: "👩‍🏫" },
  { title: "Reportes de asistencia", description: "Conoce tus clases más populares y horarios con mayor demanda.", icon: "📊" },
  { title: "Talleres y eventos", description: "Agenda talleres, workshops y eventos especiales con inscripción online.", icon: "🎪" },
  { title: "Página web incluida", description: "Landing con tu horario de clases para que los alumnos reserven directamente.", icon: "🌐" },
];

export default function DanzaYogaPage() {
  return (
    <>
      <SchemaOrg data={BREADCRUMB_SCHEMA} />
      <PageHeader />
      <SectorPageContent
        sectorName="Escuelas de Danza y Yoga"
        icon="💃"
        h1="Escuelas de Danza y Yoga"
        description="Gestiona tu escuela de danza, yoga o pilates de forma profesional. Controla clases, cupos, instructores y recordatorios automáticos desde cualquier dispositivo."
        features={features}
        featuresHeading="Todo para tu escuela de danza y yoga"
        testimonial={{
          quote: "Ya no tengo sobrecupo en mis clases. Los alumnos reservan online y yo puedo enfocarme en enseñar. Los recordatorios redujeron las ausencias increíblemente.",
          author: "Instructora de Yoga — Colombia",
        }}
        relatedSectors={[
          { title: "Gimnasios y Fitness", slug: "gimnasios", icon: "🏋️‍♀️", description: "Reservas de clases y entrenamiento personal" },
          { title: "Profesores de Música", slug: "musica", icon: "🎸", description: "Agenda de clases particulares y talleres musicales" },
          { title: "Tutores y Academias", slug: "tutorias", icon: "📚", description: "Sistema de reservas para clases particulares" },
        ]}
        ctaHeading="¿Listo para profesionalizar tu escuela?"
        ctaBody="Únete a escuelas de danza y yoga que ya confían en AgenditApp para gestionar sus clases."
      />
      <PageFooter />
    </>
  );
}
