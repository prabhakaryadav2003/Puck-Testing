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

export interface Hero2Props {
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
  image: string;
  imageAlt: string;
  image1: string;
  imageAlt1: string;
  image2: string;
  imageAlt2: string;
  href: string;
  linkText: string;
  href1: string;
  linkText1: string;
}

export const Hero2: ComponentConfig<Hero2Props> = {
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
    image2: {
      label: "Image 2",
      type: "text",
    },
    imageAlt2: {
      label: "Image Alt 2",
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
    text: "Baked Fresh Daily",
    title: "Crafted With Love",
    description:
      "Traditional recipes meet modern artistry. Every loaf, every pastry, every bite tells a story of passion and craftsmanship.",
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1200&auto=format&fit=crop&q=80",
    imageAlt: "Fresh bread",
    image1:
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600&auto=format&fit=crop&q=80",
    imageAlt1: "Croissants",
    image2:
      "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=600&auto=format&fit=crop&q=80",
    imageAlt2: "Pastries",
    href: "#",
    linkText: "Order Online",
    href1: "#",
    linkText1: "Visit Bakery",
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
    image,
    imageAlt,
    image1,
    imageAlt1,
    image2,
    imageAlt2,
    href,
    linkText,
    href1,
    linkText1,
  }: Hero2Props) => (
    <section
      id='_hero_artisan_bakery_v6_001'
      className='py-20 sm:py-24 bg-indigo-50 dark:bg-neutral-950 relative'
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
          <div className='grid lg:grid-cols-2 gap-12 lg:gap-20 items-center'>
            <div>
              <motion.span
                data-motion='badge'
                className='text-indigo-600 dark:text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-6 block'
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
              <h1>{title}</h1>
              <motion.p
                data-animate='text'
                className='mt-8 text-xl text-slate-600 dark:text-neutral-400 leading-relaxed max-w-lg'
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
                data-motion='button'
                className='flex flex-wrap gap-4 mt-10'
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
                <motion.a
                  data-motion='button'
                  href={href}
                  className='px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-full transition-colors'
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
                  data-motion='button'
                  href={href1}
                  className='px-8 py-4 bg-white dark:bg-neutral-900 text-slate-900 dark:text-white font-semibold rounded-full border-2 border-indigo-600 hover:bg-indigo-600 hover:text-white transition-all'
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
              </motion.div>
            </div>

            <div className='grid grid-cols-2 gap-4'>
              <motion.div
                data-motion='image'
                className='col-span-2 rounded-3xl overflow-hidden h-72'
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
                  className='w-full h-full object-cover hover:scale-105 transition-transform duration-700'
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
                className='rounded-2xl overflow-hidden h-48'
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
                  className='w-full h-full object-cover hover:scale-105 transition-transform duration-700'
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
                className='rounded-2xl overflow-hidden h-48'
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
                  src={image2}
                  alt={imageAlt2}
                  className='w-full h-full object-cover hover:scale-105 transition-transform duration-700'
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
          </div>
        </div>
      </div>
    </section>
  ),
};
