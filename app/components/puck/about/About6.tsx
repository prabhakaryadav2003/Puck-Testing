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

export interface About6Props {
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
  description1: string;
  description2: string;
  text1: string;
  text2: string;
  text3: string;
  text4: string;
  text5: string;
  text6: string;
  text7: string;
  text8: string;
  image: string;
  imageAlt: string;
  href: string;
  linkText: string;
}

export const About6: ComponentConfig<About6Props> = {
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
    text: "About",
    title: "We Create Digital Magic",
    description:
      "We're a collective of designers, engineers, and strategists obsessed with crafting exceptional digital experiences.",
    description1:
      "Our studio specializes in mobile-first solutions that feel native and intuitive. We believe great apps aren't just built—they're carefully orchestrated symphonies of design, code, and user psychology.",
    description2:
      "From ambitious startups to Fortune 500 enterprises, we've helped transform ideas into products that millions use daily. Your vision deserves nothing less than excellence.",
    text1: "50+",
    text2: "Apps Launched",
    text3: "12M",
    text4: "Active Users",
    text5: "8yr",
    text6: "In Business",
    text7: "100%",
    text8: "Client Satisfaction",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1000&auto=format&fit=crop&q=80",
    imageAlt: "Developer working on laptop",
    href: "#",
    linkText: "Start a Conversation",
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
    description1,
    description2,
    text1,
    text2,
    text3,
    text4,
    text5,
    text6,
    text7,
    text8,
    image,
    imageAlt,
    href,
    linkText,
  }: About6Props) => (
    <section
      id='_about_centered_header_v6_001'
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
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-8 lg:gap-12 items-end'>
              <div className='flex flex-col gap-4'>
                <motion.span
                  data-motion='badge'
                  className='text-indigo-600 dark:text-indigo-400 text-sm font-semibold tracking-widest uppercase'
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
                <h2 className='text-slate-900 dark:text-white text-4xl sm:text-5xl lg:text-6xl font-bold leading-none'>
                  {title}
                </h2>
              </div>

              <motion.div
                data-motion='image'
                className='h-48 sm:h-64 rounded-2xl overflow-hidden'
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
            </div>

            <div className='grid lg:grid-cols-3 grid-cols-1 gap-8 lg:gap-12'>
              <div className='lg:col-span-1'>
                <motion.p
                  className='text-slate-900 dark:text-white text-xl font-medium leading-relaxed'
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

              <div className='lg:col-span-1'>
                <motion.p
                  className='text-slate-600 dark:text-neutral-400 text-base leading-relaxed'
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
                  {description1}
                </motion.p>
              </div>

              <div className='lg:col-span-1 flex flex-col gap-6'>
                <motion.p
                  className='text-slate-600 dark:text-neutral-400 text-base leading-relaxed'
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
                  {description2}
                </motion.p>
                <motion.a
                  data-motion='button'
                  href={href}
                  className='inline-flex items-center gap-3 text-indigo-600 dark:text-indigo-400 font-semibold group w-fit'
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

            <div className='w-full h-px bg-slate-200 dark:bg-neutral-800'></div>

            <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
              <motion.div
                data-motion='card'
                className='text-center lg:text-left'
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
                <span className='text-indigo-600 dark:text-indigo-400 text-3xl sm:text-4xl font-bold block'>
                  {text1}
                </span>
                <span className='text-slate-500 dark:text-neutral-400 text-sm'>
                  {text2}
                </span>
              </motion.div>
              <motion.div
                data-motion='card'
                className='text-center lg:text-left'
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
                <span className='text-indigo-600 dark:text-indigo-400 text-3xl sm:text-4xl font-bold block'>
                  {text3}
                </span>
                <span className='text-slate-500 dark:text-neutral-400 text-sm'>
                  {text4}
                </span>
              </motion.div>
              <motion.div
                data-motion='card'
                className='text-center lg:text-left'
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
                <span className='text-indigo-600 dark:text-indigo-400 text-3xl sm:text-4xl font-bold block'>
                  {text5}
                </span>
                <span className='text-slate-500 dark:text-neutral-400 text-sm'>
                  {text6}
                </span>
              </motion.div>
              <motion.div
                data-motion='card'
                className='text-center lg:text-left'
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
                <span className='text-indigo-600 dark:text-indigo-400 text-3xl sm:text-4xl font-bold block'>
                  {text7}
                </span>
                <span className='text-slate-500 dark:text-neutral-400 text-sm'>
                  {text8}
                </span>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  ),
};
