import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Box, Button, Stack } from "@mui/material";
import { FaArrowRightLong } from "react-icons/fa6";
import { H1, Paragraph } from "@components/ui/Typography";


const HomeProfile = () => {
  const { t } = useTranslation();
  const [profileLabel, profileCode] = t("home.profileLabel").split(" / ");

  const pageLinks = [
    { key: "about", to: "/about" },
    { key: "projects", to: "/projects" },
    { key: "blog", to: "/blog" }
  ];

  return (
    <Box sx={{
      minWidth: 0,
      p: {
        xs: 2.5,
        sm: 3.5,
        md: 3.5
      },
      position: "relative",
      display: "flex",
      flexDirection: "column",
      color: "var(--text-main)",
      background: {
        xs: "transparent",
        md: `linear-gradient(
          90deg,
          color-mix(in srgb, var(--text-main), transparent 96%) 0,
          transparent 28%
        )`
      }
    }}>
      <Stack sx={{
        width: "100%",
        height: "100%",
        minHeight: 0,
        gap: { xs: 2.5, md: 2 }
      }}>
        <Box>
          <Paragraph sx={{
            mb: 1.5,
            color: "var(--text-sub)",
            fontSize: { xs: "10px", sm: "12px" },
            fontWeight: 700,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            overflowWrap: "normal",
            wordBreak: "keep-all"
          }}>
            {profileLabel}
            {profileCode && (
              <>
                {" / "}
                <Box component="span" sx={{ whiteSpace: "nowrap" }}>
                  {profileCode}
                </Box>
              </>
            )}
          </Paragraph>
          <H1 sx={{
            fontSize: {
              xs: "64px",
              sm: "80px",
              md: "clamp(64px, 5.2vw, 80px)"
            },
            lineHeight: 0.9,
            fontWeight: 700,
            letterSpacing: "-0.065em"
          }}>
            {t("home.name")}
          </H1>
          <Paragraph sx={{
            mt: { xs: 2, md: 1.5 },
            color: "var(--text-sub)",
            fontSize: "14px",
            lineHeight: 1.5
          }}>
            {t("home.intro")}
          </Paragraph>
          <Paragraph sx={{
            mt: 1.25,
            maxWidth: { xs: "34ch", md: "none" },
            fontSize: "16px",
            fontWeight: 600,
            lineHeight: 1.55,
            overflowWrap: "anywhere"
          }}>
            {t("home.statement")}
          </Paragraph>
        </Box>
        <Stack
          component="nav"
          aria-label={t("home.navigation")}
          sx={{ minWidth: 0 }}>
          {pageLinks.map((item, index) => (
            <Button
              component={Link}
              key={item.key}
              to={item.to}
              sx={{
                position: "relative",
                display: "grid",
                gridTemplateColumns: "36px minmax(0, 1fr) auto",
                alignItems: "center",
                columnGap: { xs: 1.25, sm: 1.5 },
                minHeight: { xs: "62px", md: "58px" },
                pl: 1.25,
                pr: 2,
                py: 1,
                borderRadius: 0,
                borderTop: "1px solid color-mix(in srgb, var(--text-main), transparent 88%)",
                color: "var(--text-main)",
                textAlign: "left",
                textTransform: "none",
                "&::before": {
                  position: "absolute",
                  top: "18%",
                  bottom: "18%",
                  left: 0,
                  width: "2px",
                  bgcolor: "currentColor",
                  content: "''",
                  opacity: 0,
                  transform: "scaleY(0.4)",
                  transition: "opacity 180ms ease, transform 180ms cubic-bezier(0.22, 1, 0.36, 1)"
                },
                "& .home-link-copy, & .home-link-arrow": { transition: "transform 180ms cubic-bezier(0.22, 1, 0.36, 1)" },
                "&:focus-visible": { outline: "2px solid var(--text-main)", outlineOffset: "3px" },
                "@media (hover: hover) and (pointer: fine)": {
                  "&:hover": { bgcolor: "color-mix(in srgb, var(--text-main), transparent 96%)" },
                  "&:hover::before": { opacity: 1, transform: "scaleY(1)" },
                  "&:hover .home-link-copy": { transform: "translateX(5px)" },
                  "&:hover .home-link-arrow": { transform: "translateX(4px)" }
                },
                "&:active": { transform: "scale(0.99)" }
              }}>
              <Box component="span" sx={{
                color: "var(--text-sub)",
                fontSize: "10px",
                fontWeight: 700,
                letterSpacing: "0.12em",
                fontVariantNumeric: "tabular-nums",
                whiteSpace: "nowrap"
              }}>
                {String(index + 1).padStart(2, "0")}
              </Box>
              <Box className="home-link-copy" sx={{ minWidth: 0 }}>
                <Paragraph sx={{
                  fontSize: "16px",
                  fontWeight: 700,
                  lineHeight: 1.3,
                  overflowWrap: "anywhere"
                }}>
                  {t(`navbar.${item.key}`)}
                </Paragraph>
                <Paragraph sx={{
                  mt: 0.25,
                  color: "var(--text-sub)",
                  fontSize: "12px",
                  lineHeight: 1.35,
                  overflowWrap: "anywhere"
                }}>
                  {t(`home.links.${item.key}`)}
                </Paragraph>
              </Box>
              <Box
                component={FaArrowRightLong}
                className="home-link-arrow"
                aria-hidden="true"
                sx={{ fontSize: "16px" }} />
            </Button>
          ))}
        </Stack>
        <Box sx={{
          mt: "auto",
          pt: 0.5,
          display: "grid",
          gridTemplateColumns: "auto minmax(0, 1fr)",
          alignItems: "center",
          gap: 1.5
        }}>
          <Box aria-hidden="true" sx={{
            width: "6px",
            height: "6px",
            borderRadius: "50%",
            bgcolor: "var(--text-main)"
          }} />
          <Box>
            <Paragraph sx={{
              color: "var(--text-sub)",
              fontSize: "10px",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase"
            }}>
              {t("home.focusLabel")}
            </Paragraph>
            <Paragraph sx={{
              mt: 0.5,
              fontSize: "12px",
              fontWeight: 600,
              lineHeight: 1.45,
              overflowWrap: "anywhere"
            }}>
              {t("home.focus")}
            </Paragraph>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default HomeProfile;
