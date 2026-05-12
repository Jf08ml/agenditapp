const TWEAK_DEFAULS = /*EDITMODE-BEGIN*/{
  "lang": "es",
  "accent": "oklch(0.74 0.16 50)",
  "showRoi": true,
  "showWhatsApp": true,
  "showProof": true
}/*EDITMODE-END*/;

function App() {
  const [tweaks, setTweak] = window.useTweaks(TWEAK_DEFAULS);
  const [lang, setLang] = useState(tweaks.lang || 'es');
  useEffect(() => { setLang(tweaks.lang || 'es'); }, [tweaks.lang]);
  useReveal();

  return (
    <>
      <Nav lang={lang} setLang={(l) => { setLang(l); setTweak('lang', l); }}/>
      <Hero lang={lang} accent={tweaks.accent}/>
      {tweaks.showProof && <ProofBar lang={lang}/>}
      <Pillars lang={lang}/>
      <Problem lang={lang}/>
      <How lang={lang}/>
      <Catalog lang={lang}/>
      <Features lang={lang}/>
      {tweaks.showWhatsApp && <WhatsAppShowcase lang={lang}/>}
      <Sectors lang={lang}/>
      <Location lang={lang}/>
      <Testimonials lang={lang}/>
      {tweaks.showRoi && <ROI lang={lang}/>}
      <Pricing lang={lang}/>
      <Compare lang={lang}/>
      <FAQ lang={lang}/>
      <DemoForm lang={lang}/>
      <FooterCTA lang={lang}/>

      <window.TweaksPanel title="Tweaks">
        <window.TweakSection title={lang==='es'?'Idioma':'Language'}>
          <window.TweakRadio value={tweaks.lang} onChange={v => setTweak('lang', v)} options={[{value:'es',label:'Español'},{value:'en',label:'English'}]}/>
        </window.TweakSection>
        <window.TweakSection title={lang==='es'?'Acento secundario':'Secondary accent'}>
          <window.TweakRadio value={tweaks.accent} onChange={v => setTweak('accent', v)} options={[
            { value: 'oklch(0.74 0.16 50)', label: lang==='es'?'Cálido':'Warm' },
            { value: 'oklch(0.72 0.15 160)', label: lang==='es'?'Verde':'Green' },
            { value: 'oklch(0.68 0.18 290)', label: lang==='es'?'Violeta':'Violet' },
            { value: 'oklch(0.75 0.16 25)', label: lang==='es'?'Coral':'Coral' },
          ]}/>
        </window.TweakSection>
        <window.TweakSection title={lang==='es'?'Secciones':'Sections'}>
          <window.TweakToggle label={lang==='es'?'Barra de prueba social':'Proof bar'} value={tweaks.showProof} onChange={v => setTweak('showProof', v)}/>
          <window.TweakToggle label={lang==='es'?'Showcase de WhatsApp':'WhatsApp showcase'} value={tweaks.showWhatsApp} onChange={v => setTweak('showWhatsApp', v)}/>
          <window.TweakToggle label={lang==='es'?'Calculadora de ROI':'ROI calculator'} value={tweaks.showRoi} onChange={v => setTweak('showRoi', v)}/>
        </window.TweakSection>
      </window.TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
