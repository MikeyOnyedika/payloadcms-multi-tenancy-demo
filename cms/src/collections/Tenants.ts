import { CollectionConfig } from "payload/types";
import superAdmins from "../access/superAdmins";
import admins from "../access/admins";
import { superAdminsOrCustomers } from "../access/superAdminsOrCustomers";

const Tenants: CollectionConfig = {
  slug: "tenants",
  admin: {
    useAsTitle: "name",
  },
  access: {
    read: superAdminsOrCustomers,
    create: superAdmins,
    delete: superAdmins,
    update: superAdminsOrCustomers,
  },
  fields: [
    {
      name: "name",
      type: "text",
      label: "Name",
    },
    {
      name: "slug",
      type: "text",
      label: "Slug",
      required: true,
      access: {
        read: admins,
        update: superAdmins,
        create: superAdmins,
      },
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
