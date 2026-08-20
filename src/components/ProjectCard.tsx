import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Code, ExternalLink } from 'lucide-react';
import type { Project } from '../data/portafolioData';
import VideoModal from './VideoModal';

interface Props { project: Project; index: number; }

const ProjectCard: React.FC<Props> = ({ project }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div
        // Eliminamos initial y whileInView para que cargue de inmediato
        whileHover={{ y: -8 }}
        className="group relative bg-white/80 backdrop-blur-md border border-slate-200 rounded-2xl overflow-hidden flex flex-col h-full hover:shadow-[0_20px_40px_rgba(37,99,235,0.12)] hover:border-blue-300 transition-all duration-300"
      >
        {/* Fondo colorido que aparece sutilmente al hacer hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-cyan-50/0 group-hover:from-blue-50/50 group-hover:to-cyan-50/50 transition-colors duration-500 pointer-events-none" />

        <div className="h-56 relative overflow-hidden bg-slate-100">
          <img 
            src={project.imageUrl !== "[URL_DE_IMAGEN_O_PLACEHOLDER]" ? project.imageUrl : "/api/placeholder/800/600"} 
            alt={project.title} 
            className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500 ease-out"
          />
          <span className="absolute top-4 right-4 z-20 bg-white/95 text-blue-700 border border-blue-100 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
            {project.projectType}
          </span>
        </div>

        <div className="p-6 flex flex-col flex-grow relative z-20">
          <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-700 transition-colors duration-300">
            {project.title}
          </h3>
          
          <div className="mb-5">
            <h4 className="text-sm font-semibold text-indigo-500 mb-1 flex items-center gap-2 group-hover:text-indigo-600 transition-colors">
              <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 group-hover:bg-indigo-600 group-hover:scale-150 transition-all" />
              Solución de Negocio
            </h4>
            <p className="text-slate-600 text-sm leading-relaxed">{project.businessProblem}</p>
          </div>

           <div className="mb-5">
            <h4 className="text-sm font-semibold text-indigo-500 mb-1 flex items-center gap-2 group-hover:text-indigo-600 transition-colors">
              <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 group-hover:bg-indigo-600 group-hover:scale-150 transition-all" />
              Rol:
            </h4>
            <p className="text-slate-600 text-sm leading-relaxed">{project.myRole}</p>
          </div>

          <div className="mb-6 flex-grow">
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="px-2.5 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-md border border-slate-200 group-hover:border-cyan-200 group-hover:bg-white transition-colors">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-3 mt-auto">
            {project.liveUrl && (
              <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href={project.liveUrl} target="_blank" rel="noopener noreferrer" 
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-200 transition-all"
              >
                <ExternalLink size={16} /> Ver proyecto
              </motion.a>
            )}
            
            {project.demoVideo && (
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => setIsModalOpen(true)} 
                className="flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-700 border border-indigo-100 text-sm font-medium rounded-lg hover:bg-indigo-600 hover:text-white transition-colors"
              >
                <Play size={16} /> Ver demo
              </motion.button>
            )}

            {project.githubUrl && (
              <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href={project.githubUrl} target="_blank" rel="noopener noreferrer" 
                className="flex items-center gap-2 px-4 py-2 text-slate-600 border border-slate-200 text-sm font-medium rounded-lg hover:bg-slate-800 hover:text-white hover:border-slate-800 transition-colors"
              >
                <Code size={16} /> Código
              </motion.a>
            )}
          </div>
        </div>
      </motion.div>
      {project.demoVideo && <VideoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} videoUrl={project.demoVideo} projectTitle={project.title} />}
    </>
  );
};
export default ProjectCard;