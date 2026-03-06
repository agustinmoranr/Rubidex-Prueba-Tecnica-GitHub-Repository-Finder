import { useQuery } from "@tanstack/react-query";
import { useSearchStore } from "../stores/useSearchStore";
import { getRepositoriesList } from "../services/getRespositoriesList";

export function useRepositoriesQuery() {
  const searchedUsername = useSearchStore((state) => state.searchedUsername);

  return useQuery({
    queryKey: ["getRepositories", searchedUsername],
    queryFn: () => getRepositoriesList({ username: searchedUsername }),
    enabled: searchedUsername.length > 0,
  });
}

export default useRepositoriesQuery;
