import { GlobalConfig } from "payload/types";
import { tenantPrefix } from "../../../../constants";

const Footer: GlobalConfig = {
  slug: tenantPrefix.CARSHOWCASE + "footer",
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