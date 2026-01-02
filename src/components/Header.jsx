// src/components/Header.jsx
// Clean, trust-first header for AvoMart (React + Vite + Tailwind)

import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-2xl">🥑</span>
            <span className="text-lg font-semibold tracking-tight text-gray-900">
              AvoMart
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
            <a href="#home" className="hover:text-green-700 transition">Home</a>
            <a href="#about" className="hover:text-green-700 transition">Our Story</a>
            <a href="#products" className="hover:text-green-700 transition">Our Avocados</a>
            <a href="#quality" className="hover:text-green-700 transition">Quality</a>
            <a href="#contact" className="hover:text-green-700 transition">Contact</a>
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="rounded-xl bg-green-700 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-green-800"
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden inline-flex items-center justify-center rounded-lg border border-gray-300 p-2 text-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <nav className="flex flex-col gap-4 px-6 py-6 text-sm font-medium text-gray-700">
            <a href="#home" onClick={() => setOpen(false)}>Home</a>
            <a href="#about" onClick={() => setOpen(false)}>Our Story</a>
            <a href="#products" onClick={() => setOpen(false)}>Our Avocados</a>
            <a href="#quality" onClick={() => setOpen(false)}>Quality</a>
            <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex w-fit rounded-xl bg-green-700 px-5 py-2.5 text-white"
            >
              Get in Touch
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
