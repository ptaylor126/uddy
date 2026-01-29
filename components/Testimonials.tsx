"use client";

interface Testimonial {
  id: string;
  name: string;
  location: string;
  text: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah M.",
    location: "London",
    text: "I've struggled with dry, sensitive skin for years. This balm has been a game-changer. My skin feels calm and nourished for the first time in ages.",
    rating: 5,
  },
  {
    id: "2",
    name: "James T.",
    location: "Manchester",
    text: "Skeptical at first about tallow, but the results speak for themselves. My eczema has calmed down significantly since I started using this.",
    rating: 5,
  },
  {
    id: "3",
    name: "Emma K.",
    location: "Bristol",
    text: "Love the simplicity of the ingredients list. No nonsense, just effective skincare. The lavender scent is subtle and lovely.",
    rating: 5,
  },
  {
    id: "4",
    name: "David R.",
    location: "Edinburgh",
    text: "Finally found something that works for my problem skin without harsh chemicals. Will be ordering again!",
    rating: 5,
  },
];

// Card border colors for staggered effect
const borderColors = [
  "border-[#E8899E]", // pink
  "border-[#3EB489]", // green
  "border-[#E8899E]", // pink
  "border-[#3EB489]", // green
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${
            i < rating ? "text-[#E8899E]" : "text-gray-300"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-20 md:py-32 bg-[var(--color-cream)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-label text-[#3EB489] mb-4 block">
            Real Results
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 text-[#1A1A1A]">
            What our customers say
          </h2>
          <p className="text-xl text-[#1A1A1A] max-w-2xl mx-auto">
            Real stories from real people who&apos;ve transformed their skincare routine.
          </p>
        </div>

        {/* Staggered Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`
                bg-white rounded-3xl p-8 border-4 ${borderColors[index]}
                transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl
                ${index % 2 === 1 ? "md:translate-y-8" : ""}
              `}
            >
              {/* Quote Icon */}
              <div className={`mb-4 ${index % 2 === 0 ? "text-[#E8899E]" : "text-[#3EB489]"}`}>
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Testimonial Text */}
              <p className="text-xl md:text-2xl text-[#1A1A1A] leading-relaxed mb-6 italic">
                &quot;{testimonial.text}&quot;
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold text-[#1A1A1A]">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-[#1A1A1A]/70 font-medium">
                    {testimonial.location}
                  </p>
                </div>
                <StarRating rating={testimonial.rating} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
