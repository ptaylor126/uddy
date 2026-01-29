"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/components/CartProvider";
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
          <div className="absolute top-6 right-6 md:top-12 md:right-12 w-32 h-32 bg-uddy-yellow border-4 border-uddy-black rounded-full flex items-center justify-center text-center font-black -rotate-[20deg] shadow-hard z-10 animate-bounce" style={{ animationDuration: '1.5s' }}>
            <span className="text-xs leading-tight text-uddy-black">SEBUM<br/>MIMICKING<br/>MAGIC</span>
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

      {/* NO NASTIES SECTION */}
      <section className="py-20 bg-uddy-cream border-b-4 border-uddy-black">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-uddy-green uppercase tracking-widest text-sm mb-2 block" style={{ fontWeight: 900, fontFamily: 'var(--font-montserrat), system-ui, sans-serif' }}>Transparency</span>
              <h2 className="text-5xl md:text-6xl uppercase leading-none tracking-tight" style={{ fontWeight: 900, fontFamily: 'var(--font-montserrat), system-ui, sans-serif' }}>
                No Nasties.<br/>Just Nature.
              </h2>
            </div>
            <p className="font-script text-xl md:text-2xl text-uddy-green -rotate-3">Simple formulations, thoughtful sourcing.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white border-4 border-uddy-black p-2 shadow-[6px_6px_0px_0px_#1BC496] hover:-translate-y-2 transition-transform aspect-square flex flex-col items-center justify-center">
              <Image src="/cow-face.png" alt="Cow" width={240} height={240} className="w-full h-auto object-contain" />
              <h3 className="text-base uppercase mt-1" style={{ fontWeight: 900, fontFamily: 'var(--font-montserrat), system-ui, sans-serif' }}>Grass Fed</h3>
              <p className="text-xs text-center leading-tight text-balance" style={{ fontWeight: 800, fontFamily: 'var(--font-montserrat), system-ui, sans-serif' }}>Sourced from happy&nbsp;cows in&nbsp;the&nbsp;UK.</p>
            </div>
            <div className="bg-white border-4 border-uddy-black p-2 shadow-[6px_6px_0px_0px_#FF91B6] hover:-translate-y-2 transition-transform aspect-square flex flex-col items-center justify-center">
              <Image src="/honey.png" alt="Honey" width={240} height={240} className="w-full h-auto object-contain" />
              <h3 className="text-base uppercase mt-1" style={{ fontWeight: 900, fontFamily: 'var(--font-montserrat), system-ui, sans-serif' }}>Raw Honey</h3>
              <p className="text-xs text-center leading-tight text-balance" style={{ fontWeight: 800, fontFamily: 'var(--font-montserrat), system-ui, sans-serif' }}>Antimicrobial repair straight from&nbsp;the&nbsp;hive.</p>
            </div>
            <div className="bg-white border-4 border-uddy-black p-2 shadow-[6px_6px_0px_0px_#1BC496] hover:-translate-y-2 transition-transform aspect-square flex flex-col items-center justify-center">
              <Image src="/bowl.png" alt="Bowl" width={240} height={240} className="w-full h-auto object-contain" />
              <h3 className="text-base uppercase mt-1" style={{ fontWeight: 900, fontFamily: 'var(--font-montserrat), system-ui, sans-serif' }}>Slow Render</h3>
              <p className="text-xs text-center leading-tight text-balance" style={{ fontWeight: 800, fontFamily: 'var(--font-montserrat), system-ui, sans-serif' }}>Purified gently to keep the&nbsp;vitamins&nbsp;in.</p>
            </div>
            <div className="bg-white border-4 border-uddy-black p-2 shadow-[6px_6px_0px_0px_#FF91B6] hover:-translate-y-2 transition-transform aspect-square flex flex-col items-center justify-center">
              <Image src="/box.png" alt="Box" width={240} height={240} className="w-full h-auto object-contain" />
              <h3 className="text-base uppercase mt-1" style={{ fontWeight: 900, fontFamily: 'var(--font-montserrat), system-ui, sans-serif' }}>Hand Poured</h3>
              <p className="text-xs text-center leading-tight text-balance" style={{ fontWeight: 800, fontFamily: 'var(--font-montserrat), system-ui, sans-serif' }}>Small batches made by Jack&nbsp;&amp;&nbsp;Hollie.</p>
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
            <h2 className="text-7xl md:text-9xl font-black text-white mb-8 drop-shadow-[4px_4px_0px_rgba(0,0,0,0.2)]">
              PICK YOUR POT
            </h2>

            {/* Rotated Box */}
            <div className="inline-block bg-white border-4 border-uddy-black px-8 py-3 transform -rotate-1 shadow-[4px_4px_0px_0px_#1A1A1A]">
              <span className="font-black uppercase tracking-widest text-sm md:text-base text-uddy-black">
                Same Formula • Different Vibe
              </span>
            </div>
          </div>

          {/* Card Grid */}
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 px-4 md:px-8">

            {/* Green Jar Card */}
            <div className="flex flex-col">
              <div className="group bg-white border-4 border-uddy-black aspect-square relative shadow-[12px_12px_0px_0px_#1A1A1A] flex flex-col hover:-translate-y-1 hover:rotate-1 hover:shadow-[16px_16px_0px_0px_#1A1A1A] transition-all duration-300">

                {/* Pink Price Sticker */}
                <div className="absolute -top-5 -right-5 w-16 h-16 md:w-20 md:h-20 bg-uddy-pink rounded-full border-2 border-uddy-black flex items-center justify-center z-20 transform rotate-12 group-hover:rotate-0 group-hover:scale-110 transition-all">
                  <span className="font-black text-lg md:text-xl text-uddy-black">{formatPriceShort(PRODUCT.price)}</span>
                </div>

                {/* Main Content */}
                <div className="flex-1 flex items-center justify-center p-8">
                  <div className="w-44 h-44 md:w-64 md:h-64 rounded-full bg-uddy-green border-2 border-uddy-black flex items-center justify-center text-center group-hover:scale-105 transition-transform">
                    <span className="font-black text-white text-xl md:text-2xl uppercase leading-tight">Green<br/>Jar</span>
                  </div>
                </div>

                {/* Button Bar */}
                <button
                  onClick={handleAddGreen}
                  className="bg-uddy-black text-uddy-green font-black uppercase py-5 text-lg md:text-xl tracking-widest hover:bg-uddy-green hover:text-uddy-black transition-colors border-t-4 border-uddy-black"
                >
                  Add to Cart
                </button>
              </div>
              <div className="text-center mt-6">
                <h3 className="font-black text-2xl md:text-3xl uppercase text-uddy-black mb-1">The Classic Green</h3>
                <p className="font-bold text-sm md:text-base text-uddy-green">Cow Tallow Face Balm (Lavender)</p>
              </div>
            </div>

            {/* Pink Jar Card */}
            <div className="flex flex-col">
              <div className="group bg-white border-4 border-uddy-black aspect-square relative shadow-[12px_12px_0px_0px_#1A1A1A] flex flex-col hover:-translate-y-1 hover:-rotate-1 hover:shadow-[16px_16px_0px_0px_#1A1A1A] transition-all duration-300">

                {/* Yellow Price Sticker */}
                <div className="absolute -top-5 -right-5 w-16 h-16 md:w-20 md:h-20 bg-uddy-yellow rounded-full border-2 border-uddy-black flex items-center justify-center z-20 transform -rotate-6 group-hover:rotate-0 group-hover:scale-110 transition-all">
                  <span className="font-black text-lg md:text-xl text-uddy-black">{formatPriceShort(PRODUCT.price)}</span>
                </div>

                {/* Main Content */}
                <div className="flex-1 flex items-center justify-center p-8">
                  <div className="w-44 h-44 md:w-64 md:h-64 rounded-full bg-uddy-pink border-2 border-uddy-black flex items-center justify-center text-center group-hover:scale-105 transition-transform">
                    <span className="font-black text-white text-xl md:text-2xl uppercase leading-tight">Pink<br/>Jar</span>
                  </div>
                </div>

                {/* Button Bar */}
                <button
                  onClick={handleAddPink}
                  className="bg-uddy-black text-uddy-green font-black uppercase py-5 text-lg md:text-xl tracking-widest hover:bg-uddy-pink hover:text-uddy-black transition-colors border-t-4 border-uddy-black"
                >
                  Add to Cart
                </button>
              </div>
              <div className="text-center mt-6">
                <h3 className="font-black text-2xl md:text-3xl uppercase text-uddy-black mb-1">The Punchy Pink</h3>
                <p className="font-bold text-sm md:text-base text-uddy-green">Cow Tallow Face Balm (Lavender)</p>
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
