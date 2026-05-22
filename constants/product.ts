export const PRODUCT = {
  NAME: "Nibosi Ruby Prestige",
  WATCH_NAME: "Nibosi Ruby Prestige Day-Date Watch",
  WATCH_TAGLINE: "Precision timekeeping with sophisticated design",
  BRACELET_NAME: "Golden Dynasty Premium Bracelet",
  BRACELET_DESCRIPTION:
    "Golden Dynasty, a bold multi-link bracelet that embodies wealth, power, and timeless sophistication",
  HEADLINE: "Command Every Moment with Nibosi Ruby Prestige",
  SUBTITLE: "(The Premium Watch & Bracelet Set That Defines Your Style)",
  TAGLINE: "The Perfect Combination for the Modern Professional",
  PAY_ON_DELIVERY_SUBTITLE:
    "Ready to make your statement with the Nibosi Ruby Prestige? We deliver right to your doorstep in Lagos State, and you only pay when your presidential timepiece arrives safely in your hands",
  LUCKY_NUMBER: 7,
  DELIVERY_REGION: "Lagos State and Port Harcourt",
  WHATSAPP_NUMBER: "2348023101492",
  WHATSAPP_MESSAGE:
    "Hi! I just placed an order for the Nibosi Ruby Prestige watch set and I'm ready for delivery today!",
} as const;

export const WHATSAPP_LINK = `https://wa.me/${PRODUCT.WHATSAPP_NUMBER}?text=${encodeURIComponent(PRODUCT.WHATSAPP_MESSAGE)}`;

export const PRODUCT_IMAGES = {
  HERO: "/assets/nibosi-watch-gold-red-leather-wood.jpeg",
  WATCH_GALLERY: [
    "/assets/nibosi-watch-gold-red-display-cushion.jpeg",
    "/assets/nibosi-watch-gold-red-display-cushion.jpeg",
    "/assets/nibosi-watch-gold-red-display-cushion.jpeg",
  ],
  WATCH_PRICING: "/assets/nibosi-watch-diamond-display-case.jpeg",
  BRACELET: "/assets/gold-chain-bracelet.jpeg",
} as const;
