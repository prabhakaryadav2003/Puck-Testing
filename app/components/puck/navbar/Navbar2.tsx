"use client";

import React, { useState } from "react";
import { ComponentConfig } from "@puckeditor/core";

export interface Navbar2Props {
  brandName: string;
  brandLink: string;

  homeLabel: string;
  homeLink: string;

  aboutLabel: string;
  aboutLink: string;

  menuLabel: string;
  menuLink: string;

  galleryLabel: string;
  galleryLink: string;

  contactLabel: string;
  contactLink: string;

  buttonLabel: string;
  buttonLink: string;
}

export const Navbar2: ComponentConfig<Navbar2Props> = {
  fields: {
    brandName: {
      type: "text",
    },
    brandLink: {
      type: "text",
    },

    homeLabel: {
      type: "text",
    },
    homeLink: {
      type: "text",
    },

    aboutLabel: {
      type: "text",
    },
    aboutLink: {
      type: "text",
    },

    menuLabel: {
      type: "text",
    },
    menuLink: {
      type: "text",
    },

    galleryLabel: {
      type: "text",
    },
    galleryLink: {
      type: "text",
    },

    contactLabel: {
      type: "text",
    },
    contactLink: {
      type: "text",
    },

    buttonLabel: {
      type: "text",
    },
    buttonLink: {
      type: "text",
    },
  },

  defaultProps: {
    brandName: "Restaurant",
    brandLink: "#hero",

    homeLabel: "Home",
    homeLink: "#hero",

    aboutLabel: "About",
    aboutLink: "#about",

    menuLabel: "Menu",
    menuLink: "#menu",

    galleryLabel: "Gallery",
    galleryLink: "#gallery",

    contactLabel: "Contact",
    contactLink: "#contact",

    buttonLabel: "Book Table",
    buttonLink: "#booking",
  },

  render: ({
    brandName,
    brandLink,
    homeLabel,
    homeLink,
    aboutLabel,
    aboutLink,
    menuLabel,
    menuLink,
    galleryLabel,
    galleryLink,
    contactLabel,
    contactLink,
    buttonLabel,
    buttonLink,
  }) => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
      { label: homeLabel, href: homeLink, active: true },
      { label: aboutLabel, href: aboutLink, active: false },
      { label: menuLabel, href: menuLink, active: false },
      { label: galleryLabel, href: galleryLink, active: false },
      { label: contactLabel, href: contactLink, active: false },
    ];

    return (
      <header className='sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur'>
        <nav
          className='mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8'
          aria-label='Global'
        >
          <a
            href={brandLink}
            className='text-xl font-bold tracking-tight text-gray-900 transition hover:text-blue-600'
            onClick={() => setIsOpen(false)}
          >
            {brandName}
          </a>

          <div className='hidden items-center gap-x-8 md:flex'>
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                  item.active ? "text-blue-600" : "text-gray-600"
                }`}
              >
                {item.label}
              </a>
            ))}

            <a
              href={buttonLink}
              className='inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700'
            >
              {buttonLabel}
            </a>
          </div>

          <button
            type='button'
            className='inline-flex items-center justify-center rounded-lg border border-gray-200 p-2 text-gray-700 transition hover:bg-gray-100 md:hidden'
            aria-label='Toggle navigation'
            aria-expanded={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <span className='sr-only'>Open menu</span>
            {isOpen ? (
              <svg
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth={2}
                aria-hidden='true'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            ) : (
              <svg
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth={2}
                aria-hidden='true'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
            )}
          </button>
        </nav>

        {isOpen && (
          <div className='border-t border-gray-200 bg-white md:hidden'>
            <div className='mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 sm:px-6 lg:px-8'>
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className='rounded-lg px-3 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-50 hover:text-blue-600'
                >
                  {item.label}
                </a>
              ))}

              <a
                href={buttonLink}
                onClick={() => setIsOpen(false)}
                className='mt-2 inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700'
              >
                {buttonLabel}
              </a>
            </div>
          </div>
        )}
      </header>
    );
  },
};
