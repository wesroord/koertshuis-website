"use client";
import { useState } from "react";
import Link from "next/link";

const CATEGORIES = [
  "Alles",
  "Huishoudelijke apparaten",
  "Verlichting & lampen",
  "Schakelmateriaal",
  "Satelliet & TV",
  "Beveiliging",
  "Overig",
];

const PRODUCTS = [
  { id:1, name:"Wasmachine", cat:"Huishoudelijke apparaten", brand:"Diverse merken", price:"Op aanvraag", img:"/winkel.jpg", desc:"Wij verkopen diverse merken wasmachines voor elke behoefte en budget." },
  { id:2, name:"Droger", cat:"Huishoudelijke apparaten", brand:"Diverse merken", price:"Op aanvraag", img:"/winkel.jpg", desc:"Condensdrogers en warmtepompdrogers in diverse uitvoeringen." },
  { id:3, name:"Vaatwasser", cat:"Huishoudelijke apparaten", brand:"Diverse merken", price:"Op aanvraag", img:"/winkel.jpg", desc:"Inbouw- en vrijstaande vaatwassers, inclusief montage op aanvraag." },
  { id:4, name:"Televisie", cat:"Huishoudelijke apparaten", brand:"Diverse merken", price:"Op aanvraag", img:"/winkel.jpg", desc:"Moderne televisies in diverse formaten met heldere beeldkwaliteit." },
  { id:5, name:"Strijkijzer", cat:"Huishoudelijke apparaten", brand:"Diverse merken", price:"Op aanvraag", img:"/winkel.jpg", desc:"Strijkijzers en stoomstrijkstations van betrouwbare merken." },
  { id:6, name:"Spaarlamp / LED", cat:"Verlichting & lampen", brand:"Diverse merken", price:"Op aanvraag", img:"/winkel.jpg", desc:"Energiezuinige LED-verlichting in alle soorten fittingen en kelvinwaarden." },
  { id:7, name:"Batterijen", cat:"Overig", brand:"Diverse merken", price:"Op aanvraag", img:"/winkel.jpg", desc:"Alkaline en oplaadbare batterijen in alle gebruikelijke maten." },
  { id:8, name:"Wandcontactdoos", cat:"Schakelmateriaal", brand:"Diverse merken", price:"Op aanvraag", img:"/winkel.jpg", desc:"Wandcontactdozen, schakelaars en inbouwmateriaal in diverse kleuren en uitvoeringen." },
  { id:9, name:"Canal Digital pakket", cat:"Satelliet & TV", brand:"Canal Digital", price:"Op aanvraag", img:"/astra-banner.png", desc:"Officieel Canal Digital en Astra dealer. Inclusief montage van het schotelsysteem." },
  { id:10, name:"Schotelsysteem (Astra)", cat:"Satelliet & TV", brand:"Astra", price:"Op aanvraag", img:"/astra-banner.png", desc:"Complete satellietinstallatie door onze erkende monteurs. Inclusief aansluiting." },
  { id:11, name:"Beveiligingscamera", cat:"Beveiliging", brand:"Diverse merken", price:"Op aanvraag", img:"/winkel.jpg", desc:"IP-camera's voor binnen en buiten. Wij verzorgen ook de installatie." },
  { id:12, name:"Buismateriaal", cat:"Schakelmateriaal", brand:"Diverse merken", price:"Op aanvraag", img:"/winkel.jpg", desc:"Elektrotechnisch buismateriaal en toebehoren voor installaties." },
];

