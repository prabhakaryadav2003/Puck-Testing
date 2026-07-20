import { ComponentConfig, Slot } from "@puckeditor/core";

export interface Cta1Props {
  badge: string;
  titleStart: string;
  titleHighlight: string;
  titleEnd: string;
  description: string;
  actions: Slot;
}

export const Cta1: ComponentConfig<Cta1Props> = {
  fields: {
    badge: {
      type: "text",
      contentEditable: true,
    },
    titleStart: {
      type: "text",
      contentEditable: true,
    },
    titleHighlight: {
      type: "text",
      contentEditable: true,
    },
    titleEnd: {
      type: "text",
      contentEditable: true,
    },
    description: {
      type: "textarea",
      contentEditable: true,
    },
    actions: {
      type: "slot",
      allow: ["Button"],
    },
  },

  defaultProps: {
    badge: "New feature",
    titleStart: "Take",
    titleHighlight: "quick action",
    titleEnd: "that increases your brand's regular profit.",
    description:
      "If you have ever wondered how to develop your brand, this is the place for you. Take a big step forward in growing your business with this great tool.",
    actions: [
      {
        type: "Button",
        props: {
          text: "Buy Now",
          href: "#",
          variant: "primary",
        },
      },
      {
        type: "Button",
        props: {
          text: "Subscribe",
          href: "#",
          variant: "secondary",
        },
      },
    ],
  },

  render: ({
    badge,
    titleStart,
    titleHighlight,
    titleEnd,
    description,
    actions: Actions,
  }) => {
    return (
      <section id='cta' className='py-24 relative overflow-hidden'>
        <div className='container px-4 mx-auto relative z-10'>
          <div className='max-w-md lg:max-w-2xl mx-auto text-center'>
            <span className='text-gray-400 uppercase'>{badge}</span>

            <h1 className='text-4xl md:text-5xl lg:text-6xl font-heading mt-2 mb-6'>
              <span>{titleStart} </span>
              <span className='text-indigo-200'>{titleHighlight}</span>
              <span> {titleEnd}</span>
            </h1>

            <p className='leading-8 mb-10'>{description}</p>

            <div className='flex flex-wrap -mx-2 -mb-2 justify-center items-center'>
              <Actions allow={["Button"]} />
            </div>
          </div>
        </div>

        {/* Left Decorations */}
        <div className='absolute bottom-0 left-0 h-full md:flex md:flex-col md:justify-center'>
          <div className='hidden md:block mb-8 h-32 lg:h-64 w-32 lg:w-64 bg-lime-100' />
          <div className='hidden md:block mb-8 h-32 lg:h-64 w-32 lg:w-64 bg-orange-100' />
          <div className='h-16 sm:h-32 lg:h-64 w-16 sm:w-32 lg:w-64 bg-red-100' />
        </div>

        {/* Right Decorations */}
        <div className='absolute top-0 right-0 h-full md:flex md:flex-col md:justify-center'>
          <div className='mb-8 h-16 sm:h-32 lg:h-64 w-16 sm:w-32 lg:w-64 bg-pink-100' />
          <div className='hidden md:block mb-8 h-32 lg:h-64 w-32 lg:w-64 bg-indigo-100' />
          <div className='hidden md:block h-32 lg:h-64 w-32 lg:w-64 bg-blue-100' />
        </div>
      </section>
    );
  },
};
