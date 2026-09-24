import {
  SiPython,
  SiOpenjdk,
  SiTypescript,
  SiAngular,
  SiFastapi,
  SiFlask,
  SiSpringboot,
  SiScikitlearn,
  SiDocker,
  SiKubernetes,
  SiGit,
  SiGithubactions,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiRedis,
} from "@icons-pack/react-simple-icons";
import type { ComponentType } from "react";

type Skill = { name: string; Icon?: ComponentType<{ color?: string; size?: number; title?: string }>; color: string };

const categories: { title: string; skills: Skill[] }[] = [
  {
    title: "Langages",
    skills: [
      { name: "Python", Icon: SiPython, color: "#3776AB" },
      { name: "Java", Icon: SiOpenjdk, color: "#5382A1" },
      { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
    ],
  },
  {
    title: "Frameworks & ML",
    skills: [
      { name: "Angular", Icon: SiAngular, color: "#DD0031" },
      { name: "FastAPI", Icon: SiFastapi, color: "#009688" },
      { name: "Flask", Icon: SiFlask, color: "#9AA3B2" },
      { name: "Spring Boot", Icon: SiSpringboot, color: "#6DB33F" },
      { name: "scikit-learn", Icon: SiScikitlearn, color: "#F7931E" },
      { name: "LangGraph", color: "#7C5CFF" },
      { name: "RAG", color: "#22D3EE" },
    ],
  },
  {
    title: "DevOps & Cloud",
    skills: [
      { name: "Docker", Icon: SiDocker, color: "#2496ED" },
      { name: "Kubernetes", Icon: SiKubernetes, color: "#326CE5" },
      { name: "Git", Icon: SiGit, color: "#F03C2E" },
      { name: "GitHub Actions", Icon: SiGithubactions, color: "#2088FF" },
      { name: "MLflow", color: "#0194E2" },
      { name: "ONNX", color: "#7C5CFF" },
    ],
  },
  {
    title: "Bases de données",
    skills: [
      { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
      { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
      { name: "MySQL", Icon: SiMysql, color: "#4479A1" },
      { name: "Redis", Icon: SiRedis, color: "#DC382D" },
      { name: "Qdrant", color: "#DC244C" },
    ],
  },
];

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="section-header">
        <p className="eyebrow">What I work with</p>
        <h2>Skills</h2>
      </div>
      <div className="skills-grid">
        {categories.map((category) => (
          <div className="skill-card glass" key={category.title}>
            <h3>{category.title}</h3>
            <div className="skill-badges">
              {category.skills.map(({ name, Icon, color }) => (
                <span
                  className="skill-badge"
                  key={name}
                  style={{ "--badge-color": color } as React.CSSProperties}
                >
                  {Icon ? <Icon color={color} size={16} title={name} /> : <span className="skill-dot" />}
                  {name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
