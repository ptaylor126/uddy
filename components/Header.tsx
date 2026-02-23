"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useCart } from "./CartProvider";
import CartDrawer from "./CartDrawer";
import Marquee from "./Marquee";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isFarting, setIsFarting] = useState(false);
  const { count, toggleCart } = useCart();

  const handleCowClick = () => {
    setIsFarting(true);
    setTimeout(() => setIsFarting(false), 1000);
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Marquee Top Bar */}
      <Marquee />

      {/* Main Nav - Balanced Single Row */}
      <nav className="sticky top-0 bg-white border-b-4 border-uddy-black px-4 md:px-6 py-4 relative z-40 h-20 md:h-24 flex items-center justify-between">

        {/* LEFT GROUP (Cow + Shop) */}
        <div className="flex items-center gap-4 md:gap-8 w-1/3">
          {/* Interactive Cow */}
          <button
            onClick={handleCowClick}
            className="relative hover:scale-110 transition-transform cursor-pointer"
            aria-label="Click the cow"
          >
            <Image
              src="/cow.png"
              alt="Uddy Cow"
              width={40}
              height={40}
              className="w-8 md:w-10 h-auto object-contain"
            />
            <Image
              src="/cloud.png"
              alt="Puff"
              width={30}
              height={30}
              className={cn(
                "absolute -top-3 -right-5 w-7 h-auto transition-all duration-500 pointer-events-none brightness-0 rotate-[-25deg]",
                isFarting
                  ? "opacity-100 translate-x-2"
                  : "opacity-0 translate-x-0 scale-50"
              )}
            />
          </button>

          {/* Shop Link */}
          <Link
            href="/product/cow-tallow-face-balm"
            className="nav-link hidden md:block text-xs font-black uppercase tracking-widest text-uddy-black hover:text-uddy-green transition-colors"
          >
            Shop
          </Link>
        </div>

        {/* CENTER GROUP (Logo - Absolute Center) */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <Link href="/" className="block">
            <Image
              src="/logo-home-new.svg"
              alt="Uddy"
              width={160}
              height={45}
              className="h-[68px] md:h-20 w-auto -mt-[6px] md:-mt-[7px]"
            />
          </Link>
        </div>

        {/* RIGHT GROUP (Story + Cart) */}
        <div className="flex items-center justify-end gap-4 md:gap-8 w-1/3">
          {/* Our Story Link */}
          <Link
            href="/about"
            className="nav-link hidden md:block text-xs font-black uppercase tracking-widest text-uddy-black hover:text-uddy-pink transition-colors"
          >
            Our Story
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden p-1"
            aria-label="Open menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Cart Button */}
          <button
            onClick={toggleCart}
            className="bg-uddy-black text-white px-4 md:px-5 py-2 rounded-full text-xs hover:bg-uddy-green hover:text-uddy-black border-2 border-transparent hover:border-uddy-black transition-colors shadow-[2px_2px_0px_0px_#1A1A1A]"
            style={{ fontWeight: 700 }}
          >
            Cart ({count})
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <div
        className={cn(
          "fixed inset-0 z-[60] md:hidden transition-opacity duration-300",
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-uddy-black/70"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Drawer */}
        <div
          className={cn(
            "absolute top-0 right-0 h-full w-72 bg-uddy-cream border-l-4 border-uddy-black transform transition-transform duration-300",
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="p-6">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-4 right-4 p-2"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Mobile Logo */}
            <div className="mt-12 mb-8">
              <Image
                src="/uddy-pink-logo.png"
                alt="Uddy"
                width={120}
                height={40}
                className="h-12 w-auto"
              />
            </div>

            <nav className="flex flex-col space-y-4">
              <Link
                href="/product/cow-tallow-face-balm"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-black uppercase tracking-widest py-2 hover:text-uddy-green"
              >
                Shop
              </Link>
              <Link
                href="/about"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-black uppercase tracking-widest py-2 hover:text-uddy-pink"
              >
                Our Story
              </Link>
            </nav>
          </div>
        </div>
      </div>

      {/* Cart Drawer */}
      <CartDrawer />
    </>
  );
}
