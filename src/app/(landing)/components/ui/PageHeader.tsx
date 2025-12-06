"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { WHATSAPP_HREF } from "../constants";

export default function PageHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-300 ease-in-out
        ${scrolled 
          ? 'bg-slate-900/95 backdrop-blur-xl shadow-xl border-b border-white/20' 
          : 'bg-slate-900/70 backdrop-blur-md border-b border-white/10'
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className={`
          flex items-center justify-between transition-all duration-300
          ${scrolled ? 'h-14 sm:h-16' : 'h-16 sm:h-20'}
        `}>
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-all">
            <Image
              src="/logo_dorado.png"
              alt="AgenditApp Logo"
              width={180}
              height={50}
              className={`
                w-auto object-contain drop-shadow-[0_0_10px_rgba(250,204,21,0.3)]
                transition-all duration-300
                ${scrolled ? 'h-6 sm:h-8' : 'h-8 sm:h-10'}
              `}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link 
              href="/" 
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              Inicio
            </Link>
            <Link 
              href="/sectores" 
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              Sectores
            </Link>
            <Link 
              href="/funcionalidades" 
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              Funcionalidades
            </Link>
            <Link 
              href="/precios" 
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              Precios
            </Link>
            <a
              href={WHATSAPP_HREF}
              className="
                px-6 py-2.5 rounded-xl 
                bg-gradient-to-r from-sky-400 to-blue-500 
                text-white text-sm font-bold 
                hover:from-sky-300 hover:to-blue-400
                shadow-[0_0_20px_rgba(56,189,248,0.4)] 
                hover:shadow-[0_0_30px_rgba(56,189,248,0.6)] 
                transition-all duration-300 
                transform hover:scale-105 hover:-translate-y-0.5
                active:scale-95
              "
            >
              🚀 Demo gratis
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 lg:hidden">
            <a
              href={WHATSAPP_HREF}
              className="px-4 py-2 rounded-xl bg-sky-400 text-slate-950 text-xs font-bold hover:bg-sky-300 transition-colors"
            >
              Demo
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-300 hover:text-white p-2"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-white/10 animate-in slide-in-from-top duration-200">
            <div className="flex flex-col gap-2">
              <Link 
                href="/" 
                className="
                  text-sm font-medium text-slate-300 hover:text-sky-400 
                  transition-all py-3 px-3 rounded-lg
                  hover:bg-sky-400/10
                  active:scale-95
                "
                onClick={() => setMobileMenuOpen(false)}
              >
                🏠 Inicio
              </Link>
              <Link 
                href="/sectores" 
                className="
                  text-sm font-medium text-slate-300 hover:text-sky-400 
                  transition-all py-3 px-3 rounded-lg
                  hover:bg-sky-400/10
                  active:scale-95
                "
                onClick={() => setMobileMenuOpen(false)}
              >
                💼 Sectores
              </Link>
              <Link 
                href="/funcionalidades" 
                className="
                  text-sm font-medium text-slate-300 hover:text-sky-400 
                  transition-all py-3 px-3 rounded-lg
                  hover:bg-sky-400/10
                  active:scale-95
                "
                onClick={() => setMobileMenuOpen(false)}
              >
                ⚡ Funcionalidades
              </Link>
              <Link 
                href="/precios" 
                className="
                  text-sm font-medium text-slate-300 hover:text-sky-400 
                  transition-all py-3 px-3 rounded-lg
                  hover:bg-sky-400/10
                  active:scale-95
                "
                onClick={() => setMobileMenuOpen(false)}
              >
                💰 Precios
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
