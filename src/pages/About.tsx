import { Box, Container } from "@mui/material";
import ProfileCard from "@components/about/ProfileCard";
import ResearchHighlightsCard from "@components/about/ResearchHighlightsCard";
import WorkExperienceCard from "@components/about/WorkExperienceCard";
import EducationCard from "@components/about/EducationCard";
import TechStackCard from "@components/about/TechStackCard";


const About = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        flexGrow: 1,
        pt: "84px",
        my: 4,
        minHeight: "100dvh"
      }}
    >
      <Box sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          md: "repeat(4, minmax(0, 1fr))"
        },
        gridAutoRows: "minmax(180px, auto)",
        gap: 3
      }}>
        <ProfileCard />
        <ResearchHighlightsCard />
        <WorkExperienceCard />
        <EducationCard />
        <TechStackCard />
      </Box>
    </Container>
  );
};

export default About;