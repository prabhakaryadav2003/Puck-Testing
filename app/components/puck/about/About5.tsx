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

export interface About5Props {
  backgroundColor: ColorValue;
  backgroundImage: string;
  showBackgroundImage: boolean;
  showBackgroundOverlay: boolean;
  backgroundOverlayColor: ColorValue;
  backgroundOverlayOpacity: number;
  padding: SpacingValue;
  margin: SpacingValue;
  text: string;
  text1: string;
  title: string;
  description: string;
  text2: string;
  text3: string;
  title1: string;
  text4: string;
  text5: string;
  text6: string;
  text7: string;
  image: string;
  imageAlt: string;
  href: string;
  linkText: string;
}

export const About5: ComponentConfig<About5Props> = {
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
    text1: {
      label: "Text 1",
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
    title1: {
      label: "Title 1",
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
    text: "12",
    text1: "Est. 2012",
    title: "Hello, We are Quantum Digital Studio",
    description:
      "Where creativity meets technology. We've been crafting exceptional digital experiences that help brands stand out for over a decade.",
    text2: "12",
    text3: "Years of Excellence",
    title1: "What We Do",
    text4: "Brand Strategy",
    text5: "Web Development",
    text6: "Mobile Apps",
    text7: "Digital Marketing",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1000&auto=format&fit=crop&q=80",
    imageAlt: "Team collaboration",
    href: "#",
    linkText: "View All Services",
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
    text1,
    title,
    description,
    text2,
    text3,
    title1,
    text4,
    text5,
    text6,
    text7,
    image,
    imageAlt,
    href,
    linkText,
  }: About5Props) => (
    <section
      id='_about_big_number_v6_001'
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
          <div className='flex flex-col gap-16'>
            <div className='relative'>
              <div className='absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden'>
                <span className='text-indigo-100 dark:text-indigo-900/30 text-[20rem] sm:text-[28rem] font-bold leading-none select-none'>
                  {text}
                </span>
              </div>

              <div className='relative z-10 text-center py-16 sm:py-24 flex flex-col items-center gap-6'>
                <motion.span
                  data-motion='badge'
                  className='text-indigo-600 dark:text-indigo-400 text-sm font-semibold tracking-wide uppercase'
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
                  {text1}
                </motion.span>
                <h2 className='text-slate-900 dark:text-white text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight max-w-3xl'>
                  {title}
                </h2>
                <motion.p
                  className='text-slate-600 dark:text-neutral-400 text-lg max-w-2xl leading-relaxed'
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
                <div className='flex items-center gap-2 text-indigo-600 dark:text-indigo-400'>
                  <span className='text-5xl font-bold'>{text2}</span>
                  <motion.span
                    data-motion='badge'
                    className='text-sm uppercase leading-tight text-left'
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
                    {text3}
                  </motion.span>
                </div>
              </div>
            </div>

            <div className='grid lg:grid-cols-3 gap-6'>
              <motion.div
                data-motion='image'
                className='lg:col-span-2 h-72 sm:h-96 rounded-3xl overflow-hidden'
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
                <motion.img
                  data-motion='image'
                  src={image}
                  alt={imageAlt}
                  className='w-full h-full object-cover'
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

              <motion.div
                data-motion='card'
                className='p-8 bg-indigo-50 dark:bg-indigo-900/20 rounded-3xl flex flex-col justify-center gap-6'
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
                <h3 className='text-slate-900 dark:text-white text-xl font-bold'>
                  {title1}
                </h3>
                <div className='flex flex-col gap-4'>
                  <div className='flex items-center gap-3'>
                    <div className='w-2 h-2 bg-indigo-500 rounded-full'></div>
                    <span className='text-slate-700 dark:text-neutral-300'>
                      {text4}
                    </span>
                  </div>
                  <div className='flex items-center gap-3'>
                    <div className='w-2 h-2 bg-indigo-500 rounded-full'></div>
                    <span className='text-slate-700 dark:text-neutral-300'>
                      {text5}
                    </span>
                  </div>
                  <div className='flex items-center gap-3'>
                    <div className='w-2 h-2 bg-indigo-500 rounded-full'></div>
                    <span className='text-slate-700 dark:text-neutral-300'>
                      {text6}
                    </span>
                  </div>
                  <div className='flex items-center gap-3'>
                    <div className='w-2 h-2 bg-indigo-500 rounded-full'></div>
                    <span className='text-slate-700 dark:text-neutral-300'>
                      {text7}
                    </span>
                  </div>
                </div>
                <motion.a
                  data-motion='button'
                  href={href}
                  className='inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold hover:gap-3 transition-all duration-300 w-fit'
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
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  ),
};
