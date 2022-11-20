import React from 'react';
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

type Theme = {
  themeObj: {
    themeMode: string;
    setThemeMode: (mode: 'dark' | 'light') => void;
  }
}

const ThemeBtn: React.FC<Theme> = ({ themeObj }) => {
  const [themeBtn, setThemeBtn] = React.useState(<Brightness4Icon />);
  const { themeMode, setThemeMode } = themeObj;

  const toggleColorMode = () => {
    setThemeMode(themeMode === 'dark' ? 'light' : 'dark');
    setThemeBtn(themeMode === 'dark' ? <Brightness4Icon /> : <Brightness7Icon />);
  }

  return (
    <IconButton aria-label="themeBtn" color="inherit" onClick={toggleColorMode}>
      {themeBtn}
    </IconButton>
  );
}

export default ThemeBtn;