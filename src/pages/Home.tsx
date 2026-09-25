import { useTranslation } from "react-i18next";
import { Box, Container } from "@mui/material";
import SignalPortrait from "@components/home/SignalPortrait";
import HomeProfile from "@components/home/HomeProfile";


const Home = () => {
  const { t } = useTranslation();

  return (
    <Container
      maxWidth={false}
      sx={{
        width: "100%",
        maxWidth: "clamp(1320px, 78vw, 1600px)",
        mx: "auto",
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: { xs: "flex-start", md: "center" },
        pt: { xs: "calc(84px + 32px)", md: "calc(84px + 20px)" },
        pb: { xs: 3, md: 2.5 }
      }}>
      <Box sx={{
        display: "grid",
        width: "100%",
        gridTemplateColumns: { xs: "1fr", md: "minmax(0, 1.55fr) minmax(300px, 0.85fr)" },
        height: { md: "clamp(520px, calc(100dvh - 200px), 680px)" },
        minHeight: { xs: "auto", md: "520px" },
        boxSizing: "border-box",
        overflow: "hidden",
        border: "1px solid color-mix(in srgb, var(--text-main), transparent 62%)",
        borderRadius: 3.5,
        bgcolor: "color-mix(in srgb, var(--card-bg) 10%, var(--main-bg))",
        color: "var(--text-main)"
      }}>
        <SignalPortrait label={t("home.artworkLabel")} />
        <HomeProfile />
      </Box>
    </Container>
  );
}

export default Home;
