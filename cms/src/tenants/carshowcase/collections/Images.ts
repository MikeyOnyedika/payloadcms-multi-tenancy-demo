import { CollectionConfig } from "payload/types";
import { tenantPrefix } from "../../../constants";
import path from "path";
import { carshowcaseAdmin } from "../access/carshowcaseAdmin";
import visitor from "../access/visitor";

const Images: CollectionConfig = {
  slug: tenantPrefix.CARSHOWCASE + "images",
  access: {
    read: visitor,
    update: carshowcaseAdmin,
    create: carshowcaseAdmin,
    delete: carshowcaseAdmin,
  },
  upload: {
    staticDir: path.join(__dirname, "..", "media", "images"), // url of where the image is stored
    staticURL: path.join(path.sep, "carshowcase", "media", "images"), //url used to get the image by a frontend
    mimeTypes: ["image/*"],
    imageSizes: [
      {
        name: "thumbnail",
        width: 300,
      },
      {
        name: "mid",
        width: 800,
      },
      {
        name: "large",
        width: 1200,
      },
    ],
    adminThumbnail: "thumbnail",
  },
  fields: [
    {
      name: "altText",
      type: "text",
      label: "Alt Text",
    },
  ],
};

export default Images;
