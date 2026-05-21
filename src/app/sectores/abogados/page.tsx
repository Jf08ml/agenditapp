import type { Metadata } from "next";
import SchemaOrg from "../../(landing)/components/seo/SchemaOrg";
import PageHeader from "../../(landing)/components/ui/PageHeader";
import PageFooter from "../../(landing)/components/ui/PageFooter";
import SectorPageContent from "../../(landing)/components/ui/SectorPageContent";

export const metadata: Metadata = {
  title: "Software para Abogados | Citas Online + WhatsApp 24/7",
  description:
    "Agenda para abogados y bufetes: consultas legales, reuniones presenciales y virtuales, recordatorios WhatsApp. Sin permanencia. Desde $10/mes.",
  keywords: ["software abogados", "agenda legal", "sistema de citas jurídicas", "agendamiento bufete", "gestión consultas legales"],
  alternates: { canonical: "https://agenditapp.com/sectores/abogados" },
  openGraph: {
    title: "Software para Abogados | Citas Online + WhatsApp 24/7",
    description:
      "Agenda para abogados y bufetes: consultas legales, reuniones presenciales y virtuales, recordatorios WhatsApp. Sin permanencia. Desde $10/mes.",
    url: "https://agenditapp.com/sectores/abogados",
    images: [{ url: "/og?title=Abogados%20y%20Asesor%C3%ADas&subtitle=Software%20de%20Agendamiento%20%C2%B7%20AgenditApp&tag=Sector", width: 1200, height: 630, alt: "Software de Agendamiento para Abogados y Asesorías — AgenditApp" }],
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

const FAQS = [
  { q: "¿Es confidencial la información de mis clientes legales?", a: "Sí. Los datos de tus clientes son privados y seguros. Cada persona solo accede a su propia información de cita. Diseñado para mantener la discreción que exige la relación abogado-cliente." },
  { q: "¿Puedo gestionar múltiples abogados con especialidades diferentes?", a: "Sí. Cada abogado tiene su perfil, especialidad y agenda independiente. Los clientes pueden ser asignados según el área legal que necesiten: civil, laboral, penal, familiar, etc." },
  { q: "¿Los recordatorios pueden incluir los documentos que el cliente debe traer?", a: "Sí. Personalizas el mensaje de WhatsApp para incluir: 'Por favor traer: cédula, contrato de arrendamiento y correos de notificación previos'. Se envía automáticamente antes de la cita." },
  { q: "¿Funciona para reuniones virtuales y presenciales en el mismo despacho?", a: "Sí. Puedes crear servicios diferenciados: 'Consulta presencial' y 'Reunión virtual', cada uno con su duración y precio. Ambos se gestionan desde la misma plataforma." },
  { q: "¿Cuánto cuesta y hay permanencia?", a: "Los planes inician desde $10 USD al mes, sin permanencia ni contrato mínimo. Puedes cancelar cuando quieras sin trámites." },
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
        faqs={FAQS}
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
