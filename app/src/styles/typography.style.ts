import { CSSProperties } from "react";

export const getTypographyStyle = (
  prefix: string,
  props: Record<string, any>,
): CSSProperties => {
  return {
    fontSize: `${props[`${prefix}FontSize`]}px`,
    fontWeight: props[`${prefix}FontWeight`],
    fontStyle: props[`${prefix}FontStyle`],
    textDecoration: props[`${prefix}TextDecoration`],
    color: props[`${prefix}Color`],
  };
};
