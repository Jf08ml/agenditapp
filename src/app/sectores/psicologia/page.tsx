import type { Metadata } from "next";
import SchemaOrg from "../../(landing)/components/seo/SchemaOrg";
import { DemoCtaButton } from "../../(landing)/components/ui/DemoCtaModal";
import PageHeader from "../../(landing)/components/ui/PageHeader";
import PageFooter from "../../(landing)/components/ui/PageFooter";

export const metadata: Metadata = {
  title: "Software para Psicólogos | Sistema de Citas Terapéuticas",
  description:
    "Sistema de agendamiento confidencial para psicólogos y terapeutas. Gestiona sesiones, recordatorios automáticos y seguimiento de pacientes con total privacidad.",
  keywords: [
    "software para psicólogos",
    "agenda psicología",
    "sistema citas terapia",
    "agendamiento salud mental",
    "software terapeutas",
    "gestión consultas psicología",
  ],
  alternates: {
    canonical: "https://agenditapp.com/sectores/psicologia",
  },
  openGraph: {
    title: "Software para Psicólogos | AgenditApp",
    description:
      "Agenda confidencial para psicólogos. Reservas online, recordatorios y gestión profesional de sesiones.",
    url: "https://agenditapp.com/sectores/psicologia",
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
      name: "Psicología",
      item: "https://agenditapp.com/sectores/psicologia",
    },
  ],
};

const features = [
  {
    title: "Agenda confidencial",
    description:
      "Sistema seguro que protege la privacidad de tus pacientes en cada sesión.",
    icon: "🔒",
  },
  {
    title: "Recordatorios discretos",
    description:
      "Envía recordatorios por WhatsApp sin revelar información sensible.",
    icon: "📲",
  },
  {
    title: "Gestión de sesiones",
    description:
      "Controla frecuencia, tipo de terapia y progreso de cada paciente.",
    icon: "📋",
  },
  {
    title: "Modalidad presencial y online",
    description:
      "Gestiona tanto consultas en consultorio como sesiones virtuales.",
    icon: "💻",
  },
  {
    title: "Notas privadas",
    description:
      "Espacio para registrar observaciones clínicas de forma confidencial.",
    icon: "📝",
  },
  {
    title: "Control de pagos",
    description:
      "Registra honorarios, sesiones prepagadas y genera reportes.",
    icon: "💰",
  },
];

export default function PsicologiaPage() {
  return (
    <>
      <SchemaOrg data={BREADCRUMB_SCHEMA} />
      <PageHeader />

      <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pt-16">
        {/* Hero */}
        <section className="py-16 sm:py-24 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-block px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-sm font-bold mb-6">
              🧠 Psicología y Terapia
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6">
              Software de Agendamiento para{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">
                Psicólogos y Terapeutas
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Sistema confidencial diseñado para profesionales de salud mental.
              Gestiona sesiones, recordatorios y seguimiento con total
              privacidad y profesionalismo.
            </p>
            <DemoCtaButton className="inline-block px-10 py-5 rounded-2xl bg-indigo-500 text-white text-lg font-bold shadow-lg hover:bg-indigo-400 transition-colors cursor-pointer">
              Probar gratis por WhatsApp
            </DemoCtaButton>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Diseñado para tu práctica terapéutica
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 border border-white/10 rounded-2xl p-6 hover:border-indigo-400/50 transition-all"
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

        {/* Benefits */}
        <section className="py-16 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-r from-indigo-900/20 to-purple-900/20 border border-indigo-500/20 rounded-2xl p-12">
              <h2 className="text-3xl font-bold text-white mb-6 text-center">
                ¿Por qué psicólogos confían en AgenditApp?
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-indigo-300 mb-3">
                    🔐 Privacidad garantizada
                  </h3>
                  <p className="text-slate-300">
                    Cumplimos con estándares de confidencialidad. Los datos de
                    tus pacientes están protegidos y solo tú tienes acceso.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-indigo-300 mb-3">
                    ⚡ Reduce ausencias
                  </h3>
                  <p className="text-slate-300">
                    Los recordatorios automáticos ayudan a que tus pacientes no
                    olviden sus sesiones, mejorando continuidad terapéutica.
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
              ¿Listo para profesionalizar tu práctica?
            </h2>
            <p className="text-slate-300 mb-8 text-lg">
              Únete a psicólogos que ya confían en AgenditApp para gestionar su
              consultorio.
            </p>
            <DemoCtaButton className="inline-block px-10 py-5 rounded-2xl bg-indigo-500 text-white text-lg font-bold shadow-lg hover:bg-indigo-400 transition-colors cursor-pointer">
              Solicitar demo gratis
            </DemoCtaButton>
          </div>
        </section>
      </main>
      <PageFooter />
    </>
  );
}
