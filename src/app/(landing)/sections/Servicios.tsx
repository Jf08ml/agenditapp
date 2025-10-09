"use client";
import dynamic from "next/dynamic";
import { useState } from "react";
import { PhoneMockup } from "../components/ui/PhoneMockup"; // ajusta la ruta si es distinta

const ImageLightbox = dynamic(
  () => import("../components/images/ImageLightbox"),
  { ssr: false }
);

export default function Servicios() {
  const [open, setOpen] = useState(false);
  const [src, setSrc] = useState<string | null>(null);
  const [alt, setAlt] = useState("");

  const openLightbox = (s: string, a: string) => {
    setSrc(s);
    setAlt(a);
    setOpen(true);
  };

  return (
    <section id="servicios" className="px-6 py-12 max-w-6xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold">Servicios y precios</h2>
      <p className="text-slate-400 mt-2">
        Configura tu catálogo y muéstralo en tu landing de bienvenida.
      </p>

      {/* Layout: texto + mockup */}
      <div className="mt-8 grid md:grid-cols-2 gap-10 items-center">
        {/* Lado izquierdo: bullets/beneficios */}
        <div>
          <ul className="space-y-4 text-slate-300">
            <li className="flex gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
              Publica tu catálogo con precios, duración y descripción.
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
              Compatible con SEO (títulos, meta y datos estructurados).
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
              Vista optimizada para móvil y escritorio.
            </li>
          </ul>

          <div className="mt-6 flex flex-wrap gap-3">
            <span className="inline-flex items-center rounded-full border border-emerald-500/30 px-3 py-1 text-sm text-emerald-300">
              Catálogo dinámico
            </span>
            <span className="inline-flex items-center rounded-full border border-emerald-500/30 px-3 py-1 text-sm text-emerald-300">
              Precios visibles
            </span>
            <span className="inline-flex items-center rounded-full border border-emerald-500/30 px-3 py-1 text-sm text-emerald-300">
              Preparado para SEO
            </span>
          </div>
        </div>

        {/* Lado derecho: PhoneMockup reutilizable */}
        <div className="flex justify-center">
          <button
            type="button"
            onClick={() =>
              openLightbox(
                "/screenshots/servicios-precios.png",
                "Catálogo de servicios y precios"
              )
            }
            className="block focus:outline-none"
            aria-label="Ampliar imagen: catálogo de servicios y precios"
          >
            <PhoneMockup
              src="/screenshots/servicios-precios.png"
              alt="Catálogo de servicios y precios"
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
