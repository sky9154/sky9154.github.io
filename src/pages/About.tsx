import { Container } from "@mui/material";

import ProfileCard from "@components/about/ProfileCard";
import ResearchHighlightsCard from "@components/about/ResearchHighlightsCard";
import WorkExperienceCard from "@components/about/WorkExperienceCard";
import EducationCard from "@components/about/EducationCard";
import TechStackCard from "@components/about/TechStackCard";


function About() {
  return (
    <Container maxWidth="lg" className="about-notebook" sx={(theme) => ({
      "--page-content-gap": theme.spacing(7),
      "--about-section-gap": { xs: theme.spacing(6), md: theme.spacing(8) },
      "--about-section-inset": { xs: theme.spacing(4), md: theme.spacing(5) },
      "--about-heading-gap": { xs: theme.spacing(3), md: theme.spacing(4) },
      "--about-item-gap": { xs: theme.spacing(4), md: theme.spacing(5) },
      "--about-copy-gap": theme.spacing(2),
      width: "100%",
      flexGrow: 1,
      display: "flex",
      flexDirection: "column",
      gap: "var(--about-section-gap)",
      pt: "calc(var(--navbar-height) + var(--page-content-gap))",
      pb: "var(--about-section-gap)",
      px: { xs: 3, sm: 4 }
    })}>
      <ProfileCard />
      <WorkExperienceCard />
      <EducationCard />
      <ResearchHighlightsCard />
      <TechStackCard />
    </Container>
  );
}

export default About;
