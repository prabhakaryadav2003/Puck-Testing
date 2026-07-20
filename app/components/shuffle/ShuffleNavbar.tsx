"use client";

import React, { useState } from "react";
import { ComponentConfig } from "@puckeditor/core";

export interface ShuffleNavbarProps {
  sectionId: string;
  logo: string;

  productLabel: React.ReactNode;
  productLink: string;

  featuresLabel: React.ReactNode;
  featuresLink: string;

  pricingLabel: React.ReactNode;
  pricingLink: string;

  resourcesLabel: React.ReactNode;
  resourcesLink: string;

  loginLabel: React.ReactNode;
  loginLink: string;

  ctaLabel: React.ReactNode;
  ctaLink: string;
}

function ShuffleNavbarPreview({
  sectionId,
  logo,
  productLabel,
  productLink,
  featuresLabel,
  featuresLink,
  pricingLabel,
  pricingLink,
  resourcesLabel,
  resourcesLink,
  loginLabel,
  loginLink,
  ctaLabel,
  ctaLink,
}: ShuffleNavbarProps) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <section id={sectionId} className='relative bg-white'>
      <nav>
        <div className='container mx-auto px-4'>
          <div className='relative flex h-24 items-center'>
            <a className='inline-block' href='#'>
              <img className='h-10' src={logo} alt='Logo' />
            </a>

            <button
              type='button'
              onClick={() => setMobileNavOpen((prev) => !prev)}
              className='ml-auto flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-b from-[#2F5233] to-[#1F3A23] text-white shadow-lg transition hover:scale-105 lg:hidden'
              aria-label='Open navigation menu'
            >
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M3 5H21'
                  stroke='currentColor'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M3 12H21'
                  stroke='currentColor'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M3 19H21'
                  stroke='currentColor'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </button>

            <div className='absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center lg:flex'>
              <a
                className='mr-10 inline-block transition hover:text-[#2F5233]'
                href={productLink}
              >
                <div className='flex items-center'>
                  <span className='mr-3'>{productLabel}</span>
                  <svg
                    width='10'
                    height='6'
                    viewBox='0 0 10 6'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M1 1L5 5L9 1'
                      stroke='currentColor'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </div>
              </a>

              <a
                className='mr-10 inline-block transition hover:text-[#2F5233]'
                href={featuresLink}
              >
                {featuresLabel}
              </a>

              <a
                className='mr-10 inline-block transition hover:text-[#2F5233]'
                href={pricingLink}
              >
                {pricingLabel}
              </a>

              <a
                className='inline-block transition hover:text-[#2F5233]'
                href={resourcesLink}
              >
                {resourcesLabel}
              </a>
            </div>

            <div className='ml-auto hidden lg:block'>
              <a
                className='mr-4 inline-flex h-10 items-center justify-center rounded-lg border border-gray-200 px-4 text-sm font-semibold text-gray-700 shadow-sm transition duration-200 hover:border-[#2F5233] hover:text-[#2F5233]'
                href={loginLink}
              >
                {loginLabel}
              </a>

              <a
                className='inline-flex h-10 items-center justify-center rounded-lg border border-[#2F5233] bg-gradient-to-b from-[#2F5233] to-[#1F3A23] px-4 text-sm font-semibold text-white shadow-lg transition duration-200 hover:scale-[1.02]'
                href={ctaLink}
              >
                {ctaLabel}
              </a>
            </div>
          </div>
        </div>
      </nav>

      <div
        className={`fixed left-0 top-0 bottom-0 z-50 w-5/6 max-w-md transition-transform duration-300 lg:hidden ${
          mobileNavOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          type='button'
          aria-label='Close navigation overlay'
          onClick={() => setMobileNavOpen(false)}
          className={`fixed inset-0 bg-teal-800/70 transition-opacity duration-300 ${
            mobileNavOpen ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
        />

        <nav className='relative flex h-full w-full flex-col overflow-y-auto bg-white px-10 py-6'>
          <div className='mb-auto flex items-center'>
            <a className='mr-auto inline-block' href='#'>
              <img className='h-10' src={logo} alt='Logo' />
            </a>

            <button
              type='button'
              onClick={() => setMobileNavOpen(false)}
              aria-label='Close navigation menu'
            >
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M6 18L18 6M6 6L18 18'
                  stroke='#111827'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </button>
          </div>

          <div className='py-12'>
            <ul className='flex flex-col'>
              <li className='mb-6'>
                <a
                  className='inline-block text-black'
                  href={productLink}
                  onClick={() => setMobileNavOpen(false)}
                >
                  {productLabel}
                </a>
              </li>
              <li className='mb-6'>
                <a
                  className='inline-block text-black'
                  href={featuresLink}
                  onClick={() => setMobileNavOpen(false)}
                >
                  {featuresLabel}
                </a>
              </li>
              <li className='mb-6'>
                <a
                  className='inline-block text-black'
                  href={pricingLink}
                  onClick={() => setMobileNavOpen(false)}
                >
                  {pricingLabel}
                </a>
              </li>
              <li>
                <a
                  className='inline-block text-black'
                  href={resourcesLink}
                  onClick={() => setMobileNavOpen(false)}
                >
                  {resourcesLabel}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <a
              className='mb-4 flex h-12 items-center justify-center rounded-lg border border-gray-200 px-4 text-base font-semibold text-gray-700 shadow-lg transition duration-200 hover:bg-gray-100'
              href={loginLink}
              onClick={() => setMobileNavOpen(false)}
            >
              {loginLabel}
            </a>

            <a
              className='flex h-12 items-center justify-center rounded-lg bg-gradient-to-b from-[#2F5233] to-[#1F3A23] px-4 text-base font-semibold text-white shadow-lg transition duration-200'
              href={ctaLink}
              onClick={() => setMobileNavOpen(false)}
            >
              {ctaLabel}
            </a>
          </div>
        </nav>
      </div>
    </section>
  );
}

export const ShuffleNavbar: ComponentConfig<ShuffleNavbarProps> = {
  fields: {
    sectionId: {
      type: "text",
    },
    logo: {
      type: "text",
    },

    productLabel: {
      type: "richtext",
      contentEditable: true,
    },
    productLink: {
      type: "text",
    },

    featuresLabel: {
      type: "richtext",
      contentEditable: true,
    },
    featuresLink: {
      type: "text",
    },

    pricingLabel: {
      type: "richtext",
      contentEditable: true,
    },
    pricingLink: {
      type: "text",
    },

    resourcesLabel: {
      type: "richtext",
      contentEditable: true,
    },
    resourcesLink: {
      type: "text",
    },

    loginLabel: {
      type: "richtext",
      contentEditable: true,
    },
    loginLink: {
      type: "text",
    },

    ctaLabel: {
      type: "richtext",
      contentEditable: true,
    },
    ctaLink: {
      type: "text",
    },
  },

  defaultProps: {
    sectionId: "navbar",
    logo: "https://dummyimage.com/160x40/0f172a/ffffff&text=Aurora",

    productLabel: "Product",
    productLink: "#",

    featuresLabel: "Features",
    featuresLink: "#",

    pricingLabel: "Pricing",
    pricingLink: "#",

    resourcesLabel: "Resources",
    resourcesLink: "#",

    loginLabel: "Login",
    loginLink: "#",

    ctaLabel: "Get Started",
    ctaLink: "#",
  },

  render: (props) => <ShuffleNavbarPreview {...props} />,
};

export default ShuffleNavbar;
