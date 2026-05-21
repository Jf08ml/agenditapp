import type { Metadata } from "next";
import SchemaOrg from "../../(landing)/components/seo/SchemaOrg";
import PageHeader from "../../(landing)/components/ui/PageHeader";
import PageFooter from "../../(landing)/components/ui/PageFooter";
import SectorPageContent from "../../(landing)/components/ui/SectorPageContent";

export const metadata: Metadata = {
  title: "Software para Nutricionistas | Citas Online + WhatsApp",
  description:
    "Agenda para nutricionistas: consultas, controles y seguimiento. WhatsApp desde tu número, pacientes más adherentes. Sin permanencia. Desde $10/mes.",
  keywords: ["software nutricionistas", "agenda nutrición", "sistema de citas nutricional", "agendamiento dietista", "control pacientes nutrición"],
  alternates: { canonical: "https://agenditapp.com/sectores/nutricion" },
  openGraph: {
    title: "Software para Nutricionistas | Citas Online + WhatsApp",
    description:
      "Agenda para nutricionistas: consultas, controles y seguimiento. WhatsApp desde tu número, pacientes más adherentes. Sin permanencia. Desde $10/mes.",
    url: "https://agenditapp.com/sectores/nutricion",
    images: [{ url: "/og?title=Nutricionistas&subtitle=Software%20de%20Agendamiento%20%C2%B7%20AgenditApp&tag=Sector", width: 1200, height: 630, alt: "Software de Agendamiento para Nutricionistas — AgenditApp" }],
  },
};

const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://agenditapp.com" },
    { "@type": "ListItem", position: 2, name: "Sectores", item: "https://agenditapp.com/sectores" },
    { "@type": "ListItem", position: 3, name: "Nutricionistas", item: "https://agenditapp.com/sectores/nutricion" },
  ],
};

const features = [
  { title: "Agenda de consultas", description: "Consulta inicial, control mensual, seguimiento de plan. Cada cita con su duración y tipo.", icon: "📅" },
  { title: "Recordatorios de control", description: "Tus pacientes reciben recordatorios por WhatsApp para no perder sus citas de seguimiento.", icon: "🔔" },
  { title: "Reportes de evolución", description: "Registro de citas por paciente y seguimiento de su proceso nutricional.", icon: "📊" },
  { title: "Catálogo de servicios", description: "Consulta inicial, análisis corporal, plan personalizado. Muestra tus servicios con precios.", icon: "🥗" },
  { title: "Reservas online 24/7", description: "Tus pacientes agendan su consulta directamente desde tu página web.", icon: "💻" },
  { title: "Control de pagos", description: "Registra honorarios por consulta, paquetes de sesiones y abonos de pacientes.", icon: "💰" },
];

const FAQS = [
  { q: "¿Es confidencial la información de mis pacientes nutricionales?", a: "Sí. Cada paciente solo ve su propia agenda y datos. La información es privada y no es visible para otros usuarios de la plataforma." },
  { q: "¿Puedo diferenciar la consulta inicial de los controles de seguimiento?", a: "Sí. Crea servicios diferenciados: 'Consulta inicial' (60 min), 'Control mensual' (30 min), 'Análisis corporal' (45 min). Cada uno con su precio y duración específica." },
  { q: "¿Los pacientes pueden reagendar su control de seguimiento solos?", a: "Sí. Desde el recordatorio de WhatsApp, el paciente recibe un enlace para confirmar, cancelar o reprogramar su cita sin necesidad de llamarte." },
  { q: "¿Los recordatorios ayudan a mejorar la adherencia al tratamiento?", a: "Significativamente. Los negocios que usan recordatorios automáticos de AgenditApp reportan reducciones de entre 50% y 70% en inasistencias, lo que mejora directamente los resultados del tratamiento." },
  { q: "¿Cuánto cuesta y hay permanencia?", a: "Los planes inician desde $10 USD al mes, sin permanencia ni contrato mínimo. Puedes cancelar cuando quieras." },
];

export default function NutricionPage() {
  return (
    <>
      <SchemaOrg data={BREADCRUMB_SCHEMA} />
      <PageHeader />
      <SectorPageContent
        sectorName="Nutricionistas"
        icon="🥗"
        h1="Nutricionistas"
        description="Gestiona tu consulta nutricional con una herramienta profesional. Controla consultas, seguimiento y recordatorios automáticos para mejorar la adherencia de tus pacientes."
        features={features}
        featuresHeading="Todo para optimizar tu consulta nutricional"
        testimonial={{
          quote: "Mis pacientes ya no pierden controles. Los recordatorios automáticos mejoraron muchísimo la adherencia al tratamiento y la evolución de resultados.",
          author: "Nutricionista — Colombia",
        }}
        faqs={FAQS}
        relatedSectors={[
          { title: "Consultorios y Clínicas", slug: "consultorios", icon: "🏥", description: "Sistema de citas para profesionales de la salud" },
          { title: "Psicología y Terapia", slug: "psicologia", icon: "🧠", description: "Agenda confidencial para psicólogos y terapeutas" },
          { title: "Odontología", slug: "odontologia", icon: "🦷", description: "Sistema de citas dentales y control de tratamientos" },
        ]}
        ctaHeading="¿Listo para optimizar tu consulta?"
        ctaBody="Únete a nutricionistas que ya confían en AgenditApp para gestionar su práctica profesional."
      />
      <PageFooter />
    </>
  );
}
