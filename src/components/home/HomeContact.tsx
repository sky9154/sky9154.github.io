import { useId } from "react";
import { useTranslation } from "react-i18next";
import toast from "react-hot-toast";
import { Box, Button } from "@mui/material";

import { H2, Paragraph } from "@components/ui/Typography";
import { CONTACT } from "@assets/data/config";
import useDecorationMotion from "@components/ui/useDecorationMotion";


function HomeContact() {
  const { t } = useTranslation();
  const moonClipId = useId();
  const decorationRef = useDecorationMotion();

  const handleCopy = (value: string) => {
    navigator.clipboard.writeText(value).then(() => toast.success(t("copyDiscordInfo")));
  };

  return (
    <Box component="section" aria-labelledby="contact-title" className="home-contact portfolio-section" sx={{ py: { xs: 6, sm: 8, md: 12 }, containerType: "inline-size", containerName: "home-contact" }}>
      <Box className="contact-composition" sx={{ display: "grid", gridTemplateColumns: "1fr", "@container home-contact (min-width: 1000px)": { gridTemplateColumns: "minmax(0, 1.5fr) minmax(0, 0.7fr)", alignItems: "center", gap: 9 } }}>
        <Box className="contact-content" sx={{ minWidth: 0, py: 3, "@container home-contact (min-width: 1000px)": { py: 0 } }}>
          <H2 id="contact-title" className="portfolio-heading">{t("home.contact.title")}</H2>
          <Paragraph sx={{ mt: 3, mb: 4, color: "var(--text-sub)", lineHeight: 1.8 }}>{t("home.contact.description")}</Paragraph>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: { xs: 1, md: 2 } }}>
            {CONTACT.map((item) => item.action === "copy" ? (
              <Button disableRipple key={item.name} className="contact-button" variant="outlined" aria-label={`${item.name} · ${t("home.contact.copyAccount")}`} onClick={() => handleCopy(item.link)} startIcon={item.icon}>{item.name}</Button>
            ) : (
              <Button disableRipple key={item.name} className="contact-button" variant="outlined" component="a" aria-label={item.link.startsWith("mailto:") ? item.name : `${item.name} · ${t("home.contact.opensInNewTab")}`} href={item.link} target={item.link.startsWith("mailto:") ? undefined : "_blank"} rel="noopener noreferrer" startIcon={item.icon}>{item.name}</Button>
            ))}
          </Box>
        </Box>
        <Box ref={decorationRef} className="contact-decoration" aria-hidden="true">
          <svg className="contact-orbit" viewBox="0 0 400 400" aria-hidden="true" focusable="false">
            <defs><clipPath id={moonClipId}><circle cx="200" cy="200" r="72" /></clipPath></defs>
            <circle cx="200" cy="200" r="174" className="contact-outer-ring" />
            <g className="contact-orbit-dial">
              {Array.from({ length: 60 }, (_, index) => <line key={index} x1="200" y1="26" x2="200" y2={index % 5 === 0 ? "42" : "32"} transform={`rotate(${index * 6} 200 200)`} />)}
            </g>
            <circle cx="200" cy="200" r="134" />
            <path className="contact-arc" d="M66 200a134 134 0 0 1 134-134M334 200a134 134 0 0 1-134 134" />
            <ellipse cx="200" cy="200" rx="184" ry="58" transform="rotate(-24 200 200)" />
            <g className="contact-rays">
              {Array.from({ length: 8 }, (_, index) => <line key={index} x1="200" y1="96" x2="200" y2="120" transform={`rotate(${index * 45} 200 200)`} />)}
            </g>
            <circle cx="200" cy="200" r="82" />
            <circle cx="200" cy="200" r="72" className="contact-moon" />
            <g clipPath={`url(#${moonClipId})`}>
              <circle cx="231" cy="185" r="76" className="contact-moon-shadow" />
              <circle cx="164" cy="209" r="11" opacity="0.5" />
              <circle cx="182" cy="243" r="5" opacity="0.5" />
            </g>
            <g className="contact-stars">
              <path d="M326 126h20m-10-10v20M60 276h14m-7-7v14" />
              <circle cx="336" cy="126" r="6" />
              <circle cx="294" cy="318" r="3" />
              <circle cx="98" cy="91" r="2" />
            </g>
          </svg>
        </Box>
      </Box>
    </Box>
  );
}

export default HomeContact;
