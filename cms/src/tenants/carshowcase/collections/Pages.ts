import { CollectionConfig } from "payload/types";
import { tenantPrefix } from "../../../constants";
import MetaData from "../../../fields/MetaData";
import Hero from "../blocks/Hero";
import Partners from "../blocks/Partners";
import SocialLinks from "../blocks/SocialLinks";
import CarAlbumCards from "../blocks/CarAlbumCards";

export const Pages: CollectionConfig = {
  slug: tenantPrefix.CARSHOWCASE + "pages",
  admin: {
    useAsTitle: "slug",
    defaultColumns: ["slug", "id"],
  },
  fields: [
    {
      name: "slug",
      label: "Slug",
      type: "text",
      required: true,
      saveToJWT: true,
    },
    MetaData,
    {
      name: "content",
      type: "blocks",
      label: "Content",
      blocks: [Hero, Partners, CarAlbumCards, SocialLinks],
    },
  ],
};

export default Pages;
