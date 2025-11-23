"use client";

import type {} from "@mui/x-date-pickers/themeAugmentation";
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
    h3: {
      fontWeight: 600,
      fontSize: "1.25rem",
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
          mixBlendMode: "multiply",
        }),
      },
    },
    MuiTabs: {
      styleOverrides: {
        list: {
          gap: "40px",
        },
        indicator: {
          height: "5px",
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: ({ theme }) => ({
          padding: "0 0 24px 0",
          textTransform: "capitalize",
          color: theme.palette.text.primary,
          ...theme.typography.h3,
          "&.Mui-selected": {
            color: theme.palette.text.primary,
          },
        }),
        selected: ({ theme }) => ({
          color: theme.palette.text.primary,
        }),
      },
    },
    MuiInput: {
      defaultProps: {
        disableUnderline: true,
      },
    },
    MuiTextField: {
      defaultProps: {
        autoComplete: "off",
        variant: "filled",
        slotProps: {
          input: {
            disableUnderline: true,
          },
        },
      },
      styleOverrides: {
        root: ({ theme }) => ({
          "& .MuiInputBase-root": {
            backgroundColor: theme.palette.secondary.main,
            borderRadius: 12,
          },
        }),
      },
    },
    MuiPopper: {
      styleOverrides: {
        root: ({ theme }) => ({
          "& .MuiPaper-root": {
            boxShadow: "none",
            border: `1px solid ${theme.palette.text.secondary}`,
            borderRadius: "12px",
          },
        }),
      },
    },
    MuiDatePicker: {
      defaultProps: {
        dayOfWeekFormatter: (weekday) => weekday.format("ddd").toUpperCase(),
        slotProps: {
          textField: {
            variant: "filled",
            fullWidth: true,
            slotProps: {
              input: {
                disableUnderline: true,
                sx: {
                  backgroundColor: "#F7F7F7",
                  borderRadius: "12px",
                },
              },
            },
          },
        },
      },
    },
    MuiPickersArrowSwitcher: {
      styleOverrides: {
        root: {
          width: "100%",
          padding: "0 12px",
        },
        spacer: {
          width: "auto",
          flexGrow: 1,
        },
      },
    },
    MuiPickersCalendarHeader: {
      styleOverrides: {
        root: {
          position: "relative",
          paddingLeft: 0,
          paddingRight: 0,
        },
        labelContainer: {
          position: "absolute",
          width: "100%",
          justifyContent: "center",
        },
        switchViewButton: {
          display: "none",
        },
      },
    },
    MuiDayCalendar: {
      styleOverrides: {
        header: ({ theme }) => ({
          borderBottom: `1px solid ${theme.palette.text.secondary}`,
        }),
        weekDayLabel: {
          fontSize: "0.875rem",
          fontWeight: 600,
        },
        monthContainer: {
          padding: "18px 0",
        },
      },
    },
    MuiPickersDay: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: "32px",
          minWidth: "36px",
          height: "32px",
          fontSize: "0.875rem",
          "&:focus": {
            backgroundColor: "transparent",
          },
          "&:hover": {
            backgroundColor: theme.palette.secondary.main,
          },
          "&.Mui-selected": {
            backgroundColor: theme.palette.text.secondary,
            color: theme.palette.secondary.light,
            "&:hover": {
              backgroundColor: theme.palette.text.secondary,
            },
          },
          "&.Mui-selected:focus": {
            backgroundColor: theme.palette.text.secondary,
            color: theme.palette.secondary.light,
          },
        }),
      },
    },
  },
});
