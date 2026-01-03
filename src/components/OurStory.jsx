export default function OurStory() {
  const story = [
    {
      year: "2021",
      title: "It Started With a Question",
      text: "Can food be honest again? We began with a simple belief — if we respect nature, quality will follow."
    },
    {
      year: "2022",
      title: "Choosing Farms, Not Factories",
      text: "We partnered with small farms who grow patiently, responsibly, and without shortcuts."
    },
    {
      year: "2023",
      title: "Trust Became Our Standard",
      text: "Every harvest was traced, inspected, and approved — not by machines, but by people who care."
    },
    {
      year: "Today",
      title: "From Soil to Table",
      text: "Today, AvoMart delivers premium avocados with complete transparency — so you know exactly what you eat."
    }
  ];

  return (
    <section className="relative bg-[#0B1A13] text-white py-32 overflow-hidden">

      {/* Ambient gradients — SAME LANGUAGE AS HEADER */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-green-500/25 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-emerald-400/10 blur-[140px]" />
      </div>

      {/* Grain texture */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[size:18px_18px]" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="max-w-3xl mb-28">
          <p className="uppercase tracking-[0.25em] text-green-400 text-sm">
            Our Journey
          </p>
          <h2 className="mt-6 text-5xl md:text-6xl font-extrabold leading-tight">
            Rooted in trust.<br />Grown with care.
          </h2>
          <p className="mt-6 text-lg text-green-100/70">
            We believe transparency isn’t a feature — it’s a responsibility.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l border-white/15 pl-12 space-y-24">
          {story.map((item, index) => (
            <div key={index} className="relative">

              {/* Dot */}
              <span className="absolute -left-[30px] top-2 w-3.5 h-3.5 rounded-full bg-green-400 shadow-[0_0_0_6px_rgba(34,197,94,0.15)]" />

              {/* Content */}
              <div className="max-w-xl">
                <span className="text-green-400 text-sm tracking-widest">
                  {item.year}
                </span>
                <h3 className="mt-3 text-2xl font-semibold">
                  {item.title}
                </h3>
                <p className="mt-4 text-white/70 leading-relaxed">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Closing statement */}
        <div className="mt-32 max-w-2xl">
          <p className="text-xl text-green-300 font-medium">
            We grow slowly.  
            We choose carefully.  
            And we never compromise.
          </p>
        </div>

      </div>
    </section>
  );
}
