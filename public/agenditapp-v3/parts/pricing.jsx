function Pricing({ lang }) {
  const t = COPY[lang].pricing;
  const [yearly, setYearly] = useState(false);
  return (
    <section id="pricing" style={{ padding:'100px 0' }}>
      <div className="container">
        <SectionHead eyebrow={t.eyebrow} title={t.h2} sub={t.sub} />
        <div className="reveal" style={{ display:'flex', justifyContent:'center', marginTop:32 }}>
          <div style={{ display:'inline-flex', background:'white', border:'1px solid var(--line)', borderRadius:999, padding:4 }}>
            <button onClick={() => setYearly(false)} style={tabBtn(!yearly)}>{t.monthly}</button>
            <button onClick={() => setYearly(true)} style={tabBtn(yearly)}>
              {t.yearly}
              <span style={{ marginLeft:8, background:'var(--wa)', color:'white', padding:'2px 8px', borderRadius:999, fontSize:10, fontWeight:700 }}>−17%</span>
            </button>
          </div>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:18, marginTop:40 }} className="pricing-grid">
          {t.plans.map((p, i) => {
            const price = yearly ? Math.round(p.price * 10) : p.price;
            return (
              <div key={i} className="reveal" style={{
                background: p.highlight ? 'linear-gradient(180deg, var(--blue-deep) 0%, #0A2A6B 100%)' : 'white',
                color: p.highlight ? 'white' : 'var(--ink)',
                border: p.highlight ? '1px solid var(--blue-deep)' : '1px solid var(--line)',
                borderRadius:20, padding:32, position:'relative',
                boxShadow: p.highlight ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
                transform: p.highlight ? 'scale(1.02)' : 'none',
              }}>
                {p.highlight && (
                  <div style={{
                    position:'absolute', top:-12, left:'50%', transform:'translateX(-50%)',
                    background:'var(--warm-deep)', color:'white', padding:'6px 14px', borderRadius:999,
                    fontSize:11, fontWeight:700, letterSpacing:'0.04em', textTransform:'uppercase',
                  }}>{p.tag}</div>
                )}
                <div style={{ fontSize:13, fontWeight:600, opacity: p.highlight?0.7:0.6, color: p.highlight?'rgba(255,255,255,0.8)':'var(--muted)' }}>{!p.highlight && p.tag}</div>
                <h3 style={{ fontSize:24, fontWeight:700, margin:'4px 0 8px', letterSpacing:'-0.02em' }}>{p.name}</h3>
                <p style={{ fontSize:13, color: p.highlight?'rgba(255,255,255,0.7)':'var(--muted)', margin:'0 0 20px', minHeight:40 }}>{p.desc}</p>
                <div style={{ display:'flex', alignItems:'baseline', gap:6, marginBottom:6 }}>
                  <span style={{ fontSize:'clamp(36px, 5vw, 52px)', fontWeight:800, letterSpacing:'-0.03em', lineHeight:1 }}>${price}</span>
                  <span style={{ fontSize:14, opacity:0.7 }}>USD / {yearly?(lang==='es'?'año':'year'):(lang==='es'?'mes':'mo')}</span>
                </div>
                <div style={{ fontSize:12, color: p.highlight?'rgba(255,255,255,0.6)':'var(--muted)', marginBottom:24 }}>
                  {yearly ? (lang==='es'?'2 meses gratis · facturación anual':'2 months free · billed yearly') : (lang==='es'?'sin permanencia':'no commitment')}
                </div>
                <button style={{
                  width:'100%', padding:'13px', borderRadius:12, border:'none', cursor:'pointer',
                  background: p.highlight ? 'white' : 'var(--ink)',
                  color: p.highlight ? 'var(--blue-deep)' : 'white',
                  fontSize:14, fontWeight:700, fontFamily:'inherit',
                  marginBottom:24, transition:'transform .15s',
                }}
                onMouseEnter={e => e.currentTarget.style.transform='translateY(-1px)'}
                onMouseLeave={e => e.currentTarget.style.transform='none'}
                >{t.cta}</button>
                <ul style={{ listStyle:'none', padding:0, margin:0, display:'flex', flexDirection:'column', gap:11 }}>
                  {p.features.map((f, j) => (
                    <li key={j} style={{ display:'grid', gridTemplateColumns:'18px 1fr', gap:10, fontSize:13.5, lineHeight:1.5, color: p.highlight?'rgba(255,255,255,0.92)':'var(--ink-2)' }}>
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ marginTop:2 }}>
                        <circle cx="9" cy="9" r="9" fill={p.highlight?'rgba(37,211,102,0.25)':'rgba(37,211,102,0.15)'}/>
                        <path d="M5 9l3 3 5-6" stroke="var(--wa)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
        <p className="reveal" style={{ textAlign:'center', marginTop:32, fontSize:13, color:'var(--muted)' }}>
          <span style={{ display:'inline-flex', alignItems:'center', gap:6 }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7l3 3 5-6" stroke="var(--wa-deep)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            {t.guarantee}
          </span>
        </p>
      </div>
      <style>{`@media (max-width: 920px) { .pricing-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}

function tabBtn(active) {
  return {
    padding:'10px 18px', fontSize:13, fontWeight:600, fontFamily:'inherit',
    border:'none', borderRadius:999, cursor:'pointer',
    background: active ? 'var(--ink)' : 'transparent',
    color: active ? 'white' : 'var(--muted)',
    transition:'all .15s',
    display:'inline-flex', alignItems:'center',
  };
}
window.Pricing = Pricing;
