import type { Metadata } from "next";
import SchemaOrg from "../../(landing)/components/seo/SchemaOrg";
import PageHeader from "../../(landing)/components/ui/PageHeader";
import PageFooter from "../../(landing)/components/ui/PageFooter";
import SectorPageContent from "../../(landing)/components/ui/SectorPageContent";

export const metadata: Metadata = {
  title: "Software para Estética Médica | Citas Online + WhatsApp",
  description:
    "Agenda online para centros de estética médica: botox, láser, rellenos. Recordatorios WhatsApp con instrucciones previas. Sin permanencia. Desde $10/mes.",
  keywords: ["software estética médica", "agenda botox", "sistema de citas medicina estética", "agendamiento láser", "gestión tratamientos estéticos"],
  alternates: { canonical: "https://agenditapp.com/sectores/estetica-medica" },
  openGraph: {
    title: "Software para Estética Médica | Citas Online + WhatsApp",
    description:
      "Agenda online para centros de estética médica: botox, láser, rellenos. Recordatorios WhatsApp con instrucciones previas. Sin permanencia. Desde $10/mes.",
    url: "https://agenditapp.com/sectores/estetica-medica",
    images: [{ url: "/og?title=Est%C3%A9tica%20M%C3%A9dica&subtitle=Software%20de%20Agendamiento%20%C2%B7%20AgenditApp&tag=Sector", width: 1200, height: 630, alt: "Software de Agendamiento para Estética Médica — AgenditApp" }],
  },
};

const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://agenditapp.com" },
    { "@type": "ListItem", position: 2, name: "Sectores", item: "https://agenditapp.com/sectores" },
    { "@type": "ListItem", position: 3, name: "Estética Médica", item: "https://agenditapp.com/sectores/estetica-medica" },
  ],
};

const features = [
  { title: "Agenda de procedimientos", description: "Botox, rellenos, láser, faciales médicos. Cada tratamiento con su tiempo y protocolo.", icon: "💉" },
  { title: "Recordatorios automáticos", description: "Notificaciones por WhatsApp con preparación previa al procedimiento.", icon: "📲" },
  { title: "Historial de pacientes", description: "Registro de tratamientos anteriores, dosis y seguimiento post-procedimiento.", icon: "📋" },
  { title: "Múltiples profesionales", description: "Coordina agenda de médicos estéticos, enfermeros y especialistas del centro.", icon: "🏥" },
  { title: "Reservas con anticipación", description: "Tus pacientes agendan con semanas de anticipación desde tu página web.", icon: "📅" },
  { title: "Control de pagos", description: "Registra pagos por procedimiento, paquetes de sesiones y abonos de pacientes.", icon: "💰" },
];

const FAQS = [
  { q: "¿Es seguro para manejar datos de pacientes de estética médica?", a: "Sí. La información de tus pacientes se maneja de forma segura, sin exposición pública de datos sensibles ni historial de procedimientos visible para otros pacientes." },
  { q: "¿Puedo incluir instrucciones pre y post procedimiento en los recordatorios?", a: "Sí. Los mensajes de WhatsApp son completamente personalizables. Puedes indicar: 'No uses maquillaje el día del procedimiento' o 'Evita el sol por 48 horas' según el tratamiento." },
  { q: "¿Funciona para procedimientos de larga duración como aplicaciones de láser?", a: "Perfectamente. Cada servicio tiene su propia duración configurada, desde 15 minutos hasta varias horas. El sistema bloquea el tiempo necesario automáticamente." },
  { q: "¿Puedo gestionar múltiples médicos o especialistas en el mismo centro?", a: "Sí. Puedes crear un perfil por profesional, asignarles procedimientos específicos y gestionar la disponibilidad de cada uno de forma independiente." },
  { q: "¿Cuánto cuesta y hay permanencia?", a: "Los planes comienzan desde $10 USD al mes, sin permanencia. El plan Esencial ($20 USD/mes) incluye recordatorios automáticos por WhatsApp desde el número de tu centro." },
];

const INTRO = (
  <>
    <p>
      La estética médica combina la precisión de la práctica médica con la dinámica comercial de la belleza: procedimientos de 60 a 180 minutos, instrucciones específicas de preparación, pacientes que llegan sin haber seguido el protocolo previo e invalidan la sesión, y una lista de espera que hay que gestionar inteligentemente. Manejar todo esto por WhatsApp significa operar al límite.
    </p>
    <p>
      AgenditApp permite automatizar los procesos clave: el mensaje de confirmación puede incluir instrucciones de preparación (no usar maquillaje, evitar alcohol 48h antes), el recordatorio 24 horas antes asegura que el paciente llegue listo, y si necesita reagendar lo hace en segundos desde su teléfono. Las sesiones no se pierden por falta de comunicación.
    </p>
    <p>
      Para centros con varios médicos o especialistas, cada profesional gestiona su propia disponibilidad desde el mismo panel. Los pacientes reservan desde tu página web, ven los horarios reales y reciben confirmación inmediata. Sin llamadas, sin listas en papel, sin confusiones de última hora.
    </p>
  </>
);

export default function EsteticaMedicaPage() {
  return (
    <>
      <SchemaOrg data={BREADCRUMB_SCHEMA} />
      <PageHeader />
      <SectorPageContent
        sectorName="Estética Médica"
        icon="💉"
        h1="Centros de Estética Médica"
        description="Gestiona tu centro de medicina estética con herramientas profesionales. Organiza tratamientos, procedimientos y seguimiento con reservas online y recordatorios automáticos."
        sectorIntro={INTRO}
        features={features}
        featuresHeading="Todo para tu centro de estética médica"
        faqs={FAQS}
        relatedPosts={[
          { slug: "cuanto-cuesta-software-agendamiento-salon", title: "¿Cuánto cuesta un software de agendamiento? Comparativa completa 2026", readingTime: "8 min" },
          { slug: "reducir-inasistencias-salon-belleza-whatsapp", title: "Cómo reducir las inasistencias con recordatorios automáticos por WhatsApp", readingTime: "8 min" },
          { slug: "mejores-apps-agendar-citas-colombia-2026", title: "Las 7 mejores apps para agendar citas en Colombia (2026)", readingTime: "10 min" },
        ]}
        relatedSectors={[
          { title: "Salones de Belleza", slug: "salones-belleza", icon: "💇‍♀️", description: "Sistema completo para manicure, pedicure y tratamientos" },
          { title: "Barberías", slug: "barberias", icon: "💈", description: "Sistema de turnos para barberos y servicios express" },
          { title: "Spas y Bienestar", slug: "spas", icon: "🧖‍♀️", description: "Gestión de masajes, faciales y tratamientos" },
        ]}
        ctaHeading="¿Listo para profesionalizar tu centro?"
        ctaBody="Únete a centros de estética médica que ya confían en AgenditApp para gestionar sus procedimientos."
      />
      <PageFooter />
    </>
  );
}
