import type { Metadata } from "next";
import SchemaOrg from "../../(landing)/components/seo/SchemaOrg";
import PageHeader from "../../(landing)/components/ui/PageHeader";
import PageFooter from "../../(landing)/components/ui/PageFooter";
import SectorPageContent from "../../(landing)/components/ui/SectorPageContent";

export const metadata: Metadata = {
  title: "Software para Spas y Centros de Bienestar | Sistema de Citas Online",
  description:
    "Sistema de agendamiento online para spas y centros de bienestar. Gestiona citas de masajes, faciales, terapias y tratamientos. Control de terapeutas y salas en tiempo real. Recordatorios automáticos. Prueba gratis.",
  keywords: ["software para spas", "agenda para spa", "sistema de citas bienestar", "agendamiento spa", "software masajes"],
  alternates: { canonical: "https://agenditapp.com/sectores/spas" },
  openGraph: {
    title: "Software para Spas y Centros de Bienestar | AgenditApp",
    description: "Digitaliza tu spa con reservas online, gestión de terapeutas y recordatorios por WhatsApp.",
    url: "https://agenditapp.com/sectores/spas",
    images: ["/inicio_page.png"],
  },
};

const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://agenditapp.com" },
    { "@type": "ListItem", position: 2, name: "Sectores", item: "https://agenditapp.com/sectores" },
    { "@type": "ListItem", position: 3, name: "Spas y Bienestar", item: "https://agenditapp.com/sectores/spas" },
  ],
};

const features = [
  { title: "Gestión de terapeutas", description: "Asigna masajistas y terapeutas por servicio. Controla horarios y especialidades.", icon: "🧘‍♀️" },
  { title: "Control de salas", description: "Administra disponibilidad de cabinas, salas de masajes y espacios de tratamiento.", icon: "🛏️" },
  { title: "Catálogo de servicios wellness", description: "Masajes, faciales, hidroterapia, tratamientos corporales. Todo en un solo lugar.", icon: "💆‍♀️" },
  { title: "Reservas online 24/7", description: "Tus clientes reservan en cualquier momento. Aumenta ocupación sin atender el teléfono.", icon: "🌙" },
  { title: "Recordatorios personalizados", description: "Envía mensajes por WhatsApp con instrucciones previas al tratamiento.", icon: "📲" },
  { title: "Paquetes y promociones", description: "Crea combos de servicios, membresías y planes especiales para fidelizar clientes.", icon: "🎁" },
];

export default function SpasPage() {
  return (
    <>
      <SchemaOrg data={BREADCRUMB_SCHEMA} />
      <PageHeader />
      <SectorPageContent
        sectorName="Spas y Bienestar"
        icon="🧖‍♀️"
        h1="Spas y Centros de Bienestar"
        description="Digitaliza tu spa con reservas online automáticas, gestión de terapeutas y salas, recordatorios por WhatsApp y control total de servicios wellness."
        features={features}
        featuresHeading="Todo para gestionar tu spa profesionalmente"
        relatedSectors={[
          { title: "Salones de Belleza", slug: "salones-belleza", icon: "💇‍♀️", description: "Sistema completo para manicure, pedicure y tratamientos" },
          { title: "Lash & Brow Studios", slug: "lash-brow", icon: "👁️", description: "Agenda para extensiones de pestañas y microblading" },
          { title: "Estética Médica", slug: "estetica-medica", icon: "💉", description: "Agenda para tratamientos faciales y procedimientos médicos" },
        ]}
        ctaHeading="Transforma la gestión de tu spa"
        ctaBody="Únete a spas y centros de bienestar que ya digitalizaron su operación. Sin permanencia."
      />
      <PageFooter />
    </>
  );
}
