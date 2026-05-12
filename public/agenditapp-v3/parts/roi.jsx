function ROI({ lang }) {
  const t = COPY[lang].roi;
  const [ticket, setTicket] = useState(40000);
  const [noshows, setNoshows] = useState(12);
  const recovered = Math.round(ticket * noshows * 0.7);
  const fmt = (n) => '$' + n.toLocaleString(lang==='es'?'es-CO':'en-US');
  return (
    <section style={{ padding:'100px 0', background:'linear-gradient(180deg, var(--bg) 0%, oklch(0.97 0.04 60) 100%)' }}>
      <div className="container">
        <SectionHead eyebrow={t.eyebrow} eyebrowTone="warm" title={t.h2} sub={t.sub} />
        <div style={{
          marginTop:56, background:'white', borderRadius:24, padding:40,
          boxShadow:'var(--shadow-md)', border:'1px solid var(--line)',
          display:'grid', gridTemplateColumns:'1fr 1fr', gap:48, alignItems:'center',
        }} className="roi-grid reveal">
          <div style={{ display:'flex', flexDirection:'column', gap:24 }}>
            <Slider label={t.lblTicket} value={ticket} setValue={setTicket} min={10000} max={150000} step={5000} format={fmt}/>
            <Slider label={t.lblNoshows} value={noshows} setValue={setNoshows} min={1} max={40} step={1} format={n => `${n}`}/>
          </div>
          <div style={{
            background:'linear-gradient(135deg, var(--blue) 0%, var(--blue-deep) 100%)',
            color:'white', borderRadius:18, padding:32, position:'relative', overflow:'hidden',
          }}>
            <div aria-hidden style={{ position:'absolute', top:-50, right:-50, width:200, height:200, borderRadius:'50%', background:'rgba(255,255,255,0.06)' }}/>
            <div style={{ fontSize:13, opacity:0.85, fontWeight:600, letterSpacing:'0.04em', textTransform:'uppercase' }}>{t.result}</div>
            <div style={{ fontSize:'clamp(40px, 6vw, 64px)', fontWeight:800, letterSpacing:'-0.03em', margin:'8px 0', lineHeight:1, fontVariantNumeric:'tabular-nums' }}>
              {fmt(recovered)}
            </div>
            <div style={{ fontSize:14, opacity:0.85 }}>{t.perMonth}</div>
            <div style={{ marginTop:22, padding:'12px 14px', background:'rgba(255,255,255,0.12)', borderRadius:10, fontSize:13 }}>
              <div style={{ fontWeight:700 }}>{t.payoff}</div>
              <div style={{ opacity:0.8, fontSize:12, marginTop:4 }}>{t.vs}</div>
            </div>
          </div>
        </div>
      </div>
      <style>{`@media (max-width: 920px) { .roi-grid { grid-template-columns: 1fr !important; padding: 28px !important; } }`}</style>
    </section>
  );
}

function Slider({ label, value, setValue, min, max, step, format }) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div>
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'baseline', marginBottom:10 }}>
        <span style={{ fontSize:13, fontWeight:600, color:'var(--muted)', textTransform:'uppercase', letterSpacing:'0.04em' }}>{label}</span>
        <span style={{ fontSize:22, fontWeight:800, color:'var(--ink)', letterSpacing:'-0.02em', fontVariantNumeric:'tabular-nums' }}>{format(value)}</span>
      </div>
      <input type="range" min={min} max={max} step={step} value={value} onChange={e => setValue(+e.target.value)}
        style={{
          width:'100%', appearance:'none', height:8, borderRadius:999,
          background: `linear-gradient(90deg, var(--blue) 0%, var(--blue) ${pct}%, var(--line) ${pct}%, var(--line) 100%)`,
          outline:'none', cursor:'pointer',
        }}
      />
      <style>{`
        input[type=range]::-webkit-slider-thumb { appearance: none; width: 22px; height: 22px; border-radius: 50%; background: white; border: 3px solid var(--blue); cursor: pointer; box-shadow: 0 2px 8px rgba(30,107,255,0.4); }
        input[type=range]::-moz-range-thumb { width: 22px; height: 22px; border-radius: 50%; background: white; border: 3px solid var(--blue); cursor: pointer; box-shadow: 0 2px 8px rgba(30,107,255,0.4); }
      `}</style>
    </div>
  );
}

window.ROI = ROI;
