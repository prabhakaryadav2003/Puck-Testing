import { ComponentConfig } from "@puckeditor/core";
import { createTypographyFields } from "../../../src/fields/typography.fields";
import { createTypographyDefaults } from "../../../src/defaults/typography.defaults";
import { getTypographyStyle } from "../../../src/styles/typography.style";

export interface Navbar1Props {
  logo: string;
  brandName: string;

  brandFontSize: number;
  brandFontWeight: string;
  brandFontStyle: string;
  brandTextDecoration: string;
  brandColor: string;

  homeLabel: string;
  homeLink: string;
  homeFontSize: number;
  homeFontWeight: string;
  homeFontStyle: string;
  homeTextDecoration: string;
  homeColor: string;

  aboutLabel: string;
  aboutLink: string;
  aboutFontSize: number;
  aboutFontWeight: string;
  aboutFontStyle: string;
  aboutTextDecoration: string;
  aboutColor: string;

  servicesLabel: string;
  servicesLink: string;
  servicesFontSize: number;
  servicesFontWeight: string;
  servicesFontStyle: string;
  servicesTextDecoration: string;
  servicesColor: string;

  contactLabel: string;
  contactLink: string;
  contactFontSize: number;
  contactFontWeight: string;
  contactFontStyle: string;
  contactTextDecoration: string;
  contactColor: string;

  buttonLabel: string;
  buttonLink: string;
  buttonFontSize: number;
  buttonFontWeight: string;
  buttonFontStyle: string;
  buttonTextDecoration: string;
  buttonColor: string;
}

export const Navbar1: ComponentConfig<Navbar1Props> = {
  fields: {
    logo: {
      type: "text",
    },

    brandName: {
      type: "text",
      contentEditable: true,
    },

    ...createTypographyFields("brand"),

    homeLabel: {
      type: "text",
      contentEditable: true,
    },
    homeLink: {
      type: "text",
    },

    ...createTypographyFields("home"),

    aboutLabel: {
      type: "text",
      contentEditable: true,
    },
    aboutLink: {
      type: "text",
    },

    ...createTypographyFields("about"),

    servicesLabel: {
      type: "text",
      contentEditable: true,
    },
    servicesLink: {
      type: "text",
    },

    ...createTypographyFields("services"),

    contactLabel: {
      type: "text",
      contentEditable: true,
    },
    contactLink: {
      type: "text",
    },

    ...createTypographyFields("contact"),

    buttonLabel: {
      type: "text",
      contentEditable: true,
    },
    buttonLink: {
      type: "text",
    },

    ...createTypographyFields("button"),
  },

  defaultProps: {
    logo: "https://picsum.photos/80/80",
    brandName: "Restaurant",

    ...createTypographyDefaults("brand", {
      fontSize: 32,
      fontWeight: "700",
      fontStyle: "normal",
      textDecoration: "none",
      color: "#111827",
    }),

    homeLabel: "Home",
    homeLink: "#hero",

    ...createTypographyDefaults("home", {
      fontSize: 16,
      fontWeight: "500",
      fontStyle: "normal",
      textDecoration: "none",
      color: "#374151",
    }),

    aboutLabel: "About",
    aboutLink: "#about",

    ...createTypographyDefaults("about", {
      fontSize: 16,
      fontWeight: "500",
      fontStyle: "normal",
      textDecoration: "none",
      color: "#374151",
    }),

    servicesLabel: "Menu",
    servicesLink: "#menu",

    ...createTypographyDefaults("services", {
      fontSize: 16,
      fontWeight: "500",
      fontStyle: "normal",
      textDecoration: "none",
      color: "#374151",
    }),

    contactLabel: "Contact",
    contactLink: "#contact",

    ...createTypographyDefaults("contact", {
      fontSize: 16,
      fontWeight: "500",
      fontStyle: "normal",
      textDecoration: "none",
      color: "#374151",
    }),

    buttonLabel: "Book Table",
    buttonLink: "#booking",

    ...createTypographyDefaults("button", {
      fontSize: 16,
      fontWeight: "600",
      fontStyle: "normal",
      textDecoration: "none",
      color: "#ffffff",
    }),
  },

  render: (props) => {
    const {
      logo,
      brandName,
      homeLabel,
      homeLink,
      aboutLabel,
      aboutLink,
      servicesLabel,
      servicesLink,
      contactLabel,
      contactLink,
      buttonLabel,
      buttonLink,
    } = props;

    return (
      <nav className='w-full bg-white shadow-sm border-b'>
        <div className='max-w-7xl mx-auto px-6 h-20 flex items-center justify-between'>
          <div className='flex items-center gap-3'>
            <img
              src={logo}
              alt={brandName}
              className='w-12 h-12 rounded-full object-cover'
            />

            <span style={getTypographyStyle("brand", props)}>{brandName}</span>
          </div>

          <ul className='hidden md:flex items-center gap-8'>
            <li>
              <a
                href={homeLink}
                style={getTypographyStyle("home", props)}
                className='hover:text-black transition-colors'
              >
                {homeLabel}
              </a>
            </li>

            <li>
              <a
                href={aboutLink}
                style={getTypographyStyle("about", props)}
                className='hover:text-black transition-colors'
              >
                {aboutLabel}
              </a>
            </li>

            <li>
              <a
                href={servicesLink}
                style={getTypographyStyle("services", props)}
                className='hover:text-black transition-colors'
              >
                {servicesLabel}
              </a>
            </li>

            <li>
              <a
                href={contactLink}
                style={getTypographyStyle("contact", props)}
                className='hover:text-black transition-colors'
              >
                {contactLabel}
              </a>
            </li>
          </ul>

          <a
            href={buttonLink}
            className='bg-black px-5 py-2.5 rounded-lg hover:bg-gray-800 transition-colors'
            style={getTypographyStyle("button", props)}
          >
            {buttonLabel}
          </a>
        </div>
      </nav>
    );
  },
};
