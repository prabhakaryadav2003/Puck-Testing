import { ComponentConfig } from "@puckeditor/core";

export interface AboutProps {
  text: string;
  title: string;
  description: string;
  description2: string;
  text2: string;
  text3: string;
  text4: string;
  text5: string;
  text6: string;
  text7: string;
  image: string;
  imageAlt: string;
  image2: string;
  imageAlt2: string;
}

export const About: ComponentConfig<AboutProps> = {
  fields: {
    text: {
      type: "richtext",
      contentEditable: true,
    },
    title: {
      type: "richtext",
      contentEditable: true,
    },
    description: {
      type: "richtext",
      contentEditable: true,
    },
    description2: {
      type: "richtext",
      contentEditable: true,
    },
    text2: {
      type: "richtext",
      contentEditable: true,
    },
    text3: {
      type: "richtext",
      contentEditable: true,
    },
    text4: {
      type: "richtext",
      contentEditable: true,
    },
    text5: {
      type: "richtext",
      contentEditable: true,
    },
    text6: {
      type: "richtext",
      contentEditable: true,
    },
    text7: {
      type: "richtext",
      contentEditable: true,
    },
    image: {
      type: "text",
    },
    imageAlt: {
      type: "text",
    },
    image2: {
      type: "text",
    },
    imageAlt2: {
      type: "text",
    },
  },

  defaultProps: {
    text: "About Us",
    title: "Discover Our Story",
    description:
      "Welcome to Horizon Creative Labs, where innovation meets artistry. Founded in 2018, our mission is to craft digital experiences that inspire and engage.",
    description2:
      "Our studio brings together talented designers, developers, and strategists who share a passion for pushing creative boundaries. With a focus on user-centered design and cutting-edge technology, we create solutions that resonate.",
    text2: "2018",
    text3: "Founded",
    text4: "50+",
    text5: "Team Members",
    text6: "200+",
    text7: "Projects",
    image:
      "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=800&auto=format&fit=crop&q=80",
    imageAlt: "Creative team brainstorming",
    image2:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&auto=format&fit=crop&q=80",
    imageAlt2: "Modern office environment",
  },

  render: ({
    text,
    title,
    description,
    description2,
    text2,
    text3,
    text4,
    text5,
    text6,
    text7,
    image,
    imageAlt,
    image2,
    imageAlt2,
  }: AboutProps) => (
    <section
      id='_about_centered_dual_images_v6_001'
      className='py-20 sm:py-24 bg-white dark:bg-neutral-950'
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid lg:grid-cols-2 gap-6'>
          <div className='relative h-[500px] lg:h-[600px] rounded-3xl overflow-hidden'>
            <img
              src={image}
              alt={imageAlt}
              className='w-full h-full object-cover'
            />
            <div className='absolute inset-0 bg-linear-to-t from-slate-900/80 via-slate-900/20 to-transparent'></div>
            <div className='absolute bottom-0 left-0 right-0 p-8 sm:p-10'>
              <span className='text-indigo-400 text-sm font-semibold tracking-wide uppercase block mb-3'>
                {text}
              </span>
              <h2 className='text-white text-3xl sm:text-4xl font-bold leading-tight'>
                {title}
              </h2>
            </div>
          </div>

          <div className='flex flex-col gap-6'>
            <div className='p-8 sm:p-10 bg-indigo-50 dark:bg-indigo-900/20 rounded-3xl flex-1 flex flex-col justify-center gap-6'>
              <p className='text-slate-700 dark:text-neutral-300 text-lg leading-relaxed'>
                {description}
              </p>
              <p className='text-slate-600 dark:text-neutral-400 text-base leading-relaxed'>
                {description2}
              </p>
              <div className='flex items-center gap-6 pt-2'>
                <div>
                  <span className='text-indigo-600 dark:text-indigo-400 text-3xl font-bold block'>
                    {text2}
                  </span>
                  <span className='text-slate-500 dark:text-neutral-400 text-sm'>
                    {text3}
                  </span>
                </div>

                <div>
                  <span className='text-slate-900 dark:text-white text-3xl font-bold block'>
                    {text4}
                  </span>
                  <span className='text-slate-500 dark:text-neutral-400 text-sm'>
                    {text5}
                  </span>
                </div>

                <div>
                  <span className='text-slate-900 dark:text-white text-3xl font-bold block'>
                    {text6}
                  </span>
                  <span className='text-slate-500 dark:text-neutral-400 text-sm'>
                    {text7}
                  </span>
                </div>
              </div>
            </div>

            <div className='h-48 sm:h-56 rounded-3xl overflow-hidden'>
              <img
                src={image2}
                alt={imageAlt2}
                className='w-full h-full object-cover'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  ),
};
