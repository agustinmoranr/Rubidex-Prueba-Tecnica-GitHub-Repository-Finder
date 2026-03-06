import { RepositoryCard } from "../components/RepositoryCard";
import { RepositoryList } from "../components/RepositoryList";
import useRepositoriesQuery from "../hooks/useRepositoriesQuery";
import { useSearchStore } from "../stores/useSearchStore";

export function SearchRepositoriesPage() {
  const repositoriesResponse = useRepositoriesQuery();
  const searchedUsername = useSearchStore((s) => s.searchedUsername);
  const repositories = repositoriesResponse.data ?? [];

  if (!searchedUsername) return "Busca un usuario para ver sus repositorios";
  if (repositoriesResponse.isPending) return "Obteniendo repositorios...";
  if (repositoriesResponse.isError)
    return `Lo sentimos ocurrió un error: ${repositoriesResponse.error.message}`;
  if (!repositories.length)
    return `No se encontraron repositorios asociados al username: ${searchedUsername}`;

  return (
    <div className="flex-1 p-8">
      <RepositoryList>
        {repositories.map((repository) => {
          return (
            <RepositoryCard
              key={repository.id}
              name={repository.name}
              html_url={repository.html_url}
              description={repository.description}
              language={repository.language}
              stargazers_count={repository.stargazers_count}
            />
          );
        })}
      </RepositoryList>
    </div>
  );
}

export default SearchRepositoriesPage;
