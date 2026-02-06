import { Box, Container } from "@mui/material";
import ProfileCard from "@/components/about/ProfileCard";
import TechStackCard from "@/components/about/TechStackCard";
import LocationCard from "@/components/about/LocationCard";
import InterestCard from "@/components/about/InterestCard";
import ExperienceCard from "@/components/about/ExperienceCard";


const About = () => {
  return (
    <Container maxWidth="lg" sx={{
      flexGrow: 1,
      pt: "84px",
      my: 4,
      minHeight: "100dvh"
    }}>
      <Box sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "repeat(4, 1fr)" },
        gridAutoRows: "minmax(180px, auto)",
        gap: 3
      }}>
        <ProfileCard />
        <TechStackCard />
        <LocationCard />
        <InterestCard />
        <ExperienceCard />
      </Box>
    </Container>
  );
};

export default About;