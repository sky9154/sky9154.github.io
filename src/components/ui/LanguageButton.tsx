import { useState, MouseEvent } from "react";
import PublicIcon from "@mui/icons-material/Public";
import { Box, Button, Menu, MenuItem } from "@mui/material";
import { useLanguageContext } from "@context/LanguageContext";


const LanguageButton = () => {
  const { changeLanguage } = useLanguageContext();

  const [langMenuAnchorEl, setLangMenuAnchorEl] = useState<null | HTMLElement>(null);
  const isLangMenuOpen = Boolean(langMenuAnchorEl);

  const handleLangMenuOpen = (event: MouseEvent<HTMLElement>) => {
    setLangMenuAnchorEl(event.currentTarget);
  };

  const handleLangMenuClose = (lang?: string) => {
    setLangMenuAnchorEl(null);

    if (lang) {
      changeLanguage(lang);
    }
  };

  return (
    <Box sx={{ order: { xs: 1, sm: 2 } }}>
      <Button
        id="language-button"
        onClick={handleLangMenuOpen}
        sx={{
          color: "inherit",
          order: { xs: 1, sm: 2 },
          fontSize: "18px",
          display: { xm: "none", md: "flex" }
        }}
      >
        <PublicIcon />
      </Button>

      <Menu
        anchorEl={langMenuAnchorEl}
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
              borderRadius: 2,
              boxShadow: "none",
              transition: "all 0.2s ease",
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
        }}
      >
        <MenuItem onClick={() => handleLangMenuClose("zh_Hant")}>繁體中文</MenuItem>
        <MenuItem onClick={() => handleLangMenuClose("en")}>English</MenuItem>
        <MenuItem onClick={() => handleLangMenuClose("ja")}>日本語</MenuItem>
      </Menu>

    </Box>
  );
}

export default LanguageButton;