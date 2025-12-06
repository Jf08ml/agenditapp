import type { Metadata } from "next";
import Link from "next/link";
import SchemaOrg from "../../(landing)/components/seo/SchemaOrg";
import { WHATSAPP_HREF } from "../../(landing)/components/constants";
import PageHeader from "../../(landing)/components/ui/PageHeader";
import PageFooter from "../../(landing)/components/ui/PageFooter";

export const metadata: Metadata = {
  title: "Software Médico de Citas | Sistema para Consultorios y Clínicas",
  description:
    "Sistema de agendamiento online para consultorios médicos, clínicas y profesionales de la salud. Gestiona consultas, terapias, odontología y más. Recordatorios automáticos y control de pacientes. Prueba gratis.",
  keywords: [
    "software médico de citas",
    "agenda para consultorios",
    "sistema de citas médicas",
    "reservas online consultas",
    "agendamiento clínicas",
    "software para odontología",
    "gestión de pacientes",
  ],
  alternates: {
    canonical: "https://agenditapp.com/sectores/consultorios",
  },
  openGraph: {
    title: "Software Médico de Citas | AgenditApp",
    description:
      "Automatiza tu consultorio. Reservas online de consultas, recordatorios por WhatsApp y gestión de pacientes.",
    url: "https://agenditapp.com/sectores/consultorios",
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
      name: "Consultorios y Clínicas",
      item: "https://agenditapp.com/sectores/consultorios",
    },
  ],
};

const features = [
  {
    title: "Agenda por profesional",
    description:
      "Gestiona horarios de médicos, terapeutas, dentistas. Cada uno con su propia agenda.",
    icon: "👨‍⚕️",
  },
  {
    title: "Control de pacientes",
    description:
      "Historial de citas, notas médicas básicas y seguimiento de tratamientos.",
    icon: "📋",
  },
  {
    title: "Recordatorios de consultas",
    description:
      "Reduce inasistencias con recordatorios automáticos por WhatsApp 24h antes.",
    icon: "📲",
  },
  {
    title: "Reservas online seguras",
    description:
      "Tus pacientes agendan desde tu página web en horarios disponibles.",
    icon: "🔒",
  },
  {
    title: "Especialidades configurables",
    description:
      "Medicina general, odontología, psicología, fisioterapia. Configura duraciones específicas.",
    icon: "🏥",
  },
  {
    title: "Reportes de atención",
    description:
      "Analiza horarios con mayor demanda y optimiza tu consultorio.",
    icon: "📊",
  },
];

export default function ConsultoriosPage() {
  return (
    <>
      <SchemaOrg data={BREADCRUMB_SCHEMA} />
      <PageHeader />

      <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pt-16">
        {/* Hero */}
        <section className="py-16 sm:py-24 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto text-center">
            <div className="text-6xl mb-6">🏥</div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6">
              Sistema de Citas para{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500">
                Consultorios y Clínicas
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Moderniza tu consultorio con reservas online automáticas, control
              de pacientes, recordatorios por WhatsApp y gestión profesional de
              citas médicas.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={WHATSAPP_HREF}
                className="px-8 py-4 rounded-2xl bg-sky-400 text-slate-950 text-lg font-bold shadow-lg hover:bg-sky-300 transition-colors"
              >
                Probar gratis
              </a>
              <Link
                href="/precios"
                className="px-8 py-4 rounded-2xl border border-white/20 bg-white/5 text-white hover:bg-white/10 backdrop-blur-sm font-medium transition-colors"
              >
                Ver planes
              </Link>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Todo para tu práctica profesional
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="bg-slate-800/50 border border-white/10 rounded-2xl p-6 hover:border-sky-400/50 transition-all"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-slate-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Especialidades */}
        <section className="py-16 px-4 sm:px-6 bg-slate-800/30">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Ideal para múltiples especialidades
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="text-3xl">🦷</div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">
                    Odontología
                  </h3>
                  <p className="text-slate-300 text-sm">
                    Gestiona limpiezas, ortodoncia, endodoncia y tratamientos
                    largos.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-3xl">🧠</div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">
                    Psicología
                  </h3>
                  <p className="text-slate-300 text-sm">
                    Consultas de 50 minutos, seguimiento de sesiones y
                    pacientes recurrentes.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-3xl">💪</div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">
                    Fisioterapia
                  </h3>
                  <p className="text-slate-300 text-sm">
                    Terapias físicas, rehabilitación y control de sesiones
                    múltiples.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-3xl">👁️</div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">
                    Medicina General
                  </h3>
                  <p className="text-slate-300 text-sm">
                    Consultas generales, control y seguimiento de pacientes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Privacidad y seguridad */}
        <section className="py-16 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto bg-blue-500/10 border border-blue-500/20 rounded-2xl p-8 sm:p-12">
            <div className="text-center mb-6">
              <div className="text-4xl mb-4">🔒</div>
              <h2 className="text-2xl font-bold text-white mb-3">
                Privacidad y protección de datos
              </h2>
              <p className="text-slate-300">
                Cumplimos con estándares de protección de datos personales. Tu
                información y la de tus pacientes está segura con encriptación y
                accesos controlados.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Moderniza tu consultorio hoy
            </h2>
            <p className="text-slate-300 mb-8 text-lg">
              Únete a profesionales de la salud que ya optimizaron su agenda.
              Sin permanencia.
            </p>
            <a
              href={WHATSAPP_HREF}
              className="inline-block px-10 py-5 rounded-2xl bg-sky-400 text-slate-950 text-lg font-bold shadow-lg hover:bg-sky-300 transition-colors"
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
