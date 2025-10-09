"use client";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useState } from "react";

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
      <div className="mt-8">
        <button
          onClick={() =>
            openLightbox(
              "/precios-servicios.png",
              "Catálogo de servicios y precios"
            )
          }
          className="block w-full text-left"
          aria-label="Ampliar imagen: catálogo"
        >
          <Image
            src="/precios-servicios.png"
            alt="Catálogo de servicios y precios"
            width={1200}
            height={800}
            className="rounded-2xl border border-slate-800 shadow-lg mx-auto"
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
