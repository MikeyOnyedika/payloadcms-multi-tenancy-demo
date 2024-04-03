import { GlobalConfig } from "payload/types";
import { tenantPrefix } from "../../constants";

const Nav: GlobalConfig = {
  slug: tenantPrefix.VIDEOCACHE + "nav",
  fields: [
    {
      name: "navItem",
      type: "array",
      fields: [
        {
          name: "title",
          type: "text",
        },
        {
          name: "url",
          type: "text",
        },
      ],
    },
  ],
};

export default Nav