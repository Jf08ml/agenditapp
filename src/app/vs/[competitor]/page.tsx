import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHeader from "@/app/(landing)/components/ui/PageHeader";
import PageFooter from "@/app/(landing)/components/ui/PageFooter";

// ─── Data ─────────────────────────────────────────────────────────────────────

const competitors = {
  fresha: {
    slug: "fresha",
    name: "Fresha",
    tagline: "¿cuál es mejor para negocios sin comisiones en Colombia?",
    metaTitle: "AgenditApp vs Fresha: Precios y Diferencias 2026",
    metaDescription:
      "Compara AgenditApp y Fresha: precios, WhatsApp nativo desde tu número y soporte en español LATAM. Tabla comparativa para salones y barberías. 2026.",
    canonical: "https://agenditapp.com/vs/fresha",
    intro: `Fresha es una de las plataformas de agendamiento más conocidas a nivel global. Su modelo freemium tiene atractivo inicial, pero muchos negocios en Colombia y LATAM descubren que las comisiones por cada reserva online se acumulan rápidamente. Esta comparativa te ayuda a entender exactamente qué incluye cada plataforma y cuál tiene más sentido para tu negocio.`,
    pain: "El problema más común que escuchamos de negocios que migran desde Fresha es el cobro de comisiones por cada reserva online. Para un salón con 200 citas al mes, esas comisiones pueden superar los $40–60 USD mensuales — más del doble que el plan más completo de AgenditApp.",
    whySwitch: [
      "AgenditApp no cobra comisiones por reserva — pagas una suscripción fija sin importar cuántas citas recibas.",
      "Los recordatorios y confirmaciones salen desde tu propio número de WhatsApp Business, no desde un número genérico.",
      "El onboarding tarda menos de 30 minutos con configuración asistida gratuita.",
      "Sin permanencia: cancela cuando quieras, sin penalización.",
    ],
    comparison: [
      { feature: "Precio base", agendit: "Desde $10 USD/mes", competitor: "Gratis con comisiones" },
      { feature: "Comisión por reserva online", agendit: "0% — sin comisiones", competitor: "Hasta 20% por reserva" },
      { feature: "WhatsApp desde tu número", agendit: "✅ Plan Esencial+", competitor: "❌ No disponible" },
      { feature: "Recordatorios automáticos", agendit: "✅ Configurables", competitor: "✅ Disponible" },
      { feature: "Dominio propio", agendit: "✅ Plan Marca Propia", competitor: "❌ Perfil en Fresha" },
      { feature: "Campañas WhatsApp masivas", agendit: "✅ Plan Marca Propia", competitor: "❌ No disponible" },
      { feature: "Soporte en español LATAM", agendit: "✅ WhatsApp lun–sáb", competitor: "⚠️ Chat en inglés" },
      { feature: "Sin permanencia", agendit: "✅", competitor: "✅" },
    ],
    faqs: [
      {
        q: "¿Fresha es realmente gratis para negocios en Colombia?",
        a: "Fresha es gratuito para la agenda básica, pero cobra una comisión de hasta el 20% por cada reserva que el cliente realiza a través del marketplace de Fresha. Para negocios con volumen de reservas medio-alto, esto puede ser significativamente más caro que una suscripción fija.",
      },
      {
        q: "¿Puedo migrar de Fresha a AgenditApp sin perder mis datos?",
        a: "Sí. Nuestro equipo de soporte te ayuda a importar la lista de clientes y configurar tus servicios en menos de 30 minutos. No necesitas borrar tu cuenta de Fresha para probar AgenditApp.",
      },
      {
        q: "¿AgenditApp tiene marketplace como Fresha?",
        a: "AgenditApp no tiene un marketplace de descubrimiento. Nos enfocamos en darte tu propia página de reservas con dominio personalizado, para que tus clientes lleguen directamente a ti — no a través de una plataforma que también muestra a tu competencia.",
      },
    ],
  },
  agendapro: {
    slug: "agendapro",
    name: "AgendaPro",
    tagline: "¿cuál ofrece mejor relación precio-funcionalidad para LATAM?",
    metaTitle: "AgenditApp vs AgendaPro: Precios y Diferencias 2026",
    metaDescription:
      "Compara AgenditApp y AgendaPro: precios, WhatsApp nativo desde tu número y soporte en español LATAM. Tabla comparativa para salones y barberías. 2026.",
    canonical: "https://agenditapp.com/vs/agendapro",
    intro: `AgendaPro es una plataforma de agendamiento latinoamericana con varios años en el mercado. Tiene una propuesta sólida para negocios medianos, pero su estructura de precios y la curva de aprendizaje pueden ser una barrera para negocios pequeños e independientes. Aquí analizamos en detalle cuándo tiene más sentido cada opción.`,
    pain: "AgendaPro está bien posicionado para negocios con más de 5 empleados y múltiples sedes. Para una barbería independiente, un salón familiar o un consultorio de un solo profesional, el costo de los planes intermedios de AgendaPro suele exceder los $40–80 USD/mes por funcionalidades que quizás no necesitas.",
    whySwitch: [
      "AgenditApp empieza desde $10/mes y tiene un plan gratuito permanente — ideal para probar sin compromiso.",
      "La integración de WhatsApp Business es nativa desde el plan Esencial: sin configuraciones complejas ni integraciones de terceros.",
      "La configuración inicial está lista en menos de 30 minutos con soporte directo por WhatsApp.",
      "Interfaz pensada para negocios unipersonales y equipos pequeños — sin menús innecesarios.",
    ],
    comparison: [
      { feature: "Precio inicial", agendit: "$0 (plan gratuito) / $10 USD", competitor: "Desde ~$30–40 USD/mes" },
      { feature: "WhatsApp nativo desde tu número", agendit: "✅ Plan Esencial ($20)", competitor: "⚠️ Vía integración adicional" },
      { feature: "Recordatorios automáticos", agendit: "✅ 1–2 configurables", competitor: "✅ Disponible" },
      { feature: "Plan gratuito permanente", agendit: "✅ 1 profesional, 5 servicios", competitor: "❌ Solo trial" },
      { feature: "Dominio propio", agendit: "✅ Plan Marca Propia ($30)", competitor: "✅ Disponible" },
      { feature: "Campañas WhatsApp masivas", agendit: "✅ Plan Marca Propia", competitor: "⚠️ Planes superiores" },
      { feature: "Comisión por reserva", agendit: "0%", competitor: "0%" },
      { feature: "Soporte en español LATAM", agendit: "✅ WhatsApp directo", competitor: "✅ Disponible" },
    ],
    faqs: [
      {
        q: "¿Cuál es la diferencia principal entre AgenditApp y AgendaPro?",
        a: "AgendaPro está optimizado para negocios medianos y grandes con múltiples sedes y equipos. AgenditApp está diseñado específicamente para negocios de 1 a 10 profesionales que necesitan una solución simple, rápida y con WhatsApp nativo desde su propio número.",
      },
      {
        q: "¿AgenditApp tiene las mismas funcionalidades que AgendaPro?",
        a: "Para el 80% de los casos de uso de barberías, salones, spas y consultorios pequeños, sí. AgenditApp cubre: reservas online, agenda por empleado, recordatorios WhatsApp, comisiones, reportes y dominio propio.",
      },
      {
        q: "¿Puedo migrar de AgendaPro a AgenditApp?",
        a: "Sí. El equipo de soporte te ayuda con la migración de clientes y configuración de servicios sin costo adicional.",
      },
    ],
  },
  booksy: {
    slug: "booksy",
    name: "Booksy",
    tagline: "¿cuál es mejor para negocios de belleza sin depender de un marketplace?",
    metaTitle: "AgenditApp vs Booksy: Precios y Diferencias 2026",
    metaDescription:
      "Compara AgenditApp y Booksy: precios, WhatsApp nativo desde tu número y soporte en español LATAM. Tabla comparativa para salones y barberías. 2026.",
    canonical: "https://agenditapp.com/vs/booksy",
    intro: `Booksy es un marketplace de reservas con fuerte presencia en Europa y creciente en Latinoamérica. Su propuesta incluye visibilidad dentro del ecosistema Booksy, lo que puede atraer nuevos clientes. Sin embargo, esa dependencia del marketplace también significa que tus clientes son parcialmente "clientes de Booksy", no solo tuyos.`,
    pain: "El modelo de Booksy funciona bien para atraer clientes nuevos vía marketplace, pero los negocios con base de clientes consolidada a menudo no necesitan esa visibilidad — y pagan por ella de todos modos. Además, Booksy no tiene integración nativa con WhatsApp Business desde el número propio del negocio, que es el canal dominante en LATAM.",
    whySwitch: [
      "AgenditApp te da control total de tu página de reservas con tu marca y dominio — no un perfil dentro de un marketplace.",
      "WhatsApp nativo desde tu número: tus clientes reciben mensajes de tu negocio, no de Booksy.",
      "Precio más accesible para el mercado latinoamericano: desde $10/mes sin comisiones.",
      "Sin dependencia de un ecosistema externo — tus clientes siempre son tuyos.",
    ],
    comparison: [
      { feature: "Modelo de negocio", agendit: "SaaS con suscripción fija", competitor: "Marketplace + suscripción" },
      { feature: "Precio base", agendit: "Desde $10 USD/mes", competitor: "Desde ~$30–50 USD/mes" },
      { feature: "WhatsApp desde tu número", agendit: "✅ Plan Esencial+", competitor: "❌ No disponible" },
      { feature: "Dominio y marca propios", agendit: "✅ Plan Marca Propia", competitor: "⚠️ Perfil en Booksy" },
      { feature: "Descubrimiento en marketplace", agendit: "❌ No aplica", competitor: "✅ Visibilidad en Booksy" },
      { feature: "Recordatorios automáticos", agendit: "✅ Configurables", competitor: "✅ Disponible" },
      { feature: "Campañas WhatsApp masivas", agendit: "✅ Plan Marca Propia", competitor: "❌ No disponible" },
      { feature: "Disponibilidad en Colombia", agendit: "✅ Nativo LATAM", competitor: "⚠️ Expansión reciente" },
    ],
    faqs: [
      {
        q: "¿Booksy está disponible en Colombia?",
        a: "Booksy ha estado expandiéndose en Latinoamérica, pero su presencia y soporte en Colombia es más limitada que en Europa y Estados Unidos. AgenditApp está construido específicamente para el mercado latinoamericano, con soporte en horario local.",
      },
      {
        q: "¿Booksy tiene integración con WhatsApp?",
        a: "Booksy no tiene integración nativa con WhatsApp Business desde el número del negocio. Sus notificaciones van por correo electrónico o por la app de Booksy. En LATAM, donde WhatsApp es el canal principal, esto es una limitación importante.",
      },
      {
        q: "Si vengo de Booksy, ¿pierdo el acceso al marketplace?",
        a: "Si cancelas Booksy, sí pierdes el perfil en su marketplace. Sin embargo, si tu negocio ya tiene base de clientes propia (vía Instagram, WhatsApp, referencias), el marketplace agrega menos valor del que aparenta. AgenditApp te ayuda a convertir esa base en reservas directas.",
      },
    ],
  },
  weibook: {
    slug: "weibook",
    name: "Weibook",
    tagline: "¿cuál es la opción más simple y asequible para Colombia?",
    metaTitle: "AgenditApp vs Weibook: Precios y Diferencias 2026",
    metaDescription:
      "Compara AgenditApp y Weibook: precios, WhatsApp nativo desde tu número y soporte en español LATAM. Tabla comparativa para salones y barberías. 2026.",
    canonical: "https://agenditapp.com/vs/weibook",
    intro: `Weibook es una plataforma de gestión para negocios de belleza con presencia en España y expansión latinoamericana. Tiene un conjunto de funcionalidades amplio, incluyendo punto de venta y gestión de stock. Si tu negocio vende productos además de servicios, puede ser relevante. Si solo gestionas citas y empleados, puede ser más de lo que necesitas.`,
    pain: "Weibook incluye funcionalidades avanzadas de punto de venta y gestión de inventario que incrementan su precio considerablemente. Para un salón o barbería que principalmente necesita agenda online, recordatorios por WhatsApp y control de comisiones, pagar por un sistema POS completo representa un costo no justificado.",
    whySwitch: [
      "AgenditApp tiene un enfoque específico en agendamiento y WhatsApp — sin funcionalidades que no vas a usar.",
      "Precio hasta 3x más accesible para el mismo caso de uso de gestión de citas.",
      "Configuración en 30 minutos con soporte por WhatsApp en español latinoamericano.",
      "Plan gratuito permanente para empezar sin riesgo.",
    ],
    comparison: [
      { feature: "Precio base", agendit: "$0 gratuito / $10 USD", competitor: "Desde ~$30+ USD/mes" },
      { feature: "WhatsApp desde tu número", agendit: "✅ Plan Esencial+", competitor: "⚠️ Integración adicional" },
      { feature: "Punto de venta (POS)", agendit: "❌ No incluido", competitor: "✅ Incluido" },
      { feature: "Gestión de inventario", agendit: "❌ No incluido", competitor: "✅ Incluido" },
      { feature: "Recordatorios automáticos", agendit: "✅ 1–2 configurables", competitor: "✅ Disponible" },
      { feature: "Campañas WhatsApp masivas", agendit: "✅ Plan Marca Propia", competitor: "⚠️ Planes superiores" },
      { feature: "Dominio propio", agendit: "✅ Plan $30", competitor: "✅ Disponible" },
      { feature: "Plan gratuito", agendit: "✅ Permanente", competitor: "❌ Solo trial" },
    ],
    faqs: [
      {
        q: "¿Cuándo tiene más sentido Weibook sobre AgenditApp?",
        a: "Si tu negocio vende productos físicos (tintes, cosméticos, accesorios) además de servicios, y necesitas control de inventario y un punto de venta integrado, Weibook puede ser más completo. Si tu foco es gestionar citas y comunicarte con clientes por WhatsApp, AgenditApp es más sencillo y económico.",
      },
      {
        q: "¿AgenditApp tiene control de caja como Weibook?",
        a: "AgenditApp incluye gestión de caja básica: registro de pagos por servicio, métodos de pago y reportes de ingresos. No tiene sistema de punto de venta para productos físicos.",
      },
      {
        q: "¿Weibook está disponible en Colombia?",
        a: "Weibook opera principalmente en España con expansión latinoamericana en curso. AgenditApp está construido desde Colombia, con soporte local y precios adaptados al mercado latinoamericano.",
      },
    ],
  },
};

