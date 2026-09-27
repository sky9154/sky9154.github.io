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
    <Paper className="bento-card" elevation={0} sx={{
      minWidth: 0,
      gridColumn: {
        xs: "span 1",
        md: `span ${colSpan}`
      },
      gridRow: {
        xs: "auto",
        md: `span ${rowSpan}`
      },
      borderRadius: "var(--radius-lg)",
      border: "var(--stroke-thin) solid",
      borderColor: "var(--color-border)",
      bgcolor: "var(--color-surface)",
      boxShadow: "none",
      color: "var(--text-main)",
      p: {
        xs: 2.5,
        sm: 3
      },
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",

      transition: "border-color var(--motion-normal) var(--ease-standard), background-color var(--motion-normal) var(--ease-standard)",

      "&:hover": {
        borderColor: "var(--color-accent-muted)"
      }
    }}>
      <span className="card-mark" aria-hidden="true" />
      {children}
    </Paper>
  );
};

export default BentoCard;