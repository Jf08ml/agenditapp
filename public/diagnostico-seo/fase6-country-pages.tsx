// src/app/[country]/page.tsx
// ARCHIVO NUEVO — landings por país (Colombia ya es la homepage, así que /mx, /cl, /ar)

// NOTA: Si no quieres un route group dinámico que capture todo,
// usa rutas estáticas explícitas: src/app/mx/page.tsx, src/app/cl/page.tsx, src/app/ar/page.tsx
// Esa opción es más segura para no interferir con rutas existentes.
// Este archivo muestra el sistema dinámico. Elige el enfoque que mejor encaje con tu proyecto.

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

// ─────────────────────────────────────────────
// DATOS POR PAÍS
// ─────────────────────────────────────────────

const countries = {
  mx: {
    slug: "mx",
    name: "México",
    flag: "🇲🇽",
    locale: "es_MX",
    currency: "MXN",
    currencySymbol: "$",
    priceEsencial: "380",
    priceBasico: "190",
    priceMarca: "560",
    phone: "+52",
    capital: "Ciudad de México",
    keywords: "México",
    testimonial: null, // reemplazar con testimonio real de México cuando esté disponible
    metaTitle: "Software de Agendamiento para Negocios en México | AgenditApp",
    metaDescription:
      "Sistema de reservas online con WhatsApp automático para barberías, salones de belleza, spas y consultorios en México. Reservas 24/7. Prueba gratis sin tarjeta.",
    canonical: "https://agenditapp.com/mx",
    h1: "Sistema de agendamiento online para negocios en México",
    intro:
      "Más de 120,000 barberías, salones de belleza y spas en México manejan sus citas por WhatsApp manual. AgenditApp automatiza ese proceso: tus clientes reservan solos 24/7 y reciben confirmación y recordatorio desde tu número de WhatsApp Business.",
    sectors: [
      "Barberías y peluquerías",
      "Salones de belleza y uñas",
      "Spas y centros de masajes",
      "Consultorios médicos y odontológicos",
      "Psicólogos y terapeutas",
      "Entrenadores personales",
    ],
  },
  cl: {
    slug: "cl",
    name: "Chile",
    flag: "🇨🇱",
    locale: "es_CL",
    currency: "CLP",
    currencySymbol: "$",
    priceEsencial: "18.000",
    priceBasico: "9.000",
    priceMarca: "27.000",
    phone: "+56",
    capital: "Santiago",
    keywords: "Chile",
    testimonial: {
      text: "Organizar clases grupales e individuales nunca fue tan simple. AgenditApp se adapta perfecto a yoga, pilates y danza.",
      author: "Espacio Mosaico",
      location: "Quilpué, Chile",
      metric: "90% satisfacción",
    },
    metaTitle: "Software de Agendamiento para Negocios en Chile | AgenditApp",
    metaDescription:
      "Sistema de reservas online con WhatsApp automático para barberías, salones de belleza, spas y consultorios en Chile. Reservas 24/7. Prueba gratis sin tarjeta.",
    canonical: "https://agenditapp.com/cl",
    h1: "Sistema de agendamiento online para negocios en Chile",
    intro:
      "AgenditApp es la plataforma de reservas online que integra WhatsApp Business nativo, sin comisiones por cita y sin permanencia. Ideal para negocios de belleza, bienestar y servicios profesionales en Chile.",
    sectors: [
      "Barberías y peluquerías",
      "Salones de belleza y manicure",
      "Centros de yoga y pilates",
      "Spas y bienestar",
      "Consultorios y clínicas",
      "Entrenadores y fitness",
    ],
  },
  ar: {
    slug: "ar",
    name: "Argentina",
    flag: "🇦🇷",
    locale: "es_AR",
    currency: "USD",
    currencySymbol: "USD",
    priceEsencial: "20",
    priceBasico: "10",
    priceMarca: "30",
    phone: "+54",
    capital: "Buenos Aires",
    keywords: "Argentina",
    testimonial: null,
    metaTitle: "Software de Agendamiento para Negocios en Argentina | AgenditApp",
    metaDescription:
      "Sistema de reservas online con WhatsApp automático para barberías, salones de belleza, spas y consultorios en Argentina. Reservas 24/7. Prueba gratis.",
    canonical: "https://agenditapp.com/ar",
    h1: "Sistema de agendamiento online para negocios en Argentina",
    intro:
      "AgenditApp ayuda a barberías, salones y consultorios en Argentina a dejar de manejar su agenda por WhatsApp manual. Tus clientes reservan solos, reciben confirmación automática y el sistema envía recordatorios desde tu número de WhatsApp Business.",
    sectors: [
      "Barberías y peluquerías",
      "Salones de belleza",
      "Centros de estética",
      "Psicólogos y terapeutas",
      "Consultorios médicos",
      "Entrenadores personales",
    ],
  },
};

