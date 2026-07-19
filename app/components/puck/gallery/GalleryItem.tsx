import { ComponentConfig } from "@puckeditor/core";

export interface GalleryItemProps {
  image: string;
  alt: string;
  caption: string;
  imageHeight: "auto" | "sm" | "md" | "lg";
  objectFit: "cover" | "contain";
  rounded: "none" | "md" | "xl" | "2xl";
}

export const GalleryItem: ComponentConfig<GalleryItemProps> = {
  fields: {
    image: {
      type: "text",
    },

    alt: {
      type: "text",
    },

    caption: {
      type: "text",
    },

    imageHeight: {
      type: "select",
      options: [
        { label: "Auto", value: "auto" },
        { label: "Small", value: "sm" },
        { label: "Medium", value: "md" },
        { label: "Large", value: "lg" },
      ],
    },

    objectFit: {
      type: "select",
      options: [
        { label: "Cover", value: "cover" },
        { label: "Contain", value: "contain" },
      ],
    },

    rounded: {
      type: "select",
      options: [
        { label: "None", value: "none" },
        { label: "Medium", value: "md" },
        { label: "XL", value: "xl" },
        { label: "2XL", value: "2xl" },
      ],
    },
  },

  defaultProps: {
    image: "https://picsum.photos/800/1000?random=1",
    alt: "Gallery Image",
    caption: "Beautiful gallery image",
    imageHeight: "auto",
    objectFit: "cover",
    rounded: "2xl",
  },

  render: ({ image, alt, caption, imageHeight, objectFit, rounded }) => {
    const heights = {
      auto: "",
      sm: "h-56",
      md: "h-72",
      lg: "h-96",
    };

    const radius = {
      none: "rounded-none",
      md: "rounded-md",
      xl: "rounded-xl",
      "2xl": "rounded-2xl",
    };

    return (
      <button
        type='button'
        className={`group relative w-full overflow-hidden shadow ${radius[rounded]} gallery-item`}
        data-gallery-image={image}
        data-gallery-alt={alt}
        data-gallery-caption={caption}
      >
        <img
          src={image}
          alt={alt}
          className={`
            w-full
            ${heights[imageHeight]}
            ${imageHeight === "auto" ? "h-auto" : ""}
            ${objectFit === "cover" ? "object-cover" : "object-contain bg-gray-100"}
            transition-transform duration-300 group-hover:scale-105
          `}
        />
      </button>
    );
  },
};
