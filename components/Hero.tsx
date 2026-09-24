import Socials from "./Socials";

const focusAreas = ["Artificial Intelligence", "Full-Stack", "Cloud & DevOps", "Data"];

export default function Hero() {
  return (
    <section className="hero-wrap" id="home">
      <div className="hero-glow" aria-hidden="true" />
      <div className="hero">
        <div className="hero-text">
          <div className="hero-text-top">
            <p className="eyebrow">Software Engineering Student</p>
            <h1>
              Hi, I&apos;m <span className="accent">Safa Nasri</span>
              <br />
              I build intelligent, production-ready software.
            </h1>
            <p>
              I build full-stack applications end to end — from fraud-detection models
              to real-time platforms — and I&apos;m especially drawn to where machine
              learning meets solid backend engineering. Currently exploring how far
              Python, Angular, and a bit of DevOps can take a project.
            </p>
            <div className="focus-tags">
              {focusAreas.map((area) => (
                <span className="focus-tag" key={area}>{area}</span>
              ))}
            </div>
          </div>
          <div className="btn-row">
            <a className="btn-primary" href="#projects">Voir mes projets</a>
            <a
              className="btn-secondary"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=safanasri2003@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Me contacter
            </a>
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
