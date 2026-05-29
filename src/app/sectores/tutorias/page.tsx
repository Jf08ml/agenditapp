import type { Metadata } from "next";
import SchemaOrg from "../../(landing)/components/seo/SchemaOrg";
import PageHeader from "../../(landing)/components/ui/PageHeader";
import PageFooter from "../../(landing)/components/ui/PageFooter";
import SectorPageContent from "../../(landing)/components/ui/SectorPageContent";

export const metadata: Metadata = {
  title: "Software para Tutores y Academias | Clases + WhatsApp 24/7",
  description:
    "Agendamiento para tutores y academias: presencial y virtual, recordatorios WhatsApp para padres y alumnos. Sin permanencia. Desde $10/mes.",
  keywords: ["software tutores", "agenda academias", "sistema de reservas clases particulares", "agendamiento tutorias", "software refuerzo escolar"],
  alternates: { canonical: "https://agenditapp.com/sectores/tutorias" },
  openGraph: {
    title: "Software para Tutores y Academias | Clases + WhatsApp 24/7",
    description:
      "Agendamiento para tutores y academias: presencial y virtual, recordatorios WhatsApp para padres y alumnos. Sin permanencia. Desde $10/mes.",
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

const FAQS = [
  { q: "¿Puedo gestionar múltiples tutores o profesores en una sola plataforma?", a: "Sí. Cada tutor tiene su propio perfil, materias asignadas y horario. Desde el panel central puedes ver y gestionar la agenda de todo tu equipo docente." },
  { q: "¿Se pueden agendar clases recurrentes semanales sin reagendar cada vez?", a: "Sí. Configuras clases con horario fijo para cada alumno (por ejemplo, martes y jueves a las 4pm) y el sistema las gestiona automáticamente semana a semana." },
  { q: "¿Los padres y alumnos reciben recordatorios automáticos antes de cada clase?", a: "Sí. El recordatorio llega por WhatsApp al número que registran al reservar. Puedes configurarlo para que llegue 24h antes o en el horario que prefieras." },
  { q: "¿Funciona para clases presenciales y virtuales al mismo tiempo?", a: "Perfectamente. Puedes crear servicios diferenciados: 'Clase presencial' y 'Clase online', cada uno con su propio precio y duración." },
  { q: "¿Cuánto cuesta y hay permanencia?", a: "Los planes comienzan desde $10 USD al mes, sin permanencia. Puedes cancelar cuando quieras. Incluye reservas ilimitadas y panel administrativo completo." },
];

const INTRO = (
  <>
    <p>
      Un tutor o academia tiene un desafío de coordinación que se multiplica con cada alumno nuevo: distintas materias, niveles, tutores y horarios semanales que además cambian por festivos, evaluaciones del colegio o imprevistos. Gestionar esto por WhatsApp —entre padres, alumnos y profesores— significa mensajes perdidos, horarios confusos y clases que nadie confirma.
    </p>
    <p>
      AgenditApp permite que cada tutor tenga su propio horario y materias asignadas. Los padres y alumnos reservan directamente desde tu página web, reciben confirmación inmediata y un recordatorio automático por <strong>WhatsApp</strong> antes de cada clase. Sin necesidad de llamar para confirmar, sin mensajes de &ldquo;¿hay clase hoy?&rdquo;.
    </p>
    <p>
      Para academias con varios profesores, el panel central consolida toda la operación: ves qué tutores tienen mayor demanda, qué materias están más solicitadas y cuántos alumnos tiene cada uno. Las clases de recuperación se agendan como cualquier otro servicio, sin generar caos de coordinación.
    </p>
  </>
);

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
        sectorIntro={INTRO}
        features={features}
        featuresHeading="Todo para gestionar tu academia"
        testimonial={{
          quote: "Los padres aprecian recibir recordatorios automáticos. Ya no tengo que estar llamando para confirmar las clases, y los alumnos llegan más puntuales.",
          author: "Tutor particular — Colombia",
        }}
        faqs={FAQS}
        relatedPosts={[
          { slug: "primeros-clientes-salon-belleza-barberia", title: "Cómo conseguir los primeros 100 clientes para tu negocio de servicios", readingTime: "10 min" },
          { slug: "mejores-apps-agendar-citas-colombia-2026", title: "Las 7 mejores apps para agendar citas en Colombia (2026)", readingTime: "10 min" },
        ]}
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
