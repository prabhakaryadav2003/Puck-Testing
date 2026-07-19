import { HeroProps } from "../types/puck/hero.types";

export const heroDefaultProps: Record<string, HeroProps> = {
  HeroFineDining: {
    badge: "Michelin Inspired",
    subtitle: "Fine Dining Restaurant",
    title: "An Extraordinary Dining Experience",
    description:
      "Discover seasonal tasting menus crafted by award-winning chefs using the finest local ingredients.",

    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200",
    imageAlt: "Fine Dining Restaurant",

    overlay: true,
    overlayOpacity: 50,

    primaryButton: {
      text: "Reserve Table",
      href: "#",
      target: "_self",
    },

    secondaryButton: {
      text: "View Menu",
      href: "#",
      target: "_self",
    },

    stats: [
      {
        value: "15+",
        label: "Years",
      },
      {
        value: "5★",
        label: "Rating",
      },
      {
        value: "50+",
        label: "Signature Dishes",
      },
    ],
  },

  HeroModernBistro: {
    badge: "Chef's Special",
    subtitle: "Modern Bistro",
    title: "Fresh Ingredients. Bold Flavors.",
    description:
      "Experience seasonal dishes, handcrafted cocktails, and warm hospitality.",

    image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=1200",
    imageAlt: "Modern Bistro",

    primaryButton: {
      text: "Book Table",
      href: "#",
      target: "_self",
    },

    secondaryButton: {
      text: "Explore Menu",
      href: "#",
      target: "_self",
    },

    features: [
      {
        icon: "🍽️",
        title: "Seasonal Menu",
        description: "Fresh ingredients every day.",
      },
      {
        icon: "🍷",
        title: "Craft Cocktails",
        description: "Signature drinks & wines.",
      },
      {
        icon: "⭐",
        title: "Top Rated",
        description: "Loved by thousands.",
      },
    ],
  },

  HeroJapaneseMinimal: {
    badge: "Authentic",
    subtitle: "Japanese Cuisine",
    title: "The Art of Japanese Dining",

    description:
      "Precision, simplicity and seasonal ingredients presented beautifully.",

    image:
      "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=1200",

    imageAlt: "Japanese Restaurant",

    primaryButton: {
      text: "Reserve",
      href: "#",
    },

    secondaryButton: {
      text: "Menu",
      href: "#",
    },
  },

  HeroRusticFarmhouse: {
    badge: "Farm Fresh",
    subtitle: "Rustic Kitchen",

    title: "From Our Farm To Your Table",

    description:
      "Simple ingredients, authentic recipes and unforgettable meals.",

    image:
      "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1200",

    imageAlt: "Farmhouse Restaurant",

    primaryButton: {
      text: "Reserve",
      href: "#",
    },

    secondaryButton: {
      text: "Our Story",
      href: "#",
    },
  },
};
