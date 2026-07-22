import { ComponentConfig } from "@puckeditor/core";
import { motion } from "motion/react";
import type {
  ColorValue,
  SpacingValue,
} from "@/builder/types/customFields.types";
import { richTextNoHeading } from "@/builder/utils/richTextNoHeading";
import {
  createColorField,
  createSpacingField,
} from "@/builder/components/customFields";

export interface Cta2Props {
  backgroundColor: ColorValue;
  backgroundImage: string;
  showBackgroundImage: boolean;
  showBackgroundOverlay: boolean;
  backgroundOverlayColor: ColorValue;
  backgroundOverlayOpacity: number;
  padding: SpacingValue;
  margin: SpacingValue;
  text: string;
  title: string;
  description: string;
  title1: string;
  description1: string;
  text1: string;
  text2: string;
  text3: string;
  description2: string;
  text4: string;
  description3: string;
  text5: string;
  description4: string;
  image: string;
  imageAlt: string;
  image1: string;
  imageAlt1: string;
  href: string;
}

export const Cta2: ComponentConfig<Cta2Props> = {
  fields: {
    backgroundColor: createColorField({ label: "Background Color" }),
    backgroundImage: {
      label: "Background Image",
      type: "text",
    },
    showBackgroundImage: {
      label: "Show Background Image?",
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
      label: "Show Background Overlay?",
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
    backgroundOverlayColor: createColorField({
      label: "Background Overlay Color",
    }),
    backgroundOverlayOpacity: {
      label: "Background Overlay Opacity",
      type: "number",
      min: 0,
      max: 100,
    },
    padding: createSpacingField({ label: "Section Padding" }),
    margin: createSpacingField({ label: "Section Margin" }),
    text: {
      label: "Text",
      type: "richtext",
      ...richTextNoHeading,
    },
    title: {
      label: "Title",
      type: "richtext",
      ...richTextNoHeading,
    },
    description: {
      label: "Description",
      type: "richtext",
      ...richTextNoHeading,
    },
    title1: {
      label: "Title 1",
      type: "richtext",
      ...richTextNoHeading,
    },
    description1: {
      label: "Description 1",
      type: "richtext",
      ...richTextNoHeading,
    },
    text1: {
      label: "Text 1",
      type: "richtext",
      ...richTextNoHeading,
    },
    text2: {
      label: "Text 2",
      type: "richtext",
      ...richTextNoHeading,
    },
    text3: {
      label: "Text 3",
      type: "richtext",
      ...richTextNoHeading,
    },
    description2: {
      label: "Description 2",
      type: "richtext",
      ...richTextNoHeading,
    },
    text4: {
      label: "Text 4",
      type: "richtext",
      ...richTextNoHeading,
    },
    description3: {
      label: "Description 3",
      type: "richtext",
      ...richTextNoHeading,
    },
    text5: {
      label: "Text 5",
      type: "richtext",
      ...richTextNoHeading,
    },
    description4: {
      label: "Description 4",
      type: "richtext",
      ...richTextNoHeading,
    },
    image: {
      label: "Image",
      type: "text",
    },
    imageAlt: {
      label: "Image Alt",
      type: "text",
    },
    image1: {
      label: "Image 1",
      type: "text",
    },
    imageAlt1: {
      label: "Image Alt 1",
      type: "text",
    },
    href: {
      type: "text",
    },
  },

  defaultProps: {
    backgroundColor: "#ffffff",
    backgroundImage: "",
    showBackgroundImage: false,
    showBackgroundOverlay: false,
    backgroundOverlayColor: "#000000",
    backgroundOverlayOpacity: 40,
    padding: { top: 50, right: 0, bottom: 50, left: 0 },
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
    text: "Business Consulting",
    title: "Expert strategies to scale your business growth",
    description:
      "Unlock your company's full potential with tailored consulting solutions. Our experienced advisors deliver actionable insights for sustainable success.",
    title1: "Book a Free Consultation",
    description1: "With Sarah, Strategy Lead",
    text1: "500+ clients served",
    text2: "15+ years experience",
    text3: "98%",
    description2: "Success rate",
    text4: "3x",
    description3: "Avg. ROI",
    text5: "24h",
    description4: "Response time",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&auto=format&fit=crop&q=80",
    imageAlt: "Consultant",
    image1:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&auto=format&fit=crop&q=80",
    imageAlt1: "Business meeting",
    href: "#",
  },

  render: ({
    backgroundColor,
    backgroundImage,
    showBackgroundImage,
    showBackgroundOverlay,
    backgroundOverlayColor,
    backgroundOverlayOpacity,
    padding,
    margin,
    text,
    title,
    description,
    title1,
    description1,
    text1,
    text2,
    text3,
    description2,
    text4,
    description3,
    text5,
    description4,
    image,
    imageAlt,
    image1,
    imageAlt1,
    href,
  }: Cta2Props) => (
    <section
      id='_cta_background_meeting_card_v6_001'
      className='py-20 sm:py-24 bg-white dark:bg-neutral-950 relative'
      style={{
        backgroundColor,

        paddingTop: `${padding.top}px`,
        paddingRight: `${padding.right}px`,
        paddingBottom: `${padding.bottom}px`,
        paddingLeft: `${padding.left}px`,

        marginTop: `${margin.top}px`,
        marginRight: `${margin.right}px`,
        marginBottom: `${margin.bottom}px`,
        marginLeft: `${margin.left}px`,

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
          className='pointer-events-none absolute inset-0 z-0'
          style={{
            backgroundColor: backgroundOverlayColor,
            opacity: backgroundOverlayOpacity / 100,
          }}
        />
      )}
      <div className='relative z-10'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid lg:grid-cols-2 gap-8 items-center'>
            <motion.div
              data-motion='hero'
              initial={{
                opacity: 1,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                y: 0,
                scale: 1,
                rotate: 0,
                filter: "blur(0px)",
              }}
              viewport={{ once: true }}
            >
              <motion.span
                className='text-indigo-600 dark:text-indigo-400 text-sm font-semibold tracking-wide uppercase'
                data-motion='badge'
                initial={{
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  y: 0,
                  scale: 1,
                  rotate: 0,
                  filter: "blur(0px)",
                }}
                viewport={{ once: true }}
              >
                {text}
              </motion.span>

              <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mt-4'>
                {title}
              </h2>

              <motion.p
                className='text-slate-600 dark:text-neutral-400 text-lg mt-6'
                data-animate='text'
                initial={{
                  opacity: 1,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  y: 0,
                  scale: 1,
                  rotate: 0,
                  filter: "blur(0px)",
                }}
                viewport={{ once: true }}
              >
                {description}
              </motion.p>

              <motion.div
                className='bg-slate-100 dark:bg-neutral-800 rounded-2xl p-5 mt-8 flex items-center gap-4'
                data-motion='card'
                initial={{
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  y: 0,
                  scale: 1,
                  rotate: 0,
                  filter: "blur(0px)",
                }}
                viewport={{ once: true }}
              >
                <motion.img
                  data-motion='image'
                  src={image}
                  alt={imageAlt}
                  className='w-16 h-16 rounded-full object-cover ring-2 ring-indigo-500'
                  initial={{
                    opacity: 1,
                    scale: 1,
                    filter: "blur(0px)",
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    y: 0,
                    scale: 1,
                    rotate: 0,
                    filter: "blur(0px)",
                  }}
                  viewport={{ once: true }}
                ></motion.img>
                <div className='flex-1'>
                  <h3 className='text-slate-900 dark:text-white font-semibold'>
                    {title1}
                  </h3>
                  <p className='text-slate-500 text-sm'>{description1}</p>
                </div>
                <motion.a
                  href={href}
                  aria-label='Book consultation'
                  data-motion='button'
                  className='w-12 h-12 bg-indigo-500 hover:bg-indigo-600 rounded-full flex items-center justify-center transition-colors shrink-0'
                  initial={{
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    y: 0,
                    scale: 1,
                    rotate: 0,
                    filter: "blur(0px)",
                  }}
                  viewport={{ once: true }}
                >
                  <svg
                    className='w-5 h-5 text-white'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    strokeWidth='2'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M17 8l4 4m0 0l-4 4m4-4H3'
                    ></path>
                  </svg>
                </motion.a>
              </motion.div>

              <motion.div
                className='flex flex-wrap items-center gap-6 mt-8'
                data-motion='social-proof'
                initial={{
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  y: 0,
                  scale: 1,
                  rotate: 0,
                  filter: "blur(0px)",
                }}
                viewport={{ once: true }}
              >
                <div className='flex items-center gap-2'>
                  <svg
                    className='w-5 h-5 text-indigo-500'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path
                      fillRule='evenodd'
                      d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                      clipRule='evenodd'
                    ></path>
                  </svg>
                  <span className='text-slate-600 dark:text-neutral-400 text-sm'>
                    {text1}
                  </span>
                </div>
                <div className='flex items-center gap-2'>
                  <svg
                    className='w-5 h-5 text-indigo-500'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path
                      fillRule='evenodd'
                      d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                      clipRule='evenodd'
                    ></path>
                  </svg>
                  <span className='text-slate-600 dark:text-neutral-400 text-sm'>
                    {text2}
                  </span>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              className='relative'
              data-motion='image'
              initial={{
                opacity: 1,
                scale: 1,
                filter: "blur(0px)",
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                y: 0,
                scale: 1,
                rotate: 0,
                filter: "blur(0px)",
              }}
              viewport={{ once: true }}
            >
              <div className='rounded-3xl overflow-hidden'>
                <motion.img
                  data-motion='image'
                  src={image1}
                  alt={imageAlt1}
                  className='w-full aspect-4/3 object-cover'
                  initial={{
                    opacity: 1,
                    scale: 1,
                    filter: "blur(0px)",
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    y: 0,
                    scale: 1,
                    rotate: 0,
                    filter: "blur(0px)",
                  }}
                  viewport={{ once: true }}
                ></motion.img>
              </div>

              <motion.div
                className='absolute -bottom-6 left-6 right-6 bg-white dark:bg-neutral-800 rounded-2xl p-5 shadow-xl'
                data-motion='card'
                initial={{
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  y: 0,
                  scale: 1,
                  rotate: 0,
                  filter: "blur(0px)",
                }}
                viewport={{ once: true }}
              >
                <div className='grid grid-cols-3 gap-4 text-center'>
                  <div>
                    <span className='text-2xl font-bold text-indigo-600 dark:text-indigo-400'>
                      {text3}
                    </span>
                    <p className='text-slate-500 text-xs mt-1'>
                      {description2}
                    </p>
                  </div>
                  <div>
                    <span className='text-2xl font-bold text-slate-900 dark:text-white'>
                      {text4}
                    </span>
                    <p className='text-slate-500 text-xs mt-1'>
                      {description3}
                    </p>
                  </div>
                  <div>
                    <span className='text-2xl font-bold text-slate-900 dark:text-white'>
                      {text5}
                    </span>
                    <p className='text-slate-500 text-xs mt-1'>
                      {description4}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  ),
};
