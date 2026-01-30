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
      <header className="min-h-[80vh] flex flex-col items-center justify-center relative bg-paper pt-2 pb-16 px-6">

        {/* The Photo Frame */}
        <div className="relative bg-white p-4 pb-16 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] rotate-2 border-4 border-[#1A1A1A] max-w-2xl w-full z-10">
          {/* Tape Strip */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-10 tape rotate-3 z-20"></div>

          {/* Main Photo */}
          <div className="bg-gray-200 aspect-video w-full border-2 border-[#1A1A1A] overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
             <Image
               src="/promo-8.png"
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
        <h1 className="mt-20 text-5xl md:text-7xl font-black uppercase text-center leading-[0.9] text-[#3D3D3D] relative z-20">
            Two Different <br /> <span className="text-[#F4A7C1]">Skin Stories.</span>
        </h1>
      </header>

      {/* SECTION 1: THE PROBLEM (JACK) - DARK MODE */}
      <section className="py-24 bg-[#1A1A1A] text-[#FFFDF5] border-t-4 border-b-4 border-[#1A1A1A] relative overflow-hidden">
         <div className="container mx-auto px-6 max-w-4xl relative z-10">
            {/* Annotation */}
            <div className="absolute -top-10 right-0 rotate-12">
                <span className="font-script text-[#1BC496] text-4xl">Jack&apos;s Story →</span>
            </div>

            <h2 className="text-4xl font-black uppercase mb-8 text-white">
                &quot;My skin was always a problem to solve.&quot;
            </h2>

            <div className="space-y-6 text-xl font-medium leading-relaxed opacity-90 border-l-4 border-[#FF91B6] pl-8">
                <p>From childhood eczema to teenage acne, doctor visits turned into years of trial-and-error. Topical lotions. Steroid creams. Antibiotics. Everything promised results, and most of it made things worse.</p>
                <p>By the time I met Hollie, I had pretty much given up. Skincare felt like false hope.</p>
            </div>
         </div>
      </section>

      {/* SECTION 2: HOLLIE'S STORY (The Solution) */}
      <section className="py-24 bg-[#FF91B6] text-[#1A1A1A] border-b-4 border-[#1A1A1A] relative overflow-hidden">
          <div className="container mx-auto px-6 max-w-5xl flex flex-col md:flex-row items-center gap-12 relative z-10">

              {/* 1. THE ANNOTATION (Mirrors Jack's) */}
              <div className="absolute top-0 left-6 md:-left-4 rotate-[-6deg]">
                  <span className="font-script text-white text-4xl md:text-5xl drop-shadow-md">Hollie&apos;s Story ⤵</span>
              </div>

              {/* 2. THE VISUAL (The Pot) */}
              <div className="w-full md:w-1/2 relative mt-12 md:mt-0">
                  <div className="bg-white p-2 border-4 border-[#1A1A1A] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] -rotate-2 relative z-10 group hover:rotate-0 transition-transform duration-300">
                      <Image src="/promo-2.jpg" alt="Tallow Balm Texture" width={500} height={256} className="w-full h-64 object-cover border border-[#1A1A1A]" />
                  </div>
                  {/* Sticker */}
                  <div className="absolute -bottom-6 -right-2 bg-white px-6 py-3 border-2 border-[#1A1A1A] rotate-3 z-20 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                      <p className="font-script text-xl text-[#1A1A1A]">The Magic Pot!</p>
                  </div>
              </div>

              {/* 3. THE COPY */}
              <div className="w-full md:w-1/2">
                  <h2 className="text-4xl md:text-5xl font-black uppercase mb-6 leading-[0.9]">
                      &quot;I was obsessed with <span className="text-white">ingredients.&quot;</span>
                  </h2>

                  <div className="space-y-6 text-lg font-medium leading-relaxed border-l-4 border-white pl-6">
                      <p>
                          I was lucky. I was blessed with &quot;that skin&quot;—the kind people ask about. Skincare wasn&apos;t a struggle for me; it was a passion. I loved hunting down products that were ethical, high-quality, and actually did what they promised.
                      </p>
                      <p>
                          So when Jack gave up, I didn&apos;t. I kept researching. I went down a rabbit hole of ancestral skincare and found one recurring hero:{" "}
                          <span className="bg-white px-1 border-2 border-[#1A1A1A] ml-1 font-black transform -rotate-1 inline-block">BEEF TALLOW.</span>
                      </p>
                      <p>
                          I started rendering fat in our kitchen (Jack thought I&apos;d lost it). But I whipped up a simple balm and convinced him to try it.
                      </p>
                  </div>
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
          <h2 className="text-3xl md:text-4xl font-black uppercase text-white drop-shadow-[3px_3px_0px_rgba(0,0,0,1)] mb-6 leading-relaxed">
            Skin Doesn&apos;t Need Fighting.<br /> It Needs Feeding.
          </h2>
          <p className="text-xl font-bold text-[#1A1A1A] mb-8">
            Ready to try it?
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
