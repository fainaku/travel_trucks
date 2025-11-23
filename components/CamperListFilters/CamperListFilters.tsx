"use client";

import { useCampersStore } from "@/lib/stores/campersStore";
import {
  Box,
  Button,
  ButtonBase,
  ButtonBaseProps,
  Divider,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";

const CamperListFilters = () => {
  const { filters, setFilters, loadInitial } = useCampersStore();

  return (
    <Box
      display="flex"
      flexDirection="column"
      gap="40px"
      maxWidth="360px"
      width="100%"
    >
      <Box>
        <Typography marginBottom="8px" variant="body2" color="textSecondary">
          Location
        </Typography>
        <TextField
          placeholder="City"
          hiddenLabel
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <svg width="20" height="20">
                    <use href="/icons/symbol-defs.svg#icon-map" />
                  </svg>
                </InputAdornment>
              ),
            },
          }}
          value={filters.location ?? ""}
          onChange={(event) => setFilters({ location: event.target.value })}
          fullWidth
        />
      </Box>
      <Box>
        <Box>
          <Typography marginBottom="32px" variant="body2" color="textSecondary">
            Filters
          </Typography>
          <Typography marginBottom="24px" variant="h3">
            Vehicle equipment
          </Typography>
          <Divider sx={{ marginBottom: "24px" }} />
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: 1.5,
            justifyContent: "stretch",
            flexWrap: "wrap",
          }}
        >
          <FilterButton
            checked={filters.AC}
            icon="icon-wind"
            onClick={() => setFilters({ AC: filters.AC ? undefined : true })}
          >
            AC
          </FilterButton>

          <FilterButton
            checked={!!filters.transmission}
            icon="icon-diagram"
            onClick={() =>
              setFilters({
                transmission: filters.transmission ? undefined : "automatic",
              })
            }
          >
            Automatic
          </FilterButton>

          <FilterButton
            checked={filters.kitchen}
            icon="icon-cup-hot"
            onClick={() =>
              setFilters({ kitchen: filters.kitchen ? undefined : true })
            }
          >
            Kitchen
          </FilterButton>

          <FilterButton
            checked={filters.TV}
            icon="icon-TV"
            onClick={() => setFilters({ TV: filters.TV ? undefined : true })}
          >
            TV
          </FilterButton>

          <FilterButton
            checked={filters.bathroom}
            icon="icon-ph_shower"
            onClick={() =>
              setFilters({
                bathroom: filters.bathroom ? undefined : true,
              })
            }
          >
            Bathroom
          </FilterButton>
        </Box>
        <Box marginTop={4}>
          <Typography marginBottom="24px" variant="h3">
            Vehicle type
          </Typography>
          <Divider sx={{ marginBottom: "24px" }} />
          <Box
            sx={{
              display: "flex",
              gap: 1.5,
              justifyContent: "stretch",
              flexWrap: "wrap",
            }}
          >
            <FilterButton
              checked={filters.form === "panelTruck"}
              icon="icon-bi_grid-1x2"
              onClick={() =>
                setFilters({
                  form:
                    filters.form === "panelTruck" ? undefined : "panelTruck",
                })
              }
            >
              Van
            </FilterButton>
            <FilterButton
              checked={filters.form === "fullyIntegrated"}
              icon="icon-bi_grid"
              onClick={() =>
                setFilters({
                  form:
                    filters.form === "fullyIntegrated"
                      ? undefined
                      : "fullyIntegrated",
                })
              }
            >
              Fully Integrated
            </FilterButton>
            <FilterButton
              checked={filters.form === "alcove"}
              icon="icon-bi_grid-3x3-gap"
              onClick={() =>
                setFilters({
                  form: filters.form === "alcove" ? undefined : "alcove",
                })
              }
            >
              Alcove
            </FilterButton>
          </Box>
        </Box>
      </Box>

      <Box>
        <Button
          sx={{ minWidth: "166px", marginTop: "16px" }}
          variant="contained"
          size="medium"
          onClick={loadInitial}
        >
          Search
        </Button>
      </Box>
    </Box>
  );
};

export default CamperListFilters;

function FilterButton({
  icon,
  checked,
  children,
  ...props
}: { icon?: string; checked?: boolean } & ButtonBaseProps) {
  return (
    <ButtonBase
      {...props}
      sx={(theme) => ({
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        gap: 1,
        borderRadius: "12px",
        width: "112px",
        height: "96px",
        padding: 3,
        border: `1px solid ${
          checked ? theme.palette.primary.main : theme.palette.divider
        }`,
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
      })}
    >
      <Box>
        <svg width="32" height="32">
          <use href={`/icons/symbol-defs.svg#${icon}`} />
        </svg>
      </Box>
      <Typography lineHeight={1.2}>{children}</Typography>
    </ButtonBase>
  );
}
