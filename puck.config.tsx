import type { Config } from "@puckeditor/core";
import { HeroComponents, HeroConfigProps } from "./config/hero.config";

import { FaqGrid } from "./app/components/puck/faq/FaqGrid";
import { FaqItem } from "./app/components/puck/faq/FaqItem";
import { FaqCTA } from "./app/components/puck/faq/FaqCTA";

interface Props extends HeroConfigProps {
  HeadingBlock: { title: string };
}

export const config = {
  components: {
    HeadingBlock: {
      fields: {
        title: { type: "text" },
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
    ...HeroComponents,
    FaqGrid,
    FaqItem,
    FaqCTA,
  },
};

export default config;
