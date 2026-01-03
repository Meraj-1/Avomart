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
    <section className="relative bg-[#0B1A13] text-white py-36 overflow-hidden">

      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        {/* <div className="absolute -top-40 -left-40 w-[480px] h-[480px] bg-green-500/20 blur-[180px]" /> */}
        {/* <div className="absolute bottom-0 right-0 w-[380px] h-[380px] bg-emerald-400/10 blur-[160px]" /> */}
      </div>

      {/* Grain */}
      <div className="absolute inset-0 opacity-[0.04]
        bg-[radial-gradient(#ffffff_1px,transparent_1px)]
        bg-[size:18px_18px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

        <p className="uppercase tracking-[0.35em] text-green-400 text-xs mb-6">
          Voices From the Field
        </p>

        <h2 className="text-4xl sm:text-5xl font-semibold mb-20">
          Trusted by the People Behind the Process
        </h2>

        <div className="relative max-w-3xl mx-auto">

          {/* Quote mark */}
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-[120px] text-green-400/10 leading-none select-none">
            ❝
          </div>

          {/* Testimonial content */}
          <div
            key={active}
            className="transition-all duration-700 ease-out
            opacity-100 translate-y-0 animate-[fadeUp_0.7s_ease]"
          >
            <p className="text-xl sm:text-2xl leading-relaxed text-white/90">
              {testimonials[active].quote}
            </p>

            <div className="mt-12">
              <p className="font-semibold text-white tracking-wide">
                {testimonials[active].name}
              </p>
              <p className="text-sm text-white/60 mt-1">
                {testimonials[active].role}
              </p>
            </div>
          </div>

          {/* Progress bar */}
          <div className="mt-14 h-[2px] bg-white/10 overflow-hidden rounded-full">
            <div
              key={active}
              className="h-full bg-green-400 animate-[progress_6s_linear]"
            />
          </div>

          {/* Indicators */}
          <div className="mt-8 flex justify-center gap-4">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all
                ${active === i
                  ? "bg-green-400 scale-125"
                  : "bg-white/30 hover:bg-white/60"}`}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
