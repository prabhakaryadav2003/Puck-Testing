"use client";

import React, { useState } from "react";
import { ComponentConfig } from "@puckeditor/core";

export interface ShuffleFAQProps {
  sectionId: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  ctaLabel: string;
  ctaLink: string;

  q1: string;
  a1: string;

  q2: string;
  a2: string;

  q3: string;
  a3: string;

  q4: string;
  a4: string;

  q5: string;
  a5: string;
}

function ShuffleFAQPreview({
  sectionId,
  eyebrow,
  title,
  subtitle,
  ctaLabel,
  ctaLink,
  q1,
  a1,
  q2,
  a2,
  q3,
  a3,
  q4,
  a4,
  q5,
  a5,
}: ShuffleFAQProps) {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const items = [
    { question: q1, answer: a1 },
    { question: q2, answer: a2 },
    { question: q3, answer: a3 },
    { question: q4, answer: a4 },
    { question: q5, answer: a5 },
  ];

  return (
    <section id={sectionId} className='relative bg-[#FAF7F2] py-16 sm:py-20'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='grid gap-12 lg:grid-cols-2 lg:items-start'>
          {/* Left side */}
          <div className='max-w-xl'>
            <span className='inline-flex items-center rounded-full bg-[#D4A373]/15 px-4 py-1.5 text-sm font-semibold text-[#8B5E3C]'>
              {eyebrow}
            </span>

            <h2 className='mt-5 text-4xl font-bold tracking-tight text-[#1F2937] sm:text-5xl'>
              {title}
            </h2>

            <p className='mt-5 max-w-lg text-base leading-8 text-[#6B7280] sm:text-lg'>
              {subtitle}
            </p>

            <a
              href={ctaLink}
              className='mt-8 inline-flex items-center justify-center rounded-2xl bg-[#8B5E3C] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#8B5E3C]/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#73492C] hover:shadow-xl'
            >
              {ctaLabel}
            </a>
          </div>

          {/* Right side */}
          <div className='space-y-3'>
            {items.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className='rounded-2xl border border-stone-200 bg-white shadow-sm transition-all duration-300 hover:border-[#D4A373]/60 hover:shadow-md'
                >
                  <button
                    type='button'
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className='flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6'
                    aria-expanded={isOpen}
                  >
                    <span className='text-base font-semibold text-[#1F2937] sm:text-[17px]'>
                      {item.question}
                    </span>

                    <span
                      className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-stone-100 text-[#8B5E3C] transition-transform duration-300 ${
                        isOpen ? "rotate-180" : "rotate-0"
                      }`}
                    >
                      <svg
                        className='h-4 w-4'
                        viewBox='0 0 16 16'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M4 6L8 10L12 6'
                          stroke='currentColor'
                          strokeWidth='1.5'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </svg>
                    </span>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className='overflow-hidden'>
                      <div className='px-5 pb-5 pt-0 sm:px-6'>
                        <p className='text-sm leading-7 text-[#6B7280] sm:text-base'>
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export const ShuffleFAQ: ComponentConfig<ShuffleFAQProps> = {
  fields: {
    sectionId: {
      type: "text",
    },
    eyebrow: {
      type: "text",
    },
    title: {
      type: "text",
    },
    subtitle: {
      type: "textarea",
    },
    ctaLabel: {
      type: "text",
    },
    ctaLink: {
      type: "text",
    },

    q1: { type: "text" },
    a1: { type: "textarea" },

    q2: { type: "text" },
    a2: { type: "textarea" },

    q3: { type: "text" },
    a3: { type: "textarea" },

    q4: { type: "text" },
    a4: { type: "textarea" },

    q5: { type: "text" },
    a5: { type: "textarea" },
  },

  defaultProps: {
    sectionId: "faq",
    eyebrow: "FAQ",
    title: "Frequently asked questions",
    subtitle:
      "Here are some common questions about our restaurant, reservations, menu, and dining experience.",
    ctaLabel: "Talk to us",
    ctaLink: "#contact",

    q1: "What is Bistro?",
    a1: "Bistro is a modern dining experience focused on handcrafted food, warm hospitality, and memorable moments for every guest.",

    q2: "How does reservation work?",
    a2: "You can reserve a table using the button above or by contacting us directly. We recommend booking in advance for weekends.",

    q3: "How much does it cost?",
    a3: "Pricing depends on the dishes you choose, but we keep our menu fair, fresh, and accessible for everyday dining.",

    q4: "Is there a free trial available?",
    a4: "For dining, there is no trial — but we do offer seasonal specials, limited-time offers, and tasting menus from time to time.",

    q5: "How can I contact support?",
    a5: "You can reach us through the contact section, by phone, or by email. Our team will be happy to help.",
  },

  render: (props) => <ShuffleFAQPreview {...props} />,
};

export default ShuffleFAQ;
