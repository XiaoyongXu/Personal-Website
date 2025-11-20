function About() {
  return (
    <div className="container mx-auto px-4">
      <div className="mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-left mb-4">About Me</h2>
        <div className="h-1 w-20 bg-primary rounded-full"></div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 lg:gap-16">
        <div className="md:w-1/3">
          <img
            className="rounded-full w-48 h-48 lg:w-64 lg:h-64 mx-auto object-cover shadow-lg border-4 border-surface"
            src="/photo.jpg"
            alt="Xiaoyong (Tony) Xu"
          />
        </div>
        <div className="md:w-2/3 text-center md:text-left">
          <p className="text-lg text-muted mb-4 leading-relaxed">
            I’m a full-stack engineer who thrives on building robust systems and making them scale. My work spans API design, backend performance tuning, cloud infrastructure, and creating smooth, responsive experiences on the front end. I enjoy breaking down complex problems, designing clean architectures, and writing code that is both efficient and easy to maintain.
          </p>
          <p className="text-lg text-muted mb-4 leading-relaxed">
            What motivates me most is the challenge of turning ambiguity into well-engineered solutions—whether that means optimizing data flows, improving reliability in distributed environments, or building features that enhance the user experience. I value strong engineering principles, thoughtful collaboration, and continuous learning.
          </p>
          <p className="text-lg text-muted leading-relaxed">
            Every project I work on is an opportunity to raise the bar on quality, performance, and user experience.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;