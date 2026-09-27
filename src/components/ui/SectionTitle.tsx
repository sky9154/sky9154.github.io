import { ReactNode } from "react";
import { H2 } from "@components/ui/Typography";


interface SectionTitleProps {
  children: ReactNode;
  index?: string;
}

const SectionTitle = ({ children, index }: SectionTitleProps) => {
  return (
    <H2 className="section-title" sx={{
      fontSize: { xs: "24px", sm: "28px" },
      lineHeight: 1.3,
      fontWeight: 700
    }}>
      {index && <span className="section-index decorative-label" aria-hidden="true">{index}</span>}
      {children}
    </H2>
  );
};

export default SectionTitle;