import {
  SiPython,
  SiFastapi,
  SiAngular,
  SiTypescript,
  SiDocker,
  SiKubernetes,
  SiMongodb,
  SiPostgresql,
  SiOpenjdk,
  SiGit,
} from "@icons-pack/react-simple-icons";

const interests = [
  {
    icon: "i1",
    label: "Artificial Intelligence",
    path: (
      <>
        <rect x="7" y="7" width="10" height="10" rx="1" />
        <path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" />
      </>
    ),
  },
  {
    icon: "i2",
    label: "Software Development",
    path: <path d="M8 6L2 12l6 6M16 6l6 6-6 6" />,
  },
  {
    icon: "i3",
    label: "Data Science",
    path: <path d="M4 20V11M10 20V4M16 20v-7M22 20H2" />,
  },
  {
    icon: "i4",
    label: "Cloud",
    path: <path d="M17.5 19a4.5 4.5 0 000-9 6 6 0 00-11.4 1.5A4 4 0 007 19h10.5z" />,
  },
];

const stack = [
  { name: "Python", Icon: SiPython, color: "#3776AB" },
  { name: "FastAPI", Icon: SiFastapi, color: "#009688" },
  { name: "Angular", Icon: SiAngular, color: "#0F0F11" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  { name: "Docker", Icon: SiDocker, color: "#2496ED" },
  { name: "Kubernetes", Icon: SiKubernetes, color: "#326CE5" },
  { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
  { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
  // simple-icons has no official "Java" mark (Oracle restricts the coffee-cup logo);
  // OpenJDK is the closest recognizable stand-in, relabeled here.
  { name: "Java", Icon: SiOpenjdk, color: "#000000" },
  { name: "Git", Icon: SiGit, color: "#F03C2E" },
];

export default function About() {
  return (
    <section className="about">
      <div className="card interests">
        <h2>My interests:</h2>
        <div className="interests-grid">
          {interests.map((item) => (
            <div className="interest-item" key={item.label}>
              <div className={`interest-icon ${item.icon}`}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  {item.path}
                </svg>
              </div>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="card stack">
        <h2>My stack:</h2>
        <div className="tech-icons">
          {stack.map(({ name, Icon, color }) => (
            <div
              className="tech-icon"
              key={name}
              style={{ "--icon-shadow": `${color}59` } as React.CSSProperties}
            >
              <Icon color={color} size={26} title={name} />
              <span className="tech-icon-label" aria-hidden="true">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
