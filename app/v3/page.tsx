"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useCart } from "@/components/CartProvider";
import { PRODUCT, formatPrice } from "@/lib/utils";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function V3Home() {
  useEffect(() => {
    const marquee = document.getElementById("header-marquee");
    if (marquee) marquee.style.display = "none";
    return () => {
      if (marquee) marquee.style.display = "";
    };
  }, []);

  return (
    <>
      {/* ==========================================
          1. HERO — Editorial Cover Style
      ============================================ */}
      <section className="relative min-h-[70vh] flex flex-col overflow-hidden">
        {/* B&W Background Photo — anchored to bottom so the pot is fully visible */}
        <Image
          src="/promo-1.jpg"
          alt="Uddy lifestyle"
          fill
          className="object-cover object-bottom grayscale"
          priority
        />

        {/* Same photo in colour, clipped to the pot area */}
        <div
          className="absolute inset-0 z-[1]"
          style={{ clipPath: "ellipse(16% 25% at 55% 44%)" }}
        >
          <Image
            src="/promo-1.jpg"
            alt=""
            fill
            className="object-cover object-bottom"
            aria-hidden="true"
          />
        </div>

        {/* Dark gradient overlay */}
        <div className="absolute inset-0 z-[2] bg-gradient-to-t from-black/80 via-black/30 to-black/10" />

        {/* Content overlay */}
        <div className="relative z-[3] flex-1 flex flex-col max-w-[1440px] mx-auto w-full px-6 md:px-12 py-12">

          {/* Bottom — Headline, subline, CTA */}
          <div className="mt-auto pb-8 md:pb-16 text-center md:text-left">
            <h1 className="text-6xl sm:text-7xl md:text-9xl font-black uppercase leading-[0.85] text-white mb-4 md:mb-6">
              FEED<br />YOUR<br />FACE.
            </h1>
            <p className="text-base md:text-xl font-bold text-white/70 mb-8 max-w-lg mx-auto md:mx-0">
              Tallow-based skincare for dry, sensitive and easily irritated skin.
            </p>
            <Link
              href="/product/cow-tallow-face-balm"
              className="inline-block bg-uddy-pink text-uddy-black text-lg md:text-xl font-black uppercase px-10 py-5 border-4 border-uddy-black shadow-[4px_4px_0px_0px_#000] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all w-full md:w-auto text-center"
            >
              Try Uddy
            </Link>
          </div>
        </div>
      </section>

      {/* ==========================================
          2. MARQUEE BANNER
      ============================================ */}
      <div className="bg-uddy-black border-y-4 border-uddy-black py-4 overflow-hidden">
        <div className="whitespace-nowrap flex gap-12 text-xl md:text-2xl font-black uppercase tracking-widest text-uddy-cream animate-marquee">
          <span>Grass Fed Tallow</span> <span className="text-uddy-green">★</span>
          <span>Jojoba Oil</span> <span className="text-uddy-pink">★</span>
          <span>Oat Extract Oil</span> <span className="text-uddy-green">★</span>
          <span>Essential Oils</span> <span className="text-uddy-pink">★</span>
          <span>Made in the UK</span> <span className="text-uddy-green">★</span>
          <span>Grass Fed Tallow</span> <span className="text-uddy-pink">★</span>
          <span>Jojoba Oil</span> <span className="text-uddy-green">★</span>
          <span>Oat Extract Oil</span> <span className="text-uddy-pink">★</span>
          <span>Essential Oils</span> <span className="text-uddy-green">★</span>
          <span>Made in the UK</span> <span className="text-uddy-pink">★</span>
        </div>
      </div>

      {/* ==========================================
          3. TRANSITION BRIDGE — Fade-to-Clear
      ============================================ */}
      <TransitionBridge />

      {/* ==========================================
          4. STICKY ANATOMY — Product jar + scrolling science
      ============================================ */}
      <StickyAnatomy />

      {/* ==========================================
          5. NO NASTIES — Horizontal scroll panels
      ============================================ */}
      <HorizontalIngredients />

      {/* ==========================================
          6. PICK YOUR POT — Expanding split
      ============================================ */}
      <PickYourPot />

      {/* ==========================================
          7. OUR STORY
      ============================================ */}
      <section className="bg-uddy-black text-white">
        <div className="flex flex-col md:flex-row min-h-[500px]">
          <div className="w-full md:flex-1 relative border-b-8 md:border-b-0 md:border-r-8 border-white/20 min-h-[350px]">
            <Image
              src="/promo-6.jpg"
              alt="Founders"
              fill
              className="object-cover grayscale opacity-80"
            />
          </div>
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

/* ════════════════════════════════════════════════
   SECTION COMPONENTS
   ════════════════════════════════════════════════ */

/* ─── Transition Bridge ─── */
function TransitionBridge() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  const issueOpacity = useTransform(scrollYProgress, [0, 0.35, 0.5], [1, 1, 0]);
  const issueY = useTransform(scrollYProgress, [0, 0.5], [0, -60]);
  const headlineOpacity = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);
  const headlineScale = useTransform(scrollYProgress, [0.4, 0.7], [0.9, 1]);

  const issues = [
    "Eczema", "Dryness", "Tightness",
    "Psoriasis", "Cracked Skin", "Reactions",
  ];

  return (
    <section ref={ref} className="relative min-h-[120vh] bg-uddy-black border-t-8 border-black overflow-hidden flex items-center justify-center">
      {/* Floating skin issues that fade out */}
      <motion.div
        className="absolute inset-0 flex flex-wrap items-center justify-center gap-6 md:gap-10 px-8"
        style={{ opacity: issueOpacity, y: issueY }}
      >
        {issues.map((issue, i) => (
          <span
            key={issue}
            className="text-2xl md:text-4xl lg:text-5xl font-black uppercase text-white/20"
            style={{ transform: `rotate(${(i % 2 === 0 ? -1 : 1) * (1 + i * 0.5)}deg)` }}
          >
            {issue}
          </span>
        ))}
      </motion.div>

      {/* Headline that fades in */}
      <motion.div
        className="relative z-10 text-center px-6 max-w-5xl"
        style={{ opacity: headlineOpacity, scale: headlineScale }}
      >
        <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black uppercase text-white leading-[0.9] tracking-tight">
          One Pot.<br />
          <span className="text-uddy-green">Three Ingredients.</span><br />
          Zero Nonsense.
        </h2>
      </motion.div>
    </section>
  );
}

