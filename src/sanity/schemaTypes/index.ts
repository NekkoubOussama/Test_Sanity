import { type SchemaTypeDefinition } from "sanity";
import { blockContentType } from "./blockContentType";
import { postType } from "./postType";
import { authorType } from "./authorType";
import { homeContentType } from "./homeContent";
import { cardType } from "./cardType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, cardType, postType, authorType, homeContentType],
};
