import { useTranslation } from "react-i18next";
import { Box, Chip, Stack } from "@mui/material";
import { Paragraph } from "@components/ui/Typography";
import SectionTitle from "@components/ui/SectionTitle";
import BentoCard from "@components/ui/BentoCard";
import { TECH_LIST } from "@assets/data/config";
import { useThemeModeContext } from "@context/ThemeModeContext";
import NiraB from "@assets/images/illustration/nira-b.png";
import NiraG from "@assets/images/illustration/nira-g.png";


const TechStackCard = () => {
  const { t } = useTranslation();

  const { themeMode } = useThemeModeContext();
  const watermark = (themeMode === "dark") ? NiraB : NiraG;

  return (
    <BentoCard colSpan={2} rowSpan={2}>
      <Stack
        spacing={3}
        sx={{
          height: "100%",
          position: "relative",
          isolation: "isolate"
        }}>
        <SectionTitle>
          {t("about.techStack.title")}
        </SectionTitle>
        <Stack spacing={3}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "repeat(2, minmax(0, 1fr))" },
              gap: 2
            }}>
            {Object.entries(TECH_LIST).map(([category, techs], index, entries) => (
              <Box key={category} sx={{
                gridColumn: {
                  xs: "auto",
                  sm: (index === entries.length - 1) ? "1 / -1" : "auto"
                },
                minWidth: 0,
                p: 2,
                borderRadius: 3,
                bgcolor: "color-mix(in srgb, var(--text-main), transparent 95%)",
                border: "1px solid color-mix(in srgb, var(--text-main), transparent 85%)"
              }}>
                <Paragraph sx={{
                  fontSize: "14px",
                  fontWeight: 700,
                  color: "var(--text-sub)",
                  mb: 1.5
                }}>
                  {t(`about.techStack.categories.${category}`)}
                </Paragraph>

                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                  {techs.map((tech) => (
                    <Chip
                      key={tech}
                      label={tech}
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
          </Box>
        </Stack>
        <Box
          component="img"
          src={watermark}
          alt=""
          aria-hidden="true"
          draggable={false}
          sx={{
            position: "absolute",
            right: 0,
            bottom: 0,
            width: { xs: 200, md: 220, lg: 240 },
            maxWidth: "50%",
            height: "auto",
            opacity: 0.2,
            zIndex: 0,
            pointerEvents: "none",
            userSelect: "none"
          }} />
      </Stack>
    </BentoCard>
  );
};

export default TechStackCard;
