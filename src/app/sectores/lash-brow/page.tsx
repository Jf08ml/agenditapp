import type { Metadata } from "next";
import SchemaOrg from "../../(landing)/components/seo/SchemaOrg";
import { DemoCtaButton } from "../../(landing)/components/ui/DemoCtaModal";
import PageHeader from "../../(landing)/components/ui/PageHeader";
import PageFooter from "../../(landing)/components/ui/PageFooter";

export const metadata: Metadata = {
  title: "Software para Lash & Brow Studios | Sistema de Reservas Online",
  description:
    "Sistema de agendamiento online para estudios de pestañas y cejas. Gestiona extensiones de pestañas, microblading, lash lift y servicios especializados. Recordatorios automáticos por WhatsApp.",
  keywords: [
    "software para lash studio",
    "agenda para pestañas",
    "sistema microblading",
    "agendamiento lash brow",
    "software extensiones pestañas",
    "gestión cejas",
    "recordatorios WhatsApp lash",
  ],
  alternates: {
    canonical: "https://agenditapp.com/sectores/lash-brow",
  },
  openGraph: {
    title: "Software para Lash & Brow Studios | AgenditApp",
    description:
      "Automatiza tu agenda de pestañas y cejas. Reservas online, recordatorios y gestión completa.",
    url: "https://agenditapp.com/sectores/lash-brow",
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
      name: "Lash & Brow Studios",
      item: "https://agenditapp.com/sectores/lash-brow",
    },
  ],
};

const features = [
  {
    title: "Agenda especializada",
    description:
      "Configura duraciones específicas para extensiones, rellenos, lifting y microblading.",
    icon: "👁️",
  },
  {
    title: "Recordatorios automáticos",
    description:
      "Evita ausencias con recordatorios por WhatsApp. Tus clientes no olvidarán su cita.",
    icon: "📲",
  },
  {
    title: "Gestión de técnicas",
    description:
      "Controla cada servicio: volumen ruso, clásicas, híbridas, lash lift, cejas.",
    icon: "✨",
  },
  {
    title: "Historial de clientes",
    description:
      "Registra técnicas usadas, fotos y preferencias para seguimiento perfecto.",
    icon: "📝",
  },
  {
    title: "Reservas online 24/7",
    description:
      "Tu página web personalizada donde clientes reservan a cualquier hora.",
    icon: "🌐",
  },
  {
    title: "Control de caja",
    description:
      "Registra pagos y genera reportes de ventas automáticamente.",
    icon: "💰",
  },
];

export default function LashBrowPage() {
  return (
    <>
      <SchemaOrg data={BREADCRUMB_SCHEMA} />
      <PageHeader />

      <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pt-16">
        {/* Hero */}
        <section className="py-16 sm:py-24 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-block px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-sm font-bold mb-6">
              👁️ Lash & Brow Studios
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6">
              Software de Agendamiento para{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                Lash & Brow Studios
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Optimiza tu agenda de extensiones de pestañas, microblading y
              servicios de cejas. Recordatorios automáticos, reservas online y
              gestión completa desde tu celular.
            </p>
            <DemoCtaButton className="inline-block px-10 py-5 rounded-2xl bg-purple-500 text-white text-lg font-bold shadow-lg hover:bg-purple-400 transition-colors cursor-pointer">
              Probar gratis por WhatsApp
            </DemoCtaButton>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Todo lo que necesitas para tu estudio
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 border border-white/10 rounded-2xl p-6 hover:border-purple-400/50 transition-all"
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
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-purple-900/20 to-pink-900/20 border border-purple-500/20 rounded-2xl p-8 sm:p-12">
            <div className="flex items-start gap-4 mb-6">
              <div className="text-5xl">💜</div>
              <div>
                <p className="text-lg text-slate-200 mb-4 italic">
                  &quot;AgenditApp cambió mi negocio. Antes perdía clientes por
                  desorden en la agenda, ahora todo fluye. Los recordatorios
                  automáticos hicieron que mis ausencias bajaran a casi cero.&quot;
                </p>
                <p className="text-purple-300 font-semibold">
                  Laura - Lash Artist
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              ¿Lista para profesionalizar tu estudio?
            </h2>
            <p className="text-slate-300 mb-8 text-lg">
              Únete a cientos de lash artists que ya usan AgenditApp. Sin
              instalaciones complejas, sin permanencia.
            </p>
            <DemoCtaButton className="inline-block px-10 py-5 rounded-2xl bg-purple-500 text-white text-lg font-bold shadow-lg hover:bg-purple-400 transition-colors cursor-pointer">
              Solicitar demo gratis
            </DemoCtaButton>
          </div>
        </section>
      </main>
      <PageFooter />
    </>
  );
}
