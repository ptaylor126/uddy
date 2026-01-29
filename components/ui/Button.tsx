"use client";

import { cn } from "@/lib/utils";
import { forwardRef, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg" | "xl";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-semibold transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-green)] focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-full transform hover:scale-105 active:scale-100",
          {
            // Variants - BOLD colors
            "bg-[#E8899E] text-white hover:bg-[#D4768A] shadow-lg hover:shadow-xl":
              variant === "primary",
            "bg-[#3EB489] text-white hover:bg-[#2D9A73] shadow-lg hover:shadow-xl":
              variant === "secondary",
            "border-2 border-[var(--color-charcoal)] text-[var(--color-charcoal)] hover:bg-[var(--color-charcoal)] hover:text-white":
              variant === "outline",
            "text-[var(--color-charcoal)] hover:bg-[#E8899E]/20":
              variant === "ghost",
            // Sizes - BIGGER padding
            "text-sm px-5 py-2.5": size === "sm",
            "text-base px-7 py-3.5": size === "md",
            "text-lg px-9 py-4": size === "lg",
            "text-xl px-10 py-5": size === "xl",
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
