import { Button } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

import { useThemeModeContext } from "@context/ThemeModeContext";


function ThemeModeButton() {
  const { themeMode, setThemeMode } = useThemeModeContext();

  const handleThemeModeToggle = () => {
    const newThemeMode = (themeMode === "dark") ? "light" : "dark";

    setThemeMode(newThemeMode);
  };

  return (
    <Button aria-label="Toggle color theme" onClick={handleThemeModeToggle} sx={{
      color: "inherit",
      order: { xs: 1, sm: 2 },
      fontSize: "18px",
      display: "flex",
      minWidth: "44px",
      width: "44px",
      height: "44px",
      p: 0,
      border: "1px solid var(--color-border-subtle)",
      borderRadius: "50%",
      "&:hover": { bgcolor: "var(--color-surface-subtle)", borderColor: "var(--color-accent)" }
    }}>
      {(themeMode === "dark") ? <Brightness4Icon /> : <Brightness7Icon />}
    </Button>
  );
}

export default ThemeModeButton;
