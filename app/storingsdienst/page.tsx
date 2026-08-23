import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Storingsdienst 24/7" };

export default function StoringsdienstPage() {
  return (
    <>
      <style>{`
        .page-hero-bar { background:var(--red); height:4px; }
        .page-hero { background:var(--dark); color:#fff; padding:72px 32px 64px; }
        .page-hero-inner { max-width:1200px; margin:0 auto; }
        .breadcrumb { font-size:13px; color:rgba(255,255,255,.4); margin-bottom:16px; display:flex; gap:8px; }
        .breadcrumb a { color:rgba(255,255,255,.4); }
        .page-hero h1 { font-size:clamp(32px,5vw,56px); font-weight:900; letter-spacing:-.04em; line-height:1.1; margin-bottom:16px; }
        .page-hero h1 span { color:var(--red); }
        .page-hero p { font-size:17px; color:rgba(255,255,255,.55); line-height:1.75; max-width:560px; }

        .phone-cta { background:var(--red); padding:48px 32px; text-align:center; }
        .phone-big { font-size:clamp(36px,6vw,72px); font-weight:900; color:#fff; letter-spacing:-.04em; display:block; text-decoration:none; margin-bottom:8px; transition:transform .15s; }
        .phone-big:hover { transform:scale(1.02); }
        .phone-sub { font-size:15px; color:rgba(255,255,255,.75); font-weight:500; }

        .info-sec { padding:80px 32px; }
        .sec-inner { max-width:1200px; margin:0 auto; }
        .info-grid { display:grid; grid-template-columns:1fr 1fr; gap:48px; }
        .info-card { background:#fff; border:1.5px solid var(--border); border-radius:16px; padding:36px 32px; }
        .info-card-bar { width:36px; height:3px; background:var(--red); border-radius:2px; margin-bottom:20px; }
        .info-card h3 { font-size:20px; font-weight:800; color:var(--dark); margin-bottom:12px; letter-spacing:-.02em; }
        .info-card p { font-size:14px; color:var(--muted); line-height:1.8; }

        .steps-sec { background:var(--light); border-top:1px solid var(--border); padding:80px 32px; }
        .steps-sec h2 { font-size:clamp(26px,4vw,40px); font-weight:900; letter-spacing:-.04em; color:var(--dark); text-align:center; margin-bottom:48px; }
        .steps-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:24px; max-width:900px; margin:0 auto; }
        .step { text-align:center; padding:32px 24px; }
        .step-num { width:48px; height:48px; background:var(--red); color:#fff; font-size:20px; font-weight:900; border-radius:50%; display:flex; align-items:center; justify-content:center; margin:0 auto 18px; }
        .step h4 { font-size:16px; font-weight:800; color:var(--dark); margin-bottom:8px; }
        .step p { font-size:13px; color:var(--muted); line-height:1.7; }

        @media(max-width:768px){ .info-grid{grid-template-columns:1fr;} .steps-grid{grid-template-columns:1fr;} }
      `}</style>

      <div className="page-hero-bar" />
      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Storingsdienst</span>
          </div>
          <h1>Storingsdienst<br /><span>24 uur per dag, 7 dagen per week</span></h1>
          <p>Storingen komen altijd ongelegen. Wij staan klaar om uw elektrotechnische storing snel en vakkundig op te lossen, op elk moment van de dag.</p>
        </div>
      </section>

      <div className="phone-cta">
        <a href="tel:0541551500" className="phone-big">0541 55 1500</a>
        <p className="phone-sub">Bel direct voor spoedhulp &mdash; 24 uur per dag bereikbaar</p>
      </div>

      <section className="info-sec">
        <div className="sec-inner">
          <div className="info-grid">
            <div className="info-card">
              <div className="info-card-bar" />
              <h3>Acuut hulp nodig?</h3>
              <p>Wanneer u te maken krijgt met een elektrotechnische storing helpen wij u snel en vakkundig. Heeft u een acute storing in uw stroomvoorziening of een kortsluiting? Uw probleem wordt direct opgelost of we zoeken een zo passend mogelijke oplossing.</p>
            </div>
            <div className="info-card">
              <div className="info-card-bar" />
              <h3>Altijd bereikbaar</h3>
              <p>Wij begrijpen dat storingen geen rekening houden met kantooruren. Daarom zijn wij 24 uur per dag en 7 dagen per week bereikbaar op 0541 55 1500. Ook in het weekend en op feestdagen staan wij voor u klaar.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="steps-sec">
        <h2>Hoe werkt het?</h2>
        <div className="steps-grid">
          <div className="step">
            <div className="step-num">1</div>
            <h4>Bel ons direct</h4>
            <p>Bel 0541 55 1500. We zijn dag en nacht bereikbaar, ook in het weekend en op feestdagen.</p>
          </div>
          <div className="step">
            <div className="step-num">2</div>
            <h4>Diagnose & plan</h4>
            <p>We inventariseren uw storing telefonisch en plannen zo snel mogelijk een monteur in bij u langs.</p>
          </div>
          <div className="step">
            <div className="step-num">3</div>
            <h4>Probleem opgelost</h4>
            <p>Onze vakkundige monteur lost de storing direct op, of zorgt voor een tijdelijke oplossing totdat het definitief verholpen is.</p>
          </div>
        </div>
      </section>
    </>
  );
}
