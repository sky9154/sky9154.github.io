import type { FC, ElementType } from "react";
import clsx from "clsx";
import { Box, type BoxProps } from "@mui/material";
import { styled } from "@mui/material/styles";

import styles from "@assets/css/modules/typography.module.css";


const StyledBox = styled(Box)<{
  texttransformstyle?: TypographyProps["textTransform"];
}>(({ texttransformstyle }) => ({
  textTransform: texttransformstyle || "none"
}));

interface TypographyProps {
  ellipsis?: boolean;
  textTransform?: "none" | "capitalize" | "uppercase" | "lowercase" | "initial" | "inherit";
}

function createTypography(componentTag: ElementType, defaultClass: string): FC<BoxProps & TypographyProps> {
  function TypographyComponent({
    children,
    className,
    ellipsis,
    textTransform,
    ...props
  }: BoxProps & TypographyProps) {
    return (
      <StyledBox
        texttransformstyle={textTransform}
        component={componentTag}
        className={clsx(
          styles["base"],
          defaultClass,
          { [styles["ellipsis"]]: ellipsis },
          className
        )}
        {...props}>
        {children}
      </StyledBox>
    );
  }

  TypographyComponent.displayName = `Typography(${componentTag})`;

  return TypographyComponent;
}

export const H1 = createTypography("h1", styles["h1"]);
export const H2 = createTypography("h2", styles["h2"]);
export const H3 = createTypography("h3", styles["h3"]);
export const H4 = createTypography("h4", styles["h4"]);
export const H5 = createTypography("h5", styles["h5"]);
export const Paragraph = createTypography("p", styles["paragraph"]);
