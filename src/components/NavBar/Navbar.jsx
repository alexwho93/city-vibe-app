import Link from "next/link";
import Image from "next/image";
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
  Stack,
} from "@mui/material";
import Search from "./Search";
import NavButton from "./NavButton";
import AuthButton from "./AuthButton";
import ToggleTheme from "./ToggleTheme";

const pages = [
  { name: "Home Page", href: "/" },
  { name: "Favorites", href: "/favorites" },
];

async function Navbar() {
  return (
    <AppBar
      position="static"
      sx={{ zIndex: "99", background: "transparent", boxShadow: "none" }}
    >
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{
            padding: "12px 0",
          }}
        >
          <Link href="/">
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <Image
                src="/logo.png"
                alt="Logo"
                width={90}
                height={50}
                priority={"true"}
                style={{ objectFit: "contain" }}
              />
            </Box>
          </Link>
          <Box sx={{ flexGrow: "1", margin: { xs: "0", sm: "0 3rem" } }}>
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
            {/* Theme toggle button */}
            <ToggleTheme />
            {/* Login/Logout button */}
            <AuthButton />
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
