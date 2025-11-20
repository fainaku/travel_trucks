"use client";
import { create } from "zustand";
import { getCampers } from "../api/api";
import type { Camper } from "@/lib/api/api";

interface CampersState {
  campers: Camper[];
  page: number;
  limit: number;
  hasMore: boolean;
  loading: boolean;
  fetchCampers: (page?: number) => Promise<void>;
  nextPage: () => Promise<void>;
}

export const useCampersStore = create<CampersState>((set, get) => ({
  campers: [],
  page: 1,
  limit: 4,
  hasMore: false,
  loading: false,

  fetchCampers: async (page = get().page) => {
    set({ loading: true });

    const { limit } = get();

    const { items, total } = await getCampers(page, limit);

    set({
      campers: items,
      page,
      loading: false,
      hasMore: total < limit * page,
    });
  },

  nextPage: async () => {
    const newPage = get().page + 1;
    await get().fetchCampers(newPage);
  },
}));
