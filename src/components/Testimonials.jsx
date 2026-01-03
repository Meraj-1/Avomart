import { useEffect, useState } from "react";

const testimonials = [
  {
    quote:
      "Working with AvoMart feels less like a contract and more like a shared responsibility toward quality.",
    name: "Miguel Alvarez",
    role: "Partner Farm, Mexico",
  },
  {
    quote:
      "They never rush the process. Every batch is handled with patience and respect.",
    name: "Elena Brooks",
    role: "Quality Inspector",
  },
  {
    quote:
      "Transparency here is not marketing — it’s how the system actually works.",
    name: "Arjun Patel",
    role: "Supply Chain Partner",
  },
  {
    quote:
      "From harvest to delivery, their standards stay consistent.",
    name: "Daniel Moretti",
    role: "Cold Storage Operations",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setActive((p) => (p + 1) % testimonials.length);
    }, 5500);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative bg-[#0B1A13] py-40 overflow-hidden text-white">

      {/* Organic ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-48 -left-40 w-[520px] h-[520px] bg-green-500/20 blur-[200px]" />
        <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-emerald-400/10 blur-[180px]" />
      </div>

      {/* Noise */}
      <div className="absolute inset-0 opacity-[0.035]
        bg-[radial-gradient(#ffffff_1px,transparent_1px)]
        bg-[size:20px_20px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-28">
          <p className="uppercase tracking-[0.4em] text-green-400 text-xs mb-6">
            Real Voices
          </p>
          <h2 className="text-4xl sm:text-5xl font-semibold">
            Built on Trust, Not Claims
          </h2>
        </div>

        {/* STACK */}
        <div className="relative h-[420px] flex items-center justify-center">

         {testimonials.map((t, i) => {
  const offset = i - active;
  const distance = Math.abs(offset);
  const isActive = offset === 0;

  return (
    <div
      key={i}
      className="absolute transition-all duration-700 ease-[cubic-bezier(.22,1,.36,1)]"
      style={{
        transform: `
          translateY(${offset * 36}px)
          scale(${isActive ? 1 : 0.88})
        `,
        opacity: distance === 0 ? 1 : distance === 1 ? 0.35 : 0.15,
        zIndex: 10 - distance,
        filter: isActive
          ? "blur(0px)"
          : distance === 1
          ? "blur(6px)"
          : "blur(14px)",
        pointerEvents: isActive ? "auto" : "none",
      }}
    >
      <div className="relative w-[320px] sm:w-[420px] bg-white/5
        backdrop-blur-xl border border-white/10
        rounded-3xl px-10 py-12
        shadow-[0_30px_80px_rgba(0,0,0,0.55)]">

        {/* Floating quote */}
        <div className="absolute -top-6 -left-4 text-7xl text-green-400/20">
          ❝
        </div>

        <p className="text-lg sm:text-xl leading-relaxed text-white/90">
          {t.quote}
        </p>

        <div className="mt-10">
          <p className="font-semibold tracking-wide">
            {t.name}
          </p>
          <p className="text-sm text-white/60 mt-1">
            {t.role}
          </p>
        </div>
      </div>
    </div>
  );
})}
        </div>

        {/* Controls */}
        <div className="mt-16 flex justify-center gap-3">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`h-2 rounded-full transition-all duration-500
              ${active === i
                ? "w-10 bg-green-400"
                : "w-2 bg-white/30 hover:bg-white/60"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
