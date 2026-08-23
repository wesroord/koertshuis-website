import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Vacature" };

export default function VacaturePage() {
  return (
    <>
      <style>{`
        .page-hero-bar { background:var(--red); height:4px; }
        .page-hero { background:var(--dark); color:#fff; padding:72px 32px 64px; }
        .page-hero-inner { max-width:1200px; margin:0 auto; }
        .breadcrumb { font-size:13px; color:rgba(255,255,255,.4); margin-bottom:16px; display:flex; gap:8px; }
        .breadcrumb a { color:rgba(255,255,255,.4); }
        .page-hero h1 { font-size:clamp(32px,5vw,52px); font-weight:900; letter-spacing:-.04em; line-height:1.1; margin-bottom:16px; }
        .page-hero h1 span { color:var(--red); }

        .vac-content { padding:80px 32px; max-width:720px; margin:0 auto; text-align:center; }
        .vac-icon { font-size:56px; margin-bottom:24px; }
        .vac-content h2 { font-size:28px; font-weight:800; color:var(--dark); margin-bottom:16px; }
        .vac-content p { font-size:15px; color:var(--muted); line-height:1.8; margin-bottom:32px; }
        .btn-red { background:var(--red); color:#fff; font-size:15px; font-weight:700; padding:14px 32px; border-radius:8px; border:none; display:inline-block; }
        .btn-red:hover { background:var(--red-dark); }

        .why-work { background:var(--light); border-top:1px solid var(--border); padding:72px 32px; }
        .why-inner { max-width:1200px; margin:0 auto; }
        .why-title { text-align:center; font-size:clamp(24px,4vw,38px); font-weight:900; letter-spacing:-.04em; color:var(--dark); margin-bottom:48px; }
        .why-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:24px; }
        .why-card { background:#fff; border:1.5px solid var(--border); border-radius:14px; padding:28px; }
        .why-icon { font-size:32px; margin-bottom:14px; }
        .why-card h4 { font-size:16px; font-weight:800; color:var(--dark); margin-bottom:8px; }
        .why-card p { font-size:13px; color:var(--muted); line-height:1.7; }

        @media(max-width:768px){ .why-grid{grid-template-columns:1fr 1fr;} }
        @media(max-width:480px){ .why-grid{grid-template-columns:1fr;} }
      `}</style>

      <div className="page-hero-bar" />
      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Vacature</span>
          </div>
          <h1>Werken bij<br /><span>Koertshuis Elektrotechniek</span></h1>
        </div>
      </section>

      <div className="vac-content">
        <div className="vac-icon">🔍</div>
        <h2>Op dit moment geen open vacatures</h2>
        <p>Er zijn op dit moment geen vacatures beschikbaar. Toch enthousiast om bij ons te werken? Stuur een open sollicitatie via het contactformulier, wij houden uw gegevens graag bij de hand.</p>
        <Link href="/contact" className="btn-red">Stuur een open sollicitatie</Link>
      </div>

      <section className="why-work">
        <div className="why-inner">
          <h2 className="why-title">Waarom werken bij Koertshuis?</h2>
          <div className="why-grid">
            {[
              { icon:"🏠", title:"Lokale werkgever", desc:"Wij zijn een gevestigd bedrijf in De Lutte met een sterke naam in de regio Twente." },
              { icon:"🔧", title:"Afwisselend werk", desc:"Van particuliere installaties tot grote bedrijfsprojecten — elke dag is anders." },
              { icon:"📈", title:"Ontwikkeling", desc:"Ruimte voor persoonlijke groei en het bijhouden van vakkennis via trainingen." },
              { icon:"👥", title:"Goed team", desc:"Een kleine, hechte organisatie waar iedereen telt en direct meewerkt." },
              { icon:"⏰", title:"Goede werktijden", desc:"Gestructureerde werktijden met ruimte voor een goede werk-privébalans." },
              { icon:"📞", title:"24/7 storingsdienst", desc:"Deelname aan de storingsdienst, met bijbehorende vergoeding en bereikbaarheidstoelage." },
            ].map(w => (
              <div key={w.title} className="why-card">
                <div className="why-icon">{w.icon}</div>
                <h4>{w.title}</h4>
                <p>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
