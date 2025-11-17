import React, { useState } from 'react'

const ProjectCard = ({ project }) => {
  const [open, setOpen] = useState(false)
  return (
    <article className="border border-slate-700 rounded-lg p-5 bg-surface hover:shadow-md transition-shadow h-full flex flex-col justify-between">
      <div>
        <h3 className="text-lg md:text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-theme mb-3 text-sm md:text-base">{project.summary}</p>
        {open && project.details && (
          <div className="mt-2 text-theme text-sm leading-relaxed">
            {project.details}
          </div>
        )}
      </div>

      <div className="flex items-center justify-between mt-4">
        <div className="flex flex-wrap gap-2">
          {project.stack.map((s, i) => (
            <span key={i} className="text-xs bg-surface px-2 py-1 rounded-full text-theme">{s}</span>
          ))}
        </div>
        <button onClick={() => setOpen((v) => !v)} className="text-sm text-primary hover:underline">
          {open ? 'Hide details' : 'Show details'}
        </button>
      </div>
    </article>
  )
}

export default ProjectCard
