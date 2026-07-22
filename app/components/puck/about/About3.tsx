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

export interface About3Props {
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
  title1: string;
  description1: string;
  image: string;
  imageAlt: string;
  href: string;
  linkText: string;
}

export const About3: ComponentConfig<About3Props> = {
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
    text: "About Us",
    title: "Building Digital Excellence",
    description:
      "We craft digital experiences that transform businesses. Our approach combines strategic thinking with creative execution.",
    text1: "Since 2015",
    text2: "Crafting excellence",
    text3: "250+",
    text4: "Projects Delivered",
    text5: "98%",
    text6: "Client Satisfaction",
    text7: "45+",
    text8: "Team Members",
    title1: "Our Mission",
    description1: "Empowering businesses through innovative digital solutions.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&auto=format&fit=crop&q=80",
    imageAlt: "Team collaboration",
    href: "#",
    linkText: "Our Story",
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
    title1,
    description1,
    image,
    imageAlt,
    href,
    linkText,
  }: About3Props) => (
    <section
      id='_about_bento_cards_v6_001'
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
          <div className='grid lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-16'>
            <div className='lg:col-span-7'>
              <motion.span
                data-motion='badge'
                className='text-indigo-600 dark:text-indigo-400 text-sm font-semibold tracking-wide uppercase block mb-4'
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
              <h2 className='text-slate-900 dark:text-white text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1]'>
                {title}
              </h2>
            </div>
            <div className='lg:col-span-5'>
              <motion.p
                className='text-slate-600 dark:text-neutral-400 text-lg leading-relaxed'
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
            </div>
          </div>

          <div className='grid lg:grid-cols-3 gap-6'>
            <motion.div
              data-motion='image'
              className='lg:col-span-2 relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden'
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
              <div className='absolute bottom-6 left-6 right-6 p-6 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-xs rounded-2xl'>
                <div className='flex items-center justify-between'>
                  <div>
                    <span className='text-indigo-600 dark:text-indigo-400 text-3xl font-bold block'>
                      {text1}
                    </span>
                    <span className='text-slate-500 dark:text-neutral-400 text-sm'>
                      {text2}
                    </span>
                  </div>
                  <motion.a
                    data-motion='button'
                    href={href}
                    className='inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold hover:gap-3 transition-all duration-300'
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
              </div>
            </motion.div>

            <div className='flex flex-col gap-6'>
              <motion.div
                data-motion='card'
                className='p-6 border-indigo-500 bg-slate-50 dark:bg-neutral-900 rounded-r-2xl'
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
                <span className='text-indigo-600 dark:text-indigo-400 text-4xl font-bold block'>
                  {text3}
                </span>
                <span className='text-slate-600 dark:text-neutral-400 text-base'>
                  {text4}
                </span>
              </motion.div>
              <motion.div
                data-motion='card'
                className='p-6 border-indigo-500 bg-slate-50 dark:bg-neutral-900 rounded-r-2xl'
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
                <span className='text-indigo-600 dark:text-indigo-400 text-4xl font-bold block'>
                  {text5}
                </span>
                <span className='text-slate-600 dark:text-neutral-400 text-base'>
                  {text6}
                </span>
              </motion.div>
              <motion.div
                data-motion='card'
                className='p-6 border-indigo-500 bg-slate-50 dark:bg-neutral-900 rounded-r-2xl'
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
                <span className='text-indigo-600 dark:text-indigo-400 text-4xl font-bold block'>
                  {text7}
                </span>
                <span className='text-slate-600 dark:text-neutral-400 text-base'>
                  {text8}
                </span>
              </motion.div>
              <motion.div
                data-motion='card'
                className='flex-1 p-6 bg-indigo-50 dark:bg-indigo-900/20 rounded-2xl flex flex-col justify-center'
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
                <h3 className='text-slate-900 dark:text-white text-xl font-bold mb-2'>
                  {title1}
                </h3>
                <p className='text-slate-600 dark:text-neutral-400 text-sm'>
                  {description1}
                </p>
              </motion.div>
            </div>
          </div>

          <div className='w-full h-px bg-slate-200 dark:bg-neutral-800 mt-16'></div>
        </div>
      </div>
    </section>
  ),
};
