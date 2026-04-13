type MetricCardProps = {
  value: string;
  label: string;
};

export function MetricCard({ value, label }: MetricCardProps) {
  return (
    <article className="metric-card">
      <strong>{value}</strong>
      <p>{label}</p>
    </article>
  );
}

