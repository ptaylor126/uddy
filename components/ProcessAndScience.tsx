'use client';

import { motion } from 'framer-motion';

// Animation Variants
const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const popIn = {
  hidden: { opacity: 0, scale: 0.8, rotate: -4 },
  visible: {
    opacity: 1, scale: 1, rotate: 0,
    transition: { type: "spring" as const, stiffness: 120 }
  }
};

export default function ProcessAndScience() {
  return (
    <section className="bg-[#FFFDF5] border-b-4 border-[#1A1A1A] overflow-hidden">

      {/* ==============================================
          PART 1: NO NASTIES (The Process)
      =============================================== */}
      <div className="py-20 border-b-4 border-[#1A1A1A] border-dashed bg-white/50">
        <div className="container mx-auto px-6">

            {/* Header */}
            <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
                <div>
                    <span className="font-bold text-[#1BC496] uppercase tracking-widest mb-2 block">Transparency</span>
                    <h2 className="text-5xl md:text-6xl font-black uppercase leading-none text-[#1A1A1A]">
                        No Nasties.<br/>Just Nature.
                    </h2>
                </div>
                <div className="bg-[#1A1A1A] text-white px-4 py-2 rotate-2">
                    <p className="font-bold uppercase tracking-widest text-xs">Simple formulations only</p>
                </div>
            </div>

            {/* 4-Column Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {/* 1. GRASS FED TALLOW */}
                <div className="bg-white border-4 border-[#1A1A1A] p-6 shadow-[8px_8px_0px_0px_#1BC496] hover:-translate-y-1 transition-transform">
                    <motion.img src="/sticker-tallow.png" alt="Grass Fed Tallow" className="w-32 h-32 object-contain mb-1 mx-auto" whileHover={{ scale: 1.15, rotate: 5 }} transition={{ type: "spring", stiffness: 300 }} />
                    <h3 className="text-xl font-black uppercase mb-2">Grass Fed Tallow</h3>
                    <p className="text-xs font-bold opacity-80 leading-tight">Sourced from grass-fed UK cows. The foundation of every Uddy product.</p>
                </div>
                 {/* 2. JOJOBA OIL */}
                 <div className="bg-white border-4 border-[#1A1A1A] p-6 shadow-[8px_8px_0px_0px_#FF91B6] hover:-translate-y-1 transition-transform">
                    <motion.img src="/sticker-jojoba.png" alt="Jojoba Oil" className="w-32 h-32 object-contain mb-1 mx-auto" whileHover={{ scale: 1.15, rotate: -5 }} transition={{ type: "spring", stiffness: 300 }} />
                    <h3 className="text-xl font-black uppercase mb-2">Jojoba Oil</h3>
                    <p className="text-xs font-bold opacity-80 leading-tight">Lightweight and gentle. Helps lock in moisture without clogging pores.</p>
                </div>
                 {/* 3. OAT OIL */}
                 <div className="bg-white border-4 border-[#1A1A1A] p-6 shadow-[8px_8px_0px_0px_#1BC496] hover:-translate-y-1 transition-transform">
                    <motion.img src="/sticker-oat.png" alt="Oat Oil" className="w-32 h-32 object-contain mb-1 mx-auto" whileHover={{ scale: 1.15, rotate: 5 }} transition={{ type: "spring", stiffness: 300 }} />
                    <h3 className="text-xl font-black uppercase mb-2">Oat Oil</h3>
                    <p className="text-xs font-bold opacity-80 leading-tight">Naturally soothing. Calms irritation and softens dry skin.</p>
                </div>
                 {/* 4. HAND POURED */}
                 <div className="bg-white border-4 border-[#1A1A1A] p-6 shadow-[8px_8px_0px_0px_#FF91B6] hover:-translate-y-1 transition-transform">
                    <motion.img src="/sticker-handpoured.png" alt="Hand Poured" className="w-32 h-32 object-contain mb-1 mx-auto" whileHover={{ scale: 1.15, rotate: -5 }} transition={{ type: "spring", stiffness: 300 }} />
                    <h3 className="text-xl font-black uppercase mb-2">Hand Poured</h3>
                    <p className="text-xs font-bold opacity-80 leading-tight">Small batches made by Jack & Hollie.</p>
                </div>
            </div>
        </div>
      </div>


      {/* ==============================================
          PART 2: THE SCIENCE (Animated)
      =============================================== */}
      <div className="py-24">
        <div className="container mx-auto px-6 text-center mb-20">
            <span className="font-script text-3xl text-[#FF91B6] relative block mb-4 transform -rotate-2">
                The juicy details...
            </span>
            <h2 className="text-6xl md:text-8xl font-black uppercase text-[#1A1A1A] leading-[0.9]">
            WHY <br/> TALLOW?
            </h2>
        </div>

        <div className="container mx-auto px-6 max-w-6xl flex flex-col gap-32">

            {/* BLOCK 1: CELL */}
            <motion.div
                className="flex flex-col md:flex-row items-center gap-12"
                initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}
            >
                <motion.div className="w-full md:w-1/2 relative" variants={popIn}>
                    <div className="absolute inset-0 bg-[#1BC496] border-4 border-[#1A1A1A] translate-x-3 translate-y-3 -z-10"></div>
                    <div className="border-4 border-[#1A1A1A] bg-white p-6 flex justify-center overflow-hidden">
                        <motion.img src="/science-cell.png" className="w-full max-w-[280px]" alt="Cell" whileHover={{ scale: 1.1, rotate: 3 }} transition={{ type: "spring", stiffness: 300 }} />
                    </div>
                </motion.div>
                <motion.div className="w-full md:w-1/2" variants={fadeIn}>
                    <h3 className="text-4xl font-black uppercase mb-4">1. Skin-identical.</h3>
                    <div className="bg-white border-l-8 border-[#1BC496] pl-6 py-4">
                        <p className="text-xl font-bold">Tallow&apos;s fats match your skin&apos;s natural oils.</p>
                        <p className="mt-2 font-medium opacity-80">Because it&apos;s bio-identical, your skin recognizes it instantly.</p>
                    </div>
                </motion.div>
            </motion.div>

            {/* BLOCK 2: VITAMINS */}
            <motion.div
                className="flex flex-col md:flex-row-reverse items-center gap-12"
                initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}
            >
                <motion.div className="w-full md:w-1/2 relative" variants={popIn}>
                    <div className="absolute inset-0 bg-[#FF91B6] border-4 border-[#1A1A1A] translate-x-3 translate-y-3 -z-10"></div>
                    <div className="border-4 border-[#1A1A1A] bg-white p-6 flex justify-center overflow-hidden">
                        <motion.img src="/science-vitamins.png" className="w-full max-w-[280px]" alt="Vitamins" whileHover={{ scale: 1.1, rotate: -3 }} transition={{ type: "spring", stiffness: 300 }} />
                    </div>
                </motion.div>
                <motion.div className="w-full md:w-1/2 md:text-right" variants={fadeIn}>
                    <h3 className="text-4xl font-black uppercase mb-4">2. Vitamin-rich.</h3>
                    <div className="bg-white border-r-8 border-[#FF91B6] pr-6 py-4">
                        <p className="text-xl font-bold">Packed with Vitamins A, D, E & K.</p>
                        <p className="mt-2 font-medium opacity-80">Essential building blocks for repair and collagen production.</p>
                    </div>
                </motion.div>
            </motion.div>

            {/* BLOCK 3: DROPLET */}
            <motion.div
                className="flex flex-col md:flex-row items-center gap-12"
                initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}
            >
                <motion.div className="w-full md:w-1/2 relative" variants={popIn}>
                    <div className="absolute inset-0 bg-[#1BC496] border-4 border-[#1A1A1A] translate-x-3 translate-y-3 -z-10"></div>
                    <div className="border-4 border-[#1A1A1A] bg-white p-6 flex justify-center overflow-hidden">
                        <motion.img src="/science-droplet.png" className="w-full max-w-[280px]" alt="Droplet" whileHover={{ scale: 1.1, rotate: 3 }} transition={{ type: "spring", stiffness: 300 }} />
                    </div>
                </motion.div>
                <motion.div className="w-full md:w-1/2" variants={fadeIn}>
                    <h3 className="text-4xl font-black uppercase mb-4">3. Deep absorption.</h3>
                    <div className="bg-white border-l-8 border-[#1BC496] pl-6 py-4">
                        <p className="text-xl font-bold">Sinks in, doesn&apos;t sit on top.</p>
                        <p className="mt-2 font-medium opacity-80">Tallow dives deep to feed the skin where it counts.</p>
                    </div>
                </motion.div>
            </motion.div>

        </div>
      </div>

    </section>
  );
}
