import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#1976d2",
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
      lightGray: "#eee", // Define a custom color
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
            color: "rgba(255, 255, 255, 0.75)", // Change label color when focused (optional)
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "rgba(255, 255, 255, 0.18)", // Set the border color to white
            },
            "&:hover fieldset": {
              borderColor: "rgba(255, 255, 255, 0.50)", // Optional: Keep border white on hover
            },
            "&.Mui-focused fieldset": {
              borderColor: "rgba(255, 255, 255, 0.75)", // Optional: Keep border white when focused
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
          backgroundColor: "rgba(255, 255, 255, 0.1)", // Example background color
        },
      },
    },
  },
});

export default theme;
