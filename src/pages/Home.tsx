import { useTranslation } from "react-i18next";
import { Box, Container } from "@mui/material";
import SignalPortrait from "@components/home/SignalPortrait";
import HomeProfile from "@components/home/HomeProfile";


const Home = () => {
  const { t } = useTranslation();
  return (
    <Container maxWidth={false} className="home-shell" sx={{
      width: "100%", maxWidth: "1440px", mx: "auto", flexGrow: 1,
      display: "flex", flexDirection: "column", justifyContent: "center",
      pt: { xs: "calc(var(--navbar-height) + 24px)", md: "calc(var(--navbar-height) + 36px)" },
      pb: { xs: 5, md: 7 }, px: { xs: 2, sm: 4, lg: 6 }
    }}>
      <Box className="home-composition" sx={{
        display: "grid", width: "100%", alignItems: "center",
        gridTemplateColumns: { xs: "1fr", md: "minmax(0, 1.2fr) minmax(0, 1fr)" },
        minHeight: { md: "620px" }, pb: { xs: 3, md: 4 },
        gap: { xs: 1, md: 3, lg: 6 }, color: "var(--text-main)"
      }}>
        <SignalPortrait label={t("home.artworkLabel")} />
        <HomeProfile />
      </Box>
    </Container>
  );
};
export default Home;