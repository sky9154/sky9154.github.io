import { useTranslation } from "react-i18next";
import { Box, Stack } from "@mui/material";
import { H3, Paragraph } from "@components/ui/Typography";
import SectionTitle from "@components/ui/SectionTitle";
import BentoCard from "@components/ui/BentoCard";


interface WorkExperienceItem {
  period: string;
  company: string;
  role: string;
  highlights: string[];
}

const WorkExperienceCard = () => {
  const { t } = useTranslation();

  const items = t("about.workExperience.items", {
    returnObjects: true
  }) as WorkExperienceItem[];

  return (
    <BentoCard colSpan={4} rowSpan={1}>
      <Stack spacing={3}>
        <SectionTitle>
          {t("about.workExperience.title")}
        </SectionTitle>
        <Box sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "repeat(2, minmax(0, 1fr))"
          },
          gap: 3
        }}>
          {items.map((item) => (
            <Box key={`${item.company}-${item.period}`} sx={{
              p: 2.5,
              borderRadius: 3,
              bgcolor: "color-mix(in srgb, var(--text-main), transparent 95%)",
              border: "1px solid color-mix(in srgb, var(--text-main), transparent 85%)"
            }}>
              <Paragraph sx={{
                fontSize: "13px",
                color: "var(--text-sub)",
                mb: 1
              }}>
                {item.period}
              </Paragraph>
              <H3 sx={{
                fontSize: "20px",
                fontWeight: 700,
                mb: 0.5
              }}>
                {item.company}
              </H3>
              <Paragraph sx={{
                fontSize: "15px",
                color: "var(--text-sub)",
                fontWeight: 600,
                mb: 2
              }}>
                {item.role}
              </Paragraph>
              <Box
                component="ul"
                sx={{
                  pl: 2.5,
                  m: 0,
                  color: "var(--text-main)"
                }}>
                {item.highlights.map((highlight) => (
                  <Box
                    component="li"
                    key={highlight}
                    sx={{
                      mb: 1,
                      fontSize: "15px",
                      lineHeight: 1.6,
                      "&:last-child": { mb: 0 }
                    }}>
                    {highlight}
                  </Box>
                ))}
              </Box>
            </Box>
          ))}
        </Box>
      </Stack>
    </BentoCard>
  );
};

export default WorkExperienceCard;