export default function WinkelPage() {
  const [activeCat, setActiveCat] = useState("Alles");
  const [search, setSearch] = useState("");

  const filtered = PRODUCTS.filter(p => {
    const matchCat = activeCat === "Alles" || p.cat === activeCat;
    const matchSearch = !search || p.name.toLowerCase().includes(search.toLowerCase()) || p.desc.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

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

        .winkel-main { padding:48px 32px 80px; }
        .winkel-inner { max-width:1200px; margin:0 auto; }

        /* Search */
        .search-bar { display:flex; gap:12px; margin-bottom:32px; }
        .search-input { flex:1; padding:12px 18px; border:1.5px solid var(--border); border-radius:10px; font-size:15px; font-family:inherit; color:var(--dark); outline:none; transition:border-color .15s; }
        .search-input:focus { border-color:var(--red); }
        .search-btn { background:var(--red); color:#fff; border:none; padding:12px 24px; border-radius:10px; font-size:14px; font-weight:700; font-family:inherit; cursor:pointer; }

        /* Category tabs */
        .cat-tabs { display:flex; gap:8px; flex-wrap:wrap; margin-bottom:36px; }
        .cat-tab { background:#fff; border:1.5px solid var(--border); color:var(--text); font-size:13px; font-weight:600; padding:8px 18px; border-radius:100px; cursor:pointer; transition:all .15s; font-family:inherit; }
        .cat-tab:hover { border-color:var(--red); color:var(--red); }
        .cat-tab.active { background:var(--red); border-color:var(--red); color:#fff; }

        /* Product grid */
        .product-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:20px; }
        .product-card { background:#fff; border:1.5px solid var(--border); border-radius:14px; overflow:hidden; transition:transform .2s,box-shadow .2s,border-color .2s; display:flex; flex-direction:column; }
        .product-card:hover { transform:translateY(-4px); box-shadow:0 16px 48px rgba(0,0,0,.09); border-color:#ccc; }
        .product-img { height:180px; overflow:hidden; background:var(--light); }
        .product-img img { width:100%; height:100%; object-fit:contain; padding:16px; transition:transform .3s; }
        .product-card:hover .product-img img { transform:scale(1.05); }
        .product-body { padding:18px 18px 20px; flex:1; display:flex; flex-direction:column; }
        .product-cat { font-size:10px; font-weight:800; letter-spacing:.08em; text-transform:uppercase; color:var(--red); margin-bottom:6px; }
        .product-name { font-size:15px; font-weight:800; color:var(--dark); margin-bottom:6px; letter-spacing:-.02em; }
        .product-brand { font-size:12px; color:var(--muted); margin-bottom:8px; }
        .product-desc { font-size:12px; color:var(--muted); line-height:1.65; flex:1; margin-bottom:14px; }
        .product-price { font-size:13px; font-weight:700; color:var(--dark); margin-bottom:10px; }
        .product-cta { display:block; background:var(--red); color:#fff; text-align:center; padding:9px 16px; border-radius:8px; font-size:13px; font-weight:700; transition:background .15s; }
        .product-cta:hover { background:var(--red-dark); }
        .empty-state { text-align:center; padding:80px 32px; color:var(--muted); grid-column:1/-1; }
        .empty-state h3 { font-size:20px; font-weight:700; margin-bottom:8px; color:var(--dark); }

        /* Dealer strip */
        .dealer-strip { background:var(--light); border-top:1px solid var(--border); border-bottom:1px solid var(--border); padding:40px 32px; text-align:center; }
        .dealer-strip-inner { max-width:800px; margin:0 auto; }
        .dealer-strip h2 { font-size:clamp(20px,3vw,30px); font-weight:800; color:var(--dark); letter-spacing:-.03em; margin-bottom:12px; }
        .dealer-strip p { font-size:15px; color:var(--muted); line-height:1.75; margin-bottom:24px; }
        .dealer-strip img { max-height:80px; margin:0 auto 20px; }

        @media(max-width:1024px){ .product-grid{grid-template-columns:repeat(3,1fr);} }
        @media(max-width:768px){ .product-grid{grid-template-columns:repeat(2,1fr);} }
        @media(max-width:480px){ .product-grid{grid-template-columns:1fr;} }
      `}</style>

      <div className="page-hero-bar" />
      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Winkel</span>
          </div>
          <h1>Onze <span>winkel</span></h1>
          <p>In onze winkel in De Lutte vindt u een ruime keuze aan elektrische apparatuur, schakelmateriaal en meer. Bij ons staat de klant centraal.</p>
        </div>
      </section>

      <div className="dealer-strip">
        <div className="dealer-strip-inner">
          <img src="/astra-banner.png" alt="Canal Digital & Astra dealer" />
          <h2>Officieel Canal Digital & Astra dealer</h2>
          <p>Koertshuis Elektrotechniek is officieel dealer van Canal Digital en Astra. Snel en zorgeloos genieten van radio en tv via Astra? Laat de volledige installatie door onze specialisten uitvoeren.</p>
          <Link href="/contact" style={{ display:"inline-block", background:"var(--red)", color:"#fff", fontWeight:700, fontSize:14, padding:"12px 28px", borderRadius:8 }}>
            Informeer naar installatiekosten
          </Link>
        </div>
      </div>

      <section className="winkel-main">
        <div className="winkel-inner">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Zoek een product..."
              className="search-input"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
            <button className="search-btn">Zoeken</button>
          </div>

          <div className="cat-tabs">
            {CATEGORIES.map(c => (
              <button
                key={c}
                className={`cat-tab${activeCat === c ? " active" : ""}`}
                onClick={() => setActiveCat(c)}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="product-grid">
            {filtered.length === 0 ? (
              <div className="empty-state">
                <h3>Geen producten gevonden</h3>
                <p>Probeer een andere zoekterm of categorie.</p>
              </div>
            ) : filtered.map(p => (
              <div key={p.id} className="product-card">
                <div className="product-img">
                  <img src={p.img} alt={p.name} />
                </div>
                <div className="product-body">
                  <div className="product-cat">{p.cat}</div>
                  <div className="product-name">{p.name}</div>
                  <div className="product-brand">{p.brand}</div>
                  <p className="product-desc">{p.desc}</p>
                  <div className="product-price">{p.price}</div>
                  <Link href="/contact" className="product-cta">Neem contact op</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div style={{ background:"var(--dark)", color:"#fff", padding:"40px 32px", textAlign:"center" }}>
        <p style={{ fontSize:14, color:"rgba(255,255,255,.55)", maxWidth:600, margin:"0 auto 16px" }}>
          Heeft u een specifiek product nodig dat u hier niet ziet? Neem contact op, wij helpen u graag verder en kunnen op bestelling leveren.
        </p>
        <a href="tel:0541551500" style={{ display:"inline-block", background:"var(--red)", color:"#fff", fontWeight:700, fontSize:15, padding:"13px 32px", borderRadius:8, textDecoration:"none" }}>
          Bel 0541 55 1500
        </a>
      </div>
    </>
  );
}
