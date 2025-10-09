"use client";
import dynamic from "next/dynamic";
import { useState } from "react";
import { PhoneMockup } from "../components/ui/PhoneMockup"; // ajusta la ruta si aplica

const ImageLightbox = dynamic(
  () => import("../components/images/ImageLightbox"),
  { ssr: false }
);

export default function Ubicacion() {
  const [open, setOpen] = useState(false);
  const [src, setSrc] = useState<string | null>(null);
  const [alt, setAlt] = useState("");

  const openLightbox = (s: string, a: string) => {
    setSrc(s);
    setAlt(a);
    setOpen(true);
  };

  // TODO: sustituye por tu URL real de Google Maps
  const mapsUrl = "#"; // p. ej. "https://maps.app.goo.gl/xxxxx"

  return (
    <section id="ubicacion" className="px-6 py-12 max-w-6xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold">Ubicación</h2>

      <div className="mt-8 grid md:grid-cols-2 gap-10 items-center">
        {/* Columna izquierda: texto + CTA */}
        <div>
          <p className="text-slate-400">
            La página incluye la <b>dirección y ubicación exacta del negocio</b>
            , para que tus clientes puedan encontrarlo fácilmente. Además,
            pueden
            <b> abrirla directamente en Google Maps</b> para obtener
            indicaciones.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-xl border border-emerald-500/30 px-4 py-2 text-sm text-emerald-300 hover:bg-emerald-500/10 transition-colors"
            >
              Abrir en Google Maps
            </a>

            <button
              type="button"
              onClick={() =>
                openLightbox(
                  "/screenshots/ubicacion.png",
                  "Ubicación del negocio"
                )
              }
              className="inline-flex items-center rounded-xl border border-slate-700 px-4 py-2 text-sm text-slate-200 hover:bg-slate-800/60 transition-colors"
            >
              Ver imagen en pantalla completa
            </button>
          </div>
        </div>

        {/* Columna derecha: mockup (reutilizable) */}
        <div className="flex justify-center md:justify-end">
          <button
            type="button"
            onClick={() =>
              openLightbox(
                "/screenshots/ubicacion.png",
                "Ubicación del negocio"
              )
            }
            className="block focus:outline-none"
            aria-label="Ampliar imagen: ubicación del negocio"
          >
            <PhoneMockup
              src="/screenshots/ubicacion.png"
              alt="Ubicación del negocio"
              priority
            />
            <span className="mt-3 block text-center text-sm text-slate-400">
              Ver pantalla completa
            </span>
          </button>
        </div>
      </div>

      <ImageLightbox
        src={src}
        alt={alt}
        open={open}
        onClose={() => setOpen(false)}
      />
    </section>
  );
}
