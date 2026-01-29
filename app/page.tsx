"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/components/CartProvider";
import ProcessAndScience from "@/components/ProcessAndScience";
import { PRODUCT, formatPrice, formatPriceShort } from "@/lib/utils";

export default function Home() {
  const { addItem } = useCart();

  const handleAddGreen = () => {
    addItem({
      id: `${PRODUCT.id}-green`,
      name: `${PRODUCT.name} - The Classic Green`,
      price: PRODUCT.price,
      image: "/promo-2.jpg",
    });
  };

  const handleAddPink = () => {
    addItem({
      id: `${PRODUCT.id}-pink`,
      name: `${PRODUCT.name} - The Punchy Pink`,
      price: PRODUCT.price,
      image: "/promo-3.jpg",
    });
  };

  return (
    <>
      {/* HERO SECTION */}
      <section className="flex flex-col md:flex-row min-h-[85vh] border-b-4 border-uddy-black">

        {/* Left Side - Pink */}
        <div className="w-full md:w-1/2 bg-uddy-pink p-10 md:p-20 flex flex-col justify-center relative border-b-4 md:border-b-0 md:border-r-4 border-uddy-black">

          {/* Floating Sticker */}
          <div className="absolute top-16 right-6 md:top-24 md:right-12 w-32 h-32 bg-uddy-yellow border-4 border-uddy-black rounded-full flex items-center justify-center text-center font-black -rotate-[20deg] shadow-hard z-10 animate-bounce" style={{ animationDuration: '1.5s' }}>
            <span className="text-sm leading-tight text-uddy-black">THE<br/>O.G. SKIN<br/>FOOD</span>
          </div>

          <h1 className="text-7xl md:text-9xl font-black leading-[0.85] mb-8 text-white drop-shadow-[6px_6px_0px_#1A1A1A]">
            FEED <br/> YOUR <br/> FACE.
          </h1>

          <p className="text-lg md:text-xl font-bold mb-10 max-w-md bg-white border-2 border-uddy-black p-4 shadow-hard transform -rotate-1">
            Skin doesn&apos;t need fighting. It needs feeding. The UK&apos;s finest grass-fed tallow balm.
          </p>

          <Link
            href="/product/cow-tallow-face-balm"
            className="self-start bg-uddy-green text-uddy-black text-xl md:text-2xl font-black uppercase px-10 py-6 border-4 border-uddy-black shadow-hard-lg hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
          >
            GET SOME UDDY
          </Link>
        </div>

        {/* Right Side - Image */}
        <div className="w-full md:w-1/2 bg-gray-100 relative group overflow-hidden min-h-[400px] md:min-h-0">
          <Image
            src="/promo-1.jpg"
            alt="Uddy Girl"
            fill
            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            priority
          />

          {/* Hover Product Label */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100 z-10">
            <div className="bg-white border-3 border-uddy-black p-4 shadow-hard text-center">
              <p className="text-xs font-black uppercase tracking-widest text-uddy-green mb-1">Cow Tallow Balm</p>
              <p className="text-2xl font-black mb-3">{formatPrice(PRODUCT.price)}</p>
              <div className="flex flex-col gap-2">
                <button
                  onClick={handleAddGreen}
                  className="bg-uddy-black text-white font-black uppercase text-xs px-4 py-2 hover:bg-uddy-green hover:text-uddy-black transition-colors border-2 border-uddy-black"
                >
                  Add to Cart
                </button>
                <Link
                  href="/product/cow-tallow-face-balm"
                  className="text-[10px] font-bold uppercase underline hover:text-uddy-pink"
                >
                  View Product →
                </Link>
              </div>
            </div>
          </div>

          {/* Quote Banner */}
          <div className="absolute bottom-0 left-0 w-full bg-white border-t-4 border-uddy-black p-6 text-center">
            <p className="font-script text-2xl md:text-3xl text-uddy-pink transform -rotate-1">
              Jack gave up on his skin. Hollie got cooking.
            </p>
          </div>
        </div>
      </section>

      {/* PROCESS & SCIENCE SECTION */}
      <ProcessAndScience />

      {/* PICK YOUR POT SECTION */}
      <section className="py-24 bg-uddy-green border-b-4 border-uddy-black relative overflow-hidden">

        {/* Background Pattern (Polka Dots) */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(#000 2px, transparent 2px)',
            backgroundSize: '24px 24px'
          }}
        ></div>

        <div className="container mx-auto px-6 relative z-10">

          {/* Headline & Subtitle */}
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-black text-white mb-8">
              PICK YOUR POT
            </h2>

            {/* Rotated Box */}
            <div className="inline-block bg-white border-4 border-uddy-black px-8 py-3 transform -rotate-3 shadow-[4px_4px_0px_0px_#1A1A1A]">
              <span className="font-black uppercase tracking-widest text-sm md:text-base text-uddy-black">
                Same Formula • Different Vibe
              </span>
            </div>
          </div>

          {/* Card Grid */}
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 px-4 md:px-8">

            {/* Green Jar Card */}
            <div className="group flex flex-col">
              {/* Card + Button wrapper */}
              <div className="relative">
                {/* White card */}
                <div className="bg-white border-4 border-uddy-black aspect-square relative shadow-[12px_12px_0px_0px_#1A1A1A] group-hover:shadow-[0px_0px_0px_0px_#1A1A1A] flex items-center justify-center p-8 transition-all duration-300">

                  {/* Pink Price Sticker */}
                  <div className="absolute -top-5 -right-5 w-16 h-16 md:w-20 md:h-20 bg-uddy-pink rounded-full border-2 border-uddy-black flex items-center justify-center z-20 transform rotate-12 group-hover:rotate-0 group-hover:scale-110 transition-all">
                    <span className="font-black text-lg md:text-xl text-uddy-black">{formatPriceShort(PRODUCT.price)}</span>
                  </div>

                  <Image src="/product-green.png" alt="The Classic Green" width={400} height={400} className="w-1/2 h-1/2 object-contain group-hover:scale-105 transition-transform" />
                </div>

                {/* Hidden name + Button stack */}
                <div className="relative">
                  {/* Name text - sits behind the button, revealed on hover */}
                  <div className="text-center py-4 bg-uddy-green">
                    <h3 className="font-black text-xl md:text-2xl uppercase text-white">The Classic Green</h3>
                  </div>
                  {/* Button - covers the name, slides up on hover */}
                  <button
                    onClick={handleAddGreen}
                    className="absolute inset-0 w-full bg-uddy-black text-uddy-green font-black uppercase py-5 text-lg md:text-xl tracking-widest border-4 border-uddy-black border-t-0 group-hover:-translate-y-full transition-all duration-300 hover:bg-uddy-green hover:text-uddy-black z-10"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>

              {/* Product name always visible */}
              <div className="text-center mt-4">
                <p className="font-bold text-sm md:text-base text-uddy-black">Cow Tallow Face Balm (Lavender)</p>
              </div>
            </div>

            {/* Pink Jar Card */}
            <div className="group flex flex-col">
              {/* Card + Button wrapper */}
              <div className="relative">
                {/* White card */}
                <div className="bg-white border-4 border-uddy-black aspect-square relative shadow-[12px_12px_0px_0px_#1A1A1A] group-hover:shadow-[0px_0px_0px_0px_#1A1A1A] flex items-center justify-center p-8 transition-all duration-300">

                  {/* Yellow Price Sticker */}
                  <div className="absolute -top-5 -right-5 w-16 h-16 md:w-20 md:h-20 bg-uddy-yellow rounded-full border-2 border-uddy-black flex items-center justify-center z-20 transform -rotate-6 group-hover:rotate-0 group-hover:scale-110 transition-all">
                    <span className="font-black text-lg md:text-xl text-uddy-black">{formatPriceShort(PRODUCT.price)}</span>
                  </div>

                  <Image src="/product-pink.png" alt="The Punchy Pink" width={400} height={400} className="w-1/2 h-1/2 object-contain group-hover:scale-105 transition-transform" />
                </div>

                {/* Hidden name + Button stack */}
                <div className="relative">
                  {/* Name text - sits behind the button, revealed on hover */}
                  <div className="text-center py-4 bg-uddy-pink">
                    <h3 className="font-black text-xl md:text-2xl uppercase text-white">The Punchy Pink</h3>
                  </div>
                  {/* Button - covers the name, slides up on hover */}
                  <button
                    onClick={handleAddPink}
                    className="absolute inset-0 w-full bg-uddy-black text-uddy-pink font-black uppercase py-5 text-lg md:text-xl tracking-widest border-4 border-uddy-black border-t-0 group-hover:-translate-y-full transition-all duration-300 hover:bg-uddy-pink hover:text-uddy-black z-10"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>

              {/* Product name always visible */}
              <div className="text-center mt-4">
                <p className="font-bold text-sm md:text-base text-uddy-black">Cow Tallow Face Balm (Lavender)</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* STORY SECTION */}
      <section className="flex flex-col md:flex-row min-h-[500px] bg-uddy-black text-white">
        <div className="w-full md:w-1/2 relative border-b-4 md:border-b-0 md:border-r-4 border-white/20 min-h-[300px]">
          <Image
            src="/promo-6.jpg"
            alt="Founders"
            fill
            className="object-cover grayscale opacity-80"
          />
        </div>
        <div className="w-full md:w-1/2 p-12 md:p-20 flex flex-col justify-center">
          <h2 className="text-4xl md:text-5xl font-black uppercase mb-6 leading-tight">
            &quot;Uddy comes from our son, who couldn&apos;t say Daddy.&quot;
          </h2>
          <p className="text-lg font-bold mb-8 leading-relaxed opacity-80">
            We&apos;re Jack & Hollie. Jack had the bad skin (eczema, acne, the works). Hollie had the idea.
          </p>
          <Link
            href="/about"
            className="inline-block border-b-4 border-uddy-green text-xl font-black uppercase self-start hover:text-uddy-green transition-colors pb-1"
          >
            Read the full story →
          </Link>
        </div>
      </section>
    </>
  );
}
