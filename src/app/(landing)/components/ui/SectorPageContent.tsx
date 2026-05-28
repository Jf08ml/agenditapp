"use client";

import { useState } from "react";
import Link from "next/link";
import { DemoCtaButton } from "./DemoCtaModal";
import {
  Sparkle, Scissors, Flower, Eye, Stethoscope, Tooth, Brain, Barbell,
  Leaf, PawPrint, Syringe, Camera, MusicNotes, MusicNote, Books, Scales, YinYang,
  CalendarBlank, DeviceMobileCamera, User, Star, Money, Globe, Bed, Moon,
  Gift, ClipboardText, Lock, ChartBar, NotePencil, Bell, Monitor, Users,
  Target, CalendarCheck, Buildings, Palette, GraduationCap, Folder, Timer, Cloud,
  type IconWeight,
} from "@phosphor-icons/react";

type PIEntry = { Icon: React.ComponentType<{ size?: number; weight?: IconWeight; color?: string }>; color: string };

const ICON_MAP: Record<string, PIEntry> = {
  // Sector page icons
  "💇‍♀️": { Icon: Sparkle,            color: "#DB2777" },
  "💈":   { Icon: Scissors,           color: "#1D4ED8" },
  "🧖‍♀️": { Icon: Flower,             color: "#059669" },
  "👁️":  { Icon: Eye,                color: "#7C3AED" },
  "🏥":   { Icon: Stethoscope,        color: "#0D9488" },
  "🦷":   { Icon: Tooth,              color: "#0EA5E9" },
  "🧠":   { Icon: Brain,              color: "#4338CA" },
  "🏋️‍♀️": { Icon: Barbell,           color: "#EA580C" },
  "🥗":   { Icon: Leaf,               color: "#059669" },
  "🐶":   { Icon: PawPrint,            color: "#D97706" },
  "💉":   { Icon: Syringe,            color: "#E11D48" },
  "📸":   { Icon: Camera,             color: "#475569" },
  "🎸":   { Icon: MusicNotes,         color: "#7C3AED" },
  "📚":   { Icon: Books,              color: "#D97706" },
  "⚖️":  { Icon: Scales,             color: "#1D4ED8" },
  "💃":   { Icon: YinYang,            color: "#4338CA" },
  // Feature icons
  "📅":   { Icon: CalendarBlank,      color: "#1D4ED8" },
  "📲":   { Icon: DeviceMobileCamera, color: "#1D4ED8" },
  "👩‍🦰": { Icon: User,              color: "#DB2777" },
  "💅":   { Icon: Star,               color: "#DB2777" },
  "💰":   { Icon: Money,              color: "#059669" },
  "🌐":   { Icon: Globe,              color: "#7C3AED" },
  "🧘‍♀️": { Icon: YinYang,           color: "#059669" },
  "🛏️":  { Icon: Bed,                color: "#7C3AED" },
  "💆‍♀️": { Icon: Flower,            color: "#059669" },
  "🌙":   { Icon: Moon,               color: "#4338CA" },
  "🎁":   { Icon: Gift,               color: "#DB2777" },
  "👨‍⚕️": { Icon: Stethoscope,       color: "#0D9488" },
  "📋":   { Icon: ClipboardText,      color: "#1D4ED8" },
  "🔒":   { Icon: Lock,               color: "#059669" },
  "📊":   { Icon: ChartBar,           color: "#1D4ED8" },
  "✨":   { Icon: Sparkle,            color: "#DB2777" },
  "📝":   { Icon: NotePencil,         color: "#1D4ED8" },
  "🔔":   { Icon: Bell,               color: "#D97706" },
  "💻":   { Icon: Monitor,            color: "#475569" },
  "👨‍🏫": { Icon: Users,             color: "#1D4ED8" },
  "🎯":   { Icon: Target,             color: "#EA580C" },
  "🗓️":  { Icon: CalendarCheck,      color: "#1D4ED8" },
  "✂️":  { Icon: Scissors,           color: "#1D4ED8" },
  "⏱️":  { Icon: Timer,              color: "#1D4ED8" },
  "☁️":  { Icon: Cloud,              color: "#475569" },
  "🎉":   { Icon: Star,               color: "#D97706" },
  "🏢":   { Icon: Buildings,          color: "#475569" },
  "🎨":   { Icon: Palette,            color: "#DB2777" },
  "🎵":   { Icon: MusicNote,          color: "#7C3AED" },
  "👨‍🎓": { Icon: GraduationCap,     color: "#D97706" },
  "👩‍🏫": { Icon: Users,             color: "#1D4ED8" },
  "👥":   { Icon: Users,             color: "#1D4ED8" },
  "📁":   { Icon: Folder,             color: "#D97706" },
  "🎪":   { Icon: Star,               color: "#D97706" },
};

