import { useNavigate } from "react-router-dom";
import { FaExclamationTriangle, FaArrowLeft, FaRedo } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { Box, Button } from "@mui/material";
import { H1, H3 } from "@components/ui/Typography";


interface PostErrorProps {
  onRetry?: () => void;
  backPath?: string;
}

const PostError = ({ onRetry, backPath = "/blog" }: PostErrorProps) => {
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
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 2 }}>
        {onRetry && (
          <Button
            variant="contained"
            startIcon={<FaRedo />}
            onClick={onRetry}
            sx={{
              px: 3,
              minHeight: "44px",
              borderRadius: "10px",
              textTransform: "none",
              fontWeight: 700,
              bgcolor: "var(--text-main)",
              color: "var(--main-bg)",
              "&:hover": { bgcolor: "color-mix(in srgb, var(--text-main), transparent 12%)" }
            }}>
            {t("blog.retry")}
          </Button>
        )}
        <Button
          variant="outlined"
          startIcon={<FaArrowLeft />}
          onClick={() => navigate(backPath)}
          sx={{
            px: 3,
            minHeight: "44px",
            borderRadius: "10px",
            textTransform: "none",
            fontSize: "16px",
            fontWeight: 600,
            border: "2px solid var(--text-main)",
            color: "var(--text-main)",
            transition: "background-color 180ms cubic-bezier(0.16, 1, 0.3, 1)",
            "&:hover": {
              borderColor: "var(--text-main)",
              border: "2px solid",
              bgcolor: "color-mix(in srgb, var(--card-bg), transparent 60%)"
            }
          }}>
          {t("blog.post.back")}
        </Button>
      </Box>
    </Box>
  );
};

export default PostError;