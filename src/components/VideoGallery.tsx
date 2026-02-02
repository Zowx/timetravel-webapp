"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { useState } from "react";
import VideoModal from "./VideoModal";

const videos = [
  {
    id: 1,
    title: "Paris 1889",
    subtitle: "La Belle Epoque",
    thumbnail: "/images/paris1889.png",
    src: "/images/video_paris1889.mp4",
  },
  {
    id: 2,
    title: "Cretace",
    subtitle: "-65 Millions d'annees",
    thumbnail: "/images/cretace.png",
    src: "/images/video_cretace.mp4",
  },
  {
    id: 3,
    title: "Florence 1504",
    subtitle: "La Renaissance",
    thumbnail: "/images/florence1504.png",
    src: "/images/video_florence1504.mp4",
  },
];

export default function VideoGallery() {
  const [selectedVideo, setSelectedVideo] = useState<{
    src: string;
    title: string;
  } | null>(null);

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-[#0a0a0f] to-[#12121a]">
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
            Galerie Videos
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Explorez nos <span className="gradient-text">Destinations</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Visionnez des aperçus immersifs de chaque destination temporelle.
          </p>
        </motion.div>

        {/* Video Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              onClick={() =>
                setSelectedVideo({ src: video.src, title: video.title })
              }
              className="group relative cursor-pointer rounded-2xl overflow-hidden border border-[#1f1f2e] hover:border-[#d4af37]/50 transition-colors"
            >
              {/* Thumbnail */}
              <div className="relative h-56 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url('${video.thumbnail}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent" />

                {/* Play Button */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <div className="bg-[#d4af37] p-4 rounded-full hover:bg-[#e5c158] transition-colors">
                    <Play className="w-8 h-8 text-[#0a0a0f] fill-current" />
                  </div>
                </motion.div>
              </div>

              {/* Info */}
              <div className="p-6 bg-[#12121a] border-t border-[#1f1f2e]">
                <h3 className="text-xl font-bold mb-1">{video.title}</h3>
                <p className="text-gray-500 text-sm">{video.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Video Modal */}
        <VideoModal
          isOpen={!!selectedVideo}
          videoSrc={selectedVideo?.src || ""}
          title={selectedVideo?.title || ""}
          onClose={() => setSelectedVideo(null)}
        />
      </div>
    </section>
  );
}
