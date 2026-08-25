"use client";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

const PROJECTS = [
  {
    title: "Morsink Dier & Hobby",
    desc: "Voor deze nieuw te bouwen groene vakwinkel hebben we de gehele elektrotechnische installatie en verlichting verzorgd.",
    tags: ["Complete installatie", "Verlichting"],
    images: [
      "/projecten/morsink-I.jpg",
      "/projecten/Morsink-II.jpg",
      "/projecten/morsink.jpg",
      "/projecten/20-07-2017-041.jpg",
      "/projecten/20-07-2017-038.jpg",
      "/projecten/morsink-I-1.jpg",
      "/projecten/20-07-2017-037.jpg",
    ],
  },
  {
    title: "Bakkerij Pinners / Wantia",
    desc: "Verlichting en elektrawerkzaamheden verzorgd bij de verbouwing van deze mooie bakkerswinkel.",
    tags: ["Verlichting", "Elektra"],
    images: [
      "/projecten/Pin.jpg",
      "/projecten/Pin-II.jpg",
    ],
  },
  {
    title: "Complete installatie",
    desc: "Bij dit mooie project hebben we de complete elektrische installatie aangelegd, inclusief de verlichting.",
    tags: ["Complete installatie", "Verlichting"],
    images: [
      "/projecten/project-verlichting-IIII.jpg",
      "/projecten/project-verlichting-VI.jpg",
      "/projecten/project-verlichting-III.jpg",
      "/projecten/verlichting-VIII.jpg",
      "/projecten/verlichting-VIIII.jpg",
    ],
  },
  {
    title: "Wereldrestaurant Puur",
    desc: "Voor dit wereldrestaurant in Emmen hebben we de complete installatie aangelegd, apparatuur en verlichting aangesloten, en een 400 Ampere onderverdeler geplaatst.",
    tags: ["Complete installatie", "400A", "Verlichting"],
    images: [
      "/projecten/koertshuis-elektrotechniek-puur.jpg",
      "/projecten/koertshuis-elektrotechniek-puur-III.jpg",
      "/projecten/koertshuis-elektrotechniek-puur-I.jpg",
      "/projecten/koertshuis-elektrotechniek-puur-II.jpg",
      "/projecten/koertshuis-elektrotechniek-puur-V.jpg",
      "/projecten/koertshuis-elektrotechniek-puur-IV.jpg",
    ],
  },
  {
    title: "'t Keampke",
    desc: "Voor deze nieuw te bouwen groepsaccommodatie in De Lutte hebben wij de complete elektrotechnische installatie verzorgd.",
    tags: ["Complete installatie", "Nieuwbouw"],
    images: [
      "/projecten/koertshuis-sliderfoto-keampke1.jpg",
      "/projecten/keampke-keuken-1980x1110.jpg",
      "/projecten/keampke-buiten-hal-entree.jpg",
    ],
  },
  {
    title: "Restaurant & Buitenplaats Florilympha",
    desc: "Voor de uitbreiding van het restaurant hebben we de complete elektrotechnische installatie verzorgd.",
    tags: ["Complete installatie", "Uitbreiding"],
    images: [
      "/projecten/florilympha_1980x1110.jpg",
      "/projecten/florilympha-slide-1980.jpg",
      "/projecten/20150212_florilympha-4.jpg",
    ],
  },
  {
    title: "Uitslag B.V.",
    desc: "Voor deze modelmakerij hebben we de kantoren voorzien van LED-verlichting, diverse machines aangesloten en de stroomvoorziening uitgebreid naar 630A.",
    tags: ["LED-verlichting", "Machineaansluiting", "630A"],
    images: [
      "/projecten/koertshuis_slider-uitslag.jpg",
      "/projecten/uitslag-5-slider1980.jpg",
    ],
  },
];

