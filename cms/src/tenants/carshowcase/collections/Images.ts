import { CollectionConfig } from "payload/types";
import { tenantPrefix } from "../../../constants";
import path from "path";

const Images: CollectionConfig = {
  slug: tenantPrefix.CARSHOWCASE + "images",
  upload: {
    staticDir: path.join(__dirname, "..", "media", "images"), // url of where the image is stored
    staticURL: path.join(path.sep, "carshowcase", "media", "images"),  //url used to get the image by a frontend
    mimeTypes: ["image/*"],
    imageSizes: [
      {
        name: "thumbnail",
        width: 200,
      },
      {
        name: "large",
        width: 800,
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
