import React from "react";

const Hero = () => {
  return (
    <section
      className="relative overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://static.wixstatic.com/media/nsplsh_ad899f126c274196bb48cadd66315902~mv2.jpg/v1/fill/w_1905,h_752,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/nsplsh_ad899f126c274196bb48cadd66315902~mv2.jpg')",
      }}
    >
      {/* Dark + green overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/30 to-green-900/40" />

      {/* Soft ambient glow */}
      <div className="pointer-events-none absolute -top-32 -right-32 h-[420px] w-[420px] rounded-full bg-green-400/20 blur-[160px]" />

      {/* Grain */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]
        bg-[radial-gradient(#ffffff_1px,transparent_1px)]
        bg-[size:18px_18px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">

          {/* LEFT CONTENT */}
          <div className="text-white">

            <span className="inline-flex items-center gap-2 rounded-full
              border border-white/20 bg-white/10 px-5 py-1.5
              text-sm font-medium backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-green-400" />
              Fresh • Honest • Reliable
            </span>

            <h1 className="mt-8 text-4xl font-semibold leading-[1.15] sm:text-5xl">
              Delivering Fresh Avocados
              <span className="relative mt-2 block text-green-300">
                with Honesty & Care
                <span className="absolute -bottom-2 left-0 h-[6px] w-32 rounded-full bg-green-400/40" />
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
              AvoMart is built on transparency and quality. We focus on sourcing,
              handling, and showcasing avocados the right way — so people can
              trust what they consume.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-5">
              <a
                href="#about"
                className="group inline-flex items-center gap-2
                rounded-2xl bg-green-600 px-7 py-3.5 text-white
                shadow-xl shadow-green-600/30 transition
                hover:bg-green-700"
              >
                Learn About Us
                <span className="transition group-hover:translate-x-1">→</span>
              </a>

              <a
                href="#contact"
                className="rounded-2xl border border-white/30
                bg-white/10 px-7 py-3.5 text-white
                backdrop-blur transition hover:bg-white/20"
              >
                Get in Touch
              </a>
            </div>
          </div>

          {/* RIGHT – FLOATING TRUST CARD */}
          <div className="relative hidden lg:block">
            <div className="absolute bottom-0 right-0 rounded-3xl
              bg-white/90 px-7 py-6 backdrop-blur
              shadow-[0_30px_80px_rgba(0,0,0,0.35)]">

              <p className="text-sm font-semibold text-gray-900">
                Quality Promise
              </p>
              <p className="mt-1 text-sm text-gray-600">
                Hand-picked • Hygienic • Transparent
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
