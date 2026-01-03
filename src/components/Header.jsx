// src/components/Header.jsx
// AvoMart — Cinematic, Trust-First Brand Header

import { useEffect, useState } from "react";

export default function Header() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header
      className="relative min-h-screen w-full overflow-hidden bg-cover bg-center bg-no-repeat text-white"
      style={{
        backgroundImage:
          "url('https://static.wixstatic.com/media/nsplsh_ad899f126c274196bb48cadd66315902~mv2.jpg/v1/fill/w_1905,h_752,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/nsplsh_ad899f126c274196bb48cadd66315902~mv2.jpg')",
      }}
    >
      {/* Cinematic overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/65" />
      <div className="absolute inset-0 bg-gradient-to-r from-green-900/40 via-transparent to-green-900/40" />

      {/* Film grain */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.035]
        bg-[radial-gradient(#ffffff_1px,transparent_1px)]
        bg-[size:18px_18px]" />

      {/* TOP BAR */}
      <div className="relative z-20 mx-auto max-w-7xl px-6 pt-8 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-4">
          <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 backdrop-blur shadow-xl">
            <img src="/Avomart_logo.png" alt="AvoMart" className="h-9 w-9" />
          </div>
          <div className="leading-tight">
            <p className="text-lg font-semibold tracking-tight">AvoMart</p>
            <p className="text-[11px] uppercase tracking-widest text-green-300/70">
              Transparency-led sourcing
            </p>
          </div>
        </div>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden sm:inline-flex items-center gap-2
          rounded-full border border-white/30 px-5 py-2
          text-sm text-white backdrop-blur
          transition hover:bg-white/10"
        >
          Let’s talk →
        </a>
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-32 grid grid-cols-1 lg:grid-cols-2 gap-24">

        {/* LEFT CONTENT */}
        <div
          className={`transition-all duration-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-4xl sm:text-5xl xl:text-6xl font-semibold leading-[1.1] tracking-tight">
            Avocados,
            <br />
            handled with
            <br />
            <span className="relative inline-block text-green-300">
              honesty.
              <span className="absolute -bottom-2 left-0 h-[6px] w-full rounded-full bg-green-400/30" />
            </span>
          </h1>

          <p className="mt-8 max-w-md text-lg leading-relaxed text-white/80">
            We don’t chase volume.
            <br />
            We focus on clean sourcing, clear processes,
            and respect for what people consume.
          </p>

          {/* Trust indicators */}
          <div className="mt-12 flex flex-wrap gap-6 text-sm text-green-200">
            {["Farm sourced", "Quality checked", "Full transparency"].map(
              (item) => (
                <span
                  key={item}
                  className="group flex items-center gap-2 transition hover:text-green-300"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400 transition group-hover:scale-125" />
                  {item}
                </span>
              )
            )}
          </div>
        </div>

        {/* RIGHT NAV */}
        <div
          className={`relative flex items-center transition-all duration-1000 delay-200 ${
            mounted ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          }`}
        >
          {/* Editorial background text */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[160px] font-bold tracking-tight text-white/5 select-none">
            AVO
          </div>

          <nav className="relative z-10 space-y-8 text-2xl sm:text-3xl font-light tracking-wide">
            {["Our Story", "Avocados", "Process", "Transparency", "Contact"].map(
              (item, i) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s/g, "")}`}
                  className="group flex items-center gap-5"
                >
                  <span className="text-green-400/40 text-base">
                    0{i + 1}
                  </span>
                  <span className="relative transition-all duration-300 group-hover:translate-x-2 group-hover:text-green-300">
                    {item}
                    <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-green-300 transition-all duration-300 group-hover:w-full" />
                  </span>
                </a>
              )
            )}
          </nav>
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-green-200/60 text-[10px] tracking-widest">
        <span>SCROLL TO DISCOVER</span>
        <span className="text-xl animate-bounce">↓</span>
      </div>
    </header>
  );
}
