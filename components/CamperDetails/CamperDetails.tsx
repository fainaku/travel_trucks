"use client";
import { Camper } from "@/lib/api/api";
import {
  Box,
  ImageList,
  ImageListItem,
  Link,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import RouterLink from "next/link";

import Image from "next/image";
import { useState } from "react";
import Features from "../Features/Features";
import CamperForm from "../CamperForm/CamperForm";
import Reviews from "../Reviews/Reviews";

interface Props {
  item: Camper;
}

const formatPrice = (value: number) => `€${value.toFixed(2)}`;

const CamperDetailsComponent = ({ item }: Props) => {
  const [tab, setTab] = useState(0);

  return (
    <Box sx={{ py: "48px" }}>
      <Box>
        <Typography noWrap variant="h2" component="span">
          {item.name}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: "16px",
          marginTop: "8px",
          marginBottom: "16px",
        }}
      >
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
              {item.reviews.length > 0 && <>({item.reviews.length} Reviews)</>}
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
      <Box sx={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <Typography variant="h2" component="span">
          {formatPrice(item.price)}
        </Typography>
      </Box>
      <Box sx={{ margin: " 28px 0 28px 0" }}>
        <ImageList
          sx={{ width: 1312, height: 312, margin: 0 }}
          gap={48}
          cols={4}
        >
          {item.gallery.map((img) => (
            <ImageListItem key={img.original}>
              <Image
                src={img.thumb}
                alt={item.name}
                fill
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                  borderRadius: "10px",
                }}
              ></Image>
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
      <Typography variant="body2" color="textSecondary" marginBottom="60px">
        {item.description}
      </Typography>

      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={tab} onChange={(e, newValue: number) => setTab(newValue)}>
          <Tab label="Features" />
          <Tab label="Reviews" />
        </Tabs>
      </Box>
      <CustomTabPanel value={tab} index={0}>
        <Box display="flex" gap="40px">
          <Features item={item} />
          <CamperForm />
        </Box>
      </CustomTabPanel>

      <CustomTabPanel value={tab} index={1}>
        <Box display="flex" gap="40px">
          <Reviews item={item} />
          <CamperForm />
        </Box>
      </CustomTabPanel>
    </Box>
  );
};

export default CamperDetailsComponent;

function CustomTabPanel({
  children,
  value,
  index,
  ...other
}: {
  children?: React.ReactNode;
  index: number;
  value: number;
}) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ pt: 5 }}>{children}</Box>}
    </div>
  );
}
