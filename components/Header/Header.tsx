"use client";

import RouterLink from "next/link";
import AppBar from "@mui/material/AppBar";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { usePathname } from "next/navigation";
import { Container } from "@mui/material";

const links = [
  {
    href: "/",
    text: "Home",
  },
  {
    href: "/catalog",
    text: "Catalog",
  },
];

const Header = () => {
  const pathname = usePathname();

  return (
    <>
      <AppBar color="secondary" elevation={0}>
        <Toolbar disableGutters sx={{ minHeight: "72px" }}>
          <Container sx={{ display: "flex" }}>
            <RouterLink href="/">
              <svg id="icon-Logo" width="136" height="16">
                <use href="/icons/symbol-defs.svg#icon-Logo"></use>
              </svg>
            </RouterLink>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: "flex", gap: 4 }}>
              {links.map(({ href, text }) => (
                <Link
                  key={href}
                  component={RouterLink}
                  color={pathname === href ? "primary" : "textPrimary"}
                  href={href}
                  underline="hover"
                >
                  {text}
                </Link>
              ))}
            </Box>
            <Box sx={{ flexGrow: 1 }} />
          </Container>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
};

export default Header;
