import React from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#FAFAFC]">
      {/* Grid Tecnológico sutil y claro */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-60" />
      
      {/* Blobs / Orbes de luz - Tonos cálidos azulados y lavanda */}
      <motion.div
        animate={{ x: [0, 50, 0], y: [0, -30, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] left-[-5%] w-[40vw] h-[40vw] rounded-full bg-indigo-200/50 blur-[100px]"
      />
      <motion.div
        animate={{ x: [0, -50, 0], y: [0, 50, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[20%] right-[-10%] w-[35vw] h-[35vw] rounded-full bg-cyan-200/40 blur-[100px]"
      />
      <motion.div
        animate={{ x: [0, 30, -30, 0], y: [0, 60, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-10%] left-[20%] w-[30vw] h-[30vw] rounded-full bg-blue-200/40 blur-[120px]"
      />
    </div>
  );
};

export default AnimatedBackground;