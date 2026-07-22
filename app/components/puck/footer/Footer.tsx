import { ComponentConfig } from "@puckeditor/core";

export interface FooterProps {
  backgroundColor: string;
  backgroundImage: string;
  showBackgroundImage: boolean;
  showBackgroundOverlay: boolean;
  backgroundOverlayColor: string;
  backgroundOverlayOpacity: number;
  paddingTop: number;
  paddingRight: number;
  paddingBottom: number;
  paddingLeft: number;
  marginTop: number;
  marginRight: number;
  marginBottom: number;
  marginLeft: number;
  title: string;
  description: string;
  description1: string;
  text: string;
  text1: string;
  text2: string;
  title1: string;
  item: string;
  item1: string;
  item2: string;
  item3: string;
  title2: string;
  item4: string;
  item5: string;
  item6: string;
  item7: string;
  title3: string;
  item8: string;
  item9: string;
  item10: string;
  item11: string;
  description2: string;
  image: string;
  imageAlt: string;
  href: string;
  href1: string;
  href2: string;
  href3: string;
  href4: string;
  buttonText: string;
}

export const Footer: ComponentConfig<FooterProps> = {
  fields: {
    backgroundColor: {
      type: "text",
    },
    backgroundImage: {
      type: "text",
    },
    showBackgroundImage: {
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
    backgroundOverlayColor: {
      type: "text",
    },
    backgroundOverlayOpacity: {
      type: "number",
      min: 0,
      max: 100,
    },
    paddingTop: {
      type: "number",
      min: 0,
    },
    paddingRight: {
      type: "number",
      min: 0,
    },
    paddingBottom: {
      type: "number",
      min: 0,
    },
    paddingLeft: {
      type: "number",
      min: 0,
    },
    marginTop: {
      type: "number",
    },
    marginRight: {
      type: "number",
    },
    marginBottom: {
      type: "number",
    },
    marginLeft: {
      type: "number",
    },
    title: {
      type: "richtext",
      contentEditable: true,
    },
    description: {
      type: "richtext",
      contentEditable: true,
    },
    description1: {
      type: "richtext",
      contentEditable: true,
    },
    text: {
      type: "richtext",
      contentEditable: true,
    },
    text1: {
      type: "richtext",
      contentEditable: true,
    },
    text2: {
      type: "richtext",
      contentEditable: true,
    },
    title1: {
      type: "richtext",
      contentEditable: true,
    },
    item: {
      type: "richtext",
      contentEditable: true,
    },
    item1: {
      type: "richtext",
      contentEditable: true,
    },
    item2: {
      type: "richtext",
      contentEditable: true,
    },
    item3: {
      type: "richtext",
      contentEditable: true,
    },
    title2: {
      type: "richtext",
      contentEditable: true,
    },
    item4: {
      type: "richtext",
      contentEditable: true,
    },
    item5: {
      type: "richtext",
      contentEditable: true,
    },
    item6: {
      type: "richtext",
      contentEditable: true,
    },
    item7: {
      type: "richtext",
      contentEditable: true,
    },
    title3: {
      type: "richtext",
      contentEditable: true,
    },
    item8: {
      type: "richtext",
      contentEditable: true,
    },
    item9: {
      type: "richtext",
      contentEditable: true,
    },
    item10: {
      type: "richtext",
      contentEditable: true,
    },
    item11: {
      type: "richtext",
      contentEditable: true,
    },
    description2: {
      type: "richtext",
      contentEditable: true,
    },
    image: {
      type: "text",
    },
    imageAlt: {
      type: "text",
    },
    href: {
      type: "text",
    },
    href1: {
      type: "text",
    },
    href2: {
      type: "text",
    },
    href3: {
      type: "text",
    },
    href4: {
      type: "text",
    },
    buttonText: {
      type: "richtext",
      contentEditable: true,
    },
  },

  defaultProps: {
    backgroundColor: "#ffffff",
    backgroundImage: "",
    showBackgroundImage: false,
    showBackgroundOverlay: false,
    backgroundOverlayColor: "#000000",
    backgroundOverlayOpacity: 40,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    title: "Stay healthy, stay informed",
    description:
      "Get wellness tips, health insights, and exclusive offers delivered weekly.",
    description1:
      "Empowering you to live your healthiest life through personalized care and expert guidance.",
    text: "425 Wellness Ave, San Francisco",
    text1: "+1 (555) 234-5678",
    text2: "hello@vitalcare.com",
    title1: "Company",
    item: "About Us",
    item1: "Our Team",
    item2: "Careers",
    item3: "Press",
    title2: "Services",
    item4: "Health Plans",
    item5: "Telehealth",
    item6: "Mental Wellness",
    item7: "Nutrition",
    title3: "Support",
    item8: "Help Center",
    item9: "FAQs",
    item10: "Privacy Policy",
    item11: "Terms of Service",
    description2: "© 2026 VitalCare. All rights reserved.",
    image: "https://cdn.ln-cdn.com/image/placeholder-logo-full.png",
    imageAlt: "Logo",
    href: "#",
    href1: "#",
    href2: "#",
    href3: "#",
    href4: "#",
    buttonText: "Subscribe",
  },

  render: ({
    backgroundColor,
    backgroundImage,
    showBackgroundImage,
    showBackgroundOverlay,
    backgroundOverlayColor,
    backgroundOverlayOpacity,
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
    title,
    description,
    description1,
    text,
    text1,
    text2,
    title1,
    item,
    item1,
    item2,
    item3,
    title2,
    item4,
    item5,
    item6,
    item7,
    title3,
    item8,
    item9,
    item10,
    item11,
    description2,
    image,
    imageAlt,
    href,
    href1,
    href2,
    href3,
    href4,
    buttonText,
  }: FooterProps) => (
    <footer
      id='_footer_contact_newsletter_v6_001'
      className='bg-white dark:bg-neutral-950'
      style={{
        position: "relative",
        backgroundColor,

        paddingTop: `${paddingTop}px`,
        paddingRight: `${paddingRight}px`,
        paddingBottom: `${paddingBottom}px`,
        paddingLeft: `${paddingLeft}px`,

        marginTop: `${marginTop}px`,
        marginRight: `${marginRight}px`,
        marginBottom: `${marginBottom}px`,
        marginLeft: `${marginLeft}px`,

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
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: backgroundOverlayColor,
            opacity: backgroundOverlayOpacity / 100,
            pointerEvents: "none",
            zIndex: 0,
          }}
        />
      )}
      <div
        style={{
          position: "relative",
          zIndex: 1,
        }}
      >
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div
            data-motion='newsletter'
            className='bg-indigo-50 dark:bg-indigo-900/20 rounded-3xl p-8 lg:p-12 mb-16'
            style={{
              opacity: "1",
              transform: "translateY(0px)",
              filter: "blur(0px)",
            }}
          >
            <div className='grid lg:grid-cols-2 gap-10 items-center'>
              <div>
                <h3 className='text-slate-900 dark:text-white text-2xl lg:text-3xl font-bold mb-4'>
                  {title}
                </h3>
                <p className='text-slate-600 dark:text-neutral-400'>
                  {description}
                </p>
              </div>
              <form className='flex flex-col sm:flex-row gap-3'>
                <input
                  data-motion='input'
                  type='email'
                  placeholder='Enter your email'
                  className='flex-1 px-5 py-3.5 bg-white dark:bg-neutral-900 border border-slate-200 dark:border-neutral-700 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 focus:outline-hidden focus:border-indigo-500 transition-colors securepass-findIdentityInputFields-covered psono-icon-injected'
                  style={{
                    opacity: "1",
                    transform: "translateY(0px)",
                    filter: "blur(0px)",
                    userSelect: "text",
                    backgroundPosition:
                      "right 20px center, right 35px center !important",
                    backgroundSize: "11px 11px, 16px 16px !important",
                    backgroundRepeat: "no-repeat, no-repeat !important",
                  }}
                  autoComplete='email'
                />
                <button
                  data-motion='button'
                  type='submit'
                  className='px-6 py-3.5 bg-indigo-600 hover:bg-indigo-700 transition-colors rounded-xl text-white font-semibold whitespace-nowrap'
                  style={{
                    opacity: "1",
                    transform: "translateY(0px)",
                    filter: "blur(0px)",
                  }}
                >
                  {buttonText}
                </button>
              </form>
            </div>
          </div>

          <div className='grid lg:grid-cols-12 gap-12 pb-12 border-b border-slate-200 dark:border-neutral-800'>
            <div
              data-motion='brand'
              className='lg:col-span-4'
              style={{
                opacity: "1",
                transform: "translateY(0px)",
                filter: "blur(0px)",
              }}
            >
              <a href={href} className='flex items-center mb-6'>
                <img src={image} ln-logo='' className='h-10' alt={imageAlt} />
              </a>
              <p className='text-slate-600 dark:text-neutral-400 mb-6'>
                {description1}
              </p>

              <div className='space-y-3'>
                <div className='flex items-center gap-3 text-slate-600 dark:text-neutral-400'>
                  <svg
                    className='w-5 h-5 text-indigo-500'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path
                      fillRule='evenodd'
                      d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z'
                      clipRule='evenodd'
                    ></path>
                  </svg>
                  <span>{text}</span>
                </div>
                <div className='flex items-center gap-3 text-slate-600 dark:text-neutral-400'>
                  <svg
                    className='w-5 h-5 text-indigo-500'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path d='M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z'></path>
                  </svg>
                  <span>{text1}</span>
                </div>
                <div className='flex items-center gap-3 text-slate-600 dark:text-neutral-400'>
                  <svg
                    className='w-5 h-5 text-indigo-500'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z'></path>
                    <path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z'></path>
                  </svg>
                  <span>{text2}</span>
                </div>
              </div>
            </div>

            <div className='lg:col-span-8 grid sm:grid-cols-3 gap-8'>
              <div
                data-motion='column'
                style={{
                  opacity: "1",
                  transform: "translateY(0px)",
                  filter: "blur(0px)",
                }}
              >
                <h4 className='text-slate-900 dark:text-white font-semibold mb-5'>
                  {title1}
                </h4>
                <ul className='space-y-3'>
                  <li>{item}</li>
                  <li>{item1}</li>
                  <li>{item2}</li>
                  <li>{item3}</li>
                </ul>
              </div>
              <div
                data-motion='column'
                style={{
                  opacity: "1",
                  transform: "translateY(0px)",
                  filter: "blur(0px)",
                }}
              >
                <h4 className='text-slate-900 dark:text-white font-semibold mb-5'>
                  {title2}
                </h4>
                <ul className='space-y-3'>
                  <li>{item4}</li>
                  <li>{item5}</li>
                  <li>{item6}</li>
                  <li>{item7}</li>
                </ul>
              </div>
              <div
                data-motion='column'
                style={{
                  opacity: "1",
                  transform: "translateY(0px)",
                  filter: "blur(0px)",
                }}
              >
                <h4 className='text-slate-900 dark:text-white font-semibold mb-5'>
                  {title3}
                </h4>
                <ul className='space-y-3'>
                  <li>{item8}</li>
                  <li>{item9}</li>
                  <li>{item10}</li>
                  <li>{item11}</li>
                </ul>
              </div>
            </div>
          </div>

          <div
            data-motion='bottom'
            className='py-8 flex flex-col sm:flex-row items-center justify-between gap-6'
            style={{
              opacity: "1",
              transform: "translateY(0px)",
              filter: "blur(0px)",
            }}
          >
            <p className='text-slate-500 text-sm'>{description2}</p>
            <div className='flex items-center gap-4'>
              <a
                href={href1}
                className='text-slate-400 hover:text-indigo-500 transition-colors'
                aria-label='Twitter'
              >
                <svg
                  className='w-5 h-5'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path d='M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z'></path>
                </svg>
              </a>
              <a
                href={href2}
                className='text-slate-400 hover:text-indigo-500 transition-colors'
                aria-label='Instagram'
              >
                <svg
                  className='w-5 h-5'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z'></path>
                </svg>
              </a>
              <a
                href={href3}
                className='text-slate-400 hover:text-indigo-500 transition-colors'
                aria-label='Facebook'
              >
                <svg
                  className='w-5 h-5'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path d='M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z'></path>
                </svg>
              </a>
              <a
                href={href4}
                className='text-slate-400 hover:text-indigo-500 transition-colors'
                aria-label='YouTube'
              >
                <svg
                  className='w-5 h-5'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path d='M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z'></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  ),
};
