import { Box, Divider, Typography } from "@mui/material";
import CamperEquipment from "../CamperEquipment/CamperEquipment";
import { Camper } from "@/lib/api/api";

interface Props {
  item: Camper;
}

const Features = ({ item }: Props) => {
  const details = [
    { label: "Form", value: item.form },
    { label: "Length", value: item.length },
    { label: "Width", value: item.width },
    { label: "Height", value: item.height },
    { label: "Tank", value: item.tank },
    { label: "Consumption", value: item.consumption },
  ];
  return (
    <Box
      bgcolor="secondary.main"
      maxWidth={631}
      borderRadius="10px"
      sx={{ padding: "44px 52px" }}
      width="100%"
    >
      <CamperEquipment item={item} />
      <Box sx={{ paddingBottom: "24px", paddingTop: "24px" }}>
        <Typography variant="h3">Vehicle details</Typography>
      </Box>
      <Divider />
      <Box
        sx={{
          paddingTop: "24px",
          display: "flex",
          gap: 2,
          flexDirection: "column",
        }}
      >
        {details.map(({ label, value }) => (
          <Box
            key={label}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              fontWeight: 500,
              textTransform: "capitalize",
            }}
          >
            <Typography>{label}</Typography>
            <Typography>{value}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Features;
