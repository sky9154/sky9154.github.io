import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { Box, IconButton } from "@mui/material";
import { Paragraph } from "@components/ui/Typography";


interface PaginationControlProps {
  page: number;
  hasMore: boolean;
  loading: boolean;
  onPrev: () => void;
  onNext: () => void;
}

const PaginationControl = ({ page, hasMore, loading, onPrev, onNext }: PaginationControlProps) => {
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
        sx={{
          p: 1,
          border: "2px solid",
          borderColor: "var(--text-main)",
          color: "var(--text-main)",
          opacity: (page === 1) ? 0.3 : 1,
          fontSize: "16px",
          width: "42px",
          height: "42px",
          "&:hover": {
            border: "2px solid",
            bgcolor: "color-mix(in srgb, var(--white), transparent 40%)",
            transform: "translateY(-2px)"
          }
        }}
      >
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
        sx={{
          p: 1,
          border: "2px solid",
          borderColor: "var(--text-main)",
          color: "var(--text-main)",
          opacity: !hasMore ? 0.3 : 1,
          fontSize: "16px",
          width: "42px",
          height: "42px",
          "&:hover": {
            border: "2px solid",
            bgcolor: "color-mix(in srgb, var(--white), transparent 40%)",
            transform: "translateY(-2px)"
          }
        }}
      >
        <FaChevronRight />
      </IconButton>
    </Box>
  );
};

export default PaginationControl;