type Project = {
  title: string;
  desc: string;
  repo: string;
  demo: string;
  tags: string[];
  icon: React.ReactNode;
};

// TODO: fill in real repo / demo URLs when ready — that's the only thing left here.
const projects: Project[] = [
  {
    title: "CardioAgent-Ops",
    desc: "Multi-agent decision-support system for cardio-acoustic diagnosis, combining Decision Tree, SVM, CNN, ResNet, Transformer, and a QLoRA-tuned LLM. LangGraph + RAG on Qdrant, served via FastAPI, tracked with MLflow.",
    repo: "#",
    demo: "#",
    tags: ["Python", "LangGraph", "RAG", "Qdrant", "FastAPI", "Docker"],
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
    repo: "#",
    demo: "#",
    tags: ["Python", "Llama 3.1", "RAG", "FastAPI", "PostgreSQL"],
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
    repo: "#",
    demo: "https://drive.google.com/file/d/1bllB9urEgZE-cQ8uLF4EghuAB1ZOkQpf/view?usp=sharing",
    tags: ["Spring Boot", "Angular", "Flask", "Random Forest", "Redis", "JWT"],
    icon: <path d="M3 21h18M4 21V10M20 21V10M2 10l10-6 10 6M6 21v-6M10 21v-6M14 21v-6M18 21v-6" />,
  },
  {
    title: "Pharmacy Management Desktop App",
    desc: "MVC-structured desktop application for managing medications, customers, and purchase transactions, backed by a normalized MySQL database. Java, JavaFX, MySQL.",
    repo: "#",
    demo: "#",
    tags: ["Java", "JavaFX", "MySQL"],
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
      <div className="section-header">
        <p className="eyebrow">Selected work</p>
        <h2>Projects</h2>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card glass" key={project.title}>
            <div className="project-top">
              <div className="project-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  {project.icon}
                </svg>
              </div>
              <h3>{project.title}</h3>
            </div>
            <p className="desc">{project.desc}</p>
            <div className="project-tags">
              {project.tags.map((tag) => (
                <span className="project-tag" key={tag}>{tag}</span>
              ))}
            </div>
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
