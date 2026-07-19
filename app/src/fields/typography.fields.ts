import type { Fields } from "@puckeditor/core";

type TypographyFieldKeys<T extends string> =
  | `${T}FontSize`
  | `${T}FontWeight`
  | `${T}FontStyle`
  | `${T}TextDecoration`
  | `${T}Color`;

export function createTypographyFields<T extends string>(
  prefix: T,
): Record<TypographyFieldKeys<T>, Fields[string]> {
  return {
    [`${prefix}FontSize`]: {
      type: "number",
    },

    [`${prefix}FontWeight`]: {
      type: "select",
      options: [
        { label: "Normal", value: "400" },
        { label: "Medium", value: "500" },
        { label: "Semi Bold", value: "600" },
        { label: "Bold", value: "700" },
      ],
    },

    [`${prefix}FontStyle`]: {
      type: "select",
      options: [
        { label: "Normal", value: "normal" },
        { label: "Italic", value: "italic" },
      ],
    },

    [`${prefix}TextDecoration`]: {
      type: "select",
      options: [
        { label: "None", value: "none" },
        { label: "Underline", value: "underline" },
      ],
    },

    [`${prefix}Color`]: {
      type: "text",
    },
  } as Record<TypographyFieldKeys<T>, Fields[string]>;
}
