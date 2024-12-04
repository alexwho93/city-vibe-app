"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button, Typography } from "@mui/material";

function NavButton({ page }) {
  const pathname = usePathname();
  const isActive = page.href === pathname;

  return (
    <Link
      href={page.href}
      style={{ pointerEvents: isActive ? "none" : "auto" }}
    >
      <Button sx={isActive && { backgroundColor: "action.hover" }}>
        <Typography>{page.name}</Typography>
      </Button>
    </Link>
  );
}

export default NavButton;
