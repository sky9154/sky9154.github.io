import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Box } from "@mui/material";
import { H1, H3 } from "@components/ui/Typography";
import { useThemeModeContext } from "@context/ThemeModeContext";
import ErrorPageB from "@assets/images/illustration/error-page-b.svg";
import ErrorPageG from "@assets/images/illustration/error-page-g.svg";


const NotFound = () => {
  const { themeMode } = useThemeModeContext();
  const { t } = useTranslation();

  const illustration = (themeMode === "dark") ? ErrorPageB : ErrorPageG;

  return (
    <Box sx={{
      height: "100dvh",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      justifyContent: "center",
      bgcolor: "var(--main-bg)",
      color: "var(--text-main)"
    }}>
      <Box sx={{
        maxWidth: "300px",
        height: "300px",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "contain"
      }}>
        <img width="100%" src={illustration} alt="Error 404" />
      </Box>
      <H1 sx={{ fontSize: "56px", fontWeight: "700", marginTop: "16px" }}>
        {t("notFound.title")}
      </H1>
      <H3 sx={{ fontWeight: "500", marginTop: "8px", color: "var(--text-sub)" }}>
        {t("notFound.description")}
      </H3>
      <Box
        component={Link}
        to="/"
        sx={{
          display: "block",
          marginTop: "16px",
          fontWeight: "600",
          textDecoration: "underline",
          outline: "none",
          color: "var(--text-main)",
          transition: "all 0.2s ease",
          cursor: "pointer",

          "&:hover": {
            textDecoration: "none"
          }
        }}>
        {t("notFound.backHome")}
      </Box>
    </Box>
  );
};

export default NotFound;