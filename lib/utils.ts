import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function formatPrice(pence: number): string {
  return `£${(pence / 100).toFixed(2)}`;
}

export function formatPriceShort(pence: number): string {
  return `£${Math.round(pence / 100)}`;
}

export const PRODUCT = {
  id: "cow-tallow-face-balm",
  name: "Cow Tallow Face Balm",
  subtitle: "Lavender Scented",
  price: 2400, // pence
  size: "60ml",
  description:
    "A nourishing face balm made with grass-fed beef tallow and natural ingredients. Perfect for dry, sensitive, or problem skin.",
  ingredients: [
    "Grass-fed beef tallow",
    "Lavender essential oil",
    "Vitamin E",
  ],
  slug: "cow-tallow-face-balm",
};

export const SHIPPING = {
  standard: 350, // pence
  freeThreshold: 3000, // pence - free shipping over £30
};

export function calculateShipping(subtotal: number): number {
  return subtotal >= SHIPPING.freeThreshold ? 0 : SHIPPING.standard;
}
