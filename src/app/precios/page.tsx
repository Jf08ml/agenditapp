import type { Metadata } from "next";
import SchemaOrg from "../(landing)/components/seo/SchemaOrg";
import { WHATSAPP_HREF } from "../(landing)/components/constants";
import PageHeader from "../(landing)/components/ui/PageHeader";
import PageFooter from "../(landing)/components/ui/PageFooter";

export const metadata: Metadata = {
  title: "Planes y Precios | Software de Agendamiento desde $10 USD",
  description:
    "Conoce los planes de AgenditApp. Desde $10 USD mensuales sin permanencia. Reservas ilimitadas, WhatsApp, landing/dominio, comisiones por empleado, fidelidad y más. Prueba gratis.",
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
    title: "Planes y Precios | AgenditApp desde $10 USD",
    description:
      "Planes sin permanencia. Reservas ilimitadas, WhatsApp, landing/dominio y gestión completa del negocio.",
    url: "https://agenditapp.com/precios",
    images: ["/inicio_page.png"],
  },
};

const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://agenditapp.com" },
    { "@type": "ListItem", position: 2, name: "Precios", item: "https://agenditapp.com/precios" },
  ],
};

const OFFER_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "AgenditApp Plan Marca Propia",
  description:
    "Software de agendamiento con reservas ilimitadas, WhatsApp, landing profesional con dominio y campañas masivas.",
  image: "https://agenditapp.com/inicio_page.png",
  brand: { "@type": "Brand", name: "AgenditApp" },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "45",
    ratingCount: "120",
    bestRating: "5",
    worstRating: "1",
  },
  review: {
    "@type": "Review",
    reviewRating: {
      "@type": "Rating",
      ratingValue: "5",
      bestRating: "5",
    },
    author: {
      "@type": "Person",
      name: "María López",
    },
    reviewBody:
      "AgenditApp me ayudó a organizar mi salón de belleza. Las reservas automáticas y los recordatorios por WhatsApp redujeron las ausencias notablemente.",
  },
  offers: {
    "@type": "Offer",
    url: "https://agenditapp.com/precios",
    priceCurrency: "USD",
    price: "30",
    priceValidUntil: "2026-12-31",
    availability: "https://schema.org/InStock",
    itemCondition: "https://schema.org/NewCondition",
    seller: {
      "@type": "Organization",
      name: "AgenditApp",
    },
    hasMerchantReturnPolicy: {
      "@type": "MerchantReturnPolicy",
      applicableCountry: "CO",
      returnPolicyCategory:
        "https://schema.org/MerchantReturnNotPermitted",
      merchantReturnDays: 0,
    },
    shippingDetails: {
      "@type": "OfferShippingDetails",
      shippingRate: {
        "@type": "MonetaryAmount",
        value: "0",
        currency: "USD",
      },
      shippingDestination: {
        "@type": "DefinedRegion",
        addressCountry: "CO",
      },
      deliveryTime: {
        "@type": "ShippingDeliveryTime",
        handlingTime: {
          "@type": "QuantitativeValue",
          minValue: 0,
          maxValue: 0,
          unitCode: "DAY",
        },
        transitTime: {
          "@type": "QuantitativeValue",
          minValue: 0,
          maxValue: 0,
          unitCode: "DAY",
        },
      },
    },
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
      "Sí. En los planes que incluyen WhatsApp, los mensajes se envían desde tu número oficial de WhatsApp Business.",
  },
  {
    pregunta: "¿Hay límite de reservas o empleados?",
    respuesta:
      "No. Incluye reservas y citas ilimitadas. Además puedes gestionar empleados, horarios y comisiones.",
  },
  {
    pregunta: "¿Incluye página web / landing?",
    respuesta:
      "Sí. Incluye landing de bienvenida. En Marca Propia es más profesional y funciona con tu propio dominio.",
  },
  {
    pregunta: "¿Necesito conocimientos técnicos?",
    respuesta:
      "No. Te ayudamos con la configuración inicial y soporte para que empieces rápido.",
  },
  {
    pregunta: "¿Puedo probarlo antes de pagar?",
    respuesta:
      "Sí, ofrecemos demo gratuita para que pruebes el flujo de reservas y panel administrativo antes de decidir.",
  },
  {
    pregunta: "¿Hay costos de instalación o configuración?",
    respuesta:
      "No. Todo está incluido en el plan mensual. Sin costos ocultos.",
  },
  {
    pregunta: "¿Qué métodos de pago aceptan?",
    respuesta:
      "Aceptamos transferencia bancaria, Nequi, Daviplata y tarjetas de crédito/débito.",
  },
];

