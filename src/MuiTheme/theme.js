import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: "rgb(255, 0, 89)",
    },
    secondary: {
      main: "rgb(220, 0, 78)",
    },
    background: {
      default: "#fff",
      paper: "#fff",
    },
    text: {
      primary: "#fff",
      secondary: "#eee",
      disabled: "rgba(255, 255, 255, 0.5)",
    },
    customColors: {
      lightGray: "#eee",
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
