"use client";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useState } from "react";

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

  return (
    <section id="ubicacion" className="px-6 py-12 max-w-6xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold">Ubicación</h2>
      <p className="text-slate-400 mt-2">
        La página incluye la <b>dirección y ubicación exacta del negocio</b>,
        para que tus clientes puedan encontrarlo fácilmente. Además, tienen la
        opción de <b>abrirla directamente en Google Maps</b> para obtener
        indicaciones.
      </p>
      <div className="mt-6 gap-6 items-start">
        <button
          onClick={() =>
            openLightbox("/ubicacion.png", "Ubicación del negocio")
          }
          className="block w-full text-left"
          aria-label="Ampliar imagen: ubicación"
        >
          <Image
            src="/ubicacion.png"
            alt="Ubicación del negocio"
            width={600}
            height={400}
            className="w-full h-auto rounded-2xl"
            priority
          />
        </button>
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
