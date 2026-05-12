function Problem({ lang }) {
  const t = COPY[lang].problem;
  return (
    <section style={{ padding:'100px 0' }}>
      <div className="container">
        <SectionHead eyebrow={t.eyebrow} eyebrowTone="warm" title={t.h2} sub={t.sub} />
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:24, marginTop:56 }} className="problem-grid">
          {t.cols.map((col, ci) => {
            const isBad = col.tone === 'bad';
            return (
              <div key={ci} className="reveal" style={{
                background: isBad ? 'white' : 'linear-gradient(180deg, white 0%, var(--blue-soft) 100%)',
                border: isBad ? '1px solid var(--line)' : '1px solid var(--blue)',
                borderRadius:20, padding:32, position:'relative',
                boxShadow: isBad ? 'var(--shadow-sm)' : 'var(--shadow-md)',
              }}>
                <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:24 }}>
                  <span style={{
                    width:36, height:36, borderRadius:10, display:'grid', placeItems:'center',
                    background: isBad ? '#FEE4E4' : 'var(--blue)',
                    color: isBad ? '#DC2626' : 'white',
                  }}>
                    {isBad
                      ? <svg width="18" height="18" viewBox="0 0 16 16" fill="none"><path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                      : <svg width="18" height="18" viewBox="0 0 16 16" fill="none"><path d="M3 8l3 3 7-7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                  </span>
                  <h3 style={{ fontSize:20, fontWeight:700, margin:0, letterSpacing:'-0.01em' }}>{col.title}</h3>
                </div>
                <ul style={{ listStyle:'none', margin:0, padding:0, display:'flex', flexDirection:'column', gap:18 }}>
                  {col.items.map((it, i) => (
                    <li key={i} style={{ display:'grid', gridTemplateColumns:'20px 1fr', gap:12, alignItems:'start' }}>
                      <span style={{
                        width:20, height:20, borderRadius:'50%', display:'grid', placeItems:'center', marginTop:2,
                        background: isBad ? '#FEE4E4' : 'rgba(37,211,102,0.15)',
                        color: isBad ? '#DC2626' : 'var(--wa-deep)',
                      }}>
                        {isBad
                          ? <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M3 3l6 6M9 3l-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                          : <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                      </span>
                      <div>
                        <div style={{ fontWeight:600, fontSize:15, color: isBad ? 'var(--ink-2)' : 'var(--ink)' }}>{it.t}</div>
                        <div style={{ fontSize:14, color:'var(--muted)', marginTop:2 }}>{it.s}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
      <style>{`@media (max-width: 820px) { .problem-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}
window.Problem = Problem;
