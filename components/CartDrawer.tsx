"use client";

import { useCart } from "./CartProvider";
import { cn, formatPrice, calculateShipping, SHIPPING, PRODUCT } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

export default function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    removeItem,
    updateQuantity,
    addItem,
    total,
    count,
  } = useCart();

  const shipping = calculateShipping(total);
  const orderTotal = total + shipping;
  const freeShippingRemaining = SHIPPING.freeThreshold - total;
  const shippingProgress = Math.min((total / SHIPPING.freeThreshold) * 100, 100);

  // Check if user has only one type of jar to show upsell
  const hasGreenJar = items.some((item) => item.id.includes("green"));
  const hasPinkJar = items.some((item) => item.id.includes("pink"));
  const showUpsell = (hasGreenJar && !hasPinkJar) || (hasPinkJar && !hasGreenJar);
  const upsellColor = hasGreenJar ? "pink" : "green";

  const handleAddUpsell = () => {
    addItem({
      id: `${PRODUCT.id}-${upsellColor}`,
      name: `${PRODUCT.name} - ${upsellColor === "green" ? "The Classic Green" : "The Punchy Pink"}`,
      price: PRODUCT.price,
      image: upsellColor === "green" ? "/promo-2.jpg" : "/promo-3.jpg",
    });
  };

  return (
    <div
      className={cn(
        "fixed inset-0 z-[70] transition-opacity duration-300",
        isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      )}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-gray-500/50"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div
        className={cn(
          "absolute top-0 right-0 h-full w-full md:w-[500px] bg-uddy-cream border-l-4 border-uddy-black flex flex-col shadow-2xl transform transition-transform duration-300",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Header with Progress Bar */}
        <div className="bg-white border-b-4 border-uddy-black p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-black uppercase tracking-tighter">Your Stash ({count})</h2>
            <button
              onClick={closeCart}
              className="text-2xl font-black hover:text-uddy-pink"
            >
              ✕
            </button>
          </div>

          {/* Shipping Progress */}
          {total > 0 && (
            <>
              <div className="flex justify-between text-xs font-bold uppercase tracking-widest mb-2 text-uddy-green">
                {freeShippingRemaining > 0 ? (
                  <>
                    <span>You&apos;re {formatPrice(freeShippingRemaining)} away from Free Shipping!</span>
                    <span>{Math.round(shippingProgress)}%</span>
                  </>
                ) : (
                  <span>Free Shipping Unlocked!</span>
                )}
              </div>
              <div className="w-full h-4 bg-gray-200 border-2 border-uddy-black rounded-full overflow-hidden">
                <div
                  className="h-full bg-uddy-pink striped-fill transition-all duration-300"
                  style={{ width: `${shippingProgress}%` }}
                />
              </div>
            </>
          )}
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <p className="font-bold text-uddy-black/60 mb-4">
                Your stash is empty...
              </p>
              <Link
                href="/product/cow-tallow-face-balm"
                onClick={closeCart}
                className="inline-block bg-uddy-black text-white font-black px-6 py-3 uppercase text-sm hover:bg-uddy-green hover:text-uddy-black transition-colors"
              >
                Start Shopping
              </Link>
            </div>
          ) : (
            <>
              {items.map((item) => (
                <div key={item.id} className="flex gap-4 items-start">
                  {/* Product Image */}
                  <div className="w-24 h-24 bg-gray-100 border-2 border-uddy-black flex-shrink-0 relative overflow-hidden">
                    {item.image ? (
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-uddy-green flex items-center justify-center font-bold text-xs text-white">
                        [IMG]
                      </div>
                    )}
                  </div>

                  {/* Product Details */}
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-black uppercase text-lg leading-tight">Cow Tallow Balm</h3>
                      <span className="font-bold text-lg">{formatPrice(item.price)}</span>
                    </div>
                    <p className="text-xs font-bold opacity-60 uppercase tracking-widest mb-3">
                      {item.id.includes("green") ? "Green Jar" : "Pink Jar"} • 60ml
                    </p>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-4">
                      <div className="flex border-2 border-uddy-black bg-white h-8">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-3 hover:bg-gray-100 font-bold"
                        >
                          -
                        </button>
                        <div className="px-2 flex items-center justify-center font-bold text-sm w-8">
                          {item.quantity}
                        </div>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-3 hover:bg-gray-100 font-bold"
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-xs font-bold underline hover:text-red-500"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              {/* Upsell Nudge */}
              {showUpsell && freeShippingRemaining > 0 && (
                <div className="bg-uddy-yellow border-2 border-dashed border-uddy-black p-4 relative mt-8">
                  <div className="absolute -top-3 left-4 bg-uddy-black text-white text-[10px] font-bold uppercase px-2 py-1 rotate-2">
                    Don&apos;t pay for shipping
                  </div>
                  <div className="flex items-center gap-4 mt-2">
                    <div className={cn(
                      "w-12 h-12 border-2 border-uddy-black rounded-full flex-shrink-0 flex items-center justify-center text-white font-black text-xs",
                      upsellColor === "pink" ? "bg-uddy-pink" : "bg-uddy-green"
                    )}>
                      {upsellColor.toUpperCase()}
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-sm leading-tight mb-1">
                        Add the <span className={upsellColor === "pink" ? "text-uddy-pink" : "text-uddy-green"}>
                          {upsellColor === "pink" ? "Pink" : "Green"} Jar
                        </span> to unlock Free Shipping?
                      </p>
                      <button
                        onClick={handleAddUpsell}
                        className="text-xs font-black uppercase underline decoration-2 decoration-uddy-black hover:text-uddy-pink"
                      >
                        + Add for {formatPrice(PRODUCT.price)}
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t-4 border-uddy-black bg-white p-6 pb-8">
            <div className="flex justify-between text-xl font-black uppercase mb-4">
              <span>Total</span>
              <span>{formatPrice(orderTotal)}</span>
            </div>
            <Link
              href="/cart"
              onClick={closeCart}
              className="block w-full bg-uddy-black text-white text-xl font-black uppercase py-5 text-center border-4 border-transparent hover:bg-uddy-green hover:text-uddy-black hover:border-uddy-black transition-all shadow-hard hover:shadow-none hover:translate-x-1 hover:translate-y-1"
            >
              Checkout
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
