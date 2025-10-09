"use client";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useState } from "react";
import ExternalLink from "../components/ui/ExternalLink";
import Badge from "../components/ui/Badge";
import { WHATSAPP_HREF } from "../components/constants";

const ImageLightbox = dynamic(
  () => import("../components/images/ImageLightbox"),
  { ssr: false }
);

export default function Hero() {
  const [open, setOpen] = useState(false);
  const [src, setSrc] = useState<string | null>(null);
  const [alt, setAlt] = useState("");

  const openLightbox = (s: string, a: string) => {
    setSrc(s);
    setAlt(a);
    setOpen(true);
  };

  return (
    <section className="relative">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/fondo.png"
          alt="Fondo de AgenditApp"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/60" />
      </div>

      <header className="px-6 pt-6 max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image src="/logo_dorado.png" alt="AgenditApp" width={250} height={250} />
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <ExternalLink href="#reserva" className="hover:underline">
            Reserva en línea
          </ExternalLink>
          <ExternalLink href="#servicios" className="hover:underline">
            Servicios
          </ExternalLink>
          <ExternalLink href="#ubicacion" className="hover:underline">
            Ubicación
          </ExternalLink>
          <ExternalLink href="#precio" className="hover:underline">
            Precio
          </ExternalLink>
          <ExternalLink href="#faq" className="hover:underline">
            FAQ
          </ExternalLink>
          <ExternalLink
            href={WHATSAPP_HREF}
            className="px-3 py-2 rounded-xl bg-sky-400 text-black font-bold"
          >
            Demo por WhatsApp
          </ExternalLink>
        </nav>
      </header>

      <div className="px-6 py-20 max-w-6xl mx-auto">
        <div className="max-w-3xl">
          <Badge>Reserva en línea 24/7 · Landing de bienvenida incluida</Badge>
          <h1 className="mt-4 text-3xl md:text-5xl font-extrabold leading-tight">
            Software de agendamiento con recordatorios desde tu WhatsApp
          </h1>
        </div>

        <div className="grid md:grid-cols-2 gap-10 mt-10 ">
          <div>
            <p className="mt-4 text-slate-200/90">
              Recibe reservas online 24/7 en tu <b>landing de bienvenida</b>,
              organiza tu agenda y evita ausencias con recordatorios enviados
              desde tu número. Sin instalaciones ni permanencias.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#precio"
                className="px-5 py-3 rounded-xl bg-sky-400 text-black font-bold"
              >
                Ver precio
              </a>
              <a
                href={WHATSAPP_HREF}
                className="px-5 py-3 rounded-xl border border-slate-300/50 text-white"
              >
                Agendar demo por WhatsApp
              </a>
            </div>
            <ul className="mt-6 grid gap-2 text-sm text-slate-200/90">
              <li>
                • Página personalizada (marca blanca) + landing de bienvenida
              </li>
              <li>• Agenda visual y simple</li>
              <li>• Recordatorios automáticos por WhatsApp</li>
              <li>• Clientes, empleados, servicios y caja</li>
              <li>• Analíticas: horas pico y servicios top</li>
              <li>• Planes de fidelidad y referidos</li>
            </ul>

            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm">
              <span className="text-slate-300/90">Síguenos:</span>
              <a
                href="https://www.instagram.com/zybizobazar/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 rounded-lg border border-white/15 hover:bg-white/10"
              >
                Instagram
              </a>
              <a
                href="https://www.facebook.com/zybizo.bazar"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 rounded-lg border border-white/15 hover:bg-white/10"
              >
                Facebook
              </a>
              <a
                href="https://www.tiktok.com/@zybizobazar?lang=es"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 rounded-lg border border-white/15 hover:bg-white/10"
              >
                TikTok
              </a>
            </div>
          </div>

          <div className="relative space-y-6">
            <button
              onClick={() =>
                openLightbox(
                  "/inicio_page.png",
                  "Catálogo de servicios y precios"
                )
              }
              className="block w-full text-left"
              aria-label="Ampliar imagen: catálogo"
            >
              <Image
                src="/inicio_page.png"
                alt="Panel de AgenditApp mostrando una agenda y recordatorios"
                width={1200}
                height={845}
                priority
                className="rounded-2xl border border-white/15 mx-auto block shadow-2xl shadow-black/30"
              />
            </button>
            <button
              onClick={() =>
                openLightbox("/agenda.png", "Catálogo de servicios y precios")
              }
              className="block w-full text-left"
              aria-label="Ampliar imagen: catálogo"
            >
              <Image
                src="/agenda.png"
                alt="Panel de AgenditApp mostrando una agenda y recordatorios"
                width={1200}
                height={845}
                priority
                className="rounded-2xl border border-white/15 mx-auto block shadow-2xl shadow-black/30"
              />
            </button>
          </div>
        </div>
      </div>

      {/* CTA móvil fija */}
      <div className="md:hidden sticky bottom-3 z-50 mx-3">
        <div className="rounded-2xl bg-sky-400 text-black shadow-lg flex items-center justify-between px-4 py-3">
          <span className="font-semibold">Pide tu demo</span>
          <a
            href={WHATSAPP_HREF}
            className="px-3 py-2 rounded-xl bg-black/10 font-bold"
          >
            WhatsApp
          </a>
        </div>
      </div>

      {/* Ligthbox */}
      <ImageLightbox
        src={src}
        alt={alt}
        open={open}
        onClose={() => setOpen(false)}
      />
    </section>
  );
}
