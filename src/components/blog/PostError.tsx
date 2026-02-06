import { useNavigate } from "react-router-dom";
import { FaExclamationTriangle, FaArrowLeft } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { Box, Button } from "@mui/material";
import { H1, H3 } from "@components/ui/Typography";


const PostError = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <Box sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      px: 2,
      py: 12,
      opacity: 0.8
    }}>
      <Box sx={{
        fontSize: "60px",
        color: "var(--red-100)",
        mb: 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
        <FaExclamationTriangle />
      </Box>
      <H1 sx={{
        color: "var(--text-main)",
        fontSize: "24px",
        fontWeight: 700,
        mb: 1
      }}>
        {t("blog.post.error.title")}
      </H1>
      <H3 sx={{
        color: "var(--text-sub)",
        fontSize: "16px",
        maxWidth: "400px",
        lineHeight: 1.6,
        mb: 4
      }}>
        {t("blog.post.error.description")}
      </H3>
      <Button
        variant="outlined"
        startIcon={<FaArrowLeft />}
        onClick={() => navigate("/blog")}
        sx={{
          px: 4,
          py: 1,
          borderRadius: "8px",
          textTransform: "none",
          fontSize: "16px",
          fontWeight: 600,
          border: "2px solid var(--text-main)",
          color: "var(--text-main)",
          transition: "0.3s",
          "&:hover": {
            borderColor: "var(--blue-200)",
            border: "2px solid",
            bgcolor: " color-mix(in srgb, var(--card-bg), transparent 60%)"
          }
        }}
      >
        {t("blog.post.back")}
      </Button>
    </Box>
  );
};

export default PostError;