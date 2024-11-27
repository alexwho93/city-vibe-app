import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#D4AF37", // Muted gold
      light: "#E5C76B", // Light muted gold
      dark: "#A38A28", // Dark muted gold
    },
    secondary: {
      main: "#C2B280", // Khaki (desaturated complementary to gold)
    },
    background: {
      default: "#121212", // Very dark gray, almost black
      paper: "#1E1E1E", // Dark gray
    },
    text: {
      primary: "#E0E0E0", // Off-white
      secondary: "#A0A0A0", // Medium gray
    },
    action: {
      active: "#D4AF37", // Muted gold
      hover: "rgba(212, 175, 55, 0.08)", // Transparent muted gold
    },
    customColors: {
      goldAccent: "#B8860B", // Dark goldenrod (more muted)
      darkGold: "#705E0B", // Very dark muted gold
      contrast: "#20B2AA", // Light Sea Green (teal)
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "transparent",
          boxShadow: "none",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          height: "100%",
          backgroundColor: "rgba(255, 255, 255, 0.05)",
          borderRadius: "10px",
          border: "1px solid rgba(255, 255, 255, 0.1)",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& label.Mui-focused": {
            color: "rgba(255, 255, 255, 0.75)",
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "rgba(255, 255, 255, 0.18)",
            },
            "&:hover fieldset": {
              borderColor: "rgba(255, 255, 255, 0.50)",
            },
            "&.Mui-focused fieldset": {
              borderColor: "rgba(255, 255, 255, 0.75)",
            },
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "10px",
          color: "#eee",
          "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.1)",
          },
          "&.active": {
            backgroundColor: "rgba(255, 255, 255, 0.1)",
          },
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          // Style the paper of the menu
          backgroundColor: "rgb(34, 34, 34)",
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          "&:hover": {
            borderRadius: "10px",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
          },
        },
      },
    },
  },
});

export default theme;
