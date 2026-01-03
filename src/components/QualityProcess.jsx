import { useEffect, useRef, useState } from "react";
import { Leaf, Search, Warehouse, Truck } from "lucide-react";

const steps = [
  {
    title: "Sourced at Origin",
    desc: "We work directly with farms that follow responsible and transparent growing practices.",
    icon: Leaf,
  },
  {
    title: "Carefully Inspected",
    desc: "Each batch is manually reviewed for freshness, texture, and overall quality.",
    icon: Search,
  },
  {
    title: "Stored with Control",
    desc: "Avocados are kept under monitored conditions to maintain natural ripeness.",
    icon: Warehouse,
  },
  {
    title: "Delivered Fresh",
    desc: "Handled with care and delivered efficiently to preserve quality until arrival.",
    icon: Truck,
  },
];

export default function QualityProcess() {
  const [active, setActive] = useState(0);
  const refs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(Number(entry.target.dataset.index));
          }
        });
      },
      { threshold: 0.55 }
    );

    refs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-[#0B1A13] text-white py-32">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="max-w-xl mb-24">
          <p className="uppercase tracking-widest text-green-400 text-xs mb-4">
            Quality & Process
          </p>
          <h2 className="text-4xl sm:text-5xl font-semibold mb-6">
            The Quality Line
          </h2>
          <p className="text-white/70">
            Every avocado follows one continuous path — from farm to you —
            with no shortcuts, no compromises.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Vertical line */}
          <div className="absolute left-6 top-0 h-full w-px bg-green-400/20" />

          {steps.map((step, i) => {
            const Icon = step.icon;
            const isActive = active >= i;

            return (
              <div
                key={i}
                ref={(el) => (refs.current[i] = el)}
                data-index={i}
                className="relative pl-20 pb-28"
              >
                {/* Node */}
                <div
                  className={`absolute left-3 top-2 w-6 h-6 rounded-full border-2
                  transition-all duration-500
                  ${isActive
                    ? "bg-green-400 border-green-400"
                    : "border-green-400/40"}`}
                />

                {/* Content */}
                <div
                  className={`transition-all duration-700
                  ${isActive
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-8"}`}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <Icon className="text-green-400" />
                    <h3 className="text-2xl font-semibold">
                      {step.title}
                    </h3>
                  </div>

                  <p className="text-white/70 max-w-lg leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
