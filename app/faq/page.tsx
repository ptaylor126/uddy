import { Metadata } from "next";
import Link from "next/link";
import { Accordion, AccordionItem } from "@/components/ui/Accordion";
import { PRODUCT, formatPrice, SHIPPING } from "@/lib/utils";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about Uddy Skincare, our tallow face balm, ingredients, shipping, and more.",
};

interface FAQCategory {
  title: string;
  faqs: { question: string; answer: string }[];
}

const faqCategories: FAQCategory[] = [
  {
    title: "About Tallow",
    faqs: [
      {
        question: "What is tallow and why is it good for skin?",
        answer:
          "Tallow is rendered beef fat, traditionally used for skincare for centuries. It's remarkably similar to the oils our skin naturally produces (sebum), making it highly compatible and easily absorbed. It's rich in vitamins A, D, E, and K, as well as essential fatty acids that nourish and protect the skin barrier.",
      },
      {
        question: "Is the tallow sourced ethically?",
        answer:
          "Yes, we source our tallow from grass-fed, pasture-raised cattle from UK farms. We believe in using the whole animal, and tallow is a byproduct that would otherwise go to waste. It's both ethical and sustainable.",
      },
      {
        question: "Does it smell like beef?",
        answer:
          "No! Our face balm is lightly scented with natural lavender essential oil, which provides a subtle, calming fragrance. Properly rendered tallow has a very neutral smell, and any trace of it is completely masked by the lavender.",
      },
      {
        question: "Is tallow comedogenic (will it clog pores)?",
        answer:
          "Tallow is generally considered non-comedogenic because its fatty acid profile closely matches human sebum. This means it's easily absorbed rather than sitting on top of the skin. However, everyone's skin is different, so we recommend patch testing if you have concerns.",
      },
    ],
  },
  {
    title: "Product Questions",
    faqs: [
      {
        question: "What are the ingredients?",
        answer:
          "Our Cow Tallow Face Balm contains just three ingredients: grass-fed beef tallow, lavender essential oil, and vitamin E. That's it. No fillers, no preservatives, no synthetic fragrances.",
      },
      {
        question: "How do I use the face balm?",
        answer:
          "Start with clean, slightly damp skin. Take a small amount (pea-sized) and warm it between your fingertips, then gently press and pat into your face and neck. Use morning and/or evening as needed. A little goes a long way!",
      },
      {
        question: "How long does one jar last?",
        answer:
          "With regular use (morning and evening), one 60ml jar typically lasts 2-3 months. Since you only need a small amount each time, it's quite economical.",
      },
      {
        question: "Is this suitable for all skin types?",
        answer:
          "Yes! Tallow is compatible with all skin types because it mimics human sebum. It's particularly beneficial for dry, sensitive, or problem skin, but even oily skin can benefit as tallow can help balance natural oil production.",
      },
      {
        question: "Can I use this on my body too?",
        answer:
          "Absolutely! While formulated for the face, our tallow balm works wonderfully on dry patches anywhere - hands, elbows, feet, you name it. It's especially good for rough or cracked skin.",
      },
    ],
  },
  {
    title: "Skin Concerns",
    faqs: [
      {
        question: "Will this help with my eczema?",
        answer:
          "Many customers with eczema have seen significant improvements with tallow-based skincare. The natural fatty acids help restore and maintain the skin barrier, which is often compromised in eczema. However, results vary and we recommend consulting with a dermatologist for severe conditions.",
      },
      {
        question: "Is this safe for sensitive skin?",
        answer:
          "Tallow is particularly well-suited for sensitive skin because of its simple formulation and natural compatibility with human skin. We always recommend patch testing first if you have very reactive skin.",
      },
      {
        question: "Can I use this if I have acne?",
        answer:
          "Many people with acne-prone skin have success with tallow. Because it closely mimics natural sebum, it can actually help balance oil production. Start with a small amount and see how your skin responds. If your acne is related to hormones or other factors, results may vary.",
      },
      {
        question: "Is this safe during pregnancy?",
        answer:
          "Our ingredients are all natural and generally considered safe, but we always recommend consulting with your healthcare provider before using any new products during pregnancy.",
      },
    ],
  },
  {
    title: "Orders & Shipping",
    faqs: [
      {
        question: "Where do you ship to?",
        answer:
          "Currently, we only ship within the UK. We're working on expanding to other countries in the future.",
      },
      {
        question: "How much is shipping?",
        answer: `Standard UK shipping is ${formatPrice(SHIPPING.standard)}. Orders over ${formatPrice(SHIPPING.freeThreshold)} qualify for free shipping.`,
      },
      {
        question: "How long does delivery take?",
        answer:
          "Orders are dispatched within 1-2 business days. Standard delivery typically takes 2-5 business days within the UK.",
      },
      {
        question: "What's your returns policy?",
        answer:
          "We want you to love your purchase. If you're not completely satisfied, contact us within 30 days and we'll make it right. For hygiene reasons, we can only accept returns on unopened products.",
      },
      {
        question: "Do you offer subscriptions?",
        answer:
          "Not currently, but it's something we're considering for the future. Sign up for our newsletter to be the first to know about new offerings.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-[var(--color-charcoal)]/70">
            Everything you need to know about our products and tallow skincare.
          </p>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-8 md:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h2 className="text-2xl font-serif mb-6 text-[var(--color-pink)]">
                {category.title}
              </h2>
              <Accordion className="bg-white rounded-2xl p-4 md:p-6">
                {category.faqs.map((faq, faqIndex) => (
                  <AccordionItem
                    key={faqIndex}
                    title={faq.question}
                    defaultOpen={categoryIndex === 0 && faqIndex === 0}
                  >
                    <p>{faq.answer}</p>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-serif mb-4">
            Still have questions?
          </h2>
          <p className="text-[var(--color-charcoal)]/70 mb-6">
            We&apos;re here to help. Reach out and we&apos;ll get back to you as
            soon as we can.
          </p>
          <a
            href="mailto:hello@uddyskincare.com"
            className="inline-flex items-center justify-center bg-[var(--color-pink)] text-[var(--color-charcoal)] px-8 py-4 rounded-full font-medium hover:bg-[#d9a3a7] transition-colors"
          >
            Email Us
          </a>
        </div>
      </section>

      {/* Shop CTA */}
      <section className="py-16 md:py-24 bg-[var(--color-green)]/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">
            Ready to try tallow?
          </h2>
          <p className="text-[var(--color-charcoal)]/70 mb-8">
            Experience simple, effective skincare.
          </p>
          <Link
            href="/product/cow-tallow-face-balm"
            className="inline-flex items-center justify-center bg-[var(--color-charcoal)] text-[var(--color-cream)] px-8 py-4 rounded-full font-medium hover:bg-[var(--color-charcoal)]/90 transition-colors text-lg"
          >
            Shop Now - {formatPrice(PRODUCT.price)}
          </Link>
        </div>
      </section>
    </div>
  );
}
