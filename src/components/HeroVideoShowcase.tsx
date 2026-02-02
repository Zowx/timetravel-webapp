"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Sparkles, Play, X } from "lucide-react";
import { useMemo, useState } from "react";
import Image from "next/image";

export default function HeroVideoShowcase() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const heroVideo = "/images/TimeTravel_Teaser_Final.mp4";

  const particles = useMemo(() => {
    return [...Array(20)].map((_, i) => ({
      id: i,
      left: `${(i * 5) % 100}%`,
      top: `${(i * 7 + 10) % 100}%`,
      duration: 3 + (i % 3),
      delay: (i % 5) * 0.4,
    }));
  }, []);

  return (
    <>
      <section
        id="accueil"
        className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20 pb-10"
      >
        {/* Background avec gradient */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#0a0a0f]" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#d4af37]/5 via-transparent to-transparent" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#d4af37]/10 rounded-full blur-[120px]" />
        </div>

        {/* Particules decoratives */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute w-1 h-1 bg-[#d4af37] rounded-full"
              style={{
                left: particle.left,
                top: particle.top,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 1, 0.2],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                delay: particle.delay,
              }}
            />
          ))}
        </div>

        {/* Contenu Hero */}
        <div className="relative z-20 max-w-5xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-[#d4af37]/30 bg-[#d4af37]/5"
          >
            <Sparkles className="w-4 h-4 text-[#d4af37]" />
            <span className="text-[#d4af37] text-sm font-medium">
              Explorez l&apos;histoire, reinventee
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
          >
            <span className="text-white">Voyagez dans</span>
            <br />
            <span className="gradient-text">le Temps</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl mx-auto"
          >
            Decouvrez nos destinations temporelles exclusives et vivez des
            experiences uniques a travers les epoques.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <motion.a
              href="#destinations"
              className="btn-gold text-lg px-8 py-4 inline-flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Decouvrir nos destinations
            </motion.a>
            <motion.a
              href="#a-propos"
              className="px-8 py-4 border border-[#d4af37]/50 text-[#d4af37] rounded-lg hover:bg-[#d4af37]/10 transition-colors inline-flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              En savoir plus
            </motion.a>
          </motion.div>
        </div>

        {/* Video Showcase - Style MagicUI */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="relative z-20 w-full max-w-5xl mx-auto px-4"
        >
          {/* Glow effect behind */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#d4af37]/20 via-[#d4af37]/10 to-[#d4af37]/20 blur-3xl -z-10 scale-95" />

          {/* Video Container */}
          <div className="relative rounded-2xl overflow-hidden border border-[#d4af37]/20 bg-[#12121a] shadow-2xl shadow-[#d4af37]/10">
            {/* Browser-style header */}
            <div className="flex items-center gap-2 px-4 py-3 bg-[#1a1a24] border-b border-[#d4af37]/10">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="px-4 py-1 rounded-md bg-[#0a0a0f] text-gray-500 text-xs">
                  timetravel.agency/experience
                </div>
              </div>
            </div>

            {/* Video preview area */}
            <div
              className="relative aspect-video cursor-pointer group"
              onClick={() => setIsVideoOpen(true)}
            >
              {/* Thumbnail - using paris as main thumbnail */}
              <Image
                src="/images/paris1889.webp"
                alt="TimeTravel Teaser Preview"
                fill
                className="object-cover"
                priority
              />

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/80 via-[#0a0a0f]/20 to-transparent" />

              {/* Play button */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
              >
                <motion.button
                  className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-[#d4af37] to-[#b8962e] flex items-center justify-center shadow-lg shadow-[#d4af37]/30 group-hover:shadow-[#d4af37]/50 transition-shadow"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Play className="w-8 h-8 md:w-10 md:h-10 text-[#0a0a0f] fill-[#0a0a0f] ml-1" />
                </motion.button>
              </motion.div>

              {/* Caption */}
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white font-semibold text-lg md:text-xl">
                  TimeTravel Agency - Teaser Officiel
                </p>
                <p className="text-gray-400 text-sm">
                  Paris 1889 • Cretace • Florence 1504
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <a href="#destinations">
            <ChevronDown className="w-8 h-8 text-[#d4af37]" />
          </a>
        </motion.div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            onClick={() => setIsVideoOpen(false)}
          >
            {/* Close button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute top-4 right-4 w-12 h-12 rounded-full bg-[#d4af37] flex items-center justify-center hover:bg-[#b8962e] transition-colors z-10"
              onClick={() => setIsVideoOpen(false)}
            >
              <X className="w-6 h-6 text-[#0a0a0f]" />
            </motion.button>

            {/* Video container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden border border-[#d4af37]/30 shadow-2xl shadow-[#d4af37]/20"
              onClick={(e) => e.stopPropagation()}
            >
              <video
                className="w-full h-full object-cover"
                autoPlay
                controls
                playsInline
                src={heroVideo}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
