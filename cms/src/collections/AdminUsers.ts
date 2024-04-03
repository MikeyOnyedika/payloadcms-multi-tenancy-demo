import { CollectionConfig } from "payload/types";

const AdminUsers: CollectionConfig = {
  slug: "users",
  auth: true,
  admin: {
    useAsTitle: "email",
  },
  fields: [
    // Email added by default
    // Add more fields as needed
    {
      name: "roles",
      type: "select",
      defaultValue: "tenant-admin",
      options: [
        {
          label: "Super Admin",
          value: "super-admin",
        },
        {
          label: "Tenant Admin",
          value: "tenant-admin",
        },
      ],
    },
  ],
};

export default AdminUsers;
