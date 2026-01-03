import { Instagram, Linkedin, Facebook, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="md:col-span-1">
          <h3 className="text-xl font-semibold text-gray-900">Avomart</h3>
          <p className="mt-3 text-gray-600 text-sm max-w-xs">
            Premium avocados grown with care — from our farms to your table.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-sm font-semibold text-gray-900 mb-4">Quick Links</h4>
          <ul className="space-y-3 text-sm text-gray-600">
            <li><a href="#" className="hover:text-green-600 transition">Home</a></li>
            <li><a href="#" className="hover:text-green-600 transition">About</a></li>
            <li><a href="#" className="hover:text-green-600 transition">Our Farms</a></li>
            <li><a href="#" className="hover:text-green-600 transition">Contact</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-sm font-semibold text-gray-900 mb-4">Newsletter</h4>
          <p className="text-sm text-gray-600 mb-4">
            Get updates from our farms and new harvests.
          </p>
          <form className="flex items-center gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="w-full rounded-xl border border-gray-200 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
              type="submit"
              className="rounded-xl p-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:opacity-90 transition"
              aria-label="Subscribe"
            >
              <Mail className="w-4 h-4" />
            </button>
          </form>
        </div>

        {/* Social */}
        <div>
          <h4 className="text-sm font-semibold text-gray-900 mb-4">Follow Us</h4>
          <div className="flex gap-4">
            <a href="#" aria-label="Instagram">
              <Instagram className="w-5 h-5 text-gray-500 hover:text-green-600 transition" />
            </a>
            <a href="#" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5 text-gray-500 hover:text-green-600 transition" />
            </a>
            <a href="#" aria-label="Facebook">
              <Facebook className="w-5 h-5 text-gray-500 hover:text-green-600 transition" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} Avomart. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-green-600 transition">Privacy Policy</a>
            <a href="#" className="hover:text-green-600 transition">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
