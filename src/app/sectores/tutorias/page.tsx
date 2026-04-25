import type { Metadata } from "next";
import SchemaOrg from "../../(landing)/components/seo/SchemaOrg";
import PageHeader from "../../(landing)/components/ui/PageHeader";
import PageFooter from "../../(landing)/components/ui/PageFooter";
import SectorPageContent from "../../(landing)/components/ui/SectorPageContent";

export const metadata: Metadata = {
  title: "Software para Tutores y Academias | Sistema de Clases Particulares",
  description:
    "Sistema de agendamiento para tutores y academias. Gestiona clases de matemáticas, idiomas, refuerzo escolar y más con recordatorios automáticos.",
  keywords: ["software tutores", "agenda academias", "sistema de reservas clases particulares", "agendamiento tutorias", "software refuerzo escolar"],
  alternates: { canonical: "https://agenditapp.com/sectores/tutorias" },
  openGraph: {
    title: "Software para Tutores y Academias | AgenditApp",
    description: "Gestiona tus clases particulares y academia con reservas online y recordatorios automáticos.",
    url: "https://agenditapp.com/sectores/tutorias",
    images: [{ url: "/og?title=Tutores%20y%20Academias&subtitle=Software%20de%20Agendamiento%20%C2%B7%20AgenditApp&tag=Sector", width: 1200, height: 630, alt: "Software de Agendamiento para Tutores y Academias — AgenditApp" }],
  },
};

const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://agenditapp.com" },
    { "@type": "ListItem", position: 2, name: "Sectores", item: "https://agenditapp.com/sectores" },
    { "@type": "ListItem", position: 3, name: "Tutores y Academias", item: "https://agenditapp.com/sectores/tutorias" },
  ],
};

const features = [
  { title: "Agenda por materia y nivel", description: "Matemáticas, idiomas, ciencias, arte. Configura horarios por asignatura y nivel.", icon: "📚" },
  { title: "Recordatorios para padres y alumnos", description: "Notificaciones automáticas por WhatsApp para confirmar y recordar clases.", icon: "🔔" },
  { title: "Control por alumno", description: "Historial de clases, asistencia y seguimiento académico individual.", icon: "👨‍🎓" },
  { title: "Clases presenciales y virtuales", description: "Gestiona tutorías en tu espacio y sesiones online desde la misma plataforma.", icon: "💻" },
  { title: "Múltiples tutores", description: "Coordina agenda de todos tus profesores y asignaciones de alumnos.", icon: "👩‍🏫" },
  { title: "Página web incluida", description: "Landing de tu academia para que padres y alumnos reserven clases online.", icon: "🌐" },
];

export default function TutoriasPage() {
  return (
    <>
      <SchemaOrg data={BREADCRUMB_SCHEMA} />
      <PageHeader />
      <SectorPageContent
        sectorName="Tutores y Academias"
        icon="📚"
        h1="Tutores y Academias"
        description="Gestiona tu academia o clases particulares de forma profesional. Organiza tutorías, refuerzo escolar y horarios con recordatorios automáticos y reservas online."
        features={features}
        featuresHeading="Todo para gestionar tu academia"
        testimonial={{
          quote: "Los padres aprecian recibir recordatorios automáticos. Ya no tengo que estar llamando para confirmar las clases, y los alumnos llegan más puntuales.",
          author: "Tutor particular — Colombia",
        }}
        relatedSectors={[
          { title: "Profesores de Música", slug: "musica", icon: "🎸", description: "Agenda de clases particulares y talleres musicales" },
          { title: "Escuelas de Danza y Yoga", slug: "danza-yoga", icon: "💃", description: "Gestión de clases grupales y talleres" },
          { title: "Psicología y Terapia", slug: "psicologia", icon: "🧠", description: "Agenda confidencial para psicólogos y terapeutas" },
        ]}
        ctaHeading="¿Listo para profesionalizar tu academia?"
        ctaBody="Únete a tutores que ya confían en AgenditApp para gestionar sus clases."
      />
      <PageFooter />
    </>
  );
}
