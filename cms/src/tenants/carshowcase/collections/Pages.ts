import { CollectionConfig } from "payload/types";
import { tenantPrefix } from "../../../constants";
import MetaData from "../../../fields/MetaData";
import Hero from "../blocks/Hero";
import Partners from "../blocks/Partners";
import SocialLinks from "../blocks/SocialLinks";
import CarAlbumCards from "../blocks/CarAlbumCards";
import { carshowcaseAdmin } from "../access/carshowcaseAdmin";
import { carshowcaseAdminOrUser } from "../access/carshowcaseAdminOrUser";

export const Pages: CollectionConfig = {
  slug: tenantPrefix.CARSHOWCASE + "pages",
  admin: {
    useAsTitle: "slug",
    defaultColumns: ["slug", "id"],
  },
  access: {
    read: carshowcaseAdminOrUser,
    update: carshowcaseAdmin,
    create: carshowcaseAdmin,
    delete: carshowcaseAdmin
  },
  fields: [
    {
      name: "slug",
      label: "Slug",
      type: "text",
      required: true,
      saveToJWT: true,
      admin: {
        position: "sidebar",
      },
    },
    MetaData,
    {
      name: "content",
      type: "blocks",
      label: "Content",
      admin: {
        initCollapsed: true,
      },
      blocks: [Hero, Partners, SocialLinks, CarAlbumCards],
    },
  ],
};

export default Pages;
