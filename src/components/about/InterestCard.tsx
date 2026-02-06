import { Trans, useTranslation } from "react-i18next";
import { FaMugHot } from "react-icons/fa6";
import { Box, Stack } from "@mui/material";
import { H1 } from "@components/ui/Typography";
import BentoCard from "@components/ui/BentoCard";


const InterestCard = () => {
  useTranslation();

  return (
    <BentoCard colSpan={1} rowSpan={1}>
      <Stack justifyContent="center" alignItems="center" sx={{
        height: "100%",
        position: "relative",
        overflow: "hidden",
        zIndex: 0
      }}>
        <FaMugHot size={96} style={{
          position: "absolute",
          right: -10,
          bottom: -10,
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
          <FaMugHot />
        </Box>
        <Box textAlign="center">
          <H1 sx={{
            fontSize: "18px",
            fontWeight: 700,
            lineHeight: 1.4
          }}>
            <Trans i18nKey="about.interests.coffee" components={{ br: <br /> }} />
          </H1>
        </Box>
      </Stack>
    </BentoCard>
  );
};

export default InterestCard;