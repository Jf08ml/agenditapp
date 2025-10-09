"use client";
import dynamic from "next/dynamic";
import { useState } from "react";
import { PhoneMockup } from "../components/ui/PhoneMockup";

const ImageLightbox = dynamic(
  () => import("../components/images/ImageLightbox"),
  { ssr: false }
);

type Item = {
  src: string;
  alt: string;
  caption: string;
};

const items: Item[] = [
  {
    src: "/screenshots/reserva-paso-1.png",
    alt: "Paso 1: Selecciona uno o varios servicios y el trabajador",
    caption: "1. Selecciona uno o varios servicios y el trabajador",
  },
  {
    src: "/screenshots/reserva-paso-2.png",
    alt: "Paso 2: Seleccionar fecha y hora (mismo día o diferentes días)",
    caption: "2. Elige fecha y hora (mismo día o diferentes días)",
  },
  {
    src: "/screenshots/reserva-paso-3.png",
    alt: "Paso 3: Ve el resumen de la reserva",
    caption: "3. Revisa el resumen antes de confirmar",
  },
  {
    src: "/screenshots/reserva-paso-4.png",
    alt: "Paso 4: Confirmación automática o por aprobación según configuración del negocio",
    caption: "4. Confirmación automática o por aprobación",
  },
];

export default function Reserva() {
  const [open, setOpen] = useState(false);
  const [src, setSrc] = useState<string | null>(null);
  const [alt, setAlt] = useState("");

  const openLightbox = (s: string, a: string) => {
    setSrc(s);
    setAlt(a);
    setOpen(true);
  };

  return (
    <section id="reserva" className="px-6 py-12 max-w-6xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold">Reserva en línea</h2>
      <p className="text-slate-400 mt-2">
        Así funciona la reserva en AgenditApp: el cliente elige servicios, puede escoger su <b>trabajador</b>,
        ve los horarios disponibles por persona o de todo el equipo, y agenda para el mismo día o fechas distintas.
        Del lado del negocio, la confirmación puede ser automática o por aprobación manual.
      </p>

      <ul className="mt-4 grid gap-2 text-sm text-slate-300">
        <li>• Varias prestaciones en una sola reserva</li>
        <li>• Preferencia por <b>trabajador</b> o “cualquiera”</li>
        <li>• Disponibilidad por trabajador o general</li>
        <li>• Agenda para mismo día o en días diferentes</li>
        <li>• Confirmación automática o por aprobación (configurable)</li>
      </ul>

      {/* Grid de pasos visuales */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item, idx) => (
          <figure
            key={item.src}
            className="relative flex flex-col items-center rounded-2xl border border-slate-800 bg-slate-900/30 p-4 hover:border-slate-700 hover:bg-slate-900/50 transition-colors"
          >
            {/* Badge del paso */}
            <span className="absolute left-4 top-4 inline-flex items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-[11px] font-medium text-emerald-300">
              Paso {idx + 1}
            </span>

            {/* Mockup clickable */}
            <button
              onClick={() => openLightbox(item.src, item.alt)}
              className="w-full text-left"
              aria-label={`Ampliar imagen: ${item.alt}`}
            >
              <PhoneMockup src={item.src} alt={item.alt} priority={idx === 0} />
            </button>

            {/* Caption */}
            <figcaption className="mt-3 text-sm text-slate-300 text-center">
              {item.caption}
            </figcaption>
          </figure>
        ))}
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
