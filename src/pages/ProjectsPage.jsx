
import ProjectCard from '../components/ProjectCard'
import projects from '../data/projects.json'

const ProjectsPage = () => {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {projects.map((p, i) => (
            <ProjectCard key={i} project={p} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsPage
