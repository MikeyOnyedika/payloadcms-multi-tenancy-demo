import { CollectionConfig } from "payload/types";
import anyone from "../access/anyone";
import superAdmins from "../access/superAdmins";
import superAdminsOrSelf from "../access/superAdminsOrSelf";

const AdminUsers: CollectionConfig = {
  slug: "users",
  auth: true,
  admin: {
    useAsTitle: "email",
    defaultColumns: ["username", "roles"],
  },
  access: {
    create: superAdmins,
    read: anyone,
    delete: superAdminsOrSelf, // non-superadmin users can only delete themselves. But admin user can delete user
    update: superAdminsOrSelf,
  },
  fields: [
    {
      name: "username",
      type: "text",
      label: "Username",
    },
    {
      name: "roles",
      type: "select",
      hasMany: true,
      access: {
        read: anyone,
        update: superAdmins,
      },
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
    {
      name: "tenants",
      type: "relationship",
      label: "Tenants",
      relationTo: "tenants",
      hasMany: true,
    },
  ],
};

export default AdminUsers;
