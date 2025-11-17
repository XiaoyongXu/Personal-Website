

const Hero = () => {
  return (
    <section className="section bg-theme">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center p-8 bg-surface rounded-lg shadow-md">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-3">Xiaoyong (Tony) Xu</h1>
          <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-6">
            Software engineer focused on high-performance distributed systems, checkout experiences, and integrations.
          </p>
          <div className="flex justify-center gap-4">
            <a href="#projects" className="btn-primary px-4 py-2 rounded shadow">View Projects</a>
            <a href="/Xiaoyong-Xu-Resume.pdf" target="_blank" rel="noreferrer" className="border border-surface px-4 py-2 rounded">Download Resume</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
