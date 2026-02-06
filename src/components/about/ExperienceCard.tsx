import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Box, Stack, keyframes } from "@mui/material";
import { H1, Paragraph } from "@components/ui/Typography";
import BentoCard from "@components/ui/BentoCard";


const scrollVertical = keyframes`
  0% { transform: translateY(0); }
  100% { transform: translateY(-50%); }
`;

const ExperienceCard = () => {
  const { t } = useTranslation();

  const doubledExperience = useMemo(() => {
    const items = t("about.experience.items", { returnObjects: true }) as Array<{ year: string; content: string }>;
    return [...items, ...items];
  }, [t]);

  return (
    <BentoCard colSpan={2} rowSpan={1}>
      <Stack sx={{ height: "100%", position: "relative", overflow: "hidden" }}>
        <Box sx={{ pb: 2, zIndex: 2 }}>
          <H1 sx={{
            fontSize: "18px",
            fontWeight: 700,
            textTransform: "uppercase"
          }}>
            {t("about.experience.title")}
          </H1>
        </Box>
        <Box sx={{
          position: "relative",
          flexGrow: 1,
          overflow: "hidden",
          maskImage: "linear-gradient(to bottom, transparent 0%, var(--black) 15%, var(--black) 85%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, var(--black) 15%, var(--black) 85%, transparent 100%)",
          height: "90px"
        }}>
          <Box sx={{
            animation: `${scrollVertical} 10s linear infinite`,
            "&:hover": { animationPlayState: "paused" }
          }}>
            <Stack spacing={0}>
              {doubledExperience.map((item, index) => (
                <Box key={index} sx={{
                  display: "grid",
                  gridTemplateColumns: "100px minmax(0, 1fr)",
                  gap: 2,
                  height: "30px",
                  alignItems: "center",
                  boxSizing: "border-box",
                  borderColor: "var(--text-main)",
                  borderImage: "linear-gradient(to bottom, transparent, var(--text-main) 50%, transparent) 1",
                  opacity: 0.8,
                  transition: "opacity 0.2s",
                  "&:hover": { opacity: 1 }
                }}>
                  <Paragraph sx={{ fontSize: "14px", fontWeight: 600, opacity: 0.6 }}>{item.year}</Paragraph>
                  <H1 sx={{
                    fontSize: "14px",
                    fontWeight: 700,
                    lineHeight: 1.2,
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "block"
                  }}>
                    {item.content}
                  </H1>
                </Box>
              ))}
            </Stack>
          </Box>
        </Box>
      </Stack>
    </BentoCard>
  );
};

export default ExperienceCard;