function Hero({ lang, accent }) {
  const t = COPY[lang].hero;
  return (
    <section style={{ position:'relative', overflow:'hidden', paddingTop: 40, paddingBottom: 80 }}>
      <BgGrid />
      <BgBlobs accent={accent} />
      <div className="container" style={{ position:'relative', zIndex:1 }}>
        <div style={{ display:'grid', gridTemplateColumns:'1.05fr 0.95fr', gap:56, alignItems:'center' }} className="hero-grid">
          <div className="reveal">
            <Eyebrow tone="warm">{t.pill}</Eyebrow>
            <h1 style={{
              fontSize:'clamp(40px, 6vw, 76px)', lineHeight:1.02,
              letterSpacing:'-0.035em', margin:'20px 0 0', fontWeight:800, textWrap:'balance'
            }}>
              <span>{t.h1a}</span><br/>
              <span style={{
                background:'linear-gradient(95deg, var(--blue) 0%, oklch(0.62 0.2 260) 50%, var(--warm-deep) 100%)',
                WebkitBackgroundClip:'text', backgroundClip:'text', color:'transparent',
              }}>{t.h1b}</span><br/>
              <span style={{ fontFamily:"'Instrument Serif', serif", fontStyle:'italic', fontWeight:400, letterSpacing:'-0.01em' }}>{t.h1c}</span>
            </h1>
            <p style={{ fontSize:19, color:'var(--ink-2)', maxWidth:560, marginTop:24, lineHeight:1.55, textWrap:'pretty' }}>{t.sub}</p>
            <div style={{ display:'flex', gap:12, marginTop:32, flexWrap:'wrap' }}>
              <PrimaryBtn size="lg" tone="blue">
                <span style={{ display:'inline-flex', alignItems:'center', gap:8 }}>
                  {t.cta1}
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10m0 0L9 4m4 4l-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
              </PrimaryBtn>
              <GhostBtn size="lg">
                <span style={{ display:'inline-flex', alignItems:'center', gap:8 }}>
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M5 3v10l8-5-8-5z" fill="currentColor"/></svg>
                  {t.cta2}
                </span>
              </GhostBtn>
            </div>
            <p style={{ fontSize:13, color:'var(--muted)', marginTop:16 }}>
              <span style={{ display:'inline-flex', alignItems:'center', gap:6 }}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7l3 3 5-6" stroke="var(--wa-deep)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                {t.micro}
              </span>
            </p>
          </div>
          <div className="reveal" style={{ position:'relative' }}>
            <HeroMockup lang={lang} />
            <LiveBookingBadge lang={lang} />
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 920px) { .hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; } }
      `}</style>
    </section>
  );
}

function BgGrid() {
  return (
    <div aria-hidden style={{
      position:'absolute', inset:0, opacity:0.5,
      backgroundImage: 'linear-gradient(var(--line) 1px, transparent 1px), linear-gradient(90deg, var(--line) 1px, transparent 1px)',
      backgroundSize: '56px 56px',
      maskImage: 'radial-gradient(ellipse 70% 60% at 50% 30%, black 30%, transparent 75%)',
      WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 30%, black 30%, transparent 75%)',
    }}/>
  );
}
function BgBlobs({ accent }) {
  return (
    <>
      <div aria-hidden style={{ position:'absolute', top:-100, right:-150, width:500, height:500, borderRadius:'50%',
        background:'radial-gradient(circle, var(--blue-soft) 0%, transparent 65%)', filter:'blur(20px)' }}/>
      <div aria-hidden style={{ position:'absolute', top:200, left:-200, width:480, height:480, borderRadius:'50%',
        background:`radial-gradient(circle, ${accent} 0%, transparent 60%)`, opacity:0.18, filter:'blur(40px)' }}/>
    </>
  );
}

function HeroMockup({ lang }) {
  const isES = lang === 'es';
  const days = isES ? ['Lun','Mar','Mié','Jue','Vie','Sáb'] : ['Mon','Tue','Wed','Thu','Fri','Sat'];
  const events = [
    { d:0, hStart: 9, hEnd: 10.5, t: isES?'Manicure Gel':'Gel Manicure', who:'Camila R.', color:'#1E6BFF' },
    { d:1, hStart: 10, hEnd: 11, t: isES?'Corte + Barba':'Cut + Beard', who:'Andrés P.', color:'#0EA5E9' },
    { d:2, hStart: 11.5, hEnd: 12.5, t: isES?'Limpieza facial':'Facial', who:'Laura M.', color:'oklch(0.62 0.2 260)' },
    { d:3, hStart: 9.5, hEnd: 10.5, t: isES?'Pedicure':'Pedicure', who:'Sofía D.', color:'#1E6BFF' },
    { d:4, hStart: 12, hEnd: 13, t: isES?'Tinte + Corte':'Color + Cut', who:'Valeria T.', color:'oklch(0.74 0.16 50)' },
    { d:5, hStart: 10, hEnd: 12, t: isES?'Masaje 90 min':'Massage 90 min', who:'Tomás G.', color:'#10B981' },
  ];
  const startH = 9, endH = 14;
  return (
    <div style={{
      position:'relative', borderRadius:20, background:'white', boxShadow:'var(--shadow-lg)',
      border:'1px solid var(--line)', overflow:'hidden', transform:'perspective(1400px) rotateY(-4deg) rotateX(2deg)',
      transformOrigin:'center center',
    }}>
      <div style={{ display:'flex', alignItems:'center', gap:6, padding:'12px 14px', borderBottom:'1px solid var(--line)', background:'#F8FAFE' }}>
        <span style={{ width:10, height:10, borderRadius:'50%', background:'#FF5F57' }}/>
        <span style={{ width:10, height:10, borderRadius:'50%', background:'#FEBC2E' }}/>
        <span style={{ width:10, height:10, borderRadius:'50%', background:'#28C840' }}/>
        <span style={{ marginLeft:'auto', fontSize:11, color:'var(--muted)', fontFamily:'monospace' }}>app.agenditapp.com</span>
      </div>
      <div style={{ padding:16 }}>
        <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:12 }}>
          <div style={{ display:'flex', alignItems:'center', gap:10 }}>
            <div style={{ width:32, height:32, borderRadius:8, background:'var(--blue-soft)', display:'grid', placeItems:'center' }}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="2" y="3" width="12" height="11" rx="2" stroke="var(--blue)" strokeWidth="1.5"/><path d="M2 6h12" stroke="var(--blue)" strokeWidth="1.5"/></svg>
            </div>
            <div>
              <div style={{ fontWeight:700, fontSize:14 }}>{isES?'Esta semana':'This week'}</div>
              <div style={{ fontSize:11, color:'var(--muted)' }}>{isES?'12 – 17 de mayo':'May 12 – 17'}</div>
            </div>
          </div>
          <div style={{ display:'flex', gap:6 }}>
            <span style={{ background:'var(--blue)', color:'white', padding:'4px 10px', borderRadius:6, fontSize:11, fontWeight:600 }}>{isES?'Semana':'Week'}</span>
            <span style={{ background:'#F1F3F8', color:'var(--muted)', padding:'4px 10px', borderRadius:6, fontSize:11, fontWeight:600 }}>{isES?'Día':'Day'}</span>
          </div>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'40px repeat(6, 1fr)', gap:4, fontSize:10, fontWeight:600, color:'var(--muted)', marginBottom:6 }}>
          <div></div>
          {days.map(d => <div key={d} style={{ textAlign:'center', padding:'4px 0' }}>{d}</div>)}
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'40px repeat(6, 1fr)', gap:4, position:'relative' }}>
          <div style={{ display:'flex', flexDirection:'column', justifyContent:'space-between', fontSize:9, color:'var(--muted)', paddingRight:4, fontFamily:'monospace' }}>
            {[9,10,11,12,13,14].map(h => <div key={h} style={{ height:36, paddingTop:0 }}>{h}:00</div>)}
          </div>
          {days.map((_, dIdx) => (
            <div key={dIdx} style={{ position:'relative', borderLeft:'1px dashed var(--line)', height: 36*5 }}>
              {[0,1,2,3,4].map(i => <div key={i} style={{ position:'absolute', top:36*(i+1), left:0, right:0, borderTop:'1px dashed var(--line)' }}/>)}
              {events.filter(e => e.d===dIdx).map((e, i) => {
                const top = (e.hStart - startH) * 36;
                const h = (e.hEnd - e.hStart) * 36;
                return (
                  <div key={i} style={{
                    position:'absolute', top, left:2, right:2, height: h-3,
                    background: e.color, color:'white', borderRadius:6, padding:'4px 6px',
                    fontSize:10, fontWeight:600, lineHeight:1.2, overflow:'hidden',
                    boxShadow:'0 2px 8px -2px rgba(0,0,0,0.2)',
                    animation:`float-up .6s ease ${i*0.1 + dIdx*0.06}s both`,
                  }}>
                    <div>{e.t}</div>
                    <div style={{ opacity:0.85, fontWeight:500, fontSize:9 }}>{e.who}</div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function LiveBookingBadge({ lang }) {
  const t = COPY[lang].hero;
  const [secs, setSecs] = useState(12);
  useEffect(() => {
    const id = setInterval(() => setSecs(s => (s+1) % 90), 1000);
    return () => clearInterval(id);
  }, []);
  return (
    <div style={{
      position:'absolute', bottom:-20, left:-20, background:'white',
      borderRadius:14, padding:'10px 14px', boxShadow:'var(--shadow-md)',
      border:'1px solid var(--line)', display:'flex', alignItems:'center', gap:10,
      animation:'float-up .8s ease 0.4s both',
    }}>
      <div style={{ position:'relative', width:10, height:10 }}>
        <span style={{ position:'absolute', inset:0, borderRadius:'50%', background:'var(--wa)', animation:'pulse-dot 1.6s ease infinite' }}/>
        <span style={{ position:'absolute', inset:0, borderRadius:'50%', background:'var(--wa)' }}/>
      </div>
      <div>
        <div style={{ fontSize:11, color:'var(--muted)' }}>{t.live} {secs}s</div>
        <div style={{ fontSize:13, fontWeight:600 }}>Camila → Estudio Rosa</div>
      </div>
    </div>
  );
}

window.Hero = Hero;
