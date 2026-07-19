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
    brandName: "Bistro",
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

    buttonLabel: "Reserve Table",
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
      <header className='sticky top-0 z-50 w-full border-b border-stone-200/80 bg-[#FAF7F2]/95 backdrop-blur-xl'>
        <div className='absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D4A373] to-transparent' />

        <nav
          className='mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8'
          aria-label='Global'
        >
          <a
            href={brandLink}
            onClick={() => setIsOpen(false)}
            className='group flex items-center gap-3 transition-transform duration-300 hover:scale-[1.01]'
          >
            <div className='flex h-11 w-11 items-center justify-center rounded-2xl bg-[#8B5E3C] text-lg font-bold text-white shadow-lg shadow-[#8B5E3C]/20 transition-transform duration-300 group-hover:-rotate-3'>
              {brandName.charAt(0).toUpperCase()}
            </div>

            <div className='leading-tight'>
              <div className='text-xl font-bold tracking-tight text-[#1F2937]'>
                {brandName}
              </div>
              <div className='-mt-0.5 text-[11px] font-medium uppercase tracking-[0.28em] text-[#8B5E3C]/80'>
                Premium Dining
              </div>
            </div>
          </a>

          <div className='hidden items-center gap-2 lg:flex'>
            <div className='mr-2 flex items-center gap-1 rounded-full border border-stone-200 bg-white px-2 py-1 shadow-sm'>
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`group relative rounded-full px-4 py-2 text-[15px] font-medium transition-all duration-300 ${
                    item.active
                      ? "text-[#8B5E3C]"
                      : "text-stone-600 hover:text-[#8B5E3C]"
                  }`}
                >
                  <span className='relative z-10'>{item.label}</span>
                  <span
                    className={`absolute inset-x-3 bottom-1 h-0.5 origin-left rounded-full bg-[#8B5E3C] transition-all duration-300 ${
                      item.active
                        ? "scale-x-100 opacity-100"
                        : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100"
                    }`}
                  />
                </a>
              ))}
            </div>

            <a
              href={buttonLink}
              className='inline-flex items-center justify-center rounded-2xl bg-[#8B5E3C] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#8B5E3C]/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#73492C] hover:shadow-xl hover:shadow-[#8B5E3C]/25 active:translate-y-0'
            >
              {buttonLabel}
            </a>
          </div>

          <button
            type='button'
            className='inline-flex items-center justify-center rounded-2xl border border-stone-200 bg-white p-2.5 text-stone-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#8B5E3C]/30 hover:text-[#8B5E3C] hover:shadow-md lg:hidden'
            aria-label='Toggle navigation'
            aria-expanded={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <span className='sr-only'>Open menu</span>

            <div className='relative h-5 w-5'>
              <span
                className={`absolute left-0 top-1 h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                  isOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-2.5 h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 top-4 h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                  isOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </nav>

        <div
          className={`overflow-hidden border-t border-stone-200 bg-[#FAF7F2] lg:hidden transition-all duration-300 ease-out ${
            isOpen ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className='mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 sm:px-6 lg:px-8'>
            <div className='mb-2 rounded-2xl border border-stone-200 bg-white p-2 shadow-sm'>
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-all duration-300 ${
                    item.active
                      ? "bg-[#8B5E3C]/10 text-[#8B5E3C]"
                      : "text-stone-700 hover:bg-stone-50 hover:text-[#8B5E3C]"
                  }`}
                >
                  <span>{item.label}</span>
                  <span
                    className={`h-2 w-2 rounded-full ${
                      item.active ? "bg-[#8B5E3C]" : "bg-stone-300"
                    }`}
                  />
                </a>
              ))}
            </div>

            <a
              href={buttonLink}
              onClick={() => setIsOpen(false)}
              className='inline-flex items-center justify-center rounded-2xl bg-[#8B5E3C] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#8B5E3C]/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#73492C] hover:shadow-xl hover:shadow-[#8B5E3C]/25 active:translate-y-0'
            >
              {buttonLabel}
            </a>
          </div>
        </div>
      </header>
    );
  },
};
