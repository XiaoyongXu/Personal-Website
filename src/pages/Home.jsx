
import About from '../components/About'
import ProjectsPage from './ProjectsPage'
import ExperiencePage from './ExperiencePage'
import ContactPage from './ContactPage'
import SectionWrapper from '../components/SectionWrapper'
const Home = () => {
  return (
    <div id="home" className="bg-bg min-h-screen">
      <SectionWrapper id="about" delay={0.1} className="pt-32 md:pt-48">
        <About />
      </SectionWrapper>

      <SectionWrapper id="experience" delay={0.2}>
        <ExperiencePage />
      </SectionWrapper>

      <SectionWrapper id="projects" delay={0.3}>
        <ProjectsPage />
      </SectionWrapper>

      <SectionWrapper id="contact" delay={0.4}>
        <ContactPage />
      </SectionWrapper>
    </div>
  )
}

export default Home
