export default function FAQ() {
  return (
    <section id="faq" className="px-6 py-12 max-w-6xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold">Preguntas frecuentes</h2>
      <div className="mt-6 grid gap-4">
        <details className="p-4 rounded-2xl border border-slate-800 bg-slate-900/30">
          <summary className="font-semibold">
            ¿Puedo cancelar cuando quiera?
          </summary>
          <p className="mt-2 text-slate-300">Sí, es mes a mes.</p>
        </details>
        <details className="p-4 rounded-2xl border border-slate-800 bg-slate-900/30">
          <summary className="font-semibold">
            ¿Los recordatorios salen desde mi número?
          </summary>
          <p className="mt-2 text-slate-300">
            Sí, configuramos el envío con tu línea.
          </p>
        </details>
        <details className="p-4 rounded-2xl border border-slate-800 bg-slate-900/30">
          <summary className="font-semibold">¿Necesito instalar algo?</summary>
          <p className="mt-2 text-slate-300">No. Todo funciona en la web.</p>
        </details>
      </div>
    </section>
  );
}
