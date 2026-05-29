import type { Metadata } from "next";
import SchemaOrg from "../../(landing)/components/seo/SchemaOrg";
import PageHeader from "../../(landing)/components/ui/PageHeader";
import PageFooter from "../../(landing)/components/ui/PageFooter";
import SectorPageContent from "../../(landing)/components/ui/SectorPageContent";

export const metadata: Metadata = {
  title: "Software para Veterinarias | Citas Online + WhatsApp 24/7",
  description:
    "Agendamiento online para veterinarias: consultas, grooming y vacunas. WhatsApp desde tu número con recordatorios para dueños de mascotas. Desde $10/mes.",
  keywords: ["software veterinaria", "agenda veterinaria", "sistema de citas mascotas", "agendamiento grooming", "control citas veterinario"],
  alternates: { canonical: "https://agenditapp.com/sectores/veterinarias" },
  openGraph: {
    title: "Software para Veterinarias | Citas Online + WhatsApp 24/7",
    description:
      "Agendamiento online para veterinarias: consultas, grooming y vacunas. WhatsApp desde tu número con recordatorios para dueños de mascotas. Desde $10/mes.",
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

const FAQS = [
  { q: "¿Puedo diferenciar tipos de atención: consulta, grooming y vacunación?", a: "Sí. Cada tipo de servicio tiene su propia duración, precio y nombre. Puedes tener 'Consulta médica' (30 min), 'Baño y corte' (2h), 'Vacunación' (15 min) todos en la misma plataforma." },
  { q: "¿Puedo gestionar múltiples veterinarios y el área de grooming al mismo tiempo?", a: "Sí. Crea perfiles separados para cada veterinario y para el servicio de grooming, con sus propias agendas y disponibilidades independientes." },
  { q: "¿Los dueños de mascotas pueden agendar desde su celular sin llamar?", a: "Exactamente. Los dueños reservan desde tu página web 24/7, eligen el tipo de servicio y el horario disponible, y reciben confirmación instantánea por WhatsApp." },
  { q: "¿Se guardan los registros de citas anteriores por mascota?", a: "Sí. En el historial del cliente puedes ver todas las citas pasadas, tipos de servicio y fechas de atención. Esto facilita el seguimiento de vacunas y tratamientos periódicos." },
  { q: "¿Cuánto cuesta y hay permanencia?", a: "Los planes van desde $10 USD al mes, sin permanencia. Cancelas cuando quieras. Incluye reservas ilimitadas y recordatorios por WhatsApp en los planes Esencial y Marca Propia." },
];

const INTRO = (
  <>
    <p>
      Las veterinarias gestionan una complejidad particular: la misma familia puede tener 2 o 3 mascotas con calendarios independientes de vacunas, desparasitaciones y controles. Cuando esto se maneja en papel o por WhatsApp, es fácil que una mascota se salte su vacuna anual o un control post-quirúrgico. Eso es un riesgo de salud y una pérdida de ingresos recurrentes.
    </p>
    <p>
      AgenditApp permite crear servicios específicos por tipo de atención —consulta médica, baño y corte, vacunación, seguimiento de cirugía— cada uno con su duración y precio. Los recordatorios automáticos por <strong>WhatsApp</strong> aseguran que los dueños lleguen a los controles anuales sin que tengas que hacer seguimiento manual. Esto convierte la medicina preventiva en un flujo de agenda predecible.
    </p>
    <p>
      Para clínicas con varios veterinarios y área de grooming, cada servicio y profesional tiene su propia disponibilidad desde el mismo panel. Tus clientes reservan online 24/7, sin llamar, y reciben confirmación instantánea con los datos de la cita.
    </p>
  </>
);

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
        sectorIntro={INTRO}
        features={features}
        featuresHeading="Todo para tu clínica veterinaria"
        faqs={FAQS}
        relatedPosts={[
          { slug: "software-agendamiento-consultorios-terapeutas-colombia", title: "Software de agendamiento para centros de salud: guía completa 2026", readingTime: "9 min" },
          { slug: "reducir-inasistencias-salon-belleza-whatsapp", title: "Cómo reducir las inasistencias con recordatorios automáticos por WhatsApp", readingTime: "8 min" },
        ]}
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
