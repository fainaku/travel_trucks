import { getCampers } from "@/lib/api/api";
import CamperList from "@/components/CamperList/CamperList";
import CamperListFilters from "@/components/CamperListFilters/CamperListFilters";
import { Box, Container } from "@mui/material";
import CampersHydrate from "@/lib/stores/CampersHydrate";

export const Catalog = async () => {
  const response = await getCampers();

  return (
    <Container>
      <CampersHydrate
        state={{
          campers: response.items,
          total: response.total,
          page: 1,
          filters: {},
        }}
      />

      <Box sx={{ display: "flex", gap: "64px", py: "48px" }}>
        <CamperListFilters />
        <CamperList />
      </Box>
    </Container>
  );
};

export default Catalog;
