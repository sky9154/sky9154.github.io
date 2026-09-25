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
    <Box component="section" aria-labelledby="blog-title" sx={{
      display: "flex",
      flexDirection: { xs: "column", md: "row" },
      alignItems: { xs: "stretch", md: "flex-end" },
      justifyContent: "space-between",
      textAlign: "left",
      mb: { xs: 5, md: 8 },
      gap: { xs: 4, md: 8 },
      borderBottom: "1px solid color-mix(in srgb, var(--text-main), transparent 70%)",
      pb: { xs: 4, md: 6 }
    }}>
      <Box sx={{ maxWidth: "680px" }}>
        <H1 id="blog-title" sx={{
          fontSize: "clamp(36px, 5vw, 56px)",
          fontWeight: 700,
          color: "var(--text-main)",
          lineHeight: 1,
          letterSpacing: "-0.035em",
          mb: 2
        }}>
          {t("blog.title")}
        </H1>
        <H3 sx={{
          color: "var(--text-sub)",
          fontSize: { xs: "16px", md: "18px" },
          fontWeight: 500,
          lineHeight: 1.65,
          maxWidth: "42ch"
        }}>
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
        inputProps={{ "aria-label": t("blog.searchPlaceholder") }}
        sx={{
          maxWidth: { xs: "none", md: "460px" },
          "& .MuiOutlinedInput-root": {
            fontSize: "16px",
            minHeight: "52px",
            borderRadius: "16px",
            bgcolor: "color-mix(in srgb, var(--search-bg), transparent 86%)",
            color: "var(--text-main)",
            transition: "background-color 180ms cubic-bezier(0.16, 1, 0.3, 1)",
            "& fieldset": {
              borderColor: "color-mix(in srgb, var(--search-border), transparent 58%)",
              borderWidth: "1px",
              transition: "border-color 180ms cubic-bezier(0.16, 1, 0.3, 1)"
            },
            "&:hover": {
              "& fieldset": { borderColor: "color-mix(in srgb, var(--search-border), transparent 30%)" },
            },
            "&.Mui-focused": {
              bgcolor: "color-mix(in srgb, var(--search-bg), transparent 78%)",
              "& fieldset": {
                borderColor: "var(--search-border)",
                borderWidth: "2px"
              }
            }
          },
          "& .MuiFormHelperText-root": {
            color: "var(--text-sub)",
            mx: 1.5
          }
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start" sx={{ fontSize: "16px", px: 1, color: "var(--text-main)" }}>
              <FaMagnifyingGlass />
            </InputAdornment>
          ),
        }} />
    </Box>
  );
};

export default BlogHero;