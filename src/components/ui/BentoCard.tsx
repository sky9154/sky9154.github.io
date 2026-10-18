import type { ReactNode } from "react";
import { Paper } from "@mui/material";


interface BentoCardProps {
  children: ReactNode;
  component?: "article" | "div";
  className?: string;
  colSpan?: number;
  rowSpan?: number;
}

function BentoCard({
  children,
  component = "div",
  className,
  colSpan = 1,
  rowSpan = 1
}: BentoCardProps) {
  return (
    <Paper component={component} className={`bento-card${className ? ` ${className}` : ""}`} elevation={0} sx={{
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
}

export default BentoCard;
