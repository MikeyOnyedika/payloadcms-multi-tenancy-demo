import { GlobalConfig } from "payload/types";
import { tenantPrefix } from "../../../constants";

const Header: GlobalConfig = {
  slug: tenantPrefix.CARSHOWCASE + "header",
  access: {
    
  },
  fields: [
    {
      name: "companyName",
      type: "text",
      label: "Company Name",
    },
  ],
};

export default Header;
