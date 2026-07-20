import { ComponentConfig } from "@puckeditor/core";

export interface ButtonProps {
  text: string;
  href: string;
  variant: "primary" | "secondary";
}

export const Button: ComponentConfig<ButtonProps> = {
  fields: {
    text: {
      type: "text",
      contentEditable: true,
    },
    href: {
      type: "text",
    },
    variant: {
      type: "select",
      options: [
        { label: "Primary", value: "primary" },
        { label: "Secondary", value: "secondary" },
      ],
    },
  },

  defaultProps: {
    text: "Button",
    href: "#",
    variant: "primary",
  },

  render: ({ text, href, variant }) => (
    <div className='w-full md:w-auto px-2 mb-2'>
      <a
        href={href}
        className={
          variant === "primary"
            ? "block w-full md:w-auto py-3 px-8 text-center text-black font-bold bg-indigo-200 hover:bg-indigo-300 transition duration-200"
            : "block w-full md:w-auto py-3 px-8 text-center bg-transparent text-black font-bold border border-indigo-200 hover:bg-indigo-200 transition duration-200"
        }
      >
        {text}
      </a>
    </div>
  ),
};
