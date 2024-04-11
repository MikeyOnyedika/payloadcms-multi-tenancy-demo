import { GlobalConfig } from "payload/types";
import { tenantPrefix } from "../../../constants";
import { carshowcaseAdminOrUser } from "../access/carshowcaseAdminOrUser";
import { carshowcaseAdmin } from "../access/carshowcaseAdmin";

const Header: GlobalConfig = {
  slug: tenantPrefix.CARSHOWCASE + "header",
  access: {
    read: carshowcaseAdminOrUser,
    update: carshowcaseAdmin,
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
