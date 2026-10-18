import { useState, useEffect, useId } from "react";
import { useTranslation } from "react-i18next";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { Box, TextField, InputAdornment } from "@mui/material";

import { H1, H3 } from "@components/ui/Typography";
import type { PostCollection } from "@/services/notionApi";


const DIVIDER_SPACING = { xs: 4, md: 6 };

interface CollectionHeroProps {
  collection?: PostCollection;
  loading?: boolean;
  onSearch: (query: string) => void;
}

function CollectionHero({ onSearch, collection = "articles", loading = false }: CollectionHeroProps) {
  const { t } = useTranslation();
  const [inputValue, setInputValue] = useState("");
  const hintId = useId();
  const hasSearchHint = inputValue.trim().length === 1;
  const showSearchStatus = loading || hasSearchHint;

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
    <Box component="section" className="page-heading" aria-labelledby="collection-title" sx={{
      display: "grid",
      gridTemplateColumns: { xs: "minmax(0, 1fr)", md: "minmax(0, 1fr) clamp(280px, 28vw, 360px)" },
      alignItems: { xs: "stretch", md: "end" },
      textAlign: "left",
      mb: DIVIDER_SPACING,
      gap: { xs: 4, md: 6 },
      borderBottom: "1px solid var(--color-border)",
      pb: DIVIDER_SPACING
    }}>
      <Box sx={{ minWidth: 0, width: "100%" }}>
        <H1 id="collection-title" sx={{
          fontSize: "clamp(36px, 5vw, 56px)",
          fontWeight: 700,
          color: "var(--text-main)",
          lineHeight: 1,
          letterSpacing: "-0.035em",
          mb: 2
        }}>
          {t(`${collection}.title`)}
        </H1>
        <H3 sx={{
          color: "var(--text-sub)",
          fontSize: { xs: "16px", md: "18px" },
          fontWeight: 500,
          lineHeight: 1.65,
          width: "100%"
        }}>
          {t(`${collection}.subtitle`)}
        </H3>
      </Box>
      <Box sx={{
        position: "relative",
        minWidth: 0,
        "--search-leading-padding": (theme) => theme.spacing(1.75),
        "--search-icon-width": (theme) => theme.spacing(2),
        "--search-icon-padding": (theme) => theme.spacing(1),
        "--search-icon-gap": (theme) => theme.spacing(1)
      }}>
        <TextField
          placeholder={t(`${collection}.searchPlaceholder`)}
          variant="outlined"
          fullWidth
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          inputProps={{
            "aria-label": t(`${collection}.searchPlaceholder`),
            "aria-describedby": showSearchStatus ? hintId : undefined
          }}
          sx={{
            minWidth: 0,
            "& .MuiOutlinedInput-root": {
              pl: "var(--search-leading-padding)",
              fontSize: "16px",
              minHeight: "52px",
              borderRadius: "var(--radius-md)",
              bgcolor: "var(--color-surface-subtle)",
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
            }
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start" sx={{ fontSize: "var(--search-icon-width)", px: "var(--search-icon-padding)", mr: "var(--search-icon-gap)", color: "var(--text-main)" }}>
                <FaMagnifyingGlass />
              </InputAdornment>
            )
          }} />
        {showSearchStatus && (
          <Box id={hintId} role="status" aria-live="polite" sx={{
            position: "absolute",
            top: "100%",
            left: "calc(var(--search-leading-padding) + var(--search-icon-width) + 2 * var(--search-icon-padding) + var(--search-icon-gap))",
            right: 0,
            mt: 1,
            pointerEvents: "none",
            color: "var(--text-sub)",
            fontSize: "12px",
            lineHeight: 1.5,
            overflowWrap: "anywhere"
          }}>
            {loading ? (
              <Box component="span" className="collection-loading">
                {t(`${collection}.loading`)}
              </Box>
            ) : t(`${collection}.searchHint`)}
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default CollectionHero;
