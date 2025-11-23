import { create } from "zustand";
import { Camper } from "@/lib/api/api";

interface FavoritesState {
  favorites: Camper[];
  toggleFavorite: (camper: Camper) => void;
  isFavorite: (id: string) => boolean;
  hydrate: () => void;
}

export const useFavoritesStore = create<FavoritesState>((set, get) => ({
  favorites: [],

  hydrate: () => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("favorites");
      if (stored) {
        set({ favorites: JSON.parse(stored) });
      }
    }
  },

  toggleFavorite: (camper) => {
    const { favorites } = get();
    const exists = favorites.some((c) => c.id === camper.id);

    const newFavorites = exists
      ? favorites.filter((c) => c.id !== camper.id)
      : [...favorites, camper];

    if (typeof window !== "undefined") {
      localStorage.setItem("favorites", JSON.stringify(newFavorites));
    }

    set({ favorites: newFavorites });
  },

  isFavorite: (id) => get().favorites.some((c) => c.id === id),
}));
