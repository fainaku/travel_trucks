"use client";

import CamperItem from "../CamperItem/CamperItem";
import List from "@mui/material/List";
import { Box, Button, CircularProgress, Typography } from "@mui/material";
import { useCampersStore } from "@/lib/stores/campersStore";

const CamperList = () => {
  const { campers, total, loadMore, loading, hydrated } = useCampersStore();

  if (!hydrated) return null;

  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      {!loading && campers.length === 0 && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h6"
            component="span"
            color="textSecondary"
            sx={{ mt: 4 }}
          >
            No campers found by these filters
          </Typography>
        </Box>
      )}

      {campers.length > 0 && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 6,
          }}
        >
          <List
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 4,
            }}
          >
            {campers.map((camper) => (
              <CamperItem key={camper.id} item={camper} />
            ))}
          </List>

          {campers.length < total && (
            <Button variant="outlined" color="secondary" onClick={loadMore}>
              Load more
            </Button>
          )}
        </Box>
      )}

      {loading && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <CircularProgress size="100px" enableTrackSlot />
        </Box>
      )}
    </Box>
  );
};

export default CamperList;
