import type { Metadata } from "next";
import SchemaOrg from "../../(landing)/components/seo/SchemaOrg";
import PageHeader from "../../(landing)/components/ui/PageHeader";
import PageFooter from "../../(landing)/components/ui/PageFooter";
import SectorPageContent from "../../(landing)/components/ui/SectorPageContent";

export const metadata: Metadata = {
  title: "Software para Abogados | Sistema de Citas Legales y Asesorías",
  description:
    "Sistema de agendamiento para abogados y bufetes. Gestiona consultas legales, asesorías y reuniones con clientes de forma profesional.",
  keywords: ["software abogados", "agenda legal", "sistema de citas jurídicas", "agendamiento bufete", "gestión consultas legales"],
  alternates: { canonical: "https://agenditapp.com/sectores/abogados" },
  openGraph: {
    title: "Software para Abogados | AgenditApp",
    description: "Gestiona consultas legales, asesorías y reuniones con reservas online y recordatorios profesionales.",
    url: "https://agenditapp.com/sectores/abogados",
    images: ["/inicio_page.png"],
  },
};

const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://agenditapp.com" },
    { "@type": "ListItem", position: 2, name: "Sectores", item: "https://agenditapp.com/sectores" },
    { "@type": "ListItem", position: 3, name: "Abogados y Asesorías", item: "https://agenditapp.com/sectores/abogados" },
  ],
};

const features = [
  { title: "Agenda de consultas legales", description: "Consulta inicial, revisión de documentos, asesoría especializada. Cada cita bien organizada.", icon: "⚖️" },
  { title: "Recordatorios profesionales", description: "Notificaciones por WhatsApp con confirmación de hora, lugar y documentos requeridos.", icon: "📲" },
  { title: "Gestión de expedientes", description: "Vincula citas con expedientes de clientes. Historial completo de asesorías.", icon: "📁" },
  { title: "Reuniones presenciales y virtuales", description: "Gestiona citas en despacho y videollamadas desde la misma plataforma.", icon: "💻" },
  { title: "Múltiples abogados", description: "Coordina la agenda de todo tu equipo legal. Asignación de clientes por especialidad.", icon: "👥" },
  { title: "Página web profesional", description: "Landing de tu despacho para que los clientes soliciten consultas online.", icon: "🌐" },
];

export default function AbogadosPage() {
  return (
    <>
      <SchemaOrg data={BREADCRUMB_SCHEMA} />
      <PageHeader />
      <SectorPageContent
        sectorName="Abogados y Asesorías"
        icon="⚖️"
        h1="Abogados y Asesorías"
        description="Gestiona tu despacho legal con profesionalismo. Organiza consultas, reuniones y asesorías con una agenda inteligente y recordatorios automáticos."
        features={features}
        featuresHeading="Todo para gestionar tu despacho legal"
        relatedSectors={[
          { title: "Consultorios y Clínicas", slug: "consultorios", icon: "🏥", description: "Sistema de citas para profesionales de la salud" },
          { title: "Fotógrafos y Estudios", slug: "fotografia", icon: "📸", description: "Reserva de sesiones y gestión de agenda creativa" },
          { title: "Psicología y Terapia", slug: "psicologia", icon: "🧠", description: "Agenda confidencial para psicólogos y terapeutas" },
        ]}
        ctaHeading="¿Listo para profesionalizar tu despacho?"
        ctaBody="Únete a abogados que ya confían en AgenditApp para gestionar su práctica legal."
      />
      <PageFooter />
    </>
  );
}
