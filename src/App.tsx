import { FC } from 'react';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { ThemeModeProvider } from '@context/ThemeModeProvider';
import { useThemeModeContext } from '@context/ThemeModeContext';
import DashboardNavbar from '@components/Layouts/DashboardNavbar';
import Home from '@pages/Home';


const App: FC = () => {
  const { themeMode } = useThemeModeContext();

  const theme = createTheme({
    palette: {
      mode: themeMode
    }
  });

  return (
    <ThemeModeProvider>
      <ThemeProvider theme={theme}>
        <Toaster />
        <DashboardNavbar>
          <Home />
        </DashboardNavbar>
      </ThemeProvider>
    </ThemeModeProvider>
  );
}

export default App;