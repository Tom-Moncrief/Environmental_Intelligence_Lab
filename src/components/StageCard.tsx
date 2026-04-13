type StageCardProps = {
  step: string;
  title: string;
  summary: string;
  details: string;
  bullets: readonly string[];
};

export function StageCard({ step, title, summary, details, bullets }: StageCardProps) {
  return (
    <article className="stage-card">
      <div className="stage-card__topline">
        <span>{step}</span>
        <span className="stage-card__glow" />
      </div>
      <h3>{title}</h3>
      <p className="stage-card__summary">{summary}</p>
      <p className="stage-card__details">{details}</p>
      <ul className="stage-card__bullets">
        {bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
    </article>
  );
}

