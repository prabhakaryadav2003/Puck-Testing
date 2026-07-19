import { ComponentConfig } from "@puckeditor/core";
import { HeroProps } from "../types/puck/hero.types";

export const heroFields: ComponentConfig<HeroProps>["fields"] = {
  badge: {
    type: "text",
    label: "Badge",
  },

  subtitle: {
    type: "text",
    label: "Subtitle",
  },

  title: {
    type: "text",
    label: "Title",
  },

  description: {
    type: "textarea",
    label: "Description",
  },

  image: {
    type: "text",
    label: "Image URL",
  },

  imageAlt: {
    type: "text",
    label: "Image Alt",
  },

  backgroundImage: {
    type: "text",
    label: "Background Image",
  },

  backgroundVideo: {
    type: "text",
    label: "Background Video",
  },

  overlay: {
    type: "radio",
    label: "Overlay",
    options: [
      {
        label: "Enabled",
        value: true,
      },
      {
        label: "Disabled",
        value: false,
      },
    ],
  },

  overlayOpacity: {
    type: "number",
    label: "Overlay Opacity",
    min: 0,
    max: 100,
  },

  primaryButton: {
    type: "object",
    label: "Primary Button",
    objectFields: {
      text: {
        type: "text",
        label: "Text",
      },

      href: {
        type: "text",
        label: "Link",
      },

      target: {
        type: "select",
        label: "Target",
        options: [
          {
            label: "Same Tab",
            value: "_self",
          },
          {
            label: "New Tab",
            value: "_blank",
          },
        ],
      },
    },
  },

  secondaryButton: {
    type: "object",
    label: "Secondary Button",
    objectFields: {
      text: {
        type: "text",
        label: "Text",
      },

      href: {
        type: "text",
        label: "Link",
      },

      target: {
        type: "select",
        label: "Target",
        options: [
          {
            label: "Same Tab",
            value: "_self",
          },
          {
            label: "New Tab",
            value: "_blank",
          },
        ],
      },
    },
  },

  stats: {
    type: "array",
    label: "Statistics",
    arrayFields: {
      value: {
        type: "text",
        label: "Value",
      },

      label: {
        type: "text",
        label: "Label",
      },
    },
    defaultItemProps: {
      value: "10+",
      label: "Years",
    },
  },

  features: {
    type: "array",
    label: "Features",
    arrayFields: {
      icon: {
        type: "text",
        label: "Icon",
      },

      title: {
        type: "text",
        label: "Title",
      },

      description: {
        type: "textarea",
        label: "Description",
      },
    },
    defaultItemProps: {
      icon: "🍽️",
      title: "Feature",
      description: "Feature description",
    },
  },
};
