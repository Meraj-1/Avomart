import React, { useState } from "react";

const avocados = [
  {
    name: "Hass",
    image: "/avocados/hass.png",
    desc: "Deep flavor, rich texture. The gold standard of avocados."
  },
  {
    name: "Fuerte",
    image: "/avocados/fuerte.png",
    desc: "Balanced taste with a buttery finish."
  },
  {
    name: "Reed",
    image: "/avocados/reed.png",
    desc: "Large, creamy and seasonal delight."
  },
  {
    name: "Zutano",
    image: "/avocados/zutano.png",
    desc: "Light, fresh and smooth."
  }
];

export default function AvocadoExperience() {
  const [active, setActive] = useState(0);

  return (
 <section className="relative min-h-screen bg-[#0B1A13] text-white overflow-hidden flex items-center">

  {/* Ambient gradients */}
  <div className="pointer-events-none absolute inset-0">
    <div className="absolute -top-32 -left-32 h-[420px] w-[420px] rounded-full bg-green-500/25 blur-[120px]" />
    <div className="absolute bottom-0 right-0 h-[360px] w-[360px] rounded-full bg-emerald-400/10 blur-[120px]" />
  </div>

  {/* Grain texture */}
  <div className="pointer-events-none absolute inset-0 opacity-[0.04]
    bg-[radial-gradient(#ffffff_1px,transparent_1px)]
    bg-[size:18px_18px]" />

  {/* CONTENT */}
  <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 w-full py-20">

    {/* Header */}
    <div className="mb-14 sm:mb-20">
      <p className="uppercase tracking-[0.35em] text-green-400 text-xs sm:text-sm">
        Our Selection
      </p>

      <h1 className="mt-4 text-4xl sm:text-6xl md:text-7xl font-extrabold leading-[1.1]">
        Avocados,<br />Curated.
      </h1>
    </div>

    {/* Experience */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

      {/* TEXT */}
      <div className="order-2 lg:order-1 text-center lg:text-left">
        <h2 className="text-3xl sm:text-4xl font-semibold text-green-300">
          {avocados[active].name}
        </h2>

        <p className="mt-4 sm:mt-6 text-base sm:text-lg text-white/70 max-w-md mx-auto lg:mx-0">
          {avocados[active].desc}
        </p>

        {/* Selector dots */}
        <div className="mt-10 sm:mt-12 flex justify-center lg:justify-start gap-5">
          {avocados.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full border transition-all duration-300
                ${active === i
                  ? "bg-green-500 border-green-500 scale-110"
                  : "border-white/30 hover:border-white/70 hover:scale-105"}`}
            />
          ))}
        </div>
      </div>

      {/* IMAGE */}
      <div className="order-1 lg:order-2 relative flex justify-center items-center mb-10 lg:mb-0">
        <div className="absolute w-[280px] h-[280px] sm:w-[420px] sm:h-[420px] rounded-full bg-green-500/20 blur-[100px]" />

        <img
          key={avocados[active].image}
          src={avocados[active].image}
          alt={avocados[active].name}
          className="relative z-10 w-[220px] sm:w-[300px] md:w-[360px] transition-all duration-700"
        />
      </div>

    </div>
  </div>
</section>


  );
}
