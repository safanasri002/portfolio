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
    title: "CardioAgent-Ops",
    desc: "Multi-agent decision-support system for cardio-acoustic diagnosis, combining Decision Tree, SVM, CNN, ResNet, Transformer, and a QLoRA-tuned LLM. LangGraph + RAG on Qdrant, served via FastAPI, tracked with MLflow.",
    gradient: "p1",
    repo: "#",
    demo: "#",
    icon: (
      <>
        <path d="M2 12h4l1.5-3 3 7 2.5-9 2 5h7" />
        <circle cx="19" cy="12" r="1.2" />
      </>
    ),
  },
  {
    title: "Savvily",
    desc: "Personal finance assistant with a RAG pipeline (sentence-transformers + Llama 3.1) for conversational guidance and automatic transaction categorization. FastAPI, PostgreSQL, Docker.",
    gradient: "p2",
    repo: "#",
    demo: "#",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v10M15 9.8c0-1.3-1.3-2.3-3-2.3s-3 .9-3 2.1c0 2.8 6 1.3 6 4.1 0 1.2-1.3 2.1-3 2.1s-3-1-3-2.3" />
      </>
    ),
  },
  {
    title: "Intelligent Banking Platform",
    desc: "Real-time fraud detection (Random Forest, >95% accuracy) via a Flask REST microservice, plus a secure full-stack banking platform with 2FA and an admin behavioral-analytics dashboard. Spring Boot, Angular, Redis, JWT.",
    gradient: "p3",
    repo: "#",
    demo: "https://drive.google.com/file/d/1bllB9urEgZE-cQ8uLF4EghuAB1ZOkQpf/view?usp=sharing",
    icon: <path d="M3 21h18M4 21V10M20 21V10M2 10l10-6 10 6M6 21v-6M10 21v-6M14 21v-6M18 21v-6" />,
  },
  {
    title: "Pharmacy Management Desktop App",
    desc: "MVC-structured desktop application for managing medications, customers, and purchase transactions, backed by a normalized MySQL database. Java, JavaFX, MySQL.",
    gradient: "p4",
    repo: "#",
    demo: "#",
    icon: (
      <>
        <rect x="4" y="9" width="16" height="6" rx="3" />
        <path d="M12 9v6" />
      </>
    ),
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
