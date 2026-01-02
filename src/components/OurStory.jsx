import { useEffect, useState } from "react";

export default function OurStory() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: "01",
      title: "Seed of Idea",
      description:
        "In 2021, a vision was planted — to respect nature and cultivate trust through transparency.",
      color: "bg-green-200/20",
    },
    {
      number: "02",
      title: "First Farm Partnership",
      description:
        "2022 brought the first carefully vetted farm partners, ensuring quality from the ground up.",
      color: "bg-green-300/20",
    },
    {
      number: "03",
      title: "Verified Batches",
      description:
        "Every batch undergoes meticulous inspection, verified for freshness and quality.",
      color: "bg-green-400/20",
    },
    {
      number: "04",
      title: "AvoMart Today",
      description:
        "Now, we deliver premium avocados with full transparency — from farm to table.",
      color: "bg-green-500/20",
    },
  ];

  // Scroll listener to change active step
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY < 400) setActiveStep(0);
      else if (scrollY < 800) setActiveStep(1);
      else if (scrollY < 1200) setActiveStep(2);
      else setActiveStep(3);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="ourstory" className="relative min-h-screen bg-[#F7FAF7] py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
        {/* LEFT PANEL: Visual + number */}
        <div className="lg:w-1/2 relative h-96 flex items-center justify-center">
          {/* Dynamic background glow */}
          <div
            className={`absolute w-72 h-72 rounded-full blur-3xl transition-all duration-700 ${steps[activeStep].color}`}
          />
          <div
            className={`absolute w-56 h-56 rounded-full blur-2xl top-20 right-20 transition-all duration-700 ${steps[activeStep].color}`}
          />
          {/* Step number */}
          <h1 className="text-8xl font-bold text-green-700/20 select-none">
            {steps[activeStep].number}
          </h1>
          {/* Floating avocado */}
          <div className="absolute top-32 left-16 text-green-400/20 text-7xl animate-bounce">🥑</div>
        </div>

        {/* RIGHT PANEL: Text */}
        <div className="lg:w-1/2 flex flex-col gap-12">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className={`transition-all duration-700 ${
                activeStep === idx
                  ? "opacity-100 translate-x-0 scale-100"
                  : "opacity-20 translate-x-10 scale-95"
              }`}
            >
              <h3 className="text-3xl font-semibold text-green-700">{step.title}</h3>
              <p className="mt-2 text-lg text-[#0B1A13]/90 leading-relaxed">{step.description}</p>

              {/* Trust badges only for active step */}
              {activeStep === idx && (
                <div className="mt-4 flex gap-4 flex-wrap">
                  <span className="flex items-center gap-2 text-green-600 font-medium">✔ Farm Sourced</span>
                  <span className="flex items-center gap-2 text-green-600 font-medium">✔ Quality Checked</span>
                  <span className="flex items-center gap-2 text-green-600 font-medium">✔ Full Transparency</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
