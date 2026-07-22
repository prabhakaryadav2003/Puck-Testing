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

export interface Hero1Props {
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
  text7: string;
  text8: string;
  text9: string;
  image: string;
  imageAlt: string;
  href: string;
  linkText: string;
  href1: string;
  linkText1: string;
}

export const Hero1: ComponentConfig<Hero1Props> = {
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
    text7: {
      label: "Text 7",
      type: "richtext",
      ...richTextNoHeading,
    },
    text8: {
      label: "Text 8",
      type: "richtext",
      ...richTextNoHeading,
    },
    text9: {
      label: "Text 9",
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
    href1: {
      type: "text",
    },
    linkText1: {
      label: "Link Text 1",
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
    text: "AI-Powered Analytics",
    title: "Transform Data Into Actionable Insights",
    description:
      "Unlock the full potential of your business data with intelligent analytics. Make smarter decisions faster with real-time dashboards.",
    text1: "No credit card required",
    text2: "14-day free trial",
    text3: "Cancel anytime",
    text4: "+127%",
    text5: "Growth Rate",
    text6: "50K+",
    text7: "Active Users",
    text8: "99.9%",
    text9: "Uptime",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format&fit=crop&q=80",
    imageAlt: "Analytics dashboard interface showing charts and metrics",
    href: "#",
    linkText: "Start Free Trial",
    href1: "#",
    linkText1: "Watch Demo",
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
    text7,
    text8,
    text9,
    image,
    imageAlt,
    href,
    linkText,
    href1,
    linkText1,
  }: Hero1Props) => (
    <section
      id='_hero_analytics_dashboard_v6_001'
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
          <div className='grid lg:grid-cols-12 gap-8 lg:gap-12 items-start'>
            <div className='lg:col-span-5 lg:sticky lg:top-24'>
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
                <h1 className='text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white leading-tight mb-6'>
                  {title}
                </h1>
                <motion.p
                  className='text-lg text-slate-600 dark:text-neutral-400 mb-8'
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

                <div className='flex flex-wrap gap-4 mb-10'>
                  <motion.a
                    href={href}
                    data-motion='button'
                    className='px-6 py-3 bg-indigo-600 hover:bg-indigo-700 transition-colors rounded-full text-white font-semibold'
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
                  <motion.a
                    href={href1}
                    data-motion='button'
                    className='inline-flex items-center gap-2 px-6 py-3 border border-slate-300 dark:border-neutral-700 hover:bg-slate-100 dark:hover:bg-neutral-800 transition-colors rounded-full text-slate-900 dark:text-white font-semibold'
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
                    {linkText1}
                  </motion.a>
                </div>

                <motion.div
                  className='space-y-3'
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
                  <div className='flex items-center gap-2 text-slate-600 dark:text-neutral-400 text-sm'>
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
                    <span>{text1}</span>
                  </div>
                  <div className='flex items-center gap-2 text-slate-600 dark:text-neutral-400 text-sm'>
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
                    <span>{text2}</span>
                  </div>
                  <div className='flex items-center gap-2 text-slate-600 dark:text-neutral-400 text-sm'>
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
                    <span>{text3}</span>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            <div className='lg:col-span-7'>
              <motion.div
                data-motion='card'
                className='rounded-3xl overflow-hidden bg-slate-100 dark:bg-neutral-900 p-3 mb-5'
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
                  className='w-full h-auto rounded-2xl'
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
              </motion.div>

              <div className='grid grid-cols-3 gap-5'>
                <motion.div
                  data-motion='card'
                  className='bg-indigo-50 dark:bg-indigo-900/20 rounded-2xl p-5'
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
                  <motion.div
                    data-motion='icon'
                    className='w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-900/40 flex items-center justify-center mb-3'
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
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
                      ></path>
                    </svg>
                  </motion.div>
                  <span className='text-2xl font-bold text-indigo-600 dark:text-indigo-400 block'>
                    {text4}
                  </span>
                  <span className='text-slate-600 dark:text-neutral-400 text-sm'>
                    {text5}
                  </span>
                </motion.div>

                <motion.div
                  data-motion='card'
                  className='bg-slate-50 dark:bg-neutral-900 rounded-2xl p-5'
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
                  <motion.div
                    data-motion='icon'
                    className='w-10 h-10 rounded-xl bg-slate-200 dark:bg-neutral-800 flex items-center justify-center mb-3'
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
                      className='w-5 h-5 text-slate-600 dark:text-neutral-400'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z'
                      ></path>
                    </svg>
                  </motion.div>
                  <span className='text-2xl font-bold text-slate-900 dark:text-white block'>
                    {text6}
                  </span>
                  <span className='text-slate-600 dark:text-neutral-400 text-sm'>
                    {text7}
                  </span>
                </motion.div>

                <motion.div
                  data-motion='card'
                  className='bg-slate-50 dark:bg-neutral-900 rounded-2xl p-5'
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
                  <motion.div
                    data-motion='icon'
                    className='w-10 h-10 rounded-xl bg-slate-200 dark:bg-neutral-800 flex items-center justify-center mb-3'
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
                      className='w-5 h-5 text-slate-600 dark:text-neutral-400'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
                      ></path>
                    </svg>
                  </motion.div>
                  <span className='text-2xl font-bold text-slate-900 dark:text-white block'>
                    {text8}
                  </span>
                  <span className='text-slate-600 dark:text-neutral-400 text-sm'>
                    {text9}
                  </span>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  ),
};
