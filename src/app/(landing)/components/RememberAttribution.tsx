"use client";

import { useEffect } from "react";
import { rememberAttribution } from "./attribution";

/* Guarda los UTM de la página de llegada para el botón de registro (ver attribution.ts). */
export default function RememberAttribution() {
  useEffect(() => {
    rememberAttribution();
  }, []);
  return null;
}
