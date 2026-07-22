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

export interface About4Props {
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
  title1: string;
  description: string;
  text1: string;
  text2: string;
  text3: string;
  text4: string;
  image: string;
  imageAlt: string;
  image1: string;
  imageAlt1: string;
  href: string;
  linkText: string;
}

export const About4: ComponentConfig<About4Props> = {
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
    title1: {
      label: "Title 1",
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
    text: "Discover Our Story",
    title: "Redefining Online Shopping",
    title1: "From Local Shop to Global Marketplace",
    description:
      "What started as a small boutique has grown into a trusted destination for millions of shoppers worldwide. Our commitment to quality products and exceptional service drives everything we do.",
    text1: "Happy Customers",
    text2: "2.5M+",
    text3: "Orders Delivered",
    text4: "10M+",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&auto=format&fit=crop&q=80",
    imageAlt: "Shopping experience",
    image1:
      "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&auto=format&fit=crop&q=80",
    imageAlt1: "Product packaging",
    href: "#",
    linkText: "Learn Our Story",
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
    title1,
    description,
    text1,
    text2,
    text3,
    text4,
    image,
    imageAlt,
    image1,
    imageAlt1,
    href,
    linkText,
  }: About4Props) => (
    <section
      id='_about_bento_grid_stats_v6_001'
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
          <div className='text-center max-w-3xl mx-auto mb-12'>
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
            <h2 className='text-slate-900 dark:text-white text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight'>
              {title}
            </h2>
          </div>

          <div className='grid lg:grid-cols-3 gap-5'>
            <motion.div
              data-motion='card'
              className='lg:col-span-2 p-8 bg-indigo-50 dark:bg-indigo-900/20 rounded-3xl flex flex-col justify-between gap-6'
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
                <h3 className='text-slate-900 dark:text-white text-2xl sm:text-3xl font-bold mb-4'>
                  {title1}
                </h3>
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
                  {description}
                </motion.p>
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

            <motion.div
              data-motion='card'
              className='p-8 bg-slate-50 dark:bg-neutral-900 rounded-3xl flex flex-col justify-between'
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
              <span className='text-slate-500 dark:text-neutral-400 text-sm'>
                {text1}
              </span>
              <span className='text-indigo-600 dark:text-indigo-400 text-5xl font-bold'>
                {text2}
              </span>
            </motion.div>

            <motion.div
              data-motion='image'
              className='h-64 rounded-3xl overflow-hidden'
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
              data-motion='image'
              className='h-64 rounded-3xl overflow-hidden'
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
                src={image1}
                alt={imageAlt1}
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
              className='p-8 bg-slate-50 dark:bg-neutral-900 rounded-3xl flex flex-col justify-between'
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
              <span className='text-slate-500 dark:text-neutral-400 text-sm'>
                {text3}
              </span>
              <span className='text-indigo-600 dark:text-indigo-400 text-5xl font-bold'>
                {text4}
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  ),
};
