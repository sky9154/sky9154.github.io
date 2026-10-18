import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Box, Button, Chip } from "@mui/material";

import { H2, H3, Paragraph } from "@components/ui/Typography";
import { TECH_LIST } from "@assets/data/config";


const CATEGORY_REFERENCES = {
  programming: { title: "about.workExperience.title", description: "about.workExperience.items.0.highlights.1", href: "#work-experience" },
  web: { title: "about.workExperience.title", description: "about.workExperience.items.1.highlights.1", href: "#work-experience" },
  data: { title: "about.research.items.0.title", description: "about.research.items.0.description", href: "#research-title" },
  ai: { title: "about.research.items.1.title", description: "about.research.items.1.description", href: "#research-title" },
  integration: { title: "about.research.items.2.title", description: "about.research.items.2.description", href: "#research-title" }
};

function TechStackCard() {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState<keyof typeof TECH_LIST>("programming");
  const categories = Object.keys(TECH_LIST) as (keyof typeof TECH_LIST)[];
  const reference = CATEGORY_REFERENCES[selectedCategory];

  return (
    <Box component="section" className="portfolio-section" aria-labelledby="technologies-title">
      <H2 id="technologies-title" className="portfolio-heading" sx={{ mb: "var(--about-heading-gap)" }}>{t("about.techStack.title")}</H2>
      <Paragraph sx={{ color: "var(--text-sub)", lineHeight: 1.8, mb: "var(--about-heading-gap)" }}>{t("about.techStack.selectHint")}</Paragraph>
      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "minmax(0, 0.65fr) minmax(0, 1.35fr)" }, gap: { xs: 3, md: 6 } }}>
        <Box role="group" aria-label={t("about.techStack.title")} sx={{ display: "flex", flexDirection: { xs: "row", md: "column" }, flexWrap: "wrap", gap: 1 }}>
          {categories.map((category) => (
            <Button key={category} aria-pressed={selectedCategory === category} aria-controls="technology-selection" onClick={() => setSelectedCategory(category)} sx={{
              minHeight: 48, textAlign: "left", justifyContent: "flex-start", px: 2,
              color: selectedCategory === category ? "var(--color-accent)" : "var(--text-sub)",
              bgcolor: selectedCategory === category ? "var(--color-surface)" : "transparent",
              border: "1px solid", borderColor: selectedCategory === category ? "var(--color-accent-muted)" : "transparent"
            }}>{t(`about.techStack.categories.${category}`)}</Button>
          ))}
        </Box>
        <Box id="technology-selection" aria-live="polite" sx={{ minWidth: 0, minHeight: { md: 240 }, p: { xs: 3, md: 4 }, bgcolor: "var(--color-surface-subtle)", borderRadius: "var(--radius-lg)", border: "1px solid var(--color-border)" }}>
          <H3 sx={{ fontSize: "24px", fontWeight: 600, lineHeight: 1.4, mb: "var(--about-heading-gap)" }}>{t(`about.techStack.categories.${selectedCategory}`)}</H3>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5 }}>
            {TECH_LIST[selectedCategory].map((tech) => <Chip key={tech} label={tech} variant="outlined" sx={{ color: "var(--text-main)", borderColor: "var(--color-border)", fontSize: "14px", cursor: "pointer" }} />)}
          </Box>
          <Box sx={{ mt: "var(--about-heading-gap)", pt: "var(--about-copy-gap)", borderTop: "1px solid var(--color-border-subtle)" }}>
            <Paragraph sx={{ color: "var(--text-sub)", fontSize: "13px", mb: 1 }}>{t("about.techStack.relatedBackground")}</Paragraph>
            <Button disableRipple component="a" href={reference.href} sx={{
              color: "var(--color-accent)", bgcolor: "transparent", px: 0, textAlign: "left", justifyContent: "flex-start",
              WebkitTapHighlightColor: "transparent",
              "&:is(:hover, :active, :focus, :focus-visible)": { bgcolor: "transparent" },
              "&:hover": { color: "var(--text-main)" },
              "&:focus-visible": { outline: "2px solid var(--color-accent)", outlineOffset: "4px" }
            }}>{t(reference.title)}</Button>
            <Paragraph sx={{ color: "var(--text-sub)", lineHeight: 1.8, mt: 1 }}>{t(reference.description)}</Paragraph>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default TechStackCard;
