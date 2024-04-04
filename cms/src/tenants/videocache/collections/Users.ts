import { CollectionConfig } from "payload/types";
import { tenantPrefix } from "../../../constants";

export const Users: CollectionConfig = {
  slug: tenantPrefix.VIDEOCACHE + "users",
  auth: true,
  fields: [
    {
      name: "username",
      type: "text",
      required: true,
    },
  ],
};

