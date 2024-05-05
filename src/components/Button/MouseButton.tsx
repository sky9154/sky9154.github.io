import { FC } from 'react';
import Box from '@mui/material/Box';
import { DarkTheme, LightTheme } from '@assets/theme';
import { useThemeModeContext } from '@context/ThemeModeContext';



const MouseButton: FC = () => {
  const { themeMode } = useThemeModeContext();

  const scrollToAbout = () => {
    const aboutElement = document.getElementById('about');

    if (aboutElement) {
      window.scrollTo(0, aboutElement.offsetTop - 84);
    }
  }

  return (
    <Box onClick={scrollToAbout} sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'start',
      height: '100%'
    }}>
      <img
        src={(themeMode === 'dark') ? DarkTheme.MouseButton : LightTheme.MouseButton}
        alt="MouseButton"
      />
    </Box>
  );
}


export default MouseButton;