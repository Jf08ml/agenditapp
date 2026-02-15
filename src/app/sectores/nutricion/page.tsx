import type { Metadata } from "next";
import SchemaOrg from "../../(landing)/components/seo/SchemaOrg";
import { DemoCtaButton } from "../../(landing)/components/ui/DemoCtaModal";
import PageHeader from "../../(landing)/components/ui/PageHeader";
import PageFooter from "../../(landing)/components/ui/PageFooter";

export const metadata: Metadata = {
  title: "Software para Nutricionistas | Sistema de Consultas Nutricionales",
  description:
    "Sistema de agendamiento para nutricionistas. Gestiona consultas, planes alimenticios, seguimiento de pacientes y citas de control.",
  keywords: [
    "software para nutricionistas",
    "agenda nutrición",
    "sistema consultas nutricionales",
    "planes alimenticios",
    "dietistas",
    "control peso",
  ],
  alternates: {
    canonical: "https://agenditapp.com/sectores/nutricion",
  },
  openGraph: {
    title: "Software para Nutricionistas | AgenditApp",
    description:
      "Agenda para nutricionistas. Gestiona consultas, seguimiento y planes alimenticios de forma profesional.",
    url: "https://agenditapp.com/sectores/nutricion",
    images: ["/inicio_page.png"],
  },
};

const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Inicio",
      item: "https://agenditapp.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Sectores",
      item: "https://agenditapp.com/sectores",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Nutrición",
      item: "https://agenditapp.com/sectores/nutricion",
    },
  ],
};

const features = [
  {
    title: "Agenda de consultas",
    description:
      "Controla primera consulta, controles de seguimiento y valoraciones.",
    icon: "📅",
  },
  {
    title: "Recordatorios automáticos",
    description:
      "Envía recordatorios por WhatsApp para mejorar adherencia al tratamiento.",
    icon: "🔔",
  },
  {
    title: "Historial nutricional",
    description:
      "Registra peso, medidas, objetivos y evolución de cada paciente.",
    icon: "📊",
  },
  {
    title: "Gestión de planes",
    description:
      "Organiza entregas de planes alimenticios y fechas de actualización.",
    icon: "🥗",
  },
  {
    title: "Reservas 24/7",
    description:
      "Tus pacientes pueden agendar controles desde cualquier dispositivo.",
    icon: "⏰",
  },
  {
    title: "Control de pagos",
    description:
      "Registra honorarios, paquetes prepagados y genera reportes.",
    icon: "💳",
  },
];

export default function NutricionPage() {
  return (
    <>
      <SchemaOrg data={BREADCRUMB_SCHEMA} />
      <PageHeader />

      <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pt-16">
        {/* Hero */}
        <section className="py-16 sm:py-24 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-block px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 text-green-300 text-sm font-bold mb-6">
              🥗 Nutrición
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6">
              Software de Agendamiento para{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-lime-500">
                Nutricionistas
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Gestiona tu consulta nutricional con una herramienta profesional.
              Controla consultas, seguimiento y evolución de tus pacientes en un
              solo lugar.
            </p>
            <DemoCtaButton className="inline-block px-10 py-5 rounded-2xl bg-green-500 text-white text-lg font-bold shadow-lg hover:bg-green-400 transition-colors cursor-pointer">
              Probar gratis por WhatsApp
            </DemoCtaButton>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Todo lo que necesitas para tu consulta
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 border border-white/10 rounded-2xl p-6 hover:border-green-400/50 transition-all"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-slate-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-16 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-green-900/20 to-lime-900/20 border border-green-500/20 rounded-2xl p-8 sm:p-12">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-5xl">💚</div>
                <div>
                  <p className="text-lg text-slate-200 italic mb-4">
                    &quot;Mis pacientes ya no pierden controles. Los recordatorios
                    automáticos mejoraron muchísimo la adherencia al tratamiento
                    y la evolución de resultados.&quot;
                  </p>
                  <p className="font-bold text-green-300">
                    Ana - Nutricionista Deportiva
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              ¿Listo para optimizar tu consulta?
            </h2>
            <p className="text-slate-300 mb-8 text-lg">
              Únete a nutricionistas que ya confían en AgenditApp para gestionar
              su práctica profesional.
            </p>
            <DemoCtaButton className="inline-block px-10 py-5 rounded-2xl bg-green-500 text-white text-lg font-bold shadow-lg hover:bg-green-400 transition-colors cursor-pointer">
              Solicitar demo gratis
            </DemoCtaButton>
          </div>
        </section>
      </main>
      <PageFooter />
    </>
  );
}
