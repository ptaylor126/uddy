import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PRODUCT, formatPrice } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "We're Jack and Hollie. Uddy started with two very different relationships to skin and one simple discovery: tallow.",
};

export default function AboutPage() {
  return (
    <main className="bg-[#FFFDF5] text-[#1A1A1A] font-sans overflow-x-hidden">

      {/* HERO SECTION: THE POLAROID */}
      <header className="min-h-[90vh] flex flex-col items-center justify-center relative bg-paper py-20 px-6">

        {/* The Photo Frame */}
        <div className="relative bg-white p-4 pb-16 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] rotate-2 border-4 border-[#1A1A1A] max-w-2xl w-full z-10">
          {/* Tape Strip */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-10 tape rotate-3 z-20"></div>

          {/* Main Photo */}
          <div className="bg-gray-200 aspect-video w-full border-2 border-[#1A1A1A] overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
             <Image
               src="/promo-6.jpg"
               alt="Jack and Hollie"
               width={800}
               height={450}
               className="w-full h-full object-cover"
             />
          </div>

          {/* Handwritten Note */}
          <div className="absolute bottom-4 left-0 w-full text-center">
             <p className="font-script text-3xl text-[#1A1A1A]">Jack & Hollie (and the balm)</p>
          </div>
        </div>

        {/* Floating Headline */}
        <h1 className="mt-12 text-6xl md:text-8xl font-black uppercase text-center leading-[0.9] text-stroke-white relative z-20 drop-shadow-md">
            Two Different <br /> <span className="text-uddy-pink" style={{ WebkitTextStroke: '2px #1A1A1A', color: '#FF91B6' }}>Skin Stories.</span>
        </h1>
      </header>

      {/* SECTION 1: THE PROBLEM (JACK) - DARK MODE */}
      <section className="py-24 bg-[#1A1A1A] text-[#FFFDF5] border-t-4 border-b-4 border-[#1A1A1A] relative overflow-hidden">
         <div className="container mx-auto px-6 max-w-4xl relative z-10">
            {/* Annotation */}
            <div className="absolute -top-10 right-0 rotate-12">
                <span className="font-script text-[#1BC496] text-4xl">Jack&apos;s Story →</span>
            </div>

            <h2 className="text-4xl font-black uppercase mb-8 text-[#1BC496]">
                &quot;My skin was always a problem to solve.&quot;
            </h2>

            <div className="space-y-6 text-xl font-medium leading-relaxed opacity-90 border-l-4 border-[#FF91B6] pl-8">
                <p>From childhood eczema to teenage acne, doctor visits turned into years of trial-and-error. Topical lotions. Steroid creams. Antibiotics. Everything promised results, and most of it made things worse.</p>
                <p>By the time I met Hollie, I had pretty much given up. Skincare felt like false hope.</p>
            </div>
         </div>
      </section>

      {/* SECTION 2: THE SOLUTION (HOLLIE) - PINK MODE */}
      <section className="py-24 bg-[#FF91B6] text-[#1A1A1A] border-b-4 border-[#1A1A1A] relative">
         <div className="container mx-auto px-6 max-w-5xl flex flex-col md:flex-row items-center gap-12">

            {/* Image Stack */}
            <div className="w-full md:w-1/2 relative">
                <div className="bg-white p-2 border-4 border-[#1A1A1A] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] -rotate-3 relative z-10">
                    <Image
                      src="/promo-2.jpg"
                      alt="The balm texture"
                      width={500}
                      height={256}
                      className="w-full h-64 object-cover border border-[#1A1A1A]"
                    />
                </div>
                <div className="absolute -bottom-10 -right-4 bg-white px-4 py-2 border-2 border-[#1A1A1A] rotate-6 z-20">
                    <p className="font-script text-xl">The Magic Pot!</p>
                </div>
            </div>

            {/* Text */}
            <div className="w-full md:w-1/2">
                <h2 className="text-4xl font-black uppercase mb-6 bg-white inline-block px-2 border-2 border-[#1A1A1A] rotate-1">
                    Enter Beef Fat.
                </h2>
                <p className="text-lg font-bold mb-6">
                    Hollie didn&apos;t give up. One day she came home with something different. <br />
                    <span className="underline decoration-wavy decoration-[#1BC496]">Beef Tallow.</span>
                </p>
                <p className="mb-6 leading-relaxed font-medium">
                    I was skeptical. But Hollie made a simple balm at home and convinced me to try it. For the first time in years, my skin felt calm. No tightness. No constant dryness. Just skin that finally felt… normal.
                </p>
            </div>
         </div>
      </section>

      {/* SECTION 3: THE BIRTH OF UDDY */}
      <section className="py-24 bg-[#FFFDF5] border-b-4 border-[#1A1A1A]">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <span className="font-script text-[#FF91B6] text-3xl">And so...</span>
          <h2 className="text-5xl md:text-6xl font-black uppercase mt-4 mb-8">
            Uddy Was Born.
          </h2>
          <div className="bg-white border-4 border-[#1A1A1A] p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] max-w-2xl mx-auto">
            <p className="text-xl font-medium leading-relaxed mb-6">
              On a long drive from Putney to Crouch End, we talked about how many people must be stuck in the same loop I&apos;d been in.
            </p>
            <p className="text-2xl font-black text-[#1A1A1A]/70">
              Slathering their skin in things they can&apos;t pronounce, hoping something finally sticks.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4: THE NAME */}
      <section className="py-24 bg-[#FDE047] border-b-4 border-[#1A1A1A]">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h2 className="text-4xl md:text-5xl font-black uppercase mb-8">
            Why &quot;Uddy&quot;?
          </h2>
          <div className="bg-white border-4 border-[#1A1A1A] p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] inline-block -rotate-2">
            <p className="text-xl font-semibold leading-relaxed">
              Our eldest son couldn&apos;t quite say &quot;Daddy&quot; — so Jack became{" "}
              <span className="font-script text-3xl text-[#FF91B6]">&quot;Uddy&quot;</span>.
              <br /><br />
              It stuck. And somehow, it felt perfect.
              <br />
              <span className="text-[#1A1A1A]/60">Warm, personal, and a little bit playful.</span>
            </p>
          </div>
        </div>
      </section>

      {/* CLOSING SIGNATURE */}
      <section className="py-16 bg-white border-b-4 border-[#1A1A1A]">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <p className="text-2xl font-semibold text-[#1A1A1A]/80 mb-6">
            We&apos;re glad you&apos;re here.
          </p>
          <p className="font-script text-5xl text-[#FF91B6]">
            — Jack & Hollie
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#1BC496]">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h2 className="text-4xl md:text-5xl font-black uppercase text-white drop-shadow-[3px_3px_0px_rgba(0,0,0,1)] mb-6">
            Ready to Try It?
          </h2>
          <p className="text-xl font-bold text-[#1A1A1A] mb-8">
            Experience the simplicity of tallow-based skincare.
          </p>
          <Link
            href="/product/cow-tallow-face-balm"
            className="inline-block bg-[#1A1A1A] text-white text-xl font-black px-10 py-5 border-4 border-[#1A1A1A] shadow-[6px_6px_0px_0px_#FF91B6] hover:shadow-none hover:translate-x-[6px] hover:translate-y-[6px] transition-all duration-150 uppercase tracking-wide"
          >
            Shop Now — {formatPrice(PRODUCT.price)}
          </Link>
        </div>
      </section>
    </main>
  );
}
