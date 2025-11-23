import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";

import { Box, CssBaseline } from "@mui/material";
import Providers from "@/components/Providers/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Travel Trucks",
  description: "A platform to explore and rent travel trucks or campers.",
  icons: "/14493423001640104315.svg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              flexGrow: 1,
              height: "100%",
            }}
          >
            <CssBaseline />
            <Header />
            {children}
          </Box>
        </Providers>
      </body>
    </html>
  );
}
