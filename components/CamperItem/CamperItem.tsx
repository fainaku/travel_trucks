"use client";
import { Camper } from "@/lib/api/api";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box, Button, Chip, Link } from "@mui/material";
import RouterLink from "next/link";

type Props = {
  item: Camper;
};

const formatPrice = (value: number) => `€${value.toFixed(2)}`;

export default function CamperItem({ item }: Props) {
  return (
    <Card variant="outlined" sx={{ maxWidth: 888 }}>
      <Box
        sx={{
          borderRadius: "20px",
          maxWidth: 840,
          display: "flex",
          gap: 3,
          padding: 3,
        }}
      >
        <CardMedia
          component="img"
          image={item.gallery[0].thumb}
          alt={item.name}
          sx={{
            height: 320,
            width: 292,
            borderRadius: "10px",
          }}
        />

        <CardContent
          sx={{
            p: 0,
            "&:last-child": {
              pb: 0,
            },
            justifyContent: "space-between",
            flexDirection: "column",
            display: "flex",
            minWidth: 0,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 3,
            }}
          >
            <Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "8px",
                  gap: "12px",
                }}
              >
                <Typography noWrap variant="h2" component="span">
                  {item.name}
                </Typography>
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "12px" }}
                >
                  <Typography variant="h2" component="span">
                    {formatPrice(item.price)}
                  </Typography>
                  <svg width="26" height="24">
                    <use href="/icons/symbol-defs.svg#icon-Property-1Default" />
                  </svg>
                </Box>
              </Box>
              <Box sx={{ display: "flex", gap: "16px" }}>
                <Link
                  href="/"
                  component={RouterLink}
                  color="textPrimary"
                  underline="hover"
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                    }}
                  >
                    <svg width="16" height="16">
                      <use href="/icons/symbol-defs.svg#icon-Property-1PressedStar" />
                    </svg>

                    <Typography variant="body2">
                      {item.rating}
                      {item.reviews.length > 0 && (
                        <>({item.reviews.length} Reviews)</>
                      )}
                    </Typography>
                  </Box>
                </Link>
                <Box sx={{ display: "flex", gap: "4px", alignItems: "center" }}>
                  <svg width="16" height="16">
                    <use href="/icons/symbol-defs.svg#icon-map" />
                  </svg>

                  <Typography variant="body2">{item.location}</Typography>
                </Box>
              </Box>
            </Box>
            <Typography variant="body2" color="textSecondary" noWrap>
              {item.description}
            </Typography>

            <Box
              sx={{
                display: "flex",
                gap: 1,
                flexWrap: "wrap",
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
            </Box>
          </Box>
          <Box>
            <Button
              variant="contained"
              size="medium"
              component={RouterLink}
              href="/catalog"
            >
              Show more
            </Button>
          </Box>
        </CardContent>
      </Box>
    </Card>
  );
}
