import { getCampers } from "@/lib/api/api";
import CamperList from "@/components/CamperList/CamperList";
import Filter from "@/components/Filter/Filter";
import { Box, Container } from "@mui/material";

export const Catalog = async () => {
  const response = await getCampers();
  console.log("campers", response);
  return (
    <Container>
      <Box sx={{ display: "flex", gap: "64px", py: "48px" }}>
        <Box
          sx={{
            width: "100%",
          }}
        >
          <Filter />
        </Box>
        {response.items.length > 0 && <CamperList campers={response.items} />}
      </Box>
    </Container>
  );
};

export default Catalog;
