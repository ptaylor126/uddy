import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type SanityImageSource = any;

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "your-project-id";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const apiVersion = "2024-01-01";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: process.env.NODE_ENV === "production",
});

const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

// GROQ Queries
export const queries = {
  product: `*[_type == "product" && slug.current == $slug][0]{
    name,
    slug,
    subtitle,
    price,
    size,
    description,
    ingredients,
    images[]{
      _key,
      asset->{
        _id,
        url
      },
      alt,
      hotspot
    },
    inStock
  }`,

  allProducts: `*[_type == "product"]{
    _id,
    name,
    slug,
    subtitle,
    price,
    images[0]{
      asset->{
        _id,
        url
      },
      alt
    },
    inStock
  }`,

  faqs: `*[_type == "faq"] | order(order asc){
    _id,
    question,
    answer,
    category
  }`,

  testimonials: `*[_type == "testimonial" && featured == true] | order(date desc){
    _id,
    name,
    text,
    rating,
    date
  }`,

  siteSettings: `*[_type == "siteSettings"][0]{
    title,
    description,
    logo{
      asset->{
        _id,
        url
      }
    },
    announcement,
    social,
    contactEmail
  }`,
};