const CHECK = (
  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
  </svg>
);

type PlanKey = "basico" | "esencial" | "marca";

const COMPARISON_ROWS: Array<{
  label: string;
  hint?: string;
  values: Record<PlanKey, boolean | string>;
}> = [
  { label: "Reservas y citas ilimitadas", values: { basico: true, esencial: true, marca: true } },
  { label: "Panel administrativo", values: { basico: true, esencial: true, marca: true } },
  { label: "Gestión de servicios, empleados y clientes", values: { basico: true, esencial: true, marca: true } },
  { label: "Analíticas + comisiones / nómina", values: { basico: true, esencial: true, marca: true } },
  { label: "Horarios por negocio y por empleado", values: { basico: true, esencial: true, marca: true } },
  { label: "Fidelidad + branding (logo, nombre, colores)", values: { basico: true, esencial: true, marca: true } },
  {
    label: "Landing de bienvenida",
    values: { basico: "Sencilla", esencial: "Sencilla", marca: "Profesional" },
  },
  { label: "Subdominio (tu-negocio.agenditapp.com)", values: { basico: true, esencial: true, marca: false } },
  { label: "Dominio propio (tumarca.com)", values: { basico: false, esencial: false, marca: true } },
  {
    label: "WhatsApp desde tu número",
    hint: "Mensajes automáticos desde tu WhatsApp Business",
    values: { basico: false, esencial: true, marca: true },
  },
  {
    label: "Mensaje de agendamiento (configurable)",
    values: { basico: false, esencial: true, marca: true },
  },
  {
    label: "Recordatorios automáticos",
    values: { basico: false, esencial: "1 recordatorio", marca: "2 recordatorios" },
  },
  { label: "Mensajes editables", values: { basico: false, esencial: true, marca: true } },
  {
    label: "Enlace para confirmar/cancelar citas",
    hint: "Tus clientes pueden confirmar o cancelar desde WhatsApp",
    values: { basico: false, esencial: true, marca: true },
  },
  { label: "Campañas de WhatsApp (envío masivo)", values: { basico: false, esencial: false, marca: true } },
];

function ValueCell({ value }: { value: boolean | string }) {
  if (typeof value === "boolean") {
    return value ? (
      <span className="inline-flex items-center gap-2 text-emerald-200">
        <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-emerald-500/15 border border-emerald-500/30">
          <span className="text-emerald-400">{CHECK}</span>
        </span>
        <span className="text-sm text-slate-200">Sí</span>
      </span>
    ) : (
      <span className="text-sm text-slate-500">—</span>
    );
  }
  return (
    <span className="text-sm text-slate-200">
      {value}
    </span>
  );
}

