import { create } from "zustand";

interface SearchState {
  searchedUsername: string;
  searchHistory: string[];
  setSearchUsername: (username: string) => void;
}

export const useSearchStore = create<SearchState>((set, get) => ({
  searchedUsername: "",
  searchHistory: [],
  setSearchUsername: (username) => {
    const { searchHistory } = get();

    set({
      searchedUsername: username,
      searchHistory: [
        username,
        ...searchHistory.filter(
          (historyUsername) => historyUsername !== username,
        ),
      ],
    });
  },
}));
