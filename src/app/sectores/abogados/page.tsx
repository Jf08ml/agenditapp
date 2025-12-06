import type { Metadata } from "next";
import SchemaOrg from "../../(landing)/components/seo/SchemaOrg";
import { WHATSAPP_HREF } from "../../(landing)/components/constants";
import PageHeader from "../../(landing)/components/ui/PageHeader";
import PageFooter from "../../(landing)/components/ui/PageFooter";

export const metadata: Metadata = {
  title: "Software para Abogados | Sistema de Citas Legales y Asesorías",
  description:
    "Sistema de agendamiento para abogados y bufetes. Gestiona consultas legales, asesorías y reuniones con clientes de forma profesional.",
  keywords: [
    "software para abogados",
    "agenda consultas legales",
    "sistema asesorías",
    "bufete abogados",
    "citas legales",
    "consultorio jurídico",
  ],
  alternates: {
    canonical: "https://agenditapp.com/sectores/abogados",
  },
  openGraph: {
    title: "Software para Abogados | AgenditApp",
    description:
      "Agenda para abogados. Gestiona consultas, reuniones y asesorías legales con reservas online.",
    url: "https://agenditapp.com/sectores/abogados",
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
      name: "Abogados",
      item: "https://agenditapp.com/sectores/abogados",
    },
  ],
};

const features = [
  {
    title: "Agenda de consultas",
    description:
      "Gestiona primeras consultas, asesorías, reuniones y audiencias.",
    icon: "⚖️",
  },
  {
    title: "Recordatorios automáticos",
    description:
      "Envía recordatorios discretos por WhatsApp antes de cada cita.",
    icon: "📲",
  },
  {
    title: "Gestión de casos",
    description:
      "Organiza reuniones por caso, cliente o especialidad legal.",
    icon: "📁",
  },
  {
    title: "Consultas presenciales y virtuales",
    description:
      "Gestiona tanto reuniones en tu despacho como videollamadas.",
    icon: "💻",
  },
  {
    title: "Notas confidenciales",
    description:
      "Espacio para registrar observaciones de cada consulta de forma privada.",
    icon: "📝",
  },
  {
    title: "Control de honorarios",
    description:
      "Registra honorarios, anticipos y seguimiento de pagos.",
    icon: "💼",
  },
];

export default function AbogadosPage() {
  return (
    <>
      <SchemaOrg data={BREADCRUMB_SCHEMA} />
      <PageHeader />

      <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pt-16">
        {/* Hero */}
        <section className="py-16 sm:py-24 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-block px-4 py-2 rounded-full bg-gray-500/10 border border-gray-500/30 text-gray-300 text-sm font-bold mb-6">
              ⚖️ Legal
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6">
              Software de Agendamiento para{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-stone-400">
                Abogados y Asesorías
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Gestiona tu despacho legal con profesionalismo. Organiza consultas,
              reuniones y asesorías con una agenda que transmite confianza y
              confidencialidad.
            </p>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-5 rounded-2xl bg-gray-600 text-white text-lg font-bold shadow-lg hover:bg-gray-500 transition-colors"
            >
              Probar gratis por WhatsApp
            </a>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Funcionalidades para tu despacho
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 border border-white/10 rounded-2xl p-6 hover:border-gray-400/50 transition-all"
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
            <div className="bg-gradient-to-r from-gray-900/20 to-stone-900/20 border border-gray-500/20 rounded-2xl p-12">
              <h2 className="text-3xl font-bold text-white mb-6 text-center">
                ¿Por qué abogados confían en AgenditApp?
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-300 mb-3">
                    🔐 Confidencialidad garantizada
                  </h3>
                  <p className="text-slate-300">
                    Tus datos y los de tus clientes están protegidos. Solo tú
                    tienes acceso a la información de tus casos.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-300 mb-3">
                    💼 Profesionalismo
                  </h3>
                  <p className="text-slate-300">
                    Una agenda online transmite confianza y organización a tus
                    clientes desde el primer contacto.
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
              ¿Listo para profesionalizar tu despacho?
            </h2>
            <p className="text-slate-300 mb-8 text-lg">
              Únete a abogados que ya confían en AgenditApp para gestionar su
              práctica legal.
            </p>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-5 rounded-2xl bg-gray-600 text-white text-lg font-bold shadow-lg hover:bg-gray-500 transition-colors"
            >
              Solicitar demo gratis
            </a>
          </div>
        </section>
      </main>
      <PageFooter />
    </>
  );
}
