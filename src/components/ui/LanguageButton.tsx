import { useRef, useState } from "react";
import PublicIcon from "@mui/icons-material/Public";
import { Box, Button, Menu, MenuItem } from "@mui/material";

import { useLanguageContext } from "@context/LanguageContext";


function LanguageButton() {
  const { changeLanguage } = useLanguageContext();

  const languageButtonRef = useRef<HTMLButtonElement>(null);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  const handleLangMenuOpen = () => {
    setIsLangMenuOpen(true);
  };

  const handleLangMenuClose = (lang?: string) => {
    setIsLangMenuOpen(false);

    if (lang) {
      changeLanguage(lang);
    }
  };

  return (
    <Box sx={{ order: { xs: 1, sm: 2 } }}>
      <Button
        ref={languageButtonRef}
        id="language-button"
        aria-label="Choose language"
        aria-haspopup="menu"
        aria-controls={(isLangMenuOpen) ? "language-menu" : undefined}
        aria-expanded={isLangMenuOpen}
        onClick={handleLangMenuOpen}
        sx={{
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
        <PublicIcon />
      </Button>
      <Menu
        disableScrollLock
        id="language-menu"
        MenuListProps={{ "aria-labelledby": "language-button" }}
        anchorEl={languageButtonRef.current}
        open={isLangMenuOpen}
        onClose={() => handleLangMenuClose()}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        slotProps={{
          paper: {
            elevation: 6,
            sx: {
              mt: 1,
              minWidth: 140,
              bgcolor: "var(--lang-menu-bg)",
              backdropFilter: "blur(10px)",
              color: "var(--text-main)",
              borderRadius: "var(--radius-md)",
              border: "1px solid var(--color-border)",
              boxShadow: "var(--shadow-floating)",
              "& .MuiMenuItem-root": {
                fontSize: 16,
                fontFamily: "inherit",
                padding: "8px 16px",
                "&:hover": {
                  bgcolor: "color-mix(in srgb, var(--text-main), transparent 90%)"
                }
              }
            }
          }
        }}>
        <MenuItem onClick={() => handleLangMenuClose("zh_Hant")}>繁體中文</MenuItem>
        <MenuItem onClick={() => handleLangMenuClose("en")}>English</MenuItem>
        <MenuItem onClick={() => handleLangMenuClose("ja")}>日本語</MenuItem>
      </Menu>
    </Box>
  );
}

export default LanguageButton;
