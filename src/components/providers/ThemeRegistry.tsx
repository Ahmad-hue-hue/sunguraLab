"use client";
import * as React from "react";
import createCache from "@emotion/cache";
import { useServerInsertedHTML } from "next/navigation";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary:    { main: "#18181b" },
    secondary:  { main: "#16a34a" },
    background: { default: "#ffffff", paper: "#f5f5f7" },
    text:       { primary: "#18181b", secondary: "#71717a" },
    divider:    "#e4e4e7",
    success:    { main: "#16a34a", light: "#dcfce7", contrastText: "#fff" },
  },
  typography: {
    fontFamily: "var(--font-inter), 'Helvetica Neue', Arial, sans-serif",
    h1: { fontWeight: 800, lineHeight: 1.05, letterSpacing: "-0.03em" },
    h2: { fontWeight: 800, lineHeight: 1.1,  letterSpacing: "-0.025em" },
    h3: { fontWeight: 700, letterSpacing: "-0.015em" },
    h4: { fontWeight: 700, letterSpacing: "-0.01em" },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 },
    overline: { fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.12em" },
    button:   { textTransform: "none" as const, fontWeight: 600 },
  },
  shape: { borderRadius: 12 },
  components: {
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: {
          borderRadius: 9999,
          paddingLeft:  28,
          paddingRight: 28,
          paddingTop:   12,
          paddingBottom:12,
          fontSize:     "0.875rem",
          lineHeight:   1.2,
        },
        sizeLarge: {
          paddingLeft:  36,
          paddingRight: 36,
          paddingTop:   15,
          paddingBottom:15,
        },
      },
    },
    MuiCard: {
      defaultProps: { elevation: 0 },
      styleOverrides: {
        root: {
          border: "1px solid #e4e4e7",
          transition: "border-color 0.2s ease, transform 0.25s ease",
          "&:hover": {
            borderColor: "#a1a1aa",
            transform: "translateY(-4px)",
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: { borderRadius: 6, fontWeight: 600, fontSize: "0.7rem", letterSpacing: "0.04em" },
      },
    },
  },
});

function createEmotionCache() {
  return createCache({ key: "mui", prepend: true });
}

export function ThemeRegistry({ children }: { children: React.ReactNode }) {
  const [{ cache, flush }] = React.useState(() => {
    const c = createEmotionCache();
    const prevInsert = c.insert.bind(c);
    let inserted: string[] = [];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    c.insert = (selector: any, serialized: any, sheet: any, shouldCache: any) => {
      if (c.inserted[serialized.name] === undefined) {
        inserted.push(serialized.name);
      }
      return prevInsert(selector, serialized, sheet, shouldCache);
    };
    const flush = () => {
      const prev = inserted;
      inserted = [];
      return prev;
    };
    return { cache: c, flush };
  });

  useServerInsertedHTML(() => {
    const names = flush();
    if (!names.length) return null;
    let styles = "";
    for (const name of names) {
      styles += cache.inserted[name];
    }
    return (
      <style
        key={cache.key}
        data-emotion={`${cache.key} ${names.join(" ")}`}
        dangerouslySetInnerHTML={{ __html: styles }}
      />
    );
  });

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}
