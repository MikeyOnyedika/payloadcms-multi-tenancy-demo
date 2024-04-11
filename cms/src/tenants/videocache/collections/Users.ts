import { CollectionConfig } from "payload/types";
import { tenantPrefix } from "../../../constants";
import { videocacheAdminsOrUser } from "../access/videocacheAdminsOrUsers";

export const Users: CollectionConfig = {
  slug: tenantPrefix.VIDEOCACHE + "users",
  auth: true,
  access: {
    read: videocacheAdminsOrUser,
    update: videocacheAdminsOrUser,
    create: videocacheAdminsOrUser,
    delete: videocacheAdminsOrUser,
  },
  fields: [
    {
      name: "username",
      type: "text",
      required: true,
    },
  ],
};
