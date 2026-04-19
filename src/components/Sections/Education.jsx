import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { education } from '../../data/portfolio';
import { GraduationCap, BookOpen, School } from 'lucide-react';
import RoadmapCanvas from '../ui/RoadmapCanvas';

const ICON_MAP = [School, BookOpen, GraduationCap];

const Education = ({ onOpenModal }) => {
  const [activeIdx, setActiveIdx] = useState(-1);
  const chronEducation = [...education].reverse();

  const roadmapNodes = [
    { pct: 0.12 },
    { pct: 0.48 },
    { pct: 0.82 }
  ];

  return (
    <section id="education" className="py-32 md:py-48 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-24 text-center lg:text-left">
          <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-4">Academic</h2>
          <h3 className="text-4xl md:text-5xl font-display font-medium">Academic Roadmap</h3>
          <p className="text-muted text-lg max-w-2xl mt-6 leading-relaxed">
            Tracing the path of continuous learning, from foundational schooling to technical specialization.
          </p>
        </div>

        <RoadmapCanvas
          nodes={roadmapNodes}
          onNodeActive={(idx) => setActiveIdx(idx)}
        >
          {(coords) => (
            <>
              {/* Desktop Layout - Exactly Aligned with Canvas */}
              <div className="absolute inset-0 hidden lg:block overflow-visible">
                {chronEducation.map((item, idx) => {
                  const Icon = ICON_MAP[idx] || GraduationCap;
                  const isActive = activeIdx === idx;
                  const pos = coords[idx];

                  if (!pos) return null;

                  return (
                    <motion.div
                      key={item.college}
                      animate={{ 
                        scale: isActive ? 1.05 : 1,
                        borderColor: isActive ? 'hsl(var(--accent))' : 'rgba(var(--accent-rgb), 0.2)',
                        backgroundColor: isActive ? 'hsl(var(--surface) / 0.95)' : 'hsl(var(--surface) / 0.8)',
                        boxShadow: isActive ? '0 0 50px rgba(var(--accent-rgb), 0.35)' : 'none'
                      }}
                      transition={{ duration: 0.3 }}
                      onClick={() => onOpenModal(item, 'education')}
                      style={{ 
                        left: `${pos.x - 120}px`, 
                        top: `${pos.y - 110}px` 
                      }}
                      className="absolute -translate-x-1/2 -translate-y-1/2 group w-64 p-6 rounded-3xl backdrop-blur-md border-2 border-dashed transition-all cursor-none z-30 pointer-events-auto"
                    >
                      <div className="flex flex-col items-center text-center">
                        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 mb-6 ${isActive ? 'bg-accent text-accent-foreground scale-110 shadow-[0_0_20px_rgba(var(--accent-rgb),0.5)]' : 'bg-accent/10 text-accent'
                          }`}>
                          <Icon size={32} />
                        </div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-accent mb-2">{item.degree}</h4>
                        <p className="text-base font-bold text-foreground leading-tight line-clamp-2">{item.college}</p>
                        <div className="mt-4 pt-4 border-t border-foreground/5 w-full">
                          <p className="text-[10px] font-mono text-muted uppercase tracking-wider font-bold">{item.duration} — {item.result}</p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Mobile Layout (Stacked) */}
              <div className="lg:hidden flex flex-col gap-12 relative z-20 px-4 py-12">
                {chronEducation.map((item, idx) => {
                  const Icon = ICON_MAP[idx] || GraduationCap;
                  return (
                    <motion.div
                      key={item.college}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      onClick={() => onOpenModal(item, 'education')}
                      className="w-full p-8 rounded-3xl bg-surface/40 backdrop-blur-md border-2 border-dashed border-accent/30 flex items-center gap-6"
                    >
                      <div className="shrink-0 w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center text-accent">
                        <Icon size={32} />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-accent mb-1">{item.degree}</h4>
                        <p className="text-lg font-bold text-foreground leading-tight">{item.college}</p>
                        <p className="text-xs font-mono text-muted mt-2">{item.duration}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </>
          )}
        </RoadmapCanvas>
      </div>
    </section>
  );
};

export default Education;
