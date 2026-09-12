import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHeader from "../../(landing)/components/ui/PageHeader";
import PageFooter from "../../(landing)/components/ui/PageFooter";
import { sources, SOURCE_BADGE } from "../sources";
import RefPageContent from "./RefPageContent";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return Object.keys(sources).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const source = sources[slug];
  if (!source) return {};

  const badge = SOURCE_BADGE[source.type];
  const suffix = source.handle ? ` · ${source.handle}` : source.website ? ` · ${source.website}` : "";
  const title =
    source.seoTitle ??
    `${source.offerBase} — ${badge} ${source.name} | AgenditApp`;
  const description =
    source.seoDescription ??
    `${badge} ${source.name}${suffix}: AgenditApp ofrece ${source.offerBase.toLowerCase()} para tu negocio de servicios. Agendamiento online, recordatorios WhatsApp y gestión de clientes.`;

  return {
    title,
    description,
    alternates: { canonical: `https://agenditapp.com/ref/${slug}` },
    openGraph: {
      title,
      description,
      url: `https://agenditapp.com/ref/${slug}`,
      images: [
        {
          url: `/og?title=${encodeURIComponent(badge + " " + source.name)}&subtitle=${encodeURIComponent(source.offerBase + " · AgenditApp")}&tag=Oferta`,
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

export default async function RefPage({ params }: Props) {
  const { slug } = await params;
  const source = sources[slug];
  if (!source) return notFound();

  const badge = SOURCE_BADGE[source.type];

  const offerSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `AgenditApp — ${source.offerBase} (${badge} ${source.name})`,
    description: `${source.offerBase} en AgenditApp. ${source.offerBonus ?? ""} Plataforma de agendamiento online para negocios de servicios en Colombia.`.trim(),
    url: `https://agenditapp.com/ref/${slug}`,
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: "https://agenditapp.com" },
        { "@type": "ListItem", position: 2, name: source.name, item: `https://agenditapp.com/ref/${slug}` },
      ],
    },
    mainEntity: {
      "@type": "Offer",
      name: source.offerBase,
      description: [source.offerBase, source.offerBonus].filter(Boolean).join(". "),
      url: source.signupUrl,
      priceSpecification: {
        "@type": "PriceSpecification",
        price: "0",
        priceCurrency: "USD",
        description: source.offerBase,
      },
      seller: {
        "@type": "Organization",
        name: "AgenditApp",
        url: "https://agenditapp.com",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(offerSchema) }}
      />
      <PageHeader />
      <RefPageContent source={source} badge={badge} />
      <PageFooter />
    </>
  );
}
