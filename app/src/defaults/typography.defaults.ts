export interface TypographyDefaults {
  fontSize?: number;
  fontWeight?: string;
  fontStyle?: string;
  textDecoration?: string;
  color?: string;
}

export type TypographyProps<T extends string> = {
  [K in
    | `${T}FontSize`
    | `${T}FontWeight`
    | `${T}FontStyle`
    | `${T}TextDecoration`
    | `${T}Color`]: K extends `${string}FontSize` ? number : string;
};

export function createTypographyDefaults<T extends string>(
  prefix: T,
  defaults: TypographyDefaults = {},
): TypographyProps<T> {
  return {
    [`${prefix}FontSize`]: defaults.fontSize ?? 16,
    [`${prefix}FontWeight`]: defaults.fontWeight ?? "400",
    [`${prefix}FontStyle`]: defaults.fontStyle ?? "normal",
    [`${prefix}TextDecoration`]: defaults.textDecoration ?? "none",
    [`${prefix}Color`]: defaults.color ?? "#000000",
  } as TypographyProps<T>;
}
