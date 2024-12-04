"use client";

import { IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useContext } from "react";
import { ColorModeContext } from "@/MuiTheme/AppTheme";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

function ToggleTheme() {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  return (
    <IconButton onClick={colorMode.toggleColorMode} color="inherit">
      {theme.palette.mode === "dark" ? (
        <Brightness7Icon />
      ) : (
        <Brightness4Icon />
      )}
    </IconButton>
  );
}

export default ToggleTheme;
