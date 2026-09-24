import { useTranslation } from "react-i18next";
import { Box, Chip, Stack } from "@mui/material";
import { H3, Paragraph } from "@components/ui/Typography";
import SectionTitle from "@components/ui/SectionTitle";
import BentoCard from "@components/ui/BentoCard";


interface EducationItem {
  period: string;
  school: string;
  degree: string;
  topicLabel: string;
  topic: string;
  description: string;
  tags: string[];
}

const EducationCard = () => {
  const { t } = useTranslation();

  const items = t("about.education.items", {
    returnObjects: true
  }) as EducationItem[];

  return (
    <BentoCard colSpan={2} rowSpan={2}>
      <Stack spacing={3}>
        <SectionTitle>
          {t("about.education.title")}
        </SectionTitle>
        <Stack spacing={3}>
          {items.map((item) => (
            <Box
              key={`${item.school}-${item.period}`}
              sx={{
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
                fontSize: "22px",
                lineHeight: 1.4,
                fontWeight: 700,
                mb: 0.5
              }}>
                {item.school}
              </H3>
              <Paragraph sx={{
                fontSize: "15px",
                lineHeight: 1.5,
                fontWeight: 600,
                color: "var(--text-sub)"
              }}>
                {item.degree}
              </Paragraph>
              <Box sx={{
                mt: 2,
                pt: 2,
                borderTop: "1px solid color-mix(in srgb, var(--text-main), transparent 88%)"
              }}>
                <Paragraph sx={{
                  fontSize: "12px",
                  fontWeight: 700,
                  color: "var(--text-sub)",
                  letterSpacing: "0.05em",
                  mb: 0.75
                }}>
                  {item.topicLabel}
                </Paragraph>
                <Paragraph sx={{
                  fontSize: "15px",
                  lineHeight: 1.6,
                  fontWeight: 700,
                  mb: 1
                }}>
                  {item.topic}
                </Paragraph>
                <Paragraph sx={{
                  fontSize: "14px",
                  lineHeight: 1.7,
                  color: "var(--text-sub)"
                }}>
                  {item.description}
                </Paragraph>
              </Box>
              <Box sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 1,
                mt: 2
              }}>
                {item.tags.map((tag) => (
                  <Chip
                    key={tag}
                    label={tag}
                    size="small"
                    sx={{
                      fontSize: "12px",
                      fontWeight: 500,
                      color: "var(--text-main)",
                      bgcolor: "color-mix(in srgb, var(--text-main), transparent 92%)",
                      border: "1px solid color-mix(in srgb, var(--text-main), transparent 85%)",
                      cursor: "pointer",
                      transition: "background-color 0.15s ease, border-color 0.15s ease",
                      "&:hover": {
                        bgcolor: "color-mix(in srgb, var(--text-main), transparent 85%)",
                        borderColor: "color-mix(in srgb, var(--text-main), transparent 70%)"
                      }
                    }} />
                ))}
              </Box>
            </Box>
          ))}
        </Stack>
      </Stack>
    </BentoCard>
  );
};

export default EducationCard;