export type CountrySlug = keyof typeof countries;

// ─────────────────────────────────────────────
// generateStaticParams
// ─────────────────────────────────────────────

export function generateStaticParams() {
  return Object.keys(countries).map((slug) => ({ country: slug }));
}

// ─────────────────────────────────────────────
// generateMetadata
// ─────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: { country: string };
}): Promise<Metadata> {
  const data = countries[params.country as CountrySlug];
  if (!data) return {};

  return {
    title: data.metaTitle,
    description: data.metaDescription,
    alternates: {
      canonical: data.canonical,
      languages: {
        "es-CO": "https://agenditapp.com",
        [`es-${params.country.toUpperCase()}`]: data.canonical,
      },
    },
    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
      url: data.canonical,
      locale: data.locale,
      siteName: "AgenditApp",
    },
  };
}

// ─────────────────────────────────────────────
// PÁGINA
// ─────────────────────────────────────────────

export default function CountryPage({
  params,
}: {
  params: { country: string };
}) {
  const data = countries[params.country as CountrySlug];
  if (!data) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "AgenditApp",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description: data.metaDescription,
    url: data.canonical,
    offers: {
      "@type": "Offer",
      price: data.priceEsencial,
      priceCurrency: data.currency,
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        billingDuration: "P1M",
      },
    },
    areaServed: {
      "@type": "Country",
      name: data.name,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <main>
        {/* Hero */}
        <section className="mx-auto max-w-4xl px-4 pt-16 pb-12 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-medium text-primary mb-3">
            {data.flag} Disponible en {data.name}
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            {data.h1}
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8">
            {data.intro}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="https://app.agenditapp.com/signup"
              className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Crear cuenta gratis — sin tarjeta
            </Link>
            <Link
              href="/precios"
              className="inline-flex items-center justify-center rounded-md border border-input px-8 py-3 text-sm font-medium hover:bg-accent transition-colors"
            >
              Ver planes y precios
            </Link>
          </div>
          <p className="text-xs text-muted-foreground mt-3">
            7 días con acceso completo · Sin permanencia · Cancela cuando quieras
          </p>
        </section>

        {/* Métricas */}
        <section className="border-y border-border bg-muted/30 py-8">
          <div className="mx-auto max-w-4xl px-4 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { metric: "200+", label: "negocios activos en LATAM" },
              { metric: "70%", label: "menos inasistencias" },
              { metric: "24/7", label: "reservas automáticas" },
              { metric: "$0", label: "comisiones por cita" },
            ].map(({ metric, label }) => (
              <div key={label}>
                <p className="text-3xl font-bold text-primary">{metric}</p>
                <p className="text-xs text-muted-foreground mt-1">{label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Sectores */}
        <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8" aria-labelledby="sectores-pais">
          <h2 id="sectores-pais" className="text-2xl font-semibold mb-2 text-center">
            Ideal para cualquier negocio de citas en {data.name}
          </h2>
          <p className="text-muted-foreground text-center mb-8">
            Desde una barbería unipersonal hasta un centro con 8 profesionales.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {data.sectors.map((sector) => (
              <li
                key={sector}
                className="flex items-center gap-2 rounded-lg border border-border px-4 py-3 text-sm"
              >
                <span className="text-primary font-medium">✓</span>
                {sector}
              </li>
            ))}
          </ul>
        </section>

        {/* Diferenciador WhatsApp */}
        <section className="bg-muted/30 border-y border-border py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-semibold mb-4 text-center">
              El único sistema que habla por ti, desde tu número de WhatsApp
            </h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-8">
              En {data.name}, WhatsApp es el canal principal de comunicación con clientes.
              AgenditApp es la única plataforma de agendamiento que envía confirmaciones
              y recordatorios desde el número de WhatsApp Business de tu negocio —
              no desde un número genérico.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { title: "Confirmación automática", desc: "Cada reserva nueva dispara un mensaje desde tu número." },
                { title: "Recordatorios configurables", desc: "1 o 2 recordatorios antes de cada cita. Tus clientes confirman o cancelan con 1 toque." },
                { title: "Campañas masivas", desc: "Envía promos y reactivaciones a toda tu base de clientes desde WhatsApp." },
              ].map(({ title, desc }) => (
                <div key={title} className="rounded-lg bg-background border border-border p-5">
                  <p className="font-medium mb-1">{title}</p>
                  <p className="text-sm text-muted-foreground">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Precios */}
        <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8" aria-labelledby="precios-pais">
          <h2 id="precios-pais" className="text-2xl font-semibold mb-2 text-center">
            Planes disponibles en {data.name}
          </h2>
          <p className="text-muted-foreground text-center mb-8">
            Sin permanencia. Sin comisiones por reserva. Cancela cuando quieras.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                name: "Básico",
                price: `${data.currencySymbol}${data.priceBasico}`,
                period: "/ mes",
                desc: "Agenda online, gestión de servicios y clientes.",
                plan: "basico",
              },
              {
                name: "Esencial",
                price: `${data.currencySymbol}${data.priceEsencial}`,
                period: "/ mes",
                desc: "Todo lo anterior + WhatsApp automático y recordatorios.",
                plan: "esencial",
                featured: true,
              },
              {
                name: "Marca Propia",
                price: `${data.currencySymbol}${data.priceMarca}`,
                period: "/ mes",
                desc: "Dominio propio, 2 recordatorios y campañas masivas.",
                plan: "marca-propia",
              },
            ].map(({ name, price, period, desc, plan, featured }) => (
              <div
                key={name}
                className={`rounded-xl border p-6 ${featured ? "border-primary bg-primary/5" : "border-border"}`}
              >
                {featured && (
                  <p className="text-xs font-medium text-primary mb-2">Más elegido</p>
                )}
                <p className="font-semibold text-lg">{name}</p>
                <p className="text-3xl font-bold mt-1">
                  {price}
                  <span className="text-sm font-normal text-muted-foreground">{period}</span>
                </p>
                <p className="text-sm text-muted-foreground mt-2 mb-4">{desc}</p>
                <Link
                  href={`https://app.agenditapp.com/signup?plan=${plan}`}
                  className={`block text-center rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                    featured
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "border border-input hover:bg-accent"
                  }`}
                >
                  Empezar gratis
                </Link>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-muted-foreground mt-4">
            * Precios referenciales. Consulta precios actualizados en{" "}
            <Link href="/precios" className="text-primary hover:underline">
              agenditapp.com/precios
            </Link>
          </p>
        </section>

        {/* Testimonio del país (si existe) */}
        {data.testimonial && (
          <section className="bg-muted/30 border-y border-border py-12">
            <div className="mx-auto max-w-2xl px-4 text-center">
              <p className="text-2xl font-bold text-primary mb-4">{data.testimonial.metric}</p>
              <blockquote className="text-lg text-muted-foreground italic mb-4">
                "{data.testimonial.text}"
              </blockquote>
              <p className="text-sm font-medium">{data.testimonial.author}</p>
              <p className="text-xs text-muted-foreground">{data.testimonial.location}</p>
            </div>
          </section>
        )}

        {/* CTA final */}
        <section className="mx-auto max-w-2xl px-4 py-16 sm:px-6 text-center">
          <h2 className="text-2xl font-semibold mb-4">
            Tu próxima cita podría reservarse mientras lees esto
          </h2>
          <p className="text-muted-foreground mb-8">
            Únete a más de 200 negocios en Latinoamérica que ya reciben reservas 24/7 sin depender de WhatsApp manual.
          </p>
          <Link
            href="https://app.agenditapp.com/signup"
            className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Crear cuenta gratis — 7 días con todo incluido
          </Link>
        </section>
      </main>
    </>
  );
}
