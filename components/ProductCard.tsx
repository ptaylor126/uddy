"use client";

import Image from "next/image";
import { useState } from "react";
import { useCart } from "./CartProvider";
import { formatPrice, PRODUCT } from "@/lib/utils";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  title: string;
  subtitle: string;
  color: "green" | "pink";
  price: number;
  imageSrc: string;
}

export default function ProductCard({
  title,
  subtitle,
  color,
  price,
  imageSrc,
}: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const { addItem } = useCart();

  const colorClasses = {
    green: {
      bg: "bg-uddy-green",
      shadow: "shadow-[6px_6px_0px_0px_#1BC496]",
      hoverShadow: "hover:shadow-[8px_8px_0px_0px_#1BC496]",
      accent: "text-uddy-green",
    },
    pink: {
      bg: "bg-uddy-pink",
      shadow: "shadow-[6px_6px_0px_0px_#FF91B6]",
      hoverShadow: "hover:shadow-[8px_8px_0px_0px_#FF91B6]",
      accent: "text-uddy-pink",
    },
  };

  const styles = colorClasses[color];

  const handleAddToCart = () => {
    addItem({
      id: `${PRODUCT.id}-${color}`,
      name: `${PRODUCT.name} - ${title}`,
      price: price,
      image: imageSrc,
    });
  };

  return (
    <div
      className={cn(
        "relative bg-white border-4 border-uddy-black overflow-hidden transition-all duration-200",
        styles.shadow,
        "hover:translate-x-[-2px] hover:translate-y-[-2px]",
        styles.hoverShadow
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative h-[400px] md:h-[500px] overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover transition-transform duration-500"
          style={{ transform: isHovered ? "scale(1.05)" : "scale(1)" }}
        />

        {/* Color Badge */}
        <div
          className={cn(
            "absolute top-4 left-4 px-4 py-2 border-4 border-uddy-black font-black uppercase text-sm",
            styles.bg
          )}
        >
          {color === "green" ? "Fresh" : "Calm"}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 border-t-4 border-uddy-black">
        <h3 className="text-2xl font-black uppercase mb-1">{title}</h3>
        <p className={cn("font-semibold mb-4", styles.accent)}>{subtitle}</p>
        <p className="text-3xl font-black mb-4">{formatPrice(price)}</p>

        {/* Add to Cart Button - Slides up on hover */}
        <div
          className={cn(
            "transition-all duration-300 overflow-hidden",
            isHovered ? "max-h-20 opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <button
            onClick={handleAddToCart}
            className={cn(
              "w-full py-4 border-4 border-uddy-black font-black uppercase tracking-wide transition-all duration-150",
              styles.bg,
              "hover:bg-uddy-black hover:text-white"
            )}
          >
            Add to Cart
          </button>
        </div>

        {/* Always visible on mobile */}
        <button
          onClick={handleAddToCart}
          className={cn(
            "md:hidden w-full py-4 border-4 border-uddy-black font-black uppercase tracking-wide transition-all duration-150",
            styles.bg,
            "hover:bg-uddy-black hover:text-white"
          )}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
