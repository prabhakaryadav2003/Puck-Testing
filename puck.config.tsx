import { Config } from "@puckeditor/core";

import { Navbar1, Navbar1Props } from "./app/components/puck/navbar/Navbar1";
import { Navbar2, Navbar2Props } from "./app/components/puck/navbar/Navbar2";
import { Hero2, Hero2Props } from "./app/components/puck/hero/Hero2";
import { Hero3, Hero3Props } from "./app/components/puck/hero/Hero3";
import { Gallery, GalleryProps } from "./app/components/puck/gallery/Gallery1";
import {
  GalleryItem,
  GalleryItemProps,
} from "./app/components/puck/gallery/GalleryItem";
import { Cta1Props, Cta1 } from "./app/components/puck/cta/Cta1";
import { ButtonProps, Button } from "./app/components/puck/button/Button";
import { FaqGridProps, FaqGrid } from "./app/components/puck/faq/FaqGrid";
import { FaqItemProps, FaqItem } from "./app/components/puck/faq/FaqItem";
import { FaqCTAProps, FaqCTA } from "./app/components/puck/faq/FaqCTA";
import {
  ShuffleNavbarProps,
  ShuffleNavbar,
} from "./app/components/shuffle/ShuffleNavbar";
import { TeamGridProps, TeamGrid } from "./app/components/puck/team/TeamGrid";
import {
  TeamMemberProps,
  TeamMember,
} from "./app/components/puck/team/TeamMember";
import {
  NewsletterSectionProps,
  NewsletterSection,
} from "./app/components/puck/newsletter/NewsletterSection";
import {
  NewsletterFormProps,
  NewsletterForm,
} from "./app/components/puck/newsletter/NewsletterForm";

interface Props {
  HeadingBlock: {
    title: string;
  };

  Navbar1: Navbar1Props;
  Navbar2: Navbar2Props;
  ShuffleNavbar: ShuffleNavbarProps;

  Hero2: Hero2Props;
  Hero3: Hero3Props;

  Gallery: GalleryProps;
  GalleryItem: GalleryItemProps;

  FaqGrid: FaqGridProps;
  FaqItem: FaqItemProps;
  FaqCTA: FaqCTAProps;

  Cta1: Cta1Props;

  Button: ButtonProps;

  TeamGrid: TeamGridProps;
  TeamMember: TeamMemberProps;

  NewsletterSection: NewsletterSectionProps;
  NewsletterForm: NewsletterFormProps;
}

export const config: Config<Props> = {
  categories: {
    Navbar: {
      title: "Navbar",
      components: ["Navbar1", "Navbar2", "ShuffleNavbar"],
    },

    Hero: {
      title: "Hero",
      components: ["Hero2", "Hero3"],
    },

    Gallery: {
      title: "Gallery",
      components: ["Gallery", "GalleryItem"],
    },

    Teams: {
      title: "Teams",
      components: ["TeamGrid", "TeamMember"],
    },

    FAQ: {
      title: "FAQ",
      components: ["FaqGrid", "FaqItem", "FaqCTA"],
    },

    CTA: {
      title: "CTA",
      components: ["Cta1"],
    },

    NewLetter: {
      title: "Newsletter",
      components: ["NewsletterSection", "NewsletterForm"],
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
    ShuffleNavbar,

    Hero2,
    Hero3,

    Gallery,
    GalleryItem,

    FaqGrid,
    FaqItem,
    FaqCTA,

    Cta1,

    Button,

    TeamGrid,
    TeamMember,

    NewsletterSection,
    NewsletterForm,
  },
};

export default config;
