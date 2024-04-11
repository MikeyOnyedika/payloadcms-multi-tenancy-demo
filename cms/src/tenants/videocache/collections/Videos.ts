import { CollectionConfig } from "payload/types";
import { tenantPrefix } from "../../../constants";
import path from "path";
import { videocacheAdminsOrUser } from "../access/videocacheAdminsOrUsers";

export const Videos: CollectionConfig = {
  slug: tenantPrefix.VIDEOCACHE + "videos",
  access: {
    read: videocacheAdminsOrUser,
    update: videocacheAdminsOrUser,
    create: videocacheAdminsOrUser,
    delete: videocacheAdminsOrUser,
  },
  upload: {
    staticDir: path.join(__dirname, "..", "videos"),
    mimeTypes: ["video/*"],
    staticURL: path.join(path.sep, "videocache", "videos"),
  },
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title"],
  },
  fields: [
    {
      name: "title",
      type: "text",
    },
  ],
};
