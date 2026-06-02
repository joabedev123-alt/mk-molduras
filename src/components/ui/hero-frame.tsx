import { motion } from 'framer-motion';

const cornerVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: { 
    pathLength: 1, 
    opacity: [0, 1, 0.7, 1], 
    transition: { 
      pathLength: { duration: 2, ease: "easeInOut", delay: 0.5 },
      opacity: { duration: 4, ease: "easeInOut", delay: 2.5, repeat: Infinity, repeatType: "mirror" }
    } 
  }
};

const lineVariantsX = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: { 
    scaleX: 1, 
    opacity: [0, 1, 0.6, 1], 
    transition: { 
      scaleX: { duration: 1.5, ease: "easeInOut", delay: 1.5 },
      opacity: { duration: 4, ease: "easeInOut", delay: 3, repeat: Infinity, repeatType: "mirror" }
    } 
  }
};

const lineVariantsY = {
  hidden: { scaleY: 0, opacity: 0 },
  visible: { 
    scaleY: 1, 
    opacity: [0, 1, 0.6, 1], 
    transition: { 
      scaleY: { duration: 1.5, ease: "easeInOut", delay: 1.5 },
      opacity: { duration: 4, ease: "easeInOut", delay: 3, repeat: Infinity, repeatType: "mirror" }
    } 
  }
};

const Corner = ({ className, color }: { className?: string, color: string }) => (
  <svg 
    width="60" 
    height="60" 
    viewBox="0 0 60 60" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={`absolute ${className}`}
    style={{ filter: `drop-shadow(0 0 8px ${color}80)` }}
  >
    <motion.path d="M 60 5 L 20 5 L 20 20 L 5 20 L 5 60" stroke={color} strokeWidth="2" fill="none" variants={cornerVariants} />
    <motion.path d="M 20 5 L 5 5 L 5 20" stroke={color} strokeWidth="2" fill="none" variants={cornerVariants} />
    <motion.path d="M 60 15 L 25 15 L 15 25 L 15 60" stroke={color} strokeWidth="2" fill="none" variants={cornerVariants} />
    <motion.path d="M 35 15 A 20 20 0 0 0 15 35" stroke={color} strokeWidth="2" fill="none" variants={cornerVariants} />
  </svg>
);

export const HeroFrame = ({ color = "#C7A27A" }: { color?: string }) => {
  const lineStyle = { backgroundColor: color, boxShadow: `0 0 8px ${color}80` };

  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="absolute inset-4 md:inset-8 z-20 pointer-events-none"
    >
      {/* Corners */}
      <Corner className="top-0 left-0" color={color} />
      <Corner className="top-0 right-0 scale-x-[-1]" color={color} />
      <Corner className="bottom-0 right-0 scale-x-[-1] scale-y-[-1]" color={color} />
      <Corner className="bottom-0 left-0 scale-y-[-1]" color={color} />

      {/* Top Lines */}
      <motion.div 
        variants={lineVariantsX}
        className="absolute top-[4px] left-[60px] right-[60px] h-[2px] origin-center"
        style={lineStyle}
      />
      <motion.div 
        variants={lineVariantsX}
        className="absolute top-[14px] left-[60px] right-[60px] h-[2px] origin-center"
        style={lineStyle}
      />

      {/* Bottom Lines */}
      <motion.div 
        variants={lineVariantsX}
        className="absolute bottom-[4px] left-[60px] right-[60px] h-[2px] origin-center"
        style={lineStyle}
      />
      <motion.div 
        variants={lineVariantsX}
        className="absolute bottom-[14px] left-[60px] right-[60px] h-[2px] origin-center"
        style={lineStyle}
      />

      {/* Left Lines */}
      <motion.div 
        variants={lineVariantsY}
        className="absolute left-[4px] top-[60px] bottom-[60px] w-[2px] origin-center"
        style={lineStyle}
      />
      <motion.div 
        variants={lineVariantsY}
        className="absolute left-[14px] top-[60px] bottom-[60px] w-[2px] origin-center"
        style={lineStyle}
      />

      {/* Right Lines */}
      <motion.div 
        variants={lineVariantsY}
        className="absolute right-[4px] top-[60px] bottom-[60px] w-[2px] origin-center"
        style={lineStyle}
      />
      <motion.div 
        variants={lineVariantsY}
        className="absolute right-[14px] top-[60px] bottom-[60px] w-[2px] origin-center"
        style={lineStyle}
      />

    </motion.div>
  );
};
