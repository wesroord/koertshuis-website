import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Koertshuis Elektrotechniek | Elektrotechniek, Storingsdienst & Winkel in De Lutte",
};

const DIENSTEN = [
  {
    title: "Elektrotechniek",
    desc: "Van het plaatsen van een schakelaar tot complete elektrotechnische installaties in woningen en bedrijfspanden. Wij doen het vakkundig.",
    img: "/elektrotechniek.png",
    href: "/elektrotechniek",
    items: ["Elektrische installaties", "NEN-keuringen", "Camerabeveiliging", "Domotica & satelliet"],
  },
  {
    title: "Storingsdienst",
    desc: "Storingen komen altijd ongelegen. Daarom staan wij 24 uur per dag, 7 dagen per week voor u klaar om uw storing snel op te lossen.",
    img: "/storing.png",
    href: "/storingsdienst",
    items: ["24/7 bereikbaar", "Snel ter plaatse", "Stroomstoring", "Kortsluiting"],
  },
  {
    title: "Winkel",
    desc: "In onze winkel in De Lutte vindt u een ruime keuze aan elektrische apparatuur, schakelmateriaal en meer. Bij ons staat de klant centraal.",
    img: "/winkel.jpg",
    href: "/winkel",
    items: ["Huishoudelijke apparaten", "Schakelmateriaal", "Verlichting & lampen", "Canal Digital dealer"],
  },
];

const USP = [
  { title: "24/7 Storingsdienst", desc: "Dag en nacht bereikbaar voor spoedreparaties en storingen." },
  { title: "Vakkundig personeel", desc: "Gecertificeerde elektrotechnici met jarenlange ervaring." },
  { title: "Particulier & zakelijk", desc: "Wij werken voor zowel particulieren als bedrijven." },
  { title: "Lokaal in De Lutte", desc: "Snel ter plaatse in De Lutte en de gehele regio Twente." },
];

