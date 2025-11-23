import { create } from "zustand";
import { Camper, CamperFilters, getCampers } from "@/lib/api/api";

export interface CampersState {
  campers: Camper[];
  total: number;
  page: number;
  limit: number;
  filters: CamperFilters;
  loading: boolean;
  hydrated: boolean;

  loadInitial: () => Promise<void>;
  loadMore: () => Promise<void>;
  setFilters: (filters: CamperFilters) => void;
}

export const useCampersStore = create<CampersState>((set, get) => ({
  campers: [],
  total: 0,
  page: 1,
  limit: 4,
  filters: {},
  loading: false,
  hydrated: false,

  loadInitial: async () => {
    const { limit, filters } = get();
    set({ campers: [], page: 1, loading: true });

    try {
      const data = await getCampers({
        page: 1,
        limit,
        ...filters,
      });

      set({
        campers: data.items,
        total: data.total,
        page: 1,
        loading: false,
      });
    } catch (error) {
      console.error(error);
    }
  },

  loadMore: async () => {
    const { page, limit, filters, campers } = get();
    const nextPage = page + 1;
    set({ loading: true });

    const data = await getCampers({
      page: nextPage,
      limit,
      ...filters,
    });

    set({
      campers: [...campers, ...data.items],
      page: nextPage,
      loading: false,
    });
  },

  setFilters: (newFilters: CamperFilters) => {
    const { filters } = get();
    set({ filters: { ...filters, ...newFilters } });
  },
}));
