"use client";

import React from "react";
import { ComponentConfig } from "@puckeditor/core";

export interface Hero2Props {
  sectionId: string;
  badge: React.ReactNode;
  heading: React.ReactNode;
  description: React.ReactNode;
  primaryButtonText: React.ReactNode;
  primaryButtonLink: string;
  secondaryButtonText: React.ReactNode;
  secondaryButtonLink: string;
}

function Hero2Preview({
  sectionId,
  badge,
  heading,
  description,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
}: Hero2Props) {
  const sectionStyle: React.CSSProperties = {
    paddingTop: "2rem",
    paddingBottom: "2rem",
    paddingLeft: "1rem",
    paddingRight: "1rem",
  };

  const cardStyle: React.CSSProperties = {
    background:
      "linear-gradient(135deg, var(--color-background), color-mix(in srgb, var(--color-background) 88%, var(--color-primary) 12%))",
    borderColor: "color-mix(in srgb, var(--color-foreground) 12%, transparent)",
    borderRadius: "calc(var(--radius) * 3px)",
    boxShadow: "0 20px 80px -30px rgba(15, 23, 42, 0.35)",
    marginTop: "0.5rem",
    marginBottom: "0.5rem",
  };

  const badgeStyle: React.CSSProperties = {
    background:
      "color-mix(in srgb, var(--color-background) 85%, var(--color-primary) 15%)",
    color: "var(--color-primary)",
    borderColor: "color-mix(in srgb, var(--color-primary) 20%, transparent)",
    borderRadius: "9999px",
  };

  const primaryButtonStyle: React.CSSProperties = {
    background: "var(--color-primary)",
    color: "var(--color-background)",
    borderRadius: "9999px",
  };

  const secondaryButtonStyle: React.CSSProperties = {
    background: "var(--color-background)",
    color: "var(--color-foreground)",
    borderColor: "color-mix(in srgb, var(--color-foreground) 15%, transparent)",
    borderRadius: "9999px",
  };

  const mutedCardStyle: React.CSSProperties = {
    background: "color-mix(in srgb, var(--color-background) 75%, transparent)",
    color: "var(--color-foreground)",
    borderRadius: "calc(var(--radius) * 2px)",
    borderColor: "color-mix(in srgb, var(--color-foreground) 10%, transparent)",
  };

  return (
    <section id={sectionId} style={sectionStyle} className='relative'>
      <div
        className='relative mx-auto max-w-7xl overflow-hidden border px-6 py-16 sm:px-10 sm:py-20 lg:px-14 lg:py-24'
        style={cardStyle}
      >
        <div className='pointer-events-none absolute inset-0'>
          <div
            className='absolute -left-20 top-0 h-48 w-48 rounded-full blur-3xl'
            style={{
              background:
                "color-mix(in srgb, var(--color-primary) 16%, transparent)",
            }}
          />
          <div
            className='absolute -bottom-20 right-0 h-64 w-64 rounded-full blur-3xl'
            style={{
              background:
                "color-mix(in srgb, var(--color-secondary) 16%, transparent)",
            }}
          />
        </div>

        <div className='relative mx-auto flex max-w-4xl flex-col items-center text-center'>
          <span
            className='inline-flex items-center border px-4 py-1.5 text-sm font-semibold shadow-sm backdrop-blur'
            style={badgeStyle}
          >
            {badge}
          </span>

          <h1
            className='mt-5 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl'
            style={{ color: "var(--color-foreground)" }}
          >
            {heading}
          </h1>

          <p
            className='mt-5 max-w-2xl text-base leading-7 sm:text-lg'
            style={{
              color:
                "color-mix(in srgb, var(--color-foreground) 70%, transparent)",
            }}
          >
            {description}
          </p>

          <div className='mt-8 flex flex-col gap-3 sm:flex-row sm:items-center'>
            <a
              href={primaryButtonLink}
              className='inline-flex h-12 items-center justify-center px-6 text-sm font-semibold shadow-lg transition hover:-translate-y-0.5'
              style={primaryButtonStyle}
            >
              {primaryButtonText}
            </a>

            <a
              href={secondaryButtonLink}
              className='inline-flex h-12 items-center justify-center border px-6 text-sm font-semibold shadow-sm transition hover:-translate-y-0.5'
              style={secondaryButtonStyle}
            >
              {secondaryButtonText}
            </a>
          </div>

          <div className='mt-10 grid w-full grid-cols-1 gap-3 sm:grid-cols-3'>
            <div
              className='border px-4 py-3 text-sm shadow-sm backdrop-blur'
              style={mutedCardStyle}
            >
              Clean layout
            </div>
            <div
              className='border px-4 py-3 text-sm shadow-sm backdrop-blur'
              style={mutedCardStyle}
            >
              Rich text editable
            </div>
            <div
              className='border px-4 py-3 text-sm shadow-sm backdrop-blur'
              style={mutedCardStyle}
            >
              Theme aware
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export const Hero2: ComponentConfig<Hero2Props> = {
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
    badge: "New • Built for modern teams",
    heading: "A simple hero that still feels premium.",
    description:
      "Use this section to introduce your product, service, or brand with a clean layout, editable rich text, and theme-driven colors that update instantly.",
    primaryButtonText: "Get Started",
    primaryButtonLink: "#",
    secondaryButtonText: "Learn More",
    secondaryButtonLink: "#",
  },

  render: (props) => <Hero2Preview {...props} />,
};

export default Hero2;
