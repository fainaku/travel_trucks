import axios from "axios";

// const BASE_URL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";
axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

export interface CamperImage {
  thumb: string;
  original: string;
}

export interface CamperReview {
  reviewer_name: string;
  reviewer_rating: number;
  comment: string;
}

export interface Camper {
  id: string;
  name: string;
  price: number;
  rating: number;
  location: string;
  description: string;
  form: string;
  length: string;
  width: string;
  height: string;
  tank: string;
  consumption: string;
  transmission: string;
  engine: string;
  AC: boolean;
  bathroom: boolean;
  kitchen: boolean;
  TV: boolean;
  radio: boolean;
  refrigerator: boolean;
  microwave: boolean;
  gas: boolean;
  water: boolean;
  gallery: CamperImage[];
  reviews: CamperReview[];
}

export type CamperListResponse = {
  items: Camper[];
  total: number;
};

export const getCampers = async (page = 1, limit = 4) => {
  const response = await axios.get<CamperListResponse>("/campers", {
    params: { page, limit },
  });

  return response.data;
};
