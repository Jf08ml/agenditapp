import ExternalLink from "../components/ui/ExternalLink";
import { WHATSAPP_HREF } from "../components/constants";

export default function Precio() {
  return (
    <section id="precio" className="px-6 py-12 max-w-6xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold">Precio</h2>
      <div className="mt-6 p-6 rounded-2xl border border-slate-800 bg-slate-900/30">
        <p className="text-4xl font-extrabold">
          100.000 COP{" "}
          <span className="text-base font-normal text-slate-400">/mes</span>
        </p>
        <ul className="mt-4 grid gap-2 text-slate-300">
          <li>✓ Página personalizada (dominio o subdominio)</li>
          <li>✓ Uso completo de la plataforma (reservas ilimitadas)</li>
          <li>✓ Panel administrativo</li>
          <li>✓ Recordatorios automáticos por WhatsApp</li>
          <li>✓ Landing de bienvenida</li>
          <li>✓ Soporte básico</li>
          <li>Sin cláusulas ni permanencias</li>
        </ul>
        <div className="mt-6 flex gap-3 flex-wrap">
          <ExternalLink
            href={WHATSAPP_HREF}
            className="px-5 py-3 rounded-xl bg-sky-400 text-black font-bold"
          >
            Solicitar demo por WhatsApp
          </ExternalLink>
          <ExternalLink
            href="#faq"
            className="px-5 py-3 rounded-xl border border-slate-600"
          >
            Preguntas frecuentes
          </ExternalLink>
        </div>
      </div>
    </section>
  );
}
