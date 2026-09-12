import "../globals.css";
import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import { Poppins, Instrument_Serif } from "next/font/google";
import WhatsAppFAB from "../(landing)/components/ui/WhatsAppFAB";
import { routing } from "@/i18n/routing";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-poppins",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    metadataBase: new URL("https://agenditapp.com"),
    title: {
      default: t("title"),
      template: "%s | AgenditApp",
    },
    description: t("description"),
    icons: [{ rel: "icon", url: "/icono-full-blue.png" }],
    alternates: {
      canonical:
        locale === routing.defaultLocale
          ? "https://agenditapp.com"
          : "https://agenditapp.com/en",
    },
    authors: [{ name: "AgenditApp" }],
    creator: "AgenditApp",
    publisher: "AgenditApp",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      // Agregar códigos de verificación cuando estén disponibles
      // google: "código-de-verificación",
      // yandex: "código-de-verificación",
      // bing: "código-de-verificación",
    },
  };
}

export const viewport: Viewport = {
  themeColor: "#1D4ED8",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);

  // "es-419" es el código interno del locale por defecto (ver src/i18n/routing.ts);
  // el <html lang> visible mantiene "es-CO" para no cambiar el comportamiento
  // previo a esta migración.
  const htmlLang = locale === routing.defaultLocale ? "es-CO" : locale;

  return (
    <html lang={htmlLang} className={`${poppins.variable} ${instrumentSerif.variable}`}>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="AgenditApp" />
        {/* Google tag (gtag.js) */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-ERKL5G7HS8"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-ERKL5G7HS8');
            `,
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <NextIntlClientProvider>
          <Analytics />
          {children}
          <WhatsAppFAB />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
