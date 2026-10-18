import { useTranslation } from "react-i18next";
import { Box } from "@mui/material";

import ObservationTimeline from "@components/about/ObservationTimeline";


interface WorkExperienceItem {
  period: string;
  company: string;
  role: string;
  highlights: string[];
}

function WorkExperienceCard() {
  const { t } = useTranslation();
  const items = t("about.workExperience.items", { returnObjects: true }) as WorkExperienceItem[];

  return (
    <ObservationTimeline id="work-experience" title={t("about.workExperience.title")} entries={items.map((item) => ({
      period: item.period,
      heading: item.company,
      subheading: item.role,
      content: (
        <Box component="ul" sx={{ pl: 2.5, color: "var(--text-main)", maxWidth: "65ch" }}>
          {item.highlights.map((highlight) => <Box component="li" key={highlight} sx={{ fontSize: "16px", lineHeight: 1.8, mb: 1, "&:last-child": { mb: 0 } }}>{highlight}</Box>)}
        </Box>
      )
    }))} />
  );
}

export default WorkExperienceCard;
