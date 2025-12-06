import type { Metadata } from "next";
import Link from "next/link";
import SchemaOrg from "../(landing)/components/seo/SchemaOrg";
import { WHATSAPP_HREF } from "../(landing)/components/constants";
import PageHeader from "../(landing)/components/ui/PageHeader";
import PageFooter from "../(landing)/components/ui/PageFooter";

export const metadata: Metadata = {
  title: "Planes y Precios | Software de Agendamiento desde $100.000 COP",
  description:
    "Conoce los planes de AgenditApp. Desde $100.000 COP mensuales sin permanencia. Incluye reservas ilimitadas, recordatorios por WhatsApp, página web personalizada, gestión de empleados y más. Prueba gratis.",
  keywords: [
    "precios software de reservas",
    "planes agendamiento online",
    "costo sistema de citas",
    "precio agenda digital",
    "software sin permanencia",
    "precios AgenditApp",
    "plan mensual reservas",
  ],
  alternates: {
    canonical: "https://agenditapp.com/precios",
  },
  openGraph: {
    title: "Planes y Precios | AgenditApp desde $100.000 COP",
    description:
      "Plan mensual sin permanencia con todas las funcionalidades. Reservas ilimitadas, WhatsApp y página web incluida.",
    url: "https://agenditapp.com/precios",
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
      name: "Precios",
      item: "https://agenditapp.com/precios",
    },
  ],
};

const OFFER_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "AgenditApp Plan Profesional",
  description:
    "Software de agendamiento online con reservas ilimitadas, recordatorios automáticos por WhatsApp, página web personalizada y gestión completa de negocio.",
  brand: {
    "@type": "Brand",
    name: "AgenditApp",
  },
  offers: {
    "@type": "Offer",
    url: "https://agenditapp.com/precios",
    priceCurrency: "COP",
    price: "100000",
    priceValidUntil: "2025-12-31",
    availability: "https://schema.org/InStock",
    itemCondition: "https://schema.org/NewCondition",
  },
};

const faqs = [
  {
    pregunta: "¿Tiene permanencia o cláusulas?",
    respuesta:
      "No. El pago es mes a mes y puedes cancelar cuando quieras sin penalizaciones ni cláusulas de permanencia.",
  },
  {
    pregunta: "¿Los recordatorios salen desde mi número de WhatsApp?",
    respuesta:
      "Sí, configuramos el sistema para que los recordatorios se envíen desde tu número oficial de WhatsApp Business.",
  },
  {
    pregunta: "¿Hay límite de reservas o empleados?",
    respuesta:
      "No. El plan incluye reservas ilimitadas y puedes agregar todos los empleados que necesites sin costo adicional.",
  },
  {
    pregunta: "¿Incluye la página web?",
    respuesta:
      "Sí, incluye una landing personalizada con tu logo, colores, servicios y formulario de reserva integrado. También puedes usar tu propio dominio.",
  },
  {
    pregunta: "¿Necesito conocimientos técnicos?",
    respuesta:
      "No. AgenditApp es muy fácil de usar. Incluimos configuración inicial y soporte para que empieces rápido.",
  },
  {
    pregunta: "¿Puedo probarlo antes de pagar?",
    respuesta:
      "Sí, ofrecemos una demo gratuita para que pruebes todas las funcionalidades antes de decidir.",
  },
  {
    pregunta: "¿Hay costos de instalación o configuración?",
    respuesta:
      "No. Todo está incluido en el plan mensual. No hay costos ocultos ni tarifas adicionales.",
  },
  {
    pregunta: "¿Qué métodos de pago aceptan?",
    respuesta:
      "Aceptamos transferencia bancaria, Nequi, Daviplata y tarjetas de crédito/débito.",
  },
];

