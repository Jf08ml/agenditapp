import type { Metadata } from "next";
import SchemaOrg from "../../(landing)/components/seo/SchemaOrg";
import PageHeader from "../../(landing)/components/ui/PageHeader";
import PageFooter from "../../(landing)/components/ui/PageFooter";
import SectorPageContent from "../../(landing)/components/ui/SectorPageContent";

export const metadata: Metadata = {
  title: "Software para Odontólogos | Sistema de Citas Dentales",
  description:
    "Sistema de agendamiento para consultorios dentales. Gestiona citas de ortodoncia, limpieza, cirugías y tratamientos. Recordatorios automáticos y seguimiento de pacientes.",
  keywords: ["software odontología", "agenda dental", "sistema de citas dentales", "agendamiento odontólogo", "control pacientes dentales"],
  alternates: { canonical: "https://agenditapp.com/sectores/odontologia" },
  openGraph: {
    title: "Software para Odontólogos | AgenditApp",
    description: "Moderniza tu consultorio dental con citas online, recordatorios y control de tratamientos.",
    url: "https://agenditapp.com/sectores/odontologia",
    images: [{ url: "/og?title=Odont%C3%B3logos&subtitle=Software%20de%20Agendamiento%20%C2%B7%20AgenditApp&tag=Sector", width: 1200, height: 630, alt: "Software de Agendamiento para Odontólogos — AgenditApp" }],
  },
};

const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://agenditapp.com" },
    { "@type": "ListItem", position: 2, name: "Sectores", item: "https://agenditapp.com/sectores" },
    { "@type": "ListItem", position: 3, name: "Odontología", item: "https://agenditapp.com/sectores/odontologia" },
  ],
};

const features = [
  { title: "Agenda dental especializada", description: "Configura citas por tipo de tratamiento: limpieza, ortodoncia, cirugía, blanqueamiento.", icon: "🦷" },
  { title: "Recordatorios automáticos", description: "Tus pacientes reciben recordatorios por WhatsApp con indicaciones previas a la cita.", icon: "📲" },
  { title: "Control de tratamientos", description: "Historial de citas, plan de tratamiento y seguimiento por paciente.", icon: "📋" },
  { title: "Múltiples odontólogos", description: "Gestiona agenda de toda tu clínica con horarios y especialidades por profesional.", icon: "👨‍⚕️" },
  { title: "Reservas online 24/7", description: "Tus pacientes agendan desde tu página web. Sin llamadas, sin lista de espera.", icon: "🔒" },
  { title: "Reportes financieros", description: "Controla ingresos, pagos y abonos por tratamiento. Reportes automáticos.", icon: "💰" },
];

export default function OdontologiaPage() {
  return (
    <>
      <SchemaOrg data={BREADCRUMB_SCHEMA} />
      <PageHeader />
      <SectorPageContent
        sectorName="Odontología"
        icon="🦷"
        h1="Odontología"
        description="Optimiza la gestión de tu consultorio dental. Sistema completo para citas, tratamientos, recordatorios automáticos y control de pacientes. Sin permanencia."
        features={features}
        featuresHeading="Todo para gestionar tu consultorio dental"
        relatedSectors={[
          { title: "Consultorios y Clínicas", slug: "consultorios", icon: "🏥", description: "Sistema de citas para profesionales de la salud" },
          { title: "Psicología y Terapia", slug: "psicologia", icon: "🧠", description: "Agenda confidencial para psicólogos y terapeutas" },
          { title: "Estética Médica", slug: "estetica-medica", icon: "💉", description: "Agenda para tratamientos faciales y procedimientos" },
        ]}
        ctaHeading="¿Listo para modernizar tu consultorio?"
        ctaBody="Únete a odontólogos que ya usan AgenditApp. Sin permanencia, sin complicaciones técnicas."
      />
      <PageFooter />
    </>
  );
}
