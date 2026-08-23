"use client";
import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

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
        .page-hero p { font-size:16px; color:rgba(255,255,255,.5); line-height:1.75; max-width:520px; }

        .contact-main { padding:72px 32px 80px; }
        .contact-inner { max-width:1200px; margin:0 auto; display:grid; grid-template-columns:1fr 420px; gap:64px; align-items:start; }

        /* Form */
        .contact-form h2 { font-size:clamp(22px,3vw,32px); font-weight:900; letter-spacing:-.04em; color:var(--dark); margin-bottom:8px; }
        .contact-form > p { font-size:14px; color:var(--muted); margin-bottom:32px; line-height:1.7; }
        .form-row { display:grid; grid-template-columns:1fr 1fr; gap:16px; }
        .form-group { display:flex; flex-direction:column; gap:6px; margin-bottom:16px; }
        .form-group label { font-size:13px; font-weight:700; color:var(--dark); }
        .form-group input, .form-group textarea, .form-group select { border:1.5px solid var(--border); border-radius:10px; padding:12px 16px; font-size:14px; font-family:inherit; color:var(--dark); outline:none; transition:border-color .15s; background:#fff; }
        .form-group input:focus, .form-group textarea:focus, .form-group select:focus { border-color:var(--red); }
        .form-group textarea { resize:vertical; min-height:140px; }
        .form-submit { background:var(--red); color:#fff; border:none; padding:14px 36px; border-radius:10px; font-size:15px; font-weight:700; font-family:inherit; cursor:pointer; width:100%; transition:background .15s; }
        .form-submit:hover { background:var(--red-dark); }
        .form-success { background:#f0fdf4; border:1.5px solid #bbf7d0; border-radius:12px; padding:24px; text-align:center; color:#15803d; font-weight:600; font-size:15px; }

        /* Sidebar */
        .contact-sidebar { display:flex; flex-direction:column; gap:16px; }
        .contact-info-card { background:#fff; border:1.5px solid var(--border); border-radius:16px; padding:28px 24px; }
        .contact-info-card h3 { font-size:16px; font-weight:800; color:var(--dark); margin-bottom:18px; letter-spacing:-.02em; }
        .contact-info-row { display:flex; gap:12px; align-items:flex-start; margin-bottom:14px; }
        .contact-info-icon { width:36px; height:36px; background:rgba(216,30,5,.08); border-radius:8px; display:flex; align-items:center; justify-content:center; flex-shrink:0; }
        .contact-info-text { font-size:13px; color:var(--muted); line-height:1.6; }
        .contact-info-text strong { color:var(--dark); display:block; font-size:13px; margin-bottom:2px; }
        .contact-info-text a { color:var(--red); font-weight:600; }

        .hours-card { background:#fff; border:1.5px solid var(--border); border-radius:16px; padding:28px 24px; }
        .hours-card h3 { font-size:16px; font-weight:800; color:var(--dark); margin-bottom:18px; letter-spacing:-.02em; }
        .hours-row { display:flex; justify-content:space-between; align-items:center; padding:8px 0; border-bottom:1px solid var(--border); font-size:13px; }
        .hours-row:last-child { border-bottom:none; }
        .hours-day-name { font-weight:600; color:var(--dark); }
        .hours-time { color:var(--muted); }

        .emergency-card { background:var(--red); color:#fff; border-radius:16px; padding:28px 24px; text-align:center; }
        .emergency-card h3 { font-size:16px; font-weight:800; margin-bottom:8px; }
        .emergency-card p { font-size:13px; color:rgba(255,255,255,.75); margin-bottom:16px; line-height:1.65; }
        .emergency-num { font-size:28px; font-weight:900; color:#fff; display:block; text-decoration:none; letter-spacing:-.02em; }
        .emergency-num:hover { text-decoration:underline; }

        @media(max-width:900px){ .contact-inner{grid-template-columns:1fr;} .form-row{grid-template-columns:1fr;} }
      `}</style>

      <div className="page-hero-bar" />
      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Contact</span>
          </div>
          <h1>Mogen we u van <span>dienst zijn?</span></h1>
          <p>Voor vragen, storingen of nieuwe projecten zijn wij dagelijks bereikbaar. Stuur een bericht of bel ons direct.</p>
        </div>
      </section>

      <section className="contact-main">
        <div className="contact-inner">
          <div className="contact-form">
            <h2>Stuur een bericht</h2>
            <p>Vul het formulier in en wij nemen zo snel mogelijk contact met u op, meestal binnen één werkdag.</p>
            {sent ? (
              <div className="form-success">
                Bedankt voor uw bericht! Wij nemen zo snel mogelijk contact met u op.
              </div>
            ) : (
              <form onSubmit={e => { e.preventDefault(); setSent(true); }}>
                <div className="form-row">
                  <div className="form-group">
                    <label>Voornaam *</label>
                    <input type="text" required placeholder="Jan" />
                  </div>
                  <div className="form-group">
                    <label>Achternaam *</label>
                    <input type="text" required placeholder="Jansen" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>E-mailadres *</label>
                    <input type="email" required placeholder="jan@voorbeeld.nl" />
                  </div>
                  <div className="form-group">
                    <label>Telefoonnummer</label>
                    <input type="tel" placeholder="06 12 34 56 78" />
                  </div>
                </div>
                <div className="form-group">
                  <label>Onderwerp *</label>
                  <select required>
                    <option value="">Selecteer een onderwerp</option>
                    <option>Elektrotechniek / installatie</option>
                    <option>Storingsdienst</option>
                    <option>Winkel / product</option>
                    <option>NEN-keuring</option>
                    <option>Camerabeveiliging</option>
                    <option>Satellietinstallatie</option>
                    <option>Overig</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Uw bericht *</label>
                  <textarea required placeholder="Beschrijf uw vraag of project..." />
                </div>
                <button type="submit" className="form-submit">Bericht versturen</button>
              </form>
            )}
          </div>

          <div className="contact-sidebar">
            <div className="contact-info-card">
              <h3>Onze contactgegevens</h3>
              <div className="contact-info-row">
                <div className="contact-info-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--red)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div className="contact-info-text">
                  <strong>Adres</strong>
                  Dorpstraat 34<br />7587 AD De Lutte
                </div>
              </div>
              <div className="contact-info-row">
                <div className="contact-info-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--red)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.49 12 19.79 19.79 0 0 1 1.21 3.18 2 2 0 0 1 3.22 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16z"/></svg>
                </div>
                <div className="contact-info-text">
                  <strong>Telefoon</strong>
                  <a href="tel:0541551500">0541 55 1500</a>
                </div>
              </div>
              <div className="contact-info-row">
                <div className="contact-info-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--red)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </div>
                <div className="contact-info-text">
                  <strong>E-mail</strong>
                  <a href="mailto:info@koertshuiselektro.nl">info@koertshuiselektro.nl</a>
                </div>
              </div>
              <div className="contact-info-row">
                <div className="contact-info-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--red)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                </div>
                <div className="contact-info-text">
                  <strong>KvK-nummer</strong>
                  88481182
                </div>
              </div>
            </div>

            <div className="hours-card">
              <h3>Openingstijden winkel</h3>
              {[
                { d:"Maandag", t:"8:30–12:30 / 13:30–17:30" },
                { d:"Dinsdag", t:"8:30–12:30" },
                { d:"Woensdag", t:"8:30–12:30 / 13:30–17:30" },
                { d:"Donderdag", t:"8:30–12:30 / 13:30–17:30" },
                { d:"Vrijdag", t:"8:30–12:30 / 13:30–17:30" },
                { d:"Zaterdag", t:"8:30–12:00" },
                { d:"Zondag", t:"Gesloten" },
              ].map(h => (
                <div key={h.d} className="hours-row">
                  <span className="hours-day-name">{h.d}</span>
                  <span className="hours-time" style={h.t === "Gesloten" ? { color:"#ccc" } : {}}>{h.t}</span>
                </div>
              ))}
            </div>

            <div className="emergency-card">
              <h3>Storing? Bel direct!</h3>
              <p>24 uur per dag, 7 dagen per week bereikbaar voor spoedreparaties.</p>
              <a href="tel:0541551500" className="emergency-num">0541 55 1500</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
