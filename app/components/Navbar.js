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
} from "@mui/material";

const pages = [
  { name: "Home Page", href: "/homepage" },
  { name: "City Page", href: "/city" },
  { name: "Favorites", href: "/favorites" },
  { name: "Search", href: "/search" },
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
        <Button
          sx={{
            color: "white",
            "&.active": {
              backgroundColor: "primary.light",
              color: "white",
              "&.Mui-disabled": {
                backgroundColor: "primary.light",
                color: "rgba(255, 255, 255, 0.75)",
              },
            },
            "&:hover": {
              backgroundColor: "primary.light",
              color: "white",
            },
          }}
          className={isActive ? "active Mui-disabled" : ""}
          disabled={isActive}
        >
          <Typography>{page.name}</Typography>
        </Button>
      </Link>
    );
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Image src="/logo.png" alt="Logo" width={80} height={80} />

          {/* Menu section */}
          <ButtonGroup variant="text">
            {pages.map((page) => (
              <NavButton key={page.name} page={page} />
            ))}
          </ButtonGroup>

          {/* User account bubble */}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton
                onClick={(event) => setAnchorElUser(event.currentTarget)}
                sx={{ p: 0 }}
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
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
