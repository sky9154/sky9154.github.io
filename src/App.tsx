import { useMemo } from "react";
import { Toaster } from "react-hot-toast";
import { useRoutes } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import { LanguageProvider } from "@provider/LanguageProvider";
import { ThemeModeProvider } from "@provider/ThemeModeProvider";
import { useThemeModeContext } from "@context/ThemeModeContext";
import NotFound from "@pages/NotFound";
import routes from "@/routes";


function AppContent() {
  const element = useRoutes(routes) || <NotFound />;
  const { themeMode } = useThemeModeContext();

  const theme = useMemo(() => createTheme({
    palette: {
      mode: themeMode
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            minHeight: 44, borderRadius: "var(--radius-sm)", textTransform: "none",
            transition: "background-color var(--motion-fast) var(--ease-standard), color var(--motion-fast) var(--ease-standard), border-color var(--motion-fast) var(--ease-standard)",
            "&:focus-visible": { outline: "2px solid var(--color-accent)", outlineOffset: 4 },
            "&.Mui-disabled": { color: "var(--text-sub)", opacity: 0.45 }
          }
        }
      },
      MuiIconButton: {
        styleOverrides: {
          root: {
            minWidth: 44, minHeight: 44,
            "&:focus-visible": { outline: "2px solid var(--color-accent)", outlineOffset: 4 }
          }
        }
      },
      MuiPaper: { styleOverrides: { root: { backgroundImage: "none" } } },
      MuiMenuItem: { styleOverrides: { root: { minHeight: 44, "&.Mui-focusVisible": { outline: "2px solid var(--color-accent)", outlineOffset: -3 } } } },
      MuiSkeleton: { styleOverrides: { root: { backgroundColor: "var(--color-border-subtle)" } } },
      MuiCircularProgress: { styleOverrides: { root: { color: "var(--color-accent)" } } },
      MuiChip: { styleOverrides: { root: { borderRadius: "var(--radius-sm)" } } }
    },
    typography: {
      fontFamily: [
        '"Chiron GoRound TC"',
        '"M PLUS Rounded 1c"',
        '"Roboto"',
        "sans-serif"
      ].join(",")
    }
  }), [themeMode]);

  return (
    <ThemeProvider theme={theme}>
      <Toaster toastOptions={{ style: { background: "var(--color-bg-elevated)", color: "var(--text-main)", border: "1px solid var(--color-border)", boxShadow: "var(--shadow-floating)" } }} />
      {element}
    </ThemeProvider>
  );
}

function App() {
  return (
    <LanguageProvider>
      <ThemeModeProvider>
        <AppContent />
      </ThemeModeProvider>
    </LanguageProvider>
  );
}

export default App;