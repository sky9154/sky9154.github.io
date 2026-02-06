import { FC, type ElementType } from "react";
import clsx from "clsx";
import { Box, type BoxProps } from "@mui/material";
import { styled } from "@mui/material/styles";
import styles from "@assets/css/modules/typography.module.css";


const StyledBox = styled(Box)<{
  texttransformstyle?: Props["textTransform"];
}>(({ texttransformstyle }) => ({
  textTransform: texttransformstyle || "none"
}));

type Props = {
  ellipsis?: boolean;
  textTransform?: "none" | "capitalize" | "uppercase" | "lowercase" | "initial" | "inherit";
};

const TypographyFactory = (ComponentTag: ElementType, defaultClass: string) => {
  const TypographyComponent: FC<BoxProps & Props> = ({
    children,
    className,
    ellipsis,
    textTransform,
    ...props
  }) => (
    <StyledBox
      texttransformstyle={textTransform}
      component={ComponentTag}
      className={clsx(
        styles["base"],
        defaultClass,
        { [styles["ellipsis"]]: ellipsis },
        className
      )}
      {...props}
    >
      {children}
    </StyledBox>
  );

  TypographyComponent.displayName = `Typography(${ComponentTag})`;

  return TypographyComponent;
};

export const H1 = TypographyFactory("h1", styles["h1"]);
export const H2 = TypographyFactory("h2", styles["h2"]);
export const H3 = TypographyFactory("h3", styles["h3"]);
export const H4 = TypographyFactory("h4", styles["h4"]);
export const H5 = TypographyFactory("h5", styles["h5"]);
export const H6 = TypographyFactory("h6", styles["h6"]);
export const Paragraph = TypographyFactory("p", styles["paragraph"]);
export const Small = TypographyFactory("small", styles["small"]);
export const Span = TypographyFactory("span", "");
export const Tiny = TypographyFactory("small", styles["tiny"]);