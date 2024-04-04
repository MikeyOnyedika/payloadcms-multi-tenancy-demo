import { GlobalConfig } from "payload/types";
import { tenantPrefix } from "../../../constants";

const Header: GlobalConfig = {
  slug: tenantPrefix.CARSHOWCASE + "header",
  fields: [
    {
      name: "companyName",
      type: "text",
      label: "Company Name",
    },
  ],
};

export default Header;
