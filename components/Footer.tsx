import Link from "next/link";

export default function Footer() {
  return (
    <>
      <style>{`
        .footer { background:var(--dark); color:rgba(255,255,255,.75); font-size:14px; margin-top:auto; }
        .footer-top { max-width:1200px; margin:0 auto; padding:56px 32px 40px; display:grid; grid-template-columns:1.4fr 1fr 1fr; gap:48px; }
        .footer-brand img { height:40px; width:auto; filter:brightness(0) invert(1); margin-bottom:16px; }
        .footer-brand p { color:rgba(255,255,255,.5); line-height:1.7; font-size:13px; }
        .footer-col h4 { color:#fff; font-size:14px; font-weight:700; margin-bottom:16px; letter-spacing:.05em; text-transform:uppercase; }
        .footer-col ul { list-style:none; display:flex; flex-direction:column; gap:10px; }
        .footer-col a { color:rgba(255,255,255,.55); transition:color .15s; }
        .footer-col a:hover { color:#fff; }
        .footer-contact-row { display:flex; align-items:flex-start; gap:10px; margin-bottom:12px; color:rgba(255,255,255,.55); line-height:1.5; }
        .footer-contact-row strong { color:#fff; display:block; }
        .footer-bottom { border-top:1px solid rgba(255,255,255,.08); }
        .footer-bottom-inner { max-width:1200px; margin:0 auto; padding:18px 32px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px; font-size:12px; color:rgba(255,255,255,.3); }
        .footer-bottom a { color:rgba(255,255,255,.4); }
        .footer-bottom a:hover { color:#fff; }
        .footer-red-bar { background:var(--red); height:4px; }
        @media(max-width:768px){
          .footer-top { grid-template-columns:1fr; gap:32px; }
        }
      `}</style>
      <div className="footer-red-bar" />
      <footer className="footer">
        <div className="footer-top">
          <div className="footer-brand">
            <img src="/logo.gif" alt="Koertshuis Elektrotechniek" />
            <p>Uw specialist voor elektrotechniek, storingsdienst en elektrische apparatuur in De Lutte en omgeving.</p>
          </div>
          <div className="footer-col">
            <h4>Navigatie</h4>
            <ul>
              {[["Home","/"],["Elektrotechniek","/elektrotechniek"],["Storingsdienst","/storingsdienst"],["Winkel","/winkel"],["Contact","/contact"],["Vacature","/vacature"]].map(([l,h]) => (
                <li key={h}><Link href={h}>{l}</Link></li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <div className="footer-contact-row">
              <span>
                <strong>Adres</strong>
                Dorpstraat 34<br />7587 AD De Lutte
              </span>
            </div>
            <div className="footer-contact-row">
              <span>
                <strong>Telefoon</strong>
                <a href="tel:0541551500">0541 55 1500</a>
              </span>
            </div>
            <div className="footer-contact-row">
              <span>
                <strong>E-mail</strong>
                <a href="mailto:info@koertshuiselektro.nl">info@koertshuiselektro.nl</a>
              </span>
            </div>
            <div className="footer-contact-row">
              <span>
                <strong>Storing (24/7)</strong>
                <a href="tel:0541551500" style={{ color:"var(--red)", fontWeight:700 }}>0541 55 1500</a>
              </span>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-bottom-inner">
            <span>&copy; {new Date().getFullYear()} Koertshuis Elektrotechniek B.V. &mdash; KvK: 88481182</span>
            <span>Dorpstraat 34, 7587 AD De Lutte</span>
            <span>Powered by <a href="https://www.conneqtai.nl" target="_blank" rel="noopener noreferrer">ConneqtAI</a></span>
          </div>
        </div>
      </footer>
    </>
  );
}
