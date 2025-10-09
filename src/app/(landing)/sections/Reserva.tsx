"use client";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useState } from "react";

const ImageLightbox = dynamic(
  () => import("../components/images/ImageLightbox"),
  { ssr: false }
);

export default function Reserva() {
  const [open, setOpen] = useState(false);
  const [src, setSrc] = useState<string | null>(null);
  const [alt, setAlt] = useState("");
  const openLightbox = (s: string, a: string) => {
    setSrc(s);
    setAlt(a);
    setOpen(true);
  };

  const items = [
    {
      src: "/reserva-paso-1.png",
      alt: "Paso 1: Selección de uno o varios servicios",
      caption: "1. Selecciona uno o varios servicios",
    },
    {
      src: "/reserva-paso-2.png",
      alt: "Paso 2: Elegir trabajador preferido y ver disponibilidad",
      caption: "2. Elige trabajador y disponibilidad",
    },
    {
      src: "/reserva-paso-3.png",
      alt: "Paso 3: Seleccionar fecha y hora (mismo día o diferentes días)",
      caption: "3. Selecciona fecha(s) y hora",
    },
    {
      src: "/reserva-paso-4.png",
      alt: "Paso 4: Confirmación automática o por aprobación según configuración del negocio",
      caption: "4. Confirmación automática o por aprobación",
    },
  ];

  return (
    <section id="reserva" className="px-6 py-12 max-w-6xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold">Reserva en línea</h2>
      <p className="text-slate-400 mt-2">
        Así es como funciona la reserva en AgenditApp: el cliente puede elegir
        uno o varios servicios, seleccionar su <b>trabajador</b> de preferencia,
        ver los horarios disponibles de ese trabajador o de todo el equipo, y
        agendar para el mismo día o en fechas distintas. Del lado del negocio,
        puedes automatizar la confirmación o manejarla por aprobación manual.
      </p>

      <ul className="mt-4 grid gap-2 text-sm text-slate-300">
        <li>• Elige uno o varios servicios en una sola reserva</li>
        <li>
          • Selecciona <b>trabajador</b> preferido o “cualquiera”
        </li>
        <li>• Visualiza disponibilidad por trabajador o general</li>
        <li>• Agenda en la misma fecha o en días diferentes</li>
        <li>• Confirmación automática o por aprobación (configurable)</li>
      </ul>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item) => (
          <figure key={item.src} className="flex flex-col items-center">
            <button
              onClick={() => openLightbox(item.src, item.alt)}
              className="w-full text-left"
              aria-label={`Ampliar imagen: ${item.alt}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={400}
                height={300}
                className="rounded-xl border border-slate-800 shadow-lg"
              />
            </button>
            <figcaption className="mt-2 text-sm text-slate-400 text-center">
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
