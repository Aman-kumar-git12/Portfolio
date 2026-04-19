import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../../data/portfolio';
import Tilt from '../ui/Tilt';
import { ArrowRight } from 'lucide-react';

const Projects = ({ onOpenModal }) => {
  const allProjects = Object.values(projects).flat();
  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-4">Portfolio</h2>
            <h3 className="text-4xl md:text-5xl font-display font-medium">Selected Works</h3>
          </div>
          <p className="text-muted max-w-sm">A collection of technical challenges and engineered solutions.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {allProjects.map((project) => (
            <Tilt key={project.id} className="group">
              <div
                className="clickable bg-foreground/[0.03] border border-foreground/5 rounded-[2rem] overflow-hidden cursor-none"
                onClick={() => onOpenModal(project, 'project')}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-8">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map(t => (
                      <span key={t} className="px-2 py-0.5 border border-foreground/10 rounded-full text-[10px] font-bold text-muted uppercase">{t}</span>
                    ))}
                  </div>
                  <h4 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors">{project.title}</h4>
                  <p className="text-muted text-sm line-clamp-2 mb-6">{project.description}</p>

                  <div className="flex items-center gap-2 text-accent text-sm font-bold">
                    View Details <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
