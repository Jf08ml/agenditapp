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

  // Cierra al hacer click fuera
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        contenedorRef.current &&
        !contenedorRef.current.contains(e.target as Node)
      ) {
        setAbierto(false);
        setBusqueda("");
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Hace scroll al item activo en la lista
  useEffect(() => {
    if (!abierto) return;
    const item = listaRef.current?.children[indiceActivo] as HTMLElement;
    item?.scrollIntoView({ block: "nearest" });
  }, [indiceActivo, abierto]);

  // Resetea el índice activo al filtrar
  useEffect(() => {
    setIndiceActivo(0);
  }, [busqueda]);

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
    <div ref={contenedorRef} className="relative">
      {/* Input / trigger */}
      <div
        className={`flex items-center gap-2 rounded-xl bg-slate-900 border px-3 py-2 text-sm cursor-text transition-colors ${
          abierto
            ? "border-sky-400 ring-1 ring-sky-400"
            : "border-slate-700 hover:border-slate-500"
        }`}
        onClick={() => {
          setAbierto(true);
          inputRef.current?.focus();
        }}
      >
        {/* Bandera del país seleccionado */}
        <span className="text-base leading-none select-none">
          {seleccionado.bandera}
        </span>

        <input
          ref={inputRef}
          type="text"
          value={busqueda}
          onChange={(e) => {
            setBusqueda(e.target.value);
            setAbierto(true);
          }}
          onFocus={() => setAbierto(true)}
          onKeyDown={handleKeyDown}
          placeholder={`${seleccionado.nombre} (${seleccionado.dial})`}
          className="flex-1 min-w-0 bg-transparent text-slate-100 placeholder:text-slate-400 focus:outline-none w-40"
          autoComplete="off"
          aria-autocomplete="list"
          aria-expanded={abierto}
          aria-haspopup="listbox"
          role="combobox"
        />

        {/* Chevron */}
        <span
          className={`text-slate-400 text-xs transition-transform duration-150 ${abierto ? "rotate-180" : ""}`}
        >
          ▾
        </span>
      </div>

      {/* Dropdown */}
      {abierto && (
        <ul
          ref={listaRef}
          role="listbox"
          className="absolute z-50 mt-1 w-full min-w-[16rem] max-h-60 overflow-y-auto rounded-xl border border-slate-700 bg-slate-900 shadow-xl py-1 text-sm"
        >
          {filtrados.length === 0 ? (
            <li className="px-3 py-2 text-slate-500 text-xs">
              Sin resultados para &ldquo;{busqueda}&rdquo;
            </li>
          ) : (
            filtrados.map((p, idx) => (
              <li
                key={p.codigo}
                role="option"
                aria-selected={p.codigo === value}
                onMouseDown={(e) => {
                  e.preventDefault(); // evita que el input pierda foco antes de seleccionar
                  seleccionar(p);
                }}
                onMouseEnter={() => setIndiceActivo(idx)}
                className={`flex items-center gap-2 px-3 py-2 cursor-pointer select-none transition-colors ${
                  idx === indiceActivo
                    ? "bg-sky-500/20 text-sky-300"
                    : "text-slate-200 hover:bg-slate-800"
                } ${p.codigo === value ? "font-semibold" : ""}`}
              >
                <span className="text-base leading-none">{p.bandera}</span>
                <span className="flex-1 truncate">{p.nombre}</span>
                <span className="text-slate-500 text-xs shrink-0">{p.dial}</span>
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
}
