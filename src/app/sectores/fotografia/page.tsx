import type { Metadata } from "next";
import SchemaOrg from "../../(landing)/components/seo/SchemaOrg";
import PageHeader from "../../(landing)/components/ui/PageHeader";
import PageFooter from "../../(landing)/components/ui/PageFooter";
import SectorPageContent from "../../(landing)/components/ui/SectorPageContent";

export const metadata: Metadata = {
  title: "Software para Fotógrafos | Sistema de Reserva de Sesiones",
  description:
    "Sistema de agendamiento para fotógrafos y estudios. Gestiona sesiones fotográficas, eventos, alquiler de estudio con calendario online.",
  keywords: ["software fotógrafos", "agenda estudio fotográfico", "sistema de reservas sesiones", "agendamiento fotografía", "control agenda fotógrafo"],
  alternates: { canonical: "https://agenditapp.com/sectores/fotografia" },
  openGraph: {
    title: "Software para Fotógrafos | AgenditApp",
    description: "Gestiona sesiones, eventos y alquiler de estudio con reservas online y recordatorios automáticos.",
    url: "https://agenditapp.com/sectores/fotografia",
    images: [{ url: "/og?title=Fot%C3%B3grafos%20y%20Estudios&subtitle=Software%20de%20Agendamiento%20%C2%B7%20AgenditApp&tag=Sector", width: 1200, height: 630, alt: "Software de Agendamiento para Fotógrafos y Estudios — AgenditApp" }],
  },
};

const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://agenditapp.com" },
    { "@type": "ListItem", position: 2, name: "Sectores", item: "https://agenditapp.com/sectores" },
    { "@type": "ListItem", position: 3, name: "Fotógrafos y Estudios", item: "https://agenditapp.com/sectores/fotografia" },
  ],
};

const features = [
  { title: "Reserva de sesiones", description: "Sesiones de retrato, familia, producto, embarazo. Cada tipo con su duración y precio.", icon: "📸" },
  { title: "Recordatorios automáticos", description: "Notificaciones por WhatsApp con indicaciones de vestuario y llegada al estudio.", icon: "📲" },
  { title: "Agenda de eventos", description: "Gestiona bodas, grados, eventos corporativos. Control de disponibilidad de fechas.", icon: "🎉" },
  { title: "Alquiler de estudio", description: "Reservas de espacio por horas para modelos, diseñadores y otros fotógrafos.", icon: "🏢" },
  { title: "Portafolio en tu landing", description: "Muestra tu trabajo y permite reservar directamente desde tu página web.", icon: "🎨" },
  { title: "Control de pagos", description: "Registra anticipos, saldos y pagos por sesión o paquete fotográfico.", icon: "💰" },
];

export default function FotografiaPage() {
  return (
    <>
      <SchemaOrg data={BREADCRUMB_SCHEMA} />
      <PageHeader />
      <SectorPageContent
        sectorName="Fotógrafos y Estudios"
        icon="📸"
        h1="Fotógrafos y Estudios"
        description="Gestiona tu estudio fotográfico de forma profesional. Organiza sesiones, eventos y alquiler de estudio con reservas online y recordatorios automáticos."
        features={features}
        featuresHeading="Todo para gestionar tu estudio fotográfico"
        relatedSectors={[
          { title: "Abogados y Asesorías", slug: "abogados", icon: "⚖️", description: "Agenda de consultas legales y reuniones" },
          { title: "Profesores de Música", slug: "musica", icon: "🎸", description: "Agenda de clases particulares y talleres" },
          { title: "Tutores y Academias", slug: "tutorias", icon: "📚", description: "Sistema de reservas para clases particulares" },
        ]}
        ctaHeading="¿Listo para profesionalizar tu estudio?"
        ctaBody="Únete a fotógrafos que ya confían en AgenditApp para gestionar sus sesiones."
      />
      <PageFooter />
    </>
  );
}
