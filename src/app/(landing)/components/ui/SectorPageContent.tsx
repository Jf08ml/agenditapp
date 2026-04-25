import Link from "next/link";
import { DemoCtaButton } from "./DemoCtaModal";

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

interface SectorPageContentProps {
  sectorName: string;
  icon: string;
  h1: string;
  description: string;
  features: Feature[];
  featuresHeading: string;
  testimonial?: Testimonial;
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
  relatedSectors,
  ctaHeading,
  ctaBody,
}: SectorPageContentProps) {
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
            className="inline-flex items-center justify-center w-16 h-16 rounded-[18px] text-3xl mb-6"
            style={{ background: "color-mix(in srgb, var(--brand) 10%, transparent)" }}
          >
            {icon}
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
                  className="w-11 h-11 rounded-[10px] flex items-center justify-center text-xl mb-4"
                  style={{ background: "color-mix(in srgb, var(--brand) 10%, transparent)" }}
                >
                  {feature.icon}
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
                  className="w-10 h-10 rounded-[10px] flex items-center justify-center text-lg mb-3"
                  style={{ background: "color-mix(in srgb, var(--brand) 10%, transparent)" }}
                >
                  {sector.icon}
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
