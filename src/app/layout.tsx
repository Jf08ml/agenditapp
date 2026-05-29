import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import { Poppins, Instrument_Serif } from "next/font/google";

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

export const metadata: Metadata = {
  metadataBase: new URL("https://agenditapp.com"),
  title: {
    default: "AgenditApp | Sistema de Agendamiento Online",
    template: "%s | AgenditApp",
  },
  description:
    "Plataforma de agendamiento online para negocios de belleza, bienestar y servicios profesionales. Automatiza reservas, envía recordatorios por WhatsApp y gestiona tu agenda 24/7.",
  icons: [{ rel: "icon", url: "/icono-full-blue.png" }],
  alternates: {
    canonical: "https://agenditapp.com",
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

export const viewport: Viewport = {
  themeColor: "#1D4ED8",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-CO" className={`${poppins.variable} ${instrumentSerif.variable}`}>
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
        <Analytics />
        {children}
      </body>
    </html>
  );
}
