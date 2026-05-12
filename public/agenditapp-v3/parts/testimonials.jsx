function Testimonials({ lang }) {
  const t = COPY[lang].test;
  return (
    <section id="testimonials" style={{ padding:'100px 0' }}>
      <div className="container">
        <SectionHead eyebrow={t.eyebrow} title={t.h2} />
        <div style={{ display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:20, marginTop:56 }} className="test-grid">
          {t.items.map((it, i) => (
            <div key={i} className="reveal" style={{
              background:'white', border:'1px solid var(--line)', borderRadius:18,
              padding:28, position:'relative', display:'flex', flexDirection:'column',
            }}>
              <div style={{
                position:'absolute', top:18, right:20, fontSize:60, fontFamily:"'Instrument Serif', serif",
                color:'var(--blue-soft)', lineHeight:1, fontStyle:'italic',
              }}>"</div>
              <div style={{ display:'inline-flex', alignItems:'baseline', gap:8, marginBottom:18 }}>
                <span style={{ fontSize:30, fontWeight:800, color:'var(--blue)', letterSpacing:'-0.03em' }}>{it.stat}</span>
                <span style={{ fontSize:12, color:'var(--muted)', fontWeight:600 }}>{it.statLabel}</span>
              </div>
              <p style={{ fontSize:15.5, color:'var(--ink-2)', lineHeight:1.55, margin:0, flex:1, fontFamily:"'Instrument Serif', serif", fontStyle:'italic' }}>"{it.q}"</p>
              <div style={{ display:'flex', alignItems:'center', gap:12, marginTop:24, paddingTop:20, borderTop:'1px solid var(--line)' }}>
                <div style={{ width:40, height:40, borderRadius:'50%', background:'linear-gradient(135deg, var(--blue), oklch(0.62 0.2 260))', display:'grid', placeItems:'center', color:'white', fontWeight:700, fontSize:14 }}>
                  {it.n.split(' ').map(p => p[0]).slice(0,2).join('')}
                </div>
                <div>
                  <div style={{ fontSize:14, fontWeight:700 }}>{it.n}</div>
                  <div style={{ fontSize:12, color:'var(--muted)' }}>{it.r}</div>
                  <div style={{ fontSize:11, color:'var(--muted)', marginTop:2 }}>📍 {it.loc}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media (max-width: 920px) { .test-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}
window.Testimonials = Testimonials;
