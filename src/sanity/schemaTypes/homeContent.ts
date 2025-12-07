import { defineField, defineType } from "sanity";

export const homeContentType = defineType({
  name: "homeContent",
  title: "HomeContent",
  type: "document",
  fields: [
    defineField({
      name: "heroText",
      title: "Hero text",
      type: "string",
    }),
    defineField({
      name: "heroDescription",
      title: "Hero descrption",
      type: "blockContent",
    }),
    defineField({
      name: "redirectButton",
      title: "Redirect button",
      type: "string",
    }),
    defineField({
      name: "postTitle",
      title: "Post title",
      type: "string",
    }),
    defineField({
      name: "postsDescription",
      title: "Posts description",
      type: "string",
    }),
    defineField({
      name: "cards",
      title: "Cards",
      type: "array",
      of: [
        {
          type: "object",
          name: "card",
          fields: [
            {
              name: "title",
              title: "Title",
              type: "string",
            },
            {
              name: "description",
              title: "Description",
              type: "text",
            },
            {
              name: "link",
              title: "Link",
              type: "url",
            },
            {
              name: "cardDate",
              title: "Date",
              type: "date",
            },
          ],
        },
      ],
    }),
  ],
});
