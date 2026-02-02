"use client";

import { motion } from "framer-motion";
import { Shield, Clock, Users, Award } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Securite Maximale",
    description:
      "Nos capsules temporelles sont equipees des dernieres technologies de protection quantique.",
  },
  {
    icon: Clock,
    title: "Precision Temporelle",
    description:
      "Arrivez exactement a la date et au lieu souhaites, a la seconde pres.",
  },
  {
    icon: Users,
    title: "Guides Experts",
    description:
      "Chaque voyage est accompagne par un historien specialise de l'epoque visitee.",
  },
  {
    icon: Award,
    title: "Experience Premium",
    description:
      "Un service 5 etoiles du debut a la fin de votre aventure temporelle.",
  },
];

export default function About() {
  return (
    <section id="a-propos" className="py-24 px-4 bg-[#0d0d12]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#d4af37] uppercase tracking-[0.3em] text-sm font-medium">
              A propos
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Pionniers du{" "}
              <span className="gradient-text">Voyage Temporel</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Depuis 2089, TimeTravel Agency revolutionne l&apos;industrie du
              tourisme en offrant des experiences uniques a travers le temps.
              Notre equipe d&apos;experts en physique quantique et en histoire a
              developpe la technologie la plus avancee pour vous faire vivre
              l&apos;histoire comme jamais auparavant.
            </p>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Chaque voyage est minutieusement planifie pour garantir votre
              securite tout en vous offrant une immersion totale dans
              l&apos;epoque de votre choix.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {[
                { value: "500+", label: "Voyages realises" },
                { value: "100%", label: "Clients satisfaits" },
                { value: "3", label: "Destinations" },
                { value: "24/7", label: "Support temporel" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center p-4 bg-[#12121a] rounded-xl border border-[#1f1f2e]"
                >
                  <div className="text-3xl font-bold text-[#d4af37]">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-[#12121a] rounded-2xl border border-[#1f1f2e] hover:border-[#d4af37]/30 transition-colors group"
              >
                <div className="w-12 h-12 bg-[#d4af37]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#d4af37]/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-[#d4af37]" />
                </div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
