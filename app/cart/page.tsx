"use client";

import { useCart } from "@/components/CartProvider";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { formatPrice, calculateShipping, SHIPPING } from "@/lib/utils";
import { useState } from "react";

export default function CartPage() {
  const { items, removeItem, updateQuantity, total, count, clearCart } =
    useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const shipping = calculateShipping(total);
  const orderTotal = total + shipping;
  const freeShippingRemaining = SHIPPING.freeThreshold - total;

  const handleCheckout = async () => {
    setIsCheckingOut(true);

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ items }),
      });

      const data = await response.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        throw new Error("No checkout URL returned");
      }
    } catch (error) {
      console.error("Checkout error:", error);
      alert("Something went wrong. Please try again.");
      setIsCheckingOut(false);
    }
  };

  if (items.length === 0) {
    return (
      <div className="pt-20 min-h-[70vh] flex items-center justify-center">
        <div className="text-center px-4">
          <svg
            className="w-16 h-16 text-[var(--color-pink)] mx-auto mb-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            />
          </svg>
          <h1 className="text-2xl md:text-3xl font-serif mb-4">
            Your cart is empty
          </h1>
          <p className="text-[var(--color-charcoal)]/70 mb-8">
            Looks like you haven&apos;t added anything to your cart yet.
          </p>
          <Link href="/product/cow-tallow-face-balm">
            <Button size="lg">Continue Shopping</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl md:text-4xl font-serif mb-8">Your Cart</h1>

        {/* Free Shipping Progress */}
        {freeShippingRemaining > 0 && (
          <div className="bg-[var(--color-green)]/10 rounded-xl p-4 mb-8">
            <p className="text-center mb-2">
              Spend {formatPrice(freeShippingRemaining)} more for free shipping!
            </p>
            <div className="h-2 bg-[var(--color-cream)] rounded-full overflow-hidden max-w-md mx-auto">
              <div
                className="h-full bg-[var(--color-green)] transition-all duration-300"
                style={{
                  width: `${Math.min(
                    (total / SHIPPING.freeThreshold) * 100,
                    100
                  )}%`,
                }}
              />
            </div>
          </div>
        )}

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl overflow-hidden">
              {/* Header */}
              <div className="hidden md:grid grid-cols-12 gap-4 p-4 bg-[var(--color-charcoal)]/5 text-sm font-medium">
                <div className="col-span-6">Product</div>
                <div className="col-span-2 text-center">Quantity</div>
                <div className="col-span-2 text-center">Price</div>
                <div className="col-span-2 text-center">Total</div>
              </div>

              {/* Items */}
              {items.map((item) => (
                <div
                  key={item.id}
                  className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4 border-b border-[var(--color-charcoal)]/10 last:border-0 items-center"
                >
                  {/* Product */}
                  <div className="md:col-span-6 flex items-center gap-4">
                    <div className="w-20 h-20 bg-[var(--color-pink)]/10 rounded-lg overflow-hidden flex-shrink-0">
                      {item.image ? (
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={80}
                          height={80}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <svg
                            className="w-8 h-8 text-[var(--color-pink)]"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                          </svg>
                        </div>
                      )}
                    </div>
                    <div>
                      <h3 className="font-medium">{item.name}</h3>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-sm text-red-500 hover:underline mt-1"
                      >
                        Remove
                      </button>
                    </div>
                  </div>

                  {/* Quantity */}
                  <div className="md:col-span-2 flex items-center justify-center">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="w-8 h-8 rounded-full border border-[var(--color-charcoal)]/20 flex items-center justify-center hover:bg-[var(--color-pink)]/20 transition-colors"
                        aria-label="Decrease quantity"
                      >
                        -
                      </button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="w-8 h-8 rounded-full border border-[var(--color-charcoal)]/20 flex items-center justify-center hover:bg-[var(--color-pink)]/20 transition-colors"
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="md:col-span-2 text-center">
                    <span className="md:hidden font-medium">Price: </span>
                    {formatPrice(item.price)}
                  </div>

                  {/* Total */}
                  <div className="md:col-span-2 text-center font-medium">
                    <span className="md:hidden">Total: </span>
                    {formatPrice(item.price * item.quantity)}
                  </div>
                </div>
              ))}
            </div>

            {/* Continue Shopping */}
            <div className="mt-6 flex justify-between items-center">
              <Link
                href="/product/cow-tallow-face-balm"
                className="text-[var(--color-pink)] hover:underline"
              >
                &larr; Continue Shopping
              </Link>
              <button
                onClick={clearCart}
                className="text-[var(--color-charcoal)]/60 hover:text-red-500 text-sm"
              >
                Clear Cart
              </button>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 sticky top-24">
              <h2 className="text-xl font-serif mb-6">Order Summary</h2>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-[var(--color-charcoal)]/70">
                    Subtotal ({count} {count === 1 ? "item" : "items"})
                  </span>
                  <span>{formatPrice(total)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--color-charcoal)]/70">
                    Shipping
                  </span>
                  <span>
                    {shipping === 0 ? (
                      <span className="text-[var(--color-green)]">Free</span>
                    ) : (
                      formatPrice(shipping)
                    )}
                  </span>
                </div>
                <div className="border-t border-[var(--color-charcoal)]/10 pt-3 flex justify-between font-medium text-lg">
                  <span>Total</span>
                  <span>{formatPrice(orderTotal)}</span>
                </div>
              </div>

              <Button
                onClick={handleCheckout}
                size="lg"
                className="w-full"
                disabled={isCheckingOut}
              >
                {isCheckingOut ? "Processing..." : "Proceed to Checkout"}
              </Button>

              <p className="text-xs text-center text-[var(--color-charcoal)]/60 mt-4">
                Secure checkout powered by Stripe
              </p>

              {/* Trust Badges */}
              <div className="mt-6 pt-6 border-t border-[var(--color-charcoal)]/10">
                <div className="flex items-center justify-center gap-4 text-[var(--color-charcoal)]/60">
                  <div className="flex items-center gap-1 text-xs">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                    Secure
                  </div>
                  <div className="flex items-center gap-1 text-xs">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                    UK Only
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
