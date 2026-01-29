export interface CartItem {
  id: string;
  name: string;
  price: number; // in pence
  quantity: number;
  image?: string;
}

export interface CartState {
  items: CartItem[];
  isOpen: boolean;
}

export const CART_STORAGE_KEY = "uddy-cart";

export function getInitialCart(): CartState {
  if (typeof window === "undefined") {
    return { items: [], isOpen: false };
  }

  try {
    const stored = localStorage.getItem(CART_STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      return { items: parsed.items || [], isOpen: false };
    }
  } catch (error) {
    console.error("Failed to parse cart from localStorage:", error);
  }

  return { items: [], isOpen: false };
}

export function saveCart(items: CartItem[]): void {
  if (typeof window === "undefined") return;

  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify({ items }));
  } catch (error) {
    console.error("Failed to save cart to localStorage:", error);
  }
}

export function getCartTotal(items: CartItem[]): number {
  return items.reduce((total, item) => total + item.price * item.quantity, 0);
}

export function getCartCount(items: CartItem[]): number {
  return items.reduce((count, item) => count + item.quantity, 0);
}
