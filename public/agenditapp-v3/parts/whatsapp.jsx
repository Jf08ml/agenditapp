function WhatsAppShowcase({ lang }) {
  const t = COPY[lang].wa;
  const [shown, setShown] = useState([0,1,2]);
  useEffect(() => {
    let timeouts = [];
    setShown([0,1,2]);
    timeouts.push(setTimeout(() => setShown([0,1,2,3]), 1800));
    timeouts.push(setTimeout(() => setShown([0,1,2,3,4]), 3000));
    timeouts.push(setTimeout(() => setShown([0,1,2]), 5500));
    const interval = setInterval(() => {
      setShown([0,1,2]);
      setTimeout(() => setShown([0,1,2,3]), 1800);
      setTimeout(() => setShown([0,1,2,3,4]), 3000);
    }, 6500);
    return () => { timeouts.forEach(clearTimeout); clearInterval(interval); };
  }, [lang]);

  return (
    <section style={{
      padding:'100px 0', background:'linear-gradient(180deg, #0A2A6B 0%, #061846 100%)',
      color:'white', position:'relative', overflow:'hidden',
    }}>
      <div aria-hidden style={{ position:'absolute', top:-100, right:-100, width:400, height:400, borderRadius:'50%',
        background:'radial-gradient(circle, rgba(37,211,102,0.25), transparent 65%)', filter:'blur(40px)' }}/>
      <div className="container" style={{ position:'relative' }}>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:60, alignItems:'center' }} className="wa-grid">
          <div className="reveal">
            <Eyebrow tone="wa">{t.eyebrow}</Eyebrow>
            <h2 style={{ fontSize:'clamp(28px, 4vw, 46px)', lineHeight:1.1, letterSpacing:'-0.02em', margin:'18px 0 14px', fontWeight:700, textWrap:'balance' }}>{t.h2}</h2>
            <p style={{ fontSize:18, color:'rgba(255,255,255,0.75)', margin:0, textWrap:'pretty' }}>{t.sub}</p>
            <ul style={{ listStyle:'none', padding:0, margin:'28px 0 0', display:'flex', flexDirection:'column', gap:12 }}>
              {t.bullets.map((b, i) => (
                <li key={i} style={{ display:'flex', alignItems:'center', gap:12, fontSize:15 }}>
                  <span style={{ width:24, height:24, borderRadius:'50%', background:'var(--wa)', display:'grid', placeItems:'center', flexShrink:0 }}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-6" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <div className="reveal">
            <WAPhone messages={t.chat} shown={shown} lang={lang}/>
          </div>
        </div>
      </div>
      <style>{`@media (max-width: 920px) { .wa-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}

function WAPhone({ messages, shown, lang }) {
  const isES = lang === 'es';
  return (
    <div style={{ display:'flex', justifyContent:'center' }}>
      <div style={{
        width: 320, height: 580, borderRadius:36, background:'#0B1220',
        padding:8, boxShadow:'0 30px 80px rgba(0,0,0,0.4)', position:'relative',
      }}>
        <div style={{ width:'100%', height:'100%', borderRadius:30, overflow:'hidden', background:'#ECE5DD', position:'relative' }}>
          <div style={{ background:'#075E54', color:'white', padding:'12px 14px', display:'flex', alignItems:'center', gap:10 }}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 3l-5 5 5 5" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg>
            <div style={{ width:32, height:32, borderRadius:'50%', background:'linear-gradient(135deg, #FF6B9D, #C44CC4)', display:'grid', placeItems:'center', fontWeight:800, fontSize:13 }}>R</div>
            <div style={{ flex:1 }}>
              <div style={{ fontSize:13, fontWeight:600 }}>Estudio Rosa</div>
              <div style={{ fontSize:10, opacity:0.7 }}>{isES?'en línea':'online'}</div>
            </div>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="white"><circle cx="8" cy="3" r="1.5"/><circle cx="8" cy="8" r="1.5"/><circle cx="8" cy="13" r="1.5"/></svg>
          </div>
          <div style={{
            padding:'14px 12px', height:'calc(100% - 56px)', overflow:'hidden',
            background: 'linear-gradient(180deg, #ECE5DD 0%, #E0DDD4 100%)',
            display:'flex', flexDirection:'column', justifyContent:'flex-end', gap:6,
          }}>
            {messages.map((m, i) => {
              const visible = shown.includes(i);
              const isMe = m.from === 'me';
              return (
                <div key={i} style={{
                  alignSelf: isMe ? 'flex-end' : 'flex-start',
                  maxWidth: '78%',
                  background: m.isButton ? 'var(--wa)' : (isMe ? '#DCF8C6' : 'white'),
                  color: m.isButton ? 'white' : 'var(--ink)',
                  padding:'7px 10px', borderRadius:10,
                  borderTopLeftRadius: !isMe ? 2 : 10,
                  borderTopRightRadius: isMe ? 2 : 10,
                  fontSize:12.5, lineHeight:1.4, whiteSpace:'pre-wrap',
                  boxShadow:'0 1px 1px rgba(0,0,0,0.08)',
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateY(0)' : 'translateY(8px)',
                  transition: 'opacity .35s ease, transform .35s ease',
                  fontWeight: m.isButton ? 700 : 400,
                }}>
                  {m.t}
                  <div style={{ fontSize:9, color: m.isButton?'rgba(255,255,255,0.85)':'var(--muted)', marginTop:2, textAlign:'right' }}>{m.meta}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

window.WhatsAppShowcase = WhatsAppShowcase;