/* ─── Sticky Anatomy Section ─── */
function StickyAnatomy() {
  const blocks = [
    {
      num: "01",
      title: "Bio-Identical Tallow",
      text: "Tallow\u2019s fatty acid profile mirrors your skin\u2019s own sebum. Your skin recognises it instantly \u2014 no barriers, no rejection.",
      accent: "#1BC496",
    },
    {
      num: "02",
      title: "Jojoba Sebum-Mimicry",
      text: "Jojoba Seed Wax is a molecular match to human sebum. It won\u2019t clog pores, won\u2019t trigger nut allergies, and absorbs instantly.",
      accent: "#F472B6",
    },
    {
      num: "03",
      title: "Oat Oil Science",
      text: "Clinically proven to reduce inflammation by up to 30%. Contains Avenanthramides and Beta-Glucans that repair your skin barrier.",
      accent: "#1BC496",
      stat: "\u221930%",
    },
    {
      num: "04",
      title: "Nut-Free Safety",
      text: "Zero almond oil, zero shea butter, zero tree nut derivatives. Three ingredients, all safe. No compromises.",
      accent: "#F472B6",
      badges: ["Almonds", "Shea", "Tree Nuts"],
    },
  ];

  return (
    <section className="bg-[#FAF9F6] border-t-8 border-black">
      <div className="max-w-[1440px] mx-auto">

        {/* Section header */}
        <div className="px-6 md:px-12 pt-20 md:pt-28 pb-12">
          <span className="font-bold text-uddy-green uppercase tracking-widest mb-3 block text-sm">The Science</span>
          <h2 className="text-5xl md:text-8xl font-black uppercase text-uddy-black leading-[0.9]">
            What&apos;s Inside
          </h2>
        </div>

        {/* Sticky container — 200vh */}
        <div className="relative flex flex-col md:flex-row" style={{ minHeight: "200vh" }}>

          {/* Left — Sticky product jar */}
          <div className="hidden md:block md:w-1/2 relative">
            <div className="sticky top-0 h-screen flex items-center justify-center p-12">
              <div className="relative w-full max-w-[400px]">
                <Image
                  src="/product-green.png"
                  alt="Uddy Face Balm"
                  width={500}
                  height={500}
                  className="w-full h-auto drop-shadow-2xl"
                />
              </div>
            </div>
          </div>

          {/* Right — Scrolling text blocks */}
          <div className="w-full md:w-1/2 px-6 md:px-12 py-12 md:py-24 flex flex-col gap-8 md:gap-12">

            {/* Mobile jar image */}
            <div className="md:hidden relative w-48 h-48 mx-auto mb-4">
              <Image src="/product-green.png" alt="Uddy Face Balm" fill className="object-contain" />
            </div>

            {blocks.map((block, i) => (
              <motion.div
                key={block.num}
                className="bg-white border-4 border-uddy-black p-8 md:p-10 relative"
                style={{ boxShadow: `8px 8px 0px 0px ${block.accent}` }}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, ease: "easeOut" as const }}
              >
                {/* SVG leader line — drawn on scroll */}
                <motion.svg
                  className="hidden md:block absolute -left-16 top-1/2 -translate-y-1/2 w-16 h-4 overflow-visible"
                  viewBox="0 0 64 4"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" as const }}
                >
                  <motion.line
                    x1="0" y1="2" x2="56" y2="2"
                    stroke={block.accent}
                    strokeWidth="3"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  />
                  <circle cx="60" cy="2" r="3" fill={block.accent} />
                </motion.svg>

                <span className="text-5xl md:text-6xl font-black leading-none block mb-3" style={{ color: block.accent, opacity: 0.25 }}>
                  {block.num}
                </span>
                <h3 className="text-2xl md:text-3xl font-black uppercase text-uddy-black mb-4">{block.title}</h3>
                <p className="text-base md:text-lg font-bold text-uddy-black/70 leading-relaxed">{block.text}</p>

                {/* Stat callout for Oat */}
                {block.stat && (
                  <div className="mt-6 inline-flex items-center gap-4 bg-uddy-green/10 border-2 border-uddy-green px-6 py-3">
                    <span className="text-3xl md:text-4xl font-black text-uddy-green">{block.stat}</span>
                    <span className="text-xs font-bold uppercase tracking-wider text-uddy-black/60">skin inflammation</span>
                  </div>
                )}

                {/* Crossed-out allergens for Nut Free */}
                {block.badges && (
                  <div className="mt-6 flex flex-wrap gap-3">
                    {block.badges.map((badge) => (
                      <span
                        key={badge}
                        className="inline-flex items-center bg-uddy-black/5 border-2 border-uddy-black/20 px-5 py-2 text-sm font-bold text-uddy-black/40 line-through decoration-uddy-pink decoration-3"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Horizontal Ingredient Scroll ─── */
function HorizontalIngredients() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [trackWidth, setTrackWidth] = useState(0);

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });

  // Measure the horizontal track so we know how far to translate
  useEffect(() => {
    const measure = () => {
      if (trackRef.current) {
        const scrollable = trackRef.current.scrollWidth - window.innerWidth;
        setTrackWidth(scrollable > 0 ? scrollable : 0);
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const x = useTransform(scrollYProgress, [0, 1], [0, -trackWidth]);

  const ingredients = [
    {
      img: "/sticker-tallow.png",
      title: "Grass Fed Tallow",
      desc: "Sourced from grass-fed UK cows. The foundation of every Uddy product. Bio-identical to human skin\u2019s own fatty acids.",
      bg: "bg-uddy-green",
    },
    {
      img: "/sticker-jojoba.png",
      title: "Jojoba Oil",
      desc: "A molecular match to human sebum. Won\u2019t clog pores, won\u2019t go rancid. The perfect nut-free carrier.",
      bg: "bg-uddy-pink",
    },
    {
      img: "/sticker-oat.png",
      title: "Oat Extract Oil",
      desc: "Clinically proven to reduce inflammation by up to 30%. Contains Avenanthramides, Ceramides and Beta-Glucans.",
      bg: "bg-uddy-cream",
    },
    {
      img: "/illustrations/sticker-essentialoils.png",
      title: "Essential Oils",
      desc: "A drop of lavender. Just enough to calm the skin and the senses. Nothing synthetic, nothing hidden.",
      bg: "bg-white",
    },
  ];

  // Section height = 100vh (sticky frame) + the horizontal scroll distance
  // This ensures vertical scrolling ends exactly when the last card is fully visible
  const sectionHeight = `calc(100vh + ${trackWidth}px)`;

  return (
    <section
      ref={sectionRef}
      className="relative border-t-8 border-black bg-[#FAF9F6]"
      style={{ height: sectionHeight }}
    >
      {/* Sticky viewport wrapper — centred in viewport */}
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center">

        {/* Header */}
        <div className="max-w-[1440px] mx-auto w-full px-6 md:px-12 pb-4 shrink-0">
          <span className="font-bold text-uddy-green uppercase tracking-widest mb-2 block text-sm">Transparency</span>
          <h2 className="text-5xl md:text-7xl font-black uppercase text-uddy-black leading-[0.9] mb-2">
            No Nasties. Just Nature.
          </h2>
          <p className="text-lg font-bold text-uddy-black/60">Scroll to explore &rarr;</p>
        </div>

        {/* Horizontal track driven by vertical scroll */}
        <div className="overflow-hidden shrink-0">
          <motion.div
            ref={trackRef}
            className="flex gap-6 px-6 md:px-12"
            style={{ x }}
          >
            {ingredients.map((ing, i) => (
              <div
                key={ing.title}
                className={`flex-shrink-0 w-[85vw] md:w-[65vw] lg:w-[50vw] ${ing.bg} border-4 border-uddy-black p-8 md:p-12 flex flex-col md:flex-row items-center gap-8`}
                style={{ boxShadow: "8px 8px 0px 0px #1A1A1A" }}
              >
                <div className="w-40 h-40 md:w-56 md:h-56 flex-shrink-0">
                  <Image
                    src={ing.img}
                    alt={ing.title}
                    width={224}
                    height={224}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <span className="text-6xl md:text-8xl font-black text-uddy-black/[0.06] leading-none block mb-2">
                    0{i + 1}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-black uppercase text-uddy-black mb-4">{ing.title}</h3>
                  <p className="text-base md:text-lg font-bold text-uddy-black/70 leading-relaxed max-w-md">{ing.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─── Pick Your Pot — Expanding Split ─── */
function PickYourPot() {
  const [hovered, setHovered] = useState<"green" | "pink" | null>(null);
  const { addItem } = useCart();

  const handleAdd = (color: "green" | "pink", imageSrc: string) => {
    addItem({
      id: `${PRODUCT.id}-${color}`,
      name: `${PRODUCT.name} - ${color === "green" ? "The Classic Green" : "The Punchy Pink"}`,
      price: PRODUCT.price,
      image: imageSrc,
    });
  };

  const pots = [
    { color: "green" as const, title: "The Classic Green", badge: "Fresh", img: "/product-green.png", bg: "bg-uddy-green", accent: "#1BC496" },
    { color: "pink" as const, title: "The Punchy Pink", badge: "Calm", img: "/product-pink.png", bg: "bg-uddy-pink", accent: "#FF91B6" },
  ];

  return (
    <section className="border-t-8 border-black bg-uddy-black">
      <div className="text-center py-16 px-6">
        <h2 className="text-5xl md:text-8xl font-black uppercase text-white leading-[0.9] mb-4">
          Pick Your Pot
        </h2>
        <div className="inline-block bg-uddy-green border-4 border-uddy-black px-8 py-3 transform -rotate-2 shadow-[4px_4px_0px_0px_#000]">
          <span className="font-black uppercase tracking-widest text-sm text-uddy-black">Same Formula &bull; Different Vibe</span>
        </div>
      </div>

      <div className="flex flex-col md:flex-row w-full border-t-8 border-black">
        {pots.map((pot) => {
          const isHovered = hovered === pot.color;
          const isOtherHovered = hovered !== null && hovered !== pot.color;

          return (
            <div
              key={pot.color}
              className={`relative overflow-hidden transition-all duration-500 ease-out border-b-8 md:border-b-0 border-black ${
                pot.color === "green" ? "md:border-r-4" : "md:border-l-4"
              } ${pot.bg}`}
              style={{
                flex: isHovered ? "0 0 60%" : isOtherHovered ? "0 0 40%" : "0 0 50%",
              }}
              onMouseEnter={() => setHovered(pot.color)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="flex flex-col items-center justify-center py-16 md:py-24 px-8">
                {/* Product image */}
                <div className={`relative w-64 h-64 md:w-80 md:h-80 transition-transform duration-500 ${isHovered ? "scale-110" : ""}`}>
                  <Image src={pot.img} alt={pot.title} fill className="object-contain" />
                </div>

                {/* Badge */}
                <div className="mt-6 bg-uddy-black px-4 py-2 border-4 border-uddy-black">
                  <span className="font-black uppercase text-sm text-white">{pot.badge}</span>
                </div>

                {/* Info */}
                <h3 className="text-3xl md:text-4xl font-black uppercase text-uddy-black mt-6">{pot.title}</h3>
                <p className="text-sm font-bold text-uddy-black/60 mt-1">Lavender Scented</p>
                <p className="text-3xl font-black text-uddy-black mt-3">{formatPrice(PRODUCT.price)}</p>

                {/* Add to cart */}
                <button
                  onClick={() => handleAdd(pot.color, pot.img)}
                  className="mt-6 w-full max-w-xs py-4 bg-uddy-black text-white border-4 border-uddy-black font-black uppercase tracking-wide hover:bg-white hover:text-uddy-black transition-all"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
