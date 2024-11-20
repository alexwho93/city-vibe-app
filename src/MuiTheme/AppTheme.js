"use client";

import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";

import React, { Children } from "react";

function AppTheme({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default AppTheme;
