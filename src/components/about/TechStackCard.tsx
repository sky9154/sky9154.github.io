import { useTranslation } from "react-i18next";
import { Box, Chip } from "@mui/material";

import { H2, H3 } from "@components/ui/Typography";
import { TECH_LIST } from "@assets/data/config";


function TechStackCard() {
  const { t } = useTranslation();
  const categories = Object.keys(TECH_LIST) as (keyof typeof TECH_LIST)[];

  return (
    <Box component="section" className="portfolio-section" aria-labelledby="technologies-title">
      <H2 id="technologies-title" className="portfolio-heading" sx={{ mb: "var(--about-heading-gap)" }}>{t("about.techStack.title")}</H2>
      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "repeat(2, minmax(0, 1fr))" }, gridAutoRows: { xs: "auto", md: "1fr" }, gap: 2, minWidth: 0 }}>
        {categories.map((category, index) => (
          <Box key={category} component="article" id={`technology-panel-${category}`} aria-labelledby={`technology-heading-${category}`} sx={{
            minWidth: 0,
            p: 2.25,
            bgcolor: "var(--color-surface-subtle)",
            border: "1px solid var(--color-border-subtle)",
            borderRadius: "var(--radius-md)",
            gridColumn: { xs: "auto", md: index === categories.length - 1 && categories.length % 2 !== 0 ? "1 / -1" : "auto" }
          }}>
            <H3 id={`technology-heading-${category}`} sx={{
              display: "flex", alignItems: "center", gap: 1.5, fontSize: "22px", fontWeight: 600, lineHeight: 1.4, mb: 1.5,
              "&::before": { content: "\"\"", width: 6, height: 6, flexShrink: 0, border: "1px solid var(--color-accent)", transform: "rotate(45deg)" }
            }}>{t(`about.techStack.categories.${category}`)}</H3>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
              {TECH_LIST[category].map((tech) => <Chip key={tech} label={tech} variant="outlined" sx={{ color: "var(--text-main)", borderColor: "var(--color-border)", fontSize: "14px" }} />)}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default TechStackCard;
