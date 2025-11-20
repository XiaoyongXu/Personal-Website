

const ContactPage = () => {
  return (
    <div className="container max-w-2xl mx-0">
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-left mb-4">Get In Touch</h2>
        <div className="h-1 w-20 bg-primary rounded-full"></div>
      </div>
      <p className="text-lg text-muted mb-8 text-left">
        I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
      </p>
      <div className="flex flex-col gap-4 items-start">
        <a
          href="mailto:xxy1994212@gmail.com"
          className="text-xl font-medium text-primary hover:underline"
        >
          xxy1994212@gmail.com
        </a>
        <div className="flex gap-6 mt-4">
          <a className="text-muted hover:text-primary transition-colors" href="https://www.linkedin.com/in/tonyx258" target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="text-muted hover:text-primary transition-colors" href="https://github.com/XiaoyongXu" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
