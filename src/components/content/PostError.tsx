import { useNavigate } from "react-router-dom";
import { FaExclamationTriangle, FaArrowLeft, FaRedo } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { Box, Button } from "@mui/material";

import { H1, H3 } from "@components/ui/Typography";
import type { PostCollection } from "@/services/notionApi";


interface PostErrorProps {
  collection?: PostCollection;
  onRetry?: () => void;
  backPath?: string;
}

function PostError({ onRetry, backPath = "/articles", collection = "articles" }: PostErrorProps) {
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
      py: 10,
      border: "1px solid var(--color-border-subtle)",
      borderRadius: "var(--radius-lg)",
      bgcolor: "var(--color-surface-subtle)"
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
        {t(`${collection}.post.error.title`)}
      </H1>
      <H3 sx={{
        color: "var(--text-sub)",
        fontSize: "16px",
        width: "100%",
        lineHeight: 1.6,
        mb: 4
      }}>
        {t(`${collection}.post.error.description`)}
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
              bgcolor: "var(--color-accent)",
              color: "var(--main-bg)",
              "&:hover": { bgcolor: "color-mix(in srgb, var(--color-accent), var(--color-bg) 12%)" }
            }}>
            {t(`${collection}.retry`)}
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
          {t(`${collection}.post.back`)}
        </Button>
      </Box>
    </Box>
  );
}

export default PostError;
