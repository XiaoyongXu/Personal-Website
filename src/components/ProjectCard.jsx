import React, { useState } from 'react'

import { motion } from 'framer-motion'

const ProjectCard = ({ project }) => {
  const [open, setOpen] = useState(false)
  return (
    <motion.article
      className="border border-border rounded-xl p-6 bg-surface shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col justify-between group"
      whileHover={{ y: -5 }}
    >
      <div>
        <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
        <p className="text-muted mb-4 text-sm md:text-base leading-relaxed">{project.summary}</p>
        <motion.div
          initial={false}
          animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
          className="overflow-hidden"
        >
          <div className="pt-2 pb-4 text-muted text-sm leading-relaxed border-t border-border mt-2">
            {project.details}
          </div>
        </motion.div>
      </div>

      <div className="flex items-center justify-between mt-4 pt-4 border-t border-border/50">
        <div className="flex flex-wrap gap-2">
          {project.stack.map((s, i) => (
            <span key={i} className="text-xs font-medium bg-primary/10 text-primary px-2.5 py-1 rounded-full">{s}</span>
          ))}
        </div>
        <button
          onClick={() => setOpen((v) => !v)}
          className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
        >
          {open ? 'Hide details' : 'Show details'}
        </button>
      </div>
    </motion.article>
  )
}

export default ProjectCard
