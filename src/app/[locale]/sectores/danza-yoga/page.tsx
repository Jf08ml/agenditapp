import type { Metadata } from "next";
import SchemaOrg from "../../(landing)/components/seo/SchemaOrg";
import PageHeader from "../../(landing)/components/ui/PageHeader";
import PageFooter from "../../(landing)/components/ui/PageFooter";
import SectorPageContent from "../../(landing)/components/ui/SectorPageContent";

export const metadata: Metadata = {
  title: "Software para Escuelas de Danza y Yoga | Clases + WhatsApp",
  description:
    "Agendamiento para escuelas de danza, yoga y pilates: clases con cupos, gestión de instructores, recordatorios WhatsApp. Reservas 24/7. Desde $10/mes.",
  alternates: { canonical: "https://agenditapp.com/sectores/danza-yoga" },
  openGraph: {
    title: "Software para Escuelas de Danza y Yoga | Clases + WhatsApp",
    description:
      "Agendamiento para escuelas de danza, yoga y pilates: clases con cupos, gestión de instructores, recordatorios WhatsApp. Reservas 24/7. Desde $10/mes.",
    url: "https://agenditapp.com/sectores/danza-yoga",
    images: [{ url: "/og?title=Danza%20y%20Yoga&subtitle=Software%20de%20Agendamiento%20%C2%B7%20AgenditApp&tag=Sector", width: 1200, height: 630, alt: "Software de Agendamiento para Escuelas de Danza y Yoga — AgenditApp" }],
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

const FAQS = [
  { q: "¿Puedo gestionar clases grupales con cupos máximos?", a: "Sí. Defines el número máximo de alumnos por clase y el sistema cierra las reservas automáticamente al llenarse, mostrando la disponibilidad en tiempo real a tus alumnos." },
  { q: "¿Los alumnos pueden ver cuántos cupos quedan antes de reservar?", a: "Exactamente. En tu página web de reservas, cada clase muestra los cupos disponibles en tiempo real, lo que genera urgencia y motiva a reservar con anticipación." },
  { q: "¿Puedo agendar talleres y eventos especiales además de clases regulares?", a: "Sí. Puedes crear eventos únicos como talleres, workshops o clases especiales con fecha, hora y cupo independiente de tu horario semanal habitual." },
  { q: "¿Se pueden gestionar múltiples instructores con horarios distintos?", a: "Sí. Cada instructor tiene su propio perfil, horario y clases asignadas. Los alumnos pueden filtrar por instructor al momento de reservar." },
  { q: "¿Hay permanencia o contrato mínimo?", a: "No. AgenditApp es mes a mes, sin permanencia. Puedes cancelar cuando quieras sin trámites ni penalizaciones." },
];

const INTRO = (
  <>
    <p>
      Las escuelas de danza y yoga tienen una dinámica particular: clases grupales con cupo limitado, horario semanal recurrente, alumnos que a veces no pueden asistir y necesitan recuperar, y nuevos estudiantes que quieren una clase de prueba antes de comprometerse. Gestionar todo esto en un cuaderno físico o por mensajes de WhatsApp dificulta ver la ocupación real y planear las clases.
    </p>
    <p>
      AgenditApp permite crear clases con cupos máximos definidos —tu clase de yoga no puede exceder 12 alumnos y el sistema lo controla automáticamente. Cada alumno reserva su lugar online, recibe un recordatorio antes de su clase y si necesita recuperar puede hacerlo desde la misma plataforma sin generar una conversación de WhatsApp contigo.
    </p>
    <p>
      Para escuelas con varios instructores y estilos (ballet, urbano, contemporáneo, hatha yoga, pilates), cada servicio tiene su propia disponibilidad independiente. Desde un solo panel ves toda la operación de la escuela: qué clases están llenas, cuáles tienen disponibilidad y qué instructores están más ocupados.
    </p>
  </>
);

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
        sectorIntro={INTRO}
        features={features}
        featuresHeading="Todo para tu escuela de danza y yoga"
        testimonial={{
          quote: "Ya no tengo sobrecupo en mis clases. Los alumnos reservan online y yo puedo enfocarme en enseñar. Los recordatorios redujeron las ausencias increíblemente.",
          author: "Instructora de Yoga — Colombia",
        }}
        faqs={FAQS}
        relatedPosts={[
          { slug: "primeros-clientes-salon-belleza-barberia", title: "Cómo conseguir los primeros 100 clientes para tu negocio de servicios", readingTime: "10 min" },
          { slug: "mejores-apps-agendar-citas-colombia-2026", title: "Las 7 mejores apps para agendar citas en Colombia (2026)", readingTime: "10 min" },
        ]}
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
