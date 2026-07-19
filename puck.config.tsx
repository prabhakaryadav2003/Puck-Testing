import { Config } from "@puckeditor/core";

import { Navbar1, Navbar1Props } from "./app/components/puck/navbar/Navbar1";
import { Navbar2, Navbar2Props } from "./app/components/puck/navbar/Navbar2";

// import {
//   Carousel,
//   CarouselProps,
// } from "./app/components/puck/carousel/Carousel";
// import {
//   CarouselSlide,
//   CarouselSlideProps,
// } from "./app/components/puck/carousel/CarouselSlide";

import { Gallery, GalleryProps } from "./app/components/puck/gallery/Gallery1";

import { FaqGrid, FaqGridProps } from "./app/components/puck/faq/FaqGrid";
import { FaqItem, FaqItemProps } from "./app/components/puck/faq/FaqItem";
import { FaqCTA, FaqCTAProps } from "./app/components/puck/faq/FaqCTA";
import {
  GalleryItem,
  GalleryItemProps,
} from "./app/components/puck/gallery/GalleryItem";

interface Props {
  HeadingBlock: {
    title: string;
  };

  Navbar1: Navbar1Props;
  Navbar2: Navbar2Props;

  Gallery: GalleryProps;
  GalleryItem: GalleryItemProps;

  FaqGrid: FaqGridProps;
  FaqItem: FaqItemProps;
  FaqCTA: FaqCTAProps;
}

export const config: Config<Props> = {
  categories: {
    Navbar: {
      title: "Navbar",
      components: ["Navbar1", "Navbar2"],
    },

    Gallery: {
      title: "Gallery",
      components: ["Gallery", "GalleryItem"],
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

    Navbar1,
    Navbar2,

    Gallery,
    GalleryItem,

    FaqGrid,
    FaqItem,
    FaqCTA,
  },
};

export default config;
