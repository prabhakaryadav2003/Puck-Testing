import React from "react";
import { HeroProps } from "../../../../types/puck/hero.types";

export default function HeroModernBistro({
  badge,
  subtitle,
  title,
  description,

  image,
  imageAlt,

  overlay = true,
  overlayOpacity = 50,

  primaryButton,
  secondaryButton,

  stats = [],
}: HeroProps) {
  return (
    <section className='relative overflow-hidden bg-neutral-950 text-white'>
      <div className='mx-auto grid min-h-[720px] max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-2 lg:px-8'>
        {/* Content */}
        <div>
          {badge && (
            <span className='inline-flex rounded-full border border-yellow-500/40 bg-yellow-500/10 px-4 py-1 text-sm font-medium uppercase tracking-widest text-yellow-400'>
              {badge}
            </span>
          )}

          {subtitle && (
            <p className='mt-8 text-sm uppercase tracking-[0.4em] text-neutral-400'>
              {subtitle}
            </p>
          )}

          <h1 className='mt-4 font-serif text-5xl font-light leading-tight md:text-6xl lg:text-7xl'>
            {title}
          </h1>

          <div className='mt-8 h-px w-32 bg-gradient-to-r from-yellow-500 to-transparent' />

          {description && (
            <p className='mt-8 max-w-xl text-lg leading-8 text-neutral-300'>
              {description}
            </p>
          )}

          <div className='mt-12 flex flex-wrap gap-4'>
            {primaryButton && (
              <a
                href={primaryButton.href}
                target={primaryButton.target}
                rel={
                  primaryButton.target === "_blank"
                    ? "noopener noreferrer"
                    : undefined
                }
                className='rounded-md bg-yellow-500 px-8 py-4 font-semibold text-black transition hover:bg-yellow-400'
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
                className='rounded-md border border-white/20 px-8 py-4 font-semibold transition hover:border-yellow-400 hover:text-yellow-400'
              >
                {secondaryButton.text}
              </a>
            )}
          </div>

          {stats.length > 0 && (
            <div className='mt-16 grid grid-cols-3 gap-8 border-t border-white/10 pt-8'>
              {stats.map((stat, index) => (
                <div key={index}>
                  <h3 className='font-serif text-3xl text-yellow-400'>
                    {stat.value}
                  </h3>

                  <p className='mt-2 text-sm text-neutral-400'>{stat.label}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Image */}
        <div className='relative'>
          <div className='absolute -left-6 -top-6 h-full w-full rounded-3xl border border-yellow-500/20' />

          <div className='relative overflow-hidden rounded-3xl shadow-2xl'>
            {image && (
              <img
                src={image}
                alt={imageAlt ?? title}
                className='h-[650px] w-full object-cover'
              />
            )}

            {overlay && (
              <div
                className='absolute inset-0 bg-black'
                style={{ opacity: overlayOpacity / 100 }}
              />
            )}

            <div className='absolute bottom-8 left-8 right-8 rounded-2xl border border-white/10 bg-black/50 p-6 backdrop-blur-md'>
              <p className='text-sm uppercase tracking-[0.3em] text-yellow-400'>
                Chef's Recommendation
              </p>

              <h3 className='mt-3 font-serif text-2xl'>
                Seasonal Tasting Menu
              </h3>

              <p className='mt-2 text-neutral-300'>
                Seven carefully curated courses paired with exceptional wines.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-transparent via-yellow-500 to-transparent' />
    </section>
  );
}
