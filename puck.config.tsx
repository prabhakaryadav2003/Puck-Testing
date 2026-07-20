import { Config } from "@puckeditor/core";

import { Navbar1, Navbar1Props } from "./app/components/puck/navbar/Navbar1";
import { Navbar2, Navbar2Props } from "./app/components/puck/navbar/Navbar2";

import { Gallery, GalleryProps } from "./app/components/puck/gallery/Gallery1";

import { FaqGrid, FaqGridProps } from "./app/components/puck/faq/FaqGrid";
import { FaqItem, FaqItemProps } from "./app/components/puck/faq/FaqItem";
import { FaqCTA, FaqCTAProps } from "./app/components/puck/faq/FaqCTA";
import {
  GalleryItem,
  GalleryItemProps,
} from "./app/components/puck/gallery/GalleryItem";
import { Cta1Props, Cta1 } from "./app/components/puck/cta/Cta1";
import { ButtonProps, Button } from "./app/components/puck/button/Button";

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

  Cta1: Cta1Props;

  Button: ButtonProps;
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

    CTA: {
      title: "CTA",
      components: ["Cta1"],
    },

    Button: {
      title: "Button",
      components: ["Button"],
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

    Cta1,

    Button,
  },
};

export default config;
