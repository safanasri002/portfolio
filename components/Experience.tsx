const timeline = [
  {
    period: "Juil 2026 – Août 2026",
    role: "Stagiaire en Intelligence Artificielle",
    place: "Talan Tunisie",
    project: "Assistant RAG et plateforme d'aide à la décision pour organismes de prestations sociales",
    bullets: [
      "Conçu un assistant RAG sur des passages législatifs, combinant recherche hybride BM25/vectorielle et fusion RRF pour une génération augmentée fiable et traçable.",
      "Développé un pipeline OCR pour l'analyse automatisée de documents et la détection de fraude documentaire.",
      "Contribué à une plateforme centralisant la soumission, l'analyse et la décision sur les dossiers citoyens, réduisant le traitement manuel des demandes.",
    ],
  },
  {
    period: "Juin 2025 – Juil 2025",
    role: "Stagiaire Développement Web",
    place: "COFICAB TN Corporate",
    bullets: [
      "Développé une plateforme MDM avec base relationnelle centralisée et workflow de demandes, remplaçant un processus manuel et réduisant les délais de traitement.",
    ],
  },
];

export default function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="section-header">
        <p className="eyebrow">My journey</p>
        <h2>Experience</h2>
      </div>
      <ol className="timeline">
        {timeline.map((item) => (
          <li className="timeline-item" key={item.place}>
            <div className="timeline-dot" />
            <span className="timeline-period">{item.period}</span>
            <h3>{item.role}</h3>
            <p className="timeline-place">{item.place}</p>
            {item.project && <p className="timeline-project">{item.project}</p>}
            <ul className="timeline-bullets">
              {item.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}
