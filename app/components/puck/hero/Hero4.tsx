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

export interface Hero4Props {
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
  description1: string;
  text2: string;
  description2: string;
  image: string;
  imageAlt: string;
  href: string;
  linkText: string;
  href1: string;
  linkText1: string;
}

export const Hero4: ComponentConfig<Hero4Props> = {
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
    description1: {
      label: "Description 1",
      type: "richtext",
      ...richTextNoHeading,
    },
    text2: {
      label: "Text 2",
      type: "richtext",
      ...richTextNoHeading,
    },
    description2: {
      label: "Description 2",
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
    text: "Three Michelin Stars",
    title: "A Culinary Journey",
    description:
      "Where every dish tells a story. Experience the artistry of Chef Laurent's innovative tasting menus, crafted from the finest seasonal ingredients.",
    text1: "Dinner Service",
    description1: "Tue - Sat, 6pm - 11pm",
    text2: "Tasting Menu",
    description2: "From $295 per person",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&auto=format&fit=crop&q=80",
    imageAlt: "Fine dining",
    href: "#",
    linkText: "Reserve Table",
    href1: "#",
    linkText1: "View Menu",
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
    description1,
    text2,
    description2,
    image,
    imageAlt,
    href,
    linkText,
    href1,
    linkText1,
  }: Hero4Props) => (
    <section
      id='_hero_gourmet_restaurant_v6_001'
      className='relative min-h-screen'
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
        <div className='absolute inset-0'>
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
          <div className='absolute inset-0 bg-linear-to-r from-slate-900/95 via-slate-900/60 to-transparent'></div>
        </div>

        <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center'>
          <div className='max-w-2xl py-20'>
            <motion.span
              data-motion='badge'
              className='inline-flex items-center gap-2 text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-6'
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
              className='mt-8 text-xl text-white/80 leading-relaxed'
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
              <a
                href={href}
                className='px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition-colors'
              >
                {linkText}
              </a>
              <a
                href={href1}
                className='px-8 py-4 bg-white/10 backdrop-blur-xs text-white font-semibold border border-white/30 hover:bg-white/20 transition-colors'
              >
                {linkText1}
              </a>
            </motion.div>

            <motion.div
              data-motion='info'
              className='mt-16 p-6 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 inline-block'
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
              <div className='flex items-center gap-6'>
                <div>
                  <span className='text-white/60 text-sm'>{text1}</span>
                  <p className='text-white font-semibold'>{description1}</p>
                </div>

                <div>
                  <span className='text-white/60 text-sm'>{text2}</span>
                  <p className='text-white font-semibold'>{description2}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  ),
};
