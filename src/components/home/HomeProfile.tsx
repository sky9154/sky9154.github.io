import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Box, Button, Stack } from "@mui/material";
import { FaArrowRightLong } from "react-icons/fa6";

import { H1, Paragraph } from "@components/ui/Typography";
import { keepInlineSeparators } from "@/utils/typography";


function HomeProfile() {
  const { t } = useTranslation();
  const pageLinks = [
    { key: "about", to: "/about" },
    { key: "projects", to: "/projects" },
    { key: "articles", to: "/articles" }
  ];

  return (
    <Box className="home-profile" sx={{ minWidth: 0, px: { xs: 1, md: 0 }, color: "var(--text-main)" }}>
      <Box className="home-title-group" sx={{ textAlign: { xs: "center", md: "left" } }}>
        <H1 sx={{ fontSize: { xs: "88px", md: "clamp(96px, 8vw, 120px)" }, lineHeight: 1, fontWeight: 700, letterSpacing: "-0.04em" }}>{t("home.name")}</H1>
        <Paragraph sx={{ mt: 1.5, color: "var(--text-sub)", fontSize: "14px" }}>{t("home.intro")}</Paragraph>
        <Paragraph sx={{ mt: 3, fontSize: { xs: "24px", md: "28px" }, fontWeight: 600, lineHeight: 1.5, textWrap: "balance" }}>{keepInlineSeparators(t("home.role"))}</Paragraph>
      </Box>
      <Paragraph className="home-statement" sx={{ mt: 2, mb: 3.5, width: "100%", maxWidth: "none", textAlign: { xs: "left", sm: "center", md: "left" }, color: "var(--text-sub)", fontSize: "16px", lineHeight: 1.8, textWrap: "wrap" }}>{t("home.statement")}</Paragraph>
      <Stack component="nav" aria-label={t("home.navigation")}>
        {pageLinks.map((item) => (
          <Button disableRipple component={Link} key={item.key} to={item.to} sx={{
            display: "grid", gridTemplateColumns: "minmax(0, 1fr) auto", gap: 2,
            minHeight: "58px", py: 1.25, pl: 0, pr: 2, borderRadius: 0,
            borderTop: "1px solid var(--color-border-subtle)", color: "var(--text-main)", textAlign: "left",
            "& .home-link-arrow": { width: "1em", height: "1em", transition: "transform var(--motion-fast) var(--ease-standard)" },
            WebkitTapHighlightColor: "transparent",
            "&:is(:hover, :active, :focus, :focus-visible)": { bgcolor: "transparent" },
            "&:active .home-link-arrow": { transform: "none", transition: "none" },
            "&:focus-visible": { outline: "2px solid var(--color-accent)", outlineOffset: "2px" },
            "@media (hover: hover) and (pointer: fine)": {
              "&:hover:not(:active)": { color: "var(--color-accent)" },
              "&:hover:not(:active) .home-link-arrow": { transform: "translateX(4px)" }
            }
          }}>
            <Box>
              <Paragraph sx={{ fontWeight: 600, fontSize: "16px" }}>{t(`navbar.${item.key}`)}</Paragraph>
              <Paragraph sx={{ color: "var(--text-sub)", fontSize: "12px", mt: 0.25 }}>{t(`home.links.${item.key}`)}</Paragraph>
            </Box>
            <FaArrowRightLong className="home-link-arrow" aria-hidden="true" />
          </Button>
        ))}
      </Stack>
    </Box>
  );
}

export default HomeProfile;
