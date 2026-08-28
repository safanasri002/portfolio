import Socials from "./Socials";

export default function Hero() {
  return (
    <section className="hero-wrap" id="home">
      <div className="hero">
        <div className="hero-text">
          <div className="hero-text-top">
            <p className="eyebrow">Software Engineering Student</p>
            <h1>
              Hi, I&apos;m <span className="accent">Safa Nasri</span>
              <br />
              and I&apos;m a software engineering student.
            </h1>
            <p>
              I build full-stack applications end to end — from fraud-detection models
              to real-time platforms — and I&apos;m especially drawn to where machine
              learning meets solid backend engineering. Currently exploring how far
              Python, Angular, and a bit of DevOps can take a project.
            </p>
          </div>
          <div className="btn-row">
            <a className="btn-primary" href="#contact">Get in touch</a>
            <Socials />
          </div>
        </div>
        <div className="hero-photo">
          <img src="/profile.jpg" alt="Safa Nasri" />
        </div>
      </div>
    </section>
  );
}
