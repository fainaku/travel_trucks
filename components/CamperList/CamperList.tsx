import { Camper } from "@/lib/api/api";
import CamperItem from "../CamperItem/CamperItem";
import List from "@mui/material/List";
import { Box, Button } from "@mui/material";

type Props = {
  campers: Camper[];
};

const CamperList = ({ campers }: Props) => {
  return (
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
          gap: "32px",
          flexDirection: "column",
        }}
      >
        {campers.map((camper) => (
          <CamperItem key={camper.id} item={camper} />
        ))}
      </List>

      <Button variant="outlined" color="secondary">
        Load more
      </Button>
    </Box>
  );
};

export default CamperList;
