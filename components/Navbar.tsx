"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV = [
  { label: "Home", href: "/" },
  { label: "Elektrotechniek", href: "/elektrotechniek" },
  { label: "Storingsdienst", href: "/storingsdienst" },
  { label: "Winkel", href: "/winkel" },
  { label: "Contact", href: "/contact" },
  { label: "Vacature", href: "/vacature" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const path = usePathname();

  return (
    <>
      <style>{`
        .topbar { background:var(--red); color:#fff; text-align:center; padding:9px 24px; font-size:13px; font-weight:600; letter-spacing:.01em; }
        .topbar a { color:#fff; text-decoration:underline; text-underline-offset:2px; }
        .navbar { background:#fff; border-bottom:2px solid var(--red); position:sticky; top:0; z-index:100; box-shadow:0 2px 12px rgba(0,0,0,.07); }
        .nav-inner { max-width:1200px; margin:0 auto; padding:0 32px; display:flex; align-items:center; justify-content:space-between; height:72px; }
        .nav-logo img { height:44px; width:auto; }
        .nav-links { display:flex; gap:4px; align-items:center; list-style:none; }
        .nav-links a { font-size:14px; font-weight:600; color:var(--dark); padding:8px 14px; border-radius:6px; transition:background .15s,color .15s; white-space:nowrap; }
        .nav-links a:hover { background:rgba(216,30,5,.07); color:var(--red); }
        .nav-links a.active { color:var(--red); }
        .nav-links a.nav-cta { background:var(--red); color:#fff; padding:9px 20px; border-radius:8px; margin-left:8px; }
        .nav-links a.nav-cta:hover { background:var(--red-dark); }
        .burger { display:none; flex-direction:column; gap:5px; background:none; border:none; padding:8px; }
        .burger span { display:block; width:24px; height:2px; background:var(--dark); border-radius:2px; transition:all .2s; }
        .mobile-menu { display:none; }
        @media(max-width:860px){
          .nav-links { display:none; }
          .burger { display:flex; }
          .mobile-menu { display:block; position:fixed; inset:0; background:#fff; z-index:200; padding:80px 32px 40px; overflow-y:auto; }
          .mobile-menu ul { list-style:none; display:flex; flex-direction:column; gap:0; }
          .mobile-menu a { display:block; font-size:18px; font-weight:700; color:var(--dark); padding:16px 0; border-bottom:1px solid var(--border); }
          .mobile-menu a.active { color:var(--red); }
          .mobile-close { position:absolute; top:20px; right:24px; background:none; border:none; font-size:28px; color:var(--dark); cursor:pointer; }
        }
      `}</style>
      <div className="topbar">
        Direct een vraag of storing? Bel: <a href="tel:0541551500">0541 55 1500</a>
      </div>
      <nav className="navbar">
        <div className="nav-inner">
          <Link href="/" className="nav-logo">
            <img src="/logo.gif" alt="Koertshuis Elektrotechniek" />
          </Link>
          <ul className="nav-links">
            {NAV.map(n => (
              <li key={n.href}>
                <Link
                  href={n.href}
                  className={`${path === n.href ? "active" : ""} ${n.label === "Storingsdienst" ? "nav-cta" : ""}`}
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
          <button className="burger" onClick={() => setOpen(true)} aria-label="Menu openen">
            <span /><span /><span />
          </button>
        </div>
      </nav>
      {open && (
        <div className="mobile-menu">
          <button className="mobile-close" onClick={() => setOpen(false)}>✕</button>
          <ul>
            {NAV.map(n => (
              <li key={n.href}>
                <Link href={n.href} className={path === n.href ? "active" : ""} onClick={() => setOpen(false)}>
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
