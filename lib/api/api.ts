import axios from "axios";

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
  form: "fullyIntegrated" | "alcove" | "panelTruck";
  length: string;
  width: string;
  height: string;
  tank: string;
  consumption: string;
  transmission: "manual" | "automatic";
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

export type CamperFilters = Partial<
  Pick<
    Camper,
    "location" | "form" | "TV" | "AC" | "bathroom" | "kitchen" | "transmission"
  >
>;

export type CamperListResponse = {
  items: Camper[];
  total: number;
};

export const getCampers = async (
  params: {
    page?: number;
    limit?: number;
  } & CamperFilters = {
    page: 1,
    limit: 4,
  }
): Promise<CamperListResponse> => {
  try {
    const { data } = await axios.get<CamperListResponse>("/campers", {
      params,
    });
    return data;
  } catch {
    return {
      items: [],
      total: 0,
    };
  }
};

export const getSingleCamper = async (id: string) => {
  const response = await axios.get<Camper>(`/campers/${id}`);
  return response.data;
};
