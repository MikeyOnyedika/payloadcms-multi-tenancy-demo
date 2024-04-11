import { GlobalConfig } from "payload/types";
import { tenantPrefix } from "../../../constants";
import { carshowcaseAdmin } from "../access/carshowcaseAdmin";
import { carshowcaseAdminOrUser } from "../access/carshowcaseAdminOrUser";

const Footer: GlobalConfig = {
  slug: tenantPrefix.CARSHOWCASE + "footer",
  access: {
    read: carshowcaseAdminOrUser,
    update: carshowcaseAdmin,
  },
  fields: [
    {
      name: "copyrightNotice",
      type: "text",
      required: true,
      label: "Copyright Notice",
    },
  ],
};

export default Footer;
