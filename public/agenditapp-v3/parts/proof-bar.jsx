function ProofBar({ lang }) {
  const t = COPY[lang].proof;
  const logos = ['Estudio Rosa','Barbería El Don','Spa Lumen','Lashes by Vale','Studio Pílates','Dr. Marín'];
  return (
    <section style={{ borderTop:'1px solid var(--line)', borderBottom:'1px solid var(--line)', background:'white', padding:'40px 0' }}>
      <div className="container">
        <div style={{ display:'grid', gridTemplateColumns:'auto 1fr', gap:48, alignItems:'center' }} className="proof-grid">
          <div style={{ display:'grid', gridTemplateColumns:'repeat(4, auto)', gap:32 }}>
            {t.stats.map((s, i) => (
              <div key={i} className="reveal">
                <div style={{ fontSize:30, fontWeight:800, letterSpacing:'-0.03em', color:'var(--blue-deep)' }}>{s.n}</div>
                <div style={{ fontSize:12, color:'var(--muted)', textTransform:'uppercase', letterSpacing:'0.06em', fontWeight:600 }}>{s.l}</div>
              </div>
            ))}
          </div>
          <div style={{ position:'relative', overflow:'hidden', maskImage:'linear-gradient(90deg, transparent, black 10%, black 90%, transparent)', WebkitMaskImage:'linear-gradient(90deg, transparent, black 10%, black 90%, transparent)' }}>
            <div style={{ display:'flex', gap:48, animation:'ticker 30s linear infinite', whiteSpace:'nowrap' }}>
              {[...logos, ...logos].map((l, i) => (
                <span key={i} style={{ fontSize:18, fontWeight:600, color:'var(--muted)', letterSpacing:'-0.01em', fontFamily: i%2 ? "'Instrument Serif', serif" : 'Inter', fontStyle: i%2 ? 'italic' : 'normal' }}>{l}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style>{`@media (max-width: 820px) { .proof-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}
window.ProofBar = ProofBar;
