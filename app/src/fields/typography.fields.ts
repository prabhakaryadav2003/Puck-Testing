export const createTypographyFields = (prefix: string) => ({
  [`${prefix}FontSize`]: {
    type: "number",
  },

  [`${prefix}FontWeight`]: {
    type: "select",
    options: [
      {
        label: "Normal",
        value: "400",
      },
      {
        label: "Medium",
        value: "500",
      },
      {
        label: "Semi Bold",
        value: "600",
      },
      {
        label: "Bold",
        value: "700",
      },
    ],
  },

  [`${prefix}FontStyle`]: {
    type: "select",
    options: [
      {
        label: "Normal",
        value: "normal",
      },
      {
        label: "Italic",
        value: "italic",
      },
    ],
  },

  [`${prefix}TextDecoration`]: {
    type: "select",
    options: [
      {
        label: "None",
        value: "none",
      },
      {
        label: "Underline",
        value: "underline",
      },
    ],
  },

  [`${prefix}Color`]: {
    type: "text",
  },
});
