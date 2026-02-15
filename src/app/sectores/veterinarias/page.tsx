import type { Metadata } from "next";
import SchemaOrg from "../../(landing)/components/seo/SchemaOrg";
import { DemoCtaButton } from "../../(landing)/components/ui/DemoCtaModal";
import PageHeader from "../../(landing)/components/ui/PageHeader";
import PageFooter from "../../(landing)/components/ui/PageFooter";

export const metadata: Metadata = {
  title: "Software para Veterinarias | Sistema de Citas Mascotas",
  description:
    "Sistema de agendamiento para veterinarias y clínicas de mascotas. Gestiona consultas, grooming, vacunas y tratamientos con recordatorios automáticos.",
  keywords: [
    "software para veterinarias",
    "agenda veterinaria",
    "sistema citas mascotas",
    "grooming",
    "vacunas mascotas",
    "peluquería canina",
  ],
  alternates: {
    canonical: "https://agenditapp.com/sectores/veterinarias",
  },
  openGraph: {
    title: "Software para Veterinarias | AgenditApp",
    description:
      "Agenda para veterinarias. Gestiona consultas, grooming y vacunas de mascotas de forma eficiente.",
    url: "https://agenditapp.com/sectores/veterinarias",
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
      name: "Veterinarias",
      item: "https://agenditapp.com/sectores/veterinarias",
    },
  ],
};

const features = [
  {
    title: "Agenda veterinaria completa",
    description:
      "Gestiona consultas, cirugías, grooming y vacunas en un solo calendario.",
    icon: "🗓️",
  },
  {
    title: "Recordatorios automáticos",
    description:
      "Envía recordatorios de citas, próximas vacunas y controles por WhatsApp.",
    icon: "📲",
  },
  {
    title: "Historial de mascotas",
    description:
      "Registra raza, edad, alergias, tratamientos y toda la información clínica.",
    icon: "📋",
  },
  {
    title: "Gestión de servicios",
    description:
      "Organiza diferentes servicios: consulta, grooming, baño, vacunas, etc.",
    icon: "✂️",
  },
  {
    title: "Reservas 24/7",
    description:
      "Los dueños pueden agendar grooming o consultas desde su celular.",
    icon: "🌐",
  },
  {
    title: "Control de pagos",
    description:
      "Registra honorarios, paquetes y servicios prestados a cada mascota.",
    icon: "💰",
  },
];

export default function VeterinariasPage() {
  return (
    <>
      <SchemaOrg data={BREADCRUMB_SCHEMA} />
      <PageHeader />

      <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pt-16">
        {/* Hero */}
        <section className="py-16 sm:py-24 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-block px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-sm font-bold mb-6">
              🐶 Veterinarias
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6">
              Software de Agendamiento para{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500">
                Veterinarias y Grooming
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Gestiona tu veterinaria o centro de grooming de forma
              profesional. Organiza consultas, baños, vacunas y más con una
              herramienta diseñada para el cuidado de mascotas.
            </p>
            <DemoCtaButton className="inline-block px-10 py-5 rounded-2xl bg-amber-500 text-white text-lg font-bold shadow-lg hover:bg-amber-400 transition-colors cursor-pointer">
              Probar gratis por WhatsApp
            </DemoCtaButton>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Funcionalidades para tu veterinaria
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 border border-white/10 rounded-2xl p-6 hover:border-amber-400/50 transition-all"
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
            <div className="bg-gradient-to-r from-amber-900/20 to-yellow-900/20 border border-amber-500/20 rounded-2xl p-12">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
                Beneficios para tu negocio
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl mb-3">⏱️</div>
                  <h3 className="text-xl font-bold text-amber-300 mb-2">
                    Menos llamadas
                  </h3>
                  <p className="text-slate-300">
                    Los clientes reservan online sin necesidad de llamar.
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">📈</div>
                  <h3 className="text-xl font-bold text-amber-300 mb-2">
                    Más organización
                  </h3>
                  <p className="text-slate-300">
                    Controla servicios, historial y pagos en un solo lugar.
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">🎯</div>
                  <h3 className="text-xl font-bold text-amber-300 mb-2">
                    Reduce ausencias
                  </h3>
                  <p className="text-slate-300">
                    Recordatorios automáticos para que no olviden sus citas.
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
              ¿Listo para profesionalizar tu veterinaria?
            </h2>
            <p className="text-slate-300 mb-8 text-lg">
              Únete a veterinarias que ya confían en AgenditApp para gestionar
              su día a día.
            </p>
            <DemoCtaButton className="inline-block px-10 py-5 rounded-2xl bg-amber-500 text-white text-lg font-bold shadow-lg hover:bg-amber-400 transition-colors cursor-pointer">
              Solicitar demo gratis
            </DemoCtaButton>
          </div>
        </section>
      </main>
      <PageFooter />
    </>
  );
}