function iconBg(emoji: string): string {
  const e = ICON_MAP[emoji];
  return e ? `${e.color}18` : "color-mix(in srgb, var(--brand) 10%, transparent)";
}

function SectorIcon({ emoji, size }: { emoji: string; size: number }) {
  const e = ICON_MAP[emoji];
  if (!e) return <span className="text-xl">{emoji}</span>;
  return <e.Icon size={size} weight="duotone" color={e.color} />;
}

function buildReviewSchema(testimonial: { quote: string; author: string }, sectorName: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Review",
    reviewBody: testimonial.quote,
    author: { "@type": "Person", name: testimonial.author.split("—")[0]?.trim() ?? testimonial.author },
    itemReviewed: {
      "@type": "SoftwareApplication",
      name: "AgenditApp",
      applicationCategory: "BusinessApplication",
      url: "https://agenditapp.com",
      description: `Software de agendamiento online para ${sectorName}`,
    },
    reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
    publisher: { "@type": "Organization", name: "AgenditApp", url: "https://agenditapp.com" },
  };
}

interface Feature {
  title: string;
  description: string;
  icon: string;
}

interface RelatedSector {
  title: string;
  slug: string;
  icon: string;
  description: string;
}

interface Testimonial {
  quote: string;
  author: string;
}

export interface SectorFAQ {
  q: string;
  a: string;
}

interface ComparativaLink {
  label: string;
  href: string;
}

interface SectorPageContentProps {
  sectorName: string;
  icon: string;
  h1: string;
  description: string;
  features: Feature[];
  featuresHeading: string;
  testimonial?: Testimonial;
  faqs?: SectorFAQ[];
  comparativas?: ComparativaLink[];
  relatedSectors: RelatedSector[];
  ctaHeading: string;
  ctaBody: string;
}

