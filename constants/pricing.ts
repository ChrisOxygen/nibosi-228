import { PRODUCT } from "@/constants/product";

export const PRICING = {
  ORIGINAL: 88500,
  OFFER: 60000,
  SAVINGS: 28500,
  WATCH: 63000,
  BRACELET: 15500,
  DELIVERY: 5000,
} as const;

export function formatNaira(amount: number): string {
  return `₦${amount.toLocaleString()}`;
}

export const LINE_ITEMS = [
  { label: PRODUCT.WATCH_NAME, price: PRICING.WATCH },
  { label: PRODUCT.BRACELET_NAME, price: PRICING.BRACELET },
  { label: `Delivery in ${PRODUCT.DELIVERY_REGION} (FREE)`, price: PRICING.DELIVERY },
];
