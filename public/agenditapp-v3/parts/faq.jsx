function FAQ({ lang }) {
  const t = COPY[lang].faq;
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" style={{ padding:'100px 0', background:'white', borderTop:'1px solid var(--line)', borderBottom:'1px solid var(--line)' }}>
      <div className="container" style={{ maxWidth:880 }}>
        <SectionHead eyebrow={t.eyebrow} title={t.h2} />
        <div style={{ marginTop:48, display:'flex', flexDirection:'column', gap:10 }}>
          {t.items.map((it, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="reveal" style={{
                background: isOpen ? 'var(--blue-soft)' : 'var(--bg)',
                border: isOpen ? '1px solid var(--blue)' : '1px solid var(--line)',
                borderRadius:14, transition:'all .2s',
              }}>
                <button onClick={() => setOpen(isOpen ? -1 : i)} style={{
                  width:'100%', display:'flex', alignItems:'center', justifyContent:'space-between',
                  padding:'18px 22px', background:'transparent', border:'none', cursor:'pointer',
                  fontFamily:'inherit', color:'var(--ink)', textAlign:'left',
                }}>
                  <span style={{ fontSize:16, fontWeight:600, letterSpacing:'-0.01em' }}>{it.q}</span>
                  <span style={{
                    width:28, height:28, borderRadius:'50%', display:'grid', placeItems:'center',
                    background: isOpen ? 'var(--blue)' : 'white',
                    color: isOpen ? 'white' : 'var(--ink)',
                    border: isOpen ? 'none' : '1px solid var(--line)',
                    transition:'transform .2s',
                    transform: isOpen ? 'rotate(45deg)' : 'rotate(0)',
                    flexShrink:0,
                  }}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 3v8M3 7h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                  </span>
                </button>
                <div style={{
                  overflow:'hidden', maxHeight: isOpen ? 200 : 0, transition: 'max-height .3s ease',
                }}>
                  <div style={{ padding:'0 22px 20px', fontSize:14.5, color:'var(--ink-2)', lineHeight:1.6 }}>{it.a}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
window.FAQ = FAQ;
