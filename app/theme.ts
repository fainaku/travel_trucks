"use client";

import { Inter } from "next/font/google";
import { createTheme } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export const theme = createTheme({
  typography: {
    fontFamily: inter.style.fontFamily,
    h1: {
      fontSize: "3rem",
      fontWeight: 600,
    },
    h2: {
      fontSize: "1.5rem",
      fontWeight: 600,
    },
    body2: {
      fontSize: "1rem",
      fontWeight: 400,
    },
  },
  shape: {
    borderRadius: 12,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1440,
      xl: 1536,
    },
  },
  palette: {
    primary: {
      main: "#E44848",
      dark: "#D84343",
      // light: will be calculated from palette.primary.main,
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      main: "#F7F7F7",
      light: "#FFFFFF",
      dark: "#F2F4F7",
      contrastText: "#DADDE1",
    },
    text: {
      primary: "#101828",
      secondary: "#475467",
      disabled: "#6C717B",
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: "200px",
        },
        sizeLarge: {
          padding: "16px 48px",
          lineHeight: 1.5,
          fontSize: "1rem",
        },
        sizeMedium: {
          padding: "16px 40px",
          lineHeight: "1.5",
          fontSize: "1rem",
          fontWeight: "500",
        },
        outlinedSecondary: ({ theme }) => ({
          color: theme.palette.text.primary,
          borderColor: theme.palette.secondary.contrastText,
        }),
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: ({ theme }) => ({
          [theme.breakpoints.up("sm")]: {
            minHeight: "72px",
          },
        }),
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: ({ theme }) => ({
          [theme.breakpoints.up("sm")]: {
            paddingLeft: theme.spacing(8),
            paddingRight: theme.spacing(8),
          },
        }),
      },
    },
    MuiChip: {
      styleOverrides: {
        root: ({ theme }) => ({
          padding: "14px 18px",
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
          fontSize: "1rem",
          fontWeight: 500,
          height: "48px",
          borderRadius: "100px",
        }),
      },
    },
  },
});
