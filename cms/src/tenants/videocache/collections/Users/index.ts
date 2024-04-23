import { CollectionConfig } from "payload/types";
import anyone from "../../../../access/anyone";
import userOrAdmin from "./access/userOrAdmin";
import { tenantPrefix } from "../../../../constants";

export const Users: CollectionConfig = {
  slug: tenantPrefix.VIDEOCACHE + "users",
  auth: true,
  access: {
    read: userOrAdmin,
    update: userOrAdmin,
    create: anyone,
    delete: userOrAdmin,
  },
  fields: [
    {
      name: "username",
      type: "text",
      required: true,
    }
  ],
};
