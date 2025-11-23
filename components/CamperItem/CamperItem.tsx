"use client";
import { Camper } from "@/lib/api/api";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box, Button, Link } from "@mui/material";
import RouterLink from "next/link";
import CamperEquipment from "../CamperEquipment/CamperEquipment";
import { useFavoritesStore } from "@/lib/stores/favoritesStore";
import { useEffect } from "react";

type Props = {
  item: Camper;
};

const formatPrice = (value: number) => `€${value.toFixed(2)}`;

export default function CamperItem({ item }: Props) {
  const { toggleFavorite, isFavorite, hydrate } = useFavoritesStore();

  useEffect(() => {
    hydrate();
  }, []);

  const favorite = isFavorite(item.id);
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
                  <svg
                    width="26"
                    height="24"
                    style={{ cursor: "pointer" }}
                    onClick={() => toggleFavorite(item)}
                  >
                    <use
                      href={
                        favorite
                          ? "/icons/symbol-defs.svg#icon-Property-1pressed"
                          : "/icons/symbol-defs.svg#icon-Property-1Default"
                      }
                    />
                  </svg>
                </Box>
              </Box>
              <Box sx={{ display: "flex", gap: "16px" }}>
                <Link
                  href={`/catalog/${item.id}?tab=reviews`}
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

            <CamperEquipment item={item} limit={4} />
          </Box>
          <Box>
            <Button
              variant="contained"
              size="medium"
              component={RouterLink}
              href={`/catalog/${item.id}`}
            >
              Show more
            </Button>
          </Box>
        </CardContent>
      </Box>
    </Card>
  );
}
