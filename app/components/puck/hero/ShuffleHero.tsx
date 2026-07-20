"use client";

import React from "react";
import { ComponentConfig } from "@puckeditor/core";

export interface ShuffleHeroProps {
  sectionId: string;
  eyebrow: string;
  titleLine1: string;
  titleLine2: string;
  description: string;
  ctaLabel: string;
  ctaLink: string;

  image1: string;
  image2: string;
  image3: string;
  image4: string;
  image5: string;
  image6: string;

  stat1Value: string;
  stat1Label: string;
  stat2Value: string;
  stat2Label: string;
}

export const ShuffleHero: ComponentConfig<ShuffleHeroProps> = {
  fields: {
    sectionId: { type: "text" },
    eyebrow: { type: "text" },
    titleLine1: { type: "text" },
    titleLine2: { type: "text" },
    description: { type: "textarea" },
    ctaLabel: { type: "text" },
    ctaLink: { type: "text" },

    image1: { type: "text" },
    image2: { type: "text" },
    image3: { type: "text" },
    image4: { type: "text" },
    image5: { type: "text" },
    image6: { type: "text" },

    stat1Value: { type: "text" },
    stat1Label: { type: "text" },
    stat2Value: { type: "text" },
    stat2Label: { type: "text" },
  },

  defaultProps: {
    sectionId: "gallery",
    eyebrow: "Gallery",
    titleLine1: "Endless",
    titleLine2: "Inspiration",
    description:
      "A continuous flow of creative moments captured through our lens.",
    ctaLabel: "View All",
    ctaLink: "#",

    image1:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&auto=format&fit=crop&q=80",
    image2:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&auto=format&fit=crop&q=80",
    image3:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&auto=format&fit=crop&q=80",
    image4:
      "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=600&auto=format&fit=crop&q=80",
    image5:
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&auto=format&fit=crop&q=80",
    image6:
      "https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=600&auto=format&fit=crop&q=80",

    stat1Value: "500+",
    stat1Label: "Events Captured",
    stat2Value: "98%",
    stat2Label: "Happy Clients",
  },

  render: ({
    sectionId,
    eyebrow,
    titleLine1,
    titleLine2,
    description,
    ctaLabel,
    ctaLink,
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    stat1Value,
    stat1Label,
    stat2Value,
    stat2Label,
  }) => {
    const row1 = [image1, image2, image3];
    const row2 = [image4, image5, image6];

    return (
      <section
        id={sectionId}
        className='bg-white py-20 sm:py-24 overflow-hidden'
      >
        <style>{`
          @keyframes marquee-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          @keyframes marquee-right {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }

          .marquee-left {
            animation: marquee-left 24s linear infinite;
          }

          .marquee-right {
            animation: marquee-right 24s linear infinite;
          }

          .marquee-left:hover,
          .marquee-right:hover {
            animation-play-state: paused;
          }
        `}</style>

        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='mb-14 flex flex-col justify-between gap-8 lg:flex-row lg:items-end'>
            <div className='max-w-2xl'>
              <span className='text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600'>
                {eyebrow}
              </span>

              <h2 className='mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl'>
                {titleLine1}{" "}
                <span className='text-indigo-600'>{titleLine2}</span>
              </h2>

              <p className='mt-4 max-w-xl text-lg text-slate-600'>
                {description}
              </p>
            </div>

            <a
              href={ctaLink}
              className='inline-flex w-fit items-center gap-2 font-semibold text-indigo-600 transition-all hover:gap-3'
            >
              {ctaLabel}
              <svg
                className='h-5 w-5'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M17 8l4 4m0 0l-4 4m4-4H3'
                />
              </svg>
            </a>
          </div>

          <div className='space-y-5'>
            <div className='overflow-hidden'>
              <div className='marquee-left flex w-max gap-5'>
                <div className='flex gap-5'>
                  {row1.map((src, index) => (
                    <div
                      key={index}
                      className='group h-56 w-80 shrink-0 overflow-hidden rounded-2xl'
                    >
                      <img
                        src={src}
                        alt={`Gallery ${index + 1}`}
                        className='h-full w-full object-cover transition-transform duration-700 group-hover:scale-110'
                      />
                    </div>
                  ))}
                </div>

                <div className='flex gap-5'>
                  {row1.map((src, index) => (
                    <div
                      key={`dup-${index}`}
                      className='group h-56 w-80 shrink-0 overflow-hidden rounded-2xl'
                    >
                      <img
                        src={src}
                        alt={`Gallery duplicate ${index + 1}`}
                        className='h-full w-full object-cover transition-transform duration-700 group-hover:scale-110'
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className='overflow-hidden'>
              <div className='marquee-right flex w-max gap-5'>
                <div className='flex gap-5'>
                  {row2.map((src, index) => (
                    <div
                      key={index}
                      className='group h-56 w-80 shrink-0 overflow-hidden rounded-2xl'
                    >
                      <img
                        src={src}
                        alt={`Gallery ${index + 4}`}
                        className='h-full w-full object-cover transition-transform duration-700 group-hover:scale-110'
                      />
                    </div>
                  ))}
                </div>

                <div className='flex gap-5'>
                  {row2.map((src, index) => (
                    <div
                      key={`dup2-${index}`}
                      className='group h-56 w-80 shrink-0 overflow-hidden rounded-2xl'
                    >
                      <img
                        src={src}
                        alt={`Gallery duplicate ${index + 4}`}
                        className='h-full w-full object-cover transition-transform duration-700 group-hover:scale-110'
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className='mt-16 border-t border-slate-200 pt-12'>
            <div className='grid grid-cols-2 gap-8 md:grid-cols-4'>
              <div className='text-center'>
                <div className='text-3xl font-bold text-indigo-600'>
                  {stat1Value}
                </div>
                <p className='mt-1 text-slate-600'>{stat1Label}</p>
              </div>

              <div className='text-center'>
                <div className='text-3xl font-bold text-indigo-600'>
                  {stat2Value}
                </div>
                <p className='mt-1 text-slate-600'>{stat2Label}</p>
              </div>

              <div className='text-center'>
                <div className='text-3xl font-bold text-indigo-600'>10K+</div>
                <p className='mt-1 text-slate-600'>Photos Delivered</p>
              </div>

              <div className='text-center'>
                <div className='text-3xl font-bold text-indigo-600'>8+</div>
                <p className='mt-1 text-slate-600'>Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  },
};

export default ShuffleHero;
