import { CollectionConfig } from "payload/types";
import anyone from "../../../access/anyone";
import { tenantPrefix } from "../../../constants";

export const Users: CollectionConfig = {
  slug: tenantPrefix.VIDEOCACHE + "users",
  auth: true,
  access: {
    read: anyone,
    // update: anyone,
    create: anyone,
    // delete: anyone,
  },
  fields: [
    {
      name: "username",
      type: "text",
      required: true,
    },
    {
      name: "roles",
      type: "select",
      hasMany: true,
      defaultValue: "user",
      options: [
        {
          value: "user",
          label: "User"
        }
      ]
    }
  ],
};
