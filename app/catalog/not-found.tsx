"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Box, Typography, Paper } from "@mui/material";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => router.push("/"), 3000);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f5f5f5",
        p: 2,
      }}
    >
      <Paper
        elevation={3}
        sx={{
          p: 4,
          maxWidth: 500,
          textAlign: "center",
          borderRadius: 3,
        }}
      >
        <Typography variant="h2" fontWeight="bold" gutterBottom>
          404
        </Typography>

        <Typography variant="h5" gutterBottom>
          Page Not Found
        </Typography>

        <Typography variant="body1" color="text.secondary">
          You will be redirected to the homepage in a few seconds…
        </Typography>
      </Paper>
    </Box>
  );
};

export default NotFound;