export type CompetitorSlug = keyof typeof competitors;

// ─── generateStaticParams ─────────────────────────────────────────────────────

export function generateStaticParams() {
  return Object.keys(competitors).map((slug) => ({ competitor: slug }));
}

// ─── generateMetadata ─────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ competitor: string }>;
}): Promise<Metadata> {
  const { competitor } = await params;
  const data = competitors[competitor as CompetitorSlug];
  if (!data) return {};

  return {
    title: { absolute: data.metaTitle },
    description: data.metaDescription,
    alternates: { canonical: data.canonical },
    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
      url: data.canonical,
      images: [
        {
          url: `https://agenditapp.com/og?title=vs+${encodeURIComponent(data.name)}&subtitle=Comparativa+AgenditApp+2026&tag=Comparativas`,
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function VsPage({
  params,
}: {
  params: Promise<{ competitor: string }>;
}) {
  const { competitor } = await params;
  const data = competitors[competitor as CompetitorSlug];
  if (!data) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: data.metaTitle,
    description: data.metaDescription,
    url: data.canonical,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([schema, faqSchema]) }}
      />
      <PageHeader />

      <main className="min-h-screen pt-28 pb-16">
        <div className="max-w-3xl mx-auto px-6 py-12">

          {/* Breadcrumb */}
          <nav className="mb-8 text-sm text-muted" aria-label="Breadcrumb">
            <ol className="flex items-center gap-1.5 flex-wrap">
              <li><Link href="/" className="hover:text-brand transition-colors">Inicio</Link></li>
              <li aria-hidden="true" className="text-muted/50">/</li>
              <li className="text-heading">AgenditApp vs {data.name}</li>
            </ol>
          </nav>

          {/* Header */}
          <div className="mb-10">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand/8 border border-brand/20 text-brand text-[11px] font-semibold tracking-wider uppercase mb-4">
              Comparativa 2026
            </span>
            <h1 className="text-3xl sm:text-4xl font-semibold text-heading mb-3">
              AgenditApp vs {data.name}
            </h1>
            <p className="text-body leading-relaxed text-lg">{data.tagline}</p>
          </div>

          {/* Intro */}
          <div className="bg-bg-card border border-brand/10 rounded-[20px] p-6 sm:p-8 mb-8" style={{ boxShadow: "var(--shadow-card)" }}>
            <p className="text-body leading-relaxed">{data.intro}</p>
          </div>

          {/* Pain point */}
          <div className="bg-brand/6 border border-brand/15 rounded-[14px] px-6 py-5 mb-10">
            <p className="text-[11px] font-bold text-brand uppercase tracking-wider mb-2">
              Lo que escuchamos de negocios que migran desde {data.name}
            </p>
            <p className="text-sm text-body leading-relaxed">{data.pain}</p>
          </div>

          {/* Comparison table */}
          <section className="mb-12" aria-labelledby="tabla-comparativa">
            <h2 id="tabla-comparativa" className="text-2xl font-semibold text-heading mb-6">
              Comparativa de funcionalidades
            </h2>
            <div className="overflow-x-auto rounded-[20px] border border-brand/10" style={{ boxShadow: "var(--shadow-card)" }}>
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-brand/6">
                    <th className="text-left px-5 py-3.5 font-semibold text-muted text-xs uppercase tracking-wider">Funcionalidad</th>
                    <th className="text-left px-5 py-3.5 font-semibold text-brand text-xs uppercase tracking-wider">AgenditApp</th>
                    <th className="text-left px-5 py-3.5 font-semibold text-muted text-xs uppercase tracking-wider">{data.name}</th>
                  </tr>
                </thead>
                <tbody>
                  {data.comparison.map((row, i) => (
                    <tr key={row.feature} className={`border-t border-brand/8 ${i % 2 === 1 ? "bg-brand/2" : ""}`}>
                      <td className="px-5 py-3.5 font-medium text-heading">{row.feature}</td>
                      <td className="px-5 py-3.5 text-body">{row.agendit}</td>
                      <td className="px-5 py-3.5 text-muted">{row.competitor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Por qué cambiar */}
          <section className="mb-12" aria-labelledby="por-que">
            <h2 id="por-que" className="text-2xl font-semibold text-heading mb-6">
              ¿Por qué cambiar a AgenditApp?
            </h2>
            <ul className="flex flex-col gap-3">
              {data.whySwitch.map((reason, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span
                    className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-brand text-[10px] font-bold"
                    style={{ background: "color-mix(in srgb, var(--brand) 12%, transparent)" }}
                  >
                    ✓
                  </span>
                  <span className="text-body leading-relaxed">{reason}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* CTA */}
          <div className="bg-bg-card border border-brand/10 rounded-[20px] px-6 py-8 mb-12 text-center" style={{ boxShadow: "var(--shadow-card)" }}>
            <h2 className="text-xl font-semibold text-heading mb-2">
              Prueba AgenditApp gratis — 7 días con todo incluido
            </h2>
            <p className="text-sm text-muted mb-6">
              Sin tarjeta de crédito. Sin permanencia. Configuración asistida incluida.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="https://app.agenditapp.com/signup"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Crear cuenta gratis
              </Link>
              <Link
                href="/precios"
                className="inline-flex items-center justify-center rounded-[12px] border border-brand/20 text-brand font-medium px-6 py-3 text-sm hover:bg-brand/6 transition-colors"
              >
                Ver planes y precios
              </Link>
            </div>
          </div>

          {/* FAQ */}
          <section aria-labelledby="faq-section">
            <h2 id="faq-section" className="text-2xl font-semibold text-heading mb-6">
              Preguntas frecuentes — AgenditApp vs {data.name}
            </h2>
            <dl className="flex flex-col gap-0">
              {data.faqs.map((faq) => (
                <div key={faq.q} className="border-b border-brand/10 py-6 last:border-0">
                  <dt className="font-semibold text-heading mb-2">{faq.q}</dt>
                  <dd className="text-sm text-body leading-relaxed">{faq.a}</dd>
                </div>
              ))}
            </dl>
          </section>

          {/* Otras comparativas */}
          <div className="mt-12 pt-8 border-t border-brand/10">
            <p className="text-sm text-muted mb-4">Ver otras comparativas:</p>
            <div className="flex flex-wrap gap-2">
              {Object.values(competitors)
                .filter((c) => c.slug !== data.slug)
                .map((c) => (
                  <Link
                    key={c.slug}
                    href={`/vs/${c.slug}`}
                    className="text-sm text-brand hover:text-brand-hover border border-brand/20 rounded-[10px] px-3 py-1.5 hover:bg-brand/6 transition-colors"
                  >
                    AgenditApp vs {c.name}
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </main>

      <PageFooter />
    </>
  );
}
