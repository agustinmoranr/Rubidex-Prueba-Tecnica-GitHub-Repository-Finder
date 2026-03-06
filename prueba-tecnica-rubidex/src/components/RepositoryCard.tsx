import { ExternalLink, Star, Stars } from "lucide-react";

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
    <a
      href={html_url}
      target="_blank"
      referrerPolicy="no-referrer"
      className="group flex flex-col gap-2 border border-text/15  p-6 rounded-2xl shadow-xs text-sm hover:bg-secondary/10 hover:border-secondary"
    >
      <div className="flex justify-between">
        <span className="inline-flex items-center gap-2 text-base group-hover:text-accent">
          {name}
          <ExternalLink className="size-4 opacity-0 group-hover:opacity-100 transition-opacity ease-[ease] duration-250" />
        </span>
        <div className="flex items-center gap-2 text-text/65">
          {language && <span>{language}</span>}
          <span className="inline-flex items-center">
            <Star className="size-4 stroke-[2]" /> {stargazers_count}
          </span>
        </div>
      </div>

      {description && <span className="text-text/65"> {description}</span>}
    </a>
  );
}
