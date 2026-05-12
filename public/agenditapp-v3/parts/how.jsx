function How({ lang }) {
  const t = COPY[lang].how;
  const [active, setActive] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setActive(a => (a+1) % 4), 3500);
    return () => clearInterval(id);
  }, []);
  return (
    <section style={{ padding:'100px 0', background:'white', borderTop:'1px solid var(--line)', borderBottom:'1px solid var(--line)' }}>
      <div className="container">
        <SectionHead eyebrow={t.eyebrow} title={t.h2} sub={t.sub} />
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:60, marginTop:64, alignItems:'center' }} className="how-grid">
          <div style={{ display:'flex', flexDirection:'column', gap:12 }}>
            {t.steps.map((s, i) => {
              const isActive = active === i;
              return (
                <button key={i} onClick={() => setActive(i)} className="reveal" style={{
                  textAlign:'left', cursor:'pointer', background: isActive ? 'var(--blue-soft)' : 'transparent',
                  border: isActive ? '1px solid var(--blue)' : '1px solid var(--line)',
                  borderRadius:14, padding:'18px 20px',
                  display:'grid', gridTemplateColumns:'48px 1fr', gap:16, alignItems:'center',
                  transition:'all .25s', fontFamily:'inherit',
                }}>
                  <span style={{
                    width:48, height:48, borderRadius:12, display:'grid', placeItems:'center',
                    background: isActive ? 'var(--blue)' : 'white', color: isActive ? 'white' : 'var(--blue)',
                    border: isActive ? 'none' : '1px solid var(--line)',
                    fontWeight:800, fontSize:14, fontFamily:'monospace', letterSpacing:'-0.02em',
                  }}>{s.n}</span>
                  <div>
                    <div style={{ fontWeight:700, fontSize:17, color:'var(--ink)' }}>{s.t}</div>
                    <div style={{ fontSize:14, color:'var(--muted)', marginTop:2 }}>{s.d}</div>
                  </div>
                </button>
              );
            })}
          </div>
          <div className="reveal">
            <PhoneMock active={active} lang={lang} />
          </div>
        </div>
      </div>
      <style>{`@media (max-width: 920px) { .how-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}

function PhoneMock({ active, lang }) {
  const isES = lang === 'es';
  return (
    <div style={{ display:'flex', justifyContent:'center' }}>
      <div style={{
        width: 320, height: 640, borderRadius:46, background:'#0B1220',
        padding:10, boxShadow:'var(--shadow-lg)', position:'relative',
      }}>
        <div style={{ position:'absolute', top:18, left:'50%', transform:'translateX(-50%)', width:90, height:24, background:'#000', borderRadius:14, zIndex:2 }}/>
        <div style={{
          width:'100%', height:'100%', borderRadius:36, background:'white', overflow:'hidden', position:'relative',
        }}>
          <div style={{ height:38, display:'flex', alignItems:'center', justifyContent:'space-between', padding:'0 24px', fontSize:11, fontWeight:600, fontFamily:'monospace' }}>
            <span>9:41</span>
            <span style={{ display:'inline-flex', gap:4 }}>
              <span>●●●●</span><span>📶</span><span>🔋</span>
            </span>
          </div>
          <div style={{ padding:'12px 16px', borderBottom:'1px solid var(--line)', display:'flex', alignItems:'center', gap:10 }}>
            <div style={{ width:32, height:32, borderRadius:8, background:'linear-gradient(135deg, #FF6B9D, #C44CC4)', display:'grid', placeItems:'center', color:'white', fontWeight:800, fontSize:13 }}>R</div>
            <div>
              <div style={{ fontSize:13, fontWeight:700 }}>Estudio Rosa</div>
              <div style={{ fontSize:10, color:'var(--muted)' }}>{isES?'Reservar cita':'Book appointment'}</div>
            </div>
            <span style={{ marginLeft:'auto', fontSize:9, padding:'3px 7px', background:'rgba(37,211,102,0.15)', color:'var(--wa-deep)', borderRadius:999, fontWeight:700 }}>{isES?'24/7':'24/7'}</span>
          </div>

          <div style={{ position:'relative', height: 'calc(100% - 38px - 65px)' }}>
            {[0,1,2,3].map(i => (
              <div key={i} style={{
                position:'absolute', inset:0, padding:'14px 16px',
                opacity: active===i ? 1 : 0,
                transform: active===i ? 'translateX(0)' : (i < active ? 'translateX(-20px)' : 'translateX(20px)'),
                transition: 'opacity .4s ease, transform .4s ease',
                pointerEvents: active===i ? 'auto' : 'none',
              }}>
                {i === 0 && <Step1 isES={isES}/>}
                {i === 1 && <Step2 isES={isES}/>}
                {i === 2 && <Step3 isES={isES}/>}
                {i === 3 && <Step4 isES={isES}/>}
              </div>
            ))}
          </div>
          <div style={{ position:'absolute', bottom:0, left:0, right:0, padding:14, background:'linear-gradient(180deg, transparent, white 30%)' }}>
            <div style={{ display:'flex', gap:6, justifyContent:'center', marginBottom:10 }}>
              {[0,1,2,3].map(i => (
                <span key={i} style={{ width: active===i?20:6, height:6, borderRadius:3, background: active===i?'var(--blue)':'var(--line)', transition:'all .3s' }}/>
              ))}
            </div>
            <div style={{
              background: active===3 ? 'var(--wa)' : 'var(--blue)', color:'white',
              padding:'12px', borderRadius:12, textAlign:'center', fontSize:13, fontWeight:700, transition:'background .3s'
            }}>
              {active===0 && (isES?'Continuar':'Continue')}
              {active===1 && (isES?'Ver disponibilidad':'See availability')}
              {active===2 && (isES?'Confirmar reserva':'Confirm booking')}
              {active===3 && (isES?'✓ Listo · Recibirás WhatsApp':'✓ Done · WhatsApp incoming')}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Step1({ isES }) {
  const services = [
    { e:'💅', t: isES?'Manicure Gel':'Gel Manicure', d:'45 min', p:'$45.000', sel:true },
    { e:'💇', t: isES?'Corte + Tinte':'Cut + Color', d:'90 min', p:'$95.000' },
    { e:'✨', t: isES?'Limpieza facial':'Facial', d:'60 min', p:'$70.000' },
  ];
  return (
    <div>
      <div style={{ fontSize:11, color:'var(--muted)', fontWeight:600, marginBottom:8 }}>{isES?'1. ELIGE TU SERVICIO':'1. PICK YOUR SERVICE'}</div>
      {services.map((s, i) => (
        <div key={i} style={{
          display:'grid', gridTemplateColumns:'32px 1fr auto', gap:10, alignItems:'center',
          padding:'10px 12px', borderRadius:10, marginBottom:8,
          background: s.sel ? 'var(--blue-soft)' : 'white',
          border: s.sel ? '1.5px solid var(--blue)' : '1px solid var(--line)',
        }}>
          <span style={{ fontSize:18 }}>{s.e}</span>
          <div>
            <div style={{ fontSize:12, fontWeight:700 }}>{s.t}</div>
            <div style={{ fontSize:10, color:'var(--muted)' }}>{s.d}</div>
          </div>
          <div style={{ fontSize:12, fontWeight:700, color:'var(--blue)' }}>{s.p}</div>
        </div>
      ))}
    </div>
  );
}
function Step2({ isES }) {
  const pros = [
    { e:'👩', t:'Camila R.', s:'⭐ 4.9 · ' + (isES?'120 reseñas':'120 reviews'), sel:true },
    { e:'👩‍🦰', t:'Sofía M.', s:'⭐ 4.8 · ' + (isES?'95 reseñas':'95 reviews') },
    { e:'✨', t: isES?'Cualquiera':'Anyone available', s: isES?'Más rápido':'Fastest' },
  ];
  return (
    <div>
      <div style={{ fontSize:11, color:'var(--muted)', fontWeight:600, marginBottom:8 }}>{isES?'2. ELIGE TU PROFESIONAL':'2. PICK YOUR PRO'}</div>
      {pros.map((p, i) => (
        <div key={i} style={{
          display:'grid', gridTemplateColumns:'40px 1fr', gap:10, alignItems:'center',
          padding:'10px 12px', borderRadius:10, marginBottom:8,
          background: p.sel ? 'var(--blue-soft)' : 'white',
          border: p.sel ? '1.5px solid var(--blue)' : '1px solid var(--line)',
        }}>
          <div style={{ width:36, height:36, borderRadius:'50%', background:'#F1F3F8', display:'grid', placeItems:'center', fontSize:18 }}>{p.e}</div>
          <div>
            <div style={{ fontSize:12, fontWeight:700 }}>{p.t}</div>
            <div style={{ fontSize:10, color:'var(--muted)' }}>{p.s}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
function Step3({ isES }) {
  const days = isES?['L','M','M','J','V','S','D']:['M','T','W','T','F','S','S'];
  const dates = [12,13,14,15,16,17,18];
  const times = ['10:00','11:30','13:00','15:00','16:30','18:00'];
  return (
    <div>
      <div style={{ fontSize:11, color:'var(--muted)', fontWeight:600, marginBottom:8 }}>{isES?'3. ELIGE FECHA Y HORA':'3. PICK DATE & TIME'}</div>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(7, 1fr)', gap:4, marginBottom:12 }}>
        {dates.map((d, i) => (
          <div key={i} style={{
            textAlign:'center', padding:'8px 0', borderRadius:8,
            background: i===2 ? 'var(--blue)' : 'white',
            border: i===2 ? 'none' : '1px solid var(--line)',
            color: i===2 ? 'white' : 'var(--ink)',
          }}>
            <div style={{ fontSize:8, opacity:0.7 }}>{days[i]}</div>
            <div style={{ fontSize:13, fontWeight:700 }}>{d}</div>
          </div>
        ))}
      </div>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:6 }}>
        {times.map((t, i) => (
          <div key={i} style={{
            textAlign:'center', padding:'8px 0', borderRadius:8, fontSize:11, fontWeight:700,
            background: i===3 ? 'var(--blue-soft)' : 'white',
            color: i===3 ? 'var(--blue)' : 'var(--ink-2)',
            border: i===3 ? '1.5px solid var(--blue)' : '1px solid var(--line)',
          }}>{t}</div>
        ))}
      </div>
    </div>
  );
}
function Step4({ isES }) {
  return (
    <div style={{ display:'flex', flexDirection:'column', alignItems:'center', textAlign:'center', paddingTop:20 }}>
      <div style={{ width:72, height:72, borderRadius:'50%', background:'rgba(37,211,102,0.15)', display:'grid', placeItems:'center', marginBottom:16 }}>
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <circle cx="20" cy="20" r="18" fill="var(--wa)"/>
          <path d="M12 20l5 5 11-11" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <div style={{ fontSize:16, fontWeight:700, marginBottom:6 }}>{isES?'¡Cita confirmada!':'Booking confirmed!'}</div>
      <div style={{ fontSize:12, color:'var(--muted)', marginBottom:16, maxWidth:220 }}>{isES?'Recibirás un WhatsApp con todos los detalles y un recordatorio antes.':'You\'ll get a WhatsApp with details and a reminder before.'}</div>
      <div style={{ background:'var(--blue-soft)', borderRadius:12, padding:'10px 14px', fontSize:11, color:'var(--ink-2)', textAlign:'left', width:'100%' }}>
        <div style={{ fontWeight:700, marginBottom:4 }}>💅 Manicure Gel · Camila R.</div>
        <div>📅 {isES?'Mié 14 mayo · 3:00 pm':'Wed May 14 · 3:00 pm'}</div>
        <div>📍 Estudio Rosa · Neiva</div>
      </div>
    </div>
  );
}

window.How = How;
