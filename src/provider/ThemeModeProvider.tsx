import { useState, useEffect, type ReactElement } from "react";
import type { PaletteMode } from "@mui/material";

import { ThemeModeContext } from "@context/ThemeModeContext";


interface ThemeModeProviderProps {
  children: ReactElement;
}

export function ThemeModeProvider({ children }: ThemeModeProviderProps) {
  const [themeMode, setThemeMode] = useState<PaletteMode>(
    (localStorage.getItem("themeMode") as PaletteMode) || "dark"
  );

  useEffect(() => {
    localStorage.setItem("themeMode", themeMode);
    document.documentElement.setAttribute("data-theme", themeMode);
  }, [themeMode]);

  return (
    <ThemeModeContext.Provider value={{ themeMode, setThemeMode }}>
      {children}
    </ThemeModeContext.Provider>
  );
}
