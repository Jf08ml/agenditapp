// Shared hooks and small utilities
const { useState, useEffect, useRef, useMemo, useCallback } = React;

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  });
}
window.useReveal = useReveal;

function PrimaryBtn({ children, onClick, size='md', tone='blue', style }) {
  const sizes = { sm:{p:'10px 16px',f:14}, md:{p:'14px 22px',f:15}, lg:{p:'16px 26px',f:16} };
  const tones = {
    blue: { bg:'var(--blue)', color:'#fff', shadow:'0 6px 20px -4px rgba(30,107,255,0.5)' },
    warm: { bg:'var(--warm-deep)', color:'#fff', shadow:'0 6px 20px -4px oklch(0.58 0.18 45 / 0.5)' },
    wa:   { bg:'var(--wa)', color:'#fff', shadow:'0 6px 20px -4px rgba(37,211,102,0.45)' },
    dark: { bg:'var(--ink)', color:'#fff', shadow:'0 6px 18px -4px rgba(11,18,32,0.4)' },
  };
  const t = tones[tone]; const s = sizes[size];
  return (
    <button onClick={onClick} style={{
      background: t.bg, color: t.color, border: 'none', borderRadius: 12,
      padding: s.p, fontSize: s.f, fontWeight: 600, letterSpacing: '-0.01em',
      boxShadow: t.shadow, transition: 'transform .15s ease, box-shadow .15s ease',
      ...style,
    }}
    onMouseEnter={e => { e.currentTarget.style.transform='translateY(-1px)'; }}
    onMouseLeave={e => { e.currentTarget.style.transform='none'; }}
    >{children}</button>
  );
}
function GhostBtn({ children, onClick, size='md', style }) {
  const sizes = { sm:{p:'9px 15px',f:14}, md:{p:'13px 21px',f:15}, lg:{p:'15px 25px',f:16} };
  const s = sizes[size];
  return (
    <button onClick={onClick} style={{
      background: 'transparent', color: 'var(--ink)', border: '1.5px solid var(--line)', borderRadius: 12,
      padding: s.p, fontSize: s.f, fontWeight: 600, letterSpacing: '-0.01em',
      transition: 'border-color .15s, background .15s', ...style,
    }}
    onMouseEnter={e => { e.currentTarget.style.borderColor='var(--ink)'; e.currentTarget.style.background='rgba(11,18,32,0.03)'; }}
    onMouseLeave={e => { e.currentTarget.style.borderColor='var(--line)'; e.currentTarget.style.background='transparent'; }}
    >{children}</button>
  );
}
function Eyebrow({ children, tone='blue' }) {
  const tones = { blue:{c:'var(--blue)',bg:'var(--blue-soft)'}, warm:{c:'var(--warm-deep)',bg:'oklch(0.96 0.04 60)'}, wa:{c:'var(--wa-deep)',bg:'rgba(37,211,102,0.12)'}, ink:{c:'var(--ink)',bg:'#F1F3F8'} };
  const t = tones[tone];
  return (
    <span style={{ display:'inline-flex', alignItems:'center', gap: 6,
      background: t.bg, color: t.c, padding: '6px 12px', borderRadius: 999,
      fontSize: 12, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' }}>{children}</span>
  );
}
function SectionHead({ eyebrow, eyebrowTone='blue', title, sub, align='center' }) {
  return (
    <div className="reveal" style={{ textAlign: align, maxWidth: align==='center'?760:640, margin: align==='center'?'0 auto':'0' }}>
      {eyebrow && <Eyebrow tone={eyebrowTone}>{eyebrow}</Eyebrow>}
      <h2 style={{ fontSize:'clamp(28px, 4vw, 46px)', lineHeight:1.1, letterSpacing:'-0.02em', margin:'18px 0 14px', fontWeight:700, textWrap:'balance' }}>{title}</h2>
      {sub && <p style={{ fontSize:18, color:'var(--muted)', margin:0, textWrap:'pretty' }}>{sub}</p>}
    </div>
  );
}
window.PrimaryBtn = PrimaryBtn; window.GhostBtn = GhostBtn; window.Eyebrow = Eyebrow; window.SectionHead = SectionHead;
