import { CollectionConfig } from "payload/types";
import { tenantPrefix } from "../../../constants";
import MetaData from "../../../fields/MetaData";
import Hero from "../blocks/Hero";
import Partners from "../blocks/Partners";
import SocialLinks from "../blocks/SocialLinks";

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
      // TODO: see if you can use CarAlbumCards or if you should just directly query the CarAlbums collection. The major incentive for CarAlbumCards is the title "Categories" and just getting the name and background Image for that album instead of it's whole data
      blocks: [Hero, Partners, SocialLinks],
    },
  ],
};

export default Pages;
