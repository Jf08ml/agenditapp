function DemoForm({ lang }) {
  const t = COPY[lang].demo;
  const [data, setData] = useState({ name:'', biz:'', wa:'', type:'', vol:'' });
  const [submitted, setSubmitted] = useState(false);
  const f = t.f;
  const fld = (label, v, k, type='text') => (
    <label style={{ display:'block' }}>
      <span style={{ fontSize:12, fontWeight:600, color:'var(--muted)', textTransform:'uppercase', letterSpacing:'0.04em' }}>{label}</span>
      <input type={type} value={v} onChange={e => setData({...data, [k]: e.target.value})}
        style={inputStyle}/>
    </label>
  );
  return (
    <section style={{ padding:'100px 0' }}>
      <div className="container">
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:48, alignItems:'center' }} className="demo-grid">
          <div className="reveal">
            <Eyebrow>{t.eyebrow}</Eyebrow>
            <h2 style={{ fontSize:'clamp(28px, 4vw, 42px)', lineHeight:1.1, letterSpacing:'-0.02em', margin:'18px 0 14px', fontWeight:700, textWrap:'balance' }}>{t.h2}</h2>
            <p style={{ fontSize:17, color:'var(--muted)', margin:0, textWrap:'pretty' }}>{t.sub}</p>
            <ul style={{ listStyle:'none', padding:0, margin:'28px 0 32px', display:'flex', flexDirection:'column', gap:10 }}>
              {t.promise.map((p, i) => (
                <li key={i} style={{ display:'flex', alignItems:'center', gap:12, fontSize:14, fontWeight:500 }}>
                  <span style={{ width:22, height:22, borderRadius:'50%', background:'rgba(37,211,102,0.15)', display:'grid', placeItems:'center', flexShrink:0 }}>
                    <svg width="11" height="11" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-6" stroke="var(--wa-deep)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                  {p}
                </li>
              ))}
            </ul>
            <div style={{ background:'#F1F3F8', borderRadius:14, padding:20, display:'grid', gridTemplateColumns:'40px 1fr auto', gap:14, alignItems:'center' }}>
              <div style={{ width:40, height:40, borderRadius:'50%', background:'var(--wa)', display:'grid', placeItems:'center', color:'white', fontSize:20 }}>💬</div>
              <div>
                <div style={{ fontSize:14, fontWeight:700 }}>{t.altTitle}</div>
                <div style={{ fontSize:12, color:'var(--muted)' }}>{t.altBody}</div>
              </div>
              <PrimaryBtn tone="wa" size="sm">{t.altCta}</PrimaryBtn>
            </div>
          </div>
          <form className="reveal" onSubmit={e => { e.preventDefault(); setSubmitted(true); }}
            style={{
              background:'white', border:'1px solid var(--line)', borderRadius:20,
              padding:32, boxShadow:'var(--shadow-md)',
              display:'flex', flexDirection:'column', gap:16,
            }}>
            {submitted ? (
              <div style={{ display:'flex', flexDirection:'column', alignItems:'center', textAlign:'center', padding:'30px 0', gap:14 }}>
                <div style={{ width:64, height:64, borderRadius:'50%', background:'rgba(37,211,102,0.15)', display:'grid', placeItems:'center' }}>
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <circle cx="16" cy="16" r="15" fill="var(--wa)"/>
                    <path d="M10 16l4 4 9-9" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 style={{ margin:0, fontSize:22, fontWeight:700 }}>{lang==='es'?'¡Listo! Te escribimos en breve.':'Done! We\'ll reach out shortly.'}</h3>
                <p style={{ margin:0, color:'var(--muted)', fontSize:14 }}>{lang==='es'?'Revisa tu WhatsApp en menos de 1 hora.':'Check your WhatsApp within 1 hour.'}</p>
              </div>
            ) : (
              <>
                {fld(f.name, data.name, 'name')}
                {fld(f.biz, data.biz, 'biz')}
                <label>
                  <span style={{ fontSize:12, fontWeight:600, color:'var(--muted)', textTransform:'uppercase', letterSpacing:'0.04em' }}>{f.wa}</span>
                  <div style={{ display:'grid', gridTemplateColumns:'auto 1fr', gap:8, marginTop:6 }}>
                    <select style={{ ...inputStyle, marginTop:0, width:90 }}>
                      <option>🇨🇴 +57</option><option>🇲🇽 +52</option><option>🇨🇷 +506</option><option>🇨🇱 +56</option><option>🇪🇸 +34</option><option>🇺🇸 +1</option>
                    </select>
                    <input type="tel" value={data.wa} onChange={e => setData({...data, wa: e.target.value})} style={{ ...inputStyle, marginTop:0 }}/>
                  </div>
                </label>
                <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:12 }}>
                  <label>
                    <span style={{ fontSize:12, fontWeight:600, color:'var(--muted)', textTransform:'uppercase', letterSpacing:'0.04em' }}>{f.type}</span>
                    <select value={data.type} onChange={e => setData({...data, type: e.target.value})} style={inputStyle}>
                      {t.types.map((o,i) => <option key={i} value={i===0?'':o}>{o}</option>)}
                    </select>
                  </label>
                  <label>
                    <span style={{ fontSize:12, fontWeight:600, color:'var(--muted)', textTransform:'uppercase', letterSpacing:'0.04em' }}>{f.vol}</span>
                    <select value={data.vol} onChange={e => setData({...data, vol: e.target.value})} style={inputStyle}>
                      {t.vols.map((o,i) => <option key={i} value={i===0?'':o}>{o}</option>)}
                    </select>
                  </label>
                </div>
                <PrimaryBtn size="lg" style={{ marginTop:8 }}>
                  <span style={{ display:'inline-flex', alignItems:'center', gap:8, justifyContent:'center', width:'100%' }}>
                    {f.send}
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10m0 0L9 4m4 4l-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                </PrimaryBtn>
              </>
            )}
          </form>
        </div>
      </div>
      <style>{`@media (max-width: 920px) { .demo-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}

const inputStyle = {
  width:'100%', marginTop:6, padding:'12px 14px', borderRadius:10,
  border:'1.5px solid var(--line)', background:'white', fontSize:14,
  fontFamily:'inherit', color:'var(--ink)', outline:'none', transition:'border-color .15s',
};

window.DemoForm = DemoForm;
