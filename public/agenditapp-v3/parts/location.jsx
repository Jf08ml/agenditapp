function Location({ lang }) {
  const t = COPY[lang].location;
  return (
    <section id="location" style={{ padding:'100px 0', background:'white', borderTop:'1px solid var(--line)', borderBottom:'1px solid var(--line)' }}>
      <div className="container">
        <div style={{ display:'grid', gridTemplateColumns:'1.05fr 1fr', gap:64, alignItems:'center' }} className="location-grid">
          {/* Mock map card */}
          <div className="reveal" style={{
            position:'relative', borderRadius:24, overflow:'hidden', border:'1px solid var(--line)',
            boxShadow:'var(--shadow-lg)', aspectRatio:'4/3', background:'#EAEEF3',
          }}>
            {/* Faux map */}
            <svg width="100%" height="100%" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" style={{ display:'block' }}>
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M40 0H0V40" fill="none" stroke="#D9DFE6" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width="400" height="300" fill="#EEF2F6"/>
              <rect width="400" height="300" fill="url(#grid)"/>
              {/* streets */}
              <path d="M0 120 L400 110" stroke="#C9D2DC" strokeWidth="14" strokeLinecap="round"/>
              <path d="M0 120 L400 110" stroke="white" strokeWidth="10" strokeLinecap="round"/>
              <path d="M0 220 L400 215" stroke="#C9D2DC" strokeWidth="10" strokeLinecap="round"/>
              <path d="M0 220 L400 215" stroke="white" strokeWidth="6" strokeLinecap="round"/>
              <path d="M180 0 L185 300" stroke="#C9D2DC" strokeWidth="12" strokeLinecap="round"/>
              <path d="M180 0 L185 300" stroke="white" strokeWidth="8" strokeLinecap="round"/>
              <path d="M310 0 L315 300" stroke="#C9D2DC" strokeWidth="8" strokeLinecap="round"/>
              <path d="M310 0 L315 300" stroke="white" strokeWidth="4" strokeLinecap="round"/>
              {/* parks */}
              <rect x="20" y="140" width="120" height="60" rx="8" fill="#D6E8D0"/>
              <rect x="220" y="140" width="70" height="60" rx="8" fill="#D6E8D0"/>
              {/* buildings */}
              <rect x="20" y="20" width="60" height="80" rx="4" fill="#DEE5EC"/>
              <rect x="90" y="30" width="80" height="70" rx="4" fill="#DEE5EC"/>
              <rect x="220" y="20" width="80" height="80" rx="4" fill="#DEE5EC"/>
              <rect x="320" y="30" width="60" height="70" rx="4" fill="#DEE5EC"/>
              <rect x="20" y="230" width="140" height="60" rx="4" fill="#DEE5EC"/>
              <rect x="200" y="230" width="100" height="60" rx="4" fill="#DEE5EC"/>
              <rect x="320" y="230" width="60" height="60" rx="4" fill="#DEE5EC"/>
            </svg>
            {/* Pin */}
            <div style={{ position:'absolute', left:'50%', top:'48%', transform:'translate(-50%, -100%)', display:'flex', flexDirection:'column', alignItems:'center', gap:4 }}>
              <div style={{
                background:'white', padding:'8px 12px', borderRadius:10, boxShadow:'0 6px 20px rgba(11,18,32,0.18)',
                fontSize:12, fontWeight:700, color:'var(--ink)', whiteSpace:'nowrap',
                border:'1px solid var(--line)',
              }}>📍 {t.sample.biz}</div>
              <div style={{
                width:0, height:0,
                borderLeft:'6px solid transparent', borderRight:'6px solid transparent',
                borderTop:'8px solid white',
                filter:'drop-shadow(0 2px 1px rgba(11,18,32,0.12))',
              }}/>
              <div style={{
                width:18, height:18, borderRadius:99, background:'var(--blue)', border:'4px solid white',
                boxShadow:'0 4px 12px rgba(30,107,255,0.5), 0 0 0 0 rgba(30,107,255,0.5)',
                animation:'pulse-dot 2s ease-out infinite',
              }}/>
            </div>
            {/* Address card */}
            <div style={{
              position:'absolute', left:16, right:16, bottom:16,
              background:'white', borderRadius:14, padding:14, display:'grid',
              gridTemplateColumns:'1fr auto', alignItems:'center', gap:12,
              border:'1px solid var(--line)', boxShadow:'var(--shadow-md)',
            }}>
              <div>
                <div style={{ fontSize:11, color:'var(--muted)', textTransform:'uppercase', letterSpacing:'0.08em', fontWeight:600 }}>{lang==='es'?'Dirección':'Address'}</div>
                <div style={{ fontSize:13.5, fontWeight:600, marginTop:2 }}>{t.sample.addr}</div>
              </div>
              <button style={{
                background:'var(--ink)', color:'white', border:'none', padding:'10px 14px',
                borderRadius:10, fontSize:12.5, fontWeight:700, fontFamily:'inherit', cursor:'pointer',
                display:'inline-flex', alignItems:'center', gap:6,
              }}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                {t.sample.cta}
              </button>
            </div>
          </div>
          <div>
            <SectionHead eyebrow={t.eyebrow} title={t.h2} sub={t.sub} align="left"/>
            <div style={{ display:'flex', flexDirection:'column', gap:18, marginTop:32 }}>
              {t.items.map((it, i) => (
                <div key={i} className="reveal" style={{ display:'grid', gridTemplateColumns:'40px 1fr', gap:14 }}>
                  <div style={{ width:40, height:40, borderRadius:10, background:'var(--blue-soft)', color:'var(--blue)', display:'grid', placeItems:'center', fontSize:18, fontWeight:700 }}>0{i+1}</div>
                  <div>
                    <strong style={{ fontSize:15.5, letterSpacing:'-0.01em' }}>{it.t}</strong>
                    <p style={{ fontSize:14, color:'var(--muted)', margin:'4px 0 0', lineHeight:1.5 }}>{it.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style>{`@media (max-width: 920px) { .location-grid { grid-template-columns: 1fr !important; gap: 40px !important; } }`}</style>
    </section>
  );
}
window.Location = Location;
