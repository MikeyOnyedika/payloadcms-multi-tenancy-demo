import { CollectionConfig } from "payload/types";
import { tenantPrefix } from "../constants";

const Tenants: CollectionConfig = {
  slug: "tenants",
  fields: [
    {
      name: "name",
      type: "text",
      label: "Name",
    },
    {
      name: "domains",
      type: "array",
      label: "Domains",
      fields: [
        {
          name: "domain",
          type: "text",
          label: "Domain",
        },
      ],
    },
  ],
};

export default Tenants;
