import { ComponentConfig } from "@puckeditor/core";

export interface TeamMemberProps {
  image: string;
  name: string;
  role: string;
  imageSize: number;
  nameFontSize: number;
  roleFontSize: number;
}

export const TeamMember: ComponentConfig<TeamMemberProps> = {
  fields: {
    image: {
      type: "text",
    },
    name: {
      type: "text",
      contentEditable: true,
    },
    role: {
      type: "text",
      contentEditable: true,
    },
    imageSize: {
      type: "number",
      label: "Image Size",
      min: 40,
      max: 300,
    },
    nameFontSize: {
      type: "number",
      label: "Name Font Size",
      min: 10,
      max: 48,
    },
    roleFontSize: {
      type: "number",
      label: "Role Font Size",
      min: 8,
      max: 36,
    },
  },

  defaultProps: {
    image: "https://i.pravatar.cc/300?img=32",
    name: "Jane Doe",
    role: "Founder & CEO",
    imageSize: 96,
    nameFontSize: 11,
    roleFontSize: 10,
  },

  render: ({ image, name, role, imageSize, nameFontSize, roleFontSize }) => (
    <div className='text-center'>
      <div
        className='mx-auto mb-4 overflow-hidden rounded-full bg-gray-100'
        style={{
          width: imageSize,
          height: imageSize,
        }}
      >
        <img src={image} alt={name} className='h-full w-full object-cover' />
      </div>

      <h4
        className='font-semibold text-gray-900'
        style={{
          fontSize: `${nameFontSize}px`,
          lineHeight: 1.4,
        }}
      >
        {name}
      </h4>

      <p
        className='mt-1 text-gray-500'
        style={{
          fontSize: `${roleFontSize}px`,
          lineHeight: 1.5,
        }}
      >
        {role}
      </p>
    </div>
  ),
};
