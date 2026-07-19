import { ComponentConfig } from "@puckeditor/core";

export interface CarouselSlideProps {
  image: string;
  title: string;
  description: string;
}

export const CarouselSlide: ComponentConfig<CarouselSlideProps> = {
  fields: {
    image: {
      type: "text",
    },
    title: {
      type: "text",
    },
    description: {
      type: "textarea",
    },
  },

  defaultProps: {
    image: "https://picsum.photos/1200/500",
    title: "Slide Title",
    description: "Slide description",
  },

  render: ({ image, title, description }) => (
    <div className='flex-[0_0_100%] px-4'>
      <div className='relative rounded-xl overflow-hidden h-[500px]'>
        <img
          src={image}
          alt={title}
          className='absolute inset-0 w-full h-full object-cover'
        />

        <div className='absolute inset-0 bg-black/40 flex items-center'>
          <div className='text-white p-10 max-w-lg'>
            <h2 className='text-5xl font-bold mb-4'>{title}</h2>

            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  ),
};
