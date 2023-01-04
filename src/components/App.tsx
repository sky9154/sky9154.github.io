import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { PaletteMode } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Snackbar from '@mui/material/Snackbar';
import Navbar from './Navbar';
import Content from './Content';
import Footer from './Footer';

export const title = {
  fontWeight: "700",
  fontFamily: `"Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
  letterSpacing: "normal",
  lineHeight: "1.75"
}

export const block = {
  height: "50%",
  minHeight: "50vh"
}

const App: React.FC = () => {
  const [themeMode, setThemeMode] = React.useState<'dark' | 'light'>('dark');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [open, setOpen] = useState(false);

  const themeObj = {
    themeMode,
    setThemeMode
  }

  const mobileObj = {
    mobileOpen,
    setMobileOpen
  }

  const theme = createTheme({
    typography: { fontFamily: `"Lato", "Noto Sans TC", sans-serif` },
    palette: {
      mode: themeMode as PaletteMode,
      ...(themeMode === 'dark' ? {
        background: { default: '#0A1828', paper: '#0E203F' },

      } : {
        background: { default: '#E2EBF8' },
        text: { primary: '#3C3C3C' },
      })
    }
  });

  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar themeObj={themeObj} mobileObj={mobileObj} />
      <Toolbar />
      <Content themeMode={themeMode} setOpen={setOpen} />
      <Footer themeMode={themeMode} setOpen={setOpen} />
      <Snackbar open={open} autoHideDuration={1500} onClose={handleClose} message="Copied the Discord ID !" />
    </ThemeProvider>
  );
}

export default App;