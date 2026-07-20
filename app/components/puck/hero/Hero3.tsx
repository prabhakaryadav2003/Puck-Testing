"use client";

import React from "react";
import { ComponentConfig } from "@puckeditor/core";

export interface Hero3Props {
  sectionId: string;
  badge: React.ReactNode;
  heading: React.ReactNode;
  description: React.ReactNode;
  primaryButtonText: React.ReactNode;
  primaryButtonLink: string;
  secondaryButtonText: React.ReactNode;
  secondaryButtonLink: string;
}

function Hero3Preview({
  sectionId,
  badge,
  heading,
  description,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
}: Hero3Props) {
  return (
    <section
      id={sectionId}
      className='px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12'
    >
      <div
        className='mx-auto max-w-6xl rounded-3xl border px-6 py-16 shadow-[0_20px_80px_-30px_rgba(15,23,42,0.25)] sm:px-10 sm:py-20 lg:px-14 lg:py-24'
        style={{
          background:
            "linear-gradient(135deg, var(--color-background), color-mix(in srgb, var(--color-background) 88%, var(--color-primary) 12%))",
          borderColor:
            "color-mix(in srgb, var(--color-foreground) 12%, transparent)",
          borderRadius: "calc(var(--radius) * 3px)",
        }}
      >
        <div className='mx-auto flex max-w-3xl flex-col items-center text-center'>
          <span
            className='inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-semibold shadow-sm backdrop-blur'
            style={{
              background:
                "color-mix(in srgb, var(--color-background) 85%, var(--color-primary) 15%)",
              color: "var(--color-primary)",
              borderColor:
                "color-mix(in srgb, var(--color-primary) 20%, transparent)",
            }}
          >
            {badge}
          </span>

          <h1
            className='mt-5 max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl'
            style={{ color: "var(--color-foreground)" }}
          >
            {heading}
          </h1>

          <p
            className='mt-5 max-w-2xl text-base leading-7 sm:text-lg'
            style={{
              color:
                "color-mix(in srgb, var(--color-foreground) 72%, transparent)",
            }}
          >
            {description}
          </p>

          <div className='mt-8 flex flex-col gap-3 sm:flex-row sm:items-center'>
            <a
              href={primaryButtonLink}
              className='inline-flex h-12 items-center justify-center px-6 text-sm font-semibold shadow-lg transition hover:-translate-y-0.5'
              style={{
                background: "var(--color-primary)",
                color: "var(--color-background)",
                borderRadius: "9999px",
              }}
            >
              {primaryButtonText}
            </a>

            <a
              href={secondaryButtonLink}
              className='inline-flex h-12 items-center justify-center border px-6 text-sm font-semibold shadow-sm transition hover:-translate-y-0.5'
              style={{
                background: "var(--color-background)",
                color: "var(--color-foreground)",
                borderColor:
                  "color-mix(in srgb, var(--color-foreground) 15%, transparent)",
                borderRadius: "9999px",
              }}
            >
              {secondaryButtonText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export const Hero3: ComponentConfig<Hero3Props> = {
  fields: {
    sectionId: {
      type: "text",
    },
    badge: {
      type: "richtext",
      contentEditable: true,
    },
    heading: {
      type: "richtext",
      contentEditable: true,
    },
    description: {
      type: "richtext",
      contentEditable: true,
    },
    primaryButtonText: {
      type: "richtext",
      contentEditable: true,
    },
    primaryButtonLink: {
      type: "text",
    },
    secondaryButtonText: {
      type: "richtext",
      contentEditable: true,
    },
    secondaryButtonLink: {
      type: "text",
    },
  },

  defaultProps: {
    sectionId: "hero",
    badge: "Minimal • Editable",
    heading: "A clean hero built for quick editing.",
    description:
      "Keep it simple, let the text stand out, and use the theme plugin to update colors instantly across the section.",
    primaryButtonText: "Get Started",
    primaryButtonLink: "#",
    secondaryButtonText: "Learn More",
    secondaryButtonLink: "#",
  },

  render: (props) => <Hero3Preview {...props} />,
};

export default Hero3;
