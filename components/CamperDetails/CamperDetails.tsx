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

import Image from "next/image";
import { useState } from "react";
import Features from "../Features/Features";
import CamperForm from "../CamperForm/CamperForm";
import Reviews from "../Reviews/Reviews";

const formatPrice = (value: number) => `€${value.toFixed(2)}`;

export type TabValue = "features" | "reviews";

interface Props {
  item: Camper;
  openTab?: TabValue;
}

const CamperDetailsComponent = ({ item, openTab }: Props) => {
  const [tab, setTab] = useState<TabValue>(
    openTab === "features" || openTab === "reviews" ? openTab : "features"
  );

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
          component="button"
          color="textPrimary"
          underline="hover"
          onClick={() => {
            setTab("reviews");
          }}
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
                sizes="(max-width: 600px) 100vw, 25vw"
                loading="eager"
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                  borderRadius: "10px",
                }}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
      <Typography variant="body2" color="textSecondary" marginBottom="60px">
        {item.description}
      </Typography>

      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={tab}
          onChange={(e, newValue: TabValue) => setTab(newValue)}
        >
          <Tab label="Features" value="features" />
          <Tab label="Reviews" value="reviews" />
        </Tabs>
      </Box>
      <CustomTabPanel value={tab} tabId="features">
        <Box display="flex" gap="40px">
          <Features item={item} />
          <CamperForm />
        </Box>
      </CustomTabPanel>

      <CustomTabPanel value={tab} tabId="reviews">
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
  tabId,
  ...other
}: {
  children?: React.ReactNode;
  tabId: TabValue;
  value: TabValue;
}) {
  return (
    <div
      role="tabpanel"
      hidden={value !== tabId}
      id={`tabpanel-${tabId}`}
      aria-labelledby={`tab-${tabId}`}
      {...other}
    >
      {value === tabId && <Box sx={{ pt: 5 }}>{children}</Box>}
    </div>
  );
}
