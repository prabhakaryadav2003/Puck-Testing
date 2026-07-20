import { ComponentConfig } from "@puckeditor/core";

export interface NewsletterFormProps {
  namePlaceholder: string;
  emailPlaceholder: string;
  checkboxText: string;

  inputHeight: number;
  inputRadius: number;

  fontColor: string;
  placeholderColor: string;
  borderColor: string;
  checkboxColor: string;

  button: any;
}

export const NewsletterForm: ComponentConfig<NewsletterFormProps> = {
  fields: {
    namePlaceholder: {
      type: "text",
    },

    emailPlaceholder: {
      type: "text",
    },

    checkboxText: {
      type: "text",
      contentEditable: true,
    },

    inputHeight: {
      type: "number",
      min: 32,
      max: 80,
    },

    inputRadius: {
      type: "number",
      min: 0,
      max: 20,
    },

    fontColor: {
      type: "text",
    },

    placeholderColor: {
      type: "text",
    },

    borderColor: {
      type: "text",
    },

    checkboxColor: {
      type: "text",
    },

    button: {
      type: "slot",
      allow: ["Button"],
    },
  },

  defaultProps: {
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

  render: ({
    namePlaceholder,
    emailPlaceholder,
    checkboxText,
    inputHeight,
    inputRadius,
    fontColor,
    borderColor,
    placeholderColor,
    checkboxColor,
    button: Button,
  }) => (
    <div className='max-w-sm mx-auto mt-8'>
      <input
        className='newsletter-input w-full px-4 mb-3 bg-transparent'
        style={{
          height: inputHeight,
          borderRadius: inputRadius,
          border: `1px solid ${borderColor}`,
          color: fontColor,
        }}
        placeholder={namePlaceholder}
      />

      <input
        className='newsletter-input w-full px-4 mb-3 bg-transparent'
        style={{
          height: inputHeight,
          borderRadius: inputRadius,
          border: `1px solid ${borderColor}`,
          color: fontColor,
        }}
        placeholder={emailPlaceholder}
      />

      <label
        className='flex items-center gap-2 mb-4 text-xs'
        style={{ color: fontColor }}
      >
        <input
          type='checkbox'
          style={{
            accentColor: checkboxColor,
          }}
        />
        {checkboxText}
      </label>

      <style>{`
  .newsletter-input::placeholder {
    color: ${placeholderColor};
    opacity: 1;
  }
`}</style>

      <Button />
    </div>
  ),
};
