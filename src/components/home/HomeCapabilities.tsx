import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Box, Button } from "@mui/material";
import { FaArrowRightLong } from "react-icons/fa6";

import { H2, H3, Paragraph } from "@components/ui/Typography";


function HomeCapabilities() {
  const { t } = useTranslation();

  return (
    <Box component="section" aria-labelledby="capabilities-title" className="portfolio-section" sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "minmax(0, 0.8fr) minmax(0, 1.2fr)" }, gap: { xs: 4, md: 10 }, alignItems: "center" }}>
      <Box className="capability-introduction">
        <H2 id="capabilities-title" className="portfolio-heading">{t("home.capabilities.title")}</H2>
        <Paragraph sx={{ mt: 3, color: "var(--text-sub)", lineHeight: 1.8 }}>{t("home.capabilities.description")}</Paragraph>
        <Button disableRipple component={Link} to="/about" className="home-action-link" sx={{ mt: 3, color: "var(--color-accent)" }} endIcon={<FaArrowRightLong aria-hidden="true" />}>{t("home.capabilities.about")}</Button>
      </Box>
      <Box className="capability-list" sx={(theme) => ({
        "--capability-inset": theme.spacing(1),
        "--capability-rail-width": theme.spacing(2),
        px: 1,
        [theme.breakpoints.up("sm")]: { "--capability-inset": "0px", px: 0 }
      })}>
        {["fullStack", "research", "integration"].map((key) => (
          <Box component="article" key={key} className="capability-entry" sx={{ display: "grid", gridTemplateColumns: "var(--capability-rail-width) minmax(0, 1fr)", columnGap: { xs: 2, sm: 3 }, py: 3, fontSize: { xs: "22px", md: "26px" }, lineHeight: 1.5 }}>
            <Box className="capability-track" aria-hidden="true" sx={{ gridColumn: 1, gridRow: 1, minWidth: 0, height: "1lh", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Box component="span" className="capability-node" />
            </Box>
            <H3 sx={{ gridColumn: 2, gridRow: 1, fontSize: "inherit", mb: 1.5, fontWeight: 600 }}>{t(`home.capabilities.${key}.title`)}</H3>
            <Paragraph sx={{ gridColumn: 2, color: "var(--text-sub)", lineHeight: 1.8 }}>{t(`home.capabilities.${key}.description`)}</Paragraph>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default HomeCapabilities;
