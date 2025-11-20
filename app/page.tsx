"use client";

import { Button, Container, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import RouterLink from "next/link";

export default function Home() {
  return (
    <Box
      sx={{
        height: "100%",
        backgroundImage: 'url("/Campers.webp")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        py: 8,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Container sx={{ display: "flex", flexDirection: "column", gap: "40px" }}>
        <Box>
          <Typography variant="h1" gutterBottom color="secondary">
            Campers of your dreams
          </Typography>
          <Typography variant="h2" gutterBottom color="secondary">
            You can find everything you want in our catalog
          </Typography>
        </Box>
        <Box>
          <Button
            variant="contained"
            size="large"
            component={RouterLink}
            href="/catalog"
          >
            View Now
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
