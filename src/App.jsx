import { Layout } from "./components/layout/Layout";
import { Hero } from "./components/sections/Hero";
import { Projects } from "./components/sections/Projects";
import { About } from "./components/sections/About";
import { Experience } from "./components/sections/Experience";
import { Contact } from "./components/sections/Contact";
import { Background3D } from "./components/ui/Background3D";

function App() {
  return (
    <>
      <Background3D />
      <Layout>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </Layout>
    </>
  );
}

export default App;
