function Nav({ lang, setLang }) {
  const t = COPY[lang].nav;
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const link = { color:'var(--ink-2)', fontSize:14, fontWeight:500, padding:'8px 12px', borderRadius:8, transition:'background .15s' };
  const onLink = (e) => e.currentTarget.style.background = 'rgba(11,18,32,0.05)';
  const offLink = (e) => e.currentTarget.style.background = 'transparent';
  return (
    <header style={{
      position:'sticky', top:0, zIndex:50,
      background: scrolled ? 'rgba(251,252,254,0.85)' : 'rgba(251,252,254,0.6)',
      backdropFilter:'saturate(180%) blur(14px)',
      WebkitBackdropFilter:'saturate(180%) blur(14px)',
      borderBottom: scrolled ? '1px solid var(--line)' : '1px solid transparent',
      transition:'border-color .2s, background .2s',
    }}>
      <div className="container" style={{ display:'flex', alignItems:'center', justifyContent:'space-between', height:64 }}>
        <a href="#" style={{ display:'flex', alignItems:'center', gap:8 }}>
          <Logo />
          <span style={{ fontWeight:700, fontSize:18, letterSpacing:'-0.02em' }}>AgenditApp</span>
        </a>
        <nav style={{ display:'flex', alignItems:'center', gap:2 }} className="hide-mobile">
          <a href="#features" style={link} onMouseEnter={onLink} onMouseLeave={offLink}>{t.features}</a>
          <a href="#sectors" style={link} onMouseEnter={onLink} onMouseLeave={offLink}>{t.sectors}</a>
          <a href="#pricing" style={link} onMouseEnter={onLink} onMouseLeave={offLink}>{t.pricing}</a>
          <a href="#testimonials" style={link} onMouseEnter={onLink} onMouseLeave={offLink}>{t.testimonials}</a>
          <a href="#faq" style={link} onMouseEnter={onLink} onMouseLeave={offLink}>{t.faq}</a>
        </nav>
        <div style={{ display:'flex', alignItems:'center', gap:10 }}>
          <LangSwitch lang={lang} setLang={setLang} />
          <a href="#" style={{ ...link, fontWeight:600 }} className="hide-mobile">{t.login}</a>
          <PrimaryBtn size="sm">{t.cta}</PrimaryBtn>
        </div>
      </div>
      <style>{`
        @media (max-width: 720px) { .hide-mobile { display:none !important; } }
      `}</style>
    </header>
  );
}

function Logo() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <rect x="2" y="4" width="24" height="22" rx="6" fill="var(--blue)"/>
      <rect x="2" y="4" width="24" height="6" rx="6" fill="var(--blue-deep)"/>
      <circle cx="9" cy="3" r="1.5" fill="var(--blue-deep)"/>
      <circle cx="19" cy="3" r="1.5" fill="var(--blue-deep)"/>
      <path d="M9 17l3 3 7-7" stroke="white" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function LangSwitch({ lang, setLang }) {
  return (
    <div style={{ display:'inline-flex', background:'#F1F3F8', borderRadius:999, padding:3, gap:0 }}>
      {['es','en'].map(l => (
        <button key={l} onClick={() => setLang(l)} style={{
          padding:'5px 11px', fontSize:12, fontWeight:600, border:'none',
          borderRadius:999, background: lang===l ? 'white' : 'transparent',
          color: lang===l ? 'var(--ink)' : 'var(--muted)',
          boxShadow: lang===l ? '0 1px 3px rgba(0,0,0,0.08)' : 'none',
          transition: 'all .15s',
        }}>{l.toUpperCase()}</button>
      ))}
    </div>
  );
}
window.Nav = Nav;
