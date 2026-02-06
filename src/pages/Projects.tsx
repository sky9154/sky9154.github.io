import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Container, Box, Button } from "@mui/material";
import { H1, H3 } from "@components/ui/Typography";
import { FaLaptopCode, FaUserAstronaut, FaArrowRight } from "react-icons/fa";


const Projects = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <Container maxWidth="lg" sx={{
      flexGrow: 1,
      pt: "84px",
      my: 4,
      minHeight: "100dvh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      color: "var(--text-main)",
    }}>
      <Box sx={{
        fontSize: "80px",
        mb: 3,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        opacity: 0.9
      }}>
        <FaLaptopCode />
      </Box>
      <H1 sx={{ fontSize: "24px", fontWeight: "700", mb: 1 }}>
        {t("projects.underConstruction")}
      </H1>
      <H3 sx={{
        color: "var(--text-sub)",
        fontSize: "16px",
        maxWidth: "400px",
        lineHeight: 1.6,
        mb: 4
      }}>
        {t("projects.description")}
      </H3>
      <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", justifyContent: "center" }}>
        <Button
          variant="contained"
          startIcon={<FaUserAstronaut />}
          onClick={() => navigate("/about")}
          sx={{
            px: 4,
            py: 1.2,
            borderRadius: "8px",
            textTransform: "none",
            fontSize: "16px",
            fontWeight: 600,
            boxShadow: "none",
            color: "var(--text-main)",
            bgcolor: "color-mix(in srgb, var(--text-sub), transparent 80%)",
            "&:hover": {
              bgcolor: "color-mix(in srgb, var(--text-sub), transparent 60%)",
              boxShadow: "none",
              transform: "translateY(-4px)"
            }
          }}
        >
          {t("navbar.about")}
        </Button>
        <Button
          variant="outlined"
          endIcon={<FaArrowRight />}
          onClick={() => navigate("/blog")}
          sx={{
            px: 4,
            py: 1.2,
            borderRadius: "8px",
            textTransform: "none",
            fontSize: "16px",
            fontWeight: 600,
            boxShadow: "none",
            border: "2px solid var(--text-sub)",
            color: "var(--text-main)",
            "&:hover": {
              bgcolor: "color-mix(in srgb, var(--text-sub), transparent 60%)",
              border: "2px solid var(--text-sub)",
              boxShadow: "none",
              transform: "translateY(-4px)"
            }
          }}
        >
          {t("navbar.blog")}
        </Button>
      </Box>
    </Container>
  );
}

export default Projects;