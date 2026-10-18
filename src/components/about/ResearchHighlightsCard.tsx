import { useTranslation } from "react-i18next";
import { Box, Chip } from "@mui/material";

import { H2, H3, Paragraph } from "@components/ui/Typography";
import ResearchDiagram from "@components/about/ResearchDiagram";


interface ResearchItem {
  title: string;
  description: string;
  tags: string[];
}

function ResearchHighlightsCard() {
  const { t } = useTranslation();
  const items = t("about.research.items", { returnObjects: true }) as ResearchItem[];

  return (
    <Box component="section" className="portfolio-section" aria-labelledby="research-title">
      <H2 id="research-title" className="portfolio-heading" sx={{ mb: "var(--about-heading-gap)" }}>{t("about.research.title")}</H2>
      <Box component="article">
        <H3 sx={{ fontSize: { xs: "24px", md: "30px" }, fontWeight: 600, mb: "var(--about-copy-gap)" }}>{items[0].title}</H3>
        <Paragraph sx={{ color: "var(--text-sub)", lineHeight: 1.8 }}>{items[0].description}</Paragraph>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: "var(--about-copy-gap)" }}>
          {items[0].tags.map((tag) => <Chip key={tag} label={tag} size="small" variant="outlined" sx={{ color: "var(--text-sub)", borderColor: "var(--color-border)" }} />)}
        </Box>
        <ResearchDiagram />
      </Box>
      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "repeat(2, minmax(0, 1fr))" }, columnGap: { xs: 4, md: 7 }, rowGap: "var(--about-item-gap)", mt: "var(--about-item-gap)" }}>
        {items.slice(1).map((item) => (
          <Box component="article" key={item.title} sx={{ borderTop: "1px solid var(--color-accent-muted)", pt: "var(--about-copy-gap)" }}>
            <H3 sx={{ fontSize: "22px", fontWeight: 600, lineHeight: 1.4, mb: "var(--about-copy-gap)" }}>{item.title}</H3>
            <Paragraph sx={{ color: "var(--text-sub)", lineHeight: 1.8 }}>{item.description}</Paragraph>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: "var(--about-copy-gap)" }}>
              {item.tags.map((tag) => <Chip key={tag} label={tag} size="small" variant="outlined" sx={{ color: "var(--text-sub)", borderColor: "var(--color-border)" }} />)}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default ResearchHighlightsCard;