export default function PreciosPage() {
  return (
    <>
      <SchemaOrg data={[BREADCRUMB_SCHEMA, OFFER_SCHEMA]} />
      <PageHeader />

      <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pt-16">
        {/* Hero */}
        <section className="py-16 sm:py-24 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-block px-4 py-2 rounded-full bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 text-sm font-bold mb-6">
              🎉 Black Friday · Si te suscribes ahora: <span className="line-through opacity-60">$50.000</span> → $30.000/mes por 6 meses
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6">
              Membresía simple,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">
                con todo incluido
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Elige si quieres usar AgenditApp con subdominio incluido o con tu propio dominio. En ambos casos tienes acceso a todas las funcionalidades.
            </p>
          </div>
        </section>

        {/* Planes */}
        <section className="py-16 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Plan Esencial - Subdominio */}
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-3xl p-8 sm:p-10 hover:border-sky-400/30 transition-all">
                <div className="flex items-start justify-between gap-3 mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2">
                      Plan Esencial (Subdominio)
                    </h2>
                    <p className="text-slate-400 text-sm">
                      Ideal si quieres empezar rápido sin pagar dominio aparte.
                    </p>
                  </div>
                  <span className="inline-flex items-center rounded-full border border-sky-500/40 bg-sky-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-sky-200 whitespace-nowrap">
                    Más económico
                  </span>
                </div>

                {/* Precio */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-5xl font-extrabold text-white">
                      $50.000
                    </span>
                    <span className="text-xl text-slate-400">/ mes</span>
                  </div>
                  <p className="text-xs text-slate-500">
                    Sin cláusulas ni permanencias. Precio en COP.
                  </p>
                </div>

                {/* Explicación subdominio */}
                <div className="mb-6 rounded-xl bg-slate-900/70 border border-slate-700/70 p-4">
                  <p className="text-sm text-slate-300">
                    Incluye un <b>subdominio</b>, por ejemplo:{" "}
                    <span className="font-mono text-sky-300">
                      tu-salon.agenditapp.com
                    </span>
                    . Es una dirección web lista para usar, sin que tengas que
                    comprar dominio ni hacer configuraciones técnicas.
                  </p>
                </div>

                {/* Beneficios */}
                <div className="border-t border-white/10 pt-6 mb-8">
                  <h3 className="text-sm font-bold text-white mb-4 uppercase tracking-wide">Incluye:</h3>
                  <ul className="space-y-3">
                    {[
                      "Todas las funcionalidades de AgenditApp",
                      "Reservas ilimitadas y panel administrativo",
                      "Landing de bienvenida + catálogo de servicios",
                      "Recordatorios automáticos por WhatsApp",
                      "Gestión de clientes, agenda y caja",
                      "Soporte básico por WhatsApp",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-400/20 flex items-center justify-center mt-0.5">
                          <svg
                            className="w-3 h-3 text-emerald-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={3}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <span className="text-slate-300 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={WHATSAPP_HREF}
                  className="block w-full text-center px-8 py-4 rounded-xl bg-sky-400 text-slate-950 font-bold hover:bg-sky-300 shadow-lg transition-colors"
                >
                  Quiero el plan de $50.000
                </a>
              </div>

              {/* Plan Marca Propia - Dominio */}
              <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-slate-700 rounded-3xl p-8 sm:p-10 relative overflow-hidden hover:border-amber-400/30 transition-all">
                {/* Glow decorativo */}
                <div className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-sky-500/20 blur-3xl" />
                
                <div className="flex items-start justify-between gap-3 mb-6 relative">
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2">
                      Plan Marca Propia (Dominio)
                    </h2>
                    <p className="text-slate-400 text-sm">
                      Para negocios que quieren reforzar su marca y presencia digital.
                    </p>
                  </div>
                  <span className="inline-flex items-center rounded-full border border-amber-400/60 bg-amber-400/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-amber-200 whitespace-nowrap">
                    Más profesional
                  </span>
                </div>

                {/* Precio */}
                <div className="mb-6 relative">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-5xl font-extrabold text-white">
                      $100.000
                    </span>
                    <span className="text-xl text-slate-400">/ mes</span>
                  </div>
                  <p className="text-xs text-slate-500">
                    Sin cláusulas ni permanencias. Precio en COP.
                  </p>
                </div>

                {/* Explicación dominio */}
                <div className="mb-6 rounded-xl bg-slate-900/70 border border-slate-600/80 p-4 relative">
                  <p className="text-sm text-slate-300 mb-2">
                    Incluye tu <b>propio dominio</b>, por ejemplo:{" "}
                    <span className="font-mono text-sky-300">tusalon.com</span> o{" "}
                    <span className="font-mono text-sky-300">tusalon.com.co</span>.
                    Esto te ayuda a:
                  </p>
                  <ul className="space-y-1 text-xs text-slate-400">
                    <li>• Refuerzas tu marca y que te recuerden más fácil</li>
                    <li>• Das más confianza al cliente al reservar</li>
                    <li>• Mejoras tu presencia en Google y redes</li>
                  </ul>
                </div>

                {/* Beneficios */}
                <div className="border-t border-white/10 pt-6 mb-8 relative">
                  <h3 className="text-sm font-bold text-white mb-4 uppercase tracking-wide">Incluye:</h3>
                  <ul className="space-y-3">
                    {[
                      "Todas las funcionalidades de AgenditApp",
                      "Reservas ilimitadas y panel administrativo",
                      "Landing de bienvenida con tu dominio propio",
                      "Recordatorios automáticos por WhatsApp",
                      "Configuración y soporte para el dominio",
                      "Soporte prioritario por WhatsApp",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-sky-400/20 flex items-center justify-center mt-0.5">
                          <svg
                            className="w-3 h-3 text-sky-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={3}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <span className="text-slate-300 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={WHATSAPP_HREF}
                  className="block w-full text-center px-8 py-4 rounded-xl bg-slate-50 text-slate-900 font-bold hover:bg-white shadow-lg transition-colors relative"
                >
                  Quiero el plan de $100.000
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Comparativa - Lo que obtienes vs tradicional */}
        <section className="py-16 px-4 sm:px-6 bg-slate-800/30">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              AgenditApp vs Métodos Tradicionales
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-red-400 mb-4">
                  ❌ Sin AgenditApp
                </h3>
                <ul className="space-y-3 text-slate-300">
                  <li>• Atender llamadas todo el día</li>
                  <li>• Clientes que no llegan sin avisar</li>
                  <li>• Agenda en papel o Excel complicado</li>
                  <li>• Doble agenda (manual + digital)</li>
                  <li>• Sin recordatorios automáticos</li>
                  <li>• No hay página web para reservar</li>
                  <li>• Control manual de pagos</li>
                </ul>
              </div>
              <div className="bg-sky-500/10 border border-sky-500/20 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-sky-400 mb-4">
                  ✅ Con AgenditApp
                </h3>
                <ul className="space-y-3 text-slate-300">
                  <li>• Clientes reservan solos 24/7</li>
                  <li>• Recordatorios automáticos por WhatsApp</li>
                  <li>• Agenda digital simple y visual</li>
                  <li>• Todo centralizado en un solo lugar</li>
                  <li>• Reduce ausencias hasta 70%</li>
                  <li>• Página web profesional incluida</li>
                  <li>• Control automático de caja y reportes</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Preguntas Frecuentes
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <details
                  key={idx}
                  className="bg-slate-800/50 border border-white/10 rounded-xl p-6 hover:border-sky-400/50 transition-all group"
                >
                  <summary className="cursor-pointer font-bold text-white text-lg list-none flex justify-between items-center">
                    {faq.pregunta}
                    <span className="text-sky-400 group-open:rotate-180 transition-transform">
                      ▼
                    </span>
                  </summary>
                  <p className="mt-4 text-slate-300 leading-relaxed">
                    {faq.respuesta}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-sky-500/10 to-blue-500/10 border border-sky-500/20 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              ¿Listo para automatizar tu negocio?
            </h2>
            <p className="text-slate-300 mb-8 text-lg">
              Únete a cientos de negocios que ya optimizaron su agenda con
              AgenditApp. Prueba gratis sin compromiso.
            </p>
            <a
              href={WHATSAPP_HREF}
              className="inline-block px-10 py-5 rounded-2xl bg-sky-400 text-slate-950 text-lg font-bold shadow-lg hover:bg-sky-300 transition-colors"
            >
              Solicitar demo gratis por WhatsApp
            </a>
            <p className="text-slate-400 text-sm mt-4">
              Respuesta en menos de 1 hora · Sin tarjeta de crédito
            </p>
          </div>
        </section>
      </main>
      <PageFooter />
    </>
  );
}
