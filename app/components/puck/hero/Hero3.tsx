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

export interface Hero3Props {
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
  text1: string;
  text2: string;
  text3: string;
  text4: string;
  text5: string;
  text6: string;
  description1: string;
  description2: string;
  text7: string;
  image: string;
  imageAlt: string;
  href: string;
  linkText: string;
}

export const Hero3: ComponentConfig<Hero3Props> = {
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
    text4: {
      label: "Text 4",
      type: "richtext",
      ...richTextNoHeading,
    },
    text5: {
      label: "Text 5",
      type: "richtext",
      ...richTextNoHeading,
    },
    text6: {
      label: "Text 6",
      type: "richtext",
      ...richTextNoHeading,
    },
    description1: {
      label: "Description 1",
      type: "richtext",
      ...richTextNoHeading,
    },
    description2: {
      label: "Description 2",
      type: "richtext",
      ...richTextNoHeading,
    },
    text7: {
      label: "Text 7",
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
    href: {
      type: "text",
    },
    linkText: {
      label: "Link Text",
      type: "richtext",
      ...richTextNoHeading,
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
    text: "Free Delivery on First Order",
    title: "Fresh Food Fast Delivery",
    description:
      "From local favorites to gourmet cuisines, satisfy your cravings in minutes. Fresh ingredients, expert chefs, delivered to your door.",
    text1: "25",
    text2: "Min Delivery",
    text3: "500+",
    text4: "Restaurants",
    text5: "4.9",
    text6: "App Rating",
    description1: "Avg. Delivery",
    description2: "25 min",
    text7: "4.9",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&auto=format&fit=crop&q=80",
    imageAlt: "Delicious food spread",
    href: "#",
    linkText: "Find Food",
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
    text1,
    text2,
    text3,
    text4,
    text5,
    text6,
    description1,
    description2,
    text7,
    image,
    imageAlt,
    href,
    linkText,
  }: Hero3Props) => (
    <section
      id='_hero_food_delivery_v6_001'
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
          <div className='grid lg:grid-cols-12 gap-8 lg:gap-12 items-center'>
            <motion.div
              className='lg:col-span-7'
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
                data-motion='badge'
                className='inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-100 dark:bg-indigo-900/40 rounded-full text-indigo-600 dark:text-indigo-400 text-sm font-medium mb-6'
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
              <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-tight mb-6'>
                {title}
              </h1>
              <motion.p
                className='text-lg text-slate-600 dark:text-neutral-400 mb-8 max-w-xl'
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

              <div className='flex flex-col sm:flex-row gap-3 mb-8'>
                <motion.div
                  className='flex-1 relative'
                  data-motion='input'
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
                  <motion.input
                    data-motion='input'
                    type='text'
                    placeholder='Enter your delivery address'
                    className='w-full px-5 py-3 pr-12 bg-slate-50 dark:bg-neutral-900 border border-slate-200 dark:border-neutral-700 rounded-full text-slate-900 dark:text-white placeholder-slate-400 focus:outline-hidden focus:border-indigo-500 securepass-findIdentityInputFields-covered psono-icon-injected'
                    style={{
                      userSelect: "text",
                      backgroundPosition:
                        "right 48px center, right 63px center !important",
                      backgroundSize: "11px 11px, 16px 16px !important",
                      backgroundRepeat: "no-repeat, no-repeat !important",
                    }}
                    autoComplete='street-address'
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
                  ></motion.input>
                  <svg
                    className='absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
                    ></path>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
                    ></path>
                  </svg>
                </motion.div>
                <motion.a
                  href={href}
                  data-motion='button'
                  className='px-6 py-3 bg-indigo-600 hover:bg-indigo-700 transition-colors rounded-full text-white font-semibold whitespace-nowrap'
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
                  {linkText}
                </motion.a>
              </div>

              <motion.div
                className='grid grid-cols-3 gap-6'
                data-motion='stats'
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
                <div>
                  <span className='text-3xl font-bold text-indigo-600 dark:text-indigo-400 block'>
                    {text1}
                  </span>
                  <span className='text-slate-500 dark:text-neutral-400 text-sm'>
                    {text2}
                  </span>
                </div>
                <div>
                  <span className='text-3xl font-bold text-slate-900 dark:text-white block'>
                    {text3}
                  </span>
                  <span className='text-slate-500 dark:text-neutral-400 text-sm'>
                    {text4}
                  </span>
                </div>
                <div>
                  <span className='text-3xl font-bold text-slate-900 dark:text-white block'>
                    {text5}
                  </span>
                  <span className='text-slate-500 dark:text-neutral-400 text-sm'>
                    {text6}
                  </span>
                </div>
              </motion.div>
            </motion.div>

            <div className='lg:col-span-5'>
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
                    src={image}
                    alt={imageAlt}
                    className='w-full h-[400px] lg:h-[500px] object-cover'
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
                  data-motion='card'
                  className='absolute -bottom-4 -left-4 bg-white dark:bg-neutral-900 rounded-2xl p-4 border border-slate-200 dark:border-neutral-800'
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
                  <div className='flex items-center gap-3'>
                    <motion.div
                      data-motion='icon'
                      className='w-10 h-10 bg-indigo-100 dark:bg-indigo-900/40 rounded-full flex items-center justify-center'
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
                      <svg
                        className='w-5 h-5 text-indigo-600 dark:text-indigo-400'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <circle cx='12' cy='12' r='10'></circle>
                        <polyline points='12 6 12 12 16 14'></polyline>
                      </svg>
                    </motion.div>
                    <div>
                      <p className='text-slate-500 dark:text-neutral-400 text-xs'>
                        {description1}
                      </p>
                      <p className='text-indigo-600 dark:text-indigo-400 font-bold'>
                        {description2}
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  data-motion='card'
                  className='absolute top-4 right-4 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-xs rounded-full px-3 py-1.5 flex items-center gap-1'
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
                    className='w-4 h-4 text-indigo-400'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
                  </svg>
                  <span className='text-slate-900 dark:text-white font-semibold text-sm'>
                    {text7}
                  </span>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  ),
};
