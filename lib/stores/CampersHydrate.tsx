"use client";

import { useRef, FC } from "react";
import { useCampersStore, CampersState } from "./campersStore";

interface HydrateProps {
  state: Partial<CampersState>;
}

const CampersHydrate: FC<HydrateProps> = ({ state }) => {
  useHydrateStore(state);
  return null;
};

export default CampersHydrate;

function useHydrateStore(initialState: Partial<CampersState>) {
  const initialized = useRef<boolean>(false);

  if (!initialized.current && initialState) {
    useCampersStore.setState(
      { ...useCampersStore.getState(), ...initialState, hydrated: true },
      true
    );
    initialized.current = true;
  }

  return useCampersStore;
}
