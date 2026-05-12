function Sectors({ lang }) {
  const t = COPY[lang].sectors;
  return (
    <section id="sectors" style={{ padding:'100px 0', background:'white', borderTop:'1px solid var(--line)', borderBottom:'1px solid var(--line)' }}>
      <div className="container">
        <SectionHead eyebrow={t.eyebrow} title={t.h2} sub={t.sub} />
        <div style={{ display:'grid', gridTemplateColumns:'repeat(5, 1fr)', gap:14, marginTop:56 }} className="sectors-grid">
          {t.items.map((it, i) => (
            <div key={i} className="reveal" style={{
              background:'var(--bg)', border:'1px solid var(--line)', borderRadius:14,
              padding:'22px 16px', textAlign:'center', cursor:'default',
              transition:'transform .2s, border-color .2s, background .2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.borderColor='var(--blue)'; e.currentTarget.style.background='var(--blue-soft)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform='none'; e.currentTarget.style.borderColor='var(--line)'; e.currentTarget.style.background='var(--bg)'; }}
            >
              <div style={{ fontSize:32, marginBottom:8 }}>{it.e}</div>
              <div style={{ fontSize:13, fontWeight:600, color:'var(--ink-2)' }}>{it.t}</div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 920px) { .sectors-grid { grid-template-columns: repeat(3, 1fr) !important; } }
        @media (max-width: 560px) { .sectors-grid { grid-template-columns: repeat(2, 1fr) !important; } }
      `}</style>
    </section>
  );
}
window.Sectors = Sectors;
