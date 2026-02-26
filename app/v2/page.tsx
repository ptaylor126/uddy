"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useCart } from "@/components/CartProvider";
import { PRODUCT, formatPrice } from "@/lib/utils";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

/* ─── Parallax sticker helper ─── */
function FloatingSticker({ src, alt, yRange }: { src: string; alt: string; yRange: [number, number] }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], yRange);

  return (
    <motion.div ref={ref} style={{ y }} className="hidden md:block absolute w-28 lg:w-36">
      <Image src={src} alt={alt} width={160} height={160} className="w-full h-auto drop-shadow-lg" />
    </motion.div>
  );
}

export default function V2Home() {
  const { addItem } = useCart();

  const handleAddToCart = (color: "green" | "pink", imageSrc: string) => {
    addItem({
      id: `${PRODUCT.id}-${color}`,
      name: `${PRODUCT.name} - ${color === "green" ? "The Classic Green" : "The Punchy Pink"}`,
      price: PRODUCT.price,
      image: imageSrc,
    });
  };

  return (
    <>
      {/* ==========================================
          1. HERO — Full-bleed editorial
      ============================================ */}
      <section className="bg-uddy-cream border-b-8 border-uddy-black">
        <div className="flex flex-col md:flex-row min-h-[85vh]">
          {/* Left — B&W lifestyle photo (fills remaining space) */}
          <div className="w-full md:flex-1 relative min-h-[400px] md:min-h-0 border-b-8 md:border-b-0 md:border-r-8 border-uddy-black">
            <Image
              src="/promo-6.jpg"
              alt="Uddy Founders"
              fill
              className="object-cover grayscale"
              priority
            />
          </div>

          {/* Right — Copy (capped width) */}
          <div className="w-full md:w-[580px] md:shrink-0 p-10 md:p-20 flex flex-col justify-center">
            <h1
              className="text-7xl md:text-9xl font-black uppercase leading-[0.85] mb-8 text-uddy-pink"
              style={{ textShadow: "6px 6px 0px #1A1A1A" }}
            >
              FEED<br />YOUR<br />FACE.
            </h1>

            <p className="text-lg md:text-xl font-bold text-uddy-black/80 mb-10 max-w-md leading-relaxed">
              Tallow-based skincare for dry, sensitive and easily irritated skin.
            </p>

            <Link
              href="/product/cow-tallow-face-balm"
              className="self-start bg-uddy-green text-uddy-black text-xl md:text-2xl font-black uppercase px-10 py-6 border-4 border-uddy-black shadow-[8px_8px_0px_0px_#000] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
            >
              Try Uddy
            </Link>
          </div>
        </div>
      </section>

      {/* ==========================================
          2. NO NASTIES — Full-width numbered list with parallax stickers
      ============================================ */}
      <section className="py-24 md:py-32 bg-[#FAF9F6] border-b-8 border-uddy-black overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">

          <motion.div
            className="mb-16 md:mb-20"
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeUp}
          >
            <span className="font-bold text-uddy-green uppercase tracking-widest mb-3 block text-sm">Transparency</span>
            <h2 className="text-5xl md:text-7xl font-black uppercase leading-[0.9] text-uddy-black">
              No Nasties.<br />Just Nature.
            </h2>
          </motion.div>

          <motion.div
            className="flex flex-col"
            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
          >
            {[
              { num: "01", title: "Grass Fed Tallow", desc: "Sourced from grass-fed UK cows. The foundation of every Uddy product.", sticker: "/sticker-tallow.png", stickerPos: "right-0 md:right-8 top-1/2 -translate-y-1/2" },
              { num: "02", title: "Jojoba Oil", desc: "A molecular match to human sebum. Won\u2019t clog pores, won\u2019t trigger nut allergies.", sticker: "/sticker-jojoba.png", stickerPos: "left-0 md:left-8 top-1/2 -translate-y-1/2" },
              { num: "03", title: "Oat Extract Oil", desc: "Clinically proven to reduce inflammation by up to 30%. Soothes and repairs.", sticker: "/sticker-oat.png", stickerPos: "right-0 md:right-8 top-1/2 -translate-y-1/2" },
              { num: "04", title: "Essential Oils", desc: "A drop of lavender. Just enough to calm the skin and the senses.", sticker: "/illustrations/sticker-essentialoils.png", stickerPos: "left-0 md:left-8 top-1/2 -translate-y-1/2" },
            ].map((item, i) => (
              <motion.div
                key={item.num}
                className="relative border-t-4 border-uddy-black py-10 md:py-14 group"
                variants={fadeUp}
              >
                {/* Parallax floating sticker */}
                <FloatingSticker
                  src={item.sticker}
                  alt={item.title}
                  yRange={i % 2 === 0 ? [-40, 40] : [40, -40]}
                />

                <div className={`relative z-10 flex flex-col md:flex-row items-baseline gap-4 md:gap-10 ${i % 2 === 0 ? "md:pr-48" : "md:pl-48"}`}>
                  <span className="text-7xl md:text-[10rem] font-black text-uddy-black/[0.06] leading-none select-none">
                    {item.num}
                  </span>
                  <div>
                    <h3 className="text-3xl md:text-5xl font-black uppercase text-uddy-black mb-2 group-hover:text-uddy-green transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-lg md:text-xl font-bold text-uddy-black/70 max-w-xl">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
            {/* Bottom border for last item */}
            <div className="border-t-4 border-uddy-black" />
          </motion.div>
        </div>
      </section>

      {/* ==========================================
          3. WHY TALLOW — Zig-zag with overlapping text boxes
      ============================================ */}
      <section className="py-24 md:py-32 bg-uddy-green border-b-8 border-uddy-black">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">

          <motion.div
            className="text-center mb-20 md:mb-28"
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeUp}
          >
            <span className="font-script text-3xl text-white block mb-4 transform -rotate-2">
              The juicy details...
            </span>
            <h2 className="text-5xl md:text-8xl font-black uppercase text-uddy-black leading-[0.9]">
              Why Tallow?
            </h2>
          </motion.div>

          <div className="flex flex-col gap-20 md:gap-32">

            {/* Point 1 — Photo Left, Text overlapping Right */}
            <motion.div
              className="relative flex flex-col md:flex-row items-center"
              initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
            >
              <div className="w-full md:w-[60%] relative h-[350px] md:h-[500px] border-4 border-uddy-black">
                <Image src="/promo-1.jpg" alt="Skin-identical" fill className="object-cover grayscale" />
              </div>
              <div className="w-full md:w-[50%] md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2 bg-white border-4 border-uddy-black p-8 md:p-12 shadow-[8px_8px_0px_0px_#1A1A1A] -mt-8 md:mt-0 relative z-10">
                <span className="text-sm font-bold uppercase tracking-widest text-uddy-green mb-3 block">01</span>
                <h3 className="text-3xl md:text-5xl font-black uppercase mb-4 leading-[0.9]">Skin-Identical.</h3>
                <p className="text-lg font-bold text-uddy-black/80 leading-relaxed">
                  Tallow&apos;s fatty acid profile mirrors your skin&apos;s own sebum. Your skin recognises it instantly — no barriers, no rejection, just deep nourishment.
                </p>
              </div>
            </motion.div>

            {/* Point 2 — Photo Right, Text overlapping Left */}
            <motion.div
              className="relative flex flex-col md:flex-row-reverse items-center"
              initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
            >
              <div className="w-full md:w-[60%] relative h-[350px] md:h-[500px] border-4 border-uddy-black">
                <Image src="/promo-3.jpg" alt="Vitamin-rich" fill className="object-cover grayscale" />
              </div>
              <div className="w-full md:w-[50%] md:absolute md:left-0 md:top-1/2 md:-translate-y-1/2 bg-white border-4 border-uddy-black p-8 md:p-12 shadow-[-8px_8px_0px_0px_#1A1A1A] -mt-8 md:mt-0 relative z-10">
                <span className="text-sm font-bold uppercase tracking-widest text-uddy-pink mb-3 block">02</span>
                <h3 className="text-3xl md:text-5xl font-black uppercase mb-4 leading-[0.9]">Vitamin-Rich.</h3>
                <p className="text-lg font-bold text-uddy-black/80 leading-relaxed">
                  Packed with Vitamins A, D, E &amp; K. These are the essential building blocks for skin repair, collagen production and barrier defence.
                </p>
              </div>
            </motion.div>

            {/* Point 3 — Photo Left, Text overlapping Right */}
            <motion.div
              className="relative flex flex-col md:flex-row items-center"
              initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
            >
              <div className="w-full md:w-[60%] relative h-[350px] md:h-[500px] border-4 border-uddy-black">
                <Image src="/promo-5.jpg" alt="Deep absorption" fill className="object-cover grayscale" />
              </div>
              <div className="w-full md:w-[50%] md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2 bg-white border-4 border-uddy-black p-8 md:p-12 shadow-[8px_8px_0px_0px_#1A1A1A] -mt-8 md:mt-0 relative z-10">
                <span className="text-sm font-bold uppercase tracking-widest text-uddy-green mb-3 block">03</span>
                <h3 className="text-3xl md:text-5xl font-black uppercase mb-4 leading-[0.9]">Deep Absorption.</h3>
                <p className="text-lg font-bold text-uddy-black/80 leading-relaxed">
                  Sinks in, doesn&apos;t sit on top. Tallow penetrates deep to feed your skin where it actually counts — beneath the surface.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ==========================================
          4. SOUND FAMILIAR — Scattered sticky notes
      ============================================ */}
      <section className="py-24 md:py-32 bg-uddy-pink border-b-8 border-uddy-black overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">

          <motion.div
            className="text-center mb-16"
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-5xl md:text-8xl font-black uppercase text-white leading-[0.9]" style={{ textShadow: "4px 4px 0px #1A1A1A" }}>
              Sound<br />Familiar?
            </h2>
            <p className="text-lg md:text-xl font-bold text-uddy-black/80 mt-6">
              Uddy was made for skin that&apos;s had enough.
            </p>
          </motion.div>

          {/* Scattered sticker pile */}
          <motion.div
            className="relative max-w-4xl mx-auto min-h-[400px] md:min-h-[500px]"
            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
          >
            {[
              { text: "Eczema that flares up at the worst times", rotate: "-3deg", top: "0%", left: "5%", bg: "bg-white" },
              { text: "Skin that\u2019s always dry, no matter what", rotate: "2deg", top: "2%", left: "50%", bg: "bg-uddy-cream" },
              { text: "Tightness after every wash", rotate: "-1.5deg", top: "35%", left: "15%", bg: "bg-uddy-yellow" },
              { text: "Psoriasis patches you can\u2019t shift", rotate: "3deg", top: "33%", left: "55%", bg: "bg-white" },
              { text: "Cracked, rough skin on hands & elbows", rotate: "-2.5deg", top: "65%", left: "8%", bg: "bg-uddy-cream" },
              { text: "Reactions to products meant to help", rotate: "1.5deg", top: "68%", left: "48%", bg: "bg-white" },
            ].map((note, i) => (
              <motion.div
                key={i}
                className={`absolute w-[42%] md:w-[40%] ${note.bg} border-4 border-uddy-black px-6 py-5 md:px-8 md:py-6 shadow-[6px_6px_0px_0px_#1A1A1A] hover:scale-105 transition-transform cursor-default`}
                style={{ top: note.top, left: note.left, rotate: note.rotate }}
                variants={fadeUp}
              >
                <p className="text-sm md:text-lg font-black text-uddy-black leading-snug">
                  {note.text}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="text-center mt-8"
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeUp}
          >
            <p className="inline-block text-lg font-bold bg-uddy-black text-white px-6 py-3 transform -rotate-1">
              If your skin&apos;s been through it, Uddy&apos;s a good place to start.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ==========================================
          5. THE SHOWSTOPPER — VS Layout (full-vh)
      ============================================ */}
      <section className="min-h-screen border-b-8 border-uddy-black relative overflow-hidden">
        {/* Massive background stat */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span className="text-[20rem] md:text-[40rem] font-black text-uddy-black/[0.04] leading-none">
            30%
          </span>
        </div>

        <div className="relative z-10 flex flex-col md:flex-row min-h-screen">

          {/* Left — The Other Guys (Muted) */}
          <div className="w-full md:w-1/2 bg-gray-100 border-b-8 md:border-b-0 md:border-r-8 border-uddy-black p-10 md:p-16 flex flex-col justify-center">
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}
              variants={stagger}
            >
              <motion.span variants={fadeUp} className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4 block">
                What you&apos;re used to
              </motion.span>
              <motion.h3 variants={fadeUp} className="text-5xl md:text-7xl font-black uppercase text-gray-300 leading-[0.9] mb-10">
                The Other<br />Guys
              </motion.h3>

              <div className="flex flex-col gap-4">
                {[
                  "Parabens & preservatives",
                  "Mineral oils & petroleum",
                  "Synthetic fragrances",
                  "Almond & tree nut oils",
                  "30+ ingredient lists",
                  "Greenwashed marketing",
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center gap-3"
                    variants={fadeUp}
                  >
                    <span className="w-6 h-6 rounded-full border-2 border-gray-300 flex items-center justify-center text-gray-400 text-xs font-bold shrink-0">
                      &times;
                    </span>
                    <span className="text-base md:text-lg font-bold text-gray-400">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right — The Uddy Way (Vibrant) */}
          <div className="w-full md:w-1/2 bg-uddy-green p-10 md:p-16 flex flex-col justify-center">
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}
              variants={stagger}
            >
              <motion.span variants={fadeUp} className="text-sm font-bold uppercase tracking-widest text-uddy-black/50 mb-4 block">
                What we do differently
              </motion.span>
              <motion.h3 variants={fadeUp} className="text-5xl md:text-7xl font-black uppercase text-white leading-[0.9] mb-10" style={{ textShadow: "4px 4px 0px #1A1A1A" }}>
                The Uddy<br />Way
              </motion.h3>

              <div className="flex flex-col gap-4">
                {[
                  "Grass-fed tallow — bio-identical to skin",
                  "Jojoba seed wax — nut-free carrier",
                  "Oat extract oil — \u221930% inflammation",
                  "Lavender essential oil — nothing synthetic",
                  "4 ingredients. That\u2019s it.",
                  "Science-backed, kitchen-made",
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center gap-3"
                    variants={fadeUp}
                  >
                    <span className="w-6 h-6 rounded-full bg-uddy-black flex items-center justify-center text-white text-xs font-bold shrink-0">
                      &#10003;
                    </span>
                    <span className="text-base md:text-lg font-black text-uddy-black">{item}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div variants={fadeUp} className="mt-10">
                <div className="bg-white border-4 border-uddy-black p-6 shadow-[6px_6px_0px_0px_#000] inline-block">
                  <p className="text-sm font-bold uppercase tracking-widest text-uddy-black/50 mb-1">Oat Extract Oil</p>
                  <span className="text-5xl md:text-6xl font-black text-uddy-green leading-none">&darr;30%</span>
                  <p className="text-sm font-bold text-uddy-black/70 mt-1">skin inflammation reduction</p>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* VS badge */}
          <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-24 h-24 bg-uddy-pink border-4 border-uddy-black rounded-full items-center justify-center shadow-[4px_4px_0px_0px_#000]">
            <span className="text-3xl font-black text-white" style={{ textShadow: "2px 2px 0px #1A1A1A" }}>VS</span>
          </div>
        </div>
      </section>

      {/* ==========================================
          6. PICK YOUR POT — Large featured product
      ============================================ */}
      <section className="py-24 md:py-32 bg-[#FAF9F6] border-b-8 border-uddy-black relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#000 2px, transparent 2px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">

          <motion.div
            className="text-center mb-16"
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-5xl md:text-8xl font-black uppercase text-uddy-black leading-[0.9] mb-4">
              Pick Your Pot
            </h2>
            <div className="inline-block bg-uddy-black text-white px-8 py-3 transform -rotate-2">
              <span className="font-black uppercase tracking-widest text-sm">Same Formula &bull; Different Vibe</span>
            </div>
          </motion.div>

          {/* Large featured products */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">

            {/* Green pot */}
            <motion.div
              className="relative group"
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={fadeUp}
            >
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-uddy-yellow border-4 border-uddy-black rounded-full flex items-center justify-center text-center z-10 rotate-12 shadow-[4px_4px_0px_0px_#000]">
                <span className="text-[10px] font-black leading-tight uppercase text-uddy-black">Founder&apos;s<br />Choice</span>
              </div>
              <div className="bg-white border-4 border-uddy-black overflow-hidden shadow-[8px_8px_0px_0px_#1BC496] group-hover:translate-x-[-2px] group-hover:translate-y-[-2px] group-hover:shadow-[12px_12px_0px_0px_#1BC496] transition-all">
                <div className="relative h-[400px] md:h-[500px]">
                  <Image src="/product-green.png" alt="The Classic Green" fill className="object-cover" />
                  <div className="absolute top-4 left-4 bg-uddy-green px-4 py-2 border-4 border-uddy-black font-black uppercase text-sm">Fresh</div>
                </div>
                <div className="p-6 border-t-4 border-uddy-black">
                  <h3 className="text-2xl font-black uppercase">The Classic Green</h3>
                  <p className="text-uddy-green font-semibold mb-2">Lavender Scented</p>
                  <p className="text-3xl font-black mb-4">{formatPrice(PRODUCT.price)}</p>
                  <button
                    onClick={() => handleAddToCart("green", "/product-green.png")}
                    className="w-full py-4 bg-uddy-green border-4 border-uddy-black font-black uppercase tracking-wide hover:bg-uddy-black hover:text-white transition-all"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Pink pot */}
            <motion.div
              className="relative group"
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={fadeUp}
            >
              <div className="bg-white border-4 border-uddy-black overflow-hidden shadow-[8px_8px_0px_0px_#FF91B6] group-hover:translate-x-[-2px] group-hover:translate-y-[-2px] group-hover:shadow-[12px_12px_0px_0px_#FF91B6] transition-all">
                <div className="relative h-[400px] md:h-[500px]">
                  <Image src="/product-pink.png" alt="The Punchy Pink" fill className="object-cover" />
                  <div className="absolute top-4 left-4 bg-uddy-pink px-4 py-2 border-4 border-uddy-black font-black uppercase text-sm">Calm</div>
                </div>
                <div className="p-6 border-t-4 border-uddy-black">
                  <h3 className="text-2xl font-black uppercase">The Punchy Pink</h3>
                  <p className="text-uddy-pink font-semibold mb-2">Lavender Scented</p>
                  <p className="text-3xl font-black mb-4">{formatPrice(PRODUCT.price)}</p>
                  <button
                    onClick={() => handleAddToCart("pink", "/product-pink.png")}
                    className="w-full py-4 bg-uddy-pink border-4 border-uddy-black font-black uppercase tracking-wide hover:bg-uddy-black hover:text-white transition-all"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ==========================================
          7. OUR STORY (Black bg)
      ============================================ */}
      <section className="bg-uddy-black text-white">
        <div className="flex flex-col md:flex-row min-h-[500px]">

          {/* Left — B&W photo (fills remaining space) */}
          <div className="w-full md:flex-1 relative border-b-8 md:border-b-0 md:border-r-8 border-white/20 min-h-[300px]">
            <Image
              src="/promo-6.jpg"
              alt="Founders"
              fill
              className="object-cover grayscale opacity-80"
            />
          </div>

          {/* Right — Quote (capped width) */}
          <div className="w-full md:w-[580px] md:shrink-0 p-12 md:p-20 flex flex-col justify-center">
            <p className="font-script text-3xl md:text-5xl text-uddy-pink leading-snug mb-8 transform -rotate-1">
              &ldquo;Uddy comes from our son, who couldn&apos;t say Daddy.&rdquo;
            </p>
            <p className="text-lg font-bold mb-8 leading-relaxed opacity-80">
              We&apos;re Jack &amp; Hollie. Jack had the bad skin (eczema, acne, the works). Hollie had the idea.
            </p>
            <Link
              href="/about"
              className="inline-block border-b-4 border-uddy-green text-xl font-black uppercase self-start hover:text-uddy-green transition-colors pb-1"
            >
              Read the full story &rarr;
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
