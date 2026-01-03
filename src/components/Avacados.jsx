import { useEffect, useRef, useState } from "react";

import Hass from "../assets/Hass-Avocado.png";
import Fuerte from "../assets/Fuerte-Avocado.png";
import Reed from "../assets/Reed-Avocado.png";
import Zutano from "../assets/Zutano-Avocado.png";
import Bacon from "../assets/Bacon-Avocado.png";

const avocados = [
  {
    name: "Hass Avocado",
    short: "The world’s most loved avocado",
    desc: "Hass avocados are known for their rich, creamy texture and deep nutty flavor. They ripen evenly and are ideal for everyday use — from toast to guacamole.",
    origin: "Mexico & California",
    use: "Guacamole, Toast, Bowls",
    image: Hass,
  },
  {
    name: "Fuerte Avocado",
    short: "Smooth & balanced",
    desc: "Fuerte offers a mild yet buttery taste with a smooth texture. A perfect choice for slicing and fresh preparations.",
    origin: "Mexico",
    use: "Salads, Slices",
    image: Fuerte,
  },
  {
    name: "Reed Avocado",
    short: "Seasonal & indulgent",
    desc: "Large and creamy, Reed avocados are seasonal favorites with a dense texture, best enjoyed when you want something filling and rich.",
    origin: "California",
    use: "Spreads, Bowls",
    image: Reed,
  },
  {
    name: "Zutano Avocado",
    short: "Light & refreshing",
    desc: "Zutano avocados are lighter in flavor and easier to slice. Ideal for fresh cuts and light meals.",
    origin: "Mexico",
    use: "Fresh Cuts",
    image: Zutano,
  },
  {
    name: "Bacon Avocado",
    short: "Mild & firm",
    desc: "With a gentle taste and firmer texture, Bacon avocados work well in sandwiches and layered dishes.",
    origin: "California",
    use: "Sandwiches",
    image: Bacon,
  },
];

export default function AvocadoShowcase() {
  const [active, setActive] = useState(0);
  const sections = useRef([]);

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

    sections.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-[#0B1A13] text-white">

      {/* Sticky image for desktop */}
      <div className="hidden lg:flex sticky top-0 md:h-screen items-center justify-center pointer-events-none">
        <img
          src={avocados[active].image}
          alt={avocados[active].name}
          className="w-[380px] transition-all duration-500"
        />
      </div>

      {/* Content */}
      <div className="relative ">
      
        {avocados.map((item, i) => (
          <div
            key={i}
            ref={(el) => (sections.current[i] = el)}
            data-index={i}
            className="h-[50vh] md:h-[80vh] flex items-center"
          >
        
            <div className="max-w-6xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

              {/* LEFT — TEXT */}
              <div className="text-center lg:text-left">
                <p className="uppercase text-green-400 tracking-widest text-xs mb-3">
                  Avocado {String(i + 1).padStart(2, "0")}
                </p>

                <h2 className="text-4xl sm:text-5xl font-semibold mb-3">
                  {item.name}
                </h2>

                <p className="text-green-300 text-sm mb-6">
                  {item.short}
                </p>

                <p className="text-white/70 max-w-md mx-auto lg:mx-0 leading-relaxed mb-8">
                  {item.desc}
                </p>

                <div className="flex flex-col sm:flex-row gap-6 text-sm text-white/70 justify-center lg:justify-start">
                  <div>
                    <span className="text-green-400">Origin:</span>{" "}
                    {item.origin}
                  </div>
                  <div>
                    <span className="text-green-400">Best for:</span>{" "}
                    {item.use}
                  </div>
                </div>
              </div>

              {/* RIGHT — IMAGE (mobile) */}
              <div className="lg:hidden flex justify-center md:mt-10">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-[240px]"
                />
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
