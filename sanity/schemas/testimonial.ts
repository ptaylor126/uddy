import { defineType, defineField } from "sanity";

export default defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Customer Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "text",
      title: "Review Text",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "rating",
      title: "Rating (1-5)",
      type: "number",
      validation: (Rule) => Rule.required().min(1).max(5),
      initialValue: 5,
    }),
    defineField({
      name: "featured",
      title: "Featured",
      type: "boolean",
      description: "Show this testimonial on the homepage",
      initialValue: false,
    }),
    defineField({
      name: "date",
      title: "Review Date",
      type: "date",
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "text",
      rating: "rating",
    },
    prepare({ title, subtitle, rating }) {
      return {
        title: `${title} - ${"★".repeat(rating || 0)}`,
        subtitle: subtitle?.substring(0, 50) + "...",
      };
    },
  },
});
