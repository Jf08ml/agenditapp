import type { Metadata } from "next";
import SchemaOrg from "../../(landing)/components/seo/SchemaOrg";
import PageHeader from "../../(landing)/components/ui/PageHeader";
import PageFooter from "../../(landing)/components/ui/PageFooter";
import SectorPageContent from "../../(landing)/components/ui/SectorPageContent";

export const metadata: Metadata = {
  title: "Software para Fotógrafos | Reservas de Sesiones + WhatsApp",
  description:
    "Agenda online para fotógrafos y estudios: sesiones, eventos y alquiler de estudio. Recordatorios WhatsApp con instrucciones de vestuario. Desde $10/mes.",
  keywords: ["software fotógrafos", "agenda estudio fotográfico", "sistema de reservas sesiones", "agendamiento fotografía", "control agenda fotógrafo"],
  alternates: { canonical: "https://agenditapp.com/sectores/fotografia" },
  openGraph: {
    title: "Software para Fotógrafos | Reservas de Sesiones + WhatsApp",
    description:
      "Agenda online para fotógrafos y estudios: sesiones, eventos y alquiler de estudio. Recordatorios WhatsApp con instrucciones de vestuario. Desde $10/mes.",
    url: "https://agenditapp.com/sectores/fotografia",
    images: [{ url: "/og?title=Fot%C3%B3grafos%20y%20Estudios&subtitle=Software%20de%20Agendamiento%20%C2%B7%20AgenditApp&tag=Sector", width: 1200, height: 630, alt: "Software de Agendamiento para Fotógrafos y Estudios — AgenditApp" }],
  },
};

const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://agenditapp.com" },
    { "@type": "ListItem", position: 2, name: "Sectores", item: "https://agenditapp.com/sectores" },
    { "@type": "ListItem", position: 3, name: "Fotógrafos y Estudios", item: "https://agenditapp.com/sectores/fotografia" },
  ],
};

const features = [
  { title: "Reserva de sesiones", description: "Sesiones de retrato, familia, producto, embarazo. Cada tipo con su duración y precio.", icon: "📸" },
  { title: "Recordatorios automáticos", description: "Notificaciones por WhatsApp con indicaciones de vestuario y llegada al estudio.", icon: "📲" },
  { title: "Agenda de eventos", description: "Gestiona bodas, grados, eventos corporativos. Control de disponibilidad de fechas.", icon: "🎉" },
  { title: "Alquiler de estudio", description: "Reservas de espacio por horas para modelos, diseñadores y otros fotógrafos.", icon: "🏢" },
  { title: "Portafolio en tu landing", description: "Muestra tu trabajo y permite reservar directamente desde tu página web.", icon: "🎨" },
  { title: "Control de pagos", description: "Registra anticipos, saldos y pagos por sesión o paquete fotográfico.", icon: "💰" },
];

const FAQS = [
  { q: "¿Puedo agendar sesiones de duración variable según el tipo?", a: "Sí. Configuras cada tipo de sesión con su duración: retrato individual (1h), sesión familiar (2h), producto (3h), evento full day. Cada uno bloquea el tiempo correcto en tu agenda." },
  { q: "¿Los clientes pueden pagar un anticipo al reservar para asegurar la fecha?", a: "Puedes indicar en el mensaje de confirmación las condiciones de tu anticipo. El control del pago lo gestionas desde tu panel, y puedes registrar abonos y saldos por sesión." },
  { q: "¿Los recordatorios pueden incluir instrucciones de vestuario o llegada?", a: "Sí. Personalizas el mensaje de WhatsApp con las indicaciones de tu sesión: qué ropa traer, a qué hora llegar, qué tener listo. Se envía automáticamente antes de la cita." },
  { q: "¿Puedo gestionar también el alquiler del estudio por horas?", a: "Sí. Crea un servicio de 'Alquiler de estudio' con precio por hora y duración flexible. Modelos, diseñadores y otros fotógrafos pueden reservarlo directamente desde tu web." },
  { q: "¿Cuánto cuesta y hay permanencia?", a: "Los planes inician desde $10 USD al mes, sin permanencia. Cancelas cuando quieras sin penalizaciones." },
];

const INTRO = (
  <>
    <p>
      La agenda de un fotógrafo es única: sesiones de distintos tipos (retrato, familia, recién nacido, eventos), ubicaciones variables, duraciones distintas y tarifas diferentes. Gestionar una semana con sesiones de retrato, familias y una pre-quinceañera por WhatsApp implica malabarear horarios, tarifas e instrucciones en conversaciones paralelas. Inevitablemente se olvida algo.
    </p>
    <p>
      AgenditApp permite crear servicios específicos por tipo de sesión —cada uno con su duración, precio e instrucciones automáticas. El cliente reserva desde tu sitio web, recibe una confirmación con los detalles de preparación (vestuario, hora de llegada, qué traer) y un recordatorio 24 horas antes. Tú visualizas toda tu semana desde el panel, sin confusiones de última hora ni dobles reservas.
    </p>
    <p>
      Para estudios que también alquilan espacio por horas, ese servicio se configura como cualquier otro: modelos, diseñadores y otros fotógrafos lo reservan directamente desde tu web, con confirmación y pago de anticipo registrado en el sistema.
    </p>
  </>
);

export default function FotografiaPage() {
  return (
    <>
      <SchemaOrg data={BREADCRUMB_SCHEMA} />
      <PageHeader />
      <SectorPageContent
        sectorName="Fotógrafos y Estudios"
        icon="📸"
        h1="Fotógrafos y Estudios"
        description="Gestiona tu estudio fotográfico de forma profesional. Organiza sesiones, eventos y alquiler de estudio con reservas online y recordatorios automáticos."
        sectorIntro={INTRO}
        features={features}
        featuresHeading="Todo para gestionar tu estudio fotográfico"
        faqs={FAQS}
        relatedPosts={[
          { slug: "primeros-clientes-salon-belleza-barberia", title: "Cómo conseguir los primeros 100 clientes para tu negocio de servicios", readingTime: "10 min" },
          { slug: "mejores-apps-agendar-citas-colombia-2026", title: "Las 7 mejores apps para agendar citas en Colombia (2026)", readingTime: "10 min" },
        ]}
        relatedSectors={[
          { title: "Abogados y Asesorías", slug: "abogados", icon: "⚖️", description: "Agenda de consultas legales y reuniones" },
          { title: "Profesores de Música", slug: "musica", icon: "🎸", description: "Agenda de clases particulares y talleres" },
          { title: "Tutores y Academias", slug: "tutorias", icon: "📚", description: "Sistema de reservas para clases particulares" },
        ]}
        ctaHeading="¿Listo para profesionalizar tu estudio?"
        ctaBody="Únete a fotógrafos que ya confían en AgenditApp para gestionar sus sesiones."
      />
      <PageFooter />
    </>
  );
}
