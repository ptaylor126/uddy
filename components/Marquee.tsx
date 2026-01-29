"use client";

export default function Marquee() {
  return (
    <div className="bg-uddy-black text-uddy-pink py-3 border-b-4 border-uddy-black overflow-hidden relative z-50">
      <div className="whitespace-nowrap flex gap-12 text-xl font-black uppercase tracking-widest animate-marquee">
        <span>Don&apos;t have a cow man</span> <span>★</span> <span>Grass Fed Tallow</span> <span>★</span> <span>Raw Honey</span> <span>★</span> <span>Made in the UK</span> <span>★</span> <span>Zero Junk</span> <span>★</span> <span>Don&apos;t have a cow man</span> <span>★</span> <span>Grass Fed Tallow</span> <span>★</span> <span>Raw Honey</span> <span>★</span>
      </div>
    </div>
  );
}
