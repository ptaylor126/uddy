"use client";

import { useState } from "react";
import { useCart } from "./CartProvider";
import Button from "./ui/Button";
import { PRODUCT, formatPrice } from "@/lib/utils";

interface AddToCartButtonProps {
  productId?: string;
  productName?: string;
  productPrice?: number;
  productImage?: string;
  showQuantity?: boolean;
}

export default function AddToCartButton({
  productId = PRODUCT.id,
  productName = PRODUCT.name,
  productPrice = PRODUCT.price,
  productImage,
  showQuantity = false,
}: AddToCartButtonProps) {
  const { addItem, items, updateQuantity } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);

  const existingItem = items.find((item) => item.id === productId);

  const handleAddToCart = () => {
    setIsAdding(true);

    if (existingItem) {
      updateQuantity(productId, existingItem.quantity + quantity);
    } else {
      for (let i = 0; i < quantity; i++) {
        addItem({
          id: productId,
          name: productName,
          price: productPrice,
          image: productImage,
        });
      }
    }

    setTimeout(() => {
      setIsAdding(false);
      setQuantity(1);
    }, 500);
  };

  return (
    <div className="space-y-4">
      {showQuantity && (
        <div className="flex items-center gap-4">
          <span className="text-sm font-medium">Quantity:</span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="w-10 h-10 rounded-full border border-[var(--color-charcoal)]/20 flex items-center justify-center hover:bg-[var(--color-pink)]/20 transition-colors"
              aria-label="Decrease quantity"
            >
              -
            </button>
            <span className="w-10 text-center font-medium">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="w-10 h-10 rounded-full border border-[var(--color-charcoal)]/20 flex items-center justify-center hover:bg-[var(--color-pink)]/20 transition-colors"
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>
        </div>
      )}

      <Button
        onClick={handleAddToCart}
        size="lg"
        className="w-full"
        disabled={isAdding}
      >
        {isAdding ? (
          "Adding..."
        ) : (
          <>
            Add to Cart - {formatPrice(productPrice * (showQuantity ? quantity : 1))}
          </>
        )}
      </Button>

      {existingItem && (
        <p className="text-sm text-center text-[var(--color-green)]">
          {existingItem.quantity} already in cart
        </p>
      )}
    </div>
  );
}
