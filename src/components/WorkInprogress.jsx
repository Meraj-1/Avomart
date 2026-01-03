import { useEffect, useState } from "react";

export default function WorkInProgress() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 5000); // abhi 100ms, baad me 10000 kar sakte ho

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center
      transition-all duration-1000 ease-out
      ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
    >
      {/* White backdrop */}
      <div className="absolute inset-0 bg-white" />

      {/* Soft green ambient */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2
        w-[700px] h-[700px] rounded-full bg-green-200/50 blur-[180px]" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-3xl px-6 sm:px-10 text-center">

        <p className="uppercase tracking-[0.4em] text-green-600 text-xs mb-8">
          With Respect
        </p>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-black leading-snug">
          We sincerely apologize.
        </h1>

        <p className="mt-8 text-black/70 text-base sm:text-lg leading-relaxed">
          Our website is currently being carefully prepared.
          <br />
          We are working with patience and purpose to serve you better.
        </p>

        <p className="mt-6 text-black/60 text-sm sm:text-base italic">
          Thank you for your understanding,
          <br />
          your time, and your kindness.
        </p>

        <div className="mt-12 text-green-700 text-sm tracking-wide">
          🌿 We look forward to welcoming you soon
        </div>
      </div>
    </div>
  );
}
