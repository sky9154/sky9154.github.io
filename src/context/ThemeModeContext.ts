import { createContext, useContext } from "react";
import { PaletteMode } from "@mui/material";


interface ThemeModeContextProps {
  themeMode: PaletteMode;
  setThemeMode: (mode: PaletteMode) => void;
}

export const ThemeModeContext = createContext<ThemeModeContextProps>({
  themeMode: "dark",
  setThemeMode: () => { }
});

export const useThemeModeContext = () => useContext(ThemeModeContext);