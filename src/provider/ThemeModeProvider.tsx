import { useState, useEffect, ReactElement } from "react";
import { PaletteMode } from "@mui/material";
import { ThemeModeContext } from "@context/ThemeModeContext";


export const ThemeModeProvider = ({ children }: { children: ReactElement }) => {
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
};