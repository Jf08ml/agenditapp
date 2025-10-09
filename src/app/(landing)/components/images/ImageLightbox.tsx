"use client";
import Image from "next/image";
import React, { useCallback, useEffect, useRef } from "react";

type Props = {
  src: string | null;
  alt: string;
  open: boolean;
  onClose: () => void;
};

export default function ImageLightbox({ src, alt, open, onClose }: Props) {
  const overlayRef = useRef<HTMLDivElement | null>(null);

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (!open) return;
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "auto";
    };
  }, [open, handleKey]);

  if (!open || !src) return null;

  return (
    <div
      ref={overlayRef}
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[200] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={(e) => {
        if (e.target === overlayRef.current) onClose();
      }}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 rounded-full px-3 py-1 text-sm bg-white/10 hover:bg-white/20 text-white border border-white/20"
        aria-label="Cerrar"
      >
        ✕ Cerrar
      </button>
      <div className="max-w-6xl w-full">
        <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
          <Image
            src={src}
            alt={alt}
            fill
            className="object-contain rounded-xl shadow-2xl"
            sizes="(max-width: 1024px) 100vw, 1024px"
            priority
          />
        </div>
      </div>
    </div>
  );
}