export default function ProjectenClient() {
  const [lightbox, setLightbox] = useState<{ project: number; photo: number } | null>(null);

  const closeLightbox = useCallback(() => setLightbox(null), []);

  const prevPhoto = useCallback(() => {
    if (!lightbox) return;
    const imgs = PROJECTS[lightbox.project].images;
    setLightbox({ ...lightbox, photo: (lightbox.photo - 1 + imgs.length) % imgs.length });
  }, [lightbox]);

  const nextPhoto = useCallback(() => {
    if (!lightbox) return;
    const imgs = PROJECTS[lightbox.project].images;
    setLightbox({ ...lightbox, photo: (lightbox.photo + 1) % imgs.length });
  }, [lightbox]);

  useEffect(() => {
    if (!lightbox) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prevPhoto();
      if (e.key === "ArrowRight") nextPhoto();
    };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [lightbox, closeLightbox, prevPhoto, nextPhoto]);

  const currentProject = lightbox !== null ? PROJECTS[lightbox.project] : null;
  const currentImg = lightbox !== null ? PROJECTS[lightbox.project].images[lightbox.photo] : null;

  return (
    <>
      <style>{`
        /* Hero */
        .proj-hero { background:var(--dark); color:#fff; padding:72px 32px 64px; }
        .proj-hero-inner { max-width:1200px; margin:0 auto; }
        .breadcrumb { font-size:13px; color:rgba(255,255,255,.4); margin-bottom:16px; display:flex; gap:8px; align-items:center; }
        .breadcrumb a { color:rgba(255,255,255,.4); transition:color .15s; }
        .breadcrumb a:hover { color:rgba(255,255,255,.8); }
        .proj-hero h1 { font-size:clamp(32px,5vw,56px); font-weight:900; letter-spacing:-.04em; line-height:1.1; margin-bottom:16px; }
        .proj-hero h1 span { color:var(--red); }
        .proj-hero p { font-size:17px; color:rgba(255,255,255,.55); line-height:1.75; max-width:560px; }
        .proj-hero-bar { background:var(--red); height:4px; }

        /* Stats strip */
        .stats-strip { background:#fff; border-bottom:1px solid var(--border); padding:32px; }
        .stats-inner { max-width:1200px; margin:0 auto; display:flex; gap:48px; }
        .stat { display:flex; flex-direction:column; gap:4px; }
        .stat-num { font-size:32px; font-weight:900; color:var(--red); letter-spacing:-.03em; line-height:1; }
        .stat-label { font-size:13px; color:var(--muted); font-weight:500; }

        /* Grid */
        .projects-sec { padding:72px 32px; background:var(--light); }
        .projects-inner { max-width:1200px; margin:0 auto; }
        .projects-grid { display:grid; grid-template-columns:repeat(2,1fr); gap:28px; }

        /* Card */
        .proj-card { background:#fff; border-radius:20px; overflow:hidden; border:1.5px solid var(--border); transition:transform .2s,box-shadow .2s,border-color .2s; cursor:pointer; }
        .proj-card:hover { transform:translateY(-6px); box-shadow:0 24px 64px rgba(0,0,0,.1); border-color:var(--red); }
        .proj-card-img { position:relative; overflow:hidden; height:280px; }
        .proj-card-img img { width:100%; height:100%; object-fit:cover; transition:transform .4s; display:block; }
        .proj-card:hover .proj-card-img img { transform:scale(1.05); }
        .photo-count { position:absolute; bottom:14px; right:14px; background:rgba(0,0,0,.72); color:#fff; font-size:12px; font-weight:700; padding:5px 11px; border-radius:20px; display:flex; align-items:center; gap:5px; backdrop-filter:blur(4px); }
        .proj-card-body { padding:24px 28px 28px; }
        .proj-tags { display:flex; gap:6px; flex-wrap:wrap; margin-bottom:14px; }
        .proj-tag { font-size:11px; font-weight:700; text-transform:uppercase; letter-spacing:.06em; padding:3px 10px; border-radius:20px; background:rgba(216,30,5,.08); color:var(--red); border:1px solid rgba(216,30,5,.18); }
        .proj-card-title { font-size:20px; font-weight:900; color:var(--dark); letter-spacing:-.03em; margin-bottom:10px; line-height:1.2; }
        .proj-card-desc { font-size:14px; color:var(--muted); line-height:1.75; margin-bottom:20px; }
        .proj-card-cta { display:inline-flex; align-items:center; gap:6px; font-size:13px; font-weight:700; color:var(--red); transition:gap .15s; }
        .proj-card-cta:hover { gap:10px; }

        /* CTA */
        .cta-red { background:var(--red); color:#fff; padding:56px 32px; text-align:center; }
        .cta-red h2 { font-size:clamp(22px,3.5vw,38px); font-weight:900; letter-spacing:-.04em; margin-bottom:12px; }
        .cta-red p { font-size:15px; color:rgba(255,255,255,.75); margin-bottom:28px; }
        .btn-white { background:#fff; color:var(--red); font-size:15px; font-weight:800; padding:13px 32px; border-radius:8px; border:none; display:inline-block; transition:transform .15s; margin:4px; }
        .btn-white:hover { transform:translateY(-2px); }
        .btn-woutline { background:transparent; color:#fff; font-size:14px; font-weight:600; padding:12px 24px; border-radius:8px; border:1.5px solid rgba(255,255,255,.35); display:inline-block; transition:border-color .15s; margin:4px; }
        .btn-woutline:hover { border-color:#fff; }

        /* Lightbox */
        .lightbox { position:fixed; inset:0; z-index:1000; background:rgba(0,0,0,.96); display:flex; flex-direction:column; }
        .lightbox-header { display:flex; align-items:center; justify-content:space-between; padding:20px 28px; }
        .lightbox-title { color:#fff; font-size:16px; font-weight:800; letter-spacing:-.02em; }
        .lightbox-counter { color:rgba(255,255,255,.5); font-size:13px; font-weight:600; }
        .lightbox-close { background:rgba(255,255,255,.1); border:none; color:#fff; width:40px; height:40px; border-radius:50%; font-size:18px; display:flex; align-items:center; justify-content:center; cursor:pointer; transition:background .15s; }
        .lightbox-close:hover { background:rgba(255,255,255,.2); }
        .lightbox-img-wrap { flex:1; display:flex; align-items:center; justify-content:center; padding:0 80px; min-height:0; position:relative; }
        .lightbox-img-wrap img { max-width:100%; max-height:100%; object-fit:contain; border-radius:8px; display:block; }
        .lb-btn { position:absolute; top:50%; transform:translateY(-50%); background:rgba(255,255,255,.1); border:none; color:#fff; width:52px; height:52px; border-radius:50%; font-size:22px; display:flex; align-items:center; justify-content:center; cursor:pointer; transition:background .15s; }
        .lb-btn:hover { background:rgba(255,255,255,.2); }
        .lb-btn.prev { left:16px; }
        .lb-btn.next { right:16px; }
        .lightbox-thumbs { display:flex; gap:8px; padding:16px 28px 24px; overflow-x:auto; scrollbar-width:none; justify-content:center; }
        .lightbox-thumbs::-webkit-scrollbar { display:none; }
        .lb-thumb { width:60px; height:60px; border-radius:8px; overflow:hidden; border:2px solid transparent; cursor:pointer; transition:border-color .15s,opacity .15s; opacity:.5; flex-shrink:0; }
        .lb-thumb.active { border-color:#fff; opacity:1; }
        .lb-thumb:hover { opacity:.9; }
        .lb-thumb img { width:100%; height:100%; object-fit:cover; display:block; }

        @media(max-width:860px) { .projects-grid{grid-template-columns:1fr;} .stats-inner{gap:28px;} }
        @media(max-width:580px) {
          .lightbox-img-wrap { padding:0 52px; }
          .lb-btn { width:40px; height:40px; font-size:16px; }
          .lb-btn.prev { left:8px; }
          .lb-btn.next { right:8px; }
        }
      `}</style>

      {/* Hero */}
      <div className="proj-hero-bar" />
      <section className="proj-hero">
        <div className="proj-hero-inner">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/elektrotechniek">Elektrotechniek</Link>
            <span>/</span>
            <span>Projecten</span>
          </div>
          <h1>Onze <span>projecten</span></h1>
          <p>Van nieuwbouw tot renovatie, van LED-verlichting tot complete elektrotechnische installaties. Bekijk een selectie van onze gerealiseerde projecten.</p>
        </div>
      </section>

      {/* Stats */}
      <div className="stats-strip">
        <div className="stats-inner">
          <div className="stat">
            <span className="stat-num">7</span>
            <span className="stat-label">Gerealiseerde projecten</span>
          </div>
          <div className="stat">
            <span className="stat-num">28</span>
            <span className="stat-label">Projectfoto&apos;s</span>
          </div>
          <div className="stat">
            <span className="stat-num">30+</span>
            <span className="stat-label">Jaar ervaring</span>
          </div>
        </div>
      </div>

      {/* Grid */}
      <section className="projects-sec">
        <div className="projects-inner">
          <div className="projects-grid">
            {PROJECTS.map((proj, pi) => (
              <div
                key={proj.title}
                className="proj-card"
                onClick={() => setLightbox({ project: pi, photo: 0 })}
              >
                <div className="proj-card-img">
                  <img src={proj.images[0]} alt={proj.title} />
                  {proj.images.length > 1 && (
                    <div className="photo-count">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                      {proj.images.length} foto&apos;s
                    </div>
                  )}
                </div>
                <div className="proj-card-body">
                  <div className="proj-tags">
                    {proj.tags.map(t => (
                      <span key={t} className="proj-tag">{t}</span>
                    ))}
                  </div>
                  <div className="proj-card-title">{proj.title}</div>
                  <p className="proj-card-desc">{proj.desc}</p>
                  <span className="proj-card-cta">
                    Bekijk foto&apos;s
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="cta-red">
        <h2>Heeft u een project voor ons?</h2>
        <p>Neem vrijblijvend contact op. Wij maken graag een offerte op maat.</p>
        <a href="tel:0541551500" className="btn-white">Bel 0541 55 1500</a>
        <Link href="/contact" className="btn-woutline">Stuur een bericht</Link>
      </div>

      {/* Lightbox */}
      {lightbox !== null && currentProject && currentImg && (
        <div className="lightbox" onClick={closeLightbox}>
          <div className="lightbox-header" onClick={e => e.stopPropagation()}>
            <div>
              <div className="lightbox-title">{currentProject.title}</div>
              <div className="lightbox-counter">{lightbox.photo + 1} / {currentProject.images.length}</div>
            </div>
            <button className="lightbox-close" onClick={closeLightbox} aria-label="Sluiten">✕</button>
          </div>

          <div className="lightbox-img-wrap" onClick={e => e.stopPropagation()}>
            <button className="lb-btn prev" onClick={prevPhoto} aria-label="Vorige foto">‹</button>
            <img src={currentImg} alt={currentProject.title} />
            <button className="lb-btn next" onClick={nextPhoto} aria-label="Volgende foto">›</button>
          </div>

          <div className="lightbox-thumbs" onClick={e => e.stopPropagation()}>
            {currentProject.images.map((img, i) => (
              <div
                key={img}
                className={`lb-thumb ${i === lightbox.photo ? "active" : ""}`}
                onClick={() => setLightbox({ ...lightbox, photo: i })}
              >
                <img src={img} alt={`${currentProject.title} foto ${i + 1}`} />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
