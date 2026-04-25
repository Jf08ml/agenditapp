import type { Metadata } from "next";
import SchemaOrg from "../../(landing)/components/seo/SchemaOrg";
import PageHeader from "../../(landing)/components/ui/PageHeader";
import PageFooter from "../../(landing)/components/ui/PageFooter";
import SectorPageContent from "../../(landing)/components/ui/SectorPageContent";

export const metadata: Metadata = {
  title: "Software para Nutricionistas | Sistema de Consultas Nutricionales",
  description:
    "Sistema de agendamiento para nutricionistas. Gestiona consultas, planes alimenticios, seguimiento de pacientes y citas de control.",
  keywords: ["software nutricionistas", "agenda nutrición", "sistema de citas nutricional", "agendamiento dietista", "control pacientes nutrición"],
  alternates: { canonical: "https://agenditapp.com/sectores/nutricion" },
  openGraph: {
    title: "Software para Nutricionistas | AgenditApp",
    description: "Gestiona consultas nutricionales, seguimiento de pacientes y recordatorios automáticos.",
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
