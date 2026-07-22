import { ComponentConfig } from "@puckeditor/core";

export interface About2Props {
  backgroundColor: string;
  backgroundImage: string;
  showBackgroundImage: boolean;
  showBackgroundOverlay: boolean;
  backgroundOverlayColor: string;
  backgroundOverlayOpacity: number;
  text: string;
  title: string;
  description: string;
  text1: string;
  title1: string;
  description1: string;
  text2: string;
  title2: string;
  text3: string;
  description2: string;
  text4: string;
  description3: string;
  text5: string;
  description4: string;
  text6: string;
  title3: string;
  description5: string;
  image: string;
  imageAlt: string;
  image1: string;
  imageAlt1: string;
  href: string;
  linkText: string;
}

export const About2: ComponentConfig<About2Props> = {
  fields: {
    backgroundColor: {
      type: "text",
    },
    backgroundImage: {
      type: "text",
    },
    showBackgroundImage: {
      type: "radio",
      options: [
        {
          label: "Yes",
          value: true,
        },
        {
          label: "No",
          value: false,
        },
      ],
    },
    showBackgroundOverlay: {
      type: "radio",
      options: [
        {
          label: "Yes",
          value: true,
        },
        {
          label: "No",
          value: false,
        },
      ],
    },
    backgroundOverlayColor: {
      type: "text",
    },
    backgroundOverlayOpacity: {
      type: "number",
      min: 0,
      max: 100,
    },
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
    text1: {
      type: "richtext",
      contentEditable: true,
    },
    title1: {
      type: "richtext",
      contentEditable: true,
    },
    description1: {
      type: "richtext",
      contentEditable: true,
    },
    text2: {
      type: "richtext",
      contentEditable: true,
    },
    title2: {
      type: "richtext",
      contentEditable: true,
    },
    text3: {
      type: "richtext",
      contentEditable: true,
    },
    description2: {
      type: "richtext",
      contentEditable: true,
    },
    text4: {
      type: "richtext",
      contentEditable: true,
    },
    description3: {
      type: "richtext",
      contentEditable: true,
    },
    text5: {
      type: "richtext",
      contentEditable: true,
    },
    description4: {
      type: "richtext",
      contentEditable: true,
    },
    text6: {
      type: "richtext",
      contentEditable: true,
    },
    title3: {
      type: "richtext",
      contentEditable: true,
    },
    description5: {
      type: "richtext",
      contentEditable: true,
    },
    image: {
      type: "text",
    },
    imageAlt: {
      type: "text",
    },
    image1: {
      type: "text",
    },
    imageAlt1: {
      type: "text",
    },
    href: {
      type: "text",
    },
    linkText: {
      type: "richtext",
      contentEditable: true,
    },
  },

  defaultProps: {
    backgroundColor: "#ffffff",
    backgroundImage: "",
    showBackgroundImage: false,
    showBackgroundOverlay: false,
    backgroundOverlayColor: "#000000",
    backgroundOverlayOpacity: 40,
    text: "About Us",
    title: "What Drives Us Forward",
    description:
      "We're a team of passionate creators dedicated to building exceptional digital experiences.",
    text1: "Our Mission",
    title1: "Driving Innovation Forward",
    description1:
      "We believe technology should empower people, not complicate their lives. Our mission is to create intuitive solutions that solve real problems and help businesses connect with their customers in meaningful ways.",
    text2: "Our Values",
    title2: "Principles That Guide Us",
    text3: "Excellence",
    description2:
      "We hold ourselves to the highest standards in everything we create.",
    text4: "Collaboration",
    description3:
      "Great work happens when diverse minds come together with shared purpose.",
    text5: "Innovation",
    description4:
      "We constantly push boundaries to deliver cutting-edge solutions.",
    text6: "Our Vision",
    title3: "Shaping Tomorrow's Digital Landscape",
    description5:
      "We envision a world where technology seamlessly enhances human potential. Our goal is to be at the forefront of this transformation, creating tools and experiences that make a lasting positive impact.",
    image:
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&auto=format&fit=crop&q=80",
    imageAlt: "Team mission",
    image1:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop&q=80",
    imageAlt1: "Team vision",
    href: "#",
    linkText: "Learn More",
  },

  render: ({
    backgroundColor,
    backgroundImage,
    showBackgroundImage,
    showBackgroundOverlay,
    backgroundOverlayColor,
    backgroundOverlayOpacity,
    text,
    title,
    description,
    text1,
    title1,
    description1,
    text2,
    title2,
    text3,
    description2,
    text4,
    description3,
    text5,
    description4,
    text6,
    title3,
    description5,
    image,
    imageAlt,
    image1,
    imageAlt1,
    href,
    linkText,
  }: About2Props) => (
    <section
      id='_about_alternating_cards_v6_001'
      className='py-20 sm:py-24 bg-white dark:bg-neutral-950'
      style={{
        position: "relative",
        backgroundColor,
        ...(showBackgroundImage && backgroundImage
          ? {
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }
          : {}),
      }}
    >
      {showBackgroundOverlay && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: backgroundOverlayColor,
            opacity: backgroundOverlayOpacity / 100,
            pointerEvents: "none",
            zIndex: 0,
          }}
        />
      )}
      <div
        style={{
          position: "relative",
          zIndex: 1,
        }}
      >
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid lg:grid-cols-12 gap-12 lg:gap-16'>
            <div className='lg:col-span-4 lg:sticky lg:top-24 lg:self-start'>
              <div className='flex flex-col gap-5'>
                <span className='text-indigo-600 dark:text-indigo-400 text-sm font-semibold tracking-wide uppercase'>
                  {text}
                </span>
                <h2 className='text-slate-900 dark:text-white text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight'>
                  {title}
                </h2>
                <p className='text-slate-600 dark:text-neutral-400 text-lg leading-relaxed'>
                  {description}
                </p>
                <a
                  href={href}
                  className='inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold hover:gap-3 transition-all duration-300 w-fit'
                >
                  {linkText}
                </a>
              </div>
            </div>

            <div className='lg:col-span-8 flex flex-col gap-8'>
              <div className='relative'>
                <div className='absolute left-0 top-0 bottom-0 w-px bg-indigo-200 dark:bg-indigo-800 hidden lg:block'></div>
                <div className='lg:pl-8 flex flex-col gap-6'>
                  <div className='flex items-center gap-4'>
                    <div className='w-3 h-3 bg-indigo-500 rounded-full hidden lg:block -ml-5.5'></div>
                    <span className='text-indigo-600 dark:text-indigo-400 text-sm font-semibold uppercase tracking-wide'>
                      {text1}
                    </span>
                  </div>
                  <div className='rounded-2xl overflow-hidden'>
                    <img
                      src={image}
                      alt={imageAlt}
                      className='w-full h-56 sm:h-72 object-cover'
                    />
                  </div>
                  <div className='flex flex-col gap-3'>
                    <h3 className='text-slate-900 dark:text-white text-2xl font-bold'>
                      {title1}
                    </h3>
                    <p className='text-slate-600 dark:text-neutral-400 text-base leading-relaxed'>
                      {description1}
                    </p>
                  </div>
                </div>
              </div>

              <div className='relative'>
                <div className='absolute left-0 top-0 bottom-0 w-px bg-indigo-200 dark:bg-indigo-800 hidden lg:block'></div>
                <div className='lg:pl-8 flex flex-col gap-6'>
                  <div className='flex items-center gap-4'>
                    <div className='w-3 h-3 bg-indigo-500 rounded-full hidden lg:block -ml-5.5'></div>
                    <span className='text-indigo-600 dark:text-indigo-400 text-sm font-semibold uppercase tracking-wide'>
                      {text2}
                    </span>
                  </div>
                  <div className='p-8 bg-indigo-50 dark:bg-indigo-900/20 rounded-2xl'>
                    <h3 className='text-slate-900 dark:text-white text-2xl font-bold mb-4'>
                      {title2}
                    </h3>
                    <div className='flex flex-col gap-4'>
                      <div className='flex items-start gap-3'>
                        <div className='w-2 h-2 bg-indigo-500 rounded-full mt-2'></div>
                        <div>
                          <span className='text-slate-900 dark:text-white font-semibold'>
                            {text3}
                          </span>
                          <p className='text-slate-600 dark:text-neutral-400 text-sm'>
                            {description2}
                          </p>
                        </div>
                      </div>
                      <div className='flex items-start gap-3'>
                        <div className='w-2 h-2 bg-indigo-500 rounded-full mt-2'></div>
                        <div>
                          <span className='text-slate-900 dark:text-white font-semibold'>
                            {text4}
                          </span>
                          <p className='text-slate-600 dark:text-neutral-400 text-sm'>
                            {description3}
                          </p>
                        </div>
                      </div>
                      <div className='flex items-start gap-3'>
                        <div className='w-2 h-2 bg-indigo-500 rounded-full mt-2'></div>
                        <div>
                          <span className='text-slate-900 dark:text-white font-semibold'>
                            {text5}
                          </span>
                          <p className='text-slate-600 dark:text-neutral-400 text-sm'>
                            {description4}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='relative'>
                <div className='lg:pl-8 flex flex-col gap-6'>
                  <div className='flex items-center gap-4'>
                    <div className='w-3 h-3 bg-indigo-500 rounded-full hidden lg:block -ml-5.5'></div>
                    <span className='text-indigo-600 dark:text-indigo-400 text-sm font-semibold uppercase tracking-wide'>
                      {text6}
                    </span>
                  </div>
                  <div className='rounded-2xl overflow-hidden'>
                    <img
                      src={image1}
                      alt={imageAlt1}
                      className='w-full h-56 sm:h-72 object-cover'
                    />
                  </div>
                  <div className='flex flex-col gap-3'>
                    <h3 className='text-slate-900 dark:text-white text-2xl font-bold'>
                      {title3}
                    </h3>
                    <p className='text-slate-600 dark:text-neutral-400 text-base leading-relaxed'>
                      {description5}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  ),
};
