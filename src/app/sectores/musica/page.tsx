import type { Metadata } from "next";
import SchemaOrg from "../../(landing)/components/seo/SchemaOrg";
import PageHeader from "../../(landing)/components/ui/PageHeader";
import PageFooter from "../../(landing)/components/ui/PageFooter";
import SectorPageContent from "../../(landing)/components/ui/SectorPageContent";

export const metadata: Metadata = {
  title: "Software para Profesores de Música | Clases + WhatsApp 24/7",
  description:
    "Agenda para profesores de música: clases de guitarra, piano, canto y más. WhatsApp automático para alumnos. Sin permanencia. Desde $10/mes.",
  alternates: { canonical: "https://agenditapp.com/sectores/musica" },
  openGraph: {
    title: "Software para Profesores de Música | Clases + WhatsApp 24/7",
    description:
      "Agenda para profesores de música: clases de guitarra, piano, canto y más. WhatsApp automático para alumnos. Sin permanencia. Desde $10/mes.",
    url: "https://agenditapp.com/sectores/musica",
    images: [{ url: "/og?title=Profesores%20de%20M%C3%BAsica&subtitle=Software%20de%20Agendamiento%20%C2%B7%20AgenditApp&tag=Sector", width: 1200, height: 630, alt: "Software de Agendamiento para Profesores de Música — AgenditApp" }],
  },
};

const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://agenditapp.com" },
    { "@type": "ListItem", position: 2, name: "Sectores", item: "https://agenditapp.com/sectores" },
    { "@type": "ListItem", position: 3, name: "Profesores de Música", item: "https://agenditapp.com/sectores/musica" },
  ],
};

const features = [
  { title: "Agenda de clases particulares", description: "Guitarra, piano, canto, batería. Cada instrumento con horario y duración personalizados.", icon: "🎸" },
  { title: "Recordatorios automáticos", description: "Notificaciones por WhatsApp para tus alumnos antes de cada clase.", icon: "📲" },
  { title: "Control por alumno", description: "Historial de clases, niveles y seguimiento de progreso individual.", icon: "📚" },
  { title: "Clases presenciales y virtuales", description: "Gestiona clases en tu estudio y sesiones online en el mismo sistema.", icon: "💻" },
  { title: "Talleres y grupos", description: "Agenda talleres grupales, clases de ensamble y eventos musicales especiales.", icon: "🎵" },
  { title: "Página web incluida", description: "Landing profesional para que tus alumnos reserven clases online 24/7.", icon: "🌐" },
];

const FAQS = [
  { q: "¿Puedo gestionar múltiples profesores con instrumentos distintos?", a: "Sí. Cada profesor tiene su propio perfil, horario y lista de instrumentos que enseña. Los alumnos filtran por instrumento y profesor al momento de reservar." },
  { q: "¿Se pueden agendar clases recurrentes semanales automáticamente?", a: "Sí. Puedes configurar clases regulares con horario fijo para cada alumno, y el sistema las gestiona semana a semana sin que tengas que reagendar manualmente." },
  { q: "¿Funciona para clases individuales y talleres grupales al mismo tiempo?", a: "Perfectamente. Tienes ambas modalidades: clases individuales con cupo único y talleres o grupos con cupos definidos, todo en la misma plataforma." },
  { q: "¿Los alumnos pueden reservar su primera clase de prueba online?", a: "Sí. Puedes crear un servicio de 'Clase de prueba' con precio especial o gratuito, y los interesados lo reservan directamente desde tu página web." },
  { q: "¿Cuánto cuesta y hay permanencia?", a: "Los planes van desde $10 USD al mes, sin permanencia. Cancelas cuando quieras. Incluye reservas ilimitadas y panel administrativo completo." },
];

const INTRO = (
  <>
    <p>
      Un profesor de música o academia tiene un desafío de agenda que parece simple pero no lo es: cada alumno tiene nivel, instrumento y posiblemente profesor diferente. Gestionar esto por WhatsApp —coordinar cambios de horario, recuperar clases por lluvias o festivos, atender alumnos nuevos que quieren una clase de prueba— genera una distracción constante que resta tiempo de enseñanza.
    </p>
    <p>
      AgenditApp permite crear servicios por instrumento y nivel (piano iniciación, guitarra intermedio, canto), asignar profesores con sus propios horarios, y dejar que alumnos y padres reserven directamente desde tu landing. Los recordatorios automáticos reducen significativamente los &ldquo;se me olvidó la clase&rdquo; y las clases de recuperación se agendan como cualquier otro servicio, sin generar una cadena de mensajes en WhatsApp.
    </p>
    <p>
      Para academias con varios profesores, el panel central muestra la ocupación de toda la escuela. Sabes qué instrumento tiene más demanda, qué horarios están llenos y dónde hay disponibilidad para nuevos alumnos —sin tener que preguntar a cada profesor por separado.
    </p>
  </>
);

export default function MusicaPage() {
  return (
    <>
      <SchemaOrg data={BREADCRUMB_SCHEMA} />
      <PageHeader />
      <SectorPageContent
        sectorName="Profesores de Música"
        icon="🎸"
        h1="Profesores de Música"
        description="Gestiona tu estudio musical de forma profesional. Organiza clases particulares, talleres y ensayos con recordatorios automáticos y reservas online."
        sectorIntro={INTRO}
        features={features}
        featuresHeading="Todo para gestionar tus clases de música"
        faqs={FAQS}
        relatedPosts={[
          { slug: "primeros-clientes-salon-belleza-barberia", title: "Cómo conseguir los primeros 100 clientes para tu negocio de servicios", readingTime: "10 min" },
          { slug: "mejores-apps-agendar-citas-colombia-2026", title: "Las 7 mejores apps para agendar citas en Colombia (2026)", readingTime: "10 min" },
        ]}
        relatedSectors={[
          { title: "Tutores y Academias", slug: "tutorias", icon: "📚", description: "Sistema de reservas para clases particulares y academias" },
          { title: "Escuelas de Danza y Yoga", slug: "danza-yoga", icon: "💃", description: "Gestión de clases grupales y talleres" },
          { title: "Fotógrafos y Estudios", slug: "fotografia", icon: "📸", description: "Reserva de sesiones y gestión de agenda creativa" },
        ]}
        ctaHeading="¿Listo para profesionalizar tu enseñanza?"
        ctaBody="Únete a profesores de música que ya confían en AgenditApp para gestionar sus clases."
      />
      <PageFooter />
    </>
  );
}
