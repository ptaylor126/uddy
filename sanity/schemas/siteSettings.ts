import { defineType, defineField } from "sanity";

export default defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Site Title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Site Description",
      type: "text",
    }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
    }),
    defineField({
      name: "announcement",
      title: "Announcement Banner",
      type: "object",
      fields: [
        {
          name: "enabled",
          title: "Show Banner",
          type: "boolean",
        },
        {
          name: "text",
          title: "Banner Text",
          type: "string",
        },
        {
          name: "link",
          title: "Banner Link (optional)",
          type: "url",
        },
      ],
    }),
    defineField({
      name: "social",
      title: "Social Media Links",
      type: "object",
      fields: [
        {
          name: "instagram",
          title: "Instagram URL",
          type: "url",
        },
        {
          name: "facebook",
          title: "Facebook URL",
          type: "url",
        },
        {
          name: "tiktok",
          title: "TikTok URL",
          type: "url",
        },
      ],
    }),
    defineField({
      name: "contactEmail",
      title: "Contact Email",
      type: "email",
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Site Settings",
      };
    },
  },
});
