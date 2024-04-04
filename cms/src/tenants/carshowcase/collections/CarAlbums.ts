import { CollectionConfig } from "payload/types";
import { tenantPrefix } from "../../../constants";
import MetaData from "../../../fields/MetaData";

const CarAlbums: CollectionConfig = {
  slug: tenantPrefix.CARSHOWCASE + "car_albums",
  admin: {
    useAsTitle: "title",
  },
  fields: [
    {
      name: "slug",
      type: "text",
      label: "Slug",
    },
    MetaData,
    {
      name: "cars",
      type: "array",
      admin: {
        initCollapsed: true,
      },
      fields: [
        {
          name: "modelName",
          label: "Model Name",
          type: "text",
        },
        {
          name: "image",
          label: "Image",
          type: "upload",
          relationTo: tenantPrefix.CARSHOWCASE + "images",
        },
      ],
    },
  ],
};

export default CarAlbums;
