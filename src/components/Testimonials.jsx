import { useState, useEffect } from "react";

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
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative bg-[#0B1A13] text-white py-32 overflow-hidden">

      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-32 w-[420px] h-[420px] bg-green-500/20 blur-[160px]" />
        <div className="absolute bottom-0 right-0 w-[360px] h-[360px] bg-emerald-400/10 blur-[140px]" />
      </div>

      {/* Grain */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]
        bg-[radial-gradient(#ffffff_1px,transparent_1px)]
        bg-[size:18px_18px]"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

        {/* Header */}
        <p className="uppercase tracking-[0.35em] text-green-400 text-xs mb-6">
          Testimonials
        </p>

        <h2 className="text-4xl sm:text-5xl font-semibold mb-16">
          Trusted by the People Behind the Process
        </h2>

        {/* Testimonial */}
        <div className="relative max-w-3xl mx-auto">

          <p className="text-xl sm:text-2xl text-white/90 leading-relaxed transition-all duration-700">
            “{testimonials[active].quote}”
          </p>

          <div className="mt-10">
            <p className="font-semibold text-white">
              {testimonials[active].name}
            </p>
            <p className="text-sm text-white/60">
              {testimonials[active].role}
            </p>
          </div>

          {/* Indicators */}
          <div className="mt-14 flex justify-center gap-4">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-3 h-3 rounded-full transition-all
                  ${active === i
                    ? "bg-green-400 scale-125"
                    : "bg-white/30 hover:bg-white/60"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
