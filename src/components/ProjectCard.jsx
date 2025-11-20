import React, { useState } from 'react'

import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const ProjectCard = ({ project }) => {
  const [open, setOpen] = useState(false)
  return (
    <motion.article
      className="border border-border rounded-xl p-6 bg-surface shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col group"
      whileHover={{ y: -5 }}
    >
      <div className="flex-grow flex flex-col">
        <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
        <p className="text-muted mb-4 text-sm md:text-base leading-relaxed">
          {project.summary}
        </p>

        <div className="mt-auto">
          <button
            onClick={() => setOpen(!open)}
            className="text-primary text-sm font-medium hover:underline focus:outline-none mb-2 inline-flex items-center gap-1"
          >
            {open ? 'Show less' : 'Show details'}
          </button>

          <motion.div
            initial={false}
            animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
            className="overflow-hidden"
          >
            <div className="pb-4 text-muted text-sm leading-relaxed border-t border-border/50 pt-3">
              {project.details}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="pt-4 border-t border-border/50 flex flex-col gap-4">
        <div className="flex flex-wrap gap-2 min-h-[3.5rem] content-start">
          {project.stack.map((s, i) => (
            <span key={i} className="text-xs font-medium bg-primary/10 text-primary px-2.5 py-1 rounded-full h-fit">{s}</span>
          ))}
        </div>

        <div className="flex gap-3">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2 rounded-lg bg-primary text-primary-foreground dark:bg-white dark:text-black font-medium hover:bg-primary/90 dark:hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 text-sm"
            >
              <FaExternalLinkAlt size={14} /> Visit Site
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2 rounded-lg border border-border dark:border-white/20 hover:bg-surface-foreground/5 dark:hover:bg-white/10 font-medium transition-colors flex items-center justify-center gap-2 text-sm text-muted dark:text-gray-300 hover:text-theme dark:hover:text-white"
            >
              <FaGithub size={16} /> Code
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}

export default ProjectCard
