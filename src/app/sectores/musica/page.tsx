import type { Metadata } from "next";
import SchemaOrg from "../../(landing)/components/seo/SchemaOrg";
import { WHATSAPP_HREF } from "../../(landing)/components/constants";
import PageHeader from "../../(landing)/components/ui/PageHeader";
import PageFooter from "../../(landing)/components/ui/PageFooter";

export const metadata: Metadata = {
  title: "Software para Profesores de Música | Sistema de Clases Particulares",
  description:
    "Sistema de agendamiento para profesores de música. Gestiona clases de guitarra, piano, canto y más con recordatorios automáticos.",
  keywords: [
    "software profesores música",
    "agenda clases guitarra",
    "sistema clases piano",
    "profesores particulares",
    "academia música",
    "clases canto",
  ],
  alternates: {
    canonical: "https://agenditapp.com/sectores/musica",
  },
  openGraph: {
    title: "Software para Profesores de Música | AgenditApp",
    description:
      "Agenda para profesores de música. Gestiona clases particulares, ensayos y talleres musicales.",
    url: "https://agenditapp.com/sectores/musica",
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
      name: "Música",
      item: "https://agenditapp.com/sectores/musica",
    },
  ],
};

const features = [
  {
    title: "Agenda de clases particulares",
    description:
      "Organiza clases de guitarra, piano, canto, batería y más instrumentos.",
    icon: "🎸",
  },
  {
    title: "Recordatorios automáticos",
    description:
      "Envía recordatorios por WhatsApp para que tus alumnos no falten.",
    icon: "📲",
  },
  {
    title: "Gestión de alumnos",
    description:
      "Registra nivel, instrumento, objetivos y progreso de cada estudiante.",
    icon: "📚",
  },
  {
    title: "Clases presenciales y online",
    description:
      "Gestiona tanto clases en tu estudio como sesiones virtuales.",
    icon: "💻",
  },
  {
    title: "Talleres y ensayos",
    description:
      "Organiza talleres grupales, ensayos de banda y eventos musicales.",
    icon: "🎹",
  },
  {
    title: "Control de pagos",
    description:
      "Registra mensualidades, clases sueltas y paquetes prepagados.",
    icon: "💳",
  },
];

export default function MusicaPage() {
  return (
    <>
      <SchemaOrg data={BREADCRUMB_SCHEMA} />
      <PageHeader />

      <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pt-16">
        {/* Hero */}
        <section className="py-16 sm:py-24 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-block px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-sm font-bold mb-6">
              🎸 Música
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6">
              Software de Agendamiento para{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">
                Profesores de Música
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Gestiona tu estudio musical de forma profesional. Organiza clases
              particulares, talleres y ensayos con una herramienta diseñada para
              educadores musicales.
            </p>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-5 rounded-2xl bg-indigo-500 text-white text-lg font-bold shadow-lg hover:bg-indigo-400 transition-colors"
            >
              Probar gratis por WhatsApp
            </a>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Todo lo que necesitas para enseñar música
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
                Beneficios para tu estudio musical
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-indigo-300 mb-3">
                    🎵 Menos ausencias
                  </h3>
                  <p className="text-slate-300">
                    Los recordatorios automáticos ayudan a que tus alumnos no
                    olviden sus clases y mantengan continuidad en su aprendizaje.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-indigo-300 mb-3">
                    ⏰ Ahorra tiempo
                  </h3>
                  <p className="text-slate-300">
                    Deja de coordinar horarios por WhatsApp. Tus alumnos reservan
                    online y tú te enfocas en enseñar.
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
              ¿Listo para profesionalizar tu enseñanza?
            </h2>
            <p className="text-slate-300 mb-8 text-lg">
              Únete a profesores de música que ya confían en AgenditApp para
              gestionar sus clases.
            </p>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-5 rounded-2xl bg-indigo-500 text-white text-lg font-bold shadow-lg hover:bg-indigo-400 transition-colors"
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
