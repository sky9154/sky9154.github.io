import { FC, useState } from 'react';
import Button from '@mui/material/Button';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useThemeModeContext } from '@context/ThemeModeContext';


const ThemeModeButton: FC = () => {
  const { themeMode, setThemeMode } = useThemeModeContext();
  const [themeModeButton, setThemeModeButton] = useState((themeMode === 'dark') ? <Brightness4Icon /> : <Brightness7Icon />);

  const handleThemeModeToggle = () => {
    const newThemeMode = (themeMode === 'dark') ? 'light' : 'dark';

    setThemeMode(newThemeMode);
    setThemeModeButton((newThemeMode === 'dark') ? <Brightness4Icon /> : <Brightness7Icon />);

    localStorage.setItem('themeMode', newThemeMode);
  }

  return (
    <Button
      color="inherit"
      onClick={handleThemeModeToggle}
      sx={{ order: { xs: 1, sm: 2 }, fontSize: '18px' }}
    >
      {themeModeButton}
    </Button>
  );
}

export default ThemeModeButton;