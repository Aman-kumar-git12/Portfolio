import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, X } from 'lucide-react';

const ResumeModal = ({ isOpen, onClose }) => {
  const resumeOptions = [
    { label: "Artificial Intelligence", file: "/Resume(1).pdf" },
    { label: "Full Stack", file: "/Resume(2).pdf" },
    { label: "Data Analyst", file: "/Resume(3).pdf" }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background/90 backdrop-blur-2xl p-4 overflow-hidden"
        >
          <button
            onClick={onClose}
            className="absolute top-8 right-8 w-12 h-12 flex items-center justify-center rounded-full bg-foreground/10 hover:bg-foreground/20 text-foreground transition-all z-[110]"
          >
            <X size={24} />
          </button>
          
          <div className="relative w-full max-w-5xl h-full flex flex-col items-center justify-center">
            <motion.h2 
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl font-display font-bold text-center mb-16"
            >
              Explore <span className="text-accent">My Work</span>
            </motion.h2>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 w-full perspective-1000">
              {resumeOptions.map((opt, i) => {
                const rotation = (i - 1) * 12; // -12, 0, +12
                const yOffset = i === 1 ? 0 : 30;
                const colors = [
                  "from-blue-500 to-indigo-600",
                  "from-emerald-400 to-teal-500",
                  "from-orange-400 to-rose-500"
                ];
                
                return (
                  <motion.a
                    key={i}
                    href={opt.file}
                    download={`Aman_Kumar_${opt.label.replace(' ', '_')}_Resume.pdf`}
                    onClick={onClose}
                    initial={{ y: "100vh", opacity: 0, rotateZ: 0 }}
                    animate={{ y: yOffset, opacity: 1, rotateZ: rotation }}
                    exit={{ y: "100vh", opacity: 0, rotateZ: 0 }}
                    transition={{ 
                      type: "spring", 
                      damping: 20, 
                      stiffness: 100, 
                      delay: i * 0.15 
                    }}
                    whileHover={{ scale: 1.05, rotateZ: 0, y: 0, zIndex: 50 }}
                    className={`relative w-full max-w-[300px] aspect-[3/4] rounded-3xl p-1 shadow-2xl flex-shrink-0 cursor-pointer overflow-hidden group bg-gradient-to-br ${colors[i]} transform-gpu`}
                  >
                    <div className="w-full h-full bg-surface/95 backdrop-blur-md rounded-[22px] flex flex-col items-center justify-center p-8 text-center border border-white/5 group-hover:bg-transparent transition-colors duration-500">
                      <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mb-8 text-white group-hover:scale-110 transition-transform">
                        <Download size={36} />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-white transition-colors mb-2">{opt.label}</h3>
                      <p className="text-muted group-hover:text-white/80 transition-colors text-sm font-medium uppercase tracking-widest">Download PDF</p>
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResumeModal;
