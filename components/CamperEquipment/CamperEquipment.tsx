import { Box, Chip } from "@mui/material";
import { Camper } from "@/lib/api/api";

type Props = {
  item: Camper;
  limit?: number;
};

const CamperEquipment = ({ item, limit }: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 1,
        flexWrap: "wrap",
        ...(limit
          ? {
              [`& > :nth-of-type(n+${limit + 1})`]: {
                display: "none",
              },
            }
          : {}),
        textTransform: "capitalize",
      }}
    >
      <Chip
        label={item.transmission}
        icon={
          <svg width="20" height="20">
            <use href="/icons/symbol-defs.svg#icon-diagram" />
          </svg>
        }
      />

      <Chip
        label={item.engine}
        icon={
          <svg width="20" height="20">
            <use href="/icons/symbol-defs.svg#icon-Petrol" />
          </svg>
        }
      />

      {item.kitchen && (
        <Chip
          label="Kitchen"
          icon={
            <svg width="20" height="20">
              <use href="/icons/symbol-defs.svg#icon-cup-hot" />
            </svg>
          }
        />
      )}

      {item.AC && (
        <Chip
          label="AC"
          icon={
            <svg width="20" height="20">
              <use href="/icons/symbol-defs.svg#icon-wind" />
            </svg>
          }
        />
      )}

      {item.radio && (
        <Chip
          label="Radio"
          icon={
            <svg width="20" height="20">
              <use href="/icons/symbol-defs.svg#icon-Radio" />
            </svg>
          }
        />
      )}

      {item.bathroom && (
        <Chip
          label="Bathroom"
          icon={
            <svg width="20" height="20">
              <use href="/icons/symbol-defs.svg#icon-ph_shower" />
            </svg>
          }
        />
      )}

      {item.refrigerator && (
        <Chip
          label="Refrigerator"
          icon={
            <svg width="20" height="20">
              <use href="/icons/symbol-defs.svg#icon-solar_fridge-outline" />
            </svg>
          }
        />
      )}

      {item.microwave && (
        <Chip
          label="Microwave"
          icon={
            <svg width="20" height="20">
              <use href="/icons/symbol-defs.svg#icon-microwave" />
            </svg>
          }
        />
      )}

      {item.gas && (
        <Chip
          label="Gas"
          icon={
            <svg width="20" height="20">
              <use href="/icons/symbol-defs.svg#icon-gas" />
            </svg>
          }
        />
      )}

      {item.water && (
        <Chip
          label="Water"
          icon={
            <svg width="20" height="20">
              <use href="/icons/symbol-defs.svg#icon-ion_water-outline" />
            </svg>
          }
        />
      )}
    </Box>
  );
};

export default CamperEquipment;
