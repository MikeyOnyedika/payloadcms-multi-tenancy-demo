import { Block } from "payload/types";
import { tenantPrefix } from "../../../constants";

const SocialLinks: Block = {
  slug: tenantPrefix.CARSHOWCASE + "social_links",
  fields: [
    {
      name: "label",
      label: "Label",
      type: "text",
    },
    {
      name: "links",
      type: "array",
      fields: [
        {
          name: "name",
          type: "text",
          label: "Link Name",
        },
        {
          name: "url",
          type: "text",
          label: "URL",
        },
        {
          name: "logo",
          type: "upload",
          relationTo: tenantPrefix.CARSHOWCASE + "images",
        },
      ],
    },
  ],
};

export default SocialLinks;
