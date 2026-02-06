import { useTranslation } from "react-i18next";
import { FaMapLocationDot, FaEarthAsia } from "react-icons/fa6";
import { Box, Stack } from "@mui/material";
import { H1, Paragraph } from "@components/ui/Typography";
import BentoCard from "@components/ui/BentoCard";


const LocationCard = () => {
  const { t } = useTranslation();

  return (
    <BentoCard colSpan={1} rowSpan={1}>
      <Stack justifyContent="center" alignItems="center" sx={{
        height: "100%",
        position: "relative",
        overflow: "hidden"
      }}>
        <FaEarthAsia size={96} style={{
          position: "absolute",
          right: -20,
          bottom: -20,
          opacity: 0.08,
          transform: "rotate(-15deg)",
          color: "var(--text-main)"
        }} />
        <Box sx={{
          display: "flex",
          fontSize: "48px",
          mb: 1,
          color: "var(--text-main)"
        }}>
          <FaMapLocationDot />
        </Box>
        <Box sx={{ position: "relative", zIndex: 1, textAlign: "center", px: 1 }}>
          <H1 sx={{
            fontSize: "18px",
            fontWeight: 700,
            whiteSpace: "nowrap"
          }}>
            {t("about.location")}
          </H1>
          <Paragraph sx={{
            fontSize: "16px",
            opacity: 0.6,
            fontWeight: 600,
            letterSpacing: "1px"
          }}>
            UTC+8
          </Paragraph>
        </Box>
      </Stack>
    </BentoCard>
  );
}

export default LocationCard;