import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { Box, IconButton } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Paragraph } from "@components/ui/Typography";


interface PaginationControlProps {
  page: number;
  hasMore: boolean;
  loading: boolean;
  onPrev: () => void;
  onNext: () => void;
}

const PaginationControl = ({ page, hasMore, loading, onPrev, onNext }: PaginationControlProps) => {
  const { t } = useTranslation();

  if (page === 1 && !hasMore) {
    return null;
  }

  return (
    <Box sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: 4,
      mt: 8
    }}>
      <IconButton
        onClick={onPrev}
        disabled={page === 1 || loading}
        aria-label={t("blog.previousPage")}
        sx={{
          p: 1,
          border: "2px solid",
          borderColor: "var(--text-main)",
          color: "var(--text-main)",
          opacity: (page === 1) ? 0.3 : 1,
          fontSize: "16px",
          width: "44px",
          height: "44px",
          transition: "background-color 180ms cubic-bezier(0.16, 1, 0.3, 1), border-color 180ms cubic-bezier(0.16, 1, 0.3, 1)",
          "&:hover": {
            border: "2px solid",
            bgcolor: "color-mix(in srgb, var(--text-main), transparent 88%)"
          },
          "&:focus-visible": {
            outline: "3px solid color-mix(in srgb, var(--text-main), transparent 45%)",
            outlineOffset: "3px"
          }
        }}>
        <FaChevronLeft />
      </IconButton>
      <Paragraph sx={{
        fontSize: "16px",
        fontWeight: 600,
        opacity: (loading) ? 0.5 : 1,
        color: "var(--text-main)"
      }}>
        {page}
      </Paragraph>
      <IconButton
        onClick={onNext}
        disabled={!hasMore || loading}
        aria-label={t("blog.nextPage")}
        sx={{
          p: 1,
          border: "2px solid",
          borderColor: "var(--text-main)",
          color: "var(--text-main)",
          opacity: (!hasMore) ? 0.3 : 1,
          fontSize: "16px",
          width: "44px",
          height: "44px",
          transition: "background-color 180ms cubic-bezier(0.16, 1, 0.3, 1), border-color 180ms cubic-bezier(0.16, 1, 0.3, 1)",
          "&:hover": {
            border: "2px solid",
            bgcolor: "color-mix(in srgb, var(--text-main), transparent 88%)"
          },
          "&:focus-visible": {
            outline: "3px solid color-mix(in srgb, var(--text-main), transparent 45%)",
            outlineOffset: "3px"
          }
        }}>
        <FaChevronRight />
      </IconButton>
    </Box>
  );
};

export default PaginationControl;