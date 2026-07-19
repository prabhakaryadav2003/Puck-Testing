import { ComponentConfig } from "@puckeditor/core";
import {
  Info,
  HelpCircle,
  CircleHelp,
  MessageCircleQuestion,
  ShieldQuestion,
  BadgeHelp,
  BookOpen,
  FileQuestion,
} from "lucide-react";

const icons = {
  Info,
  HelpCircle,
  CircleHelp,
  MessageCircleQuestion,
  ShieldQuestion,
  BadgeHelp,
  BookOpen,
  FileQuestion,
};

type IconName = keyof typeof icons;

export interface FaqItemProps {
  icon: IconName;
  question: string;
  answer: string;
}

export const FaqItem: ComponentConfig<FaqItemProps> = {
  fields: {
    icon: {
      type: "select",
      options: [
        { label: "Info", value: "Info" },
        { label: "Help Circle", value: "HelpCircle" },
        { label: "Circle Help", value: "CircleHelp" },
        { label: "Message Question", value: "MessageCircleQuestion" },
        { label: "Shield Question", value: "ShieldQuestion" },
        { label: "Badge Help", value: "BadgeHelp" },
        { label: "Book Open", value: "BookOpen" },
        { label: "File Question", value: "FileQuestion" },
      ],
    },
    question: {
      type: "text",
      contentEditable: true,
    },
    answer: {
      type: "textarea",
      contentEditable: true,
    },
  },

  defaultProps: {
    icon: "CircleHelp",
    question: "Question",
    answer: "Answer...",
  },

  render: ({ icon, question, answer }) => {
    const Icon = icons[icon] ?? CircleHelp;

    return (
      <div className='py-12 px-6 md:p-20 bg-white'>
        <Icon className='mb-6 text-indigo-500' size={36} strokeWidth={1.8} />

        <h5 className='mb-6 text-xl font-heading'>{question}</h5>

        <p className='leading-8 text-gray-400'>{answer}</p>
      </div>
    );
  },
};