export default function PreciosPage() {
  return (
    <>
      <SchemaOrg data={[BREADCRUMB_SCHEMA, OFFER_SCHEMA]} />
      <PageHeader />

      <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pt-16">
        {/* Hero */}
        <section className="py-16 sm:py-24 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6">
              Planes claros,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">
                resultados reales
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto mb-10">
              Agenda online, automatiza WhatsApp y convierte más clientes sin complicarte.
              Sin permanencia, sin costos ocultos.
            </p>

            {/* Mini trust bar */}
            <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { title: "Reservas 24/7", desc: "Tus clientes reservan solos" },
                { title: "Todo centralizado", desc: "Agenda, clientes, servicios" },
                { title: "Más asistencia", desc: "Recordatorios que reducen ausencias" },
              ].map((b) => (
                <div
                  key={b.title}
                  className="rounded-2xl border border-white/10 bg-slate-900/40 p-4 text-left"
                >
                  <p className="text-white font-semibold">{b.title}</p>
                  <p className="text-slate-400 text-sm">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Planes */}
        <section className="py-16 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Plan Básico */}
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-3xl p-8 sm:p-10 hover:border-emerald-400/30 transition-all">
                <div className="flex items-start justify-between gap-3 mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2">Plan Básico</h2>
                    <p className="text-slate-400 text-sm">
                      Para ordenar tu operación y empezar a recibir reservas online.
                    </p>
                  </div>
                  <span className="inline-flex items-center rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-200 whitespace-nowrap">
                    Empezar
                  </span>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-5xl font-extrabold text-white">$10 USD</span>
                    <span className="text-xl text-slate-400">/ mes</span>
                  </div>
                  <p className="text-xs text-slate-500">Mes a mes. Cancela cuando quieras.</p>
                </div>

                <div className="mb-6 rounded-xl bg-slate-900/70 border border-slate-700/70 p-4">
                  <p className="text-sm text-slate-300">
                    Incluye <b>subdominio</b> + <b>landing sencilla</b> para reservas:
                    <br />
                    <span className="font-mono text-sky-300">tu-negocio.agenditapp.com</span>
                  </p>
                </div>

                <div className="border-t border-white/10 pt-6 mb-8">
                  <h3 className="text-sm font-bold text-white mb-4 uppercase tracking-wide">
                    Lo que obtienes:
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Agenda digital para no perder ni una cita",
                      "Reservas ilimitadas: tus clientes reservan sin esperar respuesta",
                      "Servicios, empleados y clientes en un solo lugar",
                      "Reportes, analíticas y comisiones para controlar tu negocio",
                      "Branding: tu logo, nombre y colores en la plataforma",
                      "Fidelidad para retener clientes y aumentar recurrencia",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-400/20 flex items-center justify-center mt-0.5">
                          <span className="text-emerald-400">{CHECK}</span>
                        </div>
                        <span className="text-slate-300 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={WHATSAPP_HREF}
                  className="block w-full text-center px-8 py-4 rounded-xl bg-emerald-500 text-white font-bold hover:bg-emerald-400 shadow-lg transition-colors"
                >
                  Quiero el plan de $10 USD
                </a>

                <p className="text-xs text-slate-500 mt-3 text-center">
                  Ideal para empezar y profesionalizar tu agenda.
                </p>
              </div>

              {/* Plan Esencial */}
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-3xl p-8 sm:p-10 hover:border-sky-400/30 transition-all">
                <div className="flex items-start justify-between gap-3 mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2">Plan Esencial</h2>
                    <p className="text-slate-400 text-sm">
                      Automatiza WhatsApp y baja ausencias con recordatorio.
                    </p>
                  </div>
                  <span className="inline-flex items-center rounded-full border border-sky-500/40 bg-sky-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-sky-200 whitespace-nowrap">
                    Más elegido
                  </span>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-5xl font-extrabold text-white">$20 USD</span>
                    <span className="text-xl text-slate-400">/ mes</span>
                  </div>
                  <p className="text-xs text-slate-500">Mes a mes. Sin permanencia.</p>
                </div>

                <div className="mb-6 rounded-xl bg-slate-900/70 border border-slate-700/70 p-4">
                  <p className="text-sm text-slate-300">
                    Incluye <b>subdominio</b> + <b>landing sencilla</b> y automatización:
                    <br />
                    <span className="font-mono text-sky-300">tu-negocio.agenditapp.com</span>
                  </p>
                </div>

                <div className="border-t border-white/10 pt-6 mb-8">
                  <h3 className="text-sm font-bold text-white mb-4 uppercase tracking-wide">
                    Todo lo del Básico, +:
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "WhatsApp desde tu número: comunicación profesional",
                      "Mensaje automático al agendar (configurable)",
                      "1 recordatorio automático (24h antes o tiempo configurable)",
                      "Enlace para confirmar/cancelar citas desde WhatsApp",
                      "Mensajes editables: adapta el tono a tu marca",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-sky-400/20 flex items-center justify-center mt-0.5">
                          <span className="text-sky-300">{CHECK}</span>
                        </div>
                        <span className="text-slate-300 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 rounded-xl border border-sky-500/20 bg-sky-500/10 p-4">
                    <p className="text-sm text-slate-200">
                      <b>Resultado:</b> menos “¿a qué hora era?” y menos ausencias.
                      Tu agenda trabaja sola.
                    </p>
                  </div>
                </div>

                <a
                  href={WHATSAPP_HREF}
                  className="block w-full text-center px-8 py-4 rounded-xl bg-sky-400 text-slate-950 font-bold hover:bg-sky-300 shadow-lg transition-colors"
                >
                  Quiero el plan de $20 USD
                </a>

                <p className="text-xs text-slate-500 mt-3 text-center">
                  Perfecto si manejas muchas citas al día.
                </p>
              </div>

              {/* Plan Marca Propia */}
              <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-slate-700 rounded-3xl p-8 sm:p-10 relative overflow-hidden hover:border-amber-400/30 transition-all">
                <div className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-sky-500/20 blur-3xl" />

                <div className="flex items-start justify-between gap-3 mb-6 relative">
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2">Marca Propia (Dominio)</h2>
                    <p className="text-slate-400 text-sm">
                      Presencia digital con tu dominio + campañas masivas por WhatsApp.
                    </p>
                  </div>
                  <span className="inline-flex items-center rounded-full border border-amber-400/60 bg-amber-400/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-amber-200 whitespace-nowrap">
                    Pro
                  </span>
                </div>

                <div className="mb-6 relative">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-5xl font-extrabold text-white">$30 USD</span>
                    <span className="text-xl text-slate-400">/ mes</span>
                  </div>
                  <p className="text-xs text-slate-500">Más presencia digital sin contratar agencia.</p>
                </div>

                <div className="mb-6 rounded-xl bg-slate-900/70 border border-slate-600/80 p-4 relative">
                  <p className="text-sm text-slate-300 mb-2">
                    Incluye tu <b>propio dominio</b>, por ejemplo:
                    <br />
                    <span className="font-mono text-sky-300">tumarca.com</span> /{" "}
                    <span className="font-mono text-sky-300">tumarca.com.co</span>
                  </p>
                  <ul className="space-y-1 text-xs text-slate-400">
                    <li>• Más confianza al reservar</li>
                    <li>• Tu marca se ve más profesional</li>
                    <li>• Mejor presencia para redes y Google</li>
                  </ul>
                </div>

                <div className="border-t border-white/10 pt-6 mb-8 relative">
                  <h3 className="text-sm font-bold text-white mb-4 uppercase tracking-wide">
                    Todo lo del Esencial, +:
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Landing más profesional (para convertir más reservas)",
                      "2 recordatorios automáticos (horas configurables)",
                      "Enlace para confirmar/cancelar citas desde WhatsApp",
                      "Campañas por WhatsApp (envíos masivos para promociones)",
                      "Soporte prioritario + acompañamiento para el dominio",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-amber-400/20 flex items-center justify-center mt-0.5">
                          <span className="text-amber-300">{CHECK}</span>
                        </div>
                        <span className="text-slate-300 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 rounded-xl border border-amber-400/20 bg-amber-400/10 p-4">
                    <p className="text-sm text-slate-200">
                      <b>Resultado:</b> más reservas, mejor marca y campañas listas para vender.
                    </p>
                  </div>
                </div>

                <a
                  href={WHATSAPP_HREF}
                  className="block w-full text-center px-8 py-4 rounded-xl bg-slate-50 text-slate-900 font-bold hover:bg-white shadow-lg transition-colors relative"
                >
                  Quiero el plan de $30 USD
                </a>

                <p className="text-xs text-slate-500 mt-3 text-center">
                  Ideal si quieres marca fuerte y crecimiento constante.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Comparativa PRO (Responsive) */}
        <section className="py-16 px-4 sm:px-6 bg-slate-800/25">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-white">Comparativa de planes</h2>
              <p className="text-slate-300 mt-3">
                En todos los planes tienes lo esencial para operar. La diferencia está en WhatsApp, recordatorios, presencia digital y campañas.
              </p>
            </div>

            {/* Desktop table */}
            <div className="hidden lg:block">
              <div className="rounded-3xl border border-white/10 bg-slate-900/40 overflow-hidden">
                {/* Header */}
                <div className="grid grid-cols-12 gap-0 border-b border-white/10 bg-slate-950/40">
                  <div className="col-span-5 p-5">
                    <p className="text-sm text-slate-400">Funcionalidad</p>
                  </div>
                  <div className="col-span-7 grid grid-cols-3">
                    {[
                      { name: "Básico", price: "$10", badge: "Empezar", badgeClass: "border-emerald-500/40 bg-emerald-500/10 text-emerald-200" },
                      { name: "Esencial", price: "$20", badge: "Más elegido", badgeClass: "border-sky-500/40 bg-sky-500/10 text-sky-200" },
                      { name: "Marca Propia", price: "$30", badge: "Pro", badgeClass: "border-amber-400/60 bg-amber-400/15 text-amber-200" },
                    ].map((p) => (
                      <div key={p.name} className="p-5 border-l border-white/10">
                        <div className="flex items-center justify-between">
                          <p className="text-white font-bold">{p.name}</p>
                          <span className={`text-[10px] uppercase tracking-wide px-2 py-1 rounded-full border ${p.badgeClass}`}>
                            {p.badge}
                          </span>
                        </div>
                        <p className="text-slate-400 text-sm mt-1">{p.price} USD / mes</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Rows */}
                <div className="divide-y divide-white/10">
                  {COMPARISON_ROWS.map((row) => (
                    <div key={row.label} className="grid grid-cols-12">
                      <div className="col-span-5 p-5">
                        <p className="text-white font-medium">{row.label}</p>
                        {row.hint ? <p className="text-slate-400 text-sm mt-1">{row.hint}</p> : null}
                      </div>

                      <div className="col-span-7 grid grid-cols-3">
                        <div className="p-5 border-l border-white/10">
                          <ValueCell value={row.values.basico} />
                        </div>
                        <div className="p-5 border-l border-white/10">
                          <ValueCell value={row.values.esencial} />
                        </div>
                        <div className="p-5 border-l border-white/10">
                          <ValueCell value={row.values.marca} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 text-center text-sm text-slate-400">
                ¿No estás seguro? Escríbenos y te recomendamos el plan según tu volumen de citas.
              </div>
            </div>

            {/* Mobile/Tablet: comparison cards */}
            <div className="lg:hidden grid gap-6">
              {[
                {
                  key: "basico" as const,
                  title: "Plan Básico",
                  price: "$10 USD / mes",
                  accent: "emerald",
                  badge: "Empezar",
                  desc: "Ordena tu agenda y recibe reservas online.",
                },
                {
                  key: "esencial" as const,
                  title: "Plan Esencial",
                  price: "$20 USD / mes",
                  accent: "sky",
                  badge: "Más elegido",
                  desc: "WhatsApp + recordatorio para reducir ausencias.",
                },
                {
                  key: "marca" as const,
                  title: "Marca Propia",
                  price: "$30 USD / mes",
                  accent: "amber",
                  badge: "Pro",
                  desc: "Dominio + landing pro + campañas masivas.",
                },
              ].map((plan) => {
                const accent =
                  plan.accent === "emerald"
                    ? { border: "border-emerald-500/30", pill: "bg-emerald-500/10 border-emerald-500/40 text-emerald-200", check: "text-emerald-400", dot: "bg-emerald-400/20" }
                    : plan.accent === "sky"
                      ? { border: "border-sky-500/30", pill: "bg-sky-500/10 border-sky-500/40 text-sky-200", check: "text-sky-300", dot: "bg-sky-400/20" }
                      : { border: "border-amber-400/30", pill: "bg-amber-400/15 border-amber-400/60 text-amber-200", check: "text-amber-300", dot: "bg-amber-400/20" };

                return (
                  <div
                    key={plan.title}
                    className={`rounded-3xl border ${accent.border} bg-slate-900/40 p-6`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-white font-bold text-xl">{plan.title}</p>
                        <p className="text-slate-400 text-sm mt-1">{plan.desc}</p>
                        <p className="text-white font-extrabold text-2xl mt-4">{plan.price}</p>
                      </div>
                      <span className={`text-[10px] uppercase tracking-wide px-2 py-1 rounded-full border ${accent.pill}`}>
                        {plan.badge}
                      </span>
                    </div>

                    <div className="mt-6">
                      <p className="text-sm text-slate-300 font-semibold mb-3">
                        ¿Qué incluye este plan?
                      </p>

                      <ul className="space-y-3">
                        {COMPARISON_ROWS.filter((r) => {
                          const v = r.values[plan.key];
                          return typeof v === "boolean" ? v : Boolean(v);
                        }).map((r) => (
                          <li key={r.label} className="flex items-start gap-3">
                            <div className={`flex-shrink-0 w-5 h-5 rounded-full ${accent.dot} flex items-center justify-center mt-0.5`}>
                              <span className={accent.check}>{CHECK}</span>
                            </div>
                            <div>
                              <p className="text-slate-200 text-sm">{r.label}</p>
                              {typeof r.values[plan.key] === "string" ? (
                                <p className="text-slate-400 text-xs mt-0.5">
                                  {r.values[plan.key] as string}
                                </p>
                              ) : null}
                            </div>
                          </li>
                        ))}
                      </ul>

                      <a
                        href={WHATSAPP_HREF}
                        className="mt-6 block w-full text-center px-8 py-4 rounded-xl bg-slate-50 text-slate-900 font-bold hover:bg-white shadow-lg transition-colors"
                      >
                        Pedir este plan por WhatsApp
                      </a>

                      <p className="text-xs text-slate-500 mt-3 text-center">
                        Respuesta rápida · Te ayudamos con la configuración
                      </p>
                    </div>
                  </div>
                );
              })}
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
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-sky-500/10 to-blue-500/10 border border-sky-500/20 rounded-2xl p-10 sm:p-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              ¿Listo para automatizar tu negocio?
            </h2>
            <p className="text-slate-300 mb-8 text-lg">
              Te configuramos todo para que empieces a recibir reservas y controlar tu agenda desde el primer día.
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
