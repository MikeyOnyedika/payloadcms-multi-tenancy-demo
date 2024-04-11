import { GlobalConfig } from "payload/types";
import { tenantPrefix } from "../../../constants";
import { videocacheAdmins } from "../access/videocacheAdmins";

const Nav: GlobalConfig = {
  slug: tenantPrefix.VIDEOCACHE + "nav",
  access: {
    read: videocacheAdmins,
    update: videocacheAdmins,
  },
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

export default Nav;
