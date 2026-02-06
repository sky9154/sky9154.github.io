import { ReactNode } from "react";
import { Paper } from "@mui/material";


const BentoCard = ({
  children,
  colSpan = 1,
  rowSpan = 1
}: {
  children: ReactNode;
  colSpan?: number;
  rowSpan?: number;
}) => {
  return (
    <Paper elevation={0} sx={{
      gridColumn: { xs: "span 1", md: `span ${colSpan}` },
      gridRow: { xs: "auto", md: `span ${rowSpan}` },
      borderRadius: 4,
      border: "2px solid",
      bgcolor: "color-mix(in srgb, var(--card-bg), transparent 85%)",
      color: "var(--text-main)",
      backdropFilter: "blur(10px)",
      p: 3,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      transition: "transform 0.1s ease-in-out, border-color 0.1s",
      "&:hover": { transform: "translateY(-4px)" }
    }}>
      {children}
    </Paper>
  );
};

export default BentoCard;