function Features({ lang }) {
  const t = COPY[lang].features;
  const tagColor = {
    'Esencial':'var(--ink)','Core':'var(--ink)',
    'Diferenciador':'var(--wa-deep)','Differentiator':'var(--wa-deep)',
    'Pro':'var(--blue)','Plus':'var(--warm-deep)',
  };
  const tagBg = {
    'Esencial':'#F1F3F8','Core':'#F1F3F8',
    'Diferenciador':'rgba(37,211,102,0.12)','Differentiator':'rgba(37,211,102,0.12)',
    'Pro':'var(--blue-soft)','Plus':'oklch(0.96 0.04 60)',
  };
  return (
    <section id="features" style={{ padding:'100px 0' }}>
      <div className="container">
        <SectionHead eyebrow={t.eyebrow} title={t.h2} sub={t.sub} />
        <div style={{ display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:16, marginTop:56 }} className="features-grid">
          {t.items.map((it, i) => (
            <div key={i} className="reveal" style={{
              background:'white', border:'1px solid var(--line)', borderRadius:16,
              padding:24, transition:'transform .2s, box-shadow .2s, border-color .2s',
              cursor:'default',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform='translateY(-3px)'; e.currentTarget.style.boxShadow='var(--shadow-md)'; e.currentTarget.style.borderColor='var(--blue)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform='none'; e.currentTarget.style.boxShadow='none'; e.currentTarget.style.borderColor='var(--line)'; }}
            >
              <FeatureIcon name={it.t}/>
              <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', gap:8, marginTop:14, marginBottom:6 }}>
                <h3 style={{ fontSize:16, fontWeight:700, margin:0, letterSpacing:'-0.01em' }}>{it.t}</h3>
                <span style={{
                  fontSize:9, fontWeight:700, padding:'3px 7px', borderRadius:999,
                  color: tagColor[it.tag] || 'var(--ink)', background: tagBg[it.tag] || '#F1F3F8',
                  textTransform:'uppercase', letterSpacing:'0.04em',
                }}>{it.tag}</span>
              </div>
              <p style={{ fontSize:13, color:'var(--muted)', margin:0, lineHeight:1.5 }}>{it.d}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 1080px) { .features-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 560px) { .features-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}

function FeatureIcon({ name }) {
  const map = {
    'Agenda visual': '📅', 'Visual calendar': '📅',
    'WhatsApp Business': '💬',
    'Catálogo de servicios': '📋', 'Service catalog': '📋',
    'Equipo y comisiones': '👥', 'Team & commissions': '👥',
    'Marca blanca': '🎨', 'White label': '🎨',
    'Campañas masivas': '🚀', 'Mass campaigns': '🚀',
    'Fidelización': '⭐', 'Loyalty': '⭐',
    'Reportes': '📊', 'Reports': '📊',
  };
  return (
    <div style={{ width:40, height:40, borderRadius:10, background:'var(--blue-soft)', display:'grid', placeItems:'center', fontSize:20 }}>
      {map[name] || '✨'}
    </div>
  );
}

window.Features = Features;
