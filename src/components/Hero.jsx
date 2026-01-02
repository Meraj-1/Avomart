import React from 'react'

const Hero = () => {
return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#F6FAF5] to-[#ECF3EE]">
      
      {/* Soft background blur */}
      <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-green-200/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-24">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">

          {/* LEFT CONTENT */}
          <div>
            <span className="inline-block rounded-full border border-green-600/20 bg-white px-4 py-1 text-sm font-medium text-green-700">
              🥑 Fresh • Honest • Reliable
            </span>

            <h1 className="mt-6 text-4xl font-semibold leading-tight text-gray-900 sm:text-5xl">
              Delivering Fresh Avocados with
              <span className="block text-green-700"> Honesty & Care</span>
            </h1>

            <p className="mt-5 max-w-xl text-lg leading-relaxed text-gray-600">
              AvoMart is built on transparency and quality. We focus on sourcing,
              handling, and showcasing avocados the right way — so people can
              trust what they consume.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#about"
                className="rounded-xl bg-green-700 px-6 py-3 text-white shadow-lg shadow-green-700/20 transition hover:bg-green-800"
              >
                Learn About Us
              </a>

              <a
                href="#contact"
                className="rounded-xl border border-gray-300 bg-white px-6 py-3 text-gray-800 transition hover:border-gray-400"
              >
                Get in Touch
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            <div className="rounded-3xl bg-white p-4 shadow-2xl">
              <img
                src="/src/assets/avocado-hero.jpg"
                alt="Fresh Avocados by AvoMart"
                className="h-[420px] w-full rounded-2xl object-cover"
              />
            </div>

            {/* Trust badge */}
            <div className="absolute -bottom-6 -left-6 rounded-2xl bg-white px-5 py-4 shadow-xl">
              <p className="text-sm font-medium text-gray-900">Quality Promise</p>
              <p className="mt-1 text-sm text-gray-600">
                Hand-picked • Hygienic • Transparent
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero