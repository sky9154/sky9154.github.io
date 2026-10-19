import { useTranslation } from "react-i18next";
import parse from "html-react-parser";
import { Box } from "@mui/material";

import { H1, Paragraph } from "@components/ui/Typography";
import useDecorationMotion from "@components/ui/useDecorationMotion";
import Profile from "@assets/images/Profile.webp";
import { keepInlineSeparators } from "@/utils/typography";


function ProfileCard() {
  const { t } = useTranslation();
  const portraitRef = useDecorationMotion();

  return (
    <Box component="section" className="about-introduction" sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "minmax(0, 1.3fr) minmax(0, 0.7fr)" }, gridTemplateAreas: { xs: "\"portrait\" \"copy\"", md: "\"copy portrait\"" }, gap: { xs: "var(--about-heading-gap)", md: 8 }, alignItems: "center" }}>
      <Box ref={portraitRef} className="about-portrait" sx={{ gridArea: "portrait" }}>
        <svg viewBox="0 0 400 400" aria-hidden="true" focusable="false">
          <circle className="about-portrait-frame" cx="200" cy="200" r="180" />
          <circle cx="200" cy="200" r="142" />
          <g className="about-portrait-rays">
            {Array.from({ length: 8 }, (_, index) => <line key={index} x1="200" y1="44" x2="200" y2="58" transform={`rotate(${index * 45} 200 200)`} />)}
            <path d="M14 200h28m316 0h28M200 14v28m0 316v28" />
          </g>
          <g className="about-portrait-dial">
            {Array.from({ length: 48 }, (_, index) => <line key={index} x1="200" y1="20" x2="200" y2={index % 4 === 0 ? "34" : "26"} transform={`rotate(${index * 7.5} 200 200)`} />)}
            <path d="M44.115 110A180 180 0 0 1 200 20M355.885 290A180 180 0 0 1 200 380" />
          </g>
          <g className="about-portrait-orbit">
            <ellipse cx="200" cy="200" rx="186" ry="82" transform="rotate(-28 200 200)" strokeDasharray="96 12 24 18" />
          </g>
          <path className="decoration-trace about-portrait-trace" pathLength="1" d="M58 200A142 142 0 0 1 200 58M342 200A142 142 0 0 1 200 342" />
          <g className="about-portrait-satellite">
            <path d="M165.485 37.627A166 166 0 0 1 200 34" />
            <circle cx="200" cy="34" r="4.5" />
            <circle cx="171.176" cy="36.521" r="1.5" />
          </g>
          <path className="about-portrait-moon" d="M72 88a12 12 0 1 0 0 24a14 14 0 0 1 0-24Z" />
          <g className="about-portrait-stars decoration-glimmer">
            <path d="M329 106h16m-8-8v16M62 298h12m-6-6v12" />
            <circle cx="319" cy="325" r="2" />
          </g>
        </svg>
        <img src={Profile} alt="oF" width="400" height="400" draggable={false} />
      </Box>
      <Box sx={{ gridArea: "copy", minWidth: 0 }}>
        <Box className="about-title-group" sx={{ textAlign: { xs: "center", md: "left" }, mb: "var(--about-heading-gap)" }}>
          <H1 sx={{ fontSize: { xs: "32px", sm: "44px", md: "48px" }, fontWeight: 600, letterSpacing: "-0.025em", lineHeight: 1.3, mb: 2 }}>{parse(t("about.title"))}</H1>
          <Paragraph sx={{ color: "var(--color-accent)", fontSize: "16px", lineHeight: 1.6, textWrap: "balance" }}>{keepInlineSeparators(t("about.subtitle"))}</Paragraph>
        </Box>
        {t("about.content").split("<br />").map((text, index) => (
          <Paragraph key={index} sx={{ fontSize: "17px", lineHeight: 1.9, color: index === 0 ? "var(--text-main)" : "var(--text-sub)", mb: "var(--about-copy-gap)", "&:last-child": { mb: 0 }, width: "100%", maxWidth: "none" }}>{text}</Paragraph>
        ))}
      </Box>
    </Box>
  );
}

export default ProfileCard;
