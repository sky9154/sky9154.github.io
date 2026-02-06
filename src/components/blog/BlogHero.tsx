import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { Box, TextField, InputAdornment } from "@mui/material";
import { H1, H3 } from "@components/ui/Typography";


interface BlogHeroProps {
  onSearch: (query: string) => void;
}

const BlogHero = ({ onSearch }: BlogHeroProps) => {
  const { t } = useTranslation();
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      const trimmedInput = inputValue.trim();

      if (trimmedInput.length === 0 || trimmedInput.length >= 2) {
        onSearch(trimmedInput);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [inputValue, onSearch]);

  return (
    <Box sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      mb: 6,
      gap: 6
    }}>
      <Box>
        <H1 sx={{ fontSize: "56px", fontWeight: 700, color: "var(--text-main)" }}>
          {t("blog.title")}
        </H1>
        <H3 sx={{ color: "var(--text-sub)" }}>
          {t("blog.subtitle")}
        </H3>
      </Box>
      <TextField
        placeholder={t("blog.searchPlaceholder")}
        variant="outlined"
        fullWidth
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        helperText={(inputValue.length === 1) ? t("blog.searchHint") : " "}
        sx={{
          maxWidth: "500px",
          "& .MuiOutlinedInput-root": {
            fontSize: "16px",
            borderRadius: 10,
            bgcolor: "color-mix(in srgb, var(--search-bg), transparent 80%)",
            backdropFilter: "blur(10px)",
            color: "var(--text-main)",
            transition: "all 0.3s ease",
            "& fieldset": {
              borderColor: "color-mix(in srgb, var(--search-border), transparent 60%)",
              borderWidth: "2px"
            },
            "&:hover": {
              "& fieldset": { borderColor: "color-mix(in srgb, var(--search-border), transparent 40%)" },
            },
            "&.Mui-focused": {
              "& fieldset": { borderColor: "color-mix(in srgb, var(--search-border), transparent 20%)" }
            }
          }
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start" sx={{ fontSize: "16px", px: 1, color: "var(--text-main)" }}>
              <FaMagnifyingGlass />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};

export default BlogHero;