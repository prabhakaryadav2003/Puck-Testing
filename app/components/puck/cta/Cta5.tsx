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

export interface Cta5Props {
  backgroundColor: ColorValue;
  backgroundImage: string;
  showBackgroundImage: boolean;
  showBackgroundOverlay: boolean;
  backgroundOverlayColor: ColorValue;
  backgroundOverlayOpacity: number;
  padding: SpacingValue;
  margin: SpacingValue;
  description: string;
  description1: string;
  title: string;
  description2: string;
  text: string;
  description3: string;
  text1: string;
  description4: string;
  text2: string;
  description5: string;
  image: string;
  imageAlt: string;
  image1: string;
  imageAlt1: string;
  image2: string;
  imageAlt2: string;
  image3: string;
  imageAlt3: string;
  image4: string;
  imageAlt4: string;
  href: string;
  linkText: string;
  href1: string;
  linkText1: string;
}

export const Cta5: ComponentConfig<Cta5Props> = {
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
    title: {
      label: "Title",
      type: "richtext",
      ...richTextNoHeading,
    },
    description2: {
      label: "Description 2",
      type: "richtext",
      ...richTextNoHeading,
    },
    text: {
      label: "Text",
      type: "richtext",
      ...richTextNoHeading,
    },
    description3: {
      label: "Description 3",
      type: "richtext",
      ...richTextNoHeading,
    },
    text1: {
      label: "Text 1",
      type: "richtext",
      ...richTextNoHeading,
    },
    description4: {
      label: "Description 4",
      type: "richtext",
      ...richTextNoHeading,
    },
    text2: {
      label: "Text 2",
      type: "richtext",
      ...richTextNoHeading,
    },
    description5: {
      label: "Description 5",
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
    image3: {
      label: "Image 3",
      type: "text",
    },
    imageAlt3: {
      label: "Image Alt 3",
      type: "text",
    },
    image4: {
      label: "Image 4",
      type: "text",
    },
    imageAlt4: {
      label: "Image Alt 4",
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
    description: "10,000+ teams",
    description1: "already on board",
    title: "Future-proof your business with intelligent solutions",
    description2:
      "Stay ahead of the competition with innovative technology tailored to your needs. Transform your operations and ensure long-term success.",
    text: "99.9%",
    description3: "Uptime guarantee",
    text1: "24/7",
    description4: "Expert support",
    text2: "150+",
    description5: "Integrations",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&auto=format&fit=crop&q=80",
    imageAlt: "Modern office space",
    image1:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80",
    imageAlt1: "User",
    image2:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
    imageAlt2: "User",
    image3:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&auto=format&fit=crop&q=80",
    imageAlt3: "User",
    image4:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop&q=80",
    imageAlt4: "User",
    href: "#",
    linkText: "Get Started Free",
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
    description,
    description1,
    title,
    description2,
    text,
    description3,
    text1,
    description4,
    text2,
    description5,
    image,
    imageAlt,
    image1,
    imageAlt1,
    image2,
    imageAlt2,
    image3,
    imageAlt3,
    image4,
    imageAlt4,
    href,
    linkText,
    href1,
    linkText1,
  }: Cta5Props) => (
    <section
      id='_cta_dark_background_centered_v6_001'
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
            className='relative rounded-3xl overflow-hidden min-h-[600px]'
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
            <motion.img
              data-motion='image'
              src={image}
              alt={imageAlt}
              className='absolute inset-0 w-full h-full object-cover'
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
            <div className='absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/70 to-slate-900/40'></div>

            <div className='relative z-10 h-full flex flex-col justify-end p-8 sm:p-12 lg:p-16'>
              <motion.div
                className='max-w-3xl'
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
                <motion.div
                  className='flex items-center gap-4 mb-8'
                  data-motion='card'
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
                  <div className='flex -space-x-3'>
                    <motion.img
                      data-motion='avatar'
                      src={image1}
                      alt={imageAlt1}
                      className='w-12 h-12 rounded-full border-2 border-slate-900 object-cover'
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
                    <motion.img
                      data-motion='avatar'
                      src={image2}
                      alt={imageAlt2}
                      className='w-12 h-12 rounded-full border-2 border-slate-900 object-cover'
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
                    <motion.img
                      data-motion='avatar'
                      src={image3}
                      alt={imageAlt3}
                      className='w-12 h-12 rounded-full border-2 border-slate-900 object-cover'
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
                    <motion.img
                      data-motion='avatar'
                      src={image4}
                      alt={imageAlt4}
                      className='w-12 h-12 rounded-full border-2 border-slate-900 object-cover'
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
                  <div>
                    <p className='text-white font-semibold'>{description}</p>
                    <p className='text-slate-400 text-sm'>{description1}</p>
                  </div>
                </motion.div>

                <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight'>
                  {title}
                </h2>

                <motion.p
                  className='text-slate-300 text-lg mt-6 max-w-2xl'
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

                <div className='flex flex-wrap gap-4 mt-10'>
                  <motion.a
                    href={href}
                    data-motion='button'
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
                    href={href1}
                    data-motion='button'
                    className='inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-xs hover:bg-white/20 text-white font-semibold rounded-full transition-colors'
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
              </motion.div>

              <div className='grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/20 max-w-2xl'>
                <motion.div
                  data-motion='card'
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
                  <span className='text-3xl font-bold text-white'>{text}</span>
                  <p className='text-slate-400 text-sm mt-1'>{description3}</p>
                </motion.div>
                <motion.div
                  data-motion='card'
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
                  <span className='text-3xl font-bold text-white'>{text1}</span>
                  <p className='text-slate-400 text-sm mt-1'>{description4}</p>
                </motion.div>
                <motion.div
                  data-motion='card'
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
                  <span className='text-3xl font-bold text-white'>{text2}</span>
                  <p className='text-slate-400 text-sm mt-1'>{description5}</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  ),
};
