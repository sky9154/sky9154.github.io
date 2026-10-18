import { createContext, useContext } from "react";
import type { PaletteMode } from "@mui/material";


interface ThemeModeContextProps {
  themeMode: PaletteMode;
  setThemeMode: (mode: PaletteMode) => void;
}

export const ThemeModeContext = createContext<ThemeModeContextProps>({
  themeMode: "dark",
  setThemeMode: () => { }
});

export function useThemeModeContext(): ThemeModeContextProps {
  return useContext(ThemeModeContext);
}
