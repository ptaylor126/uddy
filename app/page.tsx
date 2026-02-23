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
            Tallow-based skincare for dry, sensitive and easily irritated skin.
          </p>

          <Link
            href="/product/cow-tallow-face-balm"
            className="self-start bg-uddy-green text-uddy-black text-xl md:text-2xl font-black uppercase px-10 py-6 border-4 border-uddy-black shadow-hard-lg hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
          >
            Try Uddy
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
            <p className="font-kalam text-2xl md:text-[2.5rem] leading-snug text-uddy-pink transform -rotate-1">
              Jack gave up on his skin. Hollie<br />got cooking.
            </p>
          </div>
        </div>
      </section>

      {/* SOUND FAMILIAR? SECTION */}
      <section className="py-20 md:py-24 bg-[#FFFDF5] border-b-4 border-uddy-black">
        <div className="container mx-auto px-6 max-w-5xl">

          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-black uppercase leading-[0.9] text-uddy-black mb-6">
              Sound familiar?
            </h2>
            <p className="text-xl md:text-2xl font-bold text-uddy-black/80 max-w-2xl mx-auto">
              Uddy was made for skin that&apos;s had enough<br />of the runaround.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-16">
            {[
              { img: "/familiar-dry-skin.png", alt: "Dry skin", text: "Skin that's always dry, no matter what you try" },
              { img: "/familiar-eczema.png", alt: "Eczema", text: "Eczema that flares up at the worst times" },
              { img: "/familiar-tightness.png", alt: "Tightness", text: "Tightness after every wash" },
              { img: "/familiar-psoriasis.png", alt: "Psoriasis", text: "Psoriasis patches you can't shift" },
              { img: "/familiar-cracked-skin.png", alt: "Cracked skin", text: "Cracked, rough skin on hands and elbows" },
              { img: "/familiar-reactions.png", alt: "Reactions", text: "Reactions to products that are meant to help" },
            ].map((item, i) => (
              <div
                key={i}
                className={`bg-white border-4 border-uddy-black p-5 font-bold text-uddy-black ${
                  i % 2 === 0
                    ? "shadow-[4px_4px_0px_0px_#1BC496]"
                    : "shadow-[4px_4px_0px_0px_#FF91B6]"
                } hover:-translate-y-1 transition-transform`}
              >
                <div className="w-full aspect-square relative mb-4">
                  <Image
                    src={item.img}
                    alt={item.alt}
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-sm md:text-base">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="inline-block text-lg md:text-xl font-bold bg-uddy-black text-white px-6 py-3 transform -rotate-1">
              If your skin&apos;s been through it, Uddy&apos;s a good place to start.
            </p>
          </div>

        </div>
      </section>

      {/* PROCESS & SCIENCE SECTION */}
      <ProcessAndScience />

      {/* WHAT MAKES UDDY DIFFERENT? SECTION */}
      <section className="py-20 md:py-24 bg-uddy-pink border-b-4 border-uddy-black relative overflow-hidden">

        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(#1A1A1A 1.5px, transparent 1.5px)',
            backgroundSize: '20px 20px'
          }}
        ></div>

        <div className="container mx-auto px-6 max-w-5xl relative z-10">

          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-black uppercase leading-[0.9] text-uddy-black mb-4">
              What makes Uddy different?
            </h2>
          </div>

          <div className="flex flex-col gap-6 md:gap-8 mb-16">
            {[
              {
                them: "Most skincare: long ingredient lists full of things you can't pronounce.",
                us: "Uddy: three ingredients. That's it. Tallow, jojoba oil, oat oil.",
              },
              {
                them: "Most skincare: designed for 'normal' skin, then adapted for sensitive.",
                us: "Uddy: built for sensitive skin from the start.",
              },
              {
                them: "Most skincare: marketed with promises and buzzwords.",
                us: "Uddy: made by two people who just wanted something that actually worked.",
              },
              {
                them: "Most skincare: hides behind 'dermatologically tested' and 'clinically proven.'",
                us: <>Uddy: made in small batches by a husband and wife in the UK. <a href="mailto:hello@uddyskin.com" className="underline">Ask us anything.</a></>,
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white border-4 border-uddy-black shadow-[6px_6px_0px_0px_#1A1A1A] p-6 md:p-8"
              >
                <p className="text-base md:text-lg font-bold italic text-uddy-black/50 mb-3 leading-snug" style={{ textWrap: 'balance' }}>
                  {item.them}
                </p>
                <p className="text-lg md:text-xl font-black text-uddy-black leading-snug" style={{ textWrap: 'balance' }}>
                  {item.us}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="inline-block bg-white border-4 border-uddy-black px-6 md:px-8 py-4 shadow-[4px_4px_0px_0px_#1A1A1A] transform rotate-1">
              <p className="text-base md:text-lg font-bold text-uddy-black" style={{ textWrap: 'balance' }}>
                We&apos;re not trying to replace your whole routine. We just think your skin deserves fewer, better ingredients.
              </p>
            </div>
          </div>

        </div>
      </section>

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
