"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DemoCtaButton } from "./DemoCtaModal";

const NAV_LINKS = [
  { href: "/funcionalidades", label: "Funciones" },
  { href: "/sectores", label: "Sectores" },
  { href: "/precios", label: "Planes" },
  { href: "/blog", label: "Blog" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className={`w-full px-4 transition-all duration-300 ${scrolled ? "pt-2" : "pt-3 sm:pt-4"}`}>
        <div className="max-w-7xl mx-auto">
          {/* Pill */}
          <div
            className={`flex items-center justify-between rounded-[16px] bg-white/55 backdrop-blur-lg border border-white/70 transition-all duration-300 ${
              scrolled
                ? "px-5 py-2.5 shadow-[0_8px_32px_rgba(29,78,216,0.14)]"
                : "px-6 sm:px-8 py-3 sm:py-3.5 shadow-[0_8px_32px_rgba(29,78,216,0.10)]"
            }`}
          >
            {/* Left: logo + nav */}
            <div className="flex items-center gap-6">
              <Link href="/" className="flex-shrink-0">
                <Image
                  src="/logo-text.png"
                  alt="AgenditApp"
                  width={180}
                  height={56}
                  priority
                  className={`w-auto object-contain transition-all duration-300 ${scrolled ? "h-8" : "h-10 sm:h-11"}`}
                />
              </Link>

              {/* Desktop nav */}
              <nav className="hidden lg:flex items-center gap-1">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="relative px-4 py-2 text-sm font-medium text-body rounded-[10px] overflow-hidden group hover:text-brand transition-colors"
                  >
                    <span className="absolute inset-0 bg-brand/0 group-hover:bg-brand/6 rounded-[10px] transition-colors duration-200" />
                    <span className="relative z-10">{link.label}</span>
                    <span
                      className="absolute bottom-1.5 left-4 right-4 h-0.5 bg-brand origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full"
                    />
                  </Link>
                ))}
              </nav>
            </div>

            {/* Right: CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <DemoCtaButton
                source="navbar_desktop"
                className="px-5 py-2.5 rounded-[12px] bg-[#25D366] text-white text-sm font-medium hover:bg-[#22c35e] transition-colors shadow-[0_4px_16px_rgba(37,211,102,0.35)]"
              >
                Hablar por WhatsApp
              </DemoCtaButton>
            </div>

            {/* Mobile: WhatsApp + hamburger */}
            <div className="flex items-center gap-2 lg:hidden">
              <DemoCtaButton
                source="navbar_mobile"
                className="px-3.5 py-2 rounded-[10px] bg-[#25D366] text-white text-xs font-medium"
              >
                WhatsApp
              </DemoCtaButton>
              <button
                onClick={() => setMobileOpen((v) => !v)}
                className="p-2.5 rounded-[10px] text-body hover:bg-brand/8 transition-colors"
                aria-label="Menú"
              >
                <motion.svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                  animate={mobileOpen ? "open" : "closed"}>
                  <motion.path
                    strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    variants={{
                      closed: { d: "M4 6h16M4 12h16M4 18h16" },
                      open: { d: "M6 18L18 6M6 6l12 12" },
                    }}
                    transition={{ duration: 0.25 }}
                  />
                </motion.svg>
              </button>
            </div>
          </div>

          {/* Mobile dropdown */}
          <AnimatePresence>
            {mobileOpen && (
              <motion.nav
                className="lg:hidden absolute left-4 right-4 mt-2 rounded-[14px] bg-white/92 backdrop-blur-lg border border-white/70 shadow-[0_12px_40px_rgba(15,23,42,0.14)] px-2 pb-4 pt-2 flex flex-col gap-1 z-50"
                initial={{ opacity: 0, y: -8, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.97 }}
                transition={{ type: "spring", stiffness: 320, damping: 30 }}
              >
                {NAV_LINKS.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className="block py-3 px-3 rounded-[10px] text-sm text-body font-medium hover:bg-brand/8 hover:text-brand transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  className="border-t border-brand/12 mt-2 pt-3 flex flex-col gap-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.15 }}
                >
                  <DemoCtaButton
                    source="navbar_mobile_menu"
                    className="flex items-center justify-center py-3 px-4 rounded-[12px] bg-[#25D366] text-white font-medium text-sm hover:bg-[#22c35e] transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    Hablar por WhatsApp
                  </DemoCtaButton>
                </motion.div>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}