export default function SectorPageContent({
  sectorName,
  icon,
  h1,
  description,
  features,
  featuresHeading,
  testimonial,
  faqs,
  comparativas,
  relatedSectors,
  ctaHeading,
  ctaBody,
}: SectorPageContentProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  return (
    <main className="min-h-screen pt-28">
      {/* Breadcrumbs */}
      <nav className="px-4 sm:px-6 py-4 max-w-6xl mx-auto">
        <ol className="flex items-center gap-2 text-sm text-muted">
          <li>
            <Link href="/" className="hover:text-brand transition-colors">
              Inicio
            </Link>
          </li>
          <li className="text-muted/50">/</li>
          <li>
            <Link href="/sectores" className="hover:text-brand transition-colors">
              Sectores
            </Link>
          </li>
          <li className="text-muted/50">/</li>
          <li className="text-heading font-medium">{sectorName}</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="py-14 sm:py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className="inline-flex items-center justify-center w-16 h-16 rounded-[18px] mb-6"
            style={{ background: iconBg(icon) }}
          >
            <SectorIcon emoji={icon} size={28} />
          </div>
          <h1 className="text-4xl sm:text-5xl font-semibold text-heading tracking-tight leading-tight mb-5">
            Software de Agendamiento para{" "}
            <span className="text-brand">{h1}</span>
          </h1>
          <p className="text-lg text-body max-w-2xl mx-auto mb-8 leading-relaxed">
            {description}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <DemoCtaButton className="px-8 py-3.5 rounded-[14px] bg-brand text-white text-sm font-medium hover:bg-brand-hover transition-colors cursor-pointer shadow-[0_8px_24px_rgba(29,78,216,0.28)]">
              Solicitar demo gratis
            </DemoCtaButton>
            <Link
              href="/precios"
              className="px-8 py-3.5 rounded-[14px] border border-[#0F172A]/12 text-heading text-sm font-medium bg-white/70 hover:bg-white/90 transition-all"
            >
              Ver planes
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-12 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold text-heading text-center mb-10">
            {featuresHeading}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-bg-card border border-brand/10 rounded-[16px] p-6 hover:border-brand/25 transition-all"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <div
                  className="w-11 h-11 rounded-[10px] flex items-center justify-center mb-4"
                  style={{ background: iconBg(feature.icon) }}
                >
                  <SectorIcon emoji={feature.icon} size={22} />
                </div>
                <h3 className="text-base font-semibold text-heading mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-body leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      {testimonial && (
        <>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(buildReviewSchema(testimonial, sectorName)) }}
          />
        <section className="py-12 px-4 sm:px-6">
          <div
            className="max-w-3xl mx-auto bg-bg-card border border-brand/15 rounded-[20px] p-8 sm:p-10"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            <div className="flex gap-1 mb-5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-brand" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-base sm:text-lg text-body leading-relaxed mb-5 italic">
              &ldquo;{testimonial.quote}&rdquo;
            </p>
            <p className="text-sm font-semibold text-brand">{testimonial.author}</p>
          </div>
        </section>
        </>
      )}

      {/* FAQs */}
      {faqs && faqs.length > 0 && (
        <>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: faqs.map((f) => ({
                  "@type": "Question",
                  name: f.q,
                  acceptedAnswer: { "@type": "Answer", text: f.a },
                })),
              }),
            }}
          />
          <section className="py-12 px-4 sm:px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-semibold text-heading text-center mb-8">
                Preguntas frecuentes — {sectorName}
              </h2>
              <div className="flex flex-col gap-3">
                {faqs.map((faq, i) => (
                  <div
                    key={i}
                    className="bg-bg-card border border-brand/10 rounded-[14px] overflow-hidden"
                    style={{ boxShadow: "var(--shadow-card)" }}
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                    >
                      <span className="text-sm font-semibold text-heading">{faq.q}</span>
                      <svg
                        className={`w-4 h-4 flex-shrink-0 text-brand transition-transform duration-200 ${openFaq === i ? "rotate-180" : ""}`}
                        fill="none" viewBox="0 0 16 16" stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6l4 4 4-4" />
                      </svg>
                    </button>
                    {openFaq === i && (
                      <div className="px-5 pb-4 text-sm text-body leading-relaxed border-t border-brand/8 pt-3">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* Comparativas contextuales */}
      {comparativas && comparativas.length > 0 && (
        <section className="pb-6 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm text-muted">
              ¿Comparando opciones para tu {sectorName.toLowerCase()}?{" "}
              {comparativas.map((link, i) => (
                <span key={link.href}>
                  {i > 0 && " · "}
                  <Link href={link.href} className="text-brand hover:underline transition-colors">
                    AgenditApp {link.label}
                  </Link>
                </span>
              ))}
            </p>
          </div>
        </section>
      )}

      {/* Related Sectors */}
      <section className="py-12 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold text-heading text-center mb-3">
            Otros sectores que usan AgenditApp
          </h2>
          <p className="text-body text-center mb-8 max-w-xl mx-auto">
            Descubre cómo otros negocios de servicios automatizan su agenda
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {relatedSectors.map((sector) => (
              <Link
                key={sector.slug}
                href={`/sectores/${sector.slug}`}
                className="group bg-bg-card border border-brand/10 rounded-[16px] p-5 hover:border-brand/30 transition-all"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <div
                  className="w-10 h-10 rounded-[10px] flex items-center justify-center mb-3"
                  style={{ background: iconBg(sector.icon) }}
                >
                  <SectorIcon emoji={sector.icon} size={20} />
                </div>
                <h3 className="text-sm font-semibold text-heading mb-1 group-hover:text-brand transition-colors">
                  {sector.title}
                </h3>
                <p className="text-xs text-muted leading-relaxed">{sector.description}</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link
              href="/sectores"
              className="text-sm font-medium text-brand hover:text-brand-hover inline-flex items-center gap-1.5 transition-colors"
            >
              Ver todos los sectores
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 16 16" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 3l5 5-5 5" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-14 px-4 sm:px-6">
        <div
          className="max-w-4xl mx-auto text-center rounded-[24px] p-10 sm:p-14"
          style={{ background: "linear-gradient(135deg, var(--brand) 0%, var(--brand-dark) 100%)" }}
        >
          <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4">
            {ctaHeading}
          </h2>
          <p className="text-white/75 mb-8 leading-relaxed">{ctaBody}</p>
          <DemoCtaButton className="inline-flex items-center px-8 py-4 rounded-[14px] bg-white text-brand font-semibold text-base hover:bg-white/90 transition-colors cursor-pointer shadow-md">
            Solicitar demo gratis
          </DemoCtaButton>
          <p className="text-white/50 text-sm mt-4">
            Respuesta en menos de 1 hora · Sin tarjeta de crédito
          </p>
        </div>
      </section>
    </main>
  );
}
