import type { Metadata } from "next";
import SchemaOrg from "../../(landing)/components/seo/SchemaOrg";
import { WHATSAPP_HREF } from "../../(landing)/components/constants";
import PageHeader from "../../(landing)/components/ui/PageHeader";
import PageFooter from "../../(landing)/components/ui/PageFooter";

export const metadata: Metadata = {
  title: "Software para Odontólogos | Sistema de Citas Dentales",
  description:
    "Sistema de agendamiento para consultorios dentales. Gestiona citas de ortodoncia, limpieza, cirugías y tratamientos. Recordatorios automáticos y seguimiento de pacientes.",
  keywords: [
    "software para odontólogos",
    "agenda dental",
    "sistema citas dentista",
    "agendamiento odontología",
    "software consultorio dental",
    "gestión pacientes dentales",
    "recordatorios WhatsApp dental",
  ],
  alternates: {
    canonical: "https://agenditapp.com/sectores/odontologia",
  },
  openGraph: {
    title: "Software para Odontólogos | AgenditApp",
    description:
      "Automatiza tu agenda dental. Reservas online, recordatorios y seguimiento completo de tratamientos.",
    url: "https://agenditapp.com/sectores/odontologia",
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
      name: "Odontología",
      item: "https://agenditapp.com/sectores/odontologia",
    },
  ],
};

const features = [
  {
    title: "Agenda de tratamientos",
    description:
      "Organiza consultas, limpiezas, ortodoncia, cirugías y procedimientos por duración.",
    icon: "🦷",
  },
  {
    title: "Recordatorios automáticos",
    description:
      "Reduce ausencias hasta 80% con recordatorios por WhatsApp a tus pacientes.",
    icon: "📲",
  },
  {
    title: "Historial de pacientes",
    description:
      "Registra tratamientos, radiografías y evolución clínica de cada paciente.",
    icon: "📋",
  },
  {
    title: "Gestión de odontólogos",
    description:
      "Asigna citas por especialista: ortodoncista, endodoncista, cirujano, etc.",
    icon: "👨‍⚕️",
  },
  {
    title: "Control de pagos",
    description:
      "Registra pagos, abonos de tratamientos y genera reportes financieros.",
    icon: "💰",
  },
  {
    title: "Reservas online seguras",
    description:
      "Página web con sistema de reservas confidencial para tus pacientes.",
    icon: "🔒",
  },
];

export default function OdontologiaPage() {
  return (
    <>
      <SchemaOrg data={BREADCRUMB_SCHEMA} />
      <PageHeader />

      <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pt-16">
        {/* Hero */}
        <section className="py-16 sm:py-24 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-block px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-sm font-bold mb-6">
              🦷 Odontología
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6">
              Software de Agendamiento para{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500">
                Consultorios Dentales
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Optimiza la gestión de tu consultorio dental. Sistema completo
              para citas, tratamientos, recordatorios y seguimiento de
              pacientes.
            </p>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-5 rounded-2xl bg-blue-500 text-white text-lg font-bold shadow-lg hover:bg-blue-400 transition-colors"
            >
              Probar gratis por WhatsApp
            </a>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Diseñado para tu práctica dental
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 border border-white/10 rounded-2xl p-6 hover:border-blue-400/50 transition-all"
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
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Ventajas para tu consultorio
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border border-blue-500/20 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-3">
                  ⏰ Ahorra tiempo
                </h3>
                <p className="text-slate-300">
                  Olvídate de llamadas para confirmar citas. Los recordatorios
                  automáticos lo hacen por ti.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border border-blue-500/20 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-3">
                  📈 Aumenta asistencia
                </h3>
                <p className="text-slate-300">
                  Reduce ausencias hasta 80% con recordatorios oportunos y
                  confirmaciones fáciles.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border border-blue-500/20 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-3">
                  🔒 100% confidencial
                </h3>
                <p className="text-slate-300">
                  Datos protegidos y cumplimiento de privacidad médica en cada
                  interacción.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              ¿Listo para modernizar tu consultorio?
            </h2>
            <p className="text-slate-300 mb-8 text-lg">
              Únete a odontólogos que ya usan AgenditApp. Sin permanencia, sin
              complicaciones técnicas.
            </p>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-5 rounded-2xl bg-blue-500 text-white text-lg font-bold shadow-lg hover:bg-blue-400 transition-colors"
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
