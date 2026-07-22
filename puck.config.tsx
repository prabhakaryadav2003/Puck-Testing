import { Config } from "@puckeditor/core";

import { Navbar1, Navbar1Props } from "./app/components/puck/navbar/Navbar1";
import { Navbar2, Navbar2Props } from "./app/components/puck/navbar/Navbar2";

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
import { AboutProps, About } from "./app/components/puck/about/About";
import { About2Props, About2 } from "./app/components/puck/about/About2";
import { FooterProps, Footer } from "./app/components/puck/footer/Footer";
import { About3Props, About3 } from "./app/components/puck/about/About3";
import { About4Props, About4 } from "./app/components/puck/about/About4";
import { About5Props, About5 } from "./app/components/puck/about/About5";
import { About6Props, About6 } from "./app/components/puck/about/About6";
import { Cta5Props, Cta5 } from "./app/components/puck/cta/Cta5";
import { Cta4Props, Cta4 } from "./app/components/puck/cta/Cta4";
import { Cta3Props, Cta3 } from "./app/components/puck/cta/Cta3";
import { Cta2Props, Cta2 } from "./app/components/puck/cta/Cta2";
import { Hero1Props, Hero1 } from "./app/components/puck/hero/Hero1";
import { Hero2Props, Hero2 } from "./app/components/puck/hero/Hero2";
import { Hero3Props, Hero3 } from "./app/components/puck/hero/Hero3";
import { Hero4Props, Hero4 } from "./app/components/puck/hero/Hero4";

interface Props {
  HeadingBlock: {
    title: string;
  };

  Navbar1: Navbar1Props;
  Navbar2: Navbar2Props;
  ShuffleNavbar: ShuffleNavbarProps;

  Gallery: GalleryProps;
  GalleryItem: GalleryItemProps;

  FaqGrid: FaqGridProps;
  FaqItem: FaqItemProps;
  FaqCTA: FaqCTAProps;

  Cta1: Cta1Props;
  Cta2: Cta2Props;
  Cta3: Cta3Props;
  Cta4: Cta4Props;
  Cta5: Cta5Props;

  Hero1: Hero1Props;
  Hero2: Hero2Props;
  Hero3: Hero3Props;
  Hero4: Hero4Props;

  Button: ButtonProps;

  TeamGrid: TeamGridProps;
  TeamMember: TeamMemberProps;

  NewsletterSection: NewsletterSectionProps;
  NewsletterForm: NewsletterFormProps;

  About: AboutProps;
  About2: About2Props;
  About3: About3Props;
  About4: About4Props;
  About5: About5Props;
  About6: About6Props;

  Footer: FooterProps;
}

export const config: Config<Props> = {
  categories: {
    Navbar: {
      title: "Navbar",
      components: ["Navbar1", "Navbar2", "ShuffleNavbar"],
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

    New: {
      title: "New",
      components: [
        "About3",
        "About4",
        "About5",
        "About6",
        "Cta2",
        "Cta3",
        "Cta4",
        "Cta5",
        "Hero1",
        "Hero2",
        "Hero3",
        "Hero4",
      ],
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

    Gallery,
    GalleryItem,

    FaqGrid,
    FaqItem,
    FaqCTA,

    Cta1,
    Cta2,
    Cta3,
    Cta4,
    Cta5,

    Button,

    TeamGrid,
    TeamMember,

    NewsletterSection,
    NewsletterForm,

    About,
    About2,
    About3,
    About4,
    About5,
    About6,

    Hero1,
    Hero2,
    Hero3,
    Hero4,

    Footer,
  },
  root: {
    render: ({ children }) => {
      return (
        <div
          style={{
            background: "var(--color-background)",
            minHeight: "100vh",
          }}
        >
          {children}
        </div>
      );
    },
  },
};
export default config;
