import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider, ThemeProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import { createTheme } from "@mui/material/styles";

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
      main: "#108299",
    },
    primaryLight: {
      main: "#26A69A",
      contrastText: "#E0F7FA",
    },
    secondary: {
      main: "#80DEEA",
    },
    secondaryLight: {
      main: "#e7f8ff",
    },
    darkBlue: { main: "#023e8a" },
    error: {
      main: "#e63946",
    },

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
            color: theme.palette.darkBlue.main,
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
