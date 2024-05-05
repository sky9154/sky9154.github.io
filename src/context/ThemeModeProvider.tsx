import { ReactElement, createContext, useState } from 'react';
import { PaletteMode } from '@mui/material';


interface ThemeModeContextProps {
  themeMode: PaletteMode;
  setThemeMode: (user: PaletteMode) => void;
}

interface Props {
  children: ReactElement;
}

export const ThemeModeContext = createContext<ThemeModeContextProps>({
  themeMode: 'dark',
  setThemeMode: () => { }
});

export const ThemeModeProvider = ({ children }: Props) => {
  const [themeMode, setThemeMode] = useState<PaletteMode>(localStorage.getItem('themeMode') as PaletteMode || 'dark');

  return (
    <ThemeModeContext.Provider value={{
      themeMode: themeMode,
      setThemeMode: setThemeMode
    }}>
      {children}
    </ThemeModeContext.Provider>
  );
}