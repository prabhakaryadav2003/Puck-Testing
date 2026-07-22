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

export interface Cta3Props {
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
  buttonText: string;
}

export const Cta3: ComponentConfig<Cta3Props> = {
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
    buttonText: {
      label: "Button Text",
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
    text: "Newsletter",
    title: "Get weekly insights delivered",
    description:
      "Join 25,000+ creators who receive our curated newsletter every Tuesday.",
    description1: "No spam, unsubscribe anytime. Read our Privacy Policy",
    buttonText: "Subscribe",
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
    buttonText,
  }: Cta3Props) => (
    <section
      id='_cta_newsletter_simple_v6_001'
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
          <motion.div
            data-motion='container'
            className='max-w-2xl mx-auto p-10 sm:p-14 bg-indigo-50 dark:bg-indigo-900/20 rounded-3xl text-center'
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
              className='inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-100 dark:bg-indigo-900/40 rounded-full text-indigo-600 dark:text-indigo-400 text-sm font-medium'
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

            <h2 className='mt-6 text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white'>
              {title}
            </h2>

            <p className='mt-4 text-lg text-slate-600 dark:text-neutral-400 max-w-md mx-auto'>
              {description}
            </p>

            <div className='mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto'>
              <motion.input
                data-motion='input'
                type='email'
                placeholder='Enter your email'
                className='flex-1 px-5 py-3.5 bg-white dark:bg-neutral-900 border border-slate-200 dark:border-neutral-700 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-indigo-500 focus:border-transparent psono-icon-injected securepass-findIdentityInputFields-covered'
                style={{
                  backgroundPosition:
                    "right 20px center, right 35px center !important",
                  backgroundSize: "11px 11px, 16px 16px !important",
                  backgroundRepeat: "no-repeat, no-repeat !important",
                }}
                autoComplete='email'
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
              <motion.button
                data-motion='button'
                type='button'
                className='px-6 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition-colors whitespace-nowrap'
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
                {buttonText}
              </motion.button>
            </div>

            <motion.p
              data-motion='social-proof'
              className='mt-6 text-sm text-slate-500 dark:text-neutral-400'
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
              {description1}
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  ),
};
