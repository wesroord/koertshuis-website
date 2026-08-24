export default function SocialSection() {
  return (
    <section className="social-sec">
      <style>{`
        .social-sec { padding:72px 32px; background:var(--light); border-top:1px solid var(--border); }
        .social-inner { max-width:1200px; margin:0 auto; }
        .social-header { text-align:center; margin-bottom:48px; }
        .social-sec-label { font-size:11px; font-weight:800; letter-spacing:.12em; text-transform:uppercase; color:var(--red); margin-bottom:10px; }
        .social-sec-title { font-size:clamp(26px,4vw,44px); font-weight:900; letter-spacing:-.04em; color:var(--dark); line-height:1.1; }
        .social-sec-sub { font-size:15px; color:var(--muted); margin-top:12px; max-width:480px; margin-left:auto; margin-right:auto; line-height:1.7; }
        .social-grid { display:grid; grid-template-columns:1fr 1fr; gap:28px; }
        .social-card { background:#fff; border:1.5px solid var(--border); border-radius:18px; overflow:hidden; display:flex; flex-direction:column; }
        .social-card-head { display:flex; align-items:center; gap:12px; padding:18px 22px; border-bottom:1px solid var(--border); }
        .social-card-platform { font-size:15px; font-weight:800; color:var(--dark); flex:1; }
        .social-card-link { font-size:13px; color:var(--red); font-weight:600; white-space:nowrap; }
        .social-card-link:hover { text-decoration:underline; }

        /* Shared profile card */
        .profile-card { padding:40px 24px; display:flex; flex-direction:column; align-items:center; text-align:center; gap:16px; flex:1; justify-content:center; min-height:320px; }
        .profile-avatar-ring { width:88px; height:88px; border-radius:50%; padding:3px; flex-shrink:0; }
        .profile-avatar-ring--fb { background:#1877F2; }
        .profile-avatar-ring--ig { background:linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888); }
        .profile-avatar-inner { width:100%; height:100%; border-radius:50%; background:#fff; display:flex; align-items:center; justify-content:center; font-size:30px; font-weight:900; }
        .profile-avatar-inner--fb { color:#1877F2; }
        .profile-avatar-inner--ig { color:#dc2743; }
        .profile-name { font-size:17px; font-weight:800; color:var(--dark); }
        .profile-followers { font-size:13px; color:var(--muted); }
        .profile-desc { font-size:14px; color:var(--muted); line-height:1.75; max-width:300px; }
        .profile-btn { display:inline-block; color:#fff; font-size:14px; font-weight:700; padding:13px 32px; border-radius:10px; transition:opacity .15s; margin-top:4px; }
        .profile-btn:hover { opacity:.88; }
        .profile-btn--fb { background:#1877F2; }
        .profile-btn--ig { background:linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366); }

        @media(max-width:768px){ .social-grid{grid-template-columns:1fr;} }
      `}</style>

      <div className="social-inner">
        <div className="social-header">
          <div className="social-sec-label">Volg ons online</div>
          <h2 className="social-sec-title">Blijf op de hoogte</h2>
          <p className="social-sec-sub">Volg Koertshuis op social media voor de laatste producten, aanbiedingen en nieuws uit onze winkel in De Lutte.</p>
        </div>

        <div className="social-grid">
          {/* Facebook */}
          <div className="social-card">
            <div className="social-card-head">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#1877F2">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
              <span className="social-card-platform">Facebook</span>
              <a href="https://www.facebook.com/p/Koertshuis-winkel-100042616847871/" target="_blank" rel="noopener noreferrer" className="social-card-link">Bekijk pagina →</a>
            </div>
            <div className="profile-card">
              <div className="profile-avatar-ring profile-avatar-ring--fb">
                <div className="profile-avatar-inner profile-avatar-inner--fb">K</div>
              </div>
              <div className="profile-name">Koertshuis winkel</div>
              <div className="profile-followers">894 volgers op Facebook</div>
              <p className="profile-desc">Volg onze Facebook pagina voor de laatste producten, winkelnieuws en aanbiedingen uit De Lutte.</p>
              <a href="https://www.facebook.com/p/Koertshuis-winkel-100042616847871/" target="_blank" rel="noopener noreferrer" className="profile-btn profile-btn--fb">
                Volgen op Facebook
              </a>
            </div>
          </div>

          {/* Instagram */}
          <div className="social-card">
            <div className="social-card-head">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <defs>
                  <linearGradient id="ig-grad" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#f09433"/>
                    <stop offset="50%" stopColor="#dc2743"/>
                    <stop offset="100%" stopColor="#bc1888"/>
                  </linearGradient>
                </defs>
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="url(#ig-grad)"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" stroke="url(#ig-grad)"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="url(#ig-grad)"/>
              </svg>
              <span className="social-card-platform">Instagram</span>
              <a href="https://www.instagram.com/koertshuis_de_lutte/" target="_blank" rel="noopener noreferrer" className="social-card-link">Bekijk profiel →</a>
            </div>
            <div className="profile-card">
              <div className="profile-avatar-ring profile-avatar-ring--ig">
                <div className="profile-avatar-inner profile-avatar-inner--ig">K</div>
              </div>
              <div className="profile-name">@koertshuis_de_lutte</div>
              <p className="profile-desc">Volg ons voor de laatste producten en aanbiedingen die we in de winkel hebben. Regelmatig nieuwe posts over ons assortiment in De Lutte.</p>
              <a href="https://www.instagram.com/koertshuis_de_lutte/" target="_blank" rel="noopener noreferrer" className="profile-btn profile-btn--ig">
                Volgen op Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
