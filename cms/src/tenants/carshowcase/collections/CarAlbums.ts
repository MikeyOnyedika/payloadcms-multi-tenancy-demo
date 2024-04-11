import { CollectionConfig } from "payload/types";
import { tenantPrefix } from "../../../constants";
import MetaData from "../../../fields/MetaData";
import { carshowcaseAdmin } from "../access/carshowcaseAdmin";
import { carshowcaseAdminOrUser } from "../access/carshowcaseAdminOrUser";

const CarAlbums: CollectionConfig = {
  slug: tenantPrefix.CARSHOWCASE + "car_albums",
  admin: {
    useAsTitle: "slug",
    defaultColumns: ["slug", "cars", "id"],
  },
  access: {
    read: carshowcaseAdminOrUser,
    update: carshowcaseAdmin,
    create: carshowcaseAdmin,
    delete: carshowcaseAdmin,
  },
  fields: [
    {
      name: "slug",
      type: "text",
      label: "Slug",
    },
    MetaData,
    {
      name: "backgroundImage",
      type: "upload",
      relationTo: tenantPrefix.CARSHOWCASE + "images",
    },
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
