import type { Metadata } from "next";
import SchemaOrg from "../../(landing)/components/seo/SchemaOrg";
import PageHeader from "../../(landing)/components/ui/PageHeader";
import PageFooter from "../../(landing)/components/ui/PageFooter";
import SectorPageContent from "../../(landing)/components/ui/SectorPageContent";

export const metadata: Metadata = {
  title: "Software para Abogados | Citas Online + WhatsApp 24/7",
  description:
    "Agenda para abogados y bufetes: consultas legales, reuniones presenciales y virtuales, recordatorios WhatsApp. Sin permanencia. Desde $10/mes.",
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

const INTRO = (
  <>
    <p>
      Una consulta legal no es un servicio de conveniencia —el cliente que atraviesa un proceso jurídico necesita sentir que su tiempo y su caso son atendidos con seriedad. Cuando un despacho gestiona consultas por WhatsApp personal o correo, proyecta improvisación y hace difícil establecer horarios claros, cobrar anticipos o mantener un registro profesional de reuniones.
    </p>
    <p>
      AgenditApp permite ofrecer agenda online con tipos diferenciados de atención: consulta inicial, revisión de documentos, asesoría por especialidad (laboral, civil, familiar). Los clientes reservan desde tu landing y reciben confirmación automática con el detalle de los documentos que deben traer —personalizas ese mensaje tú mismo. Los avisos llegan desde <strong>tu propio número de WhatsApp</strong>, manteniendo el tono profesional que exige la relación abogado-cliente.
    </p>
    <p>
      Para despachos con varios abogados, cada profesional gestiona su propia agenda desde el mismo panel. Sin cruces de horario, sin coordinación manual y con un registro completo de atenciones por cliente.
    </p>
  </>
);

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
        sectorIntro={INTRO}
        features={features}
        featuresHeading="Todo para gestionar tu despacho legal"
        faqs={FAQS}
        relatedPosts={[
          { slug: "software-agendamiento-consultorios-terapeutas-colombia", title: "Software de agendamiento para servicios profesionales: guía completa 2026", readingTime: "9 min" },
          { slug: "mejores-apps-agendar-citas-colombia-2026", title: "Las 7 mejores apps para agendar citas en Colombia (2026)", readingTime: "10 min" },
        ]}
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
