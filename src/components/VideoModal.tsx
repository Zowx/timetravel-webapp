"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface VideoModalProps {
  isOpen: boolean;
  videoSrc: string;
  title: string;
  onClose: () => void;
}

export default function VideoModal({
  isOpen,
  videoSrc,
  title,
  onClose,
}: VideoModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={onClose}
          >
            <div
              className="relative w-full max-w-4xl bg-[#12121a] rounded-2xl overflow-hidden border border-[#1f1f2e]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 bg-[#d4af37] hover:bg-[#e5c158] text-[#0a0a0f] p-2 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Video Container */}
              <div className="relative w-full bg-black pt-[56.25%]">
                <video
                  src={videoSrc}
                  className="absolute inset-0 w-full h-full"
                  controls
                  autoPlay
                  controlsList="nodownload"
                />
              </div>

              {/* Title */}
              <div className="p-6 bg-gradient-to-r from-[#12121a] to-[#1f1f2e] border-t border-[#1f1f2e]">
                <h3 className="text-2xl font-bold text-white">{title}</h3>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
