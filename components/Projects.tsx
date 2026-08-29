type Project = {
  title: string;
  desc: string;
  gradient: string;
  repo: string;
  demo: string;
  icon: React.ReactNode;
};

// TODO: fill in real repo / demo URLs when ready — that's the only thing left here.
const projects: Project[] = [
  {
    title: "Intelligent Banking Platform",
    desc: "Fraud detection using Random Forest (~97% accuracy). Spring Boot, Angular, Flask, PostgreSQL.",
    gradient: "p1",
    repo: "#",
    demo: "https://drive.google.com/drive/folders/1okhhL-j0Yy72WGjZFVfKIK6oLQfdYtO0?usp=sharing",
    icon: <path d="M3 21h18M4 21V10M20 21V10M2 10l10-6 10 6M6 21v-6M10 21v-6M14 21v-6M18 21v-6" />,
  },
  {
    title: "Artora",
    desc: "Art auction platform with JWT auth, WebSockets, and a wallet system. Angular, FastAPI, MongoDB.",
    gradient: "p2",
    repo: "#",
    demo: "#",
    icon: (
      <>
        <path d="M12 2a10 10 0 100 20c1.1 0 2-.9 2-2 0-.5-.2-1-.5-1.3-.3-.4-.5-.8-.5-1.3 0-1.1.9-2 2-2h2.3A4.2 4.2 0 0021 11c0-5-4-9-9-9z" />
        <circle cx="7.5" cy="10.5" r="1" />
        <circle cx="11.5" cy="7.5" r="1" />
        <circle cx="16" cy="10" r="1" />
      </>
    ),
  },
  {
    title: "Handwritten Document Extraction",
    desc: "OpenCV + TrOCR pipeline for handwritten text extraction, running fully locally.",
    gradient: "p3",
    repo: "#",
    demo: "#",
    icon: (
      <>
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <path d="M14 2v6h6" />
        <path d="M9 15l1.5-1.5L14 17l-1.5 1.5z" />
      </>
    ),
  },
  {
    title: "Research Paper Assistant",
    desc: "LangChain chatbot for discovering papers, with trust signals like DOI and citation counts.",
    gradient: "p4",
    repo: "#",
    demo: "#",
    icon: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="M21 21l-4.35-4.35" />
      </>
    ),
  },
  {
    title: "New project",
    desc: "Describe your project here in one or two sentences.",
    gradient: "p5",
    repo: "#",
    demo: "#",
    icon: <path d="M12 5v14M5 12h14" />,
  },
  {
    title: "New project",
    desc: "Describe your project here in one or two sentences.",
    gradient: "p6",
    repo: "#",
    demo: "#",
    icon: <path d="M12 2l1.8 5.6L19.5 9l-4.7 3.4L16 18l-4-3.2L8 18l1.2-5.6L4.5 9l5.7-1.4z" />,
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <div className="projects-header">
        <h2>My projects</h2>
        <p>Click to view on GitHub</p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <div className={`project-card ${project.gradient}`} key={project.title + project.gradient}>
            <div className="project-top">
              <h3>{project.title}</h3>
            </div>
            <div className="mockup">
              <div className="mockup-bar"><span /><span /><span /></div>
              <div className="mockup-body">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  {project.icon}
                </svg>
              </div>
            </div>
            <p className="desc">{project.desc}</p>
            <div className="project-links">
              <a href={project.repo}>Repo</a>
              <a
                href={project.demo}
                target={project.demo.startsWith("http") ? "_blank" : undefined}
                rel={project.demo.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                Live demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
