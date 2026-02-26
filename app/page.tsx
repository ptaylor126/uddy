"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useCart } from "@/components/CartProvider";
import ProcessAndScience from "@/components/ProcessAndScience";
import { PRODUCT, formatPrice, formatPriceShort } from "@/lib/utils";

/* ─── Animated count-up number ─── */
function CountUp({ target, prefix = "", suffix = "", duration = 1.5, className }: {
  target: number; prefix?: string; suffix?: string; duration?: number; className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const step = (now: number) => {
      const elapsed = Math.min((now - start) / (duration * 1000), 1);
      // ease-out curve
      const eased = 1 - Math.pow(1 - elapsed, 3);
      setDisplay(Math.round(eased * target));
      if (elapsed < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target, duration]);

  return <span ref={ref} className={className}>{prefix}{display.toLocaleString()}{suffix}</span>;
}

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
      <section
        className="border-b-4 border-uddy-black bg-uddy-pink"
      >
        <div className="flex flex-col md:flex-row min-h-[85vh]">

          {/* Left Side - Pink (capped width, content stays readable) */}
          <div className="w-full md:w-[580px] md:shrink-0 p-10 md:p-20 flex flex-col justify-center relative border-b-4 md:border-b-0 md:border-r-4 border-uddy-black">

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

          {/* Right Side - Image (fills remaining space) */}
          <div className="w-full md:flex-1 bg-gray-100 relative group overflow-hidden min-h-[400px] md:min-h-0">
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
        </div>
      </section>

      {/* SOUND FAMILIAR? SECTION */}
      <section className="py-20 md:py-24 bg-[#FFFDF5] border-b-4 border-uddy-black">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="max-w-5xl mx-auto">

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
                "Skin that's always dry, no matter what you try",
                "Eczema that flares up at the worst times",
                "Tightness after every wash",
                "Psoriasis patches you can't shift",
                "Cracked, rough skin on hands and elbows",
                "Reactions to products that are meant to help",
              ].map((text, i) => (
                <div
                  key={i}
                  className={`bg-white border-4 border-uddy-black px-6 py-5 font-bold text-uddy-black text-base md:text-lg ${
                    i % 2 === 0
                      ? "shadow-[4px_4px_0px_0px_#1BC496]"
                      : "shadow-[4px_4px_0px_0px_#FF91B6]"
                  } hover:-translate-y-1 transition-transform`}
                >
                  {text}
                </div>
              ))}
            </div>

            <div className="text-center">
              <p className="inline-block text-lg md:text-xl font-bold bg-uddy-black text-white px-6 py-3 transform -rotate-1">
                If your skin&apos;s been through it, Uddy&apos;s a good place to start.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* PROCESS & SCIENCE SECTION */}
      <ProcessAndScience />

      {/* WHY UDDY? SECTION */}
      <section className="py-20 md:py-28 bg-uddy-pink border-b-4 border-uddy-black relative overflow-hidden">

        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(#1A1A1A 1.5px, transparent 1.5px)',
            backgroundSize: '20px 20px'
          }}
        ></div>

        <div className="max-w-[1440px] mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">

            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-7xl font-black uppercase leading-[0.9] text-uddy-black mb-4">
                Why Uddy?
              </h2>
            </div>

            <div className="flex flex-col gap-16 md:gap-20 mb-20">

              {/* POINT 1 — JOJOBA OIL */}
              <motion.div
                className="bg-white border-4 border-uddy-black shadow-[8px_8px_0px_0px_#1A1A1A] p-8 md:p-12"
                initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
                variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
              >
                <span className="text-6xl md:text-8xl font-black text-uddy-green/20 leading-none block mb-4">01</span>
                <h3 className="text-3xl md:text-4xl font-black uppercase mb-6 text-uddy-black">Jojoba Oil</h3>
                <p className="text-base md:text-lg font-bold italic text-uddy-black/50 mb-6 leading-snug">
                  &ldquo;Most tallow balms use almond oil or coconut oil as their carrier.&rdquo;
                </p>

                {/* Stat: 97% molecular match */}
                <motion.div
                  className="mb-6"
                  variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
                >
                  <div className="border-4 border-uddy-black p-5 md:p-6">
                    <div className="flex items-end gap-4 mb-3">
                      <span className="text-5xl md:text-6xl font-black text-uddy-green leading-none">97%</span>
                      <span className="text-sm font-bold uppercase tracking-wider text-uddy-black/60 pb-1">molecular match to human sebum</span>
                    </div>
                    <div className="w-full h-4 bg-uddy-black/10 border-2 border-uddy-black">
                      <motion.div
                        className="h-full bg-uddy-green"
                        initial={{ width: 0 }}
                        whileInView={{ width: "97%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                </motion.div>

                <p className="text-lg md:text-xl font-bold text-uddy-black leading-relaxed">
                  Your skin absorbs jojoba instantly. It&apos;s not a nut. It&apos;s not an oil. It&apos;s a seed wax — the closest thing in nature to what your skin already produces. Won&apos;t clog pores, won&apos;t trigger nut allergies, won&apos;t go rancid.
                </p>
              </motion.div>

              {/* POINT 2 — OAT OIL EXTRACT */}
              <motion.div
                className="bg-white border-4 border-uddy-black shadow-[8px_8px_0px_0px_#1A1A1A] p-8 md:p-12"
                initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
                variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
              >
                <span className="text-6xl md:text-8xl font-black text-uddy-pink/30 leading-none block mb-4">02</span>
                <h3 className="text-3xl md:text-4xl font-black uppercase mb-6 text-uddy-black">Oat Oil Extract</h3>
                <p className="text-base md:text-lg font-bold italic text-uddy-black/50 mb-6 leading-snug">
                  &ldquo;Most tallow balms add long ingredient lists to cover all bases.&rdquo;
                </p>

                {/* Stats row */}
                <motion.div
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6"
                  variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
                >
                  <div className="border-4 border-uddy-black border-l-8 border-l-uddy-green p-5">
                    <CountUp target={30} prefix="↓" suffix="%" className="text-5xl md:text-6xl font-black text-uddy-green leading-none block" />
                    <span className="text-sm font-bold uppercase tracking-wider text-uddy-black/60 mt-1 block">skin inflammation</span>
                  </div>
                  <div className="border-4 border-uddy-black border-l-8 border-l-uddy-pink p-5">
                    <CountUp target={4000} className="text-5xl md:text-6xl font-black text-uddy-pink leading-none block" />
                    <span className="text-sm font-bold uppercase tracking-wider text-uddy-black/60 mt-1 block">years of use on skin</span>
                  </div>
                </motion.div>

                {/* Active compounds pills */}
                <motion.div
                  className="flex flex-wrap gap-2 mb-6"
                  variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4 } } }}
                >
                  {["Avenanthramides", "Ceramides", "Beta-Glucans"].map((compound) => (
                    <span key={compound} className="bg-uddy-black text-white text-xs font-bold uppercase tracking-wider px-4 py-2">
                      {compound}
                    </span>
                  ))}
                </motion.div>

                <p className="text-lg md:text-xl font-bold text-uddy-black leading-relaxed">
                  One ingredient that does the work of many. Anti-inflammatory compounds found only in oats, plus ceramides that repair your skin barrier. The FDA classifies colloidal oatmeal as a skin protectant.
                </p>
              </motion.div>

              {/* POINT 3 — NUT FREE */}
              <motion.div
                className="bg-white border-4 border-uddy-black shadow-[8px_8px_0px_0px_#1A1A1A] p-8 md:p-12"
                initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
                variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
              >
                <span className="text-6xl md:text-8xl font-black text-uddy-green/20 leading-none block mb-4">03</span>
                <h3 className="text-3xl md:text-4xl font-black uppercase mb-6 text-uddy-black">Nut Free</h3>
                <p className="text-base md:text-lg font-bold italic text-uddy-black/50 mb-6 leading-snug">
                  &ldquo;Most natural skincare is full of almond oil, shea butter, and coconut derivatives.&rdquo;
                </p>

                {/* Stat + checklist */}
                <motion.div
                  className="flex flex-col sm:flex-row gap-4 mb-6"
                  variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
                >
                  {/* Big number with pulse animation */}
                  <div className="border-4 border-uddy-black border-l-8 border-l-uddy-green p-5 sm:w-auto flex-shrink-0 text-center sm:text-left">
                    <motion.span
                      className="text-6xl md:text-7xl font-black text-uddy-green leading-none block inline-block origin-center"
                      initial={{ scale: 1 }}
                      whileInView={{ scale: [1, 1.4, 1] }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 0.8, times: [0, 0.4, 1], ease: "easeInOut" as const }}
                    >
                      3
                    </motion.span>
                    <span className="text-sm font-bold uppercase tracking-wider text-uddy-black/60 mt-1 block">ingredients, all safe</span>
                  </div>

                  {/* Crossed-out items */}
                  <div className="border-4 border-uddy-black p-5 flex-1 flex flex-wrap items-center gap-3">
                    {["Almonds", "Shea", "Tree Nuts"].map((item) => (
                      <span key={item} className="inline-flex items-center gap-2 bg-uddy-black/5 border-2 border-uddy-black/20 px-4 py-2 text-sm font-bold text-uddy-black/40 line-through decoration-uddy-pink decoration-3">
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>

                <p className="text-lg md:text-xl font-bold text-uddy-black leading-relaxed">
                  There&apos;s no regulation requiring brands to label nut allergens in cosmetics the way they do in food. Every Uddy product is completely nut free. Three ingredients, all safe.
                </p>
              </motion.div>

            </div>

            <div className="text-center">
              <div className="inline-block bg-white border-4 border-uddy-black px-6 md:px-8 py-4 shadow-[4px_4px_0px_0px_#1A1A1A] transform rotate-1">
                <p className="text-base md:text-lg font-bold text-uddy-black" style={{ textWrap: 'balance' }}>
                  We&apos;re not trying to replace your whole routine. We just think your skin deserves fewer, better ingredients.
                </p>
              </div>
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

        <div className="max-w-[1440px] mx-auto px-6 relative z-10">

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
      <section className="bg-uddy-black text-white">
        <div className="flex flex-col md:flex-row min-h-[500px]">
        <div className="w-full md:flex-1 relative border-b-4 md:border-b-0 md:border-r-4 border-white/20 min-h-[300px]">
          <Image
            src="/promo-6.jpg"
            alt="Founders"
            fill
            className="object-cover grayscale opacity-80"
          />
        </div>
        <div className="w-full md:w-[580px] md:shrink-0 p-12 md:p-20 flex flex-col justify-center">
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
        </div>
      </section>
    </>
  );
}
