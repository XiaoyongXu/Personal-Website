
import ProjectCard from '../components/ProjectCard'
import projects from '../data/projects.json'

const ProjectsPage = () => {
  return (
    <div className="container">
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-left mb-4">Projects</h2>
        <div className="h-1 w-20 bg-primary rounded-full"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        {projects.map((p, i) => (
          <ProjectCard key={i} project={p} />
        ))}
      </div>
    </div>
  )
}

export default ProjectsPage
