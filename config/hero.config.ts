import { ComponentConfig } from "@puckeditor/core";
import { heroFields } from "../fields/hero.fields";
import { HeroProps } from "../types/puck/hero.types";
import { heroDefaultProps } from "../props/hero.props";
import HeroFineDining from "../app/components/puck/hero/HeroFineDining";
import HeroModernBistro from "../app/components/puck/hero/HeroModernBistro";

export interface HeroConfigProps {
  HeroFineDining: HeroProps;
  HeroModernBistro: HeroProps;
}

export const HeroComponents = {
  HeroFineDining: {
    fields: heroFields,
    defaultProps: heroDefaultProps.HeroFineDining,
    render: HeroFineDining,
  },

  HeroModernBistro: {
    fields: heroFields,
    defaultProps: heroDefaultProps.HeroModernBistro,
    render: HeroModernBistro,
  },
};
