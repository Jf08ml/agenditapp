import type { Metadata } from "next";
import SchemaOrg from "../../(landing)/components/seo/SchemaOrg";
import PageHeader from "../../(landing)/components/ui/PageHeader";
import PageFooter from "../../(landing)/components/ui/PageFooter";
import SectorPageContent from "../../(landing)/components/ui/SectorPageContent";

export const metadata: Metadata = {
  title: "Software para Veterinarias | Sistema de Citas Mascotas",
  description:
    "Sistema de agendamiento para veterinarias y clínicas de mascotas. Gestiona consultas, grooming, vacunas y tratamientos con recordatorios automáticos.",
  keywords: ["software veterinaria", "agenda veterinaria", "sistema de citas mascotas", "agendamiento grooming", "control citas veterinario"],
  alternates: { canonical: "https://agenditapp.com/sectores/veterinarias" },
  openGraph: {
    title: "Software para Veterinarias | AgenditApp",
    description: "Gestiona citas de mascotas, grooming y vacunas con reservas online y recordatorios automáticos.",
    url: "https://agenditapp.com/sectores/veterinarias",
    images: [{ url: "/og?title=Veterinarias&subtitle=Software%20de%20Agendamiento%20%C2%B7%20AgenditApp&tag=Sector", width: 1200, height: 630, alt: "Software de Agendamiento para Veterinarias — AgenditApp" }],
  },
};

const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://agenditapp.com" },
    { "@type": "ListItem", position: 2, name: "Sectores", item: "https://agenditapp.com/sectores" },
    { "@type": "ListItem", position: 3, name: "Veterinarias", item: "https://agenditapp.com/sectores/veterinarias" },
  ],
};

const features = [
  { title: "Agenda por tipo de cita", description: "Consulta médica, grooming, vacunación, cirugía. Cada servicio con duración configurada.", icon: "🗓️" },
  { title: "Recordatorios automáticos", description: "Notifica a los dueños de mascotas por WhatsApp antes de cada cita.", icon: "📲" },
  { title: "Historial por mascota", description: "Registro de citas, vacunas y tratamientos por cada animal atendido.", icon: "📋" },
  { title: "Servicio de grooming", description: "Agenda baths, cortes y estética. Control de horarios de peluquería canina.", icon: "✂️" },
  { title: "Alertas de vacunación", description: "Recuerda a los dueños cuando sus mascotas necesitan vacunas de refuerzo.", icon: "💉" },
  { title: "Reservas online 24/7", description: "Los dueños agendan desde tu página web en cualquier momento del día.", icon: "🌐" },
];

export default function VeterinariasPage() {
  return (
    <>
      <SchemaOrg data={BREADCRUMB_SCHEMA} />
      <PageHeader />
      <SectorPageContent
        sectorName="Veterinarias"
        icon="🐶"
        h1="Veterinarias"
        description="Gestiona tu veterinaria o centro de grooming de forma profesional. Organiza consultas, baños, vacunas y tratamientos con recordatorios automáticos por WhatsApp."
        features={features}
        featuresHeading="Todo para tu clínica veterinaria"
        relatedSectors={[
          { title: "Consultorios y Clínicas", slug: "consultorios", icon: "🏥", description: "Sistema de citas para profesionales de la salud" },
          { title: "Salones de Belleza", slug: "salones-belleza", icon: "💇‍♀️", description: "Sistema para servicios de estética y cuidado personal" },
          { title: "Fotógrafos y Estudios", slug: "fotografia", icon: "📸", description: "Reserva de sesiones y gestión de agenda creativa" },
        ]}
        ctaHeading="¿Listo para profesionalizar tu veterinaria?"
        ctaBody="Únete a veterinarias que ya confían en AgenditApp para gestionar su día a día."
      />
      <PageFooter />
    </>
  );
}
