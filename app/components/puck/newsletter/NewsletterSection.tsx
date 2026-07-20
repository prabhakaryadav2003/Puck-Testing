import { ComponentConfig } from "@puckeditor/core";

export interface NewsletterSectionProps {
  title: string;
  subtitle: string;

  backgroundImage: string;
  showBackgroundImage: boolean;
  backgroundColor: string;

  overlayColor: string;
  overlayOpacity: number;

  cardBackground: string;
  cardOpacity: number;

  cardWidth: number;
  cardPadding: number;
  borderRadius: number;

  titleFontSize: number;
  subtitleFontSize: number;

  content: any;
}

export const NewsletterSection: ComponentConfig<NewsletterSectionProps> = {
  fields: {
    title: {
      type: "text",
      contentEditable: true,
    },

    subtitle: {
      type: "text",
      contentEditable: true,
    },

    backgroundImage: {
      type: "text",
    },

    showBackgroundImage: {
      type: "radio",
      options: [
        {
          label: "No",
          value: false,
        },
        {
          label: "Yes",
          value: true,
        },
      ],
    },

    backgroundColor: {
      type: "text",
    },

    overlayColor: {
      type: "text",
    },

    overlayOpacity: {
      type: "number",
      min: 0,
      max: 100,
    },

    cardBackground: {
      type: "text",
    },

    cardOpacity: {
      type: "number",
      min: 0,
      max: 100,
    },

    cardWidth: {
      type: "number",
      min: 400,
      max: 1000,
    },

    cardPadding: {
      type: "number",
      min: 20,
      max: 80,
    },

    borderRadius: {
      type: "number",
      min: 0,
      max: 40,
    },

    titleFontSize: {
      type: "number",
      min: 20,
      max: 60,
    },

    subtitleFontSize: {
      type: "number",
      min: 10,
      max: 30,
    },

    content: {
      type: "slot",
      allow: ["NewsletterForm"],
    },
  },

  defaultProps: {
    title: "Get our latest content in your inbox",

    subtitle: "Join over 20,000 satisfied customers",

    backgroundColor: "#ffffff",

    backgroundImage:
      "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=1600",

    showBackgroundImage: true,

    overlayColor: "#000000",
    overlayOpacity: 55,

    cardBackground: "#232323",
    cardOpacity: 95,

    cardWidth: 720,
    cardPadding: 40,

    borderRadius: 4,

    titleFontSize: 34,
    subtitleFontSize: 14,

    content: [
      {
        type: "NewsletterForm",
        props: {
          namePlaceholder: "Your Name",
          emailPlaceholder: "Email Address",
          checkboxText: "I have read and agree to the Terms and Conditions",
          inputHeight: 40,
          inputRadius: 3,
          fontColor: "#ffffff",
          placeholderColor: "#9CA3AF",
          borderColor: "#D1D5DB",
          checkboxColor: "#ffffff",
          button: [
            {
              type: "Button",
              props: {
                text: "SUBSCRIBE TO NEWSLETTER",
                href: "#",
                variant: "primary",
              },
            },
          ],
        },
      },
    ],
  },

  render: ({
    title,
    subtitle,

    backgroundImage,
    showBackgroundImage,
    backgroundColor,

    overlayColor,
    overlayOpacity,

    cardBackground,
    cardOpacity,

    cardWidth,
    cardPadding,

    borderRadius,

    titleFontSize,
    subtitleFontSize,

    content: Content,
  }) => (
    <section
      className='relative py-24 overflow-hidden'
      style={{
        backgroundColor,
        backgroundImage:
          showBackgroundImage && backgroundImage
            ? `url(${backgroundImage})`
            : undefined,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      {showBackgroundImage && (
        <div
          className='absolute inset-0'
          style={{
            background: overlayColor,
            opacity: overlayOpacity / 100,
          }}
        />
      )}

      <div className='relative container mx-auto px-4'>
        <div
          className='mx-auto text-center'
          style={{
            maxWidth: cardWidth,
            background: cardBackground,
            opacity: cardOpacity / 100,
            padding: cardPadding,
            borderRadius,
          }}
        >
          <h2
            className='text-white font-light'
            style={{
              fontSize: titleFontSize,
            }}
          >
            {title}
          </h2>

          <p
            className='mt-2 text-gray-300'
            style={{
              fontSize: subtitleFontSize,
            }}
          >
            {subtitle}
          </p>

          <div className='mt-8'>
            <Content />
          </div>
        </div>
      </div>
    </section>
  ),
};
