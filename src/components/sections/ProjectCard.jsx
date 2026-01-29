import { motion } from "framer-motion";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import { cn } from "../../lib/utils";

export const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative rounded-2xl overflow-hidden bg-surface border border-border"
    >
      <div className="aspect-[16/9] overflow-hidden bg-muted/20 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
        <img 
          src={project.image} 
          alt={project.title} 
          className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute bottom-4 left-4 right-4 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
           <div className="flex gap-2 justify-end">
              {project.github && (
                 <a href={project.github} className="p-2 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-colors">
                    <FiGithub size={20} />
                 </a>
              )}
               {project.link && (
                 <a href={project.link} className="p-2 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-colors">
                    <FiArrowUpRight size={20} />
                 </a>
              )}
           </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold font-display mb-2 group-hover:text-accent transition-colors">{project.title}</h3>
        <p className="text-muted text-sm line-clamp-2 mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map(tag => (
            <span key={tag} className="px-2 py-1 text-xs font-medium rounded-md bg-accent/10 text-accent">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
