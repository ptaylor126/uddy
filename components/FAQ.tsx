"use client";

import { Accordion, AccordionItem } from "./ui/Accordion";
import Link from "next/link";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What is tallow and why is it good for skin?",
    answer:
      "Tallow is rendered beef fat, traditionally used for skincare for centuries. It's remarkably similar to the oils our skin naturally produces, making it highly compatible and easily absorbed. It's rich in vitamins A, D, E, and K, as well as essential fatty acids that nourish and protect the skin barrier.",
  },
  {
    question: "Is the tallow sourced ethically?",
    answer:
      "Yes, we source our tallow from grass-fed, pasture-raised cattle from UK farms. We believe in using the whole animal, and tallow is a byproduct that would otherwise go to waste. It's both ethical and sustainable.",
  },
  {
    question: "Will this help with my eczema or dry skin?",
    answer:
      "Many of our customers with eczema and dry skin have seen significant improvements. Tallow's natural composition closely mimics human sebum, helping to restore and maintain the skin's moisture barrier. However, everyone's skin is different, so we recommend patch testing first.",
  },
  {
    question: "What does it smell like?",
    answer:
      "Our face balm is lightly scented with natural lavender essential oil, which provides a subtle, calming fragrance. There's no 'beefy' smell - just a gentle, pleasant scent that dissipates quickly after application.",
  },
];

interface FAQProps {
  showAll?: boolean;
  limit?: number;
}

export default function FAQ({ showAll = false, limit = 4 }: FAQProps) {
  const displayFaqs = showAll ? faqs : faqs.slice(0, limit);

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {!showAll && (
          <div className="text-center mb-12">
            <span className="section-label text-[#E8899E] mb-4 block">
              Got Questions?
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4 text-[#1A1A1A]">
              Frequently asked questions
            </h2>
            <p className="text-xl text-[#1A1A1A]">
              Everything you need to know about our tallow face balm.
            </p>
          </div>
        )}

        <Accordion>
          {displayFaqs.map((faq, index) => (
            <AccordionItem key={index} title={faq.question}>
              <p className="text-[#1A1A1A] leading-relaxed">{faq.answer}</p>
            </AccordionItem>
          ))}
        </Accordion>

        {!showAll && (
          <div className="text-center mt-10">
            <Link
              href="/faq"
              className="text-[#E8899E] hover:text-[#D4768A] font-bold text-lg transition-colors"
            >
              View all FAQs &rarr;
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
