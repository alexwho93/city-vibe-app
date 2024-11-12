"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
  ButtonGroup,
  Stack,
} from "@mui/material";
import Search from "./Search";

const pages = [
  { name: "Home Page", href: "/homepage" },
  { name: "City Page", href: "/city/piatra-neamt" },
  { name: "Favorites", href: "/favorites" },
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Navbar() {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const pathname = usePathname();

  const NavButton = ({ page }) => {
    const isActive = page.href === pathname;

    return (
      <Link
        href={page.href}
        passHref
        style={{ pointerEvents: isActive ? "none" : "auto" }}
      >
        <Button className={isActive ? "active" : ""}>
          <Typography>{page.name}</Typography>
        </Button>
      </Link>
    );
  };

  return (
    <AppBar position="static">
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: "12px 6px",
          }}
        >
          <Image
            src="/logo.png"
            alt="Logo"
            width={100}
            height={100}
            priority={"true"}
          />
          <Box sx={{ flexGrow: "1", margin: "0 3rem" }}>
            <Search />
          </Box>

          <Stack
            direction="row"
            sx={{ alignContent: "center", alignItems: "center", gap: "10px" }}
            useFlexGap
          >
            {/* Menu section */}
            <Box sx={{ display: "flex", gap: "8px" }}>
              {pages.map((page) => (
                <NavButton key={page.name} page={page} />
              ))}
            </Box>
            {/* User account bubble */}
            <Box sx={{ placeSelf: "end" }}>
              <Tooltip title="Open settings">
                <IconButton
                  onClick={(event) => setAnchorElUser(event.currentTarget)}
                  sx={{ p: 0, borderRadius: "50%" }}
                >
                  <Avatar alt="Avatar Pictures" src="/user1.png" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={() => setAnchorElUser(null)}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={() => setAnchorElUser(null)}>
                    <Typography sx={{ textAlign: "center" }}>
                      {setting}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
