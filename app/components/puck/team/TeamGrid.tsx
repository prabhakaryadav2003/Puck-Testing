import { ComponentConfig } from "@puckeditor/core";

export interface TeamGridProps {
  title: string;
  titleFontSize: number;
  columns: number;
  gapX: number;
  gapY: number;
  members: any;
}

export const TeamGrid: ComponentConfig<TeamGridProps> = {
  fields: {
    title: {
      type: "text",
      contentEditable: true,
    },
    titleFontSize: {
      type: "number",
      label: "Title Font Size",
      min: 16,
      max: 72,
    },
    members: {
      type: "slot",
      allow: ["TeamMember"],
    },
    columns: {
      type: "number",
      min: 1,
      max: 6,
    },
    gapX: {
      type: "number",
      label: "Column Gap",
      min: 0,
      max: 100,
    },
    gapY: {
      type: "number",
      label: "Row Gap",
      min: 0,
      max: 100,
    },
  },

  defaultProps: {
    title: "Meet Our Team",
    titleFontSize: 36,
    columns: 3,
    gapX: 64,
    gapY: 80,
    members: [
      {
        type: "TeamMember",
        props: {
          image: "https://i.pravatar.cc/300?img=32",
          name: "Vera Duncan",
          role: "Founder & CEO",
          imageSize: 96,
          nameFontSize: 11,
          roleFontSize: 10,
        },
      },
      {
        type: "TeamMember",
        props: {
          image: "https://i.pravatar.cc/300?img=12",
          name: "Zach Smith",
          role: "Co-Founder & CTO",
          imageSize: 96,
          nameFontSize: 11,
          roleFontSize: 10,
        },
      },
      {
        type: "TeamMember",
        props: {
          image: "https://i.pravatar.cc/300?img=45",
          name: "Bernice Lucas",
          role: "Chief of Operations",
          imageSize: 96,
          nameFontSize: 11,
          roleFontSize: 10,
        },
      },
      {
        type: "TeamMember",
        props: {
          image: "https://i.pravatar.cc/300?img=18",
          name: "Cameron Nguyen",
          role: "Lead Designer",
          imageSize: 96,
          nameFontSize: 11,
          roleFontSize: 10,
        },
      },
      {
        type: "TeamMember",
        props: {
          image: "https://i.pravatar.cc/300?img=25",
          name: "Josie Webb",
          role: "Head of Development",
          imageSize: 96,
          nameFontSize: 11,
          roleFontSize: 10,
        },
      },
      {
        type: "TeamMember",
        props: {
          image: "https://i.pravatar.cc/300?img=68",
          name: "Bryce Vaughn",
          role: "Marketing Director",
          imageSize: 96,
          nameFontSize: 11,
          roleFontSize: 10,
        },
      },
    ],
  },

  render: ({ title, titleFontSize, members: Members, gapX, gapY, columns }) => {
    return (
      <section className='py-24 bg-white'>
        <div className='container mx-auto px-4'>
          <h2
            className='text-center font-heading font-semibold text-gray-900 mb-16'
            style={{
              fontSize: `${titleFontSize}px`,
              lineHeight: 1.2,
            }}
          >
            {title}
          </h2>

          <Members
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
              columnGap: gapX,
              rowGap: gapY,
            }}
            className='max-w-4xl mx-auto justify-items-center'
          />
        </div>
      </section>
    );
  },
};
