import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider, ThemeProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import { createTheme } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";

let theme = createTheme({
  direction: "rtl",
  typography: {
    fontFamily: "IRANSans",
    h5: {
      fontSize: "1.3rem",
    },
    h6: {
      fontSize: "1rem",
    },
    body1: {
      fontSize: "0.9rem",
    },
  },
  palette: {
    primary: {
      main: "#74c69d",
    },
    primaryLight: {
      main: "#6DC2C5",
      contrastText: "#E0F7FA",
    },
    secondary: {
      main: "#8e8e8e",
      dark: "#265077",
      contrastText: "#fff",
    },
    secondaryLight: {
      main: "#f2f2f2",
      contrastText: "#fff",
    },

    darkBlue: { main: "#1D3557" },
    lightBlue: { main: "#457B9D" },
    greenLight: { main: "#4f9480" },
    error: {
      main: "#E63946",
    },
    pink: { main: "#E26565" },

    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});
theme = createTheme(theme, {
  components: {
    MuiBottomNavigationAction: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            // color: theme.palette.darkBlue.main,
            color: "#fff",
          },
          color: "#fff",
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: "in",
          },
        },
      },
    },
  },
});
// Create rtl cache
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

export function GlobalStyleConfig(props) {
  return (
    <ThemeProvider theme={theme}>
      <CacheProvider value={cacheRtl}>{props.children}</CacheProvider>
    </ThemeProvider>
  );
}
