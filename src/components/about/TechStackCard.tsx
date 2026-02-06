import { useTranslation } from "react-i18next";
import { Box, Chip, Stack } from "@mui/material";
import { H1, Paragraph } from "@components/ui/Typography";
import BentoCard from "@components/ui/BentoCard";
import { TECH_LIST } from "@assets/data/config";


const TechStackCard = () => {
  const { t } = useTranslation();

  return (
    <BentoCard colSpan={2} rowSpan={2}>
      <Stack spacing={3} sx={{ height: "100%" }}>
        <H1 sx={{
          fontSize: "32px",
          lineHeight: 1.6,
          fontWeight: 700,
          flexShrink: 0
        }}>
          {t("about.techStack.title")}
        </H1>
        <Stack spacing={3}>
          {Object.entries(TECH_LIST).map(([category, techs]) => (
            <Box key={category}>
              <Paragraph sx={{
                fontSize: "14px",
                fontWeight: 600,
                opacity: 0.6,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                mb: 1.5
              }}>
                {t(`about.techStack.categories.${category}`)}
              </Paragraph>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                {techs.map((tech) => (
                  <Chip key={tech} label={tech} sx={{
                    fontSize: "14px",
                    fontWeight: 500,
                    bgcolor: "color-mix(in srgb, var(--text-main), transparent 92%)",
                    color: "var(--text-main)",
                    border: "1px solid color-mix(in srgb, var(--text-main), transparent 85%)",
                    cursor: "pointer",
                    "&:hover": {
                      bgcolor: "color-mix(in srgb, var(--text-main), transparent 85%)"
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

export default TechStackCard;