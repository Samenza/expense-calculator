import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider, ThemeProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  direction: "rtl",
  typography: {
    fontFamily: "IRANSans",
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
