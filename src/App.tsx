import { Toaster } from "react-hot-toast";
import { useRoutes } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { LanguageProvider } from "@provider/LanguageProvider";
import { ThemeModeProvider } from "@provider/ThemeModeProvider";
import { useThemeModeContext } from "@context/ThemeModeContext";
import NotFound from "@pages/NotFound";
import routes from "@/routes";


const AppContent = () => {
  const element = useRoutes(routes) || <NotFound />;
  const { themeMode } = useThemeModeContext();

  const theme = createTheme({
    palette: {
      mode: themeMode
    },
    typography: {
      fontFamily: [
        '"Chiron GoRound TC"',
        '"M PLUS Rounded 1c"',
        '"Roboto"',
        "sans-serif"
      ].join(",")
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <Toaster />
      {element}
    </ThemeProvider>
  );
};

const App = () => (
  <LanguageProvider>
    <ThemeModeProvider>
      <AppContent />
    </ThemeModeProvider>
  </LanguageProvider>
);

export default App;