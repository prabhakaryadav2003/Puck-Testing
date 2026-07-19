import { FaqGrid, FaqGridProps } from "./app/components/puck/faq/FaqGrid";
import { FaqItem, FaqItemProps } from "./app/components/puck/faq/FaqItem";
import { FaqCTA, FaqCTAProps } from "./app/components/puck/faq/FaqCTA";
import {
  Carousel,
  CarouselProps,
} from "./app/components/puck/carousel/Carousel";
import {
  CarouselSlide,
  CarouselSlideProps,
} from "./app/components/puck/carousel/CarouselSlide";
import { Config } from "@puckeditor/core";

interface Props {
  HeadingBlock: {
    title: string;
  };
  FaqGrid: FaqGridProps;
  FaqItem: FaqItemProps;
  FaqCTA: FaqCTAProps;
  Carousel: CarouselProps;
  CarouselSlide: CarouselSlideProps;
}

export const config: Config<Props> = {
  categories: {
    Layout: {
      title: "Layout",
      components: ["Carousel", "CarouselSlide"],
    },
    FAQ: {
      title: "FAQ",
      components: ["FaqGrid", "FaqItem", "FaqCTA"],
    },
    Common: {
      title: "Common",
      components: ["HeadingBlock"],
    },
  },

  components: {
    HeadingBlock: {
      fields: {
        title: {
          type: "text",
        },
      },
      defaultProps: {
        title: "Heading",
      },
      render: ({ title }) => (
        <div style={{ padding: 64 }}>
          <h1>{title}</h1>
        </div>
      ),
    },

    FaqGrid,
    FaqItem,
    FaqCTA,
    Carousel,
    CarouselSlide,
  },
};

export default config;
