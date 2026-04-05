import type { Metadata } from "next";
import SchemaOrg from "../../(landing)/components/seo/SchemaOrg";
import PageHeader from "../../(landing)/components/ui/PageHeader";
import PageFooter from "../../(landing)/components/ui/PageFooter";
import SectorPageContent from "../../(landing)/components/ui/SectorPageContent";

export const metadata: Metadata = {
  title: "Software para Psicólogos | Sistema de Citas Terapéuticas",
  description:
    "Sistema de agendamiento confidencial para psicólogos y terapeutas. Gestiona sesiones, recordatorios automáticos y seguimiento de pacientes con total privacidad.",
  keywords: ["software psicólogos", "agenda terapia", "sistema de citas psicología", "agendamiento salud mental", "gestión sesiones terapia"],
  alternates: { canonical: "https://agenditapp.com/sectores/psicologia" },
  openGraph: {
    title: "Software para Psicólogos | AgenditApp",
    description: "Gestiona tu práctica psicológica con sesiones online, recordatorios y total privacidad.",
    url: "https://agenditapp.com/sectores/psicologia",
    images: ["/inicio_page.png"],
  },
};

const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://agenditapp.com" },
    { "@type": "ListItem", position: 2, name: "Sectores", item: "https://agenditapp.com/sectores" },
    { "@type": "ListItem", position: 3, name: "Psicología y Terapia", item: "https://agenditapp.com/sectores/psicologia" },
  ],
};

const features = [
  { title: "Privacidad garantizada", description: "Diseño confidencial para pacientes. Sin exposición de datos sensibles en la plataforma.", icon: "🔒" },
  { title: "Recordatorios discretos", description: "Mensajes por WhatsApp personalizados y discretos para confirmar sesiones.", icon: "📲" },
  { title: "Seguimiento de sesiones", description: "Historial de citas, notas clínicas básicas y control de frecuencia por paciente.", icon: "📋" },
  { title: "Sesiones presenciales y online", description: "Gestiona citas en consultorio y sesiones virtuales en el mismo sistema.", icon: "💻" },
  { title: "Control de pagos", description: "Registra honorarios, pagos por sesión y abonos por proceso terapéutico.", icon: "💰" },
  { title: "Agenda flexible", description: "Horarios por bloques, cancelaciones con anticipación y reprogramación sencilla.", icon: "📅" },
];

export default function PsicologiaPage() {
  return (
    <>
      <SchemaOrg data={BREADCRUMB_SCHEMA} />
      <PageHeader />
      <SectorPageContent
        sectorName="Psicología y Terapia"
        icon="🧠"
        h1="Psicología y Terapia"
        description="Sistema confidencial diseñado para profesionales de salud mental. Gestiona sesiones, recordatorios y seguimiento de pacientes con total privacidad."
        features={features}
        featuresHeading="Todo para profesionalizar tu práctica"
        relatedSectors={[
          { title: "Consultorios y Clínicas", slug: "consultorios", icon: "🏥", description: "Sistema de citas para profesionales de la salud" },
          { title: "Nutricionistas", slug: "nutricion", icon: "🥗", description: "Consultas nutricionales y seguimiento de pacientes" },
          { title: "Tutores y Academias", slug: "tutorias", icon: "📚", description: "Sistema de reservas para clases particulares" },
        ]}
        ctaHeading="¿Listo para profesionalizar tu práctica?"
        ctaBody="Únete a psicólogos que ya confían en AgenditApp para gestionar su consultorio."
      />
      <PageFooter />
    </>
  );
}
