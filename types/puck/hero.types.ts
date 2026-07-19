export interface HeroButton {
  text: string;
  href: string;
  target?: "_self" | "_blank";
}

export interface HeroStats {
  label: string;
  value: string;
}

export interface HeroFeature {
  title: string;
  description: string;
  icon?: string;
}

export interface HeroProps {
  // Content
  badge?: string;
  subtitle?: string;
  title: string;
  description?: string;

  // Media
  image?: string;
  imageAlt?: string;
  backgroundImage?: string;
  backgroundVideo?: string;

  // Buttons
  primaryButton?: HeroButton;
  secondaryButton?: HeroButton;

  // Optional content
  stats?: HeroStats[];
  features?: HeroFeature[];

  // Appearance
  overlay?: boolean;
  overlayOpacity?: number;

  // Advanced
  className?: string;
}
