import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import projectsData from "../../data/projects.json";

// We'll map the stacked (array) to tags in our card
const projects = projectsData.map((p, i) => ({
    id: i,
    title: p.title,
    description: p.summary, 
    details: p.details,
    // Using a gradient placeholder if no image
    image: p.image || null,
    tags: p.stack,
    link: p.demo,
    github: p.github
}));

export const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group flex flex-col h-full bg-surface border border-border rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:border-accent/40"
    >
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-6">
           <div className="p-3 rounded-lg bg-accent/10 border border-accent/20 group-hover:bg-accent/20 transition-colors">
              <span className="text-xl font-bold text-accent font-display">
                {String(index + 1).padStart(2, '0')}
              </span>
           </div>
           <div className="flex gap-2">
              {project.github && (
                 <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 text-muted hover:text-text hover:bg-muted/10 rounded-full transition-colors" aria-label="Github">
                    <FiGithub size={20} />
                 </a>
              )}
               {project.link && (
                 <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-2 text-muted hover:text-text hover:bg-muted/10 rounded-full transition-colors" aria-label="Demo">
                    <FiArrowUpRight size={20} />
                 </a>
              )}
           </div>
        </div>

        <h3 className="text-xl font-bold font-display mb-3 group-hover:text-accent transition-colors">{project.title}</h3>
        <p className="text-muted text-sm leading-relaxed mb-6 flex-1">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border/50">
          {project.tags.slice(0, 5).map(tag => (
            <span key={tag} className="px-2.5 py-1 text-xs font-medium rounded-md bg-muted/10 text-muted-foreground border border-border/50">
              {tag}
            </span>
          ))}
          {project.tags.length > 5 && (
             <span className="px-2.5 py-1 text-xs font-medium rounded-md bg-muted/10 text-muted-foreground border border-border/50">
                +{project.tags.length - 5}
             </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-bg">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
           <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Featured Projects</h2>
              <p className="text-muted text-lg">A selection of projects that showcase my technical breadth.</p>
           </div>
           
           <a href="https://github.com/XiaoyongXu" target="_blank" rel="noopener noreferrer" className="hidden md:inline-flex items-center gap-2 text-accent font-medium hover:text-accent/80 transition-colors mt-4 md:mt-0 group">
              <span>View Github Profile</span>
              <FiArrowUpRight className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
           </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
        
         <div className="mt-12 text-center md:hidden">
            <a href="https://github.com/XiaoyongXu" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-accent font-medium hover:underline">
              View Github Profile &rarr;
            </a>
         </div>
      </div>
    </section>
  );
};
