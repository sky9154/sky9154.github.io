import { Container } from "@mui/material";

import HomeSequence from "@components/home/HomeSequence";
import HomeCapabilities from "@components/home/HomeCapabilities";
import HomeContact from "@components/home/HomeContact";


function Home() {
  return (
    <Container maxWidth={false} className="home-shell" sx={{
      width: "100%", maxWidth: "1440px", mx: "auto", flexGrow: 1,
      pt: { xs: "calc(var(--navbar-height) + 16px)", md: "var(--navbar-height)" },
      pb: { xs: 5, md: 7 }, px: { xs: 2, sm: 4, lg: 6 }
    }}>
      <HomeSequence />
      <HomeCapabilities />
      <HomeContact />
    </Container>
  );
}
export default Home;
