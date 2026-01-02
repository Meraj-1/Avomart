// src/components/Header.jsx
// AvoMart — Signature Brand Header (Final Polished Version)
// React + Vite + Tailwind | Editorial • Trust-first • Cinematic

import { useEffect, useState } from "react";

export default function Header() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="relative min-h-screen bg-[#0B1A13] text-white overflow-hidden">

      {/* Ambient gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-green-500/25 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-emerald-400/10 blur-[140px]" />
      </div>

      {/* Grain texture */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[size:18px_18px]" />

      {/* Top bar */}
      <div className="relative z-20 mx-auto max-w-7xl px-6 pt-8 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-5">
          <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-green-500/20 to-green-900/40 shadow-lg shadow-green-900/40">
            <div className="absolute inset-[2px] rounded-2xl bg-[#0B1A13] ring-1 ring-green-400/20" />
            <img src="/Avomart_logo.png" alt="AvoMart" className="relative z-10 h-10 w-10" />
          </div>
          <div className="leading-tight">
            <p className="text-xl font-semibold tracking-tight">AvoMart</p>
            <p className="text-xs uppercase tracking-wide text-green-300/70">
              Transparency-led sourcing
            </p>
          </div>
        </div>

        {/* Minimal action */}
        <a
          href="#contact"
          className="hidden sm:inline-flex items-center gap-2 rounded-full border border-green-400/30 px-5 py-2 text-sm text-green-200 transition hover:bg-green-400/10"
        >
          Let’s talk
          <span className="text-green-400">→</span>
        </a>
      </div>

      {/* Main content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-24 grid grid-cols-1 lg:grid-cols-2 gap-20">

        {/* Left — Manifesto */}
        <div className={`transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h1 className="text-4xl sm:text-5xl xl:text-6xl font-semibold leading-[1.1] tracking-tight">
            Avocados,<br />
            handled with<br />
            <span className="text-green-400">honesty.</span>
          </h1>

          <p className="mt-8 max-w-md text-lg text-green-100/80">
            We don’t chase volume.
            <br />
            We focus on clean sourcing, clear processes,
            and respect for what people consume.
          </p>

          {/* Trust indicators */}
          <div className="mt-12 flex flex-wrap gap-6 text-sm text-green-200">
            <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-green-400" /> Farm sourced</span>
            <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-green-400" /> Quality checked</span>
            <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-green-400" /> Full transparency</span>
          </div>
        </div>

        {/* Right — Editorial Navigation */}
        <div className={`relative flex items-center transition-all duration-1000 delay-200 ${mounted ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>

          {/* Background typography */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[160px] font-bold tracking-tight text-white/5 select-none">
            AVO
          </div>

          <nav className="relative z-10 space-y-8 text-2xl sm:text-3xl font-light">
            {["Our Story", "Avocados", "Process", "Transparency", "Contact"].map((item, i) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s/g, "")}`}
                className="group flex items-center gap-5"
              >
                <span className="text-green-400/60 text-base">0{i + 1}</span>
                <span className="relative transition-all duration-300 group-hover:translate-x-2 group-hover:text-green-400">
                  {item}
                  <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-green-400 transition-all duration-300 group-hover:w-full" />
                </span>
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Scroll story indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-green-200/60 text-xs">
        <span className="tracking-widest">OUR STORY STARTS BELOW</span>
        <span className="text-lg animate-bounce">↓</span>
      </div>
    </header>
  );
}
