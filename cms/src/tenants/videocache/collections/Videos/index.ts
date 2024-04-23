import { CollectionConfig } from "payload/types";
import path from "path";
import { tenantPrefix } from "../../../../constants";
import userOrAdmin from "./access/userOrAdmin";

export const Videos: CollectionConfig = {
  slug: tenantPrefix.VIDEOCACHE + "videos",
  access: {
    read: userOrAdmin,
    create: userOrAdmin,
    update: userOrAdmin,
    delete: userOrAdmin
  },
  upload: {
    staticDir: path.join(__dirname, "..", "videos"),
    mimeTypes: ["video/mp4", "video/x-matroska", ".mp4", ".mkv"],
    staticURL: path.join(path.sep, "videocache", "videos"),
  },
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title"],
  },
  fields: [
    {
      name: "owner",
      type: "relationship",
      label: "Owner",
      relationTo: tenantPrefix.VIDEOCACHE + "users",
      required: true
    }
  ],
};
