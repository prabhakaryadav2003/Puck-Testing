import { ComponentConfig, DropZone } from "@puckeditor/core";

export interface GalleryProps {
  sectionId: string;
  eyebrow: string;
  title: string;
  subtitle: string;

  columns: "2" | "3" | "4";
  gap: string;
  paddingY: string;
  maxWidth: string;
  background: string;
}

export const Gallery: ComponentConfig<GalleryProps> = {
  fields: {
    sectionId: {
      type: "text",
    },

    eyebrow: {
      type: "text",
    },

    title: {
      type: "text",
      contentEditable: true,
    },

    subtitle: {
      type: "textarea",
      contentEditable: true,
    },

    columns: {
      type: "select",
      options: [
        { label: "2 Columns", value: "2" },
        { label: "3 Columns", value: "3" },
        { label: "4 Columns", value: "4" },
      ],
    },

    gap: {
      type: "select",
      options: [
        { label: "Small", value: "gap-4" },
        { label: "Medium", value: "gap-6" },
        { label: "Large", value: "gap-8" },
      ],
    },

    paddingY: {
      type: "select",
      options: [
        { label: "Small", value: "py-12" },
        { label: "Medium", value: "py-20" },
        { label: "Large", value: "py-28" },
      ],
    },

    maxWidth: {
      type: "select",
      options: [
        { label: "5XL", value: "max-w-5xl" },
        { label: "6XL", value: "max-w-6xl" },
        { label: "7XL", value: "max-w-7xl" },
        { label: "Full", value: "max-w-full" },
      ],
    },

    background: {
      type: "select",
      options: [
        { label: "White", value: "bg-white" },
        { label: "Gray", value: "bg-gray-50" },
        { label: "Dark", value: "bg-gray-900 text-white" },
      ],
    },
  },

  defaultProps: {
    sectionId: "gallery",
    eyebrow: "Gallery",
    title: "Our Gallery",
    subtitle:
      "Take a look at our delicious dishes and beautiful dining experience.",
    columns: "3",
    gap: "gap-6",
    paddingY: "py-20",
    maxWidth: "max-w-7xl",
    background: "bg-white",
  },

  render: ({
    sectionId,
    eyebrow,
    title,
    subtitle,
    columns,
    gap,
    paddingY,
    maxWidth,
    background,
  }) => {
    const gridCols = {
      "2": "grid-cols-2",
      "3": "grid-cols-3",
      "4": "grid-cols-4",
    };

    return (
      <>
        <section id={sectionId} className={`${paddingY} ${background}`}>
          <div className={`${maxWidth} mx-auto px-4 sm:px-6 lg:px-8`}>
            <div className='mb-10 lg:mb-12 text-center'>
              <p className='font-semibold uppercase tracking-wider text-orange-600'>
                {eyebrow}
              </p>

              <h2 className='mt-2 text-3xl font-bold sm:text-4xl lg:text-5xl'>
                {title}
              </h2>

              <p className='mx-auto mt-4 max-w-2xl text-sm opacity-80 sm:text-base'>
                {subtitle}
              </p>
            </div>

            <div
              className={`
          grid
          grid-cols-1
          sm:grid-cols-2
          ${columns === "2" ? "lg:grid-cols-2" : ""}
          ${columns === "3" ? "lg:grid-cols-3" : ""}
          ${columns === "4" ? "lg:grid-cols-4" : ""}
          ${gap}
          items-start
        `}
            >
              {Array.from({ length: Number(columns) }).map((_, index) => (
                <div key={index} className={`flex flex-col ${gap} min-w-0`}>
                  <DropZone zone={`column-${index}`} allow={["GalleryItem"]} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <div
          id='gallery-modal'
          className='fixed inset-0 z-50 hidden items-center justify-center bg-black/90 p-4'
        >
          <div className='relative w-full max-w-6xl'>
            <button
              type='button'
              data-gallery-close
              className='absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-2xl text-white backdrop-blur'
            >
              ×
            </button>

            <img
              data-gallery-modal-image
              className='mx-auto max-h-[85vh] max-w-full object-contain'
              alt=''
            />

            <p
              data-gallery-modal-caption
              className='mt-4 text-center text-white'
            ></p>
          </div>
        </div>
      </>
    );
  },
};
