import { ComponentConfig, DropZone } from "@puckeditor/core";

export type FaqGridProps = {
  title: string;
  subtitle: string;
};

export const FaqGrid: ComponentConfig<FaqGridProps> = {
  fields: {
    title: {
      type: "text",
    },
    subtitle: {
      type: "textarea",
    },
  },

  defaultProps: {
    title: "Frequently Asked Questions",
    subtitle: "Find answers to common questions.",
  },

  render: ({ title, subtitle }) => (
    <section className='py-24 bg-gray-50'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-16'>
          <h2 className='text-5xl font-heading mb-6'>{title}</h2>
          <p className='text-gray-500 max-w-2xl mx-auto'>{subtitle}</p>
        </div>

        <DropZone
          zone='faq-items'
          className='grid grid-cols-1 lg:grid-cols-2 gap-8'
        />
      </div>
    </section>
  ),
};
