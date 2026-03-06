export type RepositoryCardProps = {
  name: string;
  html_url: string;
  description: string;
  language: string;
  stargazers_count: string;
};

export function RepositoryCard({
  name,
  html_url,
  description,
  language,
  stargazers_count,
}: RepositoryCardProps) {
  return (
    <div className="flex flex-col gap-2 border p-6 rounded-2xl">
      <a href={html_url}>{name}</a>
      <span>Descripción: {description}</span>
      <span>Lenguaje principal del proyecto: {language}</span>
      <span>Estrellas: {stargazers_count}</span>
    </div>
  );
}
