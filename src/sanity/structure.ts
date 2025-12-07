import { CalendarIcon, CropIcon } from "@sanity/icons";
import { AddUserIcon } from "@sanity/icons";
import { ClipboardIcon } from "@sanity/icons";
import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("I am here")
    .items([
      S.documentTypeListItem("post").title("Posts").icon(ClipboardIcon),
      S.documentTypeListItem("author").title("Authors").icon(AddUserIcon),
      S.divider(),
      S.documentTypeListItem("card").title("Card").icon(CropIcon),
      S.documentTypeListItem("homeContent")
        .title("HomeContent")
        .icon(CalendarIcon),

      ...S.documentTypeListItems().filter(
        (item) =>
          item.getId() &&
          !["post", "card", "author", "homeContent"].includes(item.getId()!)
      ),
    ]);
