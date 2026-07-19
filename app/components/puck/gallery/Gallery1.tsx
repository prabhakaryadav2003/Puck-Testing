import { ComponentConfig } from "@puckeditor/core";

export interface Gallery1Props {
  sectionId: string;
  title: string;
  subtitle: string;

  image1: string;
  image2: string;
  image3: string;
  image4: string;
  image5: string;
  image6: string;
}

export const Gallery1: ComponentConfig<Gallery1Props> = {
  fields: {
    sectionId: {
      type: "text",
    },

    title: {
      type: "text",
    },

    subtitle: {
      type: "textarea",
    },

    image1: {
      type: "text",
    },

    image2: {
      type: "text",
    },

    image3: {
      type: "text",
    },

    image4: {
      type: "text",
    },

    image5: {
      type: "text",
    },

    image6: {
      type: "text",
    },
  },

  defaultProps: {
    sectionId: "gallery",

    title: "Our Gallery",

    subtitle:
      "Take a look at our delicious dishes and beautiful dining experience.",

    image1: "https://picsum.photos/600/600?random=1",
    image2: "https://picsum.photos/600/600?random=2",
    image3: "https://picsum.photos/600/600?random=3",
    image4: "https://picsum.photos/600/600?random=4",
    image5: "https://picsum.photos/600/600?random=5",
    image6: "https://picsum.photos/600/600?random=6",
  },

  render: ({
    sectionId,
    title,
    subtitle,
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
  }) => {
    const images = [image1, image2, image3, image4, image5, image6];

    return (
      <section id={sectionId} className='py-20 bg-white'>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='text-center mb-12'>
            <p className='text-orange-600 font-semibold uppercase tracking-wider'>
              Gallery
            </p>

            <h2 className='mt-2 text-4xl font-bold text-gray-900'>{title}</h2>

            <p className='mt-4 text-gray-600 max-w-2xl mx-auto'>{subtitle}</p>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {images.map((image, index) => (
              <div
                key={index}
                className='overflow-hidden rounded-2xl shadow-md group'
              >
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className='w-full h-72 object-cover transition-transform duration-300 group-hover:scale-105'
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  },
};
