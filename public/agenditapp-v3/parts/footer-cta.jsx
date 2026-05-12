function FooterCTA({ lang }) {
  const t = COPY[lang].finalCta;
  const f = COPY[lang].footer;
  return (
    <>
      <section style={{ padding:'80px 0', position:'relative', overflow:'hidden' }}>
        <div className="container">
          <div className="reveal" style={{
            background:'linear-gradient(135deg, var(--blue) 0%, var(--blue-deep) 60%, oklch(0.45 0.18 280) 100%)',
            color:'white', borderRadius:28, padding:'64px 48px', textAlign:'center',
            position:'relative', overflow:'hidden',
          }}>
            <div aria-hidden style={{ position:'absolute', inset:0, opacity:0.5,
              backgroundImage:'radial-gradient(circle at 20% 30%, rgba(255,255,255,0.12), transparent 40%), radial-gradient(circle at 80% 70%, rgba(37,211,102,0.18), transparent 50%)' }}/>
            <div style={{ position:'relative' }}>
              <Eyebrow tone="wa">{t.eyebrow}</Eyebrow>
              <h2 style={{ fontSize:'clamp(32px, 5vw, 56px)', lineHeight:1.05, letterSpacing:'-0.025em', margin:'20px auto 16px', fontWeight:700, textWrap:'balance', maxWidth:780 }}>{t.h2}</h2>
              <p style={{ fontSize:18, color:'rgba(255,255,255,0.8)', maxWidth:560, margin:'0 auto 32px' }}>{t.sub}</p>
              <div style={{ display:'flex', gap:12, justifyContent:'center', flexWrap:'wrap' }}>
                <PrimaryBtn size="lg" tone="warm">{t.cta1}</PrimaryBtn>
                <button style={{
                  padding:'16px 26px', borderRadius:12, border:'1.5px solid rgba(255,255,255,0.3)',
                  background:'rgba(255,255,255,0.08)', color:'white', fontSize:16, fontWeight:600, fontFamily:'inherit', cursor:'pointer',
                  backdropFilter:'blur(8px)',
                }}>{t.cta2}</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer style={{ padding:'56px 0 32px', background:'var(--ink)', color:'rgba(255,255,255,0.7)' }}>
        <div className="container">
          <div style={{ display:'grid', gridTemplateColumns:'1.4fr 1fr 1fr 1fr', gap:32, paddingBottom:32, borderBottom:'1px solid rgba(255,255,255,0.1)' }} className="footer-grid">
            <div>
              <div style={{ display:'flex', alignItems:'center', gap:8, marginBottom:14 }}>
                <Logo/>
                <span style={{ fontWeight:700, fontSize:18, color:'white', letterSpacing:'-0.02em' }}>AgenditApp</span>
              </div>
              <p style={{ fontSize:14, lineHeight:1.6, margin:'0 0 16px', maxWidth:320 }}>{f.tagline}</p>
              <div style={{ fontSize:12, color:'rgba(255,255,255,0.5)' }}>🌎 {f.regions}</div>
            </div>
            {f.cols.map((col, i) => (
              <div key={i}>
                <div style={{ fontSize:12, color:'white', fontWeight:700, textTransform:'uppercase', letterSpacing:'0.06em', marginBottom:14 }}>{col.t}</div>
                <ul style={{ listStyle:'none', padding:0, margin:0, display:'flex', flexDirection:'column', gap:10 }}>
                  {col.l.map((l, j) => <li key={j}><a href="#" style={{ fontSize:14, color:'rgba(255,255,255,0.7)' }}>{l}</a></li>)}
                </ul>
              </div>
            ))}
          </div>
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', paddingTop:24, fontSize:12, color:'rgba(255,255,255,0.5)' }} className="footer-bottom">
            <div>{f.copy}</div>
          </div>
        </div>
        <style>{`
          @media (max-width: 820px) { .footer-grid { grid-template-columns: 1fr 1fr !important; } }
          @media (max-width: 520px) { .footer-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </footer>
    </>
  );
}
window.FooterCTA = FooterCTA;
