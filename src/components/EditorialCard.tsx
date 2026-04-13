type EditorialCardProps = {
  title: string;
  body: string;
};

export function EditorialCard({ title, body }: EditorialCardProps) {
  return (
    <article className="editorial-card">
      <h3>{title}</h3>
      <p>{body}</p>
    </article>
  );
}

