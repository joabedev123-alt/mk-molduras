import { motion } from 'framer-motion';

export const InfiniteCarousel = ({ images, direction = "left", speed = 40 }: { images: string[], direction?: "left" | "right", speed?: number }) => {
  return (
    <div className="relative w-full overflow-hidden flex bg-[#121212] py-4">
      {/* 
        We use two identical motion divs side-by-side that translate from 0 to -100% (or vice versa).
        This creates a seamless loop.
      */}
      <motion.div
        className="flex shrink-0 gap-4 pr-4"
        animate={{
          x: direction === "left" ? ["0%", "-100%"] : ["-100%", "0%"],
        }}
        transition={{
          duration: speed,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {images.map((src, i) => (
          <div key={i} className="w-[180px] md:w-[240px] h-[240px] md:h-[320px] shrink-0 rounded-sm overflow-hidden border border-white/5">
            <img src={src} alt="Galeria" className="w-full h-full object-cover" loading="lazy" />
          </div>
        ))}
      </motion.div>
      <motion.div
        className="flex shrink-0 gap-4 pr-4"
        animate={{
          x: direction === "left" ? ["0%", "-100%"] : ["-100%", "0%"],
        }}
        transition={{
          duration: speed,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {images.map((src, i) => (
          <div key={`copy-${i}`} className="w-[180px] md:w-[240px] h-[240px] md:h-[320px] shrink-0 rounded-sm overflow-hidden border border-white/5">
            <img src={src} alt="Galeria Copia" className="w-full h-full object-cover" loading="lazy" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};
