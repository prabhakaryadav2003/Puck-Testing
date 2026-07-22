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

export interface Cta4Props {
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
  text1: string;
  text2: string;
  text3: string;
  text4: string;
  title1: string;
  description: string;
  href: string;
  linkText: string;
}

export const Cta4: ComponentConfig<Cta4Props> = {
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
    text: "Get Started",
    title: "Ready to transform your brand?",
    text1: "Fresh visual identity that stands out",
    text2: "Website that converts visitors",
    text3: "Expert design strategy guidance",
    text4: "Ongoing support and optimization",
    title1: "Let's create something amazing",
    description:
      "Book a free 30-minute consultation to discuss your project goals.",
    href: "#",
    linkText: "Schedule a Call",
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
    text1,
    text2,
    text3,
    text4,
    title1,
    description,
    href,
    linkText,
  }: Cta4Props) => (
    <section
      id='_cta_checklist_contact_v6_001'
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
          <div className='grid lg:grid-cols-3 gap-6'>
            <motion.div
              data-motion='card'
              className='lg:col-span-2 p-8 sm:p-10 bg-slate-50 dark:bg-neutral-900 rounded-3xl'
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
                {text}
              </motion.span>
              <h2 className='mt-4 text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white leading-tight'>
                {title}
              </h2>

              <div className='mt-8 grid sm:grid-cols-2 gap-4'>
                <div className='flex items-start gap-3'>
                  <div className='w-2 h-2 mt-2 bg-indigo-500 rounded-full shrink-0'></div>
                  <span className='text-slate-700 dark:text-neutral-300'>
                    {text1}
                  </span>
                </div>
                <div className='flex items-start gap-3'>
                  <div className='w-2 h-2 mt-2 bg-indigo-500 rounded-full shrink-0'></div>
                  <span className='text-slate-700 dark:text-neutral-300'>
                    {text2}
                  </span>
                </div>
                <div className='flex items-start gap-3'>
                  <div className='w-2 h-2 mt-2 bg-indigo-500 rounded-full shrink-0'></div>
                  <span className='text-slate-700 dark:text-neutral-300'>
                    {text3}
                  </span>
                </div>
                <div className='flex items-start gap-3'>
                  <div className='w-2 h-2 mt-2 bg-indigo-500 rounded-full shrink-0'></div>
                  <span className='text-slate-700 dark:text-neutral-300'>
                    {text4}
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div
              data-motion='card'
              className='p-8 bg-indigo-50 dark:bg-indigo-900/20 rounded-3xl flex flex-col justify-between'
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
                <h3 className='text-xl font-bold text-slate-900 dark:text-white'>
                  {title1}
                </h3>
                <p className='mt-3 text-slate-600 dark:text-neutral-400 text-sm leading-relaxed'>
                  {description}
                </p>
              </div>

              <div className='mt-8'>
                <motion.a
                  data-motion='button'
                  href={href}
                  className='inline-flex items-center gap-3 text-indigo-600 dark:text-indigo-400 font-semibold group'
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
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  ),
};
