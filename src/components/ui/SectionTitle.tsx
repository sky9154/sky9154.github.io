import { ReactNode } from "react";
import { H2 } from "@components/ui/Typography";


interface SectionTitleProps {
  children: ReactNode;
}

const SectionTitle = ({ children }: SectionTitleProps) => {
  return (
    <H2 sx={{
      fontSize: {
        xs: "26px",
        sm: "32px"
      },
      lineHeight: 1.3,
      fontWeight: 700
    }}>
      {children}
    </H2>
  );
};

export default SectionTitle;
