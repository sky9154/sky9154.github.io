import { useTranslation } from "react-i18next";
import { Box, Chip, Stack } from "@mui/material";
import { H3, Paragraph } from "@components/ui/Typography";
import SectionTitle from "@components/ui/SectionTitle";
import BentoCard from "@components/ui/BentoCard";


interface ResearchItem {
  title: string;
  description: string;
  tags: string[];
}

const ResearchHighlightsCard = () => {
  const { t } = useTranslation();

  const items = t("about.research.items", {
    returnObjects: true
  }) as ResearchItem[];

  return (
    <BentoCard colSpan={2} rowSpan={2}>
      <Stack spacing={2}>
        <SectionTitle>
          {t("about.research.title")}
        </SectionTitle>
        {items.map((item, index) => (
          <Box
            key={item.title}
            sx={{
              pb: (index < items.length - 1) ? 2 : 0,
              borderBottom: (index < items.length - 1)
                ? "1px solid color-mix(in srgb, var(--text-main), transparent 88%)"
                : "none"
            }}
          >
            <H3 sx={{
              fontSize: "18px",
              fontWeight: 700,
              lineHeight: 1.4,
              mb: 1
            }}>
              {item.title}
            </H3>
            <Paragraph sx={{
              color: "var(--text-sub)",
              fontSize: "15px",
              lineHeight: 1.7
            }}>
              {item.description}
            </Paragraph>
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
                  }}
                />
              ))}
            </Box>
          </Box>
        ))}
      </Stack>
    </BentoCard>
  );
};

export default ResearchHighlightsCard;
