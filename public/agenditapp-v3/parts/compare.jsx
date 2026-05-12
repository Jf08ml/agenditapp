function Compare({ lang }) {
  const t = COPY[lang].compare;
  const plans = COPY[lang].pricing.plans;
  const cell = (v, highlight) => {
    if (v === true) return (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="10" fill={highlight?'rgba(37,211,102,0.18)':'rgba(37,211,102,0.12)'}/><path d="M6 10l3 3 5-6" stroke="var(--wa-deep)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    );
    if (v === false) return <span style={{ color:'#C7CCD6', fontSize:20, fontWeight:300 }}>—</span>;
    return <span style={{ fontSize:12.5, fontWeight:600, color: highlight?'var(--blue-deep)':'var(--ink-2)' }}>{v}</span>;
  };
  return (
    <section id="compare" style={{ padding:'80px 0 100px' }}>
      <div className="container">
        <SectionHead eyebrow={t.eyebrow} title={t.h2} sub={t.sub}/>
        <div className="reveal" style={{
          marginTop:48, background:'white', borderRadius:20, border:'1px solid var(--line)',
          boxShadow:'var(--shadow-sm)', overflow:'hidden',
        }}>
          {/* Header */}
          <div className="compare-row compare-head" style={headStyle}>
            <div style={{ fontSize:12, fontWeight:700, color:'var(--muted)', textTransform:'uppercase', letterSpacing:'0.06em' }}>{lang==='es'?'Funcionalidad':'Feature'}</div>
            {plans.map((p, i) => (
              <div key={i} style={{
                textAlign:'center',
                background: p.highlight ? 'var(--blue-deep)' : 'transparent',
                color: p.highlight ? 'white' : 'var(--ink)',
                padding: p.highlight ? '14px 12px' : '8px 12px',
                margin: p.highlight ? '-22px -1px -22px' : 0,
                borderRadius: p.highlight ? '12px 12px 0 0' : 0,
                position:'relative',
              }}>
                <div style={{ fontSize:11, fontWeight:700, opacity: p.highlight?0.8:0.55, color: p.highlight?'rgba(255,255,255,0.85)':'var(--muted)', textTransform:'uppercase', letterSpacing:'0.06em', marginBottom:4 }}>{p.tag}</div>
                <div style={{ fontSize:15, fontWeight:800, letterSpacing:'-0.01em' }}>{p.name}</div>
                <div style={{ fontSize:11.5, opacity:0.7, marginTop:2 }}>${p.price} USD / {lang==='es'?'mes':'mo'}</div>
              </div>
            ))}
          </div>
          {/* Groups */}
          {t.groups.map((g, gi) => (
            <div key={gi}>
              <div style={{
                padding:'14px 24px', background:'var(--bg)', borderTop:'1px solid var(--line)', borderBottom:'1px solid var(--line)',
                fontSize:11.5, fontWeight:700, color:'var(--ink-2)', textTransform:'uppercase', letterSpacing:'0.08em',
              }}>{g.title}</div>
              {g.rows.map((r, ri) => (
                <div key={ri} className="compare-row" style={{
                  ...rowStyle,
                  borderBottom: ri === g.rows.length-1 && gi === t.groups.length-1 ? 'none' : '1px solid var(--line)',
                }}>
                  <div style={{ fontSize:13.5, color:'var(--ink-2)' }}>{r.f}</div>
                  {r.v.map((v, vi) => (
                    <div key={vi} style={{
                      display:'grid', placeItems:'center',
                      background: plans[vi].highlight ? 'rgba(232,240,255,0.4)' : 'transparent',
                    }}>{cell(v, plans[vi].highlight)}</div>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
        <p className="reveal" style={{
          marginTop:24, textAlign:'center', fontSize:14, color:'var(--ink-2)',
          background:'oklch(0.96 0.04 60)', padding:'14px 20px', borderRadius:12,
          border:'1px solid oklch(0.88 0.06 60)', maxWidth:760, marginLeft:'auto', marginRight:'auto',
        }}>💡 {t.tip}</p>
      </div>
      <style>{`
        .compare-row { display: grid; grid-template-columns: 1.6fr 1fr 1fr 1fr; gap: 12px; padding: 16px 24px; align-items: center; }
        .compare-head { padding-top: 22px; padding-bottom: 22px; }
        @media (max-width: 760px) {
          .compare-row { grid-template-columns: 1.4fr 0.8fr 0.8fr 0.8fr; padding: 14px 12px; font-size: 12px; }
          .compare-row > div:first-child { font-size: 12px !important; }
        }
      `}</style>
    </section>
  );
}
const headStyle = { display:'grid', gridTemplateColumns:'1.6fr 1fr 1fr 1fr', gap:12, padding:'22px 24px', alignItems:'flex-end' };
const rowStyle = { display:'grid', gridTemplateColumns:'1.6fr 1fr 1fr 1fr', gap:12, padding:'16px 24px', alignItems:'center' };
window.Compare = Compare;
