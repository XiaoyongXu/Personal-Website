

const ResumePage = () => {
  return (
    <section id="resume" className="section">
      <div className="container">
        <h2 className="text-2xl font-semibold mb-4">Resume</h2>
        <div className="mb-4 text-muted">Below is an embedded copy of the resume. You can also download it.</div>
        <div className="w-full border border-surface rounded overflow-hidden">
          <object data="/Xiaoyong%20Xu%20Resume.pdf" type="application/pdf" width="100%" height="900">
            <p className="p-4">PDF preview is not available. <a className="underline" href="/Xiaoyong-Xu-Resume.pdf" target="_blank" rel="noreferrer">Download the resume</a>.</p>
          </object>
        </div>
        <div className="mt-4">
          <a className="inline-block btn-primary px-4 py-2 rounded" href="/Xiaoyong-Xu-Resume.pdf" target="_blank" rel="noreferrer">Download Resume</a>
        </div>
      </div>
    </section>
  )
}

export default ResumePage
