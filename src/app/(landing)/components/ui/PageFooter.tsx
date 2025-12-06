import Link from "next/link";
import { WHATSAPP_HREF } from "../constants";

export default function PageFooter() {
  return (
    <footer className="border-t border-white/10 bg-slate-900/30 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Columna 1: Sobre AgenditApp */}
          <div>
            <h3 className="text-white font-bold mb-4">AgenditApp</h3>
            <p className="text-slate-400 text-sm">
              Software de agendamiento inteligente para negocios de servicios.
              Automatiza reservas y crece sin complicaciones.
            </p>
          </div>

          {/* Columna 2: Sectores */}
          <div>
            <h3 className="text-white font-bold mb-4">Sectores</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/sectores/salones-belleza" className="text-slate-400 hover:text-sky-400 transition-colors">
                  Salones de Belleza
                </Link>
              </li>
              <li>
                <Link href="/sectores/barberias" className="text-slate-400 hover:text-sky-400 transition-colors">
                  Barberías
                </Link>
              </li>
              <li>
                <Link href="/sectores/spas" className="text-slate-400 hover:text-sky-400 transition-colors">
                  Spas y Bienestar
                </Link>
              </li>
              <li>
                <Link href="/sectores/consultorios" className="text-slate-400 hover:text-sky-400 transition-colors">
                  Consultorios
                </Link>
              </li>
              <li>
                <Link href="/sectores" className="text-slate-400 hover:text-sky-400 transition-colors">
                  Ver todos →
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 3: Recursos */}
          <div>
            <h3 className="text-white font-bold mb-4">Recursos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/funcionalidades" className="text-slate-400 hover:text-sky-400 transition-colors">
                  Funcionalidades
                </Link>
              </li>
              <li>
                <Link href="/precios" className="text-slate-400 hover:text-sky-400 transition-colors">
                  Planes y Precios
                </Link>
              </li>
              <li>
                <a href={WHATSAPP_HREF} className="text-slate-400 hover:text-sky-400 transition-colors">
                  Solicitar Demo
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 4: Legal */}
          <div>
            <h3 className="text-white font-bold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/terminos" className="text-slate-400 hover:text-sky-400 transition-colors">
                  Términos y Condiciones
                </Link>
              </li>
              <li>
                <Link href="/privacidad" className="text-slate-400 hover:text-sky-400 transition-colors">
                  Política de Privacidad
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} AgenditApp. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4">
            <a
              href={WHATSAPP_HREF}
              className="text-sm text-slate-400 hover:text-sky-400 transition-colors"
            >
              💬 Soporte por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
