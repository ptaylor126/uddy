"use client";

import { notFound } from "next/navigation";
import Image from "next/image";
import { useState, use } from "react";
import { useCart } from "@/components/CartProvider";
import { PRODUCT, formatPrice } from "@/lib/utils";

interface Props {
  params: Promise<{ slug: string }>;
}

export default function ProductPage({ params }: Props) {
  const { slug } = use(params);
  const { addItem } = useCart();
  const [selectedVibe, setSelectedVibe] = useState<"green" | "pink">("green");

  if (slug !== PRODUCT.slug) {
    notFound();
  }

  const handleAddToCart = () => {
    addItem({
      id: `${PRODUCT.id}-${selectedVibe}`,
      name: `${PRODUCT.name} - ${selectedVibe === "green" ? "The Classic Green" : "The Punchy Pink"}`,
      price: PRODUCT.price,
      image: selectedVibe === "green" ? "/promo-2.jpg" : "/promo-3.jpg",
    });
  };

  return (
    <main className="flex flex-col lg:flex-row">

      {/* LEFT SIDE - GALLERY */}
      <div className="w-full lg:w-3/5 bg-white border-b-4 lg:border-b-0 lg:border-r-4 border-uddy-black">
        {/* Main Image */}
        <div className="h-[60vh] lg:h-[80vh] w-full relative group bg-gray-100 overflow-hidden">
          <Image
            src="/promo-2.jpg"
            alt="Product Texture"
            fill
            className="object-cover"
            priority
          />

          <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur border-2 border-uddy-black px-4 py-2 rotate-3 shadow-hard">
            <span className="font-black text-xs uppercase tracking-widest">Balm-to-Oil Texture</span>
          </div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 border-t-4 border-uddy-black">
          <div className="aspect-square border-r-4 border-uddy-black relative">
            <Image
              src="/promo-1.jpg"
              alt="Product lifestyle"
              fill
              className="object-cover"
            />
          </div>
          <div className="aspect-square bg-uddy-pink flex items-center justify-center p-8">
            <p className="font-script text-3xl text-white text-center -rotate-6 leading-relaxed">
              &quot;Best thing I&apos;ve ever put on my face.&quot; <br />
              <span className="text-sm font-sans font-bold uppercase not-italic text-uddy-black mt-2 block">- Jack</span>
            </p>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE - STICKY BUY BOX */}
      <div className="w-full lg:w-2/5 lg:h-screen lg:sticky lg:top-0 overflow-y-auto no-scrollbar bg-uddy-cream flex flex-col">

        <div className="p-8 lg:p-12 flex-1">
          {/* Breadcrumb */}
          <div className="text-xs font-bold uppercase tracking-widest opacity-50 mb-4">Shop / Face / The Balm</div>

          {/* Title */}
          <h1 className="text-5xl lg:text-6xl font-black uppercase leading-[0.9] mb-4">
            Cow Tallow <br /> Face Balm.
          </h1>

          {/* Price & Rating */}
          <div className="flex items-center gap-4 mb-8">
            <span className="text-3xl font-black text-uddy-green">{formatPrice(PRODUCT.price)}</span>
            <div className="flex gap-1 text-sm font-bold border-2 border-uddy-black rounded-full px-3 py-1 bg-white">
              ★★★★★ <span className="ml-2 border-l-2 border-uddy-black pl-2">60ml</span>
            </div>
          </div>

          {/* Description */}
          <p className="font-bold text-lg mb-8 leading-relaxed">
            The sebum-mimicking super-balm. Just 4 ingredients. Grass-fed tallow & raw honey to repair your barrier and make you glow.
          </p>

          {/* Vibe Picker */}
          <div className="mb-8">
            <label className="block text-xs font-black uppercase tracking-widest mb-4">Pick Your Vibe:</label>
            <div className="flex gap-4">
              {/* Green Option */}
              <label className="cursor-pointer group">
                <input
                  type="radio"
                  name="color"
                  value="green"
                  className="peer sr-only"
                  checked={selectedVibe === "green"}
                  onChange={() => setSelectedVibe("green")}
                />
                <div className="w-16 h-16 rounded-full bg-uddy-green border-4 border-uddy-black shadow-hard peer-checked:translate-x-[2px] peer-checked:translate-y-[2px] peer-checked:shadow-none transition-all flex items-center justify-center">
                  {selectedVibe === "green" && <span className="text-white text-2xl font-bold">✓</span>}
                </div>
                <span className="block text-center text-xs font-bold mt-2 uppercase group-hover:text-uddy-green">Fresh</span>
              </label>

              {/* Pink Option */}
              <label className="cursor-pointer group">
                <input
                  type="radio"
                  name="color"
                  value="pink"
                  className="peer sr-only"
                  checked={selectedVibe === "pink"}
                  onChange={() => setSelectedVibe("pink")}
                />
                <div className="w-16 h-16 rounded-full bg-uddy-pink border-4 border-uddy-black shadow-hard peer-checked:translate-x-[2px] peer-checked:translate-y-[2px] peer-checked:shadow-none transition-all flex items-center justify-center">
                  {selectedVibe === "pink" && <span className="text-white text-2xl font-bold">✓</span>}
                </div>
                <span className="block text-center text-xs font-bold mt-2 uppercase group-hover:text-uddy-pink">Pop</span>
              </label>
            </div>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="w-full bg-uddy-black text-white text-xl font-black uppercase py-6 hover:bg-uddy-green hover:text-uddy-black transition-colors border-4 border-transparent hover:border-uddy-black shadow-hard hover:shadow-none hover:translate-x-1 hover:translate-y-1 mb-4"
          >
            Add To Cart — {formatPrice(PRODUCT.price)}
          </button>
        </div>

        {/* Accordions */}
        <div className="border-t-4 border-uddy-black bg-white">
          <details className="group border-b-2 border-uddy-black">
            <summary className="flex justify-between items-center p-6 cursor-pointer hover:bg-uddy-cream transition-colors">
              <span className="font-black uppercase text-lg">What&apos;s Inside?</span>
              <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
            </summary>
            <div className="px-6 pb-6 pt-0">
              <ul className="list-disc pl-4 space-y-2 font-bold text-sm">
                <li>Grass Fed Tallow (The Hero)</li>
                <li>Raw Honey (The Healer)</li>
                <li>Sweet Almond Oil (The Softener)</li>
                <li>Lavender Essential Oil (The Scent)</li>
              </ul>
            </div>
          </details>
          <details className="group border-b-2 border-uddy-black">
            <summary className="flex justify-between items-center p-6 cursor-pointer hover:bg-uddy-cream transition-colors">
              <span className="font-black uppercase text-lg">Shipping & Returns</span>
              <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
            </summary>
            <div className="px-6 pb-6 pt-0 font-bold text-sm">
              Free shipping over £30. 30-day &quot;Happy Face&quot; guarantee.
            </div>
          </details>
        </div>
      </div>
    </main>
  );
}
