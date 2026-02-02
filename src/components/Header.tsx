"use client";

import { motion } from "framer-motion";
import { Clock, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    >
      <div
        className={`mx-auto transition-all duration-300 backdrop-blur-md ${
          isScrolled
            ? "mt-3 max-w-4xl rounded-full border border-[#d4af37]/20 bg-[#12121a]/80 shadow-[0_4px_30px_rgba(212,175,55,0.1)]"
            : "max-w-full border-b border-[#d4af37]/10 bg-[#0a0a0f]/60"
        }`}
      >
        <div
          className={`mx-auto flex items-center justify-between transition-all duration-300 ${
            isScrolled
              ? "h-14 max-w-4xl px-6"
              : "h-20 max-w-7xl px-4 sm:px-6 lg:px-8"
          }`}
        >
          {/* Logo */}
          <motion.a
            href="#accueil"
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            <Clock
              className={`text-[#d4af37] transition-all duration-300 ${
                isScrolled ? "w-6 h-6" : "w-8 h-8"
              }`}
            />
            <span
              className={`font-bold gradient-text transition-all duration-300 ${
                isScrolled ? "text-base" : "text-xl"
              }`}
            >
              TimeTravel
            </span>
          </motion.a>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center gap-1">
            {["Accueil", "Destinations", "A propos", "Contact"].map(
              (item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                    isScrolled
                      ? "text-gray-300 hover:text-white hover:bg-[#d4af37]/10"
                      : "text-gray-300 hover:text-[#d4af37]"
                  }`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  {item}
                </motion.a>
              ),
            )}
          </nav>

          {/* CTA Button Desktop */}
          <motion.a
            href="#reservation"
            className={`hidden md:inline-flex items-center justify-center font-semibold transition-all duration-300 ${
              isScrolled
                ? "h-9 px-4 text-sm rounded-full bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-[#0a0a0f]"
                : "h-10 px-6 text-sm rounded-lg bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-[#0a0a0f]"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Reserver
          </motion.a>

          {/* Menu Mobile */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden absolute top-full left-4 right-4 mt-2"
        >
          <div className="rounded-2xl border border-[#d4af37]/20 bg-[#12121a]/95 backdrop-blur-md p-4 shadow-xl">
            {["Accueil", "Destinations", "A propos", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="block py-3 px-4 text-gray-300 hover:text-[#d4af37] hover:bg-[#d4af37]/5 rounded-xl transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <a
              href="#reservation"
              className="block mt-3 py-3 text-center font-semibold rounded-xl bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-[#0a0a0f]"
              onClick={() => setIsMenuOpen(false)}
            >
              Reserver
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
