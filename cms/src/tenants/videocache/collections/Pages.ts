import { CollectionConfig } from "payload/types";
import { tenantPrefix } from "../../../constants";
import { videocacheAdminsOrUser } from "../access/videocacheAdminsOrUsers";
import { videocacheAdmins } from "../access/videocacheAdmins";

export const Pages: CollectionConfig = {
  slug: tenantPrefix.VIDEOCACHE + "pages",
  access: {
    read: videocacheAdminsOrUser,
    update: videocacheAdmins,
    create: videocacheAdmins,
    delete: videocacheAdmins,
  },
  fields: [
    {
      name: "metaInfo",
      type: "group",
      fields: [
        {
          name: "title",
          type: "text",
          label: "Title",
        },
        {
          name: "description",
          type: "textarea",
          label: "Description",
        },
      ],
    },
  ],
};
