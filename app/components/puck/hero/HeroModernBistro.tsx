import React from "react";
import { HeroProps } from "../../../../types/puck/hero.types";

export default function HeroModernBistro({
  badge,
  subtitle,
  title,
  description,

  image,
  imageAlt,

  primaryButton,
  secondaryButton,

  features = [],
}: HeroProps) {
  return (
    <section className='relative overflow-hidden bg-white'>
      {/* Background Decorations */}
      <div className='absolute -left-24 top-20 h-72 w-72 rounded-full bg-orange-100 blur-3xl' />
      <div className='absolute -right-24 bottom-20 h-80 w-80 rounded-full bg-amber-100 blur-3xl' />

      <div className='relative mx-auto max-w-7xl px-6 py-20 lg:px-8'>
        <div className='grid items-center gap-16 lg:grid-cols-2'>
          {/* Left */}
          <div>
            {badge && (
              <span className='inline-flex rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-700'>
                {badge}
              </span>
            )}

            {subtitle && (
              <p className='mt-8 text-sm font-semibold uppercase tracking-[0.35em] text-orange-500'>
                {subtitle}
              </p>
            )}

            <h1 className='mt-4 text-5xl font-black leading-tight tracking-tight text-gray-900 md:text-6xl'>
              {title}
            </h1>

            {description && (
              <p className='mt-8 max-w-xl text-lg leading-8 text-gray-600'>
                {description}
              </p>
            )}

            <div className='mt-10 flex flex-wrap gap-4'>
              {primaryButton && (
                <a
                  href={primaryButton.href}
                  target={primaryButton.target}
                  rel={
                    primaryButton.target === "_blank"
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className='rounded-xl bg-gray-900 px-7 py-4 font-semibold text-white transition hover:bg-orange-600'
                >
                  {primaryButton.text}
                </a>
              )}

              {secondaryButton && (
                <a
                  href={secondaryButton.href}
                  target={secondaryButton.target}
                  rel={
                    secondaryButton.target === "_blank"
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className='rounded-xl border border-gray-300 px-7 py-4 font-semibold text-gray-700 transition hover:border-orange-500 hover:text-orange-600'
                >
                  {secondaryButton.text}
                </a>
              )}
            </div>

            {/* Features */}

            {features.length > 0 && (
              <div className='mt-14 grid gap-5 sm:grid-cols-3'>
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className='rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg'
                  >
                    {feature.icon && (
                      <div className='mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-2xl'>
                        {feature.icon}
                      </div>
                    )}

                    <h3 className='font-semibold text-gray-900'>
                      {feature.title}
                    </h3>

                    <p className='mt-2 text-sm leading-6 text-gray-500'>
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right */}

          <div className='relative'>
            <div className='absolute -left-6 top-12 h-56 w-56 rounded-3xl bg-orange-500' />

            <div className='absolute bottom-0 right-0 h-48 w-48 rounded-full border-8 border-orange-200' />

            <div className='relative overflow-hidden rounded-[32px] shadow-2xl'>
              {image && (
                <img
                  src={image}
                  alt={imageAlt ?? title}
                  className='h-[650px] w-full object-cover'
                />
              )}
            </div>

            {/* Floating Reservation Card */}

            <div className='absolute -bottom-8 left-8 rounded-3xl bg-white p-6 shadow-2xl'>
              <p className='text-sm font-semibold uppercase tracking-widest text-orange-500'>
                Open Today
              </p>

              <h3 className='mt-2 text-2xl font-bold text-gray-900'>
                Reserve Your Seat
              </h3>

              <p className='mt-2 text-gray-500'>
                Lunch & Dinner • 11:00 AM – 11:00 PM
              </p>

              {primaryButton && (
                <a
                  href={primaryButton.href}
                  target={primaryButton.target}
                  rel={
                    primaryButton.target === "_blank"
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className='mt-5 inline-flex rounded-lg bg-orange-500 px-5 py-3 font-semibold text-white transition hover:bg-orange-600'
                >
                  {primaryButton.text}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
