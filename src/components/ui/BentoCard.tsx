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
    <Paper
      elevation={0}
      sx={{
        gridColumn: {
          xs: "span 1",
          md: `span ${colSpan}`
        },
        gridRow: {
          xs: "auto",
          md: `span ${rowSpan}`
        },
        borderRadius: 4,
        border: "2px solid",
        borderColor: "color-mix(in srgb, var(--text-main), transparent 45%)",
        bgcolor: "color-mix(in srgb, var(--card-bg) 15%, var(--main-bg))",
        color: "var(--text-main)",
        p: {
          xs: 2.5,
          sm: 3
        },
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",

        transition: "border-color 0.15s ease, background-color 0.15s ease",

        "&:hover": {
          borderColor: "color-mix(in srgb, var(--text-main), transparent 20%)"
        }
      }}
    >
      {children}
    </Paper>
  );
};

export default BentoCard;