import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Box, Button, Container, Stack } from "@mui/material";
import { FaArrowRightLong } from "react-icons/fa6";
import SignalPortrait from "@components/home/SignalPortrait";
import BentoCard from "@components/ui/BentoCard";
import { H1, Paragraph } from "@components/ui/Typography";


const Home = () => {
  const { t } = useTranslation();

  const pageLinks = [
    { key: "about", to: "/about" },
    { key: "projects", to: "/projects" },
    { key: "blog", to: "/blog" }
  ];

  return (
    <Container
      maxWidth="lg"
      sx={{
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: {
          xs: "flex-start",
          md: "center"
        },
        pt: {
          xs: "calc(84px + 20px)",
          md: "84px"
        },
        pb: {
          xs: 1.5,
          md: 0
        }
      }}>
      <Box sx={{
        display: "grid",
        width: "100%",
        gridTemplateColumns: {
          xs: "1fr",
          md: "repeat(6, minmax(0, 1fr))"
        },
        gridAutoRows: "minmax(180px, auto)",
        gap: 3
      }}>
        <SignalPortrait label={t("home.artworkLabel")} />
        <BentoCard colSpan={2} rowSpan={3}>
          <Stack spacing={3} sx={{ height: "100%" }}>
            <Box>
              <H1 sx={{
                fontSize: { xs: "64px", sm: "80px", md: "88px" },
                lineHeight: 1,
                fontWeight: 700,
                letterSpacing: "-0.06em"
              }}>
                {t("home.name")}
              </H1>
              <Paragraph sx={{
                mt: 2,
                color: "var(--text-sub)",
                fontSize: "16px",
                lineHeight: 1.65
              }}>
                {t("home.intro")}
              </Paragraph>
            </Box>

            <Stack component="nav" spacing={1} aria-label={t("home.navigation")}>
              {pageLinks.map((item) => (
                <Button
                  component={Link}
                  key={item.key}
                  to={item.to}
                  endIcon={<FaArrowRightLong />}
                  sx={{
                    minHeight: "44px",
                    px: 0,
                    justifyContent: "space-between",
                    borderRadius: 0,
                    borderBottom: "1px solid color-mix(in srgb, var(--text-main), transparent 82%)",
                    color: "var(--text-main)",
                    textTransform: "none",
                    fontSize: "16px",
                    "& .MuiButton-endIcon": {
                      transition: "transform 180ms cubic-bezier(0.22, 1, 0.36, 1)"
                    },
                    "@media (hover: hover) and (pointer: fine)": {
                      "&:hover": {
                        bgcolor: "transparent",
                        borderColor: "var(--text-main)"
                      },
                      "&:hover .MuiButton-endIcon": {
                        transform: "translateX(4px)"
                      }
                    },
                    "&:active": {
                      transform: "scale(0.99)"
                    }
                  }}
                >
                  {t(`navbar.${item.key}`)}
                </Button>
              ))}
            </Stack>
            <Box sx={{ flexGrow: 1 }} />

          </Stack>
        </BentoCard>
      </Box>
    </Container>
  );
}

export default Home;
