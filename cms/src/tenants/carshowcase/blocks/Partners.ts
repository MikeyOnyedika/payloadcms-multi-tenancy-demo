import { Block } from "payload/types";
import { tenantPrefix } from "../../../constants";

const Partners: Block = {
  slug: tenantPrefix.CARSHOWCASE + "partners",
  fields: [
    {
      name: "title",
      type: "text",
      label: "Section Title",
    },
    {
      name: "partners",
      type: "array",
      label: "Partners",
      fields: [
        {
          name: "name",
          type: "text",
          label: "Name",
        },
        {
          name: "logo",
          type: "upload",
          relationTo: tenantPrefix.CARSHOWCASE + "images",
          label: "Logo",
        },
      ],
    },
  ],
};

export default Partners;
