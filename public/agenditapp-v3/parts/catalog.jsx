function Catalog({ lang }) {
  const t = COPY[lang].catalog;
  const cats = [...new Set(t.sample.map(s => s.cat))];
  const [activeCat, setActiveCat] = useState(cats[0]);
  return (
    <section id="catalog" style={{ padding:'100px 0' }}>
      <div className="container">
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1.05fr', gap:64, alignItems:'center' }} className="catalog-grid">
          <div>
            <SectionHead eyebrow={t.eyebrow} title={t.h2} sub={t.sub} align="left"/>
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:18, marginTop:32 }}>
              {t.items.map((it, i) => (
                <div key={i} className="reveal" style={{ display:'flex', flexDirection:'column', gap:6 }}>
                  <div style={{ display:'flex', alignItems:'center', gap:8 }}>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <circle cx="9" cy="9" r="9" fill="var(--blue-soft)"/>
                      <path d="M5 9l3 3 5-6" stroke="var(--blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <strong style={{ fontSize:14.5, letterSpacing:'-0.01em' }}>{it.t}</strong>
                  </div>
                  <p style={{ fontSize:13.5, color:'var(--muted)', margin:0, lineHeight:1.5, paddingLeft:26 }}>{it.d}</p>
                </div>
              ))}
            </div>
          </div>
          {/* Mock menú */}
          <div className="reveal" style={{
            background:'white', border:'1px solid var(--line)', borderRadius:24,
            boxShadow:'var(--shadow-lg)', padding:24, position:'relative', overflow:'hidden',
          }}>
            <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:18 }}>
              <div>
                <div style={{ fontSize:11, color:'var(--muted)', textTransform:'uppercase', letterSpacing:'0.08em', fontWeight:600 }}>estudiorosa.agenditapp.com</div>
                <div style={{ fontSize:18, fontWeight:700, marginTop:2, letterSpacing:'-0.02em' }}>{lang==='es'?'Servicios':'Services'}</div>
              </div>
              <div style={{ display:'flex', gap:6 }}>
                {[1,2,3].map(i => <div key={i} style={{ width:6, height:6, borderRadius:99, background:'var(--line)' }}/>)}
              </div>
            </div>
            <div style={{ display:'flex', gap:8, marginBottom:14, overflowX:'auto', paddingBottom:4 }}>
              {cats.map(c => (
                <button key={c} onClick={() => setActiveCat(c)} style={{
                  padding:'7px 14px', borderRadius:999, border:'1px solid var(--line)', fontSize:12.5, fontWeight:600,
                  background: activeCat===c ? 'var(--ink)' : 'white',
                  color: activeCat===c ? 'white' : 'var(--ink-2)',
                  fontFamily:'inherit', whiteSpace:'nowrap', cursor:'pointer', transition:'all .15s',
                }}>{c}</button>
              ))}
            </div>
            <div style={{ display:'flex', flexDirection:'column', gap:10 }}>
              {t.sample.filter(s => s.cat === activeCat).map((s, i) => (
                <div key={i} style={{
                  display:'grid', gridTemplateColumns:'1fr auto', gap:12, alignItems:'center',
                  padding:'14px 16px', background:'var(--bg)', borderRadius:14, border:'1px solid var(--line)',
                  animation: 'float-up .4s ease both', animationDelay: `${i*60}ms`,
                }}>
                  <div>
                    <div style={{ fontSize:14.5, fontWeight:700, letterSpacing:'-0.01em' }}>{s.name}</div>
                    <div style={{ fontSize:12, color:'var(--muted)', marginTop:2 }}>{s.dur}</div>
                  </div>
                  <div style={{ fontSize:15, fontWeight:700, color:'var(--blue)', letterSpacing:'-0.01em' }}>{s.price}</div>
                </div>
              ))}
            </div>
            <button style={{
              width:'100%', marginTop:14, padding:'13px', borderRadius:12, border:'none', cursor:'pointer',
              background:'var(--blue)', color:'white', fontSize:14, fontWeight:700, fontFamily:'inherit',
            }}>{lang==='es'?'Reservar este servicio':'Book this service'}</button>
          </div>
        </div>
      </div>
      <style>{`@media (max-width: 920px) { .catalog-grid { grid-template-columns: 1fr !important; gap: 40px !important; } }`}</style>
    </section>
  );
}
window.Catalog = Catalog;
