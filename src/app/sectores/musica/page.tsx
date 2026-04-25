import type { Metadata } from "next";
import SchemaOrg from "../../(landing)/components/seo/SchemaOrg";
import PageHeader from "../../(landing)/components/ui/PageHeader";
import PageFooter from "../../(landing)/components/ui/PageFooter";
import SectorPageContent from "../../(landing)/components/ui/SectorPageContent";

export const metadata: Metadata = {
  title: "Software para Profesores de Música | Sistema de Clases Particulares",
  description:
    "Sistema de agendamiento para profesores de música. Gestiona clases de guitarra, piano, canto y más con recordatorios automáticos.",
  keywords: ["software profesores música", "agenda clases música", "sistema de reservas clases guitarra", "agendamiento clases piano"],
  alternates: { canonical: "https://agenditapp.com/sectores/musica" },
  openGraph: {
    title: "Software para Profesores de Música | AgenditApp",
    description: "Gestiona tus clases de música con reservas online y recordatorios automáticos por WhatsApp.",
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
        features={features}
        featuresHeading="Todo para gestionar tus clases de música"
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
