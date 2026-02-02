"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react";

const destinations = [
  {
    id: 1,
    title: "Paris 1889",
    subtitle: "La Belle Epoque",
    description:
      "Vivez l'effervescence de l'Exposition Universelle et assistez a l'inauguration de la Tour Eiffel. Plongez dans le Paris de la fin du XIXe siecle.",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073",
    period: "XIXe siecle",
    duration: "3-7 jours",
    highlights: ["Tour Eiffel", "Exposition Universelle", "Moulin Rouge"],
    price: "12 500",
  },
  {
    id: 2,
    title: "Cretace",
    subtitle: "-65 Millions d'annees",
    description:
      "Explorez un monde primitif peuple de dinosaures. Une aventure unique au coeur de la prehistoire, en toute securite.",
    image:
      "https://images.unsplash.com/photo-1519880772-93ef5a72e06b?q=80&w=2070",
    period: "Prehistoire",
    duration: "1-3 jours",
    highlights: ["T-Rex", "Pterodactyles", "Nature primitive"],
    price: "25 000",
  },
  {
    id: 3,
    title: "Florence 1504",
    subtitle: "La Renaissance",
    description:
      "Rencontrez les plus grands artistes de la Renaissance. De Michel-Ange a Leonard de Vinci, vivez l'age d'or de l'art italien.",
    image:
      "https://images.unsplash.com/photo-1543429258-3ba762a57e20?q=80&w=2070",
    period: "Renaissance",
    duration: "5-10 jours",
    highlights: ["Michel-Ange", "Leonard de Vinci", "Medicis"],
    price: "15 000",
  },
];

export default function Destinations() {
  return (
    <section id="destinations" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[#d4af37] uppercase tracking-[0.3em] text-sm font-medium">
            Nos destinations
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Choisissez votre <span className="gradient-text">Epoque</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Trois destinations uniques, trois epoques fascinantes. Chaque voyage
            est une experience inoubliable, minutieusement preparee pour votre
            securite et votre emerveillement.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((dest, index) => (
            <motion.div
              key={dest.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative bg-[#12121a] rounded-2xl overflow-hidden border border-[#1f1f2e] card-hover"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url('${dest.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#12121a] via-transparent to-transparent" />

                {/* Price tag */}
                <div className="absolute top-4 right-4 bg-[#d4af37] text-[#0a0a0f] px-4 py-2 rounded-full font-bold text-sm">
                  {dest.price} €
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-[#d4af37] text-sm mb-2">
                  <Calendar className="w-4 h-4" />
                  <span>{dest.period}</span>
                </div>

                <h3 className="text-2xl font-bold mb-1">{dest.title}</h3>
                <p className="text-gray-500 text-sm mb-4">{dest.subtitle}</p>

                <p className="text-gray-400 text-sm mb-6 line-clamp-3">
                  {dest.description}
                </p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {dest.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="text-xs px-3 py-1 bg-[#1f1f2e] rounded-full text-gray-300"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-[#1f1f2e]">
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {dest.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {dest.title.split(" ")[0]}
                    </span>
                  </div>

                  <motion.button
                    className="flex items-center gap-2 text-[#d4af37] font-medium group/btn"
                    whileHover={{ x: 5 }}
                  >
                    Decouvrir
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">
            Besoin d&apos;aide pour choisir ? Notre assistant IA est la pour
            vous guider.
          </p>
          <motion.button
            className="btn-gold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Parler a notre assistant
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
