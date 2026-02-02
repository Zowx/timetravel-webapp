"use client";

import { motion } from "framer-motion";
import {
  Clock,
  Mail,
  Phone,
  MapPin,
  Instagram,
  Twitter,
  Facebook,
} from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#0a0a0f] border-t border-[#1f1f2e]">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Clock className="w-8 h-8 text-[#d4af37]" />
              <span className="text-xl font-bold gradient-text">
                TimeTravel Agency
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Votre partenaire de confiance pour des voyages temporels
              inoubliables. Explorez le passe en toute securite.
            </p>
            <div className="flex gap-4">
              {[Instagram, Twitter, Facebook].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-[#1f1f2e] rounded-full flex items-center justify-center text-gray-400 hover:bg-[#d4af37] hover:text-[#0a0a0f] transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Destinations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-lg font-bold mb-6">Destinations</h4>
            <ul className="space-y-3">
              {["Paris 1889", "Cretace -65M", "Florence 1504"].map((item) => (
                <li key={item}>
                  <a
                    href="#destinations"
                    className="text-gray-400 hover:text-[#d4af37] transition-colors text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Liens utiles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-bold mb-6">Liens utiles</h4>
            <ul className="space-y-3">
              {[
                "A propos",
                "FAQ",
                "Conditions generales",
                "Politique de confidentialite",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-[#d4af37] transition-colors text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-lg font-bold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail className="w-5 h-5 text-[#d4af37]" />
                contact@timetravel.agency
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone className="w-5 h-5 text-[#d4af37]" />
                +33 1 23 45 67 89
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <MapPin className="w-5 h-5 text-[#d4af37]" />
                Paris, France - 2089
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-[#1f1f2e] flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-gray-500 text-sm">
            © 2089 TimeTravel Agency. Tous droits reserves a travers le temps.
          </p>
          <p className="text-gray-500 text-sm">
            Fait avec passion par l&apos;equipe TimeTravel
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
