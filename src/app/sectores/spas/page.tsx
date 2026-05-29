import type { Metadata } from "next";
import SchemaOrg from "../../(landing)/components/seo/SchemaOrg";
import PageHeader from "../../(landing)/components/ui/PageHeader";
import PageFooter from "../../(landing)/components/ui/PageFooter";
import SectorPageContent from "../../(landing)/components/ui/SectorPageContent";

export const metadata: Metadata = {
  title: "Software para Spas y Bienestar | Reservas + WhatsApp 24/7",
  description:
    "Software para spas y centros de bienestar: reservas online, gestión de terapeutas y salas, WhatsApp desde tu número. Reduce ausencias 70%. Desde $10/mes.",
  keywords: ["software para spas", "agenda para spa", "sistema de citas bienestar", "agendamiento spa", "software masajes"],
  alternates: { canonical: "https://agenditapp.com/sectores/spas" },
  openGraph: {
    title: "Software para Spas y Bienestar | Reservas + WhatsApp — AgenditApp",
    description:
      "Software para spas y centros de bienestar: reservas online, gestión de terapeutas y salas, WhatsApp desde tu número. Reduce ausencias 70%. Desde $10/mes.",
    url: "https://agenditapp.com/sectores/spas",
    images: [{ url: "/og?title=Spas%20y%20Bienestar&subtitle=Software%20de%20Agendamiento%20%C2%B7%20AgenditApp&tag=Sector", width: 1200, height: 630, alt: "Software de Agendamiento para Spas y Centros de Bienestar — AgenditApp" }],
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

const FAQS = [
  { q: "¿Puedo gestionar múltiples terapeutas y salas al mismo tiempo?", a: "Sí. AgenditApp permite asignar reservas por terapeuta y por sala de forma independiente, evitando cruces de horario y maximizando la ocupación de tu spa." },
  { q: "¿Puedo configurar paquetes de servicios o combos?", a: "Sí. Puedes crear servicios combinados (por ejemplo, masaje + facial) con una duración y precio únicos, y tus clientes los reservan como un solo paquete." },
  { q: "¿Los recordatorios de WhatsApp pueden incluir instrucciones previas al tratamiento?", a: "Sí. Puedes personalizar el mensaje de recordatorio para incluir indicaciones específicas: llegar sin maquillaje, venir con ropa cómoda, hidratarse antes, etc." },
  { q: "¿Cuánto cuesta AgenditApp para spas?", a: "Los planes van desde $10 USD/mes (básico) hasta $30 USD/mes (Marca Propia con dominio personalizado). Todos incluyen reservas ilimitadas y sin comisiones por transacción." },
  { q: "¿Hay permanencia o contrato mínimo?", a: "No. Es suscripción mensual, sin permanencia. Cancelas cuando quieras, sin penalizaciones ni trámites complicados." },
];

const INTRO = (
  <>
    <p>
      Un spa gestiona algo que ningún otro sector tiene igual: servicios de larga duración (90–120 minutos) en un número limitado de salas o cabinas de tratamiento. Cuando un cliente no se presenta a una sesión de 2 horas, la pérdida económica es significativa y ese espacio es casi imposible de rellenar a último momento.
    </p>
    <p>
      AgenditApp resuelve esto con confirmaciones automáticas y recordatorios de cancelación enviados desde <strong>tu propio número de WhatsApp</strong>. Los clientes confirman o reprograman en segundos, tú conoces tu ocupación real 48 horas antes y puedes llenar espacios cancelados con clientes de tu lista de espera.
    </p>
    <p>
      También puedes personalizar los mensajes con instrucciones específicas por tratamiento: llegar 10 minutos antes, no aplicar cremas antes del masaje, hidratarse bien el día anterior. Esto reduce las sesiones invalidadas por mala preparación y mejora la experiencia del cliente desde el primer contacto.
    </p>
  </>
);

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
        sectorIntro={INTRO}
        features={features}
        featuresHeading="Todo para gestionar tu spa profesionalmente"
        faqs={FAQS}
        relatedPosts={[
          { slug: "reducir-inasistencias-salon-belleza-whatsapp", title: "Cómo reducir las inasistencias con recordatorios automáticos por WhatsApp", readingTime: "8 min" },
          { slug: "fidelizar-clientes-salon-belleza", title: "Cómo fidelizar clientes: programas de lealtad que sí funcionan", readingTime: "9 min" },
          { slug: "mejores-apps-agendar-citas-colombia-2026", title: "Las 7 mejores apps para agendar citas en negocios de belleza en Colombia (2026)", readingTime: "10 min" },
        ]}
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
