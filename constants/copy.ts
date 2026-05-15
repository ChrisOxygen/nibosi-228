import { PRODUCT } from "@/constants/product";
import { PRICING, formatNaira } from "@/constants/pricing";

export const COPY = {
  // Scroll header bar
  MARQUEE_ITEM_1: "Pay ONLY When You Receive It",
  MARQUEE_ITEM_2: "FREE Delivery to Your Door",
  SCROLL_CTA_BUTTON: "ORDER NOW",

  // Checkout header
  CHECKOUT_HEADING: "Enter your delivery details",
  CHECKOUT_WARNING:
    "Please be sure you are FULLY Ready for the Product and have the Money to Pay at the Point of Delivery , because we spend alot of Money on advertisement, logistics and delivery to your location!!",

  // Checkout form
  PACKAGE_HEADING: "Your Package Includes",
  SUBMIT_BUTTON: "Place Your Order!!",

  // Benefits section
  BENEFITS_HEADING: "Why Ruby Prestige is Different from Everything Else...",
  BENEFITS_COMPETITOR_LABEL: "Other Watches",
  BENEFITS_OUR_LABEL: PRODUCT.NAME,

  // Guarantee section
  GUARANTEE_TITLE: "OUR GUARANTEE",
  GUARANTEE_DESCRIPTION: `We're so confident in ${PRODUCT.NAME} that we offer a full satisfaction guarantee, because we've tested it thoroughly and it exceeds industry standards for this price point`,
  GUARANTEE_REFUND: `If ${PRODUCT.NAME} doesn't exceed your expectations for luxury and presence, return it for a full refund - no questions asked.`,

  // FAQ section
  FAQ_HEADING: "Customer Questions & Answers",
  FAQ_DESCRIPTION: `We've answered the most common questions to help you make the best decision for your timepiece needs. Please send us a message on WhatsApp for any additional inquiries!`,

  // Thank you page
  WHATSAPP_CTA_BUTTON: "I want my delivery today",

  // Footer
  FOOTER_COPYRIGHT: "© Copyright 2025 VeluxGrayFashion.com All rights reserved",
  FOOTER_DISCLAIMER:
    "This website Is Not A Part Of The Facebook Website Or Facebook Inc. FACEBOOK Is A Trademark Of FACEBOOK, Inc.",
};

export const QUANTITY_OPTIONS = [
  {
    value: "1",
    label: `1 ${PRODUCT.NAME} watch + FREE Gold bracelet = ${formatNaira(PRICING.OFFER)}`,
  },
  {
    value: "2",
    label: `2 ${PRODUCT.NAME} watches + FREE Gold bracelet = ${formatNaira(PRICING.OFFER * 2)}`,
  },
];
