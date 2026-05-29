import type { Metadata } from "next";
import SchemaOrg from "../../(landing)/components/seo/SchemaOrg";
import PageHeader from "../../(landing)/components/ui/PageHeader";
import PageFooter from "../../(landing)/components/ui/PageFooter";
import SectorPageContent from "../../(landing)/components/ui/SectorPageContent";

export const metadata: Metadata = {
  title: "Agenda Online para Psicólogos | Sesiones + Privacidad Total",
  description:
    "Agenda online para psicólogos: sesiones presenciales/online, recordatorios WhatsApp discretos, control de pagos. Total privacidad. Desde $10/mes.",
  alternates: { canonical: "https://agenditapp.com/sectores/psicologia" },
  openGraph: {
    title: "Agenda Online para Psicólogos | Sesiones + Privacidad Total",
    description:
      "Agenda online para psicólogos: sesiones presenciales/online, recordatorios WhatsApp discretos, control de pagos. Total privacidad. Desde $10/mes.",
    url: "https://agenditapp.com/sectores/psicologia",
    images: [{ url: "/og?title=Psic%C3%B3logos%20y%20Terapeutas&subtitle=Software%20de%20Agendamiento%20%C2%B7%20AgenditApp&tag=Sector", width: 1200, height: 630, alt: "Software de Agendamiento para Psicólogos y Terapeutas — AgenditApp" }],
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

const FAQS = [
  { q: "¿La plataforma garantiza confidencialidad para mis pacientes?", a: "Sí. AgenditApp está diseñado con discreción: los pacientes solo ven su propia agenda, los mensajes de recordatorio son genéricos y no mencionan el tipo de consulta. Tu práctica mantiene la privacidad que el proceso terapéutico requiere." },
  { q: "¿Puedo gestionar sesiones presenciales y online en el mismo sistema?", a: "Sí. Puedes crear servicios diferenciados (sesión presencial / sesión virtual) con sus respectivos horarios y duración. Cada uno se agenda de forma independiente." },
  { q: "¿Los pacientes pueden cancelar sin avisarme directamente?", a: "Sí. Desde el recordatorio de WhatsApp, el paciente puede cancelar con anticipación haciendo clic en un enlace. Tú recibes la notificación de inmediato y puedes ofrecer ese espacio a otro paciente." },
  { q: "¿Se puede configurar el tiempo entre sesiones para descanso o notas clínicas?", a: "Sí. Puedes agregar tiempo de buffer entre citas al configurar cada servicio, dejando 10 o 15 minutos libres entre pacientes para notas o transición." },
  { q: "¿Cuánto cuesta y hay permanencia?", a: "Los planes inician desde $10 USD al mes, sin permanencia. El plan Esencial ($20 USD) incluye recordatorios automáticos por WhatsApp desde tu número de consultorio." },
];

const INTRO = (
  <>
    <p>
      La terapia psicológica tiene un requisito fundamental: la consistencia. Un paciente que pierde una sesión o no reprograma rápidamente puede interrumpir un proceso terapéutico construido durante semanas. El problema para muchos psicólogos es que la gestión manual por WhatsApp genera fricción en el peor momento —cuando el paciente más necesita facilidad de contacto.
    </p>
    <p>
      AgenditApp da un sistema de agenda que respeta la confidencialidad del paciente: cada persona solo ve sus propias citas y datos. El recordatorio automático por WhatsApp llega 24 horas antes y permite al paciente confirmar o reprogramar desde su propio teléfono. Y como el mensaje llega desde <strong>tu número de consultorio</strong>, la relación terapéutica se mantiene con el profesionalismo que exige el vínculo terapéutico.
    </p>
    <p>
      Configura tiempo de buffer entre sesiones para tus notas clínicas, gestiona sesiones presenciales y virtuales desde el mismo panel, y controla pagos por sesión o por proceso terapéutico completo. Sin distracciones administrativas en medio de tu jornada.
    </p>
  </>
);

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
        sectorIntro={INTRO}
        features={features}
        featuresHeading="Todo para profesionalizar tu práctica"
        faqs={FAQS}
        relatedPosts={[
          { slug: "software-agendamiento-consultorios-terapeutas-colombia", title: "Software de agendamiento para consultorios y centros terapéuticos: guía completa 2026", readingTime: "9 min" },
          { slug: "reducir-inasistencias-salon-belleza-whatsapp", title: "Cómo reducir las inasistencias con recordatorios automáticos por WhatsApp", readingTime: "8 min" },
        ]}
        relatedSectors={[
          { title: "Consultorios y Clínicas", slug: "consultorios", icon: "🏥", description: "Sistema de citas para profesionales de la salud" },
          { title: "Nutricionistas", slug: "nutricion", icon: "🥗", description: "Consultas nutricionales y seguimiento de pacientes" },
          { title: "Tutores y Academias", slug: "tutorias", icon: "📚", description: "Sistema de reservas para clases particulares" },
        ]}
        ctaHeading="¿Listo para profesionalizar tu práctica?"
        comparativas={[
          { label: "vs AgendaPro", href: "/vs/agendapro" },
          { label: "vs Weibook", href: "/vs/weibook" },
        ]}
        ctaBody="Únete a psicólogos que ya confían en AgenditApp para gestionar su consultorio."
      />
      <PageFooter />
    </>
  );
}
