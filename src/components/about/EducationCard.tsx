import { useTranslation } from "react-i18next";
import { Box, Chip } from "@mui/material";

import { Paragraph } from "@components/ui/Typography";
import ObservationTimeline from "@components/about/ObservationTimeline";


interface EducationItem {
  period: string;
  school: string;
  degree: string;
  topicLabel: string;
  topic: string;
  description: string;
  tags: string[];
}

function EducationCard() {
  const { t } = useTranslation();
  const items = t("about.education.items", { returnObjects: true }) as EducationItem[];

  return (
    <ObservationTimeline id="education" title={t("about.education.title")} entries={items.map((item) => ({
      period: item.period,
      heading: item.school,
      subheading: item.degree,
      content: (
        <Box sx={{ maxWidth: "65ch" }}>
          <Paragraph sx={{ color: "var(--color-accent)", fontSize: "13px", mb: 1 }}>{item.topicLabel}</Paragraph>
          <Paragraph sx={{ fontSize: "18px", fontWeight: 600, lineHeight: 1.7, mb: "var(--about-copy-gap)" }}>{item.topic}</Paragraph>
          <Paragraph sx={{ color: "var(--text-sub)", lineHeight: 1.8 }}>{item.description}</Paragraph>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: "var(--about-copy-gap)" }}>
            {item.tags.map((tag) => <Chip key={tag} label={tag} size="small" variant="outlined" sx={{ color: "var(--text-sub)", borderColor: "var(--color-border)" }} />)}
          </Box>
        </Box>
      )
    }))} />
  );
}

export default EducationCard;
