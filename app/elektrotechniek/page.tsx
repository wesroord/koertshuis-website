import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Elektrotechniek" };

const SERVICES = [
  {
    title: "Elektrische installatie",
    desc: "Van nieuwbouw tot renovatie verzorgen wij de complete elektrische installatie in woningen en bedrijfspanden. Van het plaatsen van een enkele schakelaar tot de volledige installatie.",
  },
  {
    title: "NEN-keuring (NEN 3140)",
    desc: "Onze vakbekwame monteurs voeren NEN 3140 keuringen uit op elektrische installaties, machines en gereedschappen. Wij leveren een officieel keuringsrapport.",
  },
  {
    title: "Camerabeveiliging",
    desc: "Beveiligingscamera's zijn tegenwoordig onmisbaar. Samen met u zoeken we naar een passende beveiligingsoplossing voor uw woning of bedrijfspand.",
  },
  {
    title: "Satellietinstallatie",
    desc: "Wij zijn officieel dealer van Canal Digitaal en Astra. Voor het plaatsen van een schotelsysteem bent u bij ons aan het juiste adres.",
  },
  {
    title: "Domotica",
    desc: "Maak uw woning of bedrijf slimmer met domotica. Verlichting, verwarming en beveiliging op afstand bedienen via uw telefoon of tablet.",
  },
  {
    title: "Noodverlichting",
    desc: "Aanleggen en onderhouden van noodverlichtingsinstallaties conform de geldende normen. Wij zorgen dat u altijd voldoet aan de wet- en regelgeving.",
  },
];

export default function ElektrotechniekPage() {
  return (
    <>
      <style>{`
        .page-hero { background:var(--dark); color:#fff; padding:72px 32px 64px; position:relative; overflow:hidden; }
        .page-hero::after { content:''; position:absolute; top:0; right:0; width:50%; height:100%; background:url('/elektrotechniek.png') center/cover no-repeat; opacity:.12; pointer-events:none; }
        .page-hero-inner { max-width:1200px; margin:0 auto; position:relative; z-index:2; }
        .breadcrumb { font-size:13px; color:rgba(255,255,255,.4); margin-bottom:16px; display:flex; gap:8px; align-items:center; }
        .breadcrumb a { color:rgba(255,255,255,.4); }
        .breadcrumb a:hover { color:rgba(255,255,255,.8); }
        .page-hero h1 { font-size:clamp(32px,5vw,56px); font-weight:900; letter-spacing:-.04em; line-height:1.1; margin-bottom:16px; }
        .page-hero h1 span { color:var(--red); }
        .page-hero p { font-size:17px; color:rgba(255,255,255,.55); line-height:1.75; max-width:580px; }
        .page-hero-bar { background:var(--red); height:4px; }

        .services-sec { padding:80px 32px; }
        .sec-inner { max-width:1200px; margin:0 auto; }
        .services-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:24px; }
        .service-card { background:#fff; border:1.5px solid var(--border); border-radius:16px; padding:32px 28px; transition:border-color .2s,transform .2s,box-shadow .2s; }
        .service-card:hover { border-color:var(--red); transform:translateY(-4px); box-shadow:0 16px 48px rgba(216,30,5,.08); }
        .service-num { width:36px; height:3px; background:var(--red); border-radius:2px; margin-bottom:20px; }
        .service-title { font-size:18px; font-weight:800; color:var(--dark); margin-bottom:10px; letter-spacing:-.02em; }
        .service-desc { font-size:14px; color:var(--muted); line-height:1.75; }

        .info-strip { background:var(--light); border-top:1px solid var(--border); border-bottom:1px solid var(--border); padding:64px 32px; }
        .info-inner { max-width:1200px; margin:0 auto; display:grid; grid-template-columns:1fr 1fr; gap:64px; align-items:center; }
        .info-img { border-radius:16px; overflow:hidden; }
        .info-img img { width:100%; height:340px; object-fit:cover; display:block; }
        .info-content h2 { font-size:clamp(24px,3.5vw,38px); font-weight:900; letter-spacing:-.04em; color:var(--dark); line-height:1.15; margin-bottom:16px; }
        .info-content p { font-size:15px; color:var(--muted); line-height:1.8; margin-bottom:16px; }

        .cta-red { background:var(--red); color:#fff; padding:56px 32px; text-align:center; }
        .cta-red h2 { font-size:clamp(22px,3.5vw,38px); font-weight:900; letter-spacing:-.04em; margin-bottom:12px; }
        .cta-red p { font-size:15px; color:rgba(255,255,255,.75); margin-bottom:28px; }
        .btn-white { background:#fff; color:var(--red); font-size:15px; font-weight:800; padding:13px 32px; border-radius:8px; border:none; display:inline-block; transition:transform .15s; margin:4px; }
        .btn-white:hover { transform:translateY(-2px); }
        .btn-woutline { background:transparent; color:#fff; font-size:14px; font-weight:600; padding:12px 24px; border-radius:8px; border:1.5px solid rgba(255,255,255,.35); display:inline-block; transition:border-color .15s; margin:4px; }
        .btn-woutline:hover { border-color:#fff; }

        @media(max-width:900px){ .services-grid{grid-template-columns:1fr 1fr;} .info-inner{grid-template-columns:1fr;} }
        @media(max-width:580px){ .services-grid{grid-template-columns:1fr;} }
      `}</style>

      <div className="page-hero-bar" />
      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Elektrotechniek</span>
          </div>
          <h1>Elektrotechniek<br /><span>voor particulier & bedrijf</span></h1>
          <p>Van installatie en NEN-keuringen tot camerabeveiliging en domotica. Koertshuis Elektrotechniek is uw vakkundige partner voor alles op elektrotechnisch gebied.</p>
        </div>
      </section>

      <section className="services-sec">
        <div className="sec-inner">
          <div className="services-grid">
            {SERVICES.map(s => (
              <div key={s.title} className="service-card">
                <div className="service-num" />
                <div className="service-title">{s.title}</div>
                <p className="service-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="info-strip">
        <div className="info-inner">
          <div className="info-img">
            <img src="/elektrotechniek.png" alt="Elektrotechniek werkzaamheden" />
          </div>
          <div className="info-content">
            <h2>Particulier én zakelijk</h2>
            <p>Wij werken voor particulieren en zakelijke opdrachtgevers. Voor een installatie van een schakelaar tot installatie en onderhoud van complexe elektrotechnische installaties bent u bij ons aan het goede adres.</p>
            <p>Tevens verzorgen wij verlichtingsinstallaties, aanleggen en onderhouden van noodverlichting, NEN-keuringen, domotica en schotelinstallaties.</p>
            <Link href="/contact" style={{ display:"inline-block", marginTop:8, background:"var(--red)", color:"#fff", fontWeight:700, fontSize:14, padding:"12px 24px", borderRadius:8 }}>
              Vraag een offerte aan
            </Link>
          </div>
        </div>
      </section>

      <div className="cta-red">
        <h2>Interesse of meer informatie?</h2>
        <p>Neem vrijblijvend contact op. Wij helpen u graag verder.</p>
        <a href="tel:0541551500" className="btn-white">Bel 0541 55 1500</a>
        <Link href="/contact" className="btn-woutline">Stuur een bericht</Link>
      </div>
    </>
  );
}
