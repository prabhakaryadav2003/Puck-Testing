import { ComponentConfig } from "@puckeditor/core";

export type FaqCTAProps = {
  icon: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
};

export const FaqCTA: ComponentConfig<FaqCTAProps> = {
  fields: {
    icon: {
      type: "text",
    },

    title: {
      type: "text",
    },

    description: {
      type: "textarea",
    },

    buttonText: {
      type: "text",
    },

    buttonLink: {
      type: "text",
    },
  },

  defaultProps: {
    icon: "/pstls-assets/icons/faq-info.svg",
    title: "Have more questions?",
    description:
      "Can't find the answer you're looking for? Please send us a message.",
    buttonText: "Get in Touch",
    buttonLink: "#",
  },

  render: ({ icon, title, description, buttonText, buttonLink }) => (
    <section className='py-24'>
      <div className='container mx-auto text-center'>
        <img className='block mx-auto mb-8' src={icon} alt='' />

        <h2 className='text-5xl font-heading mb-8'>{title}</h2>

        <p className='mb-8'>{description}</p>

        <a
          href={buttonLink}
          className='inline-block py-3 px-8 text-center text-black font-bold bg-indigo-200 hover:bg-indigo-300 transition'
        >
          {buttonText}
        </a>
      </div>
    </section>
  ),
};
