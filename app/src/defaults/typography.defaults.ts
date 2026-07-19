export interface TypographyDefaults {
  fontSize?: number;
  fontWeight?: string;
  fontStyle?: string;
  textDecoration?: string;
  color?: string;
}

export const createTypographyDefaults = (
  prefix: string,
  defaults: TypographyDefaults = {},
) => ({
  [`${prefix}FontSize`]: defaults.fontSize ?? 16,

  [`${prefix}FontWeight`]: defaults.fontWeight ?? "400",

  [`${prefix}FontStyle`]: defaults.fontStyle ?? "normal",

  [`${prefix}TextDecoration`]: defaults.textDecoration ?? "none",

  [`${prefix}Color`]: defaults.color ?? "#000000",
});
