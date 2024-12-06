import { createTheme, ThemeOptions, Theme, alpha } from "@mui/material/styles";

export const blue = {
  50: "#F0F7FF",
  100: "#C2E0FF",
  200: "#99CCF3",
  300: "#66B2FF",
  400: "#3399FF",
  main: "#007FFF",
  500: "#007FFF",
  600: "#0072E5",
  700: "#0059B2",
  800: "#004C99",
  900: "#003A75",
};

export const blueDark = {
  50: "#E2EDF8",
  100: "#CEE0F3",
  200: "#91B9E3",
  300: "#5090D3",
  main: "#5090D3",
  400: "#265D97",
  500: "#1E4976",
  600: "#173A5E",
  700: "#132F4C",
  800: "#001E3C",
  900: "#0A1929",
};

const grey = {
  50: "#F3F6F9",
  100: "#E7EBF0",
  200: "#E0E3E7",
  300: "#CDD2D7",
  400: "#B2BAC2",
  500: "#A0AAB4",
  600: "#6F7E8C",
  700: "#3E5060",
  800: "#2D3843",
  900: "#1A2027",
};

const systemFont = [
  "-apple-system",
  "BlinkMacSystemFont",
  '"Segoe UI"',
  "Roboto",
  '"Helvetica Neue"',
  "Arial",
  "sans-serif",
  '"Apple Color Emoji"',
  '"Segoe UI Emoji"',
  '"Segoe UI Symbol"',
];

export const getMetaThemeColor = (mode) => {
  const themeColor = {
    light: grey[50],
    dark: blueDark[800],
  };
  return themeColor[mode];
};

export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    primary: {
      ...blue,
      ...(mode === "light" && {
        main: blue[600],
      }),
      ...(mode === "dark" && {
        main: blue[400],
      }),
    },
    secondary: {
      ...grey,
      ...(mode === "light" && {
        main: grey[700],
      }),
      ...(mode === "dark" && {
        main: grey[500],
      }),
    },
    background: {
      ...(mode === "light" && {
        default: grey[50],
        paper: grey[100],
      }),
      ...(mode === "dark" && {
        default: blueDark[800],
        paper: blueDark[900],
      }),
    },
    text: {
      ...(mode === "light" && {
        primary: grey[900],
        secondary: grey[700],
      }),
      ...(mode === "dark" && {
        primary: "#fff",
        secondary: grey[400],
      }),
    },
    divider: mode === "dark" ? alpha(grey[100], 0.08) : grey[200],
    primaryDark: blueDark,
  },
  typography: {
    fontFamily: [...systemFont].join(","),
    fontFamilyCode: "Consolas,Menlo,Monaco,Andale Mono,Ubuntu Mono,monospace",
    fontWeightSemiBold: 600,
    fontWeightExtraBold: 800,
    h1: {
      fontWeight: 800,
      letterSpacing: -1.5,
    },
    // ... (keep other typography settings)
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
        root: ({ theme }) => ({
          height: "100%",
          backgroundColor: alpha(
            theme.palette.grey[100],
            mode === "dark" ? 0.05 : 0.1
          ),
          borderRadius: "10px",
          border: `1px solid ${alpha(
            theme.palette.grey[100],
            mode === "dark" ? 0.1 : 0.2
          )}`,
        }),
      },
    },
    // ... (keep other component overrides, adjusting for light/dark mode as needed)
  },
});

const lightTheme = createTheme(getDesignTokens("light"));
const darkTheme = createTheme(getDesignTokens("dark"));

export { lightTheme, darkTheme };
