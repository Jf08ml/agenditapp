function Pillars({ lang }) {
  const t = COPY[lang].pillars;
  const icons = [
    <svg key="0" width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M4 22V10M10 22V4M16 22V14M22 22V8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/></svg>,
    <svg key="1" width="28" height="28" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="2.5"/><path d="M14 8v6l4 3" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/></svg>,
    <svg key="2" width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M14 3l3 7 7 .8-5 4.7 1.4 7-6.4-3.6L7.6 22.5 9 15.5 4 10.8 11 10z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" fill="none"/></svg>,
  ];
  const tones = [
    { c:'var(--blue)', bg:'var(--blue-soft)' },
    { c:'var(--wa-deep)', bg:'rgba(37,211,102,0.12)' },
    { c:'var(--warm-deep)', bg:'oklch(0.96 0.04 60)' },
  ];
  return (
    <section id="pillars" style={{ padding:'100px 0', background:'white', borderTop:'1px solid var(--line)', borderBottom:'1px solid var(--line)' }}>
      <div className="container">
        <SectionHead eyebrow={t.eyebrow} title={t.h2} sub={t.sub}/>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:20, marginTop:56 }} className="pillars-grid">
          {t.items.map((it, i) => (
            <div key={i} className="reveal" style={{
              padding:32, borderRadius:20, border:'1px solid var(--line)', background:'var(--bg)',
              display:'flex', flexDirection:'column', gap:14,
            }}>
              <div style={{ width:56, height:56, borderRadius:14, background:tones[i].bg, color:tones[i].c, display:'grid', placeItems:'center' }}>{icons[i]}</div>
              <div style={{ fontSize:11, fontWeight:700, color:tones[i].c, textTransform:'uppercase', letterSpacing:'0.06em' }}>{it.kicker}</div>
              <h3 style={{ fontSize:24, fontWeight:700, margin:0, letterSpacing:'-0.02em', lineHeight:1.15, textWrap:'balance' }}>{it.t}</h3>
              <p style={{ fontSize:15, color:'var(--muted)', margin:0, lineHeight:1.55 }}>{it.d}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media (max-width: 900px) { .pillars-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}
window.Pillars = Pillars;
