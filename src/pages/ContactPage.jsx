

const ContactPage = () => {
  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p className="text-muted mb-4">Interested in working together? Reach out:</p>
        <ul className="space-y-3 text-theme">
          <li>
            <strong className="mr-2">Email:</strong>
            <a className="underline" href="mailto:xxy1994212@gmail.com">xxy1994212@gmail.com</a>
          </li>
          <li>
            <strong className="mr-2">LinkedIn:</strong>
            <a className="underline" href="https://www.linkedin.com/in/tonyx258" target="_blank" rel="noreferrer">linkedin.com/in/tonyx258</a>
          </li>
          <li>
            <strong className="mr-2">GitHub:</strong>
            <a className="underline" href="https://github.com/XiaoyongXu" target="_blank" rel="noreferrer">github.com/XiaoyongXu</a>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default ContactPage
