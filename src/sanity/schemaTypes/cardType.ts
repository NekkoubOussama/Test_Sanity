import { defineType } from "sanity";

export const cardType = defineType({
  name: "card",
  title: "Card",
  type: "document",
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
      name: "date",
      title: "Date",
      type: "datetime",
    },
  ],
});
