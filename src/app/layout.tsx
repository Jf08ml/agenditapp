import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL("https://agenditapp.com"),
  icons: [{ rel: "icon", url: "/logo.png" }],
  keywords: [
    "agendamiento online",
    "sistema de reservas",
    "agenda digital",
    "software de citas",
    "gestión de turnos",
    "agenda para negocios",
    "reservas automáticas",
    "app para agendar citas",
    "recordatorios automáticos",
    "agendamiento profesional",
    "software para salones de belleza",
    "agenda para barberías",
    "sistema de citas spa",
    "gestión de clientes",
    "reservas online Colombia",
  ],
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
};

export const viewport: Viewport = {
  themeColor: "#0ea5e9",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-CO">
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
      <body>
        <Analytics />
        {children}
      </body>
    </html>
  );
}
