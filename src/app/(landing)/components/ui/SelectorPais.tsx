"use client";

import {
  useState,
  useRef,
  useEffect,
  useCallback,
  type KeyboardEvent,
} from "react";
import { PAISES, type Pais } from "../constants/paises";

interface SelectorPaisProps {
  value: string; // ISO code, e.g. "CO"
  onChange: (codigo: string) => void;
}

export function SelectorPais({ value, onChange }: SelectorPaisProps) {
  const seleccionado = PAISES.find((p) => p.codigo === value) ?? PAISES[0];

  const [busqueda, setBusqueda] = useState("");
  const [abierto, setAbierto] = useState(false);
  const [indiceActivo, setIndiceActivo] = useState(0);

  const inputRef = useRef<HTMLInputElement>(null);
  const listaRef = useRef<HTMLUListElement>(null);
  const contenedorRef = useRef<HTMLDivElement>(null);

  const filtrados: Pais[] = busqueda.trim()
    ? PAISES.filter(
        (p) =>
          p.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
          p.dial.includes(busqueda) ||
          p.codigo.toLowerCase().includes(busqueda.toLowerCase())
      )
    : PAISES;

  const seleccionar = useCallback(
    (pais: Pais) => {
      onChange(pais.codigo);
      setBusqueda("");
      setAbierto(false);
    },
    [onChange]
  );

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (contenedorRef.current && !contenedorRef.current.contains(e.target as Node)) {
        setAbierto(false);
        setBusqueda("");
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (!abierto) return;
    const item = listaRef.current?.children[indiceActivo] as HTMLElement;
    item?.scrollIntoView({ block: "nearest" });
  }, [indiceActivo, abierto]);

  useEffect(() => { setIndiceActivo(0); }, [busqueda]);

  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (!abierto) {
      if (e.key === "ArrowDown" || e.key === "Enter") setAbierto(true);
      return;
    }
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setIndiceActivo((i) => Math.min(i + 1, filtrados.length - 1));
        break;
      case "ArrowUp":
        e.preventDefault();
        setIndiceActivo((i) => Math.max(i - 1, 0));
        break;
      case "Enter":
        e.preventDefault();
        if (filtrados[indiceActivo]) seleccionar(filtrados[indiceActivo]);
        break;
      case "Escape":
        setAbierto(false);
        setBusqueda("");
        inputRef.current?.blur();
        break;
    }
  }

  return (
    <div ref={contenedorRef} className="relative flex-shrink-0">
      {/* Trigger — compacto: bandera + dial code */}
      <button
        type="button"
        onClick={() => {
          setAbierto((v) => !v);
          if (!abierto) setTimeout(() => inputRef.current?.focus(), 50);
        }}
        aria-haspopup="listbox"
        aria-expanded={abierto}
        className={`flex items-center gap-1.5 rounded-[10px] border bg-bg-main px-3 py-2.5 text-sm font-medium transition-all whitespace-nowrap ${
          abierto
            ? "border-brand ring-2 ring-brand/15 text-heading"
            : "border-brand/20 hover:border-brand/40 text-heading"
        }`}
      >
        <span className="text-base leading-none select-none">{seleccionado.bandera}</span>
        <span className="text-sm">{seleccionado.dial}</span>
        <svg
          className={`w-3 h-3 text-muted transition-transform duration-150 ${abierto ? "rotate-180" : ""}`}
          fill="none" viewBox="0 0 12 12" stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2 4l4 4 4-4" />
        </svg>
      </button>

      {/* Dropdown */}
      {abierto && (
        <div
          className="absolute z-50 mt-1 left-0 w-64 rounded-[12px] border border-brand/15 bg-bg-card shadow-xl overflow-hidden"
          style={{ boxShadow: "0 12px 40px rgba(0,0,0,0.12)" }}
        >
          {/* Search input inside dropdown */}
          <div className="p-2 border-b border-brand/10">
            <input
              ref={inputRef}
              type="text"
              value={busqueda}
              onChange={(e) => { setBusqueda(e.target.value); }}
              onKeyDown={handleKeyDown}
              placeholder="Buscar país o código..."
              className="w-full rounded-[8px] bg-bg-main border border-brand/15 px-3 py-2 text-sm text-heading placeholder:text-muted focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/15 transition-all"
              autoComplete="off"
              aria-autocomplete="list"
              role="combobox"
              aria-expanded={true}
              aria-controls="pais-listbox"
            />
          </div>

          <ul
            id="pais-listbox"
            ref={listaRef}
            role="listbox"
            className="max-h-52 overflow-y-auto py-1 text-sm"
          >
            {filtrados.length === 0 ? (
              <li className="px-3 py-2.5 text-muted text-xs">
                Sin resultados para &ldquo;{busqueda}&rdquo;
              </li>
            ) : (
              filtrados.map((p, idx) => (
                <li
                  key={p.codigo}
                  role="option"
                  aria-selected={p.codigo === value}
                  onMouseDown={(e) => { e.preventDefault(); seleccionar(p); }}
                  onMouseEnter={() => setIndiceActivo(idx)}
                  className={`flex items-center gap-2.5 px-3 py-2 cursor-pointer select-none transition-colors ${
                    idx === indiceActivo
                      ? "bg-brand/8 text-brand"
                      : "text-body hover:bg-brand/5"
                  } ${p.codigo === value ? "font-semibold" : ""}`}
                >
                  <span className="text-base leading-none flex-shrink-0">{p.bandera}</span>
                  <span className="flex-1 truncate">{p.nombre}</span>
                  <span className="text-muted text-xs flex-shrink-0">{p.dial}</span>
                </li>
              ))
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
