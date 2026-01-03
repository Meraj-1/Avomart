import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Linkedin,
  Facebook,
} from "lucide-react";

export default function ContactSection() {
  return (
    <section className="w-full py-24 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-semibold text-gray-900 mb-4">
            Let’s Connect
          </h2>

          <p className="text-gray-600 mb-8 max-w-md">
            Have a question, partnership idea, or want to explore our avocados?
            We’d love to hear from you.
          </p>

          <div className="space-y-4 text-gray-700">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-green-600" />
              <span>hello@yourfarmname.com</span>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-green-600" />
              <span>+XX XXX XXX XXX</span>
            </div>

            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-green-600" />
              <span>Our Farms · Region / Country</span>
            </div>
          </div>

          <div className="flex gap-4 mt-8">
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
        </motion.div>

        {/* Right Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <div className="rounded-2xl shadow-lg bg-white p-8">
            <form className="space-y-5">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              />

              <select
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option>General Inquiry</option>
                <option>Wholesale</option>
                <option>Partnerships</option>
                <option>Farm Visit</option>
              </select>

              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              />

              <button
                type="submit"
                className="w-full rounded-xl py-4 text-base font-medium text-white
                           bg-gradient-to-r from-green-500 to-emerald-600
                           hover:opacity-90 transition"
              >
                Explore Our Avocados
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