export default function HomePage() {
  return (
    <>
      <style>{`
        /* Hero */
        .hero { background:linear-gradient(135deg,var(--dark) 0%,#2d2d2d 100%); color:#fff; padding:80px 32px; position:relative; overflow:hidden; }
        .hero::before { content:''; position:absolute; top:0; left:0; right:0; bottom:0; background:url('/elektrotechniek.png') center/cover no-repeat; opacity:.08; pointer-events:none; }
        .hero-inner { max-width:1200px; margin:0 auto; position:relative; z-index:2; display:grid; grid-template-columns:1fr 1fr; gap:64px; align-items:center; }
        .hero-badge { display:inline-block; background:var(--red); color:#fff; font-size:11px; font-weight:800; letter-spacing:.1em; text-transform:uppercase; padding:6px 16px; border-radius:100px; margin-bottom:20px; }
        .hero h1 { font-size:clamp(32px,4.5vw,58px); font-weight:900; letter-spacing:-.03em; line-height:1.1; margin-bottom:20px; }
        .hero h1 span { color:var(--red); }
        .hero p { font-size:17px; color:rgba(255,255,255,.65); line-height:1.75; margin-bottom:36px; max-width:480px; }
        .hero-btns { display:flex; gap:12px; flex-wrap:wrap; }
        .btn-red { background:var(--red); color:#fff; font-size:15px; font-weight:700; padding:14px 32px; border-radius:8px; border:none; display:inline-block; transition:background .15s,transform .15s; }
        .btn-red:hover { background:var(--red-dark); transform:translateY(-1px); }
        .btn-outline { background:transparent; color:#fff; font-size:15px; font-weight:600; padding:13px 28px; border-radius:8px; border:1.5px solid rgba(255,255,255,.3); display:inline-block; transition:border-color .15s,background .15s; }
        .btn-outline:hover { border-color:rgba(255,255,255,.7); background:rgba(255,255,255,.05); }
        .hero-visual { display:flex; flex-direction:column; gap:12px; }
        .hero-stat { background:rgba(255,255,255,.06); border:1px solid rgba(255,255,255,.1); border-radius:14px; padding:20px 24px; }
        .hero-stat-num { font-size:28px; font-weight:900; color:var(--red); letter-spacing:-.03em; line-height:1; margin-bottom:4px; }
        .hero-stat-label { font-size:13px; color:rgba(255,255,255,.5); font-weight:500; }
        .hero-phone { background:var(--red); border-radius:14px; padding:20px 24px; display:flex; align-items:center; gap:16px; }
        .hero-phone-icon { font-size:28px; }
        .hero-phone-text { font-size:11px; color:rgba(255,255,255,.75); font-weight:700; text-transform:uppercase; letter-spacing:.07em; margin-bottom:4px; }
        .hero-phone-num { font-size:22px; font-weight:900; color:#fff; letter-spacing:-.01em; }

        /* Diensten */
        .diensten { padding:80px 32px; background:var(--light); }
        .sec-inner { max-width:1200px; margin:0 auto; }
        .sec-header { text-align:center; margin-bottom:52px; }
        .sec-label { font-size:11px; font-weight:800; letter-spacing:.12em; text-transform:uppercase; color:var(--red); margin-bottom:10px; }
        .sec-title { font-size:clamp(26px,4vw,44px); font-weight:900; letter-spacing:-.04em; color:var(--dark); line-height:1.1; }
        .diensten-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:24px; }
        .dienst-card { background:#fff; border-radius:18px; overflow:hidden; border:1.5px solid var(--border); transition:transform .25s,box-shadow .25s,border-color .25s; display:flex; flex-direction:column; }
        .dienst-card:hover { transform:translateY(-6px); box-shadow:0 20px 60px rgba(0,0,0,.09); border-color:var(--red); }
        .dienst-img { height:200px; overflow:hidden; background:#f0f0f0; }
        .dienst-img img { width:100%; height:100%; object-fit:cover; transition:transform .4s; }
        .dienst-card:hover .dienst-img img { transform:scale(1.04); }
        .dienst-body { padding:28px; flex:1; display:flex; flex-direction:column; }
        .dienst-title { font-size:20px; font-weight:800; color:var(--dark); margin-bottom:10px; letter-spacing:-.02em; }
        .dienst-desc { font-size:14px; color:var(--muted); line-height:1.75; margin-bottom:20px; flex:1; }
        .dienst-items { list-style:none; display:flex; flex-direction:column; gap:7px; margin-bottom:24px; }
        .dienst-items li { font-size:13px; color:var(--text); display:flex; align-items:center; gap:8px; }
        .dienst-items li::before { content:''; display:block; width:6px; height:6px; border-radius:50%; background:var(--red); flex-shrink:0; }
        .dienst-link { display:inline-flex; align-items:center; gap:6px; color:var(--red); font-size:14px; font-weight:700; margin-top:auto; }
        .dienst-link::after { content:'→'; transition:transform .15s; }
        .dienst-card:hover .dienst-link::after { transform:translateX(4px); }

        /* USPs */
        .usps { padding:64px 32px; background:#fff; border-top:1px solid var(--border); border-bottom:1px solid var(--border); }
        .usp-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:24px; max-width:1200px; margin:0 auto; }
        .usp-card { text-align:center; padding:28px 20px; }
        .usp-divider { width:32px; height:3px; background:var(--red); border-radius:2px; margin:0 auto 16px; }
        .usp-title { font-size:15px; font-weight:800; color:var(--dark); margin-bottom:8px; }
        .usp-desc { font-size:13px; color:var(--muted); line-height:1.65; }

        /* CTA banner */
        .cta-banner { background:var(--red); color:#fff; padding:60px 32px; text-align:center; }
        .cta-banner h2 { font-size:clamp(24px,4vw,42px); font-weight:900; letter-spacing:-.03em; margin-bottom:14px; }
        .cta-banner p { font-size:16px; color:rgba(255,255,255,.8); margin-bottom:32px; line-height:1.7; max-width:520px; margin-left:auto; margin-right:auto; }
        .btn-white { background:#fff; color:var(--red); font-size:15px; font-weight:800; padding:14px 36px; border-radius:8px; border:none; display:inline-block; transition:transform .15s; }
        .btn-white:hover { transform:translateY(-2px); }

        /* Openingstijden strip */
        .hours-strip { background:var(--dark); color:#fff; padding:40px 32px; }
        .hours-inner { max-width:1200px; margin:0 auto; display:grid; grid-template-columns:auto 1fr; gap:48px; align-items:center; }
        .hours-title { font-size:20px; font-weight:800; margin-bottom:4px; }
        .hours-sub { font-size:13px; color:rgba(255,255,255,.4); }
        .hours-grid { display:grid; grid-template-columns:repeat(6,1fr); gap:4px; }
        .hours-day { background:rgba(255,255,255,.05); border-radius:8px; padding:10px 8px; text-align:center; }
        .hours-day-name { font-size:11px; font-weight:700; color:rgba(255,255,255,.45); text-transform:uppercase; letter-spacing:.05em; margin-bottom:5px; }
        .hours-day-time { font-size:11px; color:#fff; line-height:1.4; }
        .hours-day.closed { opacity:.4; }

        @media(max-width:900px){
          .hero-inner { grid-template-columns:1fr; gap:40px; }
          .hero-visual { display:grid; grid-template-columns:1fr 1fr; }
          .diensten-grid { grid-template-columns:1fr; }
          .usp-grid { grid-template-columns:1fr 1fr; }
          .hours-inner { grid-template-columns:1fr; }
          .hours-grid { grid-template-columns:repeat(3,1fr); }
        }
        @media(max-width:580px){
          .usp-grid { grid-template-columns:1fr 1fr; }
          .hero-visual { grid-template-columns:1fr; }
        }
      `}</style>

      {/* HERO */}
      <section className="hero">
        <div className="hero-inner">
          <div>
            <div className="hero-badge">De Lutte · Twente</div>
            <h1>Uw specialist in <span>elektrotechniek</span> en meer</h1>
            <p>Van installatie tot storingsdienst en winkel. Koertshuis Elektrotechniek staat klaar voor particulieren én bedrijven in De Lutte en omgeving.</p>
            <div className="hero-btns">
              <Link href="/elektrotechniek" className="btn-red">Onze diensten</Link>
              <Link href="/contact" className="btn-outline">Neem contact op</Link>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-phone">
              <div className="hero-phone-icon">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.49 12 19.79 19.79 0 0 1 1.21 3.18 2 2 0 0 1 3.22 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16z"/></svg>
              </div>
              <div>
                <div className="hero-phone-text">24/7 Storingsdienst</div>
                <a href="tel:0541551500" className="hero-phone-num">0541 55 1500</a>
              </div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-num">24/7</div>
              <div className="hero-stat-label">Bereikbaar voor storingen</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-num">30+</div>
              <div className="hero-stat-label">Jaar ervaring in de regio</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-num">100%</div>
              <div className="hero-stat-label">Gecertificeerde monteurs</div>
            </div>
          </div>
        </div>
      </section>

      {/* USPs */}
      <section className="usps">
        <div className="usp-grid">
          {USP.map(u => (
            <div key={u.title} className="usp-card">
              <div className="usp-divider" />
              <div className="usp-title">{u.title}</div>
              <p className="usp-desc">{u.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DIENSTEN */}
      <section className="diensten">
        <div className="sec-inner">
          <div className="sec-header">
            <div className="sec-label">Wat wij doen</div>
            <h2 className="sec-title">Onze diensten</h2>
          </div>
          <div className="diensten-grid">
            {DIENSTEN.map(d => (
              <div key={d.href} className="dienst-card">
                <div className="dienst-img">
                  <img src={d.img} alt={d.title} />
                </div>
                <div className="dienst-body">
                  <div className="dienst-title">{d.title}</div>
                  <p className="dienst-desc">{d.desc}</p>
                  <ul className="dienst-items">
                    {d.items.map(i => <li key={i}>{i}</li>)}
                  </ul>
                  <Link href={d.href} className="dienst-link">Meer informatie</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OPENINGSTIJDEN */}
      <div className="hours-strip">
        <div className="hours-inner">
          <div>
            <div className="hours-title">Openingstijden winkel</div>
            <div className="hours-sub">Dorpstraat 34, De Lutte</div>
          </div>
          <div className="hours-grid">
            {[
              { d:"Ma", t:"8:30–12:30\n13:30–17:30" },
              { d:"Di", t:"8:30–12:30" },
              { d:"Wo", t:"8:30–12:30\n13:30–17:30" },
              { d:"Do", t:"8:30–12:30\n13:30–17:30" },
              { d:"Vr", t:"8:30–12:30\n13:30–17:30" },
              { d:"Za", t:"8:30–12:00" },
            ].map(h => (
              <div key={h.d} className="hours-day">
                <div className="hours-day-name">{h.d}</div>
                <div className="hours-day-time">{h.t.split('\n').map((l,i) => <span key={i} style={{display:'block'}}>{l}</span>)}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <section className="cta-banner">
        <h2>Direct een vraag of storing?</h2>
        <p>Wij staan voor u klaar, ook buiten kantooruren. Bel ons direct voor snelle hulp.</p>
        <a href="tel:0541551500" className="btn-white">Bel 0541 55 1500</a>
      </section>
    </>
  );
}
