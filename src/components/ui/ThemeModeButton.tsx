import { useState } from "react";
import { Button } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useThemeModeContext } from "@context/ThemeModeContext";


const ThemeModeButton = () => {
  const { themeMode, setThemeMode } = useThemeModeContext();
  const [themeModeButton, setThemeModeButton] = useState((themeMode === "dark") ? <Brightness4Icon /> : <Brightness7Icon />);

  const handleThemeModeToggle = () => {
    const newThemeMode = (themeMode === "dark") ? "light" : "dark";

    setThemeMode(newThemeMode);
    setThemeModeButton((newThemeMode === "dark") ? <Brightness4Icon /> : <Brightness7Icon />);

    localStorage.setItem("themeMode", newThemeMode);
  }

  return (
    <Button
      onClick={handleThemeModeToggle}
      sx={{
        color: "inherit",
        order: { xs: 1, sm: 2 },
        fontSize: "18px",
        display: { xm: "none", md: "flex" }
      }}
    >
      {themeModeButton}
    </Button>
  );
}

export default ThemeModeButton;