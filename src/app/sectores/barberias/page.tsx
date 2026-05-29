import type { Metadata } from "next";
import SchemaOrg from "../../(landing)/components/seo/SchemaOrg";
import PageHeader from "../../(landing)/components/ui/PageHeader";
import PageFooter from "../../(landing)/components/ui/PageFooter";
import SectorPageContent from "../../(landing)/components/ui/SectorPageContent";

export const metadata: Metadata = {
  title: "Software para Barberías | Reservas Online + WhatsApp 24/7",
  description:
    "Sistema de agendamiento para barberías: turnos express, gestión de barberos, recordatorios WhatsApp desde tu número propio. Reservas 24/7. Desde $10/mes.",
  alternates: { canonical: "https://agenditapp.com/sectores/barberias" },
  openGraph: {
    title: "Software para Barberías | Reservas Online + WhatsApp 24/7",
    description:
      "Sistema de agendamiento para barberías: turnos express, gestión de barberos, recordatorios WhatsApp desde tu número propio. Reservas 24/7. Desde $10/mes.",
    url: "https://agenditapp.com/sectores/barberias",
    images: [{ url: "/og?title=Barber%C3%ADas&subtitle=Software%20de%20Agendamiento%20%C2%B7%20AgenditApp&tag=Sector", width: 1200, height: 630, alt: "Software de Agendamiento para Barberías — AgenditApp" }],
  },
};

const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://agenditapp.com" },
    { "@type": "ListItem", position: 2, name: "Sectores", item: "https://agenditapp.com/sectores" },
    { "@type": "ListItem", position: 3, name: "Barberías", item: "https://agenditapp.com/sectores/barberias" },
  ],
};

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Software de Agendamiento para Barberías",
  provider: { "@type": "Organization", name: "AgenditApp", url: "https://agenditapp.com" },
  areaServed: { "@type": "Country", name: "Colombia" },
  audience: { "@type": "BusinessAudience", name: "Barberías y Barberos Profesionales" },
};

const features = [
  { title: "Turnos express optimizados", description: "Gestiona turnos cortos de 20-30 min. Ideal para cortes rápidos y alto flujo de clientes.", icon: "⏱️" },
  { title: "Gestión de barberos", description: "Asigna clientes por barbero, controla horarios y descansos. Reportes de productividad.", icon: "✂️" },
  { title: "Servicios personalizados", description: "Corte, barba, afeitado, diseño. Configura duración y precio de cada servicio.", icon: "💈" },
  { title: "Recordatorios automáticos", description: "Envía recordatorios por WhatsApp para evitar ausencias y optimizar tu agenda.", icon: "📲" },
  { title: "Sin instalaciones", description: "Todo en la nube. Accede desde tu celular, tablet o computadora desde cualquier lugar.", icon: "☁️" },
  { title: "Página web incluida", description: "Landing personalizada para que tus clientes reserven online las 24 horas.", icon: "🌐" },
];

const FAQS = [
  { q: "¿Puedo gestionar múltiples barberos con horarios independientes?", a: "Sí. Puedes crear un perfil por barbero, asignarle servicios específicos y horarios propios. Los clientes pueden elegir a su barbero favorito al reservar." },
  { q: "¿Funciona bien para turnos cortos de 20-30 minutos?", a: "Perfectamente. AgenditApp permite configurar servicios con duraciones desde 15 minutos, ideal para cortes express, barba o arreglos rápidos con alto flujo de clientes." },
  { q: "¿Los clientes pueden reservar desde Instagram o WhatsApp?", a: "Sí. Puedes compartir tu link de reservas en Instagram, WhatsApp y Google. Tus clientes reservan en segundos sin necesidad de llamar ni escribir." },
  { q: "¿Cuánto cuesta AgenditApp para barberías?", a: "Los planes comienzan desde $10 USD al mes, con reservas ilimitadas y panel administrativo completo. El plan Esencial ($20 USD) incluye recordatorios automáticos por WhatsApp desde tu propio número." },
  { q: "¿Hay permanencia o contrato mínimo?", a: "No. Es mes a mes, sin permanencia ni cláusulas. Puedes cancelar cuando quieras desde tu panel de administración." },
];

const INTRO = (
  <>
    <p>
      Las barberías enfrentan una combinación única de desafíos: servicios de corta duración (20–30 minutos), múltiples barberos con clientes propios y la tensión constante entre walk-ins y reservas. Gestionar esto a mano —especialmente los viernes en la tarde— significa estrés, confusiones y citas perdidas que nunca se recuperan.
    </p>
    <p>
      AgenditApp le da a cada barbero su propio calendario y disponibilidad. Los clientes reservan a su barbero favorito desde tu landing en segundos, sin llamar. El sistema bloquea automáticamente el tiempo exacto por servicio, evita solapamientos y envía recordatorios por WhatsApp desde <strong>tu propio número</strong> —no de un remitente genérico— lo que genera tasas de confirmación mucho más altas.
    </p>
    <p>
      El resultado es una agenda que se llena sola: menos tiempo pegado al teléfono coordinando turnos, menos ausencias y más ingresos. Barberías que usan AgenditApp reportan reducciones de hasta un 70% en inasistencias y recuperan entre 1 y 2 horas diarias que antes dedicaban a gestión manual.
    </p>
  </>
);

export default function BarberiasPage() {
  return (
    <>
      <SchemaOrg data={[BREADCRUMB_SCHEMA, SERVICE_SCHEMA]} />
      <PageHeader />
      <SectorPageContent
        sectorName="Barberías"
        icon="💈"
        h1="Barberías"
        description="Optimiza tu barbería con reservas online automáticas, control de turnos express y recordatorios por WhatsApp. Aumenta tu facturación sin perder tiempo."
        sectorIntro={INTRO}
        features={features}
        featuresHeading="Todo lo que necesitas para tu barbería"
        faqs={FAQS}
        relatedPosts={[
          { slug: "gestionar-equipo-barberia-salon-comisiones", title: "Cómo gestionar el equipo de tu barbería: horarios, comisiones y agenda por empleado", readingTime: "9 min" },
          { slug: "primeros-clientes-salon-belleza-barberia", title: "Cómo conseguir los primeros 100 clientes para tu barbería", readingTime: "10 min" },
          { slug: "digitalizar-agenda-barberia-salon-2026", title: "Guía completa: cómo digitalizar la agenda de tu barbería en 2026", readingTime: "9 min" },
          { slug: "reducir-inasistencias-salon-belleza-whatsapp", title: "Cómo reducir las inasistencias con recordatorios automáticos por WhatsApp", readingTime: "8 min" },
        ]}
        relatedSectors={[
          { title: "Salones de Belleza", slug: "salones-belleza", icon: "💇‍♀️", description: "Sistema completo para manicure, pedicure y tratamientos" },
          { title: "Estética Médica", slug: "estetica-medica", icon: "💉", description: "Agenda para tratamientos faciales y procedimientos" },
          { title: "Gimnasios y Fitness", slug: "gimnasios", icon: "🏋️‍♀️", description: "Reservas de clases y entrenamiento personal" },
        ]}
        ctaHeading="Lleva tu barbería al siguiente nivel"
        comparativas={[
          { label: "vs Fresha", href: "/vs/fresha" },
          { label: "vs Booksy", href: "/vs/booksy" },
        ]}
        ctaBody="Únete a cientos de barberías que ya optimizaron su agenda. Sin permanencia."
      />
      <PageFooter />
    </>
  );
}
